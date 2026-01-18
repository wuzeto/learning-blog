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



# 算法设计与实现



## 2.6 二叉树算法



**二叉树遍历算法集**



**1. 非递归先序遍历**:

```python

def pre_order(T):

    if T is None:

        return

    stack = []

    stack.append(T)

    while stack:

        p = stack.pop()

        visit(p)

        if p.rchild:

            stack.append(p.rchild)

        if p.lchild:

            stack.append(p.lchild)

```



**2. 非递归中序遍历**:

```python

def in_order(T):

    stack = []

    p = T

    while p or stack:

        while p:

            stack.append(p)

            p = p.lchild

        if stack:

            p = stack.pop()

            visit(p)

            p = p.rchild

```



**3. 非递归后序遍历**:

```python

def post_order(T):

    if T is None:

        return

    stack1 = []

    stack2 = []

    stack1.append(T)

    while stack1:

        p = stack1.pop()

        stack2.append(p)

        if p.lchild:

            stack1.append(p.lchild)

        if p.rchild:

            stack1.append(p.rchild)

    while stack2:

        visit(stack2.pop())

```



**4. 层序遍历**:

```python

def level_order(T):

    if T is None:

        return

    queue = []

    queue.append(T)

    while queue:

        node = queue.pop(0)  # dequeue

        visit(node)

        if node.lchild:

            queue.append(node.lchild)

        if node.rchild:

            queue.append(node.rchild)

```



**二叉树属性判断算法**



**1. 判断满二叉树**:

```python

def is_full_binary_tree(T):

    if T is None:

        return True

    height = tree_depth(T)

    nodes = count_nodes(T)

    return nodes == 2**height - 1

```



**2. 判断完全二叉树**:

```python

def is_complete_binary_tree(T):

    if T is None:

        return True

    queue = []

    queue.append(T)

    flag = False  # 是否遇到空结点

    while queue:

        node = queue.pop(0)

        if node.lchild:

            if flag:

                return False

            queue.append(node.lchild)

        else:

            flag = True

        if node.rchild:

            if flag:

                return False

            queue.append(node.rchild)

        else:

            flag = True

    return True

```



**3. 判断二叉搜索树**:

```python

def is_BST(T, min_val=-float('inf'), max_val=float('inf')):

    if T is None:

        return True

    if T.data <= min_val or T.data >= max_val:

        return False

    return (is_BST(T.lchild, min_val, T.data) and 

            is_BST(T.rchild, T.data, max_val))

```



**4. 判断堆**:

```python

def is_heap(T, is_max_heap=True):

    if T is None:

        return True

    if T.lchild:

        if (is_max_heap and T.data < T.lchild.data) or (not is_max_heap and T.data > T.lchild.data):

            return False

        if not is_heap(T.lchild, is_max_heap):

            return False

    if T.rchild:

        if (is_max_heap and T.data < T.rchild.data) or (not is_max_heap and T.data > T.rchild.data):

            return False

        if not is_heap(T.rchild, is_max_heap):

            return False

    return True

```



**二叉树高级算法**



**1. 求结点层号**:

```python

def node_level(T, target, level=1):

    if T is None:

        return 0

    if T == target:

        return level

    left = node_level(T.lchild, target, level+1)

    if left > 0:

        return left

    return node_level(T.rchild, target, level+1)

```



**2. 求所有祖先结点**:

```python

def find_ancestors(T, target, path=None):

    if path is None:

        path = []

    if T is None:

        return False

    path.append(T)

    if T == target:

        # 输出祖先（除最后一个即target本身）

        if len(path) > 1:

            print("祖先结点:", [node.data for node in path[:-1]])

        return True

    if (find_ancestors(T.lchild, target, path) or 

        find_ancestors(T.rchild, target, path)):

        return True

    path.pop()

    return False

```



**3. 二叉链表转数组存储（按完全二叉树）**:

```python

def tree_to_array(T, A, index=1):

    if T is None:

        return

    # 确保A有足够空间

    if index >= len(A):

        A.extend([None] * (index - len(A) + 1))

    A[index] = T.data

    tree_to_array(T.lchild, A, 2*index)

    tree_to_array(T.rchild, A, 2*index+1)

```



**4. 不遍历求先/中/后序第一个结点**:

* 先序：根结点

* 中序：最左结点

* 后序：最左叶结点（或最左结点若无左子树）



**5. 求二叉树最大宽度**:

