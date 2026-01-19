<script type="text/javascript" async

  src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-MML-AM_CHTML">

</script>





<script type="text/x-mathjax-config">

  MathJax.Hub.Config({

    tex2jax: {

      inlineMath: [['$','$'], ['\\(','\\)']],

      displayMath: [['$$','$$'], ['\\[','\\]']],

      processEscapes: true,

      processEnvironments: true

    }

  });

</script>





# 数列与级数理论概要



## 实数系完备性定理



### 六大等价定理



**定理 1（单调有界定理）**



> 单调有界数列必收敛。



**定理 2（闭区间套定理，Cantor）**



> 设 $\{[a_n, b_n]\}$ 是一列闭区间，满足：

>

> 1. $[a_{n+1}, b_{n+1}] \subset [a_n, b_n], \quad n = 1, 2, \dots$

> 2. $\lim_{n \to \infty} (b_n - a_n) = 0$

>

> 则存在唯一的实数 $\xi$ 属于所有闭区间 $[a_n, b_n]$，且

$$
 \lim_{n \to \infty} a_n = \lim_{n \to \infty} b_n = \xi
$$



**定理 3（聚点定理，Weierstrass）**



> 有界无限点集必有聚点。



**定理 4（柯西收敛准则，Cauchy）**



> 数列 $\{x_n\}$ 收敛的充要条件是：

$$
 \forall \varepsilon > 0, \exists N \in \mathbb{N}, \forall m, n > N: |x_n - x_m| < \varepsilon
$$



**定理 5（确界原理）**



> 非空有上界的数集必有上确界，非空有下界的数集必有下确界。



**定理 6（有限覆盖定理，Heine-Borel）**



> 闭区间 $[a, b]$ 的任意开覆盖必有有限子覆盖。



---



## 数列极限定理



**定理 7（Stolz 定理）**



> 设 $\{y_n\}$ 严格单调趋于 $+\infty$，且

$$
 \lim_{n \to \infty} \frac{x_n - x_{n-1}}{y_n - y_{n-1}} = L \quad (\text{有限或} \pm\infty)
$$

 则

$$
 \lim_{n \to \infty} \frac{x_n}{y_n} = L
$$



**定理 8（数列夹逼定理）**



> 若存在 $N_0$，当 $n > N_0$ 时，

$$ 
a_n \leq b_n \leq c_n 
$$

 且 $\lim_{n \to \infty} a_n = \lim_{n \to \infty} c_n = L$，则

$$
\lim_{n \to \infty} b_n = L
$$



---



## 正项级数判别法



### 比较判别法



**方法 1（比较判别法）**



> 设 $\sum a_n$ 和 $\sum b_n$ 是正项级数，且存在 $N$ 使得当 $n > N$ 时 $a_n \leq b_n$：

>

> - 若 $\sum b_n$ 收敛，则 $\sum a_n$ 收敛

> - 若 $\sum a_n$ 发散，则 $\sum b_n$ 发散



**方法 2（极限比较判别法）**



> 设 $\sum a_n$ 和 $\sum b_n$ 是正项级数，且 $\lim_{n \to \infty} \frac{a_n}{b_n} = L$：

>

> - 若 $0 < L < \infty$，则 $\sum a_n$ 与 $\sum b_n$ 同敛散

> - 若 $L = 0$ 且 $\sum b_n$ 收敛，则 $\sum a_n$ 收敛

> - 若 $L = \infty$ 且 $\sum b_n$ 发散，则 $\sum a_n$ 发散



### Cauchy 积分判别法



**方法 3（Cauchy 积分判别法）**



> 设 $f(x)$ 在 $[1, +\infty)$ 上非负单调递减，则正项级数 $\sum f(n)$ 与反常积分 $\int_1^\infty f(x)dx$ 同敛散。



<div style="background-color: #f0f8ff; padding: 15px; border-left: 5px solid #9370db; margin: 10px 0;">

<strong>示例：</strong> 判断 $\sum_{n=1}^\infty \frac{1}{n^p}$ 的敛散性。







<strong>解：</strong> 考虑积分 $\int_1^\infty \frac{dx}{x^p}$：

