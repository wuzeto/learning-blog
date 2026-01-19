


# 数据库系统核心知识点笔记
## 一、关系代数与关系演算
### 1.1 关系代数基本运算
关系代数是一种**过程性查询语言**，通过明确的运算顺序描述查询过程，核心运算包括以下几类：

| 运算类型 | 符号 | 定义与示例 |
|----------|------|------------|
| 选择（Selection） | $\sigma$ | 从关系中筛选满足条件的元组，如$\sigma_{C=D}(r \times s)$（从$r$和$s$的笛卡尔积中选$C=D$的元组） |
| 投影（Projection） | $\pi$ | 从关系中提取指定属性列，如$\pi_A(r)$（提取$r$表的$A$列） |
| 笛卡尔积（Cross-Product） | $\times$ | 两个关系的所有可能元组组合，如$r \times s$（$r$的每个元组与$s$的每个元组结合） |
| 并（Union） | $\cup$ | 合并两个同结构关系的元组，需满足“无重复”（同结构指属性个数、类型一致） |
| 差（Set-Difference） | $-$ | 从第一个关系中移除第二个关系的元组，如$\pi_{AB}(R1) - \pi_{AB}((\pi_{AB}(R1) \times R2) - R1)$ |
| 连接（Join） | $\bowtie$ | 基于属性等值条件的笛卡尔积筛选，如$r \bowtie_{C=D} s$（$r$和$s$按$C=D$连接） |
| 除法（Division） | $\div$ | 用于“包含所有”类查询，如$ABCD \div CD$（找出$A、B$的所有组合，其对应的$C、D$包含$CD$关系的所有元组） |


### 1.2 关系演算
关系演算是**非过程性查询语言**，无需指定运算顺序，仅描述“要什么”，分为元组关系演算（TRC）和域关系演算（DRC）：

#### （1）元组关系演算（TRC）
以“元组变量”为核心，描述满足条件的元组集合，形式为$\{ t \mid P(t) \}$（$t$为元组变量，$P(t)$为条件）。  
**示例**：
- 投影运算$\pi_A(r)$对应的TRC：$\{ t[A] \mid t \in r \}$（提取$r$中所有元组的$A$属性值）；
- 连接运算$r \bowtie_{C=D} s$对应的TRC：$\{ t[ABCDEF] \mid t[ABC] \in r \land t[DEF] \in s \land t.C = t.D \}$；
- 除法运算$ABCD \div CD$对应的TRC：$\{ <A,B> \mid \forall <C,D> \in R2, <A,B,C,D> \in R1 \}$（$A、B$的组合需包含$R2$中所有$C、D$对应的元组）。

#### （2）域关系演算（DRC）
以“域变量”为核心，描述属性域上的条件，形式为$\{ <x_1,x_2,...,x_n> \mid P(x_1,x_2,...,x_n) \}$（$x_i$为域变量）。  
**核心区别**：TRC关注“元组是否满足条件”，DRC关注“属性值是否满足条件”，二者表达能力等价，均为SQL提供理论基础。


## 二、SQL查询与高级用法
### 2.1 基础查询与嵌套/关联查询
#### （1）核心语法差异
- **嵌套查询（IN）**：适用于“子查询结果为离散值集合”的场景，如`SELECT deptno FROM emp WHERE sal IN (SELECT max(sal) FROM emp GROUP BY deptno)`；
- **关联查询（EXISTS）**：适用于“判断子查询是否返回结果”的场景，不依赖具体值，仅需“存在性”，如`SELECT * FROM student s WHERE EXISTS (SELECT * FROM sc WHERE sc.sno = s.sno)`（查询有选课记录的学生）。

#### （2）CTE（WITH子句）
用于定义“临时结果集”，简化复杂查询（尤其递归查询），提高可读性：
```sql
-- 示例1：计算各部门总薪资，找出总薪资最高的部门
WITH payroll (deptno, totalpay) AS (
    SELECT deptno, SUM(salary) + SUM(bonus) 
    FROM emp 
    GROUP BY deptno
)
SELECT deptno 
FROM payroll 
WHERE totalpay = (SELECT MAX(totalpay) FROM payroll);

-- 示例2：递归查询Hoover直接/间接管理的员工（含薪资筛选）
WITH agents (name, salary) AS (
    -- 基础 case：直接管理
    SELECT name, salary FROM FedEmp WHERE manager = 'Hoover'
    UNION ALL
    -- 递归 case：间接管理（agents的员工作为经理）
    SELECT f.name, f.salary 
    FROM agents AS a, FedEmp AS f 
    WHERE f.manager = a.name
)
SELECT name 
FROM agents 
WHERE salary > 100000;
```


