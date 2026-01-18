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





# 线性代数



## 行列式



### Laplace 展开定理



**Laplace 展开定理**

设 $A = (a_{ij})$ 是 $n$ 阶方阵，则对任意固定的 $i$（按第 $i$ 行展开）：

$\det(A) = \sum_{j=1}^n (-1)^{i+j} a_{ij} M_{ij}$

或对任意固定的 $j$（按第 $j$ 列展开）：

$\det(A) = \sum_{i=1}^n (-1)^{i+j} a_{ij} M_{ij}$

其中 $M_{ij}$ 是元素 $a_{ij}$ 的余子式。



**余子式与代数余子式**

* 余子式 $M_{ij}$：删除第 $i$ 行第 $j$ 列后的 $n-1$ 阶子式

* 代数余子式 $A_{ij} = (-1)^{i+j} M_{ij}$



**Laplace 定理的一般形式**

在 $n$ 阶行列式中，任意取定 $k$ 行（列），则这 $k$ 行（列）中所有 $k$ 阶子式与其代数余子式的乘积之和等于行列式的值。



> **示例**

> 计算行列式：

> $\begin{vmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \\ 7 & 8 & 9 \end{vmatrix}$

> 按第一行展开：

> $\det = 1 \cdot \begin{vmatrix} 5 & 6 \\ 8 & 9 \end{vmatrix} - 2 \cdot \begin{vmatrix} 4 & 6 \\ 7 & 9 \end{vmatrix} + 3 \cdot \begin{vmatrix} 4 & 5 \\ 7 & 8 \end{vmatrix} = 1\cdot(-3) - 2\cdot(-6) + 3\cdot(-3) = 0$



### Cramer 法则



**Cramer 法则**

设 $n$ 元线性方程组：

$\begin{cases} a_{11}x_1 + a_{12}x_2 + \cdots + a_{1n}x_n = b_1 \\ a_{21}x_1 + a_{22}x_2 + \cdots + a_{2n}x_n = b_2 \\ \vdots \\ a_{n1}x_1 + a_{n2}x_2 + \cdots + a_{nn}x_n = b_n \end{cases}$

系数行列式 $D = \det(A) \neq 0$，则方程组有唯一解：

$x_j = \frac{D_j}{D}, \quad j = 1, 2, \dots, n$

其中 $D_j$ 是将 $D$ 的第 $j$ 列换成常数列 $(b_1, b_2, \dots, b_n)^T$ 所得的行列式。



> **示例**

> 解方程组：

> $\begin{cases} 2x + y = 5 \\ x + 3y = 7 \end{cases}$

> 解：

> $D = \begin{vmatrix} 2 & 1 \\ 1 & 3 \end{vmatrix} = 5, \quad D_1 = \begin{vmatrix} 5 & 1 \\ 7 & 3 \end{vmatrix} = 8, \quad D_2 = \begin{vmatrix} 2 & 5 \\ 1 & 7 \end{vmatrix} = 9$

> 所以 $x = \frac{8}{5}, y = \frac{9}{5}$。



### Vandermonde 行列式



**Vandermonde 行列式**

$V_n = \begin{vmatrix} 1 & 1 & 1 & \cdots & 1 \\ x_1 & x_2 & x_3 & \cdots & x_n \\ x_1^2 & x_2^2 & x_3^2 & \cdots & x_n^2 \\ \vdots & \vdots & \vdots & \ddots & \vdots \\ x_1^{n-1} & x_2^{n-1} & x_3^{n-1} & \cdots & x_n^{n-1} \end{vmatrix} = \prod_{1 \leq i < j \leq n} (x_j - x_i)$



**证明**

用数学归纳法。当 $n=2$ 时：

$\begin{vmatrix} 1 & 1 \\ x_1 & x_2 \end{vmatrix} = x_2 - x_1$

假设对 $n-1$ 阶成立，对 $n$ 阶从最后一行开始，每行减去前一行的 $x_1$ 倍，然后按第一列展开。



> **示例**

> 计算：

> $\begin{vmatrix} 1 & 1 & 1 \\ a & b & c \\ a^2 & b^2 & c^2 \end{vmatrix} = (b-a)(c-a)(c-b)$



### 行列式乘积公式



**行列式乘积公式**

设 $A, B$ 都是 $n$ 阶方阵，则：

$\det(AB) = \det(A) \det(B)$



**推论**

* $\det(A^k) = [\det(A)]^k$

* 若 $A$ 可逆，则 $\det(A^{-1}) = [\det(A)]^{-1}$

* $\det(cA) = c^n \det(A)$，其中 $c$ 是常数



**分块矩阵行列式**

设 $A, B, C, D$ 都是方阵，且 $A$ 可逆，则：

$\det \begin{pmatrix} A & B \\ C & D \end{pmatrix} = \det(A) \det(D - CA^{-1}B)$

特别地，当 $AC = CA$ 时：

$\det \begin{pmatrix} A & B \\ C & D \end{pmatrix} = \det(AD - CB)$



### Weinstein-Aronszajn 恒等式



**Weinstein-Aronszajn 恒等式**

设 $A$ 是 $m \times n$ 矩阵，$B$ 是 $n \times m$ 矩阵，则：

$\det(I_m + AB) = \det(I_n + BA)$

特别地，当 $m = 1$ 时，设 $\mathbf{u}, \mathbf{v}$ 是 $n$ 维列向量，则：

$\det(I_n + \mathbf{u}\mathbf{v}^T) = 1 + \mathbf{v}^T\mathbf{u}$



**证明**

考虑分块矩阵：

$\begin{vmatrix} I_m & -A \\ B & I_n \end{vmatrix} = \det(I_m + AB) = \det(I_n + BA)$

第一个等号通过行变换，第二个等号通过列变换。



> **示例**

> 设 $\mathbf{u} = (1,2)^T, \mathbf{v} = (3,4)^T$，则：

> $\mathbf{u}\mathbf{v}^T = \begin{pmatrix} 3 & 4 \\ 6 & 8 \end{pmatrix}, \quad I_2 + \mathbf{u}\mathbf{v}^T = \begin{pmatrix} 4 & 4 \\ 6 & 9 \end{pmatrix}$

> 直接计算：$\det = 36 - 24 = 12$，而 $1 + \mathbf{v}^T\mathbf{u} = 1 + (3,4)(1,2)^T = 1 + 11 = 12$。



### 准三角行列式



**准三角行列式（分块三角行列式）**

设 $A, D$ 是方阵，则：

$\det \begin{pmatrix} A & B \\ 0 & D \end{pmatrix} = \det(A) \det(D)$

$\det \begin{pmatrix} A & 0 \\ C & D \end{pmatrix} = \det(A) \det(D)$



**更一般的分块行列式**

$\det \begin{pmatrix} A & B \\ C & D \end{pmatrix} = 

\begin{cases}

   \det(A) \det(D - CA^{-1}B), & \text{若 } A \text{ 可逆} \\

   \det(D) \det(A - BD^{-1}C), & \text{若 } D \text{ 可逆}

\end{cases}$



> **示例**

> 计算：

> $\begin{vmatrix} 1 & 2 & 0 & 0 \\ 3 & 4 & 0 & 0 \\ 5 & 6 & 7 & 8 \\ 9 & 10 & 11 & 12 \end{vmatrix} = \begin{vmatrix} 1 & 2 \\ 3 & 4 \end{vmatrix} \cdot \begin{vmatrix} 7 & 8 \\ 11 & 12 \end{vmatrix} = (-2) \cdot (-4) = 8$



### Kronecker 符号



**Kronecker delta 符号**

$\delta_{ij} = 

\begin{cases}

   1, & \text{若 } i = j \\

   0, & \text{若 } i \neq j

\end{cases}$



**Kronecker 符号的性质**

* $\sum_j \delta_{ij} a_j = a_i$

* $\sum_j \delta_{ij} \delta_{jk} = \delta_{ik}$

* 单位矩阵 $I = (\delta_{ij})$

* 正交矩阵的性质：$\sum_k a_{ik} a_{jk} = \delta_{ij}$



**行列式的 Kronecker 表示**

$n$ 阶行列式可以用 Kronecker 符号表示为：

$\det(A) = \sum_{\sigma \in S_n} \left( \prod_{i=1}^n a_{i,\sigma(i)} \right) \cdot \operatorname{sgn}(\sigma)$

其中 $S_n$ 是 $n$ 阶对称群，$\operatorname{sgn}(\sigma)$ 是置换 $\sigma$ 的符号。



**Levi-Civita 符号**

定义 Levi-Civita 符号（完全反对称张量）：

$\varepsilon_{i_1 i_2 \cdots i_n} = 

\begin{cases}

   1, & \text{若 } (i_1, i_2, \dots, i_n) \text{ 是偶排列} \\

   -1, & \text{若 } (i_1, i_2, \dots, i_n) \text{ 是奇排列} \\

   0, & \text{其他情况（有重复指标）}

\end{cases}$

则行列式可表示为：

$\det(A) = \sum_{i_1,i_2,\dots,i_n} \varepsilon_{i_1 i_2 \cdots i_n} a_{1i_1} a_{2i_2} \cdots a_{ni_n}$



### 其他重要行列式公式



**伴随矩阵公式**

设 $A$ 是 $n$ 阶方阵，$A_{ij}$ 是 $a_{ij}$ 的代数余子式，则伴随矩阵：

$\operatorname{adj}(A) = (A_{ji})$

满足：

$A \cdot \operatorname{adj}(A) = \operatorname{adj}(A) \cdot A = \det(A) I$



**特征多项式**

矩阵 $A$ 的特征多项式：

$\det(\lambda I - A) = \lambda^n - (\operatorname{tr}A)\lambda^{n-1} + \cdots + (-1)^n \det(A)$

其中 $\operatorname{tr}A$ 是 $A$ 的迹。



**Jacobi 公式**

若 $A(t)$ 是可微的矩阵值函数，且 $A(t)$ 可逆，则：

$\frac{d}{dt} \det(A(t)) = \det(A(t)) \cdot \operatorname{tr}\left( A^{-1}(t) \frac{dA(t)}{dt} \right)$



### 应用实例



> **示例：循环行列式**

> 计算循环行列式：

> $D_n = \begin{vmatrix} a_0 & a_1 & a_2 & \cdots & a_{n-1} \\ a_{n-1} & a_0 & a_1 & \cdots & a_{n-2} \\ a_{n-2} & a_{n-1} & a_0 & \cdots & a_{n-3} \\ \vdots & \vdots & \vdots & \ddots & \vdots \\ a_1 & a_2 & a_3 & \cdots & a_0 \end{vmatrix} = \prod_{k=0}^{n-1} f(\omega^k)$

> 其中 $\omega = e^{2\pi i/n}$，$f(x) = a_0 + a_1 x + \cdots + a_{n-1} x^{n-1}$。



> **示例：三对角行列式**

> 计算三对角行列式：

> $D_n = \begin{vmatrix} a & b & 0 & \cdots & 0 \\ c & a & b & \cdots & 0 \\ 0 & c & a & \cdots & 0 \\ \vdots & \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & 0 & \cdots & a \end{vmatrix}$

> 递推关系：$D_n = aD_{n-1} - bcD_{n-2}$。



## 方程组向量组



### Sylvester 秩不等式



**Sylvester 秩不等式**

设 $A$ 是 $m \times n$ 矩阵，$B$ 是 $n \times p$ 矩阵，则：

$\text{rank}(A) + \text{rank}(B) - n \leq \text{rank}(AB) \leq \min\{\text{rank}(A), \text{rank}(B)\}$



> **证明**（简要）

> 考虑线性映射：$\mathbb{R}^p \xrightarrow{B} \mathbb{R}^n \xrightarrow{A} \mathbb{R}^m$。

> 由秩-零度定理可得不等式。



**Sylvester 不等式推论**

1. 若 $A$ 列满秩，则 $\text{rank}(AB) = \text{rank}(B)$

2. 若 $B$ 行满秩，则 $\text{rank}(AB) = \text{rank}(A)$

3. 若 $A, B$ 都可逆，则 $\text{rank}(AB) = n$



> **示例**

> 设 $A = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$, $B = \begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix}$，则：

