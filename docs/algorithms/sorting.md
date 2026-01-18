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

# 算法设计与实现

## 2.9 排序算法

**内部排序算法**

**1. 简单选择排序**:
```python
def selection_sort(A, n):
    for i in range(n-1):
        min_idx = i
        for j in range(i+1, n):
            if A[j] < A[min_idx]:
                min_idx = j
        A[i], A[min_idx] = A[min_idx], A[i]
```
时间复杂度：$O(n^2)$，不稳定

**2. 直接插入排序**:
```python
def insertion_sort(A, n):
    for i in range(1, n):
        key = A[i]
        j = i - 1
        while j >= 0 and A[j] > key:
            A[j+1] = A[j]
            j -= 1
        A[j+1] = key
```
时间复杂度：最好$O(n)$，最坏$O(n^2)$，稳定

**3. 折半插入排序**:
```python
def binary_insertion_sort(A, n):
    for i in range(1, n):
        key = A[i]
        low, high = 0, i-1
        while low <= high:
            mid = (low + high) // 2
            if key < A[mid]:
                high = mid - 1
            else:
                low = mid + 1
        for j in range(i-1, low-1, -1):
            A[j+1] = A[j]
        A[low] = key
```
比较次数减少，移动次数不变

**4. 冒泡排序**:
```python
def bubble_sort(A, n):
    for i in range(n-1):
        swapped = False
        for j in range(n-i-1):
            if A[j] > A[j+1]:
                A[j], A[j+1] = A[j+1], A[j]
                swapped = True
        if not swapped:
            break
```
时间复杂度：最好$O(n)$，最坏$O(n^2)$，稳定

**5. 快速排序划分方法**:

* **Lomuto划分（教材常用）**:
```python
def partition_lomuto(A, low, high):
    pivot = A[high]
    i = low - 1
    for j in range(low, high):
        if A[j] <= pivot:
            i += 1
            A[i], A[j] = A[j], A[i]
    A[i+1], A[high] = A[high], A[i+1]
    return i + 1
```

* **Hoare划分（原版）**:
```python
def partition_hoare(A, low, high):
    pivot = A[low]
    i, j = low - 1, high + 1
    while True:
        while True:
            i += 1
            if A[i] >= pivot:
                break
        while True:
            j -= 1
            if A[j] <= pivot:
                break
        if i >= j:
            return j
        A[i], A[j] = A[j], A[i]
```

**6. 希尔排序（Shell Sort）**:
```python
def shell_sort(A, n):
    gap = n // 2
    while gap > 0:
        for i in range(gap, n):
            temp = A[i]
            j = i
            while j >= gap and A[j-gap] > temp:
                A[j] = A[j-gap]
                j -= gap
            A[j] = temp
        gap //= 2
```
时间复杂度：$O(n^{1.3})$~$O(n^2)$，不稳定

**7. 堆排序**（见前面堆操作部分）

**8. 归并排序**:
```python
def merge_sort(A, low, high):
    if low < high:
        mid = (low + high) // 2
        merge_sort(A, low, mid)
        merge_sort(A, mid+1, high)
        merge(A, low, mid, high)

def merge(A, low, mid, high):
    left = A[low:mid+1]
    right = A[mid+1:high+1]
    i = j = 0
    k = low
    
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            A[k] = left[i]
            i += 1
        else:
            A[k] = right[j]
            j += 1
        k += 1
    
    while i < len(left):
        A[k] = left[i]
        i += 1
        k += 1
    
    while j < len(right):
        A[k] = right[j]
        j += 1
        k += 1
```

**9. 基数排序（LSD）**:
```python
def radix_sort(A, n):
    # 找到最大值
    max_val = max(A)
    exp = 1
    
    while max_val // exp > 0:
        counting_sort_by_digit(A, n, exp)
        exp *= 10

def counting_sort_by_digit(A, n, exp):
    output = [0] * n
    count = [0] * 10
    
    # 计数
    for i in range(n):
        index = (A[i] // exp) % 10
        count[index] += 1
    
    # 累计
    for i in range(1, 10):
        count[i] += count[i-1]
    
    # 输出
    for i in range(n-1, -1, -1):
        index = (A[i] // exp) % 10
        output[count[index]-1] = A[i]
        count[index] -= 1
    
    # 复制回原数组
    for i in range(n):
        A[i] = output[i]
```
时间复杂度：$O(d(n+r))$，稳定

**10. 计数排序**:
```python
def counting_sort(A, n):
    if n == 0:
        return
    
    # 找到最大值
    max_val = max(A)
    
    # 创建计数数组
    count = [0] * (max_val + 1)
    
    # 计数
    for i in range(n):
        count[A[i]] += 1
    
    # 累计
    for i in range(1, max_val + 1):
        count[i] += count[i-1]
    
    # 输出
    output = [0] * n
    for i in range(n-1, -1, -1):
        output[count[A[i]]-1] = A[i]
        count[A[i]] -= 1
    
    # 复制回原数组
    for i in range(n):
        A[i] = output[i]
```
时间复杂度：$O(n+k)$，稳定

**外部排序算法**

**1. 置换选择排序**:
```python
def replacement_selection(input_stream, m):
    """
    input_stream: 输入流
    m: 内存容量（可容纳记录数）
    """
    memory = []
    output_runs = []
    current_run = []
    
    # 初始化：读入m个记录
    for _ in range(m):
        if input_stream.has_next():
            memory.append(input_stream.next())
    
    while memory:
        # 选择最小记录输出
        min_record = min(memory)
        current_run.append(min_record)
        memory.remove(min_record)
        
        # 从输入读入下一个记录
        if input_stream.has_next():
            new_record = input_stream.next()
            if new_record >= min_record:
                memory.append(new_record)
            else:
                # 标记为"不可用"，这里简单处理为不加入
                pass
        
        # 如果内存为空或全为"不可用"，开始新归并段
        if not memory:
            output_runs.append(current_run)
            current_run = []
            # 重新初始化内存
            for _ in range(m):
                if input_stream.has_next():
                    memory.append(input_stream.next())
    
    return output_runs
```
平均初始归并段长度：$2m$

**2. 最佳归并树（哈夫曼树应用）**:
* 叶结点权值：归并段长度
* 构造$k$叉哈夫曼树
* 若$(r-1)\%(k-1) \neq 0$，需添加虚段（权值0）
* 最小读写次数：WPL（带权路径长度）

**3. 败者树（k路归并优化）**:
* 内部结点记录"败者"（较大者）
* 叶结点存放归并段当前元素
* 调整：从叶到根比较，更新败者
* 比较次数：$\log_2 k$（相比$k-1$次）

**4. k路平衡归并**:
* 归并趟数：$S=\lceil\log_k r\rceil$
* 总读写次数：$2 \times S \times n$
* 使用败者树减少比较次数