```python

def max_width(T):

    if T is None:

        return 0

    queue = []

    queue.append(T)

    max_width = 0

    while queue:

        size = len(queue)

        max_width = max(max_width, size)

        for i in range(size):

            node = queue.pop(0)

            if node.lchild:

                queue.append(node.lchild)

            if node.rchild:

                queue.append(node.rchild)

    return max_width

```



**堆操作算法**



**1. 插入堆**:

```python

def heap_insert(H, x):

    # H[0]不存储元素，从H[1]开始

    H.append(x)  # 先放到末尾

    i = len(H) - 1

    while i > 1 and H[i//2] < x:  # 大顶堆，调整

        H[i] = H[i//2]

        i = i//2

    H[i] = x

```



**2. 删除堆顶**:

```python

def heap_delete(H):

    if len(H) <= 1:  # H[0]不存储

        return None

    max_val = H[1]

    H[1] = H[-1]

    H.pop()

    adjust_down(H, 1, len(H)-1)

    return max_val



def adjust_down(H, i, n):

    temp = H[i]

    while 2*i <= n:

        child = 2*i

        if child < n and H[child] < H[child+1]:

            child += 1

        if temp >= H[child]:

            break

        H[i] = H[child]

        i = child

    H[i] = temp

```



**哈夫曼树构建**

```python

def build_huffman_tree(weights):

    # 假设结点类：Node(weight, left=None, right=None)

    import heapq

    heap = [(w, Node(w)) for w in weights]

    heapq.heapify(heap)

    while len(heap) > 1:

        w1, n1 = heapq.heappop(heap)

        w2, n2 = heapq.heappop(heap)

        new_node = Node(w1 + w2, n1, n2)

        heapq.heappush(heap, (w1 + w2, new_node))

    return heap[0][1] if heap else None

```

时间复杂度：$O(n\log n)$（使用最小堆）



## 2.7 图算法



**图基本算法**



**1. 计算顶点度**:

* 邻接矩阵：出度$\sum_{j}A[i][j]$，入度$\sum_{i}A[i][j]$

* 邻接表：出度数边表长度，入度需要遍历所有边表



**2. 存储结构转换**:

```python

def adj_matrix_to_list(M):

    """

    M: 邻接矩阵，M.vexnum顶点数，M.arcs邻接矩阵，M.vexs顶点数组

    返回邻接表L

    """

    L = AdjacencyList(M.vexnum)

    for i in range(M.vexnum):

        L.vertices[i].data = M.vexs[i]

        for j in range(M.vexnum):

            if M.arcs[i][j] != 0:

                # 创建边结点

                edge_node = EdgeNode(j, M.arcs[i][j])

                # 插入到邻接表头

                edge_node.next = L.vertices[i].firstarc

                L.vertices[i].firstarc = edge_node

    return L

```



**图连通性算法**



**1. 判断两点连通（DFS）**:

```python

def is_connected(G, u, v):

    visited = [False] * G.vexnum

    return dfs_connect(G, u, v, visited)



def dfs_connect(G, u, v, visited):

    visited[u] = True

    if u == v:

        return True

    for w in G.adjacent(u):

        if not visited[w] and dfs_connect(G, w, v, visited):

            return True

    return False

```



**2. 判断无向图连通**:

```python

def is_connected_graph(G):

    if G.vexnum == 0:

        return True

    visited = [False] * G.vexnum

    count = dfs_count(G, 0, visited)

    return count == G.vexnum



def dfs_count(G, v, visited):

    visited[v] = True

    count = 1

    for w in G.adjacent(v):

        if not visited[w]:

            count += dfs_count(G, w, visited)

    return count

```



**3. 判断有向图强连通**:

```python

def is_strongly_connected(G):

    for v in range(G.vexnum):

        visited = [False] * G.vexnum

        count = dfs_count(G, v, visited)

        if count != G.vexnum:

            return False

    return True

```

更高效：Kosaraju或Tarjan算法



**环路检测算法**



**1. 检测无向图环**:

```python

def has_cycle_undirected(G):

    visited = [False] * G.vexnum

    for v in range(G.vexnum):

        if not visited[v] and dfs_cycle_undirected(G, v, -1, visited):

            return True

    return False



def dfs_cycle_undirected(G, u, parent, visited):

    visited[u] = True

    for v in G.adjacent(u):

        if not visited[v]:

            if dfs_cycle_undirected(G, v, u, visited):

                return True

        elif v != parent:

            return True

    return False

```



**2. 检测有向图环**:

```python

def has_cycle_directed(G):

    color = [0] * G.vexnum  # 0:未访问, 1:访问中, 2:已访问

    for v in range(G.vexnum):

        if color[v] == 0 and dfs_cycle_directed(G, v, color):

            return True

    return False



def dfs_cycle_directed(G, u, color):

    color[u] = 1  # 访问中

    for v in G.adjacent(u):

        if color[v] == 1:

            return True  # 发现后向边

        elif color[v] == 0 and dfs_cycle_directed(G, v, color):

            return True

    color[u] = 2  # 已访问

    return False

```



**3. 求含顶点V的所有环路**:

```python

def find_cycles_with_v(G, v):

    path = []

    visited = [False] * G.vexnum

    dfs_find_cycles(G, v, v, path, visited)



def dfs_find_cycles(G, start, current, path, visited):

    visited[current] = True

    path.append(current)

    for w in G.adjacent(current):

        if w == start and len(path) > 2:

            # 输出环路

            print("环路:", path + [start])

        elif not visited[w]:

            dfs_find_cycles(G, start, w, path, visited)

    visited[current] = False

    path.pop()

```



**图经典算法**



**1. Prim算法（最小生成树）**:

```python

def prim(G):

    # 假设G有vexnum个顶点，从0开始

    U = {0}  # 已选顶点集

    TE = []  # 最小生成树边集

    lowcost = [float('inf')] * G.vexnum

    closest = [-1] * G.vexnum

    

    # 初始化lowcost和closest

    for j in range(G.vexnum):

        if j != 0 and G.arcs[0][j] != 0:

            lowcost[j] = G.arcs[0][j]

            closest[j] = 0

    

    for i in range(1, G.vexnum):

        # 选择连接U和V-U的最小边

        min_cost = float('inf')

        k = -1

        for j in range(G.vexnum):

            if j not in U and lowcost[j] < min_cost:

                min_cost = lowcost[j]

                k = j

        

        if k != -1:

            U.add(k)

            TE.append((closest[k], k, min_cost))

            # 更新lowcost和closest

            for j in range(G.vexnum):

                if j not in U and G.arcs[k][j] != 0 and G.arcs[k][j] < lowcost[j]:

                    lowcost[j] = G.arcs[k][j]

                    closest[j] = k

    

    return TE

```

时间复杂度：$O(n^2)$



**2. Kruskal算法**:

```python

def kruskal(G):

    edges = []

    for i in range(G.vexnum):

        for j in range(i+1, G.vexnum):

            if G.arcs[i][j] != 0:

                edges.append((G.arcs[i][j], i, j))

    edges.sort()  # 按权值升序排序

    

    parent = list(range(G.vexnum))

    TE = []

    

    def find(x):

        while parent[x] != x:

            parent[x] = parent[parent[x]]

            x = parent[x]

        return x

    

    def union(x, y):

        root_x, root_y = find(x), find(y)

        if root_x != root_y:

            parent[root_y] = root_x

    

    for weight, u, v in edges:

        if find(u) != find(v):

            TE.append((u, v, weight))

            union(u, v)

            if len(TE) == G.vexnum - 1:

                break

    

    return TE

```

时间复杂度：$O(e\log e)$



**3. Dijkstra算法（单源最短路径）**:

```python

def dijkstra(G, s):

    dist = [float('inf')] * G.vexnum

    visited = [False] * G.vexnum

    path = [-1] * G.vexnum

    

    dist[s] = 0

    for i in range(G.vexnum):

        # 选择未访问中dist最小的顶点

        u = -1

        min_dist = float('inf')

        for j in range(G.vexnum):

            if not visited[j] and dist[j] < min_dist:

                min_dist = dist[j]

                u = j

        if u == -1:

            break

        visited[u] = True

        # 更新邻接顶点的dist

        for v in G.adjacent(u):

            weight = G.arcs[u][v]

            if not visited[v] and dist[u] + weight < dist[v]:

                dist[v] = dist[u] + weight

                path[v] = u

    return dist, path

```



**4. Floyd算法（多源最短路径）**:

```python

def floyd(G):

    n = G.vexnum

    D = [row[:] for row in G.arcs]  # 距离矩阵

    P = [[-1] * n for _ in range(n)]  # 路径矩阵

    

    # 初始化

    for i in range(n):

        for j in range(n):

            if i != j and D[i][j] != 0:

                P[i][j] = i

    

    for k in range(n):

        for i in range(n):

            for j in range(n):

                if D[i][k] != float('inf') and D[k][j] != float('inf'):

                    if D[i][j] > D[i][k] + D[k][j]:

                        D[i][j] = D[i][k] + D[k][j]

                        P[i][j] = P[k][j]

    return D, P

```