> $\text{rank}(A) = 1, \quad \text{rank}(B) = 1, \quad \text{rank}(AB) = 0$

> 验证：$1 + 1 - 2 = 0 \leq 0 \leq \min\{1,1\} = 1$。



### Frobenius 不等式



**Frobenius 不等式**

设 $A, B, C$ 是适当维数的矩阵，使得乘积 $ABC$ 有定义，则：

$\text{rank}(AB) + \text{rank}(BC) \leq \text{rank}(B) + \text{rank}(ABC)$



> **证明思路**

> 考虑分块矩阵并利用秩的性质。



**Frobenius 不等式推论**

1. 若 $BC = 0$，则 $\text{rank}(AB) \leq \text{rank}(B) - \text{rank}(ABC)$

2. 若 $AB = B$，则 $\text{rank}(B) + \text{rank}(BC) \leq \text{rank}(B) + \text{rank}(BC)$（平凡情况）



> **示例**

> 设 $A = \begin{pmatrix} 1 & 0 \end{pmatrix}$, $B = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$, $C = \begin{pmatrix} 0 \\ 1 \end{pmatrix}$，则：

> $AB = \begin{pmatrix} 1 & 0 \end{pmatrix}, \quad BC = \begin{pmatrix} 0 \\ 0 \end{pmatrix}, \quad ABC = 0$

