<script>
window.MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    displayMath: [['$$', '$$'], ['\\[', '\\]']],
    macros: {
      oiint: "{\\mathchoice{\\mkern-18mu\\iint}{\\mkern-12mu\\iint}{\\mkern-13mu\\iint}{\\mkern-12mu\\iint}}"
    }
  }
};
</script>
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js"></script>



# 抽象数据类型（ADT）与数据结构

## 一、抽象数据类型（ADT）与数据结构

### 1.1 线性结构ADT实现

**线性表ADT实现**

**静态链表实现**（使用游标替代指针）:
```c
#define MAXSIZE 1000
typedef struct {
    ElemType data;
    int cur;  // 游标，0表示空
} SLinkList[MAXSIZE];
```

**双向链表**:
```c
typedef struct DuLNode {
    ElemType data;
    struct DuLNode *prior, *next;
} DuLNode, *DuLinkList;
```

**循环链表**:
* 单向循环：尾结点next指向头结点
* 双向循环：头尾互连，形成环

**栈的两种实现**:
* 顺序栈：数组实现，top指针
* 链栈：链表实现，头插法

**队列的三种实现**:
* 顺序队列：数组+front/rear指针
* 循环队列：解决假溢出
* 链队列：链表实现

**串ADT与存储**

**串的存储结构**:
* 定长顺序存储：char str[MAXLEN+1]
* 堆分配存储：动态分配，length字段
* 块链存储：块状链表

**串的基本操作**:
* StrAssign, StrCopy, StrEmpty, StrCompare
* StrLength, Concat, SubString
* Index（朴素/KMP）, Replace, StrInsert, StrDelete

### 1.2 数组与矩阵存储

**特殊矩阵压缩存储**

**对称矩阵** ($n\times n$):
$\text{存储下三角: }k=\frac{i(i-1)}{2}+j-1 \ (i\geq j)$

**三角矩阵**:
* 上三角：$k=\frac{(i-1)(2n-i+2)}{2}+(j-i)$
* 下三角：$k=\frac{i(i-1)}{2}+j-1$

**三对角矩阵**（带宽3）:
$k=2i+j-3 \quad (|i-j|\leq 1)$

**稀疏矩阵存储**:
* 三元组表：$(i,j,value)$
* 十字链表：行链表+列链表

### 1.3 树形结构存储

**树的存储结构**

**双亲表示法**:
```c
typedef struct PTNode {
    ElemType data;
    int parent;  // 父结点位置
} PTNode;
typedef struct {
    PTNode nodes[MAX_TREE_SIZE];
    int n, r;  // 结点数，根位置
} PTree;
```

**孩子表示法**:
```c
typedef struct CTNode {  // 孩子结点
    int child;
    struct CTNode *next;
} *ChildPtr;
typedef struct {  // 表头结点
    ElemType data;
    ChildPtr firstchild;
} CTBox;
```

**孩子兄弟表示法**（二叉树表示法）:
```c
typedef struct CSNode {
    ElemType data;
    struct CSNode *firstchild, *nextsibling;
} CSNode, *CSTree;
```

**二叉树存储与线索化**

**二叉链表**:
```c
typedef struct BiTNode {
    ElemType data;
    struct BiTNode *lchild, *rchild;
} BiTNode, *BiTree;
```

**中序线索二叉树**:
```c
typedef struct ThreadNode {
    ElemType data;
    struct ThreadNode *lchild, *rchild;
    int ltag, rtag;  // 0:孩子, 1:线索
} ThreadNode, *ThreadTree;
```

**完全二叉树顺序存储**:
* 结点$i$的左孩子：$2i$
* 结点$i$的右孩子：$2i+1$
* 结点$i$的父结点：$\lfloor i/2 \rfloor$

**满二叉树**: 深度$k$，结点数$2^k-1$

### 1.4 图的存储结构

**图存储结构比较**

**邻接矩阵**:
* 适合稠密图，$O(n^2)$空间
* 判断边存在：$O(1)$
* 求度：$O(n)$

