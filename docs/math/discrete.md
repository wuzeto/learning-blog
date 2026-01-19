<script>

window.MathJax = {

  tex: {

    inlineMath: [['$', '$'], ['\\(', '\\)']],

    displayMath: [['$$', '$$'], ['\$$', '\$$']],

    macros: {

      oiint: "{\\mathchoice{\\mkern-18mu\\iint}{\\mkern-12mu\\iint}{\\mkern-13mu\\iint}{\\mkern-12mu\\iint}}"

    }

  }

};

</script>

<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js"></script>



# 《离散数学教程》定理汇总

## 第一章 集合

**定理1.1** 空集是一切集合的子集。  
**推论** 空集是唯一的。

**定理1.2** 设 $A$ 的元素个数 $|A| = n$（$n$ 为自然数），则 $|\mathcal{P}(A)| = 2^{n}$。

**定理1.3**（容斥原理）设 $A_{1},A_{2},\dots ,A_{n}$ 为 $n$ 个集合，则  
$$
\bigcup_{i = 1}^{n}A_{i} = \sum_{i = 1}^{n}|A_{i}| - \sum_{i< j}|A_{i}\cap A_{j}| + \sum_{i< j< k}|A_{i}\cap A_{j}\cap A_{k}| - \dots +(-1)^{n - 1}|A_{1}\cap A_{2}\cap \dots \cap A_{n}|.
$$

**定理1.4** 设 $\{A_{k}\}$ 为集合列，则  
(1) $\lim_{k\to \infty}A_{k}\subseteq \overline{{\lim_{k\to \infty}}}A_{k}$；  
(2) $\overline{{\lim_{k\to \infty}}}A_{k} = \bigcap_{n = 1}^{\infty}\bigcup_{k = n}^{\infty}A_{k}$；  
(3) $\lim_{k\to \infty}A_{k} = \bigcup_{n = 1}^{\infty}\bigcap_{k = n}^{\infty}A_{k}$。

**定理1.5** 设 $\{A_{k}\}$ 为集合列，$B$ 为一集合，则  
(1) $B - \overline{{\lim_{k\to\infty}}}A_{k} = \lim_{k\to \infty}(B - A_{k})$；  
(2) $B - \lim_{k\to \infty}A_{k} = \overline{{\lim_{k\to\infty}}}(B - A_{k})$。

**定理1.6** 设 $\{A_{k}\}$ 为一个集合列，令 $E = \bigcup_{k\in \mathbb{N}_{+}}A_{k}$ 为全集，$B_{k} = \sim A_{k},k = 1,2,\dots$，则 $\{B_{k}\}$ 也是一个集合列，且  
$$
E = \lim_{k\to \infty}A_{k}\cup \overline{{\lim_{k\to\infty}}} B_{k} = \overline{{\lim_{k\to\infty}}} A_{k}\cup \lim_{k\to \infty}B_{k}.
$$

---

## 第二章 二元关系

**定理2.1** $\langle a,b\rangle = \langle c,d\rangle$ 的充要条件是 $a = c$ 且 $b = d$。

**定理2.2** $\langle a_{1},a_{2},\dots ,a_{n}\rangle = \langle b_{1},b_{2},\dots ,b_{n}\rangle$ 当且仅当 $a_{i} = b_{i},i = 1,2,\dots ,n$。

**定理2.3** 设 $F,G$ 为二集合，则  
(1) $\operatorname {dom}(F\cup G) = \operatorname {dom}F\cup \operatorname {dom}G$；  
(2) $\operatorname {ran}(F\cup G) = \operatorname {ran}F\cup \operatorname {ran}G$；  
(3) $\operatorname {dom}(F\cap G)\subseteq \operatorname {dom}F\cap \operatorname {dom}G$；  
(4) $\operatorname {ran}(F\cap G)\subseteq \operatorname {ran}F\cap \operatorname {ran}G$；  
(5) $\operatorname {dom}F - \operatorname {dom}G\subseteq \operatorname {dom}(F - G)$；  
(6) $\operatorname {ran}F - \operatorname {ran}G\subseteq \operatorname {ran}(F - G)$。

**定理2.4** 设 $F$ 为任一集合，则  
(1) $\operatorname {dom}F^{-1} = \operatorname {ran}F$；  
(2) $\operatorname {ran}F^{-1} = \operatorname {dom}F$；  
(3) $(F^{-1})^{-1}\subseteq \operatorname {dom}F$，当 $F$ 为关系时，等号成立。

**定理2.5** 设 $R_{1},R_{2},R_{3}$ 为三个集合，则  
$$
(R_{1}\circ R_{2})\circ R_{3} = R_{1}\circ (R_{2}\circ R_{3}).
$$

**定理2.6** 设 $R_{1},R_{2},R_{3}$ 为三个集合，则  
(1) $R_{1}\circ (R_{2}\cup R_{3}) = R_{1}\circ R_{2}\cup R_{1}\circ R_{3}$；  
(2) $(R_{1}\circ R_{2})\cup R_{3} = R_{1}\circ R_{3}\cup R_{2}\circ R_{3}$；  
(3) $R_{1}\circ (R_{2}\cap R_{3}) = R_{1}\circ R_{2}\cap R_{1}\circ R_{3}$；  
(4) $(R_{1}\circ R_{2})\cap R_{3} = R_{1}\circ R_{3}\cap R_{2}\circ R_{3}$。

**定理2.7** 设 $F,G$ 为二集合，则  
$$
(F\circ G)^{-1} = G^{-1}\circ F^{-1}.
$$

**定理2.8** 设 $R,S,A,B,\mathcal{A}$ 为集合，$\mathcal{A}\neq \emptyset$，则  
(1) $R\mid (A\cup B) = (R\mid A)\cup (R\mid B)$；  
(2) $R\mid \cup \mathcal{A} = \cup \{R\mid A\mid A\in \mathcal{A}\}$；  
(3) $R\mid (A\cap B) = (R\mid A)\cap (R\mid B)$；  
(4) $R\mid \cap \mathcal{A} = \cap \{R\mid A\mid A\in \mathcal{A}\}$；  
(5) $(R\circ S)\mid A = R\circ (S\mid A)$。

**定理2.9** 设 $R,S,A,B,\mathcal{A}$ 为集合，$\mathcal{A}\neq \emptyset$，则  
(1) $R[A\cup B] = R[A]\cup R[B]$；  
(2) $R[\cup \mathcal{A}] = \cup \{R[A]\mid A\in \mathcal{A}\}$；  
(3) $R[A\cap B] = R[A]\cap R[B]$；  
(4) $R[\cap \mathcal{A}] = \cap \{R[A]\mid A\in \mathcal{A}\}$；  
(5) $R[A] - R[B]\subseteq R[A - B]$；  
(6) $(R\circ S)[A] = R[S[A]]$。

**定理2.10** 设 $R\subseteq A\times A$，则下面的命题是等价的：  
(1) $R$ 是自反的；  
(2) $I_{A}\subseteq R$；  
(3) $R^{-1}$ 是自反的；  
(4) $M(R)$ 主对角线上元素全为1；  
(5) $G(R)$ 中每个顶点处都有自环。

**定理2.11** 设 $R\subseteq A\times A$，则下面的命题是等价的：  
(1) $R$ 是反自反的；  
(2) $I_{A}\cap R = \emptyset$；  
(3) $R^{-1}$ 是反自反的；  
(4) $M(R)$ 主对角线上元素全为0；  
(5) $G(R)$ 中每个顶点处都没有自环。

**定理2.12** 设 $R\subseteq A\times A$，则下面的命题是等价的：  
(1) $R$ 是对称的；  
(2) $R^{-1} = R$；  
(3) $M(R)$ 是对称矩阵；  
(4) $G(R)$ 中若顶点 $x_i$ 到 $x_j$ 有边，则 $x_j$ 到 $x_i$ 也有边。

**定理2.13** 设 $R\subseteq A\times A$，则下面的命题是等价的：  
(1) $R$ 是反对称的；  
(2) $R\cap R^{-1}\subseteq I_{A}$；  
(3) 若 $M(R)$ 中元素 $r_{ij} = 1 (i\neq j)$，则 $r_{ji} = 0$；  
(4) $G(R)$ 中任意两个不同顶点 $x_i, x_j$ 之间至多只有一条有向边。

**定理2.14** 设 $R\subseteq A\times A$，则下面的命题是等价的：  
(1) $R$ 是传递的；  
(2) $R\circ R\subseteq R$；  
(3) 若 $M(R\circ R)$ 中元素 $r'_{ij} = 1$，则 $M(R)$ 中 $r_{ij} = 1$；  
(4) $G(R)$ 中若存在顶点 $x_i, x_j, x_k$ 满足 $\langle x_i, x_j \rangle, \langle x_j, x_k \rangle$ 有边，则 $\langle x_i, x_k \rangle$ 也有边。

**定理2.15** 设 $R_1, R_2 \subseteq A \times A$。  
(1) 若 $R_1, R_2$ 是自反的，则 $R_1^{-1}, R_2^{-1}, R_1\cup R_2, R_1\cap R_2, R_1\circ R_2, R_2\circ R_1$ 也是自反的；  
(2) 若 $R_1, R_2$ 是反自反的，则 $R_1^{-1}, R_2^{-1}, R_1\cup R_2, R_1\cap R_2, R_1-R_2, R_2-R_1$ 也是反自反的；  
(3) 若 $R_1, R_2$ 是对称的，则 $R_1^{-1}, R_2^{-1}, R_1\cup R_2, R_1\cap R_2, R_1-R_2, R_2-R_1, \sim R_1 (=E_A-R_1), \sim R_2$ 也是对称的；  
(4) 若 $R_1, R_2$ 是反对称的，则 $R_1^{-1}, R_2^{-1}, R_1\cap R_2, R_1-R_2, R_2-R_1$ 也是反对称的；  
(5) 若 $R_1, R_2$ 是传递的，则 $R_1^{-1}, R_2^{-1}, R_1\cap R_2$ 也是传递的。

**定理2.16** 设 $A$ 是 $n$ 元素集合，$R\subseteq A\times A$，则存在 $s, t$ 满足 $0\leq s < t\leq 2^{n^2}$，使得 $R^s = R^t$。

**定理2.17** 设 $R\subseteq A\times A$，$m, n$ 为自然数，则  
(1) $R^m\circ R^n = R^{m+n}$；  
(2) $(R^m)^n = R^{mn}$。

**定理2.18** 设 $R\subseteq A\times A$，存在 $s, t (s < t)$ 使 $R^s = R^t$，则  
(1) $R^{s+k} = R^{s+t}, \forall k\in \mathbb{N}$；  
(2) $R^{s+kp+i} = R^{s+i}, \forall k,i\in \mathbb{N}, p = t-s$；  
(3) 令 $S = \{R^0, R^1, \dots, R^{t-1}\}$，则对任意 $q\in \mathbb{N}$ 有 $R^q\in S$。

**定理2.19** 设 $R\subseteq A\times A$，$A\neq \emptyset$，则  
(1) $R$ 自反当且仅当 $r(R) = R$；  
(2) $R$ 对称当且仅当 $s(R) = R$；  
(3) $R$ 传递当且仅当 $t(R) = R$。

**定理2.20** 设 $A\neq \emptyset$，$R_1, R_2\subseteq A\times A$，且 $R_1\subseteq R_2$，则  
(1) $r(R_1)\subseteq r(R_2)$；  
(2) $s(R_1)\subseteq s(R_2)$；  
(3) $t(R_1)\subseteq t(R_2)$。

**定理2.21** 设 $A\neq \emptyset$，$R_1, R_2\subseteq A\times A$，则下列各式成立：  
(1) $r(R_1\cup R_2) = r(R_1)\cup r(R_2)$；  
(2) $s(R_1\cup R_2) = s(R_1)\cup s(R_2)$；  
(3) $t(R_1)\cup t(R_2)\subseteq t(R_1\cup R_2)$。

**定理2.22** 设 $R\subseteq A\times A$，且 $A\neq \emptyset$，则  
$$
r(R) = R\cup I_A.
$$

**定理2.23** 设 $R\subseteq A\times A$，且 $A\neq \emptyset$，则  
$$
s(R) = R\cup R^{-1}.
$$