> 验证：$1 + 0 \leq 1 + 0$，即 $1 \leq 1$。



### Hamilton-Cayley 定理



**Hamilton-Cayley 定理**

设 $A$ 是 $n$ 阶方阵，$f(\lambda) = \det(\lambda I - A)$ 是 $A$ 的特征多项式，则：

$f(A) = 0$

即矩阵满足它自己的特征方程。



**证明思路**

利用伴随矩阵 $B(\lambda) = \operatorname{adj}(\lambda I - A)$ 和恒等式 $(\lambda I - A)B(\lambda) = f(\lambda)I$，比较系数。



**Hamilton-Cayley 定理推论**

1. $A^n$ 可用 $I, A, A^2, \dots, A^{n-1}$ 线性表示

2. 矩阵的最小多项式整除特征多项式

3. 若 $A$ 可逆，则 $A^{-1}$ 可用 $I, A, A^2, \dots, A^{n-1}$ 线性表示



> **示例**

> 设 $A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$，特征多项式：

> $f(\lambda) = \det(\lambda I - A) = \begin{vmatrix} \lambda-2 & -1 \\ -1 & \lambda-2 \end{vmatrix} = (\lambda-2)^2 - 1 = \lambda^2 - 4\lambda + 3$

> 验证：

> $f(A) = A^2 - 4A + 3I = \begin{pmatrix} 5 & 4 \\ 4 & 5 \end{pmatrix} - 4\begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix} + 3\begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix}$