**邻接表**:
* 适合稀疏图，$O(n+e)$空间
* 判断边存在：$O(出度)$
* 求度：出度$O(1)$，入度需要遍历

**邻接多重表**（无向图优化）:
* 边只存储一次
* 适合需要删除边的场景

**十字链表**（有向图）:
* 结合邻接表和逆邻接表
* 方便求入度和出度

### 1.5 查找结构实现

**有序表与分块表**

**有序表**: 关键字有序排列，支持二分查找

**分块有序表**:
* 块内无序，块间有序
* 索引表：记录每块最大关键字和起始地址
* 查找：先查索引表，再在块内顺序查找

**跳表（Skip List）**:
* 多层索引结构，类似多级索引
* 查找、插入、删除：平均$O(\log n)$
* 空间复杂度：$O(n)$

**二叉搜索树家族**

**二叉搜索树（BST）**:
* 左子树 < 根 < 右子树
* 中序遍历得到有序序列

**平衡二叉树（AVL）**:
* 平衡因子：$|h_L-h_R|\leq 1$
* 四种旋转：LL, RR, LR, RL

**红黑树**:
1. 结点红或黑
2. 根黑，叶(NIL)黑
3. 红结点的子结点黑
4. 从任一结点到叶子的路径包含相同黑结点数

**B树家族**

**m路查找树**:
* 每个结点最多m棵子树，m-1个关键字
* $K_1<K_2<\dots<K_{m-1}$
* 子树指针：$P_0,P_1,\dots,P_{m-1}$

**m阶B树性质**:
1. 根至少2棵子树（除非为叶）
2. 非叶结点：$\lceil m/2\rceil$到$m$棵子树
3. 所有叶在同一层
4. 关键字数：$\lceil m/2\rceil-1$到$m-1$

**B+树与B树区别**:
* B+树：非叶结点只存索引，数据在叶，叶结点链表连接
* B树：所有结点都存数据

**键树（Trie树）**:
* 关键字由字符构成
* 从根到叶路径表示关键字
* 压缩存储：合并单分支路径

**哈希表实现**

**链地址法**:
```c
typedef struct HashNode {
    KeyType key;
    ValueType value;
    struct HashNode *next;
} HashNode;
```

**开放定址法**:
* 线性探测：$h_i(k)=(h(k)+i)\mod m$
* 二次探测：$h_i(k)=(h(k)+c_1i+c_2i^2)\mod m$
* 双重散列：$h_i(k)=(h_1(k)+ih_2(k))\mod m$

**基桶与溢出桶**:
* 基桶：主存储区，固定大小
* 溢出桶：基桶满时使用，链式连接
* 装填因子：$\alpha=n/m$，影响性能

**哈希函数设计**:
* 除留余数法：$h(k)=k\mod p$
* 平方取中法：$k^2$取中间几位
* 折叠法：分割相加
* 数字分析法：取分布均匀的位

**索引与倒排表**

**索引结构分类**:
* 稠密索引：每个记录都有索引项
* 稀疏索引：一组记录共享索引项
* 主索引：主键上的索引
* 辅助索引：非主键上的索引
* 多级索引：索引的索引

**倒排表（Inverted Index）**:
* 词典：所有单词有序集合
* 倒排列表：$\text{单词}\rightarrow\{\text{文档ID}_1,\text{文档ID}_2,\dots\}$
* 应用：搜索引擎全文检索

# 算法设计与实现

## 2.1 线性表算法

**数组循环移位算法**

**方法1：三次反转法**
```python
def rotate(A, n, k):
    k = k % n
    reverse(A, 0, n-1)    # 反转整个数组
    reverse(A, 0, k-1)    # 反转前k个
    reverse(A, k, n-1)    # 反转剩余部分

def reverse(A, start, end):
    while start < end:
        A[start], A[end] = A[end], A[start]
        start += 1
        end -= 1
```
时间复杂度：$O(n)$，空间复杂度：$O(1)$