**定理2.24** 设 $R\subseteq A\times A$，且 $A\neq \emptyset$，则  
$$
t(R) = R\cup R^2\cup \dots .
$$  
**推论** 设 $A$ 为非空有穷集合，$R\subseteq A\times A$，则存在自然数 $l$，使得  
$$
t(R) = R\cup R^2\cup \dots \cup R^l.
$$

**定理2.25** 设 $R\subseteq A\times A$，且 $A\neq \emptyset$，则  
(1) 若 $R$ 自反，则 $s(R)$ 和 $t(R)$ 也自反；  
(2) 若 $R$ 对称，则 $r(R)$ 和 $t(R)$ 也对称；  
(3) 若 $R$ 传递，则 $r(R)$ 也传递。

**定理2.26** 设 $R\subseteq A\times A \land A\neq \emptyset$，则  
(1) $r s(R) = s r(R)$；  
(2) $r t(R) = t r(R)$；  
(3) $s t(R)\subseteq t s(R)$。

**定理2.27** 设 $R$ 是非空集合 $A$ 上的等价关系，对于任意 $x,y\in A$，下列各式成立：  
(1) $[x]_R\neq \emptyset$ 且 $[x]_R\subseteq A$；  
(2) 若 $\langle x,y\rangle \in R$，则 $[x]_R = [y]_R$；  
(3) 若 $\langle x,y\rangle \notin R$，则 $[x]_R\cap [y]_R = \emptyset$；  
(4) $\cup \{[x]_R\mid x\in A\} = A$。

**定理2.28** 设 $A$ 为非空集合：  
(1) 设 $R$ 为 $A$ 上的任意等价关系，则 $A$ 关于 $R$ 的商集 $A/R$ 是 $A$ 的一个划分；  
(2) 设 $\mathcal{A}$ 为 $A$ 上的任意划分，令 $R_{\mathcal{A}} = \{(x,y)\mid x,y\in A \land x,y$ 属于 $\mathcal{A}$ 的同一划分块\}，则 $R_{\mathcal{A}}$ 是 $A$ 上的等价关系。

**定理2.29** 设 $\leqslant$ 为非空集合 $A$ 上的偏序关系，$\prec$ 为 $A$ 上的拟序关系，则  
(1) $\prec$ 是反对称的；  
(2) $\prec - I_A$ 为 $A$ 上的拟序关系；  
(3) $\prec \cup I_A$ 为 $A$ 上的偏序关系。

**定理2.30** 设 $\prec$ 为非空集合 $A$ 上的拟序关系，则 $\forall x,y\in A$：  
(1) $x\prec y, x = y, y\prec x$ 三式中至多有一式成立；  
(2) 若 $(x\prec y \lor x = y) \land (y\prec x \lor x = y)$，则 $x = y$。

**定理2.31** 设 $\langle A,\preccurlyeq \rangle$ 为偏序集，若 $A$ 中最长链的长度为 $n$，则  
(1) $A$ 中存在极大元；  
(2) $A$ 存在 $n$ 个划分块的划分，每个划分块都是反链。

# 《离散数学教程》定理汇总（续）

## 第三章 函数

**定理3.1** 设 \(f:C\to D\) 为单射，\(\mathcal{C}\) 为 \(C\) 的非空子集族，\(C_1,C_2\subseteq C\)，则  
(1) \(f(\cup \mathcal{C}) = \cup \{f(A) \mid A\in \mathcal{C}\}\)；  
(2) \(f(\cap \mathcal{C}) = \cap \{f(A) \mid A\in \mathcal{C}\}\)；  
(3) \(f(C_1 - C_2) = f(C_1) - f(C_2)\)。

**定理3.2** 设 \(f:C\to D\)，\(D_1,D_2\subseteq D\)，\(\mathcal{D}\) 是 \(D\) 的非空子集族，则  
(1) \(f^{-1}(\cup \mathcal{D}) = \cup \{f^{-1}(D) \mid D\in \mathcal{D}\}\)；  
(2) \(f^{-1}(\cap \mathcal{D}) = \cap \{f^{-1}(D) \mid D\in \mathcal{D}\}\)；  
(3) \(f^{-1}(D_1 - D_2) = f^{-1}(D_1) - f^{-1}(D_2)\)。

**定理3.3** 设 \(g:A\to B\)，\(f:B\to C\)，则 \(f\circ g:A\to C\)，且对于任意 \(x\in A\)，  
$$
(f\circ g)(x) = f(g(x)).
$$

**定理3.4** 设 \(g:A\to B\)，\(f:B\to C\)：  
(1) 若 \(f\) 和 \(g\) 都是满射，则 \(f\circ g\) 是满射；  
(2) 若 \(f\) 和 \(g\) 都是单射，则 \(f\circ g\) 是单射；  
(3) 若 \(f\) 和 \(g\) 都是双射，则 \(f\circ g\) 是双射。

**定理3.5** 设 \(g:A\to B\)，\(f:B\to C\)：  
(1) 若 \(f\circ g\) 是满射，则 \(f\) 是满射；  
(2) 若 \(f\circ g\) 是单射，则 \(g\) 是单射；  
(3) 若 \(f\circ g\) 是双射，则 \(g\) 是单射，\(f\) 是满射。

**定理3.6** 设 \(f:A\to B\)，\(I_A, I_B\) 分别为 \(A\) 和 \(B\) 上的恒等函数，则  
$$
f\circ I_A = I_B\circ f.
$$

**定理3.7** 设 \(f:\mathbb{R}\to \mathbb{R}\)，\(g:\mathbb{R}\to \mathbb{R}\)，若 \(f\) 和 \(g\) 在实数集上关于“\(\leq\)”都是单调增加的，则 \(f\circ g\) 也是单调增加的。

**定理3.8** 设 \(A\) 为一个集合，\(A^{-1}\) 为函数当且仅当 \(A\) 是单根的。  
**推论** 设 \(R\) 为二元关系，\(R\) 为函数当且仅当 \(R^{-1}\) 是单根的。

**定理3.9** 设 \(f:A\to B\) 为双射，则 \(f^{-1}:B\to A\) 也是双射。

**定理3.10** 设 \(f:A\to B\) 且 \(A\neq \emptyset\)：  
(1) \(f\) 存在左逆当且仅当 \(f\) 是单射；  
(2) \(f\) 存在右逆当且仅当 \(f\) 是满射；  
(3) \(f\) 既有左逆又有右逆当且仅当 \(f\) 是双射；  
(4) 若 \(f\) 是双射，则其左逆与右逆相等。

---

## 第四章 自然数

**定理4.1** \(\mathbb{N}\) 是归纳集。

**定理4.2** 设 \(\mathbb{N}\) 为自然数集，\(\sigma:\mathbb{N}\to \mathbb{N}\)，\(\sigma(n) = n^{+}\)（后继函数），则 \(\langle \mathbb{N},\sigma,\emptyset \rangle\) 是 Peano 系统。

**定理4.3** 任意自然数的元素都是它的子集。

**定理4.4** 对于任意自然数 \(m,n\)，\(m^{+}\in n^{+}\) 当且仅当 \(m\in n\)。

**定理4.5** 任何自然数都不是自己的元素。

**定理4.6** 空集属于除零外的一切自然数。

**定理4.7**（三歧性定理）对于任意自然数 \(m,n\)，以下三式有且仅有一式成立：  
$$
m\in n,\quad m=n,\quad n\in m.
$$

**定理4.8**（\(\mathbb{N}\) 上的递归定理）设 \(A\) 为集合，\(a\in A\)，\(F:A\to A\)，则存在唯一函数 \(h:\mathbb{N}\to A\)，使得 \(h(0) = a\)，且对任意 \(n\in \mathbb{N}\)，  
$$
h(n^{+}) = F(h(n)).
$$

**定理4.9** 设 \(\langle M,F,e\rangle\) 为任意 Peano 系统，则 \(\langle \mathbb{N},\sigma,0\rangle \sim \langle M,F,e\rangle\)。

**定理4.10** 设 \(A\) 为集合，则以下命题等价：  
(1) \(A\) 是传递集；  
(2) \(\cup A\subseteq A\)；  
(3) 对任意 \(y\in A\)，有 \(y\subseteq A\)；  
(4) \(A\subseteq \mathcal{P}(A)\)。

**定理4.11** 设 \(A\) 为集合，则 \(A\) 为传递集当且仅当 \(\mathcal{P}(A)\) 为传递集。

**定理4.12** 设 \(A\) 是传递集，则 \(\cup (A^{+}) = A\)。

**定理4.13** 每个自然数都是传递集。

**定理4.14** 自然数集 \(\mathbb{N}\) 是传递集。

**定理4.15** 设 \(m,n\in \mathbb{N}\)，则  
（加法规则1）\(m + 0 = m\)；  
（加法规则2）\(m + n^{+} = (m + n)^{+}\)。

**定理4.16** 设 \(m,n\in \mathbb{N}\)，则  
（乘法规则1）\(m \cdot 0 = 0\)；  
（乘法规则2）\(m \cdot n^{+} = m \cdot n + m\)。

**定理4.17** 对于任意自然数 \(m,n\)，则  
（指数运算规则1）\(m^{0} = 1\)（\(m\neq 0\)）；  
（指数运算规则2）\(m^{n^{+}} = m^{n} \cdot m\)。

**定理4.18** 设 \(m,n,k\in \mathbb{N}\)，则  
(1) \(m + (n + k) = (m + n) + k\)；  
(2) \(m + n = n + m\)；  
(3) \(m \cdot (n + k) = m \cdot n + m \cdot k\)；  
(4) \(m \cdot (n \cdot k) = (m \cdot n) \cdot k\)；  
(5) \(m \cdot n = n \cdot m\)。

**定理4.19** \(\in_{\mathbb{N}}\)（\(\leq_{\mathbb{N}}\)）为 \(\mathbb{N}\) 上的线序关系，\(\in_{\mathbb{N}}\)（\(\leq_{\mathbb{N}}\)）为 \(\mathbb{N}\) 上的拟线序关系。

**定理4.20** 设 \(m,n,k\in \mathbb{N}\)，则  
(1) \(m \in n \Leftrightarrow (m + k) \in (n + k)\)（即 \(m < n \Leftrightarrow m + k < n + k\)）；  
(2) \(m \in n \Leftrightarrow m \cdot k \in n \cdot k\)（即 \(m < n \Leftrightarrow m \cdot k < n \cdot k\)），\(k\neq 0\)。

**定理4.21** 设 \(n,m,k\) 为自然数：  
(1) 若 \(m + k = n + k\)，则 \(m = n\)；  
(2) 若 \(k\neq 0\) 且 \(m \cdot k = n \cdot k\)，则 \(m = n\)。

**定理4.22**（\(\mathbb{N}\) 上的良序定理）设 \(A\) 为 \(\mathbb{N}\) 的非空子集，则存在唯一的 \(m\in A\)，使得对一切 \(n\in A\)，有 \(m\subseteq n\)（称 \(m\) 为 \(A\) 的最小元）。

**定理4.23**（\(\mathbb{N}\) 上的强归纳原则）设 \(A\) 为 \(\mathbb{N}\) 的子集，若对任意 \(n\in \mathbb{N}\)，只要小于 \(n\) 的元素都属于 \(A\)，就有 \(n\in A\)，则 \(A = \mathbb{N}\)。

---

## 第五章 基数（势）

**定理5.1**  
(1) \(\mathbb{Z}\approx \mathbb{N}\)；  
(2) \(\mathbb{N}\times \mathbb{N}\approx \mathbb{N}\)；  
(3) \(\mathbb{N}\approx \mathbb{Q}\)；  
(4) \((0,1)\approx \mathbb{R}\)；  
(5) \([0,1]\approx (0,1)\)。

**定理5.2** 设 \(A\) 为任意集合，则 \(\mathcal{P}(A)\approx (A\to 2)\)，其中 \((A\to 2) = 2^{A}\) 是 \(A\) 到 \(2=\{0,1\}\) 的所有函数。

**定理5.3** 设 \(A,B,C\) 为任意集合：  
(1) \(A\approx A\)；  
(2) 若 \(A\approx B\)，则 \(B\approx A\)；  
(3) 若 \(A\approx B\) 且 \(B\approx C\)，则 \(A\approx C\)。

**定理5.4**（康托定理）  
(1) \(\mathbb{N}\not\approx \mathbb{R}\)；  
(2) 设 \(A\) 为任意集合，则 \(A\not\approx \mathcal{P}(A)\)。