### 2.2 SQL冷门与高级用法
#### （1）CASE表达式（行转列）
用于动态生成列，典型场景为“按类别统计数值”（如学生各课程成绩分行转列）：
```sql
SELECT sid,
    -- 课程01成绩，无成绩则为NULL
    SUM(CASE WHEN cid = '01' THEN score ELSE NULL END) AS score_01,
    SUM(CASE WHEN cid = '02' THEN score ELSE NULL END) AS score_02,
    SUM(CASE WHEN cid = '03' THEN score ELSE NULL END) AS score_03,
    AVG(score) AS avg_score  -- 平均成绩
FROM sc 
GROUP BY sid 
ORDER BY avg_score DESC;
```

#### （2）CAST函数（类型转换与外连接）
- **类型转换**：将值转换为指定数据类型，如`CAST(NULL AS VARCHAR(20))`（将NULL转为字符串类型）；
- **模拟外连接**：通过`EXCEPT ALL`分离“仅左表有”“仅右表有”“两表都有”的记录，再用`UNION ALL`合并（适用于不支持`LEFT/RIGHT JOIN`的场景）：
```sql
-- 示例：Teacher与Course的全外连接（按quarter='Fall 19'匹配）
WITH 
-- 1. 内连接结果（两表都有匹配）
inner_join (name, rank, subject, enrollment) AS (
    SELECT t.name, t.rank, c.subject, c.enrollment
    FROM teachers t, courses c
    WHERE t.name = c.teacher AND c.quarter = 'Fall 19'
),
-- 2. 仅Teacher有（无匹配Course）
teacher_only (name, rank) AS (
    SELECT name, rank FROM teachers
    EXCEPT ALL
    SELECT name, rank FROM inner_join
),
-- 3. 仅Course有（无匹配Teacher）
course_only (subject, enrollment) AS (
    SELECT subject, enrollment FROM courses
    EXCEPT ALL
    SELECT subject, enrollment FROM inner_join
)
-- 合并结果（补NULL）
SELECT name, rank, subject, enrollment FROM inner_join
UNION ALL
SELECT name, rank, CAST(NULL AS VARCHAR(20)) AS subject, CAST(NULL AS INT) AS enrollment FROM teacher_only
UNION ALL
SELECT CAST(NULL AS VARCHAR(20)) AS name, CAST(NULL AS VARCHAR(20)) AS rank, subject, enrollment FROM course_only;
```


## 三、嵌入式SQL（Embedded SQL）
嵌入式SQL是将SQL语句嵌入宿主语言（如C、Java）的语法，核心是“宿主变量”和“游标”，用于实现程序与数据库的交互。