**方法2：循环交换法**
```python
def rotate_jump(A, n, k):
    k = k % n
    count = 0
    for start in range(n):
        current = start
        prev = A[start]
        while True:
            next = (current + k) % n
            temp = A[next]
            A[next] = prev
            prev = temp
            current = next
            count += 1
            if current == start:
                break
        if count == n:
            break
```

**顺序元素划分算法**

**将数组划分为两部分**（如快速排序划分）:
```python
def partition(A, low, high):
    pivot = A[low]
    while low < high:
        while low < high and A[high] >= pivot:
            high -= 1
        A[low] = A[high]
        while low < high and A[low] <= pivot:
            low += 1
        A[high] = A[low]
    A[low] = pivot
    return low
```

## 2.2 链表算法

**链表经典算法**

**1. 检测环并找入口（Floyd算法）**:
```python
def detect_cycle(head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            ptr1, ptr2 = head, slow
            while ptr1 != ptr2:
                ptr1 = ptr1.next
                ptr2 = ptr2.next
            return ptr1
    return None
```

**2. 求倒数第k个结点**:
```python
def find_kth_from_end(head, k):
    fast = slow = head
    for i in range(k):
        if not fast:
            return None
        fast = fast.next
    while fast:
        slow = slow.next
        fast = fast.next
    return slow
```

**3. 求中间结点**:
```python
def middle_node(head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
    return slow
```

**4. 判断链表是否相交**:
```python
def get_intersection_node(headA, headB):
    if not headA or not headB:
        return None
    pA, pB = headA, headB
    while pA != pB:
        pA = pA.next if pA else headB
        pB = pB.next if pB else headA
    return pA
```

**有序链表归并**
```python
def merge_sorted_lists(l1, l2):
    dummy = Node(0)
    current = dummy
    while l1 and l2:
        if l1.val <= l2.val:
            current.next = l1
            l1 = l1.next
        else:
            current.next = l2
            l2 = l2.next
        current = current.next
    current.next = l1 if l1 else l2
    return dummy.next
```
时间复杂度：$O(m+n)$

## 2.3 栈与队列算法

**栈应用算法**

**1. 递归转非递归**（通用模板）:
```python
def non_recursive(params):
    # 初始化栈S，将初始状态压栈
    S = []
    S.append(initial_state)
    while S:
        # 弹出当前状态
        current_state = S.pop()
        if is_termination_condition(current_state):
            # 处理结果
            process_result(current_state)
        else:
            # 计算子问题状态并压栈
            sub_states = generate_sub_states(current_state)
            for state in sub_states:
                S.append(state)
```

**2. 迷宫求解（DFS栈实现）**:
```python
def solve_maze(maze, start, end):
    # 初始化栈S，visited数组
    S = []
    visited = [[False] * len(maze[0]) for _ in range(len(maze))]
    S.append(start)
    visited[start[0]][start[1]] = True
    
    while S:
        current = S[-1]  # top()
        if current == end:
            # 输出路径
            return True, S
        
        # 找到下一个未访问的可通行方向
        next_pos = find_next_position(maze, current, visited)
        if next_pos:
            S.append(next_pos)
            visited[next_pos[0]][next_pos[1]] = True
        else:
            S.pop()  # 回溯
    
    return False, None
```

**队列应用算法**

**1. Joseph环问题**:
```python
def josephus(n, m):
    # 创建包含1..n的循环链表
    class Node:
        def __init__(self, val):
            self.val = val
            self.next = None
    
    head = Node(1)
    current = head
    for i in range(2, n+1):
        current.next = Node(i)
        current = current.next
    current.next = head  # 形成环
    
    current = head
    while current.next != current:  # 只剩一个结点
        # 移动m-1步
        for i in range(m-2):  # 注意：当前已经在第一个人位置
            current = current.next
        # 删除第m个人
        current.next = current.next.next
        current = current.next
    
    return current.val
```

**2. 舞伴问题（队列模拟）**:
```python
def dance_partner(male_queue, female_queue):
    while male_queue and female_queue:
        male = male_queue.pop(0)  # dequeue
        female = female_queue.pop(0)  # dequeue
        # 配对(male, female)
        print(f"配对: {male} 和 {female}")
```