**5. 拓扑排序**:

```python

def topological_sort(G):

    indegree = [0] * G.vexnum

    # 计算入度

    for i in range(G.vexnum):

        for j in G.adjacent(i):

            indegree[j] += 1

    

    stack = []

    for i in range(G.vexnum):

        if indegree[i] == 0:

            stack.append(i)

    

    result = []

    count = 0

    while stack:

        v = stack.pop()

        result.append(v)

        count += 1

        for w in G.adjacent(v):

            indegree[w] -= 1

            if indegree[w] == 0:

                stack.append(w)

    

    if count < G.vexnum:

        return None  # 有环

    return result

```



**6. 关键路径（AOE网）**:

```python

def critical_path(G):

    # 假设G为AOE网，顶点表示事件

    n = G.vexnum

    # 1. 拓扑排序求ve

    topo_order = topological_sort(G)

    if not topo_order:

        return None

    

    ve = [0] * n

    for u in topo_order:

        for v in G.adjacent(u):

            weight = G.arcs[u][v]

            if ve[v] < ve[u] + weight:

                ve[v] = ve[u] + weight

    

    # 2. 逆拓扑排序求vl

    vl = [ve[topo_order[-1]]] * n

    for u in reversed(topo_order):

        for v in G.adjacent(u):

            weight = G.arcs[u][v]

            if vl[u] > vl[v] - weight:

                vl[u] = vl[v] - weight

    

    # 3. 求关键活动

    critical_edges = []

    for u in range(n):

        for v in G.adjacent(u):

            weight = G.arcs[u][v]

            e = ve[u]  # 活动最早开始时间

            l = vl[v] - weight  # 活动最晚开始时间

            if e == l:

                critical_edges.append((u, v, weight))

    

    return critical_edges

```



**其他图算法**



**1. 关节点（割点）查找**:

```python

def find_articulation_points(G):

    n = G.vexnum

    visited = [False] * n

    disc = [0] * n  # 发现时间

    low = [0] * n  # 可回溯到的最早发现时间

    parent = [-1] * n

    ap = [False] * n

    time = 0

    

    def dfs_articulation(u):

        nonlocal time

        children = 0

        visited[u] = True

        disc[u] = low[u] = time

        time += 1

        

        for v in G.adjacent(u):

            if not visited[v]:

                children += 1

                parent[v] = u

                dfs_articulation(v)

                low[u] = min(low[u], low[v])

                

                # u是根且有多个孩子，则是关节点

                if parent[u] == -1 and children > 1:

                    ap[u] = True

                # u不是根且low[v] >= disc[u]，则是关节点

                if parent[u] != -1 and low[v] >= disc[u]:

                    ap[u] = True

            elif v != parent[u]:

                low[u] = min(low[u], disc[v])

    

    for i in range(n):

        if not visited[i]:

            dfs_articulation(i)

    

    return [i for i in range(n) if ap[i]]

```



**2. 强连通分量（Tarjan算法）**:

```python

def tarjan_scc(G):

    n = G.vexnum

    index = [-1] * n  # 发现时间索引

    lowlink = [-1] * n

    on_stack = [False] * n

    stack = []

    time = 0

    scc_list = []

    

    def strong_connect(v):

        nonlocal time

        index[v] = lowlink[v] = time

        time += 1

        stack.append(v)

        on_stack[v] = True

        

        for w in G.adjacent(v):

            if index[w] == -1:

                strong_connect(w)

                lowlink[v] = min(lowlink[v], lowlink[w])

            elif on_stack[w]:

                lowlink[v] = min(lowlink[v], index[w])

        

        if lowlink[v] == index[v]:

            scc = []

            while True:

                w = stack.pop()

                on_stack[w] = False

                scc.append(w)

                if w == v:

                    break

            scc_list.append(scc)

    

    for v in range(n):

        if index[v] == -1:

            strong_connect(v)

    

    return scc_list

```



**3. 疫情传播模型（SIR/SEIR）**:

* 图表示接触网络

* 顶点状态：S（易感）、I（感染）、R（康复）

* 传播概率$\beta$，恢复概率$\gamma$

* 模拟步骤：初始化→传播→恢复→迭代