**定理5.5** 不存在与自己的真子集等势的自然数。  
**推论1** 不存在与自己的真子集等势的有穷集合。  
**推论2**  
(1) 任何与自己的真子集等势的集合都是无穷集；  
(2) \(\mathbb{N}\) 是无穷集。  
**推论3** 任何有穷集合都与唯一的自然数等势。

**定理5.6** 任何有穷集合的子集仍为有穷集合。

**定理5.7** 设 \(A,B\) 为任意二集合，则 \(A\not\approx B\) 当且仅当存在 \(C\subseteq B\)，使得 \(A\approx C\)。  
**推论** 设 \(A,B\) 为二集合：  
(1) 若 \(A\subseteq B\)，则 \(A\not\approx B\)；  
(2) 若 \(A\approx B\)，则 \(A\not\approx B\) 且 \(B\not\approx A\)。

**定理5.8** 设 \(A,B,C\) 为三个集合：  
(1) \(A\not\approx A\)；  
(2) 若 \(A\approx B\) 且 \(B\not\approx C\)，则 \(A\not\approx C\)。

**定理5.9** 设 \(A,B,C,D\) 为四个集合，已知 \(A\not\approx B\) 且 \(C\not\approx D\)，则  
(1) 若 \(B\cap D = \emptyset\)，则 \(A\cup C\not\approx B\cup D\)；  
(2) \(A\times C\not\approx B\times D\)。

**定理5.10** 设 \(A,B,C,D\) 为四个集合，且已知 \(\mathrm{card}\,A = \mathrm{card}\,C = \kappa\)，\(\mathrm{card}\,B = \mathrm{card}\,D = \lambda\)，则 \(A\not\approx B\) 当且仅当 \(C\not\approx D\)。

**定理5.11** 设 \(A\) 为任意集合，则  
$$
\mathrm{card}\,A < \mathrm{card}\,\mathcal{P}(A).
$$

**定理5.12**（Schröder–Bernstein定理）  
(1) 设 \(A,B\) 为二集合，若 \(A\preccurlyeq B\) 且 \(B\preccurlyeq A\)，则 \(A\approx B\)；  
(2) 设 \(\kappa,\lambda\) 为二基数，若 \(\kappa \leq \lambda\) 且 \(\lambda \leq \kappa\)，则 \(\kappa = \lambda\)。

**定理5.13** \(\mathbb{R}\approx (\mathbb{N}\to 2)\)，其中 \(\mathbb{N}\to 2 = 2^{\mathbb{N}}\)。

**定理5.14**  
(1) 设 \(A\) 为任意无穷集合，则 \(\mathbb{N}\preccurlyeq A\)；  
(2) 设 \(\kappa\) 为任意无穷基数，则 \(\aleph_{0} \leq \kappa\)。  
**推论1** 设 \(\kappa\) 为任意基数，\(\kappa < \aleph_{0}\) 当且仅当 \(\kappa\) 是有穷基数。  
**推论2** 有穷集合的子集一定是有穷集合。  
**推论3** 设 \(A\) 是 \(\mathbb{N}\) 的无穷子集，则 \(\mathrm{card}\,A = \aleph_{0}\)。

**定理5.15** 集合 \(A\) 是无穷可数集当且仅当 \(A\) 可写成 \(\{a_{1},a_{2},\dots ,a_{n},\dots\}\) 形式。

**定理5.16** 可数集的子集是可数集。

**定理5.17** 可数个可数集的并集是可数集。

**定理5.18** 设 \(A\) 为无穷集，则 \(\mathcal{P}(A)\) 不是可数集。

**定理5.19** 设 \(K_{1},K_{2},L_{1},L_{2}\) 为四个集合，若 \(K_{1}\approx K_{2},L_{1}\approx L_{2}\)，则  
(1) 若 \(K_{1}\cap L_{1} = K_{2}\cap L_{2} = \emptyset\)，则 \(K_{1}\cup L_{1}\approx K_{2}\cup L_{2}\)；  
(2) \(K_{1}\times L_{1}\approx K_{2}\times L_{2}\)；  
(3) \(L_{1}\to K_{1}\approx L_{2}\to K_{2}\)。

**定理5.20**  
(1) 设 \(A\) 为一集合，则 \(2^{\mathrm{card}\,A} = \mathrm{card}\,\mathcal{P}(A)\)；  
(2) 设 \(\kappa\) 为一基数，则 \(\kappa < 2^{\kappa}\)。  
**推论**  
(1) \(\mathrm{card}\,\mathcal{P}(\mathbb{N}) = 2^{\aleph_{0}}\)；  
(2) \(\mathrm{card}\,\mathcal{P}(\mathbb{R}) = 2^{\aleph_{1}}\)；  
(3) \(\aleph = 2^{\aleph_{0}}\)。

**定理5.21** 设 \(\kappa,\lambda,\mu\) 为任意基数，则  
(1) \(\kappa+\lambda = \lambda+\kappa\)，\(\kappa\cdot \lambda = \lambda\cdot \kappa\)；  
(2) \(\kappa+(\lambda+\mu) = (\kappa+\lambda)+\mu\)，\(\kappa\cdot (\lambda\cdot \mu) = (\kappa\cdot \lambda)\cdot \mu\)；  
(3) \(\kappa\cdot (\lambda+\mu) = \kappa\cdot \lambda + \kappa\cdot \mu\)；  
(4) \(\kappa^{\lambda+\mu} = \kappa^{\lambda}\cdot \kappa^{\mu}\)；  
(5) \((\kappa\cdot \lambda)^{\mu} = \kappa^{\mu}\cdot \lambda^{\mu}\)；  
(6) \((\kappa^{\lambda})^{\mu} = \kappa^{\lambda\cdot \mu}\)。  
**推论** 设 \(\kappa,\lambda\) 为任意二基数，则  
(1) \(\kappa+(\lambda+1) = (\kappa+\lambda)+1\)；  
(2) \(\kappa\cdot (\lambda+1) = \kappa\cdot \lambda + \kappa\)；  
(3) \(\kappa^{\lambda+1} = \kappa^{\lambda}\cdot \kappa\)。

**定理5.22** 设 \(\kappa,\lambda,\mu\) 为基数，若 \(\kappa \leq \lambda\)，则  
(1) \(\kappa+\mu \leq \lambda+\mu\)；  
(2) \(\kappa\cdot \mu \leq \lambda\cdot \mu\)；  
(3) \(\kappa^{\mu} \leq \lambda^{\mu}\)；  
(4) \(\mu^{\kappa} \leq \mu^{\lambda}\)，其中 \(\kappa,\mu\) 不同时为 0。

**定理5.23** 设 \(\kappa\) 为任意无穷基数，则 \(\kappa\cdot \kappa = \kappa\)。

**定理5.24** 设 \(\kappa,\lambda\) 为二基数，其中较大的为无穷基数，较小的不为 0，则  
$$
\kappa+\lambda = \kappa\cdot \lambda = \max\{\kappa,\lambda\}.
$$  
**推论** 设 \(\kappa\) 为一无穷基数，则 \(\kappa+\kappa = \kappa\cdot \kappa = \kappa\)。

**定理5.25** 设 \(\kappa\) 为无穷基数，则 \(\kappa^{\kappa} = 2^{\kappa}\)。

---

## 第六章 序数*

**定理6.1** 设 \(\langle A,<\rangle\) 为拟线序集，\(\prec\) 为 \(A\neq \emptyset\) 上的良序关系当且仅当不存在函数 \(f:\mathbb{N}\to A\) 使得对任意 \(n\in \mathbb{N}\)，有 \(f(n^{+}) < f(n)\)。

**定理6.2** 设 \(\langle A,<_1\rangle,\langle B,<_2\rangle,\langle C,<_3\rangle\) 为三个拟序集，则  
(1) \(\langle A,<_1\rangle \cong \langle A,<_1\rangle\)；  
(2) 若 \(\langle A,<_1\rangle \cong \langle B,<_2\rangle\)，则 \(\langle B,<_2\rangle \cong \langle A,<_1\rangle\)；  
(3) 若 \(\langle A,<_1\rangle \cong \langle B,<_2\rangle\) 且 \(\langle B,<_2\rangle \cong \langle C,<_3\rangle\)，则 \(\langle A,<_1\rangle \cong \langle C,<_3\rangle\)。

**定理6.3** 设 \(f:A\to B\) 为单射，\(\prec_B\) 为 \(B\) 上的拟序关系。在 \(A\) 上定义关系 \(\prec_A\)：对任意 \(x,y\in A\)，\(x\prec_A y \Leftrightarrow f(x)\prec_B f(y)\)，则  
(1) \(\prec_A\) 为 \(A\) 上的拟序关系；  
(2) 若 \(\prec_B\) 为拟线序（拟全序）关系，则 \(\prec_A\) 为拟线序关系；  
(3) 若 \(\prec_B\) 为良序关系，则 \(\prec_A\) 为良序关系。

**定理6.4** 设 \(A,B\) 为二集合，且 \(B\subseteq A\)：  
(1) 若 \(\prec_A\) 为 \(A\) 上的拟序关系，则 \(\prec_A|_B\) 为 \(B\) 上的拟序关系；  
(2) 若 \(\prec_A\) 为 \(A\) 上的拟线序关系，则 \(\prec_A|_B\) 为 \(B\) 上的拟线序关系；  
(3) 若 \(\prec_A\) 为 \(A\) 上的良序关系，则 \(\prec_A|_B\) 为 \(B\) 上的良序关系。

**定理6.5**（超限归纳原理）设 \(\prec\) 为 \(A\) 上的良序，\(B\) 是 \(A\) 关于 \(\prec\) 的归纳子集，则 \(B = A\)。

**定理6.6** 设 \(\prec\) 为 \(A\) 上的拟线序，如果 \(A\) 上任何关于 \(\prec\) 的归纳子集都与 \(A\) 相等，则 \(\prec\) 为 \(A\) 上的良序。

**超限递归定理模式** 对于任意公式 \(\gamma(x,y)\)，以下成立：  
设 \(\prec\) 为集合 \(A\) 上良序，若 \(\forall f\exists !y\,\gamma(f,y)\) 成立，则存在唯一以 \(A\) 为定义域的函数 \(F\)，使得对任意 \(t\in A\)，\(\gamma(F|\,\mathrm{seg}\,t, F(t))\) 成立。

**定理6.7** 设 \(\langle A,<_A\rangle,\langle B,<_B\rangle\) 为两个良序集，则以下三种情况至少成立其一：  
(1) \(\langle A,<_A\rangle \cong \langle B,<_B\rangle\)；  
(2) \(\langle A,<_A\rangle \cong \langle \mathrm{seg}\,b,\prec_B^0\rangle, b\in B\)；  
(3) \(\langle \mathrm{seg}\,a,\prec_A^0\rangle \cong \langle B,<_B\rangle, a\in A\)。  
其中 \(\prec_A^0,\prec_B^0\) 分别为 \(\prec_A\) 在 \(\mathrm{seg}\,a\) 和 \(\prec_B\) 在 \(\mathrm{seg}\,b\) 上的限制。

**定理6.8** 设 \(\prec\) 为集合 \(A\) 上的良序，则唯一存在一个以 \(A\) 为定义域的函数 \(E\)，使得对任意 \(t\in A\)，  
$$
E(t) = \mathrm{ran}(E|\,\mathrm{seg}\,t) = \{E(x) \mid x < t\}.
$$

**定理6.9** 设 \(\langle A,\prec\rangle\) 为良序集，\(E\) 为前段值域函数，\(\alpha\) 是 \(\langle A,\prec\rangle\) 的 \(\in\)-象，则  
(1) \(\forall t\in A, E(t)\notin E(t)\)；  
(2) \(E\) 为 \(A\) 与 \(\alpha\) 之间的双射函数；  
(3) \(\forall s,t\in A, s < t \Leftrightarrow E(s)\in E(t)\)；  
(4) \(\alpha = \mathrm{ran}\,E\) 是传递集。

**定理6.10** 两个良序集是同构的当且仅当它们具有相同的 \(\in\)-象。

**定理6.11** 同构的良序集具有相同的序数。

**定理6.12** 设 \(\alpha\) 按属于关系是良序的，并且 \(\alpha\) 是传递集，则 \(\alpha\) 是一个序数（即 \(\alpha\) 是 \(\langle\alpha,\in_\alpha\rangle\) 的 \(\in\)-象）。