### Hermite 矩阵与二次型



**Hermite 矩阵**

设 $A \in \mathbb{C}^{n \times n}$，若 $A^H = A$（其中 $A^H = \overline{A}^T$），则称 $A$ 为 Hermite 矩阵。

实数域上即为对称矩阵：$A^T = A$。



**Hermite 矩阵性质**

1. Hermite 矩阵的特征值都是实数

2. Hermite 矩阵属于不同特征值的特征向量相互正交

3. Hermite 矩阵可被酉对角化：存在酉矩阵 $U$ 使得 $U^H A U = \Lambda$，其中 $\Lambda$ 为实对角矩阵



**Rayleigh-Ritz 定理**

设 $A$ 是 $n$ 阶 Hermite 矩阵，特征值为 $\lambda_1 \leq \lambda_2 \leq \cdots \leq \lambda_n$，则：

$\lambda_1 = \min_{\mathbf{x} \neq 0} \frac{\mathbf{x}^H A \mathbf{x}}{\mathbf{x}^H \mathbf{x}}, \quad \lambda_n = \max_{\mathbf{x} \neq 0} \frac{\mathbf{x}^H A \mathbf{x}}{\mathbf{x}^H \mathbf{x}}$



**惯性定理（Sylvester 惯性定律）**

设 $A$ 是 $n$ 阶 Hermite 矩阵，$C$ 是 $n$ 阶可逆矩阵，则 $A$ 和 $C^H A C$ 具有相同数量的正特征值、负特征值和零特征值。



**正定矩阵**

Hermite 矩阵 $A$ 称为正定的，如果对任意非零向量 $\mathbf{x}$，有 $\mathbf{x}^H A \mathbf{x} > 0$。

等价条件：

* 所有特征值大于 0

* 所有顺序主子式大于 0

* 存在可逆矩阵 $P$ 使得 $A = P^H P$



### 向量组替换定理



**Steinitz 替换定理**

设 $V$ 是向量空间，$\{\mathbf{v}_1, \dots, \mathbf{v}_m\}$ 是 $V$ 的线性无关组，$\{\mathbf{w}_1, \dots, \mathbf{w}_n\}$ 是 $V$ 的生成组，则：

1. $m \leq n$

2. 可用 $\{\mathbf{v}_1, \dots, \mathbf{v}_m\}$ 替换 $\{\mathbf{w}_1, \dots, \mathbf{w}_n\}$ 中的 $m$ 个向量，使得替换后的向量组仍生成 $V$