### 3.1 核心语法框架
```c
#include <stdio.h>
// 1. 定义宿主变量（用于传递程序与数据库的数据）
EXEC SQL BEGIN DECLARE SECTION;
    char SNO[7];          // 学生学号（程序→数据库）
    char GIVENSNO[7];     // 待查询学号（程序→数据库）
    char CNO[6];          // 课程号（程序→数据库）
    char GIVENCNO[6];     // 待查询课程号（程序→数据库）
    float GRADE;          // 成绩（数据库→程序）
    short GRADEI;         // 成绩空值指示器（1表示NULL）
EXEC SQL END DECLARE SECTION;

int main() {
    // 2. 连接数据库（:uid/:pwd为宿主变量，需提前赋值）
    EXEC SQL CONNECT :uid IDENTIFIED BY :pwd;
    if (SQLCA.SQLCODE < 0) {  // SQLCA：SQL通信区，存储执行状态
        printf("连接失败\n");
        return 1;
    }

    // 3. 插入数据（使用宿主变量传值）
    strcpy(SNO, "2023001");
    strcpy(CNO, "01");
    GRADE = 85.0;
    GRADEI = 0;  // 0表示非NULL
    EXEC SQL INSERT INTO SC(SNO, CNO, GRADE) VALUES(:SNO, :CNO, :GRADE);

    // 4. 单条查询（ INTO子句接收结果）
    strcpy(GIVENSNO, "2023001");
    strcpy(GIVENCNO, "01");
    EXEC SQL SELECT GRADE INTO :GRADE :GRADEI FROM SC 
             WHERE SNO = :GIVENSNO AND CNO = :GIVENCNO;
    if (GRADEI == 1) {
        printf("成绩为NULL\n");
    } else {
        printf("成绩：%.1f\n", GRADE);
    }

    // 5. 多条查询（使用游标遍历结果）
    EXEC SQL DECLARE C1 CURSOR FOR  // 定义游标
        SELECT SNO, GRADE FROM SC WHERE CNO = :GIVENCNO;
    EXEC SQL OPEN C1;  // 打开游标（执行查询）
    if (SQLCA.SQLCODE < 0) {
        printf("游标打开失败\n");
        return 1;
    }
    // 循环提取结果
    while (1) {
        EXEC SQL FETCH C1 INTO :SNO, :GRADE :GRADEI;  // 提取一条记录
        if (SQLCA.SQLCODE == 100) break;  // 100：无更多记录
        printf("学号：%s，成绩：%.1f\n", SNO, GRADE);
    }
    EXEC SQL CLOSE C1;  // 关闭游标

    // 6. 断开连接
    EXEC SQL DISCONNECT;
    return 0;
}
```

### 3.2 关键概念
- **宿主变量**：前缀`:`, 用于传递程序与数据库的数据（如` :SNO`），需在`BEGIN/END DECLARE SECTION`中声明；
- **空值指示器**：短整型变量（如`GRADEI`），1表示对应值为NULL，0表示非NULL；
- **SQLCA（SQL通信区）**：存储SQL语句执行状态（如`SQLCODE < 0`表示执行错误，`SQLCODE == 100`表示无结果）；
- **游标（Cursor）**：用于处理“多条查询结果”，需经历“定义→打开→提取→关闭”四步。


## 四、查询优化
查询优化的目标是“在等价的查询方案中选择效率最高的”，核心解决关系数据库“软连接”（表间无物理指针）带来的大量连接运算开销。

### 4.1 为什么关系数据库更需要优化？
| 数据库类型 | 连接方式 | 查询路径 | 优化空间 |
|------------|----------|----------|----------|
| 层次/网状数据库 | 物理指针（硬连接） | 固定路径（由指针决定） | 极小（无法改变查询顺序） |
| 关系数据库 | 表关联（软连接） | 灵活（SQL是非过程性语言） | 极大（等价查询的效率差异可达数量级） |


### 4.2 索引优化（B树与B+树）
索引的核心是“减少磁盘IO”，主流索引结构为B树与B+树，二者对比及优势如下：

#### （1）B树的优势（vs 红黑树、哈希索引）
- **磁盘IO少**：B树是“矮胖”的多叉树（度大，树高≤3），根节点常驻内存，单次查询最多需`树高-1`次IO（红黑树是二叉树，树高约log₂N，IO次数远多）；
- **支持范围查询**：哈希索引仅支持精确查询（哈希冲突时性能下降），B树可通过中序遍历实现范围查询；
- **稳定性高**：哈希索引性能受哈希函数影响，B树性能仅与树高相关，波动小。

#### （2）B+树的优势（vs B树）
B+树是B树的变种，优化点集中在“查询效率”和“磁盘开销”：
1. **顺序遍历更快**：所有叶子节点通过双向链表串联，无需中序遍历即可完成范围查询（如查询“id>100且id<200”的记录）；
2. **查询更稳定**：B+树的数据仅存于叶子节点，每次查询都需到叶子节点，避免B树“数据可能在内节点”导致的查询时间波动；
3. **磁盘开销更小**：B+树的内节点仅存索引（无数据），单个内节点占用物理块更少，加载速度更快。