**定理6.13** 设 \(\alpha,\beta,\gamma\) 为序数：  
(1) \(\alpha\) 的元素为序数（任何序数的元素还是序数）；  
(2) \(\alpha\notin\alpha\)（反自反性）；  
(3) 若 \(\alpha\in\beta\) 且 \(\beta\in\gamma\)，则 \(\alpha\in\gamma\)（传递性）；  
(4) \(\alpha\in\beta,\alpha=\beta,\beta\in\alpha\) 有且仅有一式成立（序数之间具有三歧性）；  
(5) 由序数构成的非空集，按属于关系有最小元。

**定理6.14** 设 \(\alpha,\beta\) 为任意两个序数，则 \(\alpha<\beta,\alpha=\beta,\alpha>\beta\) 三式有且仅有一式成立。

**定理6.15**  
(1) 任何以序数为元素的传递集合是序数；  
(2) \(0\) 是序数；  
(3) 若 \(\alpha\) 是序数，则 \(\alpha^{+}=\alpha\cup\{\alpha\}\) 为序数；  
(4) 若集合 \(A\) 是以序数为元素的集合，则 \(\cup A\) 为序数。

**定理6.16**  
(1) 一切自然数都是序数；  
(2) 自然数集 \(\mathbb{N}\) 是序数（记作 \(\omega\)），\(\omega,\omega^{+},\omega^{++},\omega^{+++},\dots\) 是序数；  
(3) 设 \(A\) 是以序数为元素的集合，则 \(\cup A\) 为 \(A\) 关于属于等于关系的最小上界；  
(4) 设 \(\alpha\) 为一序数，则 \(\alpha^{+}\) 是大于 \(\alpha\) 的最小序数；  
(5) 设 \(\alpha\) 为一序数，则 \(\alpha = \{x \mid x\text{ 是序数 } \land x<\alpha\}\)。

**定理6.17**（Hartogs定理）对于任何集合 \(A\)，都存在序数 \(\alpha\)，使得 \(A\prec\alpha\)。

**定理6.18**（良序定理）对于任意集合 \(A\)，都存在 \(A\) 上的良序。

**定理6.19**（命数定理）对于任何集合 \(A\)，都存在序数 \(\alpha\)，使得 \(A\approx\alpha\)。

**定理6.20**  
(1) 对于任意集合 \(A,B\)，\(\mathrm{card}\,A = \mathrm{card}\,B \Leftrightarrow A\approx B\)；  
(2) 对于任意有穷集合 \(A\)，\(\mathrm{card}\,A\) 是与 \(A\) 等势的唯一的自然数。

**定理6.21** 设 \(\alpha\) 为一序数，则 \(\alpha\) 为初始序数当且仅当 \(\alpha\) 为一个基数。

---
# 《离散数学教程》定理汇总（续）

## 第七章 图

**定理7.1**（图论基本定理）设 \(G = \langle V,E\rangle\) 为一个无向图，\(V = \{v_{1},v_{2},\dots ,v_{n}\}\)，\(|E| = m\)，则  
$$
\sum_{i = 1}^{n}d(v_{i}) = 2m.
$$

**定理7.2**（图论基本定理）设 \(D = \langle V,E\rangle\) 为一个有向图，\(V = \{v_{1},v_{2},\dots ,v_{n}\}\)，\(|E| = m\)，则  
$$
\sum_{i = 1}^{n}d(v_{i}) = 2m \quad \text{且} \quad \sum_{i = 1}^{n}d^{+}(v_{i}) = \sum_{i = 1}^{n}d^{-}(v_{i}) = m.
$$  
**推论** 任何图 \(G\)（无向图或有向图）中，奇度数顶点的个数是偶数。

**定理7.3** 非负整数列 \(\mathbf{d} = (d_{1},d_{2},\dots ,d_{n})\)（\(d_{i}\geq 0\) 且为整数，\(i = 1,2,\dots ,n\)）是可图化的当且仅当  
$$
\sum_{i = 1}^{n}d_{i} \equiv 0 \pmod{2}.
$$

**定理7.4**（Erdős–Gallai 定理）设非负整数列 \(\mathbf{d} = (d_{1},d_{2},\dots ,d_{n})\)，满足 \((n - 1)\geq d_{1}\geq d_{2}\geq \dots \geq d_{n}\geq 0\)，则 \(\mathbf{d}\) 是可简单图化的当且仅当对每个整数 \(r\)（\(1\leq r\leq n - 1\)），  
$$
\sum_{i = 1}^{r}d_{i} \leq r(r - 1) + \sum_{i = r + 1}^{n}\min \{r,d_{i}\} \quad \text{且} \quad \sum_{i = 1}^{n}d_{i} \equiv 0 \pmod{2}.
$$

**定理7.5**（Havel–Hakimi 定理）设非负整数列 \(\mathbf{d} = (d_{1},d_{2},\dots ,d_{n})\)，满足 \(\sum_{i = 1}^{n}d_{i} \equiv 0 \pmod{2}\) 且 \((n - 1)\geq d_{1}\geq d_{2}\geq \dots \geq d_{n}\geq 0\)，则 \(\mathbf{d}\) 是可简单图化的当且仅当  
$$
\mathbf{d}^{\prime} = (d_{2} - 1,d_{3} - 1,\dots ,d_{d_{1} + 1} - 1,d_{d_{1} + 2},\dots ,d_{n})
$$  
是可简单图化的。

**定理7.6** 在 \(n\) 阶图 \(G\) 中，若从顶点 \(v_i\) 到 \(v_j\)（\(v_i\neq v_j\)）存在通路，则存在长度 \(\leq n - 1\) 的通路。  
**推论** 在 \(n\) 阶图 \(G\) 中，若从 \(v_i\) 到 \(v_j\)（\(v_i\neq v_j\)）存在通路，则存在长度 \(\leq n - 1\) 的路径。

**定理7.7** 在 \(n\) 阶图 \(G\) 中，若存在 \(v_i\) 到自身的回路，则存在长度 \(\leq n\) 的回路。  
**推论** 在 \(n\) 阶图 \(G\) 中，若存在 \(v_i\) 到自身的简单回路，则存在长度 \(\leq n\) 的初级回路（圈）。

**定理7.8** 一个图 \(G\) 为二部图当且仅当 \(G\) 中无奇圈。

**定理7.9** 设 \(G\) 为 \(n\) 阶无向连通图，则 \(G\) 的边数 \(m\geq n - 1\)。

**定理7.10**（Whitney 不等式）对于任意图 \(G\)，有  
$$
\kappa(G) \leq \lambda(G) \leq \delta(G),
$$  
其中 \(\kappa, \lambda, \delta\) 分别为 \(G\) 的点连通度、边连通度和最小度。  
**推论** 若 \(G\) 是 \(k\)-连通图，则 \(G\) 必为 \(k\)-边连通图。

**定理7.11** 设 \(G\) 是 \(n(n\geq 6)\) 阶简单无向连通图，\(\lambda(G) < \delta(G)\)，则必存在由 \(K_{n_1}, K_{n-n_1}\) 及在它们之间连入 \(\lambda(G)\) 条边构成的图 \(G^{*}\)（含 \(G\) 作为生成子图），其中 \(\lambda(G) + 2\leq n_1 \leq \left\lfloor \frac{n}{2} \right\rfloor\)。

**定理7.12** 设 \(G\) 是 \(n(n\geq 6)\) 阶连通简单无向图：  
(1) 若 \(\delta(G) \geq \left\lfloor \frac{n}{2} \right\rfloor\)，则 \(\lambda(G) = \delta(G)\)；  
(2) 若对 \(G\) 中任意一对不相邻顶点 \(u,v\) 有 \(d(u) + d(v) \geq n - 1\)，则 \(\lambda(G) = \delta(G)\)；  
(3) 若 \(d(G) \leq 2\)，则 \(\lambda(G) = \delta(G)\)。

**定理7.13** 设 \(G\) 是 \(n\) 阶无向简单连通图，且 \(G\) 不是完全图 \(K_n\)，则  
$$
\kappa(G) \geq 2\delta(G) - n + 2.
$$

**定理7.14** 对于给定的正整数 \(n, \delta, \kappa, \lambda\)，存在 \(n\) 阶简单连通无向图 \(G\)，使得 \(\delta(G)=\delta, \kappa(G)=\kappa, \lambda(G)=\lambda\) 的充要条件是下列三式之一成立：  
(1) \(0 \leq \kappa \leq \lambda \leq \delta < \left\lfloor \frac{n}{2} \right\rfloor\)；  
(2) \(1 \leq 2\delta - n + 2 \leq \kappa \leq \lambda = \delta < n - 1\)；  
(3) \(\kappa = \lambda = \delta = n - 1\).

**定理7.15**（Whitney）设 \(G\) 为 \(n(n\geq 3)\) 阶无向连通图，则 \(G\) 为 2-连通图当且仅当 \(G\) 中任意两个顶点共圈。

**定理7.16** 设 \(G\) 为 \(n(n\geq 3)\) 阶无向图，则 \(G\) 为 2-边连通图当且仅当 \(G\) 中任何两个顶点共简单回路。

**定理7.17** 设 \(v\) 为无向连通图 \(G\) 中的一个顶点，则 \(v\) 为 \(G\) 的割点当且仅当存在 \(V(G) - \{v\}\) 的划分 \(V_1 \cup V_2\)，使得对任意 \(u\in V_1, w\in V_2\)，\(v\) 在每一条 \(u\) 到 \(w\) 的路径上。  
**推论** \(v\) 为割点当且仅当存在 \(u\neq v, w\neq v\) 使得 \(v\) 在每一条 \(u\) 到 \(w\) 的路径上。

**定理7.18** 设 \(e\) 为无向连通图 \(G\) 中的一条边，则 \(e\) 是桥当且仅当 \(e\) 不在 \(G\) 的任何圈上。

**定理7.19** 设 \(e\) 为无向连通图 \(G\) 中的一条边，则 \(e\) 为桥当且仅当存在 \(V(G)\) 的划分 \(V_1 \cup V_2\)，使得对任意 \(u\in V_1, v\in V_2\)，\(e\) 在每一条 \(u\) 到 \(v\) 的路径上。

**定理7.20** 设 \(G\) 为 \(n(n\geq 3)\) 阶无向简单连通图，则下列命题等价：  
(1) \(G\) 是块（2-连通图）；  
(2) \(G\) 中任意两个顶点共圈；  
(3) \(G\) 中任意一个顶点与任意一条边共圈；  
(4) \(G\) 中任意两条边共圈；  
(5) 对任意 \(u,v\in V(G)\) 和边 \(e\)，存在从 \(u\) 到 \(v\) 且经过 \(e\) 的路径；  
(6) 对任意三个顶点中的两个，都存在从一个顶点到另一个顶点且经过第三个顶点的路径；  
(7) 对任意三个顶点中的两个，都存在从一个顶点到另一个顶点而不经过第三个顶点的路径。

**定理7.21** 设 \(D\) 为 \(n\) 阶有向图，则 \(D\) 是强连通的当且仅当 \(D\) 中存在回路，经过 \(D\) 中每个顶点至少一次。

**定理7.22** 设 \(D\) 为 \(n\) 阶有向图，则 \(D\) 是单向连通图当且仅当 \(D\) 中存在通路，经过每个顶点至少一次。

---

## 第八章 欧拉图与哈密顿图

**定理8.1** 设 \(G\) 是无向连通图，则以下命题等价：  
(1) \(G\) 是欧拉图（存在欧拉回路）；  
(2) \(G\) 中所有顶点度数均为偶数；  
(3) \(G\) 是若干个边不重的圈的并。

**定理8.2** 设 \(G\) 是连通的无向图，则 \(G\) 是半欧拉图（存在欧拉通路）当且仅当 \(G\) 中恰有两个奇度顶点。

**定理8.3** 设 \(D\) 是连通的有向图，则以下命题等价：  
(1) \(D\) 是欧拉图；  
(2) \(\forall v\in V(D), d^{+}(v) = d^{-}(v)\)；  
(3) \(D\) 是若干个边不重的有向初级回路的并。

**定理8.4** 设 \(D\) 是连通的有向图，则 \(D\) 是半欧拉图当且仅当 \(D\) 中恰有两个奇度顶点，其中一个入度比出度大 1，另一个出度比入度大 1，其余顶点入度等于出度。

