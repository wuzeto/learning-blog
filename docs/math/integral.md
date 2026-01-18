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



# 积分



## 积分学定理



### 积分方法



**第一类换元法（凑微分）**

若 $\int f(u) \, du = F(u) + C$，且 $u = \varphi(x)$ 可导，则 $\int f[\varphi(x)] \varphi'(x) \, dx = F[\varphi(x)] + C$。



**第二类换元法**

设 $x = \psi(t)$ 单调可导且 $\psi'(t) \ne 0$，若 $\int f[\psi(t)] \psi'(t) \, dt = G(t) + C$，则 $\int f(x) \, dx = G[\psi^{-1}(x)] + C$。



**分部积分法**

若 $u(x), v(x)$ 有连续导数，则

$\int u(x) v'(x) \, dx = u(x) v(x) - \int u'(x) v(x) \, dx$

或 $\int u \, dv = uv - \int v \, du$。



### Euler 变换与三角代换



**Euler 变换**

对于积分 $\int R(x, \sqrt{ax^2 + bx + c}) \, dx$：

* 第一类：$a > 0$ 时，令 $\sqrt{ax^2 + bx + c} = t - \sqrt{a}x$

* 第二类：$c > 0$ 时，令 $\sqrt{ax^2 + bx + c} = tx + \sqrt{c}$

* 第三类：$b^2 - 4ac > 0$ 时，令 $\sqrt{ax^2 + bx + c} = t(x - \alpha)$



**三角代换**

* $\sqrt{a^2 - x^2}$：令 $x = a \sin t$ 或 $x = a \cos t$

* $\sqrt{a^2 + x^2}$：令 $x = a \tan t$ 或 $x = a \sinh t$

* $\sqrt{x^2 - a^2}$：令 $x = a \sec t$ 或 $x = a \cosh t$



**无理根式代换**

* $\int R\left( x, \sqrt[n]{\frac{ax+b}{cx+d}}\right) dx$：令 $t = \sqrt[n]{\frac{ax+b}{cx+d}}$

* $\int R( x, \sqrt{ax+b}, \sqrt{cx+d}) dx$：令 $t = \sqrt{ax+b}$ 或 $t = \sqrt{cx+d}$



### 积分理论基础



**Riemann 积分**

函数 $f(x)$ 在 $[a, b]$ 上的 Riemann 积分为：

$\int_a^b f(x) \, dx = \lim_{\|P\| \to 0} \sum_{i=1}^n f(\xi_i) \Delta x_i$

其中 $P: a = x_0 < x_1 < \cdots < x_n = b$ 是分割，$\|P\| = \max \Delta x_i$。



**Darboux 定理**

有界函数 $f(x)$ 在 $[a, b]$ 上 Riemann 可积的充要条件是：

$\lim_{\|P\| \to 0} (S(P) - s(P)) = 0$

其中 $S(P)$ 和 $s(P)$ 分别是 Darboux 大和与小和。



**微积分基本定理**

若 $f(x)$ 在 $[a, b]$ 上连续，则 $\frac{d}{dx} \int_a^x f(t) \, dt = f(x)$。



**Newton-Leibniz 公式**

若 $F(x)$ 是 $f(x)$ 在 $[a, b]$ 上的原函数，则 $\int_a^b f(x) \, dx = F(b) - F(a)$。



### 积分中值定理



**积分第一中值定理**

若 $f(x)$ 在 $[a, b]$ 上连续，则存在 $\xi \in [a, b]$ 使得 $\int_a^b f(x) \, dx = f(\xi)(b - a)$。



**积分第二中值定理**

若 $f(x)$ 在 $[a, b]$ 上可积，$g(x)$ 在 $[a, b]$ 上单调，则存在 $\xi \in [a, b]$ 使得

$\int_a^b f(x) g(x) \, dx = g(a) \int_a^\xi f(x) \, dx + g(b) \int_\xi^b f(x) \, dx$。



**积分第三中值定理**

若 $f(x), g(x)$ 在 $[a, b]$ 上连续，$g(x)$ 不变号，则存在 $\xi \in [a, b]$ 使得

$\int_a^b f(x) g(x) \, dx = f(\xi) \int_a^b g(x) \, dx$。



**Bonnet 定理**

若 $f(x)$ 在 $[a, b]$ 上可积，$g(x)$ 在 $[a, b]$ 上非负递减，则存在 $\xi \in [a, b]$ 使得

$\int_a^b f(x) g(x) \, dx = g(a) \int_a^\xi f(x) \, dx$。



**Lebesgue 定理**

有界函数 $f(x)$ 在 $[a, b]$ 上 Riemann 可积的充要条件是 $f(x)$ 在 $[a, b]$ 上几乎处处连续。



## 广义积分



**广义积分 Cauchy 判别法**

广义积分 $\int_a^{+\infty} f(x) \, dx$ 收敛的充要条件是：

$\forall \varepsilon > 0, \exists A > a, \forall A_1, A_2 > A: \left| \int_{A_1}^{A_2} f(x) \, dx \right| < \varepsilon$。



**Dirichlet 判别法**

若：

1. $F(A) = \int_a^A f(x) \, dx$ 在 $[a, +\infty)$ 上有界

2. $g(x)$ 在 $[a, +\infty)$ 上单调且 $\lim_{x \to +\infty} g(x) = 0$

则 $\int_a^{+\infty} f(x) g(x) \, dx$ 收敛。



**Abel 判别法**

若：

1. $\int_a^{+\infty} f(x) \, dx$ 收敛

2. $g(x)$ 在 $[a, +\infty)$ 上单调有界

则 $\int_a^{+\infty} f(x) g(x) \, dx$ 收敛。



## Euler 积分



**Gamma 函数**

$\Gamma(s) = \int_0^{+\infty} x^{s-1} e^{-x} \, dx, \quad s > 0$

性质：

$\Gamma(s+1) = s \Gamma(s)$

$\Gamma(n+1) = n! \quad (n \in \mathbb{N})$

$\Gamma\left(\frac{1}{2}\right) = \sqrt{\pi}$



**Beta 函数**

$B(p, q) = \int_0^1 x^{p-1} (1-x)^{q-1} \, dx, \quad p > 0, q > 0$

性质：

$B(p, q) = B(q, p)$

$B(p, q) = \frac{\Gamma(p) \Gamma(q)}{\Gamma(p+q)}$

$B(p, q) = 2 \int_0^{\pi/2} \sin^{2p-1} \theta \cos^{2q-1} \theta \, d\theta$



**Gamma 函数与 Beta 函数关系**

$B(p, q) = \frac{\Gamma(p) \Gamma(q)}{\Gamma(p+q)}$



**余元公式**

$\Gamma(s) \Gamma(1-s) = \frac{\pi}{\sin \pi s}, \quad 0 < s < 1$

特别地：$\Gamma\left(\frac{1}{2}\right) = \sqrt{\pi}$



**Legendre 倍元公式**

$\Gamma(s) \Gamma\left(s + \frac{1}{2}\right) = 2^{1-2s} \sqrt{\pi} \, \Gamma(2s)$





* **Liouville 公式**：$W(x) = W(x_0)e^{-\int_{x_0}^x P(t)dt}$

* **Wronski 行列式**：$W(x) = y_1y_2' - y_2y_1'$

* **矩阵指数**：$e^{\mathbf{A}t} = \sum_{k=0}^{\infty} \frac{\mathbf{A}^k t^k}{k!}$