### 4.3 代数优化与操作优化
#### （1）代数优化（查询树变换）
通过调整查询树结构减少运算量，核心优化对象为**笛卡尔积、并、差**：
- 优化原则：“先筛选、再投影、最后连接”，避免大表笛卡尔积。例如：  
  原查询$\pi_{A,F}(\sigma_{C=D}(r \times s))$ → 优化后先筛选$\sigma_{C=D}(r \times s)$，再投影$\pi_{A,F}$，而非先投影再筛选；
- 等价变换：利用关系代数定律（如$\sigma_{条件}(r \bowtie s) = r \bowtie_{\text{条件}} s$）减少冗余运算。

#### （2）操作优化（连接优化）
连接运算的开销主要来自“表扫描”，优化方法包括：
1. **缓冲优化**：分配两个缓冲区（外循环表+内循环表），每次加载多块数据，减少IO次数（外循环表小表，内循环表大表，减少内循环遍历次数）；
2. **归并扫描连接（Merge Scan Join）**：两表先按连接属性排序，再用双指针遍历（各表仅扫一次），适用于“已排序或接近排序”的表；
3. **索引连接（Index Join）**：将“连接属性上有索引”的表作为内循环表，通过外循环表的属性值查索引，无需扫描内循环表（若匹配元组占内循环表20%以上，索引失效，建议直接扫描）。

#### （3）避免使用OR谓词
OR连接的多个条件需分别筛选后求并（并运算开销大），且只要有一个条件无合适索引，就需全表扫描，效率显著下降。例如`WHERE age>30 OR salary>5000`，若`age`无索引，即使`salary`有索引，仍需全表扫描。


## 五、并发控制
并发控制的目标是“解决事务并发导致的冲突”，核心问题、协议及锁机制如下：

### 5.1 并发问题（三大异常）
| 异常类型 | 定义 | 示例 |
|----------|------|------|
| 丢失修改（Lost Update） | 两个事务同时修改同一数据，后提交的事务覆盖先提交的结果 | T1和T2同时改A=100为A=101，最终A=101（丢失T1的修改） |
| 脏读（Dirty Read） | 事务读取了另一个未提交事务的修改（若未提交事务回滚，读取结果无效） | T1改A=100为A=101（未提交），T2读A=101，T1回滚后T2的读取结果脏 |
| 不可重复读（Unrepeatable Read） | 同一事务内多次读取同一数据，结果不一致（因其他事务修改） | T1读A=100，T2改A=101并提交，T1再读A=101，结果不同 |


### 5.2 两段锁协议（2PL）
2PL是保证“可串行化”的核心协议，通过“分阶段加锁/释放锁”避免冲突：
- **两段阶段**：
  1. **加锁段**：事务执行过程中仅申请锁，不释放锁（可逐步申请所需锁）；
  2. **解锁段**：事务执行结束后，一次性释放所有锁（不可再申请新锁）；
- **关键性质**：若所有事务遵循2PL且“操作前先加锁”（well-formed），则并发调度一定是**可串行化**的（即与串行调度等价，无并发异常）。


### 5.3 锁类型与死锁
#### （1）锁类型（S、U、X锁）
| 锁类型 | 含义 | 相容关系（是否允许其他事务加锁） |
|--------|------|----------------------------------|
| S锁（共享锁） | 用于读操作，多个事务可同时加S锁 | 与S、U锁相容，与X锁不相容 |
| U锁（更新锁） | 用于更新操作（先读再写），后续可升级为X锁 | 与S锁相容，与U、X锁不相容 |
| X锁（排他锁） | 用于写操作（插入、删除、修改） | 与所有锁不相容 |

- **U锁的优势**：解决“S锁升级为X锁”的冲突，例如：T1加S锁后想改数据（需升X锁），但T2已加S锁，T1需等待；若T1先加U锁，T2无法加U锁，T1可直接升X锁，减少等待。
- **U锁的限制**：不允许其他事务加U锁，否则会导致死锁（两事务都持有U锁，都想升X锁，互相等待）。

#### （2）死锁问题
- **死锁原因**：循环等待（如T1持有A的X锁，申请B的X锁；T2持有B的X锁，申请A的X锁）；
- **锁机制无法解决死锁**：S、U、X锁仅定义“相容规则”，无法打破循环等待，需额外机制（如超时释放、等待图检测）；
- **死锁避免策略**：
  - **wait-die**：事务T1申请T2的资源，若T1比T2“老”（启动时间早）则等待，否则回滚T1（用原时间戳重试）；
  - **wound-wait**：事务T1申请T2的资源，若T1比T2“年轻”则等待，否则终止T2（抢占资源，T2用原时间戳重试）。