**证明思路**

对 $m$ 用数学归纳法。



**推论：基的等势性**

有限维向量空间的任意两组基含有相同数量的向量，这个数量称为空间的维数。



**向量组的秩不等式**

设 $\{\mathbf{v}_1, \dots, \mathbf{v}_m\}$ 和 $\{\mathbf{w}_1, \dots, \mathbf{w}_n\}$ 是向量空间 $V$ 中的两个向量组，则：

$\text{rank}\{\mathbf{v}_1, \dots, \mathbf{v}_m\} + \text{rank}\{\mathbf{w}_1, \dots, \mathbf{w}_n\} - n \leq \text{rank}\{\mathbf{v}_1 + \mathbf{w}_1, \dots, \mathbf{v}_m + \mathbf{w}_m\}$

（假设 $m = n$，否则取适当维数）



### 应用与例题



> **示例：Sylvester 不等式的应用**

> 证明：若 $A^2 = A$（幂等矩阵），则 $\text{rank}(A) + \text{rank}(I - A) = n$。

> 

> 解：由 Sylvester 不等式：

> $\text{rank}(A) + \text{rank}(I - A) - n \leq \text{rank}(A(I - A)) = \text{rank}(A - A^2) = \text{rank}(0) = 0$

> 所以 $\text{rank}(A) + \text{rank}(I - A) \leq n$。

> 

> 另一方面：

> $n = \text{rank}(I) = \text{rank}(A + (I - A)) \leq \text{rank}(A) + \text{rank}(I - A)$

> 所以 $\text{rank}(A) + \text{rank}(I - A) = n$。



> **示例：Hamilton-Cayley 定理的应用**

> 求 $A^{100}$，其中 $A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$。

> 

> 解：特征多项式 $f(\lambda) = \lambda^2 - 4\lambda + 3$，由 Hamilton-Cayley 定理：$A^2 = 4A - 3I$。

> 

> 递推可得：$A^n = \alpha_n A + \beta_n I$，满足：

> $\alpha_{n+1} = 4\alpha_n + \beta_n, \quad \beta_{n+1} = -3\alpha_n$

> 特征方程 $r^2 - 4r + 3 = 0$，解得 $r = 1, 3$，所以：

> $\alpha_n = a \cdot 1^n + b \cdot 3^n, \quad \beta_n = c \cdot 1^n + d \cdot 3^n$

> 由初始条件 $\alpha_1 = 1, \beta_1 = 0$（因 $A^1 = A + 0I$）和 $\alpha_2 = 4, \beta_2 = -3$（因 $A^2 = 4A - 3I$）可解得系数。



> **示例：向量组替换定理的应用**

> 设 $\{\mathbf{v}_1, \mathbf{v}_2, \mathbf{v}_3\}$ 线性无关，$\{\mathbf{w}_1, \mathbf{w}_2, \mathbf{w}_3, \mathbf{w}_4\}$ 生成 $\mathbb{R}^3$，证明可用 $\mathbf{v}_1, \mathbf{v}_2, \mathbf{v}_3$ 替换其中的三个向量，使替换后的向量组仍生成 $\mathbb{R}^3$。

> 

> 解：由替换定理，$3 \leq 4$ 且可用 $\mathbf{v}_1, \mathbf{v}_2, \mathbf{v}_3$ 替换 $\mathbf{w}_1, \mathbf{w}_2, \mathbf{w}_3, \mathbf{w}_4$ 中的三个向量。



### 重要公式总结



**秩的不等式总结**

* $\text{rank}(A + B) \leq \text{rank}(A) + \text{rank}(B)$

* $\text{rank}(AB) \leq \min\{\text{rank}(A), \text{rank}(B)\}$

* $\text{rank}(A) + \text{rank}(B) - n \leq \text{rank}(AB)$（Sylvester）

* $\text{rank}(AB) + \text{rank}(BC) \leq \text{rank}(B) + \text{rank}(ABC)$（Frobenius）



**Hermite 矩阵判定条件**

$A$ 正定 $\iff$ 以下任一条件成立：

* $\mathbf{x}^H A \mathbf{x} > 0$ 对所有 $\mathbf{x} \neq 0$

* 所有特征值 $> 0$

* 所有顺序主子式 $> 0$

* 存在可逆 $P$ 使 $A = P^H P$



**替换定理推论**

* 任意线性无关组可扩充为一组基

