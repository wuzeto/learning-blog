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



## 2.8 查找算法



**基本查找算法**



**1. 顺序查找**:

```python

def sequential_search(A, n, key):

    for i in range(n):

        if A[i] == key:

            return i

    return -1

```

ASL成功 = $\frac{n+1}{2}$，ASL失败 = $n+1$



**2. 二分查找（有序表）**:

```python

def binary_search(A, n, key):

    low, high = 0, n-1

    while low <= high:

        mid = (low + high) // 2

        if A[mid] == key:

            return mid

        elif A[mid] < key:

            low = mid + 1

        else:

            high = mid - 1

    return -1

```

时间复杂度：$O(\log n)$

判定树：平衡二叉树，ASL成功≈$\log_2(n+1)-1$



**3. 分块查找**:

* 将表分成$b$块，每块$s$个记录（$n=b\times s$）

* 索引表：记录每块最大关键字和起始地址

* ASL = $L_b$（查索引表）+ $L_w$（块内查找）

* 最优分块：$s=\sqrt{n}$，ASL最小



**树形查找算法**



**1. 二叉查找树操作**:

```python

def bst_search(T, key):

    while T is not None and T.key != key:

        if key < T.key:

            T = T.left

        else:

            T = T.right

    return T



def bst_insert(T, key):

    if T is None:

        return TreeNode(key)

    if key < T.key:

        T.left = bst_insert(T.left, key)

    elif key > T.key:

        T.right = bst_insert(T.right, key)

    return T

```



**2. AVL树旋转**:

* LL型：右单旋转

* RR型：左单旋转

* LR型：先左旋后右旋

* RL型：先右旋后左旋



**B树操作算法**



**1. B树查找**:

```python

def btree_search(T, key):

    p = T

    q = None

    while p is not None:

        # 在当前结点中顺序查找key

        found, pos = search_in_node(p, key)

        if found:

            return p, pos  # 找到

        q = p

        # 确定下一个子树指针

        p = get_next_child(p, key)

    return q, None, False  # 未找到，返回可能插入的结点



def search_in_node(node, key):

    """在B树结点中顺序查找关键字"""

    keys = node.keys

    for i in range(len(keys)):

        if key == keys[i]:

            return True, i

        if key < keys[i]:

            return False, i  # 返回应插入的位置

    return False, len(keys)  # 应插入到末尾

```



**2. B树插入（分裂）**:

```python

def btree_insert(T, key):

    # 查找插入位置

    node, pos, found = btree_search(T, key)

    if found:

        return T  # 关键字已存在

    

    # 插入关键字

    node.keys.insert(pos, key)

    

    # 检查是否超过结点容量

    if len(node.keys) > M:  # M为B树的阶

        node = split_node(node)

    

    return T



def split_node(node):

    """分裂B树结点"""

    mid = len(node.keys) // 2

    median_key = node.keys[mid]

    

    # 创建左右子结点

    left_node = BTreeNode(node.keys[:mid])

    right_node = BTreeNode(node.keys[mid+1:])

    

    # 如果有孩子，也需分裂

    if node.children:

        left_node.children = node.children[:mid+1]

        right_node.children = node.children[mid+1:]

    

    # 创建新父结点（或提升中间关键字）

    new_node = BTreeNode([median_key])

    new_node.children = [left_node, right_node]

    

    return new_node

```



**3. B树删除**:

* 叶结点删除：直接删除

* 非叶结点删除：用前驱/后继替换

* 下溢处理：借兄弟结点或合并



**哈希表查找分析**



**平均查找长度计算**:

* 线性探测法：

  $\begin{align*}
  ASL_{succ} &\approx \frac{1}{2}\left(1+\frac{1}{1-\alpha}\right) \\
  ASL_{unsucc} &\approx \frac{1}{2}\left(1+\frac{1}{(1-\alpha)^2}\right)
  \end{align*}$

* 链地址法：

  $\begin{align*}
  ASL_{succ} &\approx 1+\frac{\alpha}{2} \\
  ASL_{unsucc} &\approx \alpha + e^{-\alpha}
  \end{align*}$

其中$\alpha=\frac{n}{m}$为装填因子



**性能对比**:



| 方法 | 查找成功ASL | 查找失败ASL | 特点 |
|------|-------------|-------------|------|
| 线性探测 | $\frac{1}{2}(1+\frac{1}{1-\alpha})$ | $\frac{1}{2}(1+\frac{1}{(1-\alpha)^2})$ | 聚集现象 |
| 二次探测 | $-\frac{1}{\alpha}\ln(1-\alpha)$ | $\frac{1}{1-\alpha}$ | 减少聚集 |
| 链地址 | $1+\frac{\alpha}{2}$ | $\alpha+e^{-\alpha}$ | 无聚集 |