### 5.4 可串行化的意义
并发调度的核心准则是“可串行化”，原因如下：
- 串行调度无冲突：各事务操作无交叉，不会出现丢失修改、脏读等问题；
- 可串行化调度等价于串行调度：虽操作有交叉，但结果与某串行顺序一致，保证数据一致性。


## 六、恢复技术
恢复技术的目标是“保证事务的ACID特性”（原子性、一致性、隔离性、持久性），核心是“日志（Log）”和“检查点（Checkpoint）”。

### 6.1 事务ACID特性与恢复规则
- **原子性（Atomicity）**：事务要么全执行，要么全回滚（通过Undo实现）；
- **一致性（Consistency）**：事务执行前后数据库状态一致（通过日志和约束保证）；
- **隔离性（Isolation）**：并发事务的操作互不干扰（通过锁机制保证）；
- **持久性（Durability）**：事务提交后，修改永久有效（通过日志和后备副本保证）。

#### 恢复核心规则
1. **提交规则（Commit Rule）**：事务提交前，后像（AI，修改后的值）必须写入非易失存储（数据库或日志文件），保证持久性；
2. **先记后写规则（Log Ahead Rule）**：若后像在提交前写入数据库，前像（BI，修改前的值）必须先写入日志，保证原子性（事务失败时可Undo）。


### 6.2 故障类型与恢复策略
数据库故障分为**系统故障**和**介质失效**，恢复策略不同：

| 故障类型 | 定义 | 恢复步骤 |
|----------|------|----------|
| 系统故障（软故障） | DBMS/OS崩溃，数据库未损坏，但事务执行中断（部分事务未提交） | 1. 找到最近检查点；<br>2. 对检查点后提交的事务执行Redo（重做）；<br>3. 对检查点后未提交的事务执行Undo（回滚） |
| 介质失效（硬故障） | 磁盘损坏，数据库数据丢失（如磁头破损） | 1. 在新介质上加载最近后备副本；<br>2. 基于日志，对后备副本后提交的所有事务执行Redo；<br>3. 若检查点比后备副本新，需对“后备副本→检查点”的事务也执行Redo |


### 6.3 检查点（Checkpoint）
检查点是DBMS周期性执行的“强制刷盘”操作，作用是“减少系统故障后的Redo量”：
- **执行逻辑**：DBMS定期将“已提交但未写入数据库”的事务后像强制写入数据库，并记录检查点时间；
- **恢复优化**：系统故障时，仅需Redo“检查点后提交”的事务，无需Redo检查点前的事务（已刷盘），避免大量无效Redo。


### 6.4 Redo与Undo（幂等性）
- **Redo（重做）**：重新执行事务的修改操作，用于恢复“已提交但未写入数据库”的事务，需保证幂等性（多次执行结果一致）；
- **Undo（回滚）**：根据日志中的前像（BI）恢复事务修改前的状态，用于回滚“未提交”的事务，同样需幂等性；
- **恢复策略分类**（按事务修改数据库的时机）：
  1. **AI→DB before commit**：事务执行时直接改数据库，仅需Undo（日志存BI）；
  2. **AI→DB after commit**：事务提交后再改数据库，仅需Redo（日志存AI）；
  3. **AI→DB concurrently with commit**：利用空闲时间异步改数据库，需Undo+Redo（日志存BI和AI）。


## 七、触发器（Trigger）
触发器是数据库的“主动规则”，用于监视表上的操作（INSERT/DELETE/UPDATE），并自动执行指定SQL语句，核心用于“维护数据完整性”（如外键约束、业务规则）。

### 7.1 触发器语法结构
```sql
CREATE TRIGGER <触发器名>
ON <表名>
<触发时机> (<触发事件>)  -- 触发时机：BEFORE/AFTER；触发事件：INSERT/DELETE/UPDATE
[REFERENCING OLD AS <旧元组名> | NEW AS <新元组名>]  -- 引用修改前后的元组
[WHEN <触发条件>]  -- 满足条件才执行
[FOR EACH ROW | FOR EACH STATEMENT]  -- 行级触发/语句级触发
<触发执行的SQL语句>;  -- 如INSERT/DELETE/UPDATE/ROLLBACK
```


