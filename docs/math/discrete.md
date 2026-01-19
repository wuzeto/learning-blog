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

---

（因内容较长，后续章节的定理将按章节继续整理。如需全部内容，请继续展开。）