$$
\int_1^\infty \frac{dx}{x^p} = \begin{cases}
    \text{收敛}, & p > 1 \\
    \text{发散}, & p \leq 1
\end{cases}
$$

故 $p$-级数当 $p > 1$ 时收敛，$p \leq 1$ 时发散。

</div>



### Cauchy 根值判别法



**方法 4（Cauchy 根值判别法）**



> 设 $\sum a_n$ 是正项级数，记 $\rho = \limsup_{n \to \infty} \sqrt[n]{a_n}$：

>

> - 若 $\rho < 1$，则级数收敛

> - 若 $\rho > 1$，则级数发散

> - 若 $\rho = 1$，判别法失效



### D'Alembert 比值判别法



**方法 5（D'Alembert 比值判别法）**



> 设 $\sum a_n$ 是正项级数，记 $\rho = \lim_{n \to \infty} \frac{a_{n+1}}{a_n}$：

>

> - 若 $\rho < 1$，则级数收敛

> - 若 $\rho > 1$，则级数发散

> - 若 $\rho = 1$，判别法失效



### Raabe 判别法



**方法 6（Raabe 判别法）**



> 当 D'Alembert 判别法失效时（即 $\lim \frac{a_{n+1}}{a_n} = 1$），考虑：

$$
 \lim_{n \to \infty} n\left(1 - \frac{a_{n+1}}{a_n}\right) = R
$$



> - 若 $R > 1$，则级数收敛

> - 若 $R < 1$，则级数发散

> - 若 $R = 1$，判别法失效



<div style="background-color: #f0f8ff; padding: 15px; border-left: 5px solid #9370db; margin: 10px 0;">

<strong>示例：</strong> 判断 $\sum \frac{1 \cdot 3 \cdots (2n-1)}{2 \cdot 4 \cdots (2n)} \cdot \frac{1}{2n+1}$ 的敛散性。







<strong>解：</strong> 比值 $\frac{a_{n+1}}{a_n} = \frac{2n+1}{2n+2} \cdot \frac{1}{2n+3} \to 1$，用 Raabe 判别法：

$$
n\left(1 - \frac{a_{n+1}}{a_n}\right) = n\left(1 - \frac{2n+1}{(2n+2)(2n+3)}\right) \to \frac{3}{2} > 1
$$

故级数收敛。

</div>



---



## 一般项级数判别法



### Leibniz 判别法



**方法 7（Leibniz 判别法）**



> 设交错级数 $\sum (-1)^{n-1} a_n$ 满足：

>

> 1. $a_n \geq a_{n+1} > 0$

> 2. $\lim_{n \to \infty} a_n = 0$

>

> 则级数收敛，且余项 $|R_n| \leq a_{n+1}$。



### Dirichlet 判别法



**方法 8（Dirichlet 判别法）**



> 设 $\sum a_n b_n$，若：

>

> 1. 部分和 $A_n = \sum_{k=1}^n a_k$ 有界

> 2. $\{b_n\}$ 单调趋于 0

>

> 则级数 $\sum a_n b_n$ 收敛。



### Abel 判别法



**方法 9（Abel 判别法）**



> 设 $\sum a_n b_n$，若：

>

> 1. $\sum a_n$ 收敛

> 2. $\{b_n\}$ 单调有界

>

> 则级数 $\sum a_n b_n$ 收敛。



---



## 绝对收敛与条件收敛



### 绝对收敛级数性质



**定理 9（绝对收敛的更序定理）**



> 若级数 $\sum a_n$ 绝对收敛，则任意重排后的级数 $\sum a_{\sigma(n)}$ 仍收敛于同一和。



**定理 10（条件收敛的Riemann定理）**



> 若级数 $\sum a_n$ 条件收敛，则对任意实数 $S$（包括 $\pm\infty$），存在重排 $\sigma$ 使得 $\sum a_{\sigma(n)} = S$。



**定理 11（Cauchy乘积定理）**



> 若 $\sum a_n$ 和 $\sum b_n$ 绝对收敛，其和分别为 $A$ 和 $B$，则它们的 Cauchy 乘积

$$
 \sum_{n=0}^\infty c_n, \quad c_n = \sum_{k=0}^n a_k b_{n-k}
$$

 绝对收敛，且和为 $AB$。



### Mertens 定理