**定理8.5** 设 \(G\) 是无向欧拉图，则 Fleury 算法终止时得到的简单通路是欧拉回路。

**定理8.6** 设无向图 \(G = \langle V,E\rangle\) 是哈密顿图，则对 \(V\) 的任意非空真子集 \(V_1\)，有  
$$
p(G - V_1) \leq |V_1|,
$$  
其中 \(p(G - V_1)\) 是 \(G - V_1\) 的连通分支数。

**推论** 设 \(G\) 是半哈密顿图（存在哈密顿通路），则对任意非空真子集 \(V_1 \subseteq V\)，有  
$$
p(G - V_1) \leq |V_1| + 1.
$$

**定理8.7**（Ore）设 \(G\) 是 \(n(n\geq 2)\) 阶无向简单图，若对 \(G\) 中任意不相邻顶点 \(v_i, v_j\) 有  
$$
d(v_i) + d(v_j) \geq n - 1,
$$  
则 \(G\) 中存在哈密顿通路。

**推论1**（Ore）设 \(G\) 是 \(n(n\geq 3)\) 阶无向简单图，若对任意不相邻顶点 \(v_i, v_j\) 有  
$$
d(v_i) + d(v_j) \geq n,
$$  
则 \(G\) 中存在哈密顿回路（\(G\) 是哈密顿图）。

**推论2**（Dirac）设 \(G\) 是 \(n(n\geq 3)\) 阶无向简单图，若对任意顶点 \(v\) 有 \(d(v) \geq \frac{n}{2}\)，则 \(G\) 是哈密顿图。

**定理8.8**（Bondy–Chvátal）设 \(u,v\) 为无向 \(n\) 阶简单图 \(G\) 中两个不相邻顶点，且 \(d(u) + d(v) \geq n\)，则 \(G\) 是哈密顿图当且仅当 \(G \cup (u,v)\) 是哈密顿图。

**定理8.9** 设 \(D\) 为 \(n(n\geq 2)\) 阶竞赛图，则 \(D\) 具有哈密顿通路。  
**推论** 若 \(D\) 含 \(n\) 阶竞赛图作为子图，则 \(D\) 中具有哈密顿通路。

**定理8.10** 强连通的竞赛图为哈密顿图。  
**推论** 设 \(D\) 为 \(n\) 阶有向图，若 \(D\) 含 \(n\) 阶强连通的竞赛图作为子图，则 \(D\) 是哈密顿图。

**定理8.11** 完全图 \(K_{2k+1}(k\geq 1)\) 中含 \(k\) 条边不重的哈密顿回路，且这些回路包含 \(K_{2k+1}\) 的全部边。  
**推论** \(K_{2k}(k\geq 2)\) 中含 \(k - 1\) 条边不重的哈密顿回路；从 \(K_{2k}\) 中删除这些回路的所有边后，所得图含 \(k\) 条彼此不相邻的边。

---

## 第九章 树

**定理9.1** 设 \(G = \langle V,E\rangle\) 为 \(n\) 阶 \(m\) 条边的无向图，则下列命题等价：  
(1) \(G\) 是树（连通无回路）；  
(2) \(G\) 中任意两个顶点之间存在唯一的一条路径；  
(3) \(G\) 中无圈，且 \(m = n - 1\)；  
(4) \(G\) 连通，且 \(m = n - 1\)；  
(5) \(G\) 连通，且 \(G\) 中任何边均为桥；  
(6) \(G\) 中无圈，但在 \(G\) 中任意两个不同顶点 \(u,v\) 之间添加边 \((u,v)\)，所得图含唯一的一个圈。

**定理9.2** 设 \(T\) 是 \(n\) 阶非平凡的无向树，则 \(T\) 至少有两个叶子。

**定理9.3** 无向图 \(G\) 具有生成树当且仅当 \(G\) 是连通的。  
**推论1** 设 \(G\) 为 \(n\) 阶 \(m\) 条边的无向连通图，则 \(m \geq n - 1\)。  
**推论2** 设 \(T\) 是 \(n\) 阶 \(m\) 条边的无向连通图 \(G\) 的一棵生成树，则 \(T\) 的余树 \(\overline{T}\) 中含 \(m - n + 1\) 条边。  
**推论3** 设 \(T\) 是连通图 \(G\) 的一棵生成树，\(\overline{T}\) 为余树，\(C\) 为 \(G\) 中任意一个圈，则 \(E(\overline{T}) \cap E(C) \neq \emptyset\)。

**定理9.4** 设 \(T\) 是无向连通图 \(G\) 的一棵生成树，\(e\) 为 \(T\) 的任意一条弦（非树枝），则 \(T \cup \{e\}\) 中含 \(G\) 的一个只含一条弦、其余边均为树枝的圈，且不同弦对应的圈不同。

**定理9.5** 设 \(T\) 是连通图 \(G\) 的一棵生成树，\(e\) 为 \(T\) 的一条树枝，则 \(G\) 中存在只含树枝 \(e\)、其余元素均为弦的割集。若 \(e_1, e_2\) 是 \(T\) 的不同树枝，则它们对应的只含一条树枝的割集不同。

**定理9.6** 设 \(G = \langle V,E\rangle\) 为 \(n\) 阶无向连通标定图，则对 \(G\) 的任意非环边 \(e\)，有  
$$
\tau(G) = \tau(G - e) + \tau(G \backslash e),
$$  
其中 \(\tau(G)\) 表示 \(G\) 的生成树数目，\(G\backslash e\) 表示将边 \(e\) 收缩后得到的图。

**定理9.7**（Cayley 公式）\(\tau(K_n) = n^{n-2} \ (n\geq 2)\)，其中 \(K_n\) 为 \(n\) 阶标定完全图。

**定理9.8** 设 \(\Omega\) 为图 \(G\) 的所有边导出子图的集合，则 \(\Omega\) 在环和运算及数乘运算（\(0\cdot G_i = \emptyset, 1\cdot G_i = G_i\)）下构成数域 \(F = \{0,1\}\) 上的 \(m\) 维线性空间，其 \(M\) 为生成元集。

