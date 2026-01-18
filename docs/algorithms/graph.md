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