* 任意生成组可删减为一组基

* 所有基的维数相同

* $m$ 个向量的线性无关组必在 $m$ 维子空间中



## 相似矩阵二次型



### Gram-Schmidt 正交化方法



**Gram-Schmidt 正交化**

设 $\{\mathbf{v}_1, \mathbf{v}_2, \dots, \mathbf{v}_n\}$ 是内积空间 $V$ 中的线性无关向量组，则可通过以下步骤构造标准正交基 $\{\mathbf{u}_1, \mathbf{u}_2, \dots, \mathbf{u}_n\}$：

$\begin{aligned}

   \mathbf{u}_1 &= \frac{\mathbf{v}_1}{\|\mathbf{v}_1\|} \\

   \mathbf{u}_2 &= \frac{\mathbf{v}_2 - \langle \mathbf{v}_2, \mathbf{u}_1 \rangle \mathbf{u}_1}{\|\mathbf{v}_2 - \langle \mathbf{v}_2, \mathbf{u}_1 \rangle \mathbf{u}_1\|} \\

   \mathbf{u}_3 &= \frac{\mathbf{v}_3 - \langle \mathbf{v}_3, \mathbf{u}_1 \rangle \mathbf{u}_1 - \langle \mathbf{v}_3, \mathbf{u}_2 \rangle \mathbf{u}_2}{\|\mathbf{v}_3 - \langle \mathbf{v}_3, \mathbf{u}_1 \rangle \mathbf{u}_1 - \langle \mathbf{v}_3, \mathbf{u}_2 \rangle \mathbf{u}_2\|} \\

   &\vdots \\

   \mathbf{u}_k &= \frac{\mathbf{v}_k - \sum_{j=1}^{k-1} \langle \mathbf{v}_k, \mathbf{u}_j \rangle \mathbf{u}_j}{\left\| \mathbf{v}_k - \sum_{j=1}^{k-1} \langle \mathbf{v}_k, \mathbf{u}_j \rangle \mathbf{u}_j \right\|}

\end{aligned}$



**QR 分解**

任何可逆矩阵 $A$ 可分解为 $A = QR$，其中：

* $Q$ 是正交矩阵（$Q^T Q = I$）

* $R$ 是上三角矩阵

Gram-Schmidt 过程提供了构造 $Q$ 和 $R$ 的一种方法。



> **示例**

> 将向量组 $\mathbf{v}_1 = (1,1,0)^T$, $\mathbf{v}_2 = (1,0,1)^T$, $\mathbf{v}_3 = (0,1,1)^T$ 正交化。

> 

> 解：

> $\begin{aligned}

>    \mathbf{u}_1 &= \frac{\mathbf{v}_1}{\|\mathbf{v}_1\|} = \frac{1}{\sqrt{2}}(1,1,0)^T \\

>    \mathbf{u}_2 &= \frac{\mathbf{v}_2 - \langle \mathbf{v}_2, \mathbf{u}_1 \rangle \mathbf{u}_1}{\|\cdots\|} 

>    = \frac{(1,0,1)^T - \frac{1}{\sqrt{2}}\cdot\frac{1}{\sqrt{2}}(1,1,0)^T}{\|\cdots\|} \\

>    &= \frac{(1,0,1)^T - \frac{1}{2}(1,1,0)^T}{\sqrt{(\frac{1}{2})^2 + (-\frac{1}{2})^2 + 1^2}} 

>    = \frac{(\frac{1}{2}, -\frac{1}{2}, 1)^T}{\sqrt{\frac{3}{2}}} \\

>    \mathbf{u}_3 &= \cdots \quad \text{(继续类似计算)}

> \end{aligned}$



### Fibonacci 数列与矩阵



**Fibonacci 数列的矩阵表示**

Fibonacci 数列 $F_0 = 0, F_1 = 1, F_{n+2} = F_{n+1} + F_n$ 可表示为：

$\begin{pmatrix} F_{n+1} & F_n \\ F_n & F_{n-1} \end{pmatrix} = \begin{pmatrix} 1 & 1 \\ 1 & 0 \end{pmatrix}^n$

特别地：

$\begin{pmatrix} F_{n+1} \\ F_n \end{pmatrix} = \begin{pmatrix} 1 & 1 \\ 1 & 0 \end{pmatrix}^n \begin{pmatrix} 1 \\ 0 \end{pmatrix}$



**Fibonacci 通项公式（Binet 公式）**