**定理9.9** 设 \(T\) 是 \(n\) 阶 \(m\) 条边的无向连通图 \(G\) 的一棵生成树，\(C_k\) 是对应弦 \(e_k'\) 的基本回路，\(k = 1,2,\dots ,m - n + 1\)，则对任意 \(r\) 条弦 \(e_{i_1}',\dots ,e_{i_r}'\)，这些弦均在  
$$
C_{i_1} \oplus C_{i_2} \oplus \dots \oplus C_{i_r}
$$  
中，其中 \(\oplus\) 为环和运算。

**定理9.10** 设 \(C_1\) 和 \(C_2\) 是无向图 \(G\) 中的任意两个回路（初级的或简单的），则环和 \(C_1 \oplus C_2\) 为 \(G\) 中的环路。  
**推论** 环路对环和运算是封闭的。

**定理9.11** 设 \(G\) 为无向连通图，\(T\) 为 \(G\) 的任意一棵生成树，则 \(G\) 中任一回路（初级的或简单的）或为 \(T\) 的基本回路，或为若干个基本回路的环和。  
**推论1** 无向连通图 \(G\) 中任一环路或为某棵生成树的基本回路，或为若干个基本回路的环和。  
**推论2** 设 \(G\) 为 \(n\) 阶 \(m\) 条边的无向连通图，设 \(s\) 为 \(G\) 中回路（初级的或简单的）的个数，则  
$$
m - n + 1 \leq s \leq 2^{m - n + 1} - 1.
$$  
**推论3** 设 \(s\) 是 \(G\) 中环路数（含空集 \(\varnothing\)），则  
$$
s = 2^{m - n + 1}.
$$

**定理9.12** 设 \(G\) 为 \(n\) 阶 \(m\) 条边的无向连通图，\(C_R\) 为 \(G\) 中环路（含 \(\varnothing\)）组成的集合，则 \(C_R\) 是 \(\Omega\) 的 \(m - n + 1\) 维子空间，其中 \(\Omega\) 是 \(G\) 的所有边导出子图的集合。

**定理9.13** 连通图 \(G\) 中每个割集至少包含 \(G\) 的每个生成树的一个树枝。

**定理9.14** 设 \(G\) 为 \(n\) 阶 \(m\) 条边的无向连通图，\(T\) 是 \(G\) 的一棵生成树，\(S_\perp\) 为 \(T\) 对应的基本割集系统，则对任意 \(S_{i_1},\dots ,S_{i_k} \in S_\perp\)，它们对应的树枝 \(e_{i_1}',\dots ,e_{i_k}'\) 均在  
$$
S_{i_1} \oplus S_{i_2} \oplus \dots \oplus S_{i_k}
$$  
中。

**定理9.15** 设 \(S_1, S_2\) 为无向图 \(G\) 的两个断集，则 \(S_1 \oplus S_2\) 为 \(G\) 的断集。

**定理9.16** 设 \(G\) 为无向连通图，\(T\) 为 \(G\) 的任意一棵生成树，则 \(G\) 中任一断集或为 \(T\) 的基本割集，或为若干个基本割集的对称差集。

**定理9.17** 设 \(G\) 为 \(n\) 阶 \(m\) 条边的无向连通图，设 \(S_\# = \{\varnothing\} \cup \{S' \mid S' \text{ 是 } G \text{ 的断集的导出子图}\}\)，则 \(S_\#\) 为 \(\Omega\) 的 \(n - 1\) 维子空间。

---

## 第十章 图的矩阵表示

**定理10.1** \(n\) 阶无向连通图 \(G\) 的关联矩阵的秩 \(r(M(G)) = n - 1\)。

**定理10.2** \(n\) 阶无向连通图 \(G\) 的基本关联矩阵的秩 \(r(M_f(G)) = n - 1\)。  
**推论1** 设 \(n\) 阶无向图 \(G\) 有 \(p\) 个连通分支，则 \(r(M(G)) = r(M_f(G)) = n - p\)，其中 \(M_f(G)\) 是从 \(M(G)\) 的每个对角块中删除任意一行得到。  
**推论2** \(G\) 是连通图当且仅当 \(r(M(G)) = r(M_f(G)) = n - 1\)。

**定理10.3** 设 \(M_f(G)\) 是 \(n\) 阶连通图 \(G\) 的一个基本关联矩阵，\(M_f'\) 是 \(M_f(G)\) 中任意 \(n - 1\) 列组成的方阵，则 \(M_f'\) 中各列对应的边集 \(\{e_{i_1},\dots ,e_{i_{n-1}}\}\) 的导出子图是 \(G\) 的生成树当且仅当 \(|M_f'| \neq 0\)。

**定理10.4** 设 \(A\) 是 \(n\) 阶有向标定图 \(D\) 的邻接矩阵，\(A^l\)（\(l\geq 2\)）中元素 \(a_{ij}^{(l)}\) 为 \(v_i\) 到 \(v_j\) 长度为 \(l\) 的通路数，\(\sum_i \sum_j a_{ij}^{(l)}\) 为 \(D\) 中长度为 \(l\) 的通路总数，\(\sum_i a_{ii}^{(l)}\) 为 \(D\) 中长度为 \(l\) 的回路总数。  
**推论** 设 \(B_r = A + A^2 + \dots + A^r\)，则 \(b_{ij}^{(r)}\) 为 \(v_i\) 到 \(v_j\) 长度 \(\leq r\) 的通路数，\(\sum_i \sum_j b_{ij}^{(r)}\) 为长度 \(\leq r\) 的通路总数，\(\sum_i b_{ii}^{(r)}\) 为长度 \(\leq r\) 的回路总数。

**定理10.5** 设 \(G\) 是 \(n\) 阶无向简单图，\(A\) 是 \(G\) 的邻接矩阵，则 \(A^k\) 中元素 \(a_{ij}^{(k)}\)（\(i\neq j\)）为 \(G\) 中 \(v_i\) 到 \(v_j\) 长度为 \(k\) 的通路数，\(a_{ii}^{(k)}\) 为 \(v_i\) 到自身长度为 \(k\) 的回路数。  
**推论1** 在 \(A^2\) 中，\(a_{ii}^{(2)} = d(v_i)\)。  
**推论2** 若 \(G\) 连通，则 \(d(v_i, v_j)\) 为使 \(a_{ij}^{(k)} \neq 0\) 的最小正整数 \(k\)。

---

## 第十一章 平面图

**定理11.1** 图 \(G\) 可嵌入球面当且仅当 \(G\) 可嵌入平面。  
**推论** 设 \(\hat{G}\) 与 \(\hat{G}'\) 分别是平面图 \(G\) 的球面嵌入和平面嵌入，则 \(\hat{G} \cong \hat{G}'\)。

**定理11.2** 平面图 \(G\) 中所有面的次数之和等于边数 \(m\) 的 2 倍：  
$$
\sum_{i=1}^r \deg(R_i) = 2m.
$$

**定理11.3** 设 \(R\) 是平面图 \(G\) 的某个平面嵌入 \(\hat{G}\) 的一个内部面，则存在 \(G\) 的平面嵌入 \(\hat{G}_1\) 以 \(R\) 为外部面。

**定理11.4** 设 \(G\) 为 \(n(n\geq 3)\) 阶简单连通平面图，则 \(G\) 是极大平面图当且仅当 \(G\) 的每个面的次数均为 3。

**定理11.5** \(n(n\geq 4)\) 阶极大平面图 \(G\) 中，\(\delta(G) \geq 3\)。

**定理11.6**（Euler 公式）对于任意连通的平面图 \(G\)，有  
$$
n - m + r = 2,
$$  
其中 \(n, m, r\) 分别为顶点数、边数、面数。

**定理11.7** 对于具有 \(p(p\geq 2)\) 个连通分支的平面图 \(G\)，有  
$$
n - m + r = p + 1.
$$

**定理11.8** 设 \(G\) 是连通的平面图，且各面的次数至少为 \(l(l\geq 3)\)，则  
$$
m \leq \frac{l}{l-2}(n-2).
$$

**定理11.9** 设 \(G\) 是有 \(p(p\geq 2)\) 个连通分支的平面图，各面的次数至少为 \(l(l\geq 3)\)，则  
$$
m \leq \frac{l}{l-2}(n-p-1).
$$

**定理11.10** 设 \(G\) 是 \(n(n\geq 3)\) 阶 \(m\) 条边的简单平面图，则  
$$
m \leq 3n - 6.
$$

**定理11.11** 设 \(G\) 为 \(n\) 阶极大平面图（\(n\geq 3\)），则  
$$
m = 3n - 6.
$$

**定理11.12** 设 \(G\) 是简单平面图，则 \(G\) 中至少存在一个顶点，其度数 \(\leq 5\)。

**定理11.13**（Kuratowski 定理）图 \(G\) 是平面图当且仅当 \(G\) 不含与 \(K_5\) 或 \(K_{3,3}\) 同胚的子图。

**定理11.14**（Wagner 定理）图 \(G\) 是平面图当且仅当 \(G\) 中没有可以收缩到 \(K_5\) 或 \(K_{3,3}\) 的子图。

**定理11.15** 设 \(G^*\) 是连通平面图 \(G\) 的对偶图，\(n^*, m^*, r^*\) 和 \(n, m, r\) 分别为对偶图和原图的顶点数、边数、面数，则  
(1) \(n^* = r\)； (2) \(m^* = m\)； (3) \(r^* = n\)；  
(4) 设 \(v_i^*\) 位于面 \(R_i\) 中，则 \(d_{G^*}(v_i^*) = \deg(R_i)\)。

**定理11.16** 设 \(G^*\) 是具有 \(p(p\geq 2)\) 个连通分支的对偶图，则  
(1) \(n^* = r\)； (2) \(m^* = m\)； (3) \(r^* = n - p + 1\)；  
(4) 设 \(v_i^*\) 位于面 \(R_i\) 中，则 \(d_{G^*}(v_i^*) = \deg(R_i)\)。

**定理11.17** 设 \(G^*\) 是某平面图 \(G\) 的对偶图，则 \(G^{**} \cong G\) 当且仅当 \(G\) 是连通图。

**定理11.18** \(n(n\geq 4)\) 阶轮图 \(W_n\) 是自对偶图。

**定理11.19** 所有顶点都在外部面边界上的 \(n(n\geq 3)\) 阶外可平面图是极大外可平面图当且仅当每个内部面的边界是长为 3 的圈，外部面的边界是长为 \(n\) 的圈。  
**推论** 对于 \(n\) 阶外平面图，总可以通过加边得到极大外平面图。

**定理11.20** 设 \(G\) 是所有顶点均在外部面边界上的 \(n(n\geq 3)\) 阶极大外平面图，则 \(G\) 有 \(n-2\) 个内部面。

**定理11.21** 设 \(G\) 是 \(n(n\geq 3)\) 阶极大外平面图，则  
(1) \(m = 2n - 3\)；  
(2) \(G\) 中至少有 3 个顶点的度数 \(\leq 3\)；  
(3) \(G\) 中至少有 2 个顶点的度数为 2；  
(4) \(\kappa(G) = 2\)（点连通度）。

**定理11.22** 一个图 \(G\) 是外平面图当且仅当 \(G\) 中不含与 \(K_4\) 或 \(K_{2,3}\) 同胚的子图。

**定理11.23** 设 \(G\) 是 \(n\) 阶简单平面哈密顿图，\(C\) 为哈密顿回路，以 \(r_i', r_i''\) 分别表示在 \(C\) 内部和外部的次数为 \(i\) 的面数，则  
$$
\sum_{i=3}^n (i-2)(r_i' - r_i'') = 0.
$$

**定理11.24** 任何 4-连通平面图都是哈密顿图。

---
# 《离散数学教程》定理汇总（续）

## 第十二章 图的着色

**定理12.1** \(\chi(G) = 1\) 当且仅当 \(G\) 为零图。

**定理12.2** \(\chi(K_n) = n\)。

**定理12.3** 奇圈和奇数阶轮图都是 3-色图，偶数阶轮图为 4-色图。

**定理12.4** 图 \(G\) 是 2-可着色的当且仅当 \(G\) 为二部图。  
**推论1** \(\chi(G) = 2\) 当且仅当 \(G\) 为非零图的二部图。  
**推论2** 图 \(G\) 是 2-可着色的当且仅当 \(G\) 中不含奇圈。

**定理12.5** 对于任意图 \(G\)，有  
$$
\chi(G) \leq \Delta(G) + 1.
$$

**定理12.6**（Brooks 定理）设连通图 \(G\) 不是完全图 \(K_n\)（\(n \geq 3\)）也不是奇圈，则  
$$
\chi(G) \leq \Delta(G).
$$

**定理12.7**（着色划分定理）对图 \(G\) 进行 \(\chi(G)\)-着色，设  
$$
V_i = \{v \mid v \in V(G) \text{ 着色为第 } i \text{ 种颜色} \},
$$  
则 \(\Pi = \{V_1, V_2, \dots, V_{\chi(G)}\}\) 是 \(V(G)\) 的一个划分。  
（注：原文本中定理12.7 出现两次，第二次可能是关于等价关系的类似结论）

**定理12.8** 设 \(f(G,k)\) 为图 \(G\) 的色多项式，则  
$$
f(K_n,k) = k(k-1)\dots(k-n+1), \quad f(N_n,k) = k^n,
$$  
其中 \(K_n\) 为完全图，\(N_n\) 为零图。  
**推论** \(f(K_n,k) = f(K_{n-1},k)(k-n+1) \ (n\geq 2)\).

**定理12.9**（色多项式递推公式）设无环无向图 \(G\)：  
(1) 若 \(e = (v_i,v_j) \notin E(G)\)，则  
$$
f(G,k) = f(G \cup (v_i,v_j), k) + f(G \setminus (v_i,v_j), k).
$$  
(2) 若 \(e = (v_i,v_j) \in E(G)\)，则  
$$
f(G,k) = f(G - e, k) - f(G \setminus e, k).
$$  
其中 \(G \setminus (v_i,v_j)\) 表示将 \(v_i, v_j\) 合并为一个顶点。

**定理12.10** 设 \(V_1\) 是 \(G\) 的点割集，且 \(G[V_1]\) 是 \(|V_1|\) 阶完全图，\(G - V_1\) 有 \(p(p \geq 2)\) 个连通分支 \(G_1, G_2, \dots, G_p\)，令 \(H_i = G[V_1 \cup V(G_i)]\)，则  
$$
f(G,k) = \frac{\prod_{i=1}^p f(H_i,k)}{f(G[V_1],k)^{p-1}}.
$$

**定理12.11** \(T\) 是 \(n\) 阶树当且仅当 \(f(T,k) = k(k-1)^{n-1}\).

**定理12.12** 若 \(G\) 是 \(n\) 阶圈（\(n \geq 3\)），则  
$$
f(G,k) = (k-1)^n + (-1)^n(k-1).
$$

**定理12.13** 地图 \(G\) 是 \(k\) 面可着色的当且仅当它的对偶图 \(G^*\) 是 \(k\) 可着色的。

**定理12.14** 设 \(G\) 是连通的无环平面图，\(G^*\) 是其对偶图，则 \(G\) 是 \(k\) 可着色的当且仅当 \(G^*\) 是 \(k\) 面可着色的。

**定理12.15** 任何平面图都是 6 可着色的。

**定理12.16**（Heawood）任何平面图都是 5 可着色的。

**定理12.17**（Vizing）设 \(G\) 是简单图，则  
$$
\Delta(G) \leq \chi'(G) \leq \Delta(G) + 1,
$$  
其中 \(\chi'(G)\) 是边色数。

---

## 第十三章 支配集、覆盖集、独立集与匹配

**定理13.1** 设无向图 \(G\) 中无孤立顶点，\(V_1^*\) 为 \(G\) 的一个极小支配集，则存在另一个极小支配集 \(V_2^*\)，使得 \(V_1^* \cap V_2^* = \emptyset\).

**定理13.2** 设无向图 \(G\) 中无孤立顶点，\(V^*\) 为 \(G\) 中极大独立集，则 \(V^*\) 是 \(G\) 的极小支配集。

**定理13.3** 设无向图 \(G = (V,E)\) 中无孤立顶点，\(V^* \subset V\)，则 \(V^*\) 为 \(G\) 的点覆盖集当且仅当 \(\overline{V^*} = V - V^*\) 为 \(G\) 的点独立集。  
**推论** 设 \(G\) 是 \(n\) 阶无孤立点的无向图，\(V^*\) 是 \(G\) 的极小（最小）点覆盖集当且仅当 \(\overline{V^*}\) 是 \(G\) 的极大（最大）点独立集，且有  
$$
\alpha_0 + \beta_0 = n,
$$  
其中 \(\alpha_0\) 为点覆盖数，\(\beta_0\) 为点独立数。

**定理13.4** 设 \(G\) 是 \(n\) 阶无向图，\(V^*\) 为 \(G\) 中团当且仅当 \(V^*\) 为 \(\overline{G}\) 中的独立集。  
**推论** 设 \(V^*\) 为 \(G\) 中极大（最大）团当且仅当 \(V^*\) 为 \(\overline{G}\) 中的极大（最大）独立集，从而 \(\nu_0(G) = \beta_0(\overline{G})\)（团数等于补图的独立数）。

**定理13.5** 设 \(G\) 为无孤立点的 \(n\) 阶无向图：  
(1) 设 \(M\) 为最大匹配，对每个 \(M\) 非饱和点 \(v\)，取一条关联 \(v\) 的边组成边集 \(N\)，则 \(W = M \cup N\) 为最小边覆盖集。  
(2) 设 \(W_1\) 为最小边覆盖集，若 \(W_1\) 中存在相邻边，则移去其中一条，直至无相邻边为止，得到 \(M_1 = W_1 - N_1\)，则 \(M_1\) 为最大匹配。  
(3) \(\alpha_1 + \beta_1 = n\)，其中 \(\alpha_1\) 为边覆盖数，\(\beta_1\) 为匹配数。  
**推论** 设 \(M\) 为匹配，\(W\) 为边覆盖，则 \(|M| \leq |W|\)，等号成立时 \(M\) 为完美匹配且 \(W\) 为最小边覆盖。

**定理13.6** 设 \(G\) 为无孤立点的 \(n\) 阶无向图，\(M\) 为匹配，\(N\) 为点覆盖，\(Y\) 为点独立集，\(W\) 为边覆盖，则  
(1) \(|M| \leq |N|\)，  
(2) \(|Y| \leq |W|\)，  
等号成立时分别为最大匹配、最小点覆盖、最大点独立集、最小边覆盖。  
**推论** \(\beta_1 \leq \alpha_0,\quad \beta_0 \leq \alpha_1\).

**定理13.7** 设 \(M_1, M_2\) 为 \(G\) 中两个不同的匹配，则 \(G[M_1 \oplus M_2]\) 的每个连通分支或为由 \(M_1, M_2\) 中的边组成的交错圈，或为交错路径。

**定理13.8** 设 \(M\) 为图 \(G\) 中的一个匹配，\(\Gamma\) 为 \(G\) 中关于 \(M\) 的可增广路径，则 \(M' = M \oplus E(\Gamma)\) 仍为匹配，且 \(|M'| = |M| + 1\).

**定理13.9**（Berge）\(M\) 为 \(G\) 中最大匹配当且仅当 \(G\) 中不含 \(M\)-可增广路径。

**定理13.10**（Tutte）\(n\) 阶无向图 \(G\) 具有完美匹配当且仅当对任意 \(V' \subset V(G)\)，  
$$
p_\#(G - V') \leq |V'|,
$$  
其中 \(p_\#(G - V')\) 表示 \(G - V'\) 中奇数阶连通分支数。  
**推论** 任何无桥 3-正则图都有完美匹配。

**定理13.11**（Hall 定理）设二部图 \(G = \langle V_1, V_2, E \rangle\)，\(|V_1| \leq |V_2|\)，则 \(G\) 中存在 \(V_1\) 到 \(V_2\) 的完备匹配当且仅当对任意 \(S \subseteq V_1\)，  
$$
|S| \leq |N(S)|,
$$  
其中 \(N(S)\) 为 \(S\) 的邻域。

**定理13.12** 设二部图 \(G = \langle V_1, V_2, E \rangle\)，若 \(V_1\) 中每个顶点至少关联 \(t(t \geq 1)\) 条边，而 \(V_2\) 中每个顶点至多关联 \(t\) 条边，则 \(G\) 中存在 \(V_1\) 到 \(V_2\) 的完备匹配。

**定理13.13** 设 \(G\) 为 \(k\)-正则二部图，则 \(G\) 中存在 \(k\) 个边不重的完美匹配。  
**推论** \(K_{k,k}\) 中存在 \(k\) 个边不重的完美匹配。

**定理13.14**（Kőnig–Egerváry）设 \(G = \langle V_1, V_2, E \rangle\) 为无孤立点的二部图，则 \(\alpha_0 = \beta_1\)（点覆盖数等于匹配数）。

---

## 第十四章 带权图及其应用

**定理14.1**（关键路径定理）设 \(P_E = \{v \mid TE(v) \text{已算出}\}\)，\(T_E = V - P_E\)，若 \(T_E \neq \emptyset\)，则存在 \(u \in T_E\) 使得 \(\Gamma^{-}(u) \subseteq P_E\).

**定理14.2** 设 \(P_L = \{v \mid TL(v) \text{已算出}\}\)，\(T_L = V - P_L\)，若 \(T_L \neq \emptyset\)，则存在 \(u \in T_L\) 使得 \(\Gamma^{+}(u) \subseteq P_L\).

**定理14.3** 在关键路径问题中，\(TS(v_i) = 0\) 当且仅当 \(v_i\) 在关键路径上。

**定理14.4**（中国邮路问题）设 \(C\) 是带正权无向连通图 \(G\) 中的最优投递路线当且仅当对应的欧拉图 \(G^*\) 满足：  
(1) \(G\) 的每条边在 \(G^*\) 中至多重复一次；  
(2) \(G\) 的每个圈上重复边的权之和不超过该圈总权的一半。

**定理14.5** 设带正权无向连通图 \(G = \langle V,E,W \rangle\)，\(V'\) 为奇度顶点集，\(|V'| = 2k(k \geq 0)\)，\(F = \{e \mid e \in E \text{ 在求最优回路时加了重复边} \}\)，则 \(F\) 的导出子图 \(G[F]\) 可以表示为以 \(V'\) 中顶点为起点与终点的 \(k\) 条不交的最短路径之并。

**定理14.6**（最小生成树判定定理）设 \(T\) 是无向连通带权图 \(G = \langle V,E,W \rangle\) 的一棵生成树，则以下等价：  
(1) \(T\) 是最小生成树；  
(2) 对任意 \(e \in E(T)\)，设 \(S_e\) 为 \(e\) 对应的基本割集，则 \(e\) 是 \(S_e\) 中权最小的边；  
(3) 对任意 \(e \in E(\overline{T})\)（余树边），设 \(C_e\) 为 \(e\) 对应的基本回路，则 \(e\) 是 \(C_e\) 中权最大的边。

**定理14.7** 设 \(G\) 为无向连通带权图，\(C\) 为任意一个圈，\(e'\) 是 \(C\) 中权最大的边，则 \(G - e'\) 中的最小生成树也是 \(G\) 中的最小生成树。

**定理14.8** 设 \(G\) 为无向连通带权图，\(S = (V_1, \overline{V}_1)\) 为割集，\(e' \in S\) 且 \(W(e') = \min_{e \in S} W(e)\)，设 \(T'\) 是以 \(e'\) 为树枝的所有生成树中权最小的，则 \(T'\) 是 \(G\) 的最小生成树。

**定理14.9** 设 \(G\) 为无向连通带权图，\(e\) 是 \(G\) 中非环且权最小的边，则 \(G\) 中存在含 \(e\) 的最小生成树。

**定理14.10** 设 \(G\) 为无向连通带权图，\(e\) 是 \(G\) 中非环且权最小的边，设 \(G'\) 是 \(G\) 中短接 \(e\) 的两个端点后得到的图，\(T'\) 是 \(G'\) 的最小生成树，则 \(T^* = G[E(T') \cup \{e\}]\) 是 \(G\) 的最小生成树。

**定理14.11** 在带权 \(w_1 \leq w_2 \leq \dots \leq w_t\) 的所有最优二叉树中，存在以权为 \(w_1, w_2\) 的两顶点 \(v_1, v_2\) 为兄弟，且它们的层数均为树高 \(h\) 的最优树。

**定理14.12**（Huffman 定理）设 \(T'\) 是带权 \(w_1 + w_2, w_3, \dots, w_t\) 的最优二叉树（\(w_1 \leq w_2 \leq \dots \leq w_t\)），如果将 \(T'\) 中带权 \(w_1 + w_2\) 的树叶作为分支点，使其带两个儿子，权分别为 \(w_1\) 和 \(w_2\)，则所得树 \(T^*\) 是带权 \(w_1, w_2, \dots, w_t\) 的最优树。

**定理14.13** 设 \(r(r \geq 2)\) 又正则树 \(T\) 的分支点数为 \(i\)，树叶数为 \(t\)，则 \((r-1)i = t - 1\).

**定理14.14** 一棵二叉树可以产生一个前缀码。  
**推论** 一棵二叉正则树可以产生唯一的一个前缀码。

**定理14.15** 设 \(G = \langle V,E,W \rangle\) 是 \(n\) 阶完全带权图，各边权为正，且满足三角不等式，则用最邻近法得到的哈密顿回路权 \(d\) 与最短哈密顿回路权 \(d_0\) 满足  
$$
\frac{d}{d_0} \leq \frac{1}{2}(\lfloor \log_2 n \rfloor + 1).
$$

**定理14.16** 在满足三角不等式的无向完全带权图中，用最小生成树法得到的哈密顿回路权 \(d\) 与最短哈密顿回路权 \(d_0\) 满足  
$$
\frac{d}{d_0} < 2.
$$

**定理14.17** 在满足三角不等式的无向完全带权图中，用最小权匹配法得到的哈密顿回路权 \(d\) 与最短哈密顿回路权 \(d_0\) 满足  
$$
\frac{d}{d_0} < \frac{3}{2}.
$$

---

## 第十五章 代数系统

**定理15.1** 设 \(\circ\) 为 \(A\) 上的二元运算，若 \(\circ\) 满足结合律，则 \(\circ\) 满足广义结合律。

**定理15.2** 设 \(\circ\) 为 \(A\) 上的二元运算，若存在左单位元 \(e_l\) 和右单位元 \(e_r\)，则 \(e_l = e_r = e\)，且 \(e\) 是唯一的单位元。

**定理15.3** 设 \(\circ\) 为 \(A\) 上的二元运算，若存在左零元 \(\theta_l\) 和右零元 \(\theta_r\)，则 \(\theta_l = \theta_r = \theta\)，且 \(\theta\) 是唯一的零元。

**定理15.4** 设集合 \(A\) 至少含有两个元素，\(e\) 和 \(\theta\) 分别为单位元和零元，则 \(e \neq \theta\).

**定理15.5** 设 \(\circ\) 为 \(A\) 上可结合的二元运算，单位元为 \(e\)，若 \(x \in A\) 存在左逆 \(y_l\) 和右逆 \(y_r\)，则 \(y_l = y_r = y\)，且 \(y\) 是 \(x\) 唯一的逆元。

**定理15.6**（积代数的性质）设 \(V_1 = \langle A, o_{11}, \dots, o_{1r} \rangle\), \(V_2 = \langle B, o_{21}, \dots, o_{2r} \rangle\) 是同类型的代数系统，\(V = V_1 \times V_2\) 是积代数，则：  
(1) 若 \(o_{1i}, o_{2i}\) 可交换（或可结合、幂等），则 \(o_i\) 在 \(V\) 中也可交换（或可结合、幂等）；  
(2) 若 \(o_{1i}\) 对 \(o_{1j}\) 可分配，且 \(o_{2i}\) 对 \(o_{2j}\) 可分配，则 \(o_i\) 对 \(o_j\) 在 \(V\) 中也可分配；  
(3) 若 \(o_{1i}, o_{1j}\) 满足吸收律，且 \(o_{2i}, o_{2j}\) 也满足吸收律，则 \(o_i, o_j\) 在 \(V\) 中也满足吸收律；  
(4) 若 \(e_1, e_2\) 分别是 \(V_1, V_2\) 中关于 \(o_{1i}, o_{2i}\) 的单位元，则 \((e_1, e_2)\) 是 \(V\) 中关于 \(o_i\) 的单位元（零元类似）；  
(5) 若 \(a, b\) 的逆元分别为 \(a^{-1}, b^{-1}\)，则 \((a^{-1}, b^{-1})\) 是 \((a, b)\) 在 \(V\) 中的逆元。

**定理15.7** 设 \(\phi: V_1 \to V_2\) 是同态，则 \(\phi(A)\) 关于 \(V_2\) 中的运算构成代数系统，且是 \(V_2\) 的子代数，称为同态像。

**定理15.8** 设 \(\phi: V_1 \to V_2\) 是满同态，\(o_i, o_j\) 是 \(V_1\) 中的二元运算，则：  
(1) 若 \(o_i\) 可交换（或可结合、幂等），则 \(\phi\) 下的像运算也可交换（或可结合、幂等）；  
(2) 若 \(o_i\) 对 \(o_j\) 可分配，则像运算也可分配；  
(3) 若 \(o_i, o_j\) 满足吸收律，则像运算也满足吸收律；  
(4) 若 \(e\) 是 \(V_1\) 中关于 \(o_i\) 的单位元，则 \(\phi(e)\) 是 \(V_2\) 中的单位元（零元类似）；  
(5) 若 \(x^{-1}\) 是 \(x\) 的逆元，则 \(\phi(x^{-1})\) 是 \(\phi(x)\) 的逆元。

**定理15.9** 设 \(\sim\) 是代数系统 \(V\) 上的同余关系，则商代数 \(V/\sim\) 继承 \(V\) 的运算性质：交换、结合、幂等、分配、吸收等均保持，单位元、零元、逆元等也对应保持。

**定理15.10** 设 \(\phi: V_1 \to V_2\) 是同态，则由 \(\phi\) 导出的等价关系 \(\sim\) 是 \(V_1\) 上的同余关系。

**定理15.11** 设 \(\sim\) 为 \(V\) 上的同余关系，则自然映射 \(g: a \mapsto [a]\) 是从 \(V\) 到 \(V/\sim\) 的满同态。

**定理15.12**（同态基本定理）设 \(\phi: V_1 \to V_2\) 是同态，\(\sim\) 是 \(\phi\) 导出的同余关系，则  
$$
V_1 / \sim \ \cong \ \phi(V_1).
$$

---

## 第十六章 半群与独异点

**定理16.1** 设 \(V = \langle S, \circ \rangle\) 是半群，则 \(\forall x, y \in S\)：  
(1) \(x^n \circ x^m = x^{n+m}\)； (2) \((x^n)^m = x^{nm}\).

**定理16.2** 设 \(\langle S, \circ \rangle\) 是半群，则可以适当添加单位元 \(e\)，将其扩张为独异点。

**定理16.3** 设 \(S\) 为半群，\(V\) 为独异点，则 \(S\) 的任何子半群的交仍是子半群，\(V\) 的任何子独异点的交仍是子独异点。

**定理16.4** 设 \(S\) 为半群，\(B\) 是 \(S\) 的非空子集，令  
$$
B^n = \{b_1 b_2 \dots b_n \mid b_i \in B\}, \quad \langle B \rangle = \bigcup_{n \in \mathbb{Z}^+} B^n,
$$  
则 \(\langle B \rangle\) 是由 \(B\) 生成的子半群。

**定理16.5** 设 \(V = \langle S, \ast \rangle\) 为半群，\(V' = \langle S^S, \circ \rangle\) 是函数合成半群，则 \(V'\) 是半群，且存在 \(V\) 到 \(V'\) 的同态。

**定理16.6**（独异点的表示定理）设 \(V = \langle S, \ast, e \rangle\) 是独异点，则存在 \(T \subseteq S^S\)，使得 \(\langle T, \circ, I_S \rangle\) 同构于 \(V\).

**定理16.7** 设 \(M^* = \langle Q, \Sigma^*, \Gamma^*, \delta^*, \lambda^* \rangle\) 是扩展的有穷自动机，则 \(\forall w_1, w_2 \in \Sigma^*\)：  
(1) \(\delta^*(q, w_1 w_2) = \delta^*(\delta^*(q, w_1), w_2)\)；  
(2) \(\lambda^*(q, w_1 w_2) = \lambda^*(q, w_1) \lambda^*(\delta^*(q, w_1), w_2)\).

**定理16.8** 设 \(M = \langle Q, \Sigma, \delta \rangle\) 是半自动机，\(M^*\) 是扩展，定义 \(f_w(q) = \delta^*(q, w)\)，令 \(S = \{f_w \mid w \in \Sigma^*\}\)，则 \(T_M = \langle S, \circ, f_\lambda \rangle\) 是一个独异点，且是 \(\langle Q^Q, \circ, I_Q \rangle\) 的子独异点。

**定理16.9** 设 \(T = \langle S, \cdot, e \rangle\) 是独异点，则存在半自动机 \(M\)，使得 \(T_M \cong T\).

**定理16.10** 设 \(M_1, M_2\) 是自动机，分别对应独异点 \(T_{M_1}, T_{M_2}\)，若 \(M_1 \leq M_2\)，则 \(T_{M_1}\) 是 \(T_{M_2}\) 的同态像。

**定理16.11** 设 \(M_1\) 是有穷自动机，\(M_2\) 是 \(M_1\) 的商自动机，则 \(M_1 \sim M_2\)（等价）。

---

## 第十七章 群

**定理17.1** 设 \((G, \circ)\) 是具有可结合二元运算的代数系统，若存在 \(e \in G\) 使得 \(\forall a \in G, a \circ e = a\)，且对每个 \(a \in G\) 存在 \(a' \in G\) 使 \(a \circ a' = e\)，则 \(G\) 是一个群。

**定理17.2** 设 \(G\) 为群，则 \(\forall a, b \in G\)：  
(1) \((a^{-1})^{-1} = a\)； (2) \((ab)^{-1} = b^{-1} a^{-1}\)；  
(3) \(a^n a^m = a^{n+m}, \ m, n \in \mathbb{Z}\)； (4) \((a^n)^m = a^{mn}\)；  
(5) 若 \(G\) 为 Abel 群，则 \((ab)^n = a^n b^n\).

**定理17.3** 在群 \(G\) 中，方程 \(ax = b\) 和 \(ya = b\) 有唯一解。

**定理17.4** 设 \(G\) 具有可结合的二元运算，若 \(\forall a, b \in G\) 方程 \(ax = b\) 和 \(ya = b\) 在 \(G\) 中有解，则 \(G\) 是群。

**定理17.5** 群中运算满足消去律。

**定理17.6** 设 \(G\) 是具有二元运算的不含零元的有限代数系统，且运算适合结合律和消去律，则 \(G\) 是群。

**定理17.7** 有限群 \(G = \{a_1, \dots, a_n\}\) 的运算表的每行每列都是 \(G\) 中元素的一个置换。

**定理17.8** 设 \(G\) 是群，\(a \in G\) 且 \(|a| = r\)，则  
(1) \(a^k = e\) 当且仅当 \(r \mid k\)；  
(2) \(|a| = |a^{-1}|\)；  
(3) 若 \(|G| = n\)，则 \(r \leq n\).

**定理17.9**（子群判定定理一）\(H\) 是群 \(G\) 的非空子集，则 \(H\) 是子群当且仅当：  
(1) \(\forall a, b \in H, ab \in H\)； (2) \(\forall a \in H, a^{-1} \in H\).

**定理17.10**（子群判定定理二）\(H\) 是 \(G\) 的非空子集，则 \(H\) 是子群当且仅当 \(\forall a, b \in H, ab^{-1} \in H\).

**定理17.11**（子群判定定理三）\(H\) 是 \(G\) 的有穷非空子集，则 \(H\) 是子群当且仅当 \(\forall a, b \in H, ab \in H\).

**定理17.12** 设 \(G = \langle a \rangle\) 是循环群：  
(1) 若 \(G\) 是无限阶，则生成元为 \(a\) 和 \(a^{-1}\)；  
(2) 若 \(|G| = n\)，则 \(G\) 有 \(\phi(n)\) 个生成元，且 \(a^r\) 是生成元当且仅当 \((n, r) = 1\).

**定理17.13** 设 \(G = \langle a \rangle\) 是循环群：  
(1) \(G\) 的子群也是循环群；  
(2) 若 \(G\) 无限阶，则子群除 \(\{e\}\) 外仍是无限阶；  
(3) 若 \(|G| = n\)，则子群的阶是 \(n\) 的因子，且对每个正因子 \(d\)，\(G\) 中有且仅有一个 \(d\) 阶子群。

**定理17.14** 集合 \(A\) 上的全体一一变换关于变换乘法构成群（对称群）。

**定理17.15** 设 \(\sigma, \tau \in S_n\) 是不相交的置换，则 \(\sigma \tau = \tau \sigma\).

**定理17.16** 任何 \(n\) 元置换都可唯一表成不相交轮换之积。

**定理17.17** 设 \(\sigma = (i_1 i_2 \dots i_k)\) 是 \(k\) 阶轮换（\(k > 1\)），则  
$$
\sigma = (i_1 i_k)(i_1 i_{k-1}) \dots (i_1 i_2).
$$

**定理17.18** 置换 \(\sigma\) 在对换表示中对换个数的奇偶性与排列 \(\pi = i_1 i_2 \dots i_n\) 的逆序数奇偶性一致。

**定理17.19** 设 \(G\) 是 \(n\) 元置换群：  
(1) 若 \(\sigma = (i_1 \dots i_k)\)，则 \(|\sigma| = k\)；  
(2) 若 \(\tau = \tau_1 \dots \tau_l\) 是不相交轮换分解，\(\tau_i\) 为 \(k_i\) 阶，则 \(|\tau| = [k_1, \dots, k_l]\)（最小公倍数）。

**定理17.20–17.26** 涉及陪集、Lagrange 定理及其推论：  
**定理17.26**（Lagrange 定理）设 \(G\) 是有限群，\(H\) 是子群，则 \(|G| = [G:H] |H|\).  
**推论1** \(G\) 中每个元素的阶是 \(|G|\) 的因子，且 \(\forall a \in G, a^{|G|} = e\).  
**推论2** 阶为素数的群是循环群。

**定理17.27** 群 \(G\) 上的共轭关系是等价关系。

**定理17.28** 设 \(C\) 是群 \(G\) 的中心，则 \(a \in C \Leftrightarrow \bar{a} = \{a\}\).

**定理17.29** 设 \(a \in G\)，则正规化子 \(N(a) = \{g \in G \mid gag^{-1} = a\}\) 是 \(G\) 的子群。

**定理17.30** 设 \(G\) 是有限群，则 \(\forall a \in G, |a| = [G : N(a)]\).

**定理17.31**（群的分类方程）设 \(G\) 有限，\(C\) 是中心，设 \(a_1, \dots, a_k\) 为至少含两个元素的共轭类的代表元，则  
$$
|G| = |C| + \sum_{i=1}^k [G : N(a_i)].
$$

**定理17.32** 设 \(N\) 是群 \(G\) 的子群，则下列等价：  
(1) \(N \lhd G\)（正规子群）；  
(2) \(\forall g \in G, gNg^{-1} = N\)；  
(3) \(\forall g \in G, \forall n \in N, gng^{-1} \in N\).

**定理17.33** 设 \(\phi: G_1 \to G_2\) 是同态，则 \(\phi\) 是单同态当且仅当 \(\ker \phi = \{e_1\}\).

**定理17.34** 设 \(G_1 = \langle a \rangle\) 是循环群，\(\phi: G_1 \to G_2\) 是满同态，则 \(G_2\) 也是循环群。

**定理17.35** 设 \(\phi: G_1 \to G_2\) 是同态：  
(1) 若 \(H\) 是 \(G_1\) 的子群，则 \(\phi(H)\) 是 \(G_2\) 的子群；  
(2) 若 \(H \lhd G_1\) 且 \(\phi\) 满，则 \(\phi(H) \lhd G_2\).

**定理17.36** 设 \(\phi: G_1 \to G_2\) 是同态：  
(1) \(\ker \phi \lhd G_1\)；  
(2) \(\phi(a) = \phi(b) \Leftrightarrow a \ker \phi = b \ker \phi\).

**定理17.37**（群同态基本定理）设 \(H \lhd G\)，则 \(G/H\) 是 \(G\) 的同态像；若 \(G'\) 是 \(G\) 的同态像，则  
$$
G / \ker \phi \cong G'.
$$

**定理17.38** 群 \(G\) 的自同态集 \(\mathrm{End}\,G\) 关于映射合成构成独异点，自同构集 \(\mathrm{Aut}\,G\) 构成群。

**定理17.39** 内自同构群 \(\mathrm{Inn}\,G \cong G/Z(G)\)（其中 \(Z(G)\) 是中心）。

**定理17.40** 设 \(G\) 是群，\(K, L\) 是子群，则 \(G = K \times L\)（直积）当且仅当：  
(1) \(K \lhd G, L \lhd G\)； (2) \(K \cap L = \{e\}\)； (3) \(G = KL\).

**定理17.41** 设 \(G_1, \dots, G_n\) 是 \(G\) 的子群，则 \(G = G_1 \times \dots \times G_n\) 当且仅当：  
(1) \(G_i \lhd G\)；  
(2) \(G_i \cap (G_1 \dots G_{i-1} G_{i+1} \dots G_n) = \{e\}\)；  
(3) \(G = G_1 \dots G_n\).

**定理17.42** 用 \(r\)-电路计算一个 \(m\) 元函数至少需要 \(\lceil \log_r m \rceil\) 个时间单位。

**定理17.43** 设 \(\langle \mathbb{Z}_n, \otimes \rangle\) 是群，若存在 \(a \in \mathbb{Z}_n, a \neq 0\)，且 \(a\) 属于 \(\mathbb{Z}_n\) 的每个非平凡子群，则对任意模 \(n\) 加法器 \(T\)，存在某个输入使得 \(T\) 至少依赖于输入的 \(2\lceil \log_2 n \rceil\) 位。

**定理17.44**（电路下界定理）设 \(n = p^i\)（\(p\) 为素数），则用 \(r\)-电路计算 \(\mathbb{Z}_n\) 中加法至少需要 \(\lceil \log_r (2\lceil \log_2 n \rceil) \rceil\) 个时间单位；若 \(n = p_1^{i_1} \dots p_k^{i_k}\)，则至少需要 \(\lceil \log_r (2\lceil \log_2 t(n) \rceil) \rceil\) 时间单位，其中 \(t(n) = \max\{p_1^{i_1}, \dots, p_k^{i_k}\}\).

---