**定理 12（Mertens 定理）**



> 若 $\sum a_n$ 绝对收敛于 $A$，$\sum b_n$ 收敛于 $B$，则它们的 Cauchy 乘积 $\sum c_n$ 收敛于 $AB$。



---



## 无穷乘积



### 无穷乘积收敛性



**定义 1（无穷乘积）**



> 无穷乘积 $\prod_{n=1}^\infty (1 + a_n)$ 称为收敛，如果部分乘积

$$
 P_n = \prod_{k=1}^n (1 + a_k)
$$

 存在有限非零极限 $P \neq 0$。



**方法 10（Cauchy 准则）**



> 无穷乘积 $\prod (1 + a_n)$ 收敛的充要条件是：对任意 $\varepsilon > 0$，存在 $N$ 使得对任意 $m > n > N$，

$$
 \left| \prod_{k=n+1}^m (1 + a_k) - 1 \right| < \varepsilon
$$



**定理 13（无穷乘积与级数的关系）**



> 若 $a_n \geq 0$，则 $\prod (1 + a_n)$ 收敛当且仅当 $\sum a_n$ 收敛。

>

> 一般情况下，$\prod (1 + a_n)$ 收敛的必要条件是 $\lim_{n \to \infty} a_n = 0$，且 $\sum a_n$ 收敛时 $\prod (1 + a_n)$ 不一定收敛。



---



## 函数项级数



### 一致收敛判别法



**方法 11（Cauchy一致收敛准则）**



> 函数项级数 $\sum u_n(x)$ 在 $D$ 上一致收敛的充要条件是：

$$
 \forall \varepsilon > 0, \exists N, \forall m > n > N, \forall x \in D: \left| \sum_{k=n+1}^m u_k(x) \right| < \varepsilon
$$



**方法 12（Weierstrass M-判别法）**



> 若存在收敛正项级数 $\sum M_n$ 使得 $|u_n(x)| \leq M_n$ 对所有 $x \in D$ 成立，则 $\sum u_n(x)$ 在 $D$ 上一致收敛。



**方法 13（Dirichlet一致收敛判别法）**



> 若在 $D$ 上：

>

> 1. $\sum_{k=1}^n u_k(x)$ 一致有界

> 2. $\{v_n(x)\}$ 对 $x$ 一致单调趋于 0

>

> 则 $\sum u_n(x) v_n(x)$ 在 $D$ 上一致收敛。



**方法 14（Abel一致收敛判别法）**



> 若在 $D$ 上：

>

> 1. $\sum u_n(x)$ 一致收敛

> 2. $\{v_n(x)\}$ 一致有界且对每个 $x$ 单调

>

> 则 $\sum u_n(x) v_n(x)$ 在 $D$ 上一致收敛。



### 和函数的分析性质



**定理 14（连续性定理）**



> 若 $u_n(x)$ 在 $[a,b]$ 上连续，且 $\sum u_n(x)$ 在 $[a,b]$ 上一致收敛于 $S(x)$，则 $S(x)$ 在 $[a,b]$ 上连续。



**定理 15（逐项积分定理）**



> 若 $u_n(x)$ 在 $[a,b]$ 上连续，且 $\sum u_n(x)$ 在 $[a,b]$ 上一致收敛于 $S(x)$，则

$$
 \int_a^b S(x)dx = \sum_{n=1}^\infty \int_a^b u_n(x)dx
$$



**定理 16（逐项求导定理）**



> 若 $u_n(x)$ 在 $[a,b]$ 上有连续导数，$\sum u_n(x)$ 在 $[a,b]$ 上收敛，且 $\sum u_n'(x)$ 在 $[a,b]$ 上一致收敛，则

$$
 \frac{d}{dx} \left( \sum_{n=1}^\infty u_n(x) \right) = \sum_{n=1}^\infty u_n'(x)
$$



---



## 幂级数



### 收敛性质



**定理 17（Abel第一定理）**



> 若幂级数 $\sum a_n x^n$ 在 $x = x_0$ 处收敛，则它在 $|x| < |x_0|$ 内绝对收敛；若在 $x = x_0$ 处发散，则它在 $|x| > |x_0|$ 处发散。



**定理 18（Abel连续性定理）**