$F_n = \frac{1}{\sqrt{5}}\left[\left(\frac{1+\sqrt{5}}{2}\right)^n - \left(\frac{1-\sqrt{5}}{2}\right)^n\right]$



**证明思路**

矩阵 $A = \begin{pmatrix} 1 & 1 \\ 1 & 0 \end{pmatrix}$ 的特征值为：

$\lambda_1 = \frac{1+\sqrt{5}}{2}, \quad \lambda_2 = \frac{1-\sqrt{5}}{2}$

对应特征向量为 $\mathbf{v}_1 = (\lambda_1, 1)^T$, $\mathbf{v}_2 = (\lambda_2, 1)^T$。

将初始向量 $(1,0)^T$ 用特征向量表示，计算 $A^n$ 作用后的结果即得通项。



> **示例**

> 计算 $F_5$：

> $F_5 = \frac{1}{\sqrt{5}}\left[\left(\frac{1+\sqrt{5}}{2}\right)^5 - \left(\frac{1-\sqrt{5}}{2}\right)^5\right] = 5$

> 验证：$F_0=0, F_1=1, F_2=1, F_3=2, F_4=3, F_5=5$。



### 正交相似与谱定理



**正交相似**

矩阵 $A$ 和 $B$ 称为正交相似的，如果存在正交矩阵 $Q$（$Q^T Q = I$）使得：

$B = Q^T A Q$



**实对称矩阵的谱定理**

设 $A$ 是 $n$ 阶实对称矩阵，则：

1. $A$ 的特征值都是实数

2. $A$ 可正交相似于对角矩阵：存在正交矩阵 $Q$ 使得 $Q^T A Q = \operatorname{diag}(\lambda_1, \lambda_2, \dots, \lambda_n)$

3. 属于不同特征值的特征向量相互正交



**正规矩阵的谱定理**

矩阵 $A$ 可酉对角化（存在酉矩阵 $U$ 使得 $U^H A U$ 为对角矩阵）当且仅当 $A$ 是正规矩阵，即 $A A^H = A^H A$。

特别地，Hermite 矩阵、酉矩阵都是正规矩阵。



### 惯性定律与二次型



**惯性定律（Sylvester 惯性定理）**

设 $A$ 是 $n$ 阶实对称矩阵，$C$ 是 $n$ 阶可逆矩阵，则 $A$ 和 $C^T A C$ 具有相同数量的：

* 正特征值个数（正惯性指数 $p$）

* 负特征值个数（负惯性指数 $q$）

* 零特征值个数（零惯性指数 $r$）

且 $p + q + r = n$。



**二次型的规范形**

任何实二次型 $Q(\mathbf{x}) = \mathbf{x}^T A \mathbf{x}$ 可通过可逆线性替换 $\mathbf{x} = C\mathbf{y}$ 化为规范形：

$Q(\mathbf{x}) = y_1^2 + \cdots + y_p^2 - y_{p+1}^2 - \cdots - y_{p+q}^2$

其中 $(p,q)$ 是二次型的符号差，由惯性定律唯一确定。



**正定二次型**

实二次型 $Q(\mathbf{x}) = \mathbf{x}^T A \mathbf{x}$ 称为：

* 正定的：如果对所有 $\mathbf{x} \neq 0$，$Q(\mathbf{x}) > 0$（此时 $p = n$）

* 负定的：如果对所有 $\mathbf{x} \neq 0$，$Q(\mathbf{x}) < 0$（此时 $q = n$）

* 不定的：如果既取正值也取负值（此时 $p > 0$ 且 $q > 0$）



### Jordan 标准形



**Jordan 标准形定理**

设 $A$ 是 $n$ 阶复矩阵，则 $A$ 相似于 Jordan 标准形：

$J = \operatorname{diag}(J_1(\lambda_1), J_2(\lambda_2), \dots, J_k(\lambda_k))$

其中每个 Jordan 块形如：

$J_i(\lambda) = 

\begin{pmatrix}

   \lambda & 1 & & \\

   & \lambda & \ddots & \\

   & & \ddots & 1 \\

   & & & \lambda

\end{pmatrix}$



**Jordan 标准形的唯一性**

除了 Jordan 块的排列次序外，Jordan 标准形是唯一的。



**几何重数与代数重数**

设 $\lambda$ 是 $A$ 的特征值：

* 代数重数：$\lambda$ 作为特征多项式的根的重数

