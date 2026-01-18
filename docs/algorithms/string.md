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

**串ADT与存储**

**串的存储结构**:
* 定长顺序存储：char str[MAXLEN+1]
* 堆分配存储：动态分配，length字段
* 块链存储：块状链表

**串的基本操作**:
* StrAssign, StrCopy, StrEmpty, StrCompare
* StrLength, Concat, SubString
* Index（朴素/KMP）, Replace, StrInsert, StrDelete

## 2.4 字符串算法

**KMP算法完整实现**

**计算next数组**:
```python
def get_next(T):
    next_arr = [-1] * len(T)
    i, j = 0, -1
    while i < len(T) - 1:
        if j == -1 or T[i] == T[j]:
            i += 1
            j += 1
            next_arr[i] = j
        else:
            j = next_arr[j]
    return next_arr
```

**KMP匹配**:
```python
def KMP(S, T):
    next_arr = get_next(T)
    i, j = 0, 0
    while i < len(S) and j < len(T):
        if j == -1 or S[i] == T[j]:
            i += 1
            j += 1
        else:
            j = next_arr[j]
    if j == len(T):
        return i - j
    else:
        return -1
```
时间复杂度：$O(m+n)$

## 2.5 数组与矩阵算法

**稀疏矩阵转置算法**

**1. 普通转置**:
```python
def transpose_sparse_matrix(M):
    """
    M: 稀疏矩阵，包含属性 mu(行数), nu(列数), tu(非零元数), data(三元组列表)
    data格式: [(i, j, value), ...]
    """
    T = SparseMatrix()
    T.mu = M.nu  # 转置后行数=原列数
    T.nu = M.mu  # 转置后列数=原行数
    T.tu = M.tu
    
    if M.tu > 0:
        T.data = []
        for col in range(1, M.nu + 1):
            for p in range(M.tu):
                if M.data[p][1] == col:  # data[p].j == col
                    # 交换行列
                    i_trans = M.data[p][1]  # 原列变为行
                    j_trans = M.data[p][0]  # 原行变为列
                    value = M.data[p][2]
                    T.data.append((i_trans, j_trans, value))
    return T
```
时间复杂度：$O(nu \times tu)$

**2. 快速转置**:
```python
def fast_transpose(M):
    """
    快速转置算法
    """
    T = SparseMatrix()
    T.mu = M.nu
    T.nu = M.mu
    T.tu = M.tu
    
    if M.tu > 0:
        # 计算每列非零元数
        num = [0] * (M.nu + 1)  # 下标从1开始
        for p in range(M.tu):
            col = M.data[p][1]
            num[col] += 1
        
        # 计算每列第一个非零元位置
        cpot = [0] * (M.nu + 1)
        cpot[1] = 1
        for col in range(2, M.nu + 1):
            cpot[col] = cpot[col-1] + num[col-1]
        
        # 转置
        T.data = [None] * (M.tu + 1)  # 预留位置，下标从1开始
        for p in range(M.tu):
            col = M.data[p][1]
            q = cpot[col]
            # 转置：行列交换
            T.data[q] = (M.data[p][1], M.data[p][0], M.data[p][2])
            cpot[col] += 1
        
        # 移除首项None
        T.data = T.data[1:]
    
    return T
```
时间复杂度：$O(nu + tu)$