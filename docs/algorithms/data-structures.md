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

# 算法整理

---

## 算法4-1 归并排序 `merge_sort(A)`

**输入**：一个数组 `A`

**输出**：排好序的 `A`

### 具体流程
1.  如果数组 `A` 的大小为 1，则直接返回。

2.  设数组 `A` 的大小为 `n`，令 `m = ⌊n/2⌋`，`B1` 为 `A` 的前 `m` 项组成的子序列，`B2` 为 `A` 的后 `n−m` 项组成的子序列。

3.  分别调用 `merge_sort(B1)` 和 `merge_sort(B2)` 对 `B1`、`B2` 进行排序。

4.  对 `B1`、`B2` 进行合并，将结果记入 `A` 中，并返回。具体过程为：

    1.  在 `B1`、`B2` 中选择第一项较小的数列，如果相等则选择 `B1`。

    2.  将选择的数列的第一项从数列中删除，并添加到 `A` 的末尾。

    3.  重复（4.1），直到其中一个数列为空，此时将另一个数列中剩余的项依次加入到 `A` 的末尾。

---

## 算法4-2 快速排序 `quick_sort(l, r)`

**输入**：数组 `A`

**输出**：排好序的 `A`

### 具体流程
1.  在 `A` 中 `[l, r)` 段选择一个数，比如 `m = A[r−1]`。

2.  以 `m` 为准对 `[l, r)` 进行划分，使得 `[l, k)` 中任意的数 `x` 满足 `x ≤ m`，而 `[k, r)` 中任意的数 `y` 满足 `y > m`。

    具体过程如下：

    1.  设指针 `i` 用于扫描 `[l, r)` 中的每一个数，初始时 `i = l`，`k = l`，保证 `[l, k)` 中任意数 `x` 满足 `x ≤ m`，且 `[k, i)` 中任意的数 `y` 满足 `y > m`。

    2.  如果 `A[i] ≤ m`，则将 `A[i]` 与 `A[k]` 互换位置，并将 `k + 1`。

    3.  将 `i + 1`，重复（2.2）直到 `i = r`。

3.  递归调用 `quick_sort(l, k−1)` 与 `quick_sort(k, r)` 对子序列进行排序。

---

## 算法4-3 二叉搜索树查找 `Find(T, x)`

**输入**：树 `T` 和值 `x`

**输出**：`Yes` 或 `No`

### 具体流程
1.  如果 `T` 是空树，返回 `No`。

2.  如果 `T` 的根节点的值为 `x`，返回 `Yes`。

3.  否则：

    1.  如果 `x` 小于 `T` 的根节点的值，递归 `Find(T的左子树, x)`。

    2.  否则，递归 `Find(T的右子树, x)`。

---

## 算法4-4 二叉搜索树插入 `Insert(T, x)`

**输入**：树 `T` 和值 `x`

**输出**：插入后的树 `T`

### 具体流程

1.  如果 `T` 是空树，将 `T` 变成一个只包含一个节点 `x` 的二叉搜索树。

2.  如果 `T` 的根节点的值为 `x`，返回。

3.  如果 `x` 小于 `T` 的根节点的值，递归 `Insert(T的左子树, x)`。

4.  否则，递归 `Insert(T的右子树, x)`。

---

## 算法4-5 Treap 插入 `Insert(T, x)`

**输入**：树 `T` 和值 `x`

**输出**：插入后的树 `T`

### 具体流程

1.  如果 `T` 是空树，将 `T` 变成一个只包含一个节点 `x` 的二叉搜索树。

2.  如果 `T` 的根节点的值为 `x`，属于重复值，返回。

3.  如果 `x` 小于 `T` 的根节点的值：

    1.  `Insert(T的左子树, x)`。

    2.  如果 `T` 的左儿子不满足堆性质（即优先级比 `T` 的小），则 `LeftRotate(T)`。

4.  否则：

    1.  `Insert(T的右子树, x)`。

    2.  如果 `T` 的右儿子不满足堆性质，则 `RightRotate(T)`。

---

## 算法4-6 Treap 删除（删除树 `T` 的根节点）

**输入**：节点 `T`

**输出**：删除根节点后的树 `T`

### 具体流程

1.  如果 `T` 有左儿子或右儿子，做如下过程：

    1.  如果 `T` 没有右儿子，`T ← LeftRotate(T)`。

    2.  否则如果 `T` 没有左儿子，`T ← RightRotate(T)`。

    3.  否则：

        1.  如果 `T` 的左儿子优先级小于 `T` 的右儿子，`T ← LeftRotate(T)`。

        2.  否则，`T ← RightRotate(T)`。

    4.  转到（1）。

2.  删除节点 `T`。

---

## 算法4-7 线段树操作 `Process(l, r, ll, rr)`

**输入**：当前子树的根节点 `[l, r]`，以及需要处理的区间 `[ll, rr]`

**输出**：操作后的线段树

### 具体流程

1.  如果 `ll ≤ l 且 r ≤ rr`，整段标记或返回查询内容。

2.  如果当前节点有标记，下传标记，并清空当前标记。

3.  `mid ← (l + r) / 2`。

4.  如果 `[l, mid]` 和 `[ll, rr]` 有交集，`Process(l, mid, ll, rr)`。

5.  如果 `[mid + 1, r]` 和 `[ll, rr]` 有交集，`Process(mid + 1, r, ll, rr)`。

6.  用左右子树的信息更新当前节点。