* 几何重数：对应特征空间 $\ker(A - \lambda I)$ 的维数

几何重数等于 $\lambda$ 对应的 Jordan 块个数，代数重数等于所有对应 Jordan 块的阶数之和。



> **示例**

> 矩阵 $A = \begin{pmatrix} 2 & 1 & 0 \\ 0 & 2 & 1 \\ 0 & 0 & 2 \end{pmatrix}$ 本身就是一个 $3$ 阶 Jordan 块。

> 特征值 $2$ 的代数重数为 $3$，几何重数为 $1$。



### 维数公式



**秩-零度定理（维数公式）**

设 $T: V \to W$ 是线性映射，则：

$\dim(\ker T) + \dim(\operatorname{Im} T) = \dim V$

对于矩阵 $A \in \mathbb{R}^{m \times n}$：

$\text{nullity}(A) + \text{rank}(A) = n$



**子空间维数公式**

设 $U, W$ 是向量空间 $V$ 的子空间，则：

$\dim(U + W) = \dim U + \dim W - \dim(U \cap W)$



**直和分解**

若 $V = U \oplus W$，则：

$\dim V = \dim U + \dim W$



**正交补的维数**

设 $W$ 是内积空间 $V$ 的子空间，则：

$\dim W + \dim W^\perp = \dim V$

其中 $W^\perp = \{\mathbf{v} \in V \mid \langle \mathbf{v}, \mathbf{w} \rangle = 0, \forall \mathbf{w} \in W\}$。



### 应用与计算



> **示例：Legendre 多项式**

> 在区间 $[-1,1]$ 上定义内积 $\langle f, g \rangle = \int_{-1}^1 f(x)g(x)dx$，对函数组 $\{1, x, x^2, x^3, \dots\}$ 应用 Gram-Schmidt 过程得到 Legendre 多项式。



**Jordan 标准形计算步骤**

1. 求特征多项式，确定特征值

2. 对每个特征值 $\lambda$，计算 $\ker(A - \lambda I)^k$，$k = 1, 2, \dots$

3. 确定 Jordan 链和 Jordan 块结构

4. 构造变换矩阵 $P$ 使得 $P^{-1} A P = J$



> **示例：二次型的分类**

> 判断二次型 $Q(x,y,z) = x^2 + 2y^2 + 3z^2 + 2xy + 2xz$ 的类型。

> 

> 解：对应矩阵 $A = \begin{pmatrix} 1 & 1 & 1 \\ 1 & 2 & 0 \\ 1 & 0 & 3 \end{pmatrix}$，计算特征值或顺序主子式判断正定性。



### 重要公式总结



**正交化公式总结**

Gram-Schmidt 过程的核心公式：

$\mathbf{u}_k = \frac{\mathbf{v}_k - \sum_{j=1}^{k-1} \langle \mathbf{v}_k, \mathbf{u}_j \rangle \mathbf{u}_j}{\left\| \mathbf{v}_k - \sum_{j=1}^{k-1} \langle \mathbf{v}_k, \mathbf{u}_j \rangle \mathbf{u}_j \right\|}$



**Fibonacci 数列性质**

* 通项公式：$F_n = \frac{1}{\sqrt{5}}(\varphi^n - \psi^n)$，其中 $\varphi = \frac{1+\sqrt{5}}{2}$, $\psi = \frac{1-\sqrt{5}}{2}$

* 矩阵表示：$\begin{pmatrix} F_{n+1} & F_n \\ F_n & F_{n-1} \end{pmatrix} = \begin{pmatrix} 1 & 1 \\ 1 & 0 \end{pmatrix}^n$

* 极限性质：$\lim_{n \to \infty} \frac{F_{n+1}}{F_n} = \varphi$（黄金比例）



**Jordan 标准形性质**

* 最小多项式：$\prod_{i=1}^k (x - \lambda_i)^{m_i}$，其中 $m_i$ 是最大 Jordan 块的阶数

* 可对角化条件：所有 Jordan 块都是 $1 \times 1$ 的

* 幂的计算：通过 Jordan 标准形计算 $A^n$



**维数关系**

$\begin{aligned}

   &\dim(\ker T) + \dim(\operatorname{Im} T) = \dim V \\

   &\dim(U + W) = \dim U + \dim W - \dim(U \cap W) \\

   &\dim W + \dim W^\perp = \dim V \\

   &\text{rank}(A) + \text{nullity}(A) = n

\end{aligned}$