### 7.2 典型触发器示例
#### （1）外键完整性维护（禁止无效插入）
```sql
-- 示例：SC表插入元组时，检查SNO/CNO是否在STUDENT/COURSE中存在，否则回滚
CREATE TRIGGER referential_integrity_check
BEFORE INSERT ON SC
REFERENCING NEW AS N  -- N代表插入的新元组
FOR EACH ROW  -- 行级触发（每插入一行检查一次）
WHEN (
    NOT EXISTS (SELECT * FROM STUDENT WHERE SNO = N.SNO)  -- SNO无效
    OR NOT EXISTS (SELECT * FROM COURSE WHERE CNO = N.CNO)  -- CNO无效
)
ROLLBACK;  -- 回滚插入操作
```

#### （2）级联删除（删除学生时删除其选课记录）
```sql
CREATE TRIGGER student_delete_cascade
AFTER DELETE ON STUDENT
REFERENCING OLD AS O  -- O代表删除的旧元组
FOR EACH ROW
WHEN (EXISTS (SELECT * FROM SC WHERE SNO = O.SNO))  -- 存在选课记录
DELETE FROM SC WHERE SNO = O.SNO;  -- 级联删除SC表中的对应记录
```

#### （3）业务规则维护（库存低于下限时自动下单）
```sql
CREATE TRIGGER inventory_control
AFTER UPDATE OF 库存量 ON 库存  -- 仅监视“库存量”字段的更新
REFERENCING NEW AS N
FOR EACH ROW
WHEN (
    N.库存量 < N.库存下限  -- 库存低于下限
    AND NOT EXISTS (SELECT * FROM 在购订单 WHERE 零件号 = N.零件号)  -- 无未完成订单
)
INSERT INTO 在购订单 VALUES (N.零件号, N.订购量, SYSDATE);  -- 自动插入订单（SYSDATE为系统日期）
```


## 八、完整性约束与范式（NF）
### 8.1 完整性约束
完整性约束是“保证数据正确、一致的规则”，分为以下几类：

| 约束类型 | 定义 | 示例 |
|----------|------|------|
| 固有约束（Inherent） | 数据库固有的结构约束，不允许“表中套表” | 关系模型中，表的属性必须是原子值（不能是集合、表等） |
| 隐式约束（Implicit） | 在Schema中定义的约束，如域约束、主键约束 | - 域约束：学生绩点必须是0~4的数值（不能是字符串）；<br>- 主键约束：SNO唯一且非NULL；<br>- 外键约束：SC.SNO必须在STUDENT.SNO中存在 |
| 显式约束（Explicit） | 通过断言（ASSERT）或CHECK语句定义的自定义约束 | - 断言：`ASSERT balanceCons ON account CHECK (balance >= 0);`（账户余额非负）；<br>- CHECK：`CREATE TABLE Reserves (..., CONSTRAINT noInterlakeRes CHECK ('Interlake' <> (SELECT B.bname FROM Boats B WHERE B.bid=bid)));`（禁止租借“Interlake”号船） |


### 8.2 范式（NF）
范式是“减少数据冗余和异常”的表结构设计准则，核心是“一事一地”（一个事实存于一个地方），常用范式如下：

| 范式 | 定义 | 解决的问题 |
|------|------|------------|
| 1NF（第一范式） | 表的属性必须是原子值（不可再分），无重复列 | 避免“属性非原子”导致的查询困难（如“地址”字段包含省、市、区，无法单独查询） |
| 2NF（第二范式） | 满足1NF，且无“部分函数依赖”（非主属性仅依赖主键整体，不依赖主键的一部分） | 解决“部分依赖”导致的更新异常（如“订单表”中，商品名称依赖商品ID（主键的一部分），修改商品ID需同步修改商品名称） |
| 3NF（第三范式） | 满足2NF，且无“传递函数依赖”（非主属性不依赖其他非主属性） | 解决“传递依赖”导致的冗余（如“学生表”中，系主任依赖系名，系名依赖学号，系主任传递依赖学号，冗余存储系主任信息） |
| 4NF（第四范式） | 满足3NF，且无“多值依赖”（一个属性的多个值不依赖另一个属性的多个值） | 解决“多值依赖”导致的插入异常（如“教师-课程-学生”表，一个教师教多门课、一个课程有多个学生，需重复存储教师信息） |
| 5NF（第五范式） | 满足4NF，且无“连接依赖”（表不能分解为多个子表，否则无法通过连接恢复原表） | 解决“连接依赖”导致的删除异常（如“订单-商品-客户”表，分解后删除商品会丢失订单与客户的关联） |