> 若幂级数 $\sum a_n x^n$ 的收敛半径为 $R$，且在收敛区间的端点 $x = R$（或 $x = -R$）处收敛，则和函数 $S(x)$ 在 $x = R$ 处左连续（在 $x = -R$ 处右连续）。



**定理 19（幂级数的分析运算）**



> 设 $\sum a_n x^n$ 和 $\sum b_n x^n$ 的收敛半径分别为 $R_1$ 和 $R_2$，则在 $\min(R_1, R_2)$ 内：

>

> **加法：** $\sum a_n x^n + \sum b_n x^n = \sum (a_n + b_n) x^n$

>

> **乘法：** $\left( \sum a_n x^n \right) \left( \sum b_n x^n \right) = \sum c_n x^n, \quad c_n = \sum_{k=0}^n a_k b_{n-k}$

>

> **逐项求导：** $\frac{d}{dx} \left( \sum a_n x^n \right) = \sum n a_n x^{n-1}$

>

> **逐项积分：** $\int_0^x \left( \sum a_n t^n \right) dt = \sum \frac{a_n}{n+1} x^{n+1}$



---



## Fourier 级数



### 点态收敛定理



**定理 20（Dirichlet收敛定理）**



> 设 $f(x)$ 是以 $2\pi$ 为周期的分段光滑函数，则其 Fourier 级数在每点 $x$ 处收敛于

$$
 \frac{f(x+0) + f(x-0)}{2}
$$

 特别地，在连续点处收敛于 $f(x)$。



**定义 2（Fourier系数）**



$$
 a_n = \frac{1}{\pi} \int_{-\pi}^{\pi} f(x) \cos nx \, dx, \quad 
> b_n = \frac{1}{\pi} \int_{-\pi}^{\pi} f(x) \sin nx \, dx
$$



> Fourier 级数为：

$$
 \frac{a_0}{2} + \sum_{n=1}^\infty (a_n \cos nx + b_n \sin nx)
$$



### Parseval 等式



**定理 21（Parseval等式）**



> 若 $f(x)$ 平方可积，则

$$
 \frac{1}{\pi} \int_{-\pi}^{\pi} [f(x)]^2 dx = \frac{a_0^2}{2} + \sum_{n=1}^\infty (a_n^2 + b_n^2)
$$



**定理 22（广义Parseval等式）**



> 对任意两个平方可积函数 $f(x)$ 和 $g(x)$，有

$$
 \frac{1}{\pi} \int_{-\pi}^{\pi} f(x)g(x)dx = \frac{a_0\alpha_0}{2} + \sum_{n=1}^\infty (a_n\alpha_n + b_n\beta_n)
$$

 其中 $a_n, b_n$ 是 $f(x)$ 的 Fourier 系数，$\alpha_n, \beta_n$ 是 $g(x)$ 的 Fourier 系数。



---



<div style="background-color: #add8e6; padding: 15px; border-left: 5px solid #0000ff; margin: 10px 0;">

<strong>注记段落：</strong>

<br>这是第一段蓝色文字。这段文字会显示为蓝色。

<br>

<br>这是第二段蓝色文字。虽然换段了，但仍然保持蓝色。

<br>

<br>这是第三段蓝色文字。

</div>







---



## 总结



### 判别法选择策略



- **正项级数**：先检验 $\lim a_n = 0$，再用比较法、比值法、根值法

- **交错级数**：Leibniz 判别法

- **一般项级数**：Dirichlet 或 Abel 判别法

- **函数项级数**：Weierstrass M-判别法判断一致收敛

- **幂级数**：利用收敛半径和 Abel 定理

- **Fourier级数**：Dirichlet 条件判断点态收敛



### 重要极限与不等式



**Cauchy-Hadamard公式：**

$$
R = \frac{1}{\limsup_{n \to \infty} \sqrt[n]{|a_n|}}
$$



**比值判别法：**

$$
R = \lim_{n \to \infty} \left| \frac{a_n}{a_{n+1}} \right| \quad (\text{如果极限存在})
$$



**余项估计：**

$$
|R_n| \leq \frac{M}{(n+1)!} |x-x_0|^{n+1} \quad (\text{Taylor级数})
$$

