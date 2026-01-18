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