#### 范式选择原则
范式并非越高越好，需权衡“冗余”与“性能”：
- 高范式（如3NF、4NF）：减少冗余和更新/插入/删除异常，但需更多表连接，查询速度慢；
- 低范式（如1NF、2NF）：查询速度快，但冗余大，易出现数据不一致；
- 实际应用：多数场景用3NF（平衡冗余与性能），复杂业务（如电商订单）可考虑4NF。


## 九、概念性简答与零散知识点
### 9.1 核心概念辨析
#### （1）数据、DB、DBMS、DBS
- **数据（Data）**：描述现实事物的符号（如学生的学号、姓名）；
- **数据库（DB）**：长期存储在计算机中的、有组织的、可共享的数据集合；
- **数据库管理系统（DBMS）**：位于OS与用户之间的系统软件，负责数据库的存储、管理、查询（如MySQL、Oracle）；
- **数据库系统（DBS）**：由DB、DBMS、应用程序、DBA（数据库管理员）、用户组成的完整系统。

#### （2）数据独立性（物理独立性与逻辑独立性）
- **物理独立性**：数据的物理存储方式（如磁盘分区、索引结构）改变时，逻辑结构和应用程序无需修改（由DBMS屏蔽物理细节）；
- **逻辑独立性**：数据的逻辑结构（如表结构、属性类型）改变时，应用程序无需修改（由DBMS提供视图等机制）；
- **重要性**：数据独立性越高，系统维护成本越低（避免“牵一发而动全身”）。

#### （3）结构化、半结构化、非结构化数据
| 数据类型 | 定义 | 示例 | 存储方式 |
|----------|------|------|----------|
| 结构化数据 | 有固定二维表结构，遵循数据格式规范 | 学生表（学号、姓名、年龄） | 关系数据库（MySQL、PostgreSQL） |
| 半结构化数据 | 无固定结构，但含语义标记（如键值对） | JSON（{“name”:“张三”, “age”:20}）、XML | 文档数据库（MongoDB） |
| 非结构化数据 | 无预定义模型，结构不规则 | 图片、音视频、文本文件 | 文件系统、对象存储（S3） |


### 9.2 数据模型对比（层次、网状、关系）
| 数据模型 | 结构 | 联系表示 | 优缺点 |
|----------|------|----------|--------|
| 层次模型 | 树结构（父节点→子节点） | 物理指针（硬连接） | 优点：结构简单；<br>缺点：无法建模M:N关系（如3个学生选2门课） |
| 网状模型 | 图结构（多父节点） | 循环链表（SET结构，1:N） | 优点：支持M:N关系（通过LINK记录）；<br>缺点：结构复杂，查询路径固定 |
| 关系模型 | 表结构（二维表） | 软连接（表关联，如外键） | 优点：1. 概念简单，易理解；<br>2. 支持数学运算（关系代数）；<br>3. 灵活，查询路径可优化；<br>缺点：语义贫乏，不支持复杂数据类型（如嵌套结构） |


### 9.3 零散知识点
1. **NULL的处理**：DBMS支持三值逻辑（True、False、Null），需注意NULL的比较（如`NULL = NULL`结果为Null，而非True）；
2. **统计数据库安全**：限制统计查询的元组数量（如`b ≤ |SET(T)| ≤ n-b`，避免通过少量元组推断个人信息），通用追踪器需满足`2b ≤ |SET(T)| ≤ n-2b`；
3. **自引用外键**：如“水手表”中，`master`字段引用自身的`sid`（师傅的学号），需通过触发器或外键约束保证引用完整性；
4. **ER图参与度**：描述实体参与联系的数量限制（如“学生选课程”，每个学生至少选1门课，参与度为“1:N”）。