# 微积分

## 函数极限定理

**函数夹逼定理**
若在点 $x_0$ 的某去心邻域内，$f(x) \le g(x) \le h(x)$ 且 $\lim_{x \to x_0} f(x) = \lim_{x \to x_0} h(x) = L$，则 $\lim_{x \to x_0} g(x) = L$。

**Heine 定理**
$\lim_{x \to x_0} f(x) = L \iff \forall \{x_n\}, x_n \to x_0, x_n \ne x_0: \lim_{n \to \infty} f(x_n) = L$。

**函数柯西准则**
$\lim_{x \to x_0} f(x)$ 存在的充要条件是：
$\forall \varepsilon > 0, \exists \delta > 0, \forall x', x'' \in \mathring{U}(x_0, \delta): |f(x') - f(x'')| < \varepsilon$。

## 微分学定理

**Leibniz 求导法则**
若 $u(x), v(x)$ 在 $x$ 处 $n$ 阶可导，则 $(u \cdot v)^{(n)} = \sum_{k=0}^n \binom{n}{k} u^{(k)} v^{(n-k)}$。

**Rolle 定理**
若 $f(x)$ 在 $[a, b]$ 上连续，在 $(a, b)$ 内可导，且 $f(a) = f(b)$，则存在 $\xi \in (a, b)$ 使得 $f'(\xi) = 0$。

**Lagrange 中值定理**
若 $f(x)$ 在 $[a, b]$ 上连续，在 $(a, b)$ 内可导，则存在 $\xi \in (a, b)$ 使得 $f'(\xi) = \frac{f(b) - f(a)}{b - a}$。

**Cauchy 中值定理**
若 $f(x), g(x)$ 在 $[a, b]$ 上连续，在 $(a, b)$ 内可导，且 $g'(x) \ne 0$，则存在 $\xi \in (a, b)$ 使得 $\frac{f(b) - f(a)}{g(b) - g(a)} = \frac{f'(\xi)}{g'(\xi)}$。

**L'Hospital 法则**
若在 $x_0$ 的某去心邻域内：
1. $\lim_{x \to x_0} f(x) = \lim_{x \to x_0} g(x) = 0$（或 $\infty$）
2. $f'(x), g'(x)$ 存在且 $g'(x) \ne 0$
3. $\lim_{x \to x_0} \frac{f'(x)}{g'(x)} = L$（有限或 $\pm\infty$）
则 $\lim_{x \to x_0} \frac{f(x)}{g(x)} = L$。

**Taylor 中值定理**
若 $f(x)$ 在 $x_0$ 处有 $n$ 阶导数，则
$f(x) = f(x_0) + f'(x_0)(x - x_0) + \frac{f''(x_0)}{2!}(x - x_0)^2 + \cdots + \frac{f^{(n)}(x_0)}{n!}(x - x_0)^n + R_n(x)$
其中余项 $R_n(x)$ 可表示为：
* Peano 余项：$R_n(x) = o((x - x_0)^n)$
* Lagrange 余项：$R_n(x) = \frac{f^{(n+1)}(\xi)}{(n+1)!}(x - x_0)^{n+1}, \quad \xi \in (x_0, x)$

## 重要常数与极限

**Euler 常数**
$\gamma = \lim_{n \to \infty} \left( \sum_{k=1}^n \frac{1}{k} - \ln n \right) \approx 0.5772156649\dots$

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

## 一阶微分方程

### 可分离变量微分方程

**可分离变量方程**
形如：$\frac{dy}{dx} = f(x)g(y)$ 的方程称为可分离变量微分方程。

**分离变量法**
$\frac{dy}{g(y)} = f(x)dx \quad (g(y) \ne 0)$
两边积分得：$\int \frac{dy}{g(y)} = \int f(x)dx + C$

> **示例：**
> 求解 $\frac{dy}{dx} = xy$
> 解：分离变量 $\frac{dy}{y} = xdx$，积分得：
> $\ln|y| = \frac{x^2}{2} + C_1 \Rightarrow y = Ce^{\frac{x^2}{2}}$

### 齐次微分方程

**齐次方程**
形如：$\frac{dy}{dx} = f\left(\frac{y}{x}\right)$ 的方程称为齐次微分方程。

**变量代换法**
令 $u = \frac{y}{x}$，则 $y = ux$，$\frac{dy}{dx} = u + x\frac{du}{dx}$，代入得：
$u + x\frac{du}{dx} = f(u) \Rightarrow \frac{du}{dx} = \frac{f(u) - u}{x}$
化为可分离变量方程。

> **示例：**
> 求解 $\frac{dy}{dx} = \frac{y}{x} + \tan\left(\frac{y}{x}\right)$
> 解：令 $u = \frac{y}{x}$，则：
> $u + x\frac{du}{dx} = u + \tan u \Rightarrow \frac{du}{\tan u} = \frac{dx}{x}$
> 积分得：$\ln|\sin u| = \ln|x| + C \Rightarrow \sin\left(\frac{y}{x}\right) = Cx$

### 一阶线性微分方程

**一阶线性方程**
形如：$\frac{dy}{dx} + P(x)y = Q(x)$ 的方程称为一阶线性微分方程。

**常数变易法**
通解公式：
$y = e^{-\int P(x)dx} \left[ \int Q(x)e^{\int P(x)dx}dx + C \right]$

**通解结构**
齐次方程 $\frac{dy}{dx} + P(x)y = 0$ 的通解为：$y = Ce^{-\int P(x)dx}$
非齐次方程的通解为齐次通解加特解。

> **示例：**
> 求解 $\frac{dy}{dx} + 2xy = xe^{-x^2}$
> 解：$P(x) = 2x$，积分因子为：$e^{\int 2xdx} = e^{x^2}$
> 通解为：$y = e^{-x^2} \left[ \int xe^{-x^2} \cdot e^{x^2} dx + C \right] = e^{-x^2} \left( \frac{x^2}{2} + C \right)$

### Bernoulli 方程

**Bernoulli 方程**
形如：$\frac{dy}{dx} + P(x)y = Q(x)y^n \quad (n \ne 0, 1)$ 的方程称为 Bernoulli 方程。

**变量代换法**
令 $z = y^{1-n}$，则：$\frac{dz}{dx} = (1-n)y^{-n}\frac{dy}{dx}$
代入原方程得：$\frac{dz}{dx} + (1-n)P(x)z = (1-n)Q(x)$
化为一阶线性方程。

> **示例：**
> 求解 $\frac{dy}{dx} + \frac{y}{x} = x^2y^3$
> 解：$n=3$，令 $z = y^{-2}$，则：$\frac{dz}{dx} - \frac{2}{x}z = -2x^2$
> 解得：$z = x^2(C - x^2) \Rightarrow y = \pm \frac{1}{x\sqrt{C - x^2}}$

## 高阶微分方程

### 可降阶的高阶方程

**类型一：$y^{(n)} = f(x)$**
连续积分 $n$ 次：
$y = \underbrace{\int \cdots \int}_{n\text{次}} f(x) dx \cdots dx + C_1x^{n-1} + \cdots + C_{n-1}x + C_n$

**类型二：$y'' = f(x, y')$**
令 $p = y'$，则 $y'' = \frac{dp}{dx}$，方程化为：$\frac{dp}{dx} = f(x, p)$

**类型三：$y'' = f(y, y')$**
令 $p = y'$，则 $y'' = p\frac{dp}{dy}$，方程化为：$p\frac{dp}{dy} = f(y, p)$

## 二阶线性微分方程

### 基本理论

**二阶线性方程**
形如：$y'' + P(x)y' + Q(x)y = f(x)$ 的方程称为二阶线性微分方程。

**解的存在唯一性**
若 $P(x), Q(x), f(x)$ 在区间 $I$ 上连续，则对于任意 $x_0 \in I$ 和任意初始值 $y_0, y_0'$，方程存在唯一解。

**叠加原理**
若 $y_1, y_2$ 是齐次方程的解，则 $C_1y_1 + C_2y_2$ 也是齐次方程的解。

### Wronski 行列式与 Liouville 公式

**Wronski 行列式**
对于函数组 $y_1(x), y_2(x)$，定义 Wronski 行列式为：
$W(x) = W[y_1, y_2](x) = \begin{vmatrix} y_1(x) & y_2(x) \\ y_1'(x) & y_2'(x) \end{vmatrix} = y_1(x)y_2'(x) - y_2(x)y_1'(x)$

**线性相关判别**
若 $y_1, y_2$ 在区间 $I$ 上线性相关，则 $W(x) \equiv 0$；若 $W(x) \not\equiv 0$，则线性无关。

**Liouville 公式**
对于齐次方程 $y'' + P(x)y' + Q(x)y = 0$，若 $y_1, y_2$ 是解，则：
$W(x) = W(x_0)e^{-\int_{x_0}^x P(t)dt}$
特别地，若 $W(x_0) \ne 0$，则 $W(x) \ne 0$ 对所有 $x$ 成立。

### 常系数齐次方程

**特征方程法**
对于方程 $y'' + py' + qy = 0$，特征方程为：$r^2 + pr + q = 0$
* 两个不等实根 $r_1, r_2$：$y = C_1e^{r_1x} + C_2e^{r_2x}$
* 重根 $r_1 = r_2$：$y = (C_1 + C_2x)e^{r_1x}$
* 共轭复根 $r = \alpha \pm i\beta$：$y = e^{\alpha x}(C_1\cos\beta x + C_2\sin\beta x)$

### 常系数非齐次方程

**待定系数法**
对于 $y'' + py' + qy = f(x)$：
* $f(x) = P_n(x)e^{\alpha x}$：特解形式 $y^* = x^kQ_n(x)e^{\alpha x}$，其中 $k$ 是 $\alpha$ 作为特征根的重数
* $f(x) = e^{\alpha x}[P_m(x)\cos\beta x + P_n(x)\sin\beta x]$：特解形式 $y^* = x^ke^{\alpha x}[R_l(x)\cos\beta x + S_l(x)\sin\beta x]$，其中 $l = \max(m,n)$，$k$ 是 $\alpha + i\beta$ 作为特征根的重数

**常数变易法**
若齐次通解为 $y = C_1y_1 + C_2y_2$，则设特解为：$y^* = v_1(x)y_1 + v_2(x)y_2$
其中 $v_1', v_2'$ 满足：
$\begin{cases} v_1'y_1 + v_2'y_2 = 0 \\ v_1'y_1' + v_2'y_2' = f(x) \end{cases}$
解得：$v_1' = -\frac{y_2f}{W}, \quad v_2' = \frac{y_1f}{W}$

### Euler 方程

**Euler 方程**
形如：$x^2y'' + pxy' + qy = f(x) \quad (x > 0)$ 的方程称为 Euler 方程。

**变量代换法**
令 $x = e^t$，则：
$x\frac{dy}{dx} = \frac{dy}{dt}, \quad x^2\frac{d^2y}{dx^2} = \frac{d^2y}{dt^2} - \frac{dy}{dt}$
方程化为常系数线性方程：
$\frac{d^2y}{dt^2} + (p-1)\frac{dy}{dt} + qy = f(e^t)$

**特征方程法**
直接设 $y = x^r$，代入齐次方程得特征方程：
$r(r-1) + pr + q = 0 \Rightarrow r^2 + (p-1)r + q = 0$
* 两个不等实根 $r_1, r_2$：$y = C_1x^{r_1} + C_2x^{r_2}$
* 重根 $r_1 = r_2$：$y = (C_1 + C_2\ln x)x^{r_1}$
* 共轭复根 $r = \alpha \pm i\beta$：$y = x^{\alpha}[C_1\cos(\beta\ln x) + C_2\sin(\beta\ln x)]$

## 微分方程组

### 一阶线性微分方程组

**一阶线性方程组**
形如：
$\begin{cases} \frac{dx_1}{dt} = a_{11}(t)x_1 + a_{12}(t)x_2 + \cdots + a_{1n}(t)x_n + f_1(t) \\ \frac{dx_2}{dt} = a_{21}(t)x_1 + a_{22}(t)x_2 + \cdots + a_{2n}(t)x_n + f_2(t) \\ \vdots \\ \frac{dx_n}{dt} = a_{n1}(t)x_1 + a_{n2}(t)x_2 + \cdots + a_{nn}(t)x_n + f_n(t) \end{cases}$
可写成矩阵形式：$\frac{d\mathbf{X}}{dt} = \mathbf{A}(t)\mathbf{X} + \mathbf{F}(t)$

### 常系数齐次方程组

**矩阵指数法**
对于 $\frac{d\mathbf{X}}{dt} = \mathbf{A}\mathbf{X}$，通解为：$\mathbf{X} = e^{\mathbf{A}t}\mathbf{C}$
其中 $\mathbf{C}$ 是常数列向量。

**特征值法**
设解为 $\mathbf{X} = \mathbf{v}e^{\lambda t}$，代入得：$(\mathbf{A} - \lambda\mathbf{I})\mathbf{v} = \mathbf{0}$
$\lambda$ 是特征值，$\mathbf{v}$ 是对应特征向量。

**通解结构**
* 不同实特征值 $\lambda_1, \dots, \lambda_n$：$\mathbf{X} = C_1\mathbf{v}_1e^{\lambda_1t} + \cdots + C_n\mathbf{v}_ne^{\lambda_nt}$
* 复特征值：实部和虚部分别对应实解
* 重特征值：需要广义特征向量

### 常系数非齐次方程组

**常数变易法**
若齐次通解为 $\mathbf{X} = \mathbf{\Phi}(t)\mathbf{C}$，则设特解为：$\mathbf{X}^* = \mathbf{\Phi}(t)\mathbf{v}(t)$
其中 $\mathbf{v}'(t) = \mathbf{\Phi}^{-1}(t)\mathbf{F}(t)$

**待定系数法**
根据 $\mathbf{F}(t)$ 的形式设定特解形式。

### 可化为方程组的二阶方程

**一阶化方法**
对于 $y'' + py' + qy = f(x)$，令：
$y_1 = y, \quad y_2 = y'$
则化为：
$\begin{cases} y_1' = y_2 \\ y_2' = -qy_1 - py_2 + f(x) \end{cases}$
即：
$\frac{d}{dx}\begin{bmatrix} y_1 \\ y_2 \end{bmatrix} = \begin{bmatrix} 0 & 1 \\ -q & -p \end{bmatrix} \begin{bmatrix} y_1 \\ y_2 \end{bmatrix} + \begin{bmatrix} 0 \\ f(x) \end{bmatrix}$

## 多元函数极限与连续

### Cantor 定理

**多元Cantor定理**
设 $D \subset \mathbb{R}^n$ 是有界闭区域，函数列 $\{f_k(\mathbf{x})\}$ 在 $D$ 上满足：
1. 单调性：$f_1(\mathbf{x}) \ge f_2(\mathbf{x}) \ge \cdots \ge f_k(\mathbf{x}) \ge \cdots$（或单调递减）
2. 连续性：每个 $f_k(\mathbf{x})$ 在 $D$ 上连续
3. 收敛性：$\lim_{k \to \infty} f_k(\mathbf{x}) = f(\mathbf{x})$ 在 $D$ 上处处存在
则 $f_k(\mathbf{x})$ 在 $D$ 上一致收敛于 $f(\mathbf{x})$。

### Heine-Borel 定理

**多元Heine-Borel定理**
在 $\mathbb{R}^n$ 中，集合 $K$ 是紧集的充要条件是 $K$ 是有界闭集。

**有限覆盖定理**
设 $D \subset \mathbb{R}^n$ 是有界闭区域，$\{U_\alpha\}$ 是 $D$ 的一个开覆盖，则存在有限子覆盖。

### Cauchy 收敛准则

**多元函数极限Cauchy准则**
设 $f: D \subset \mathbb{R}^n \to \mathbb{R}^m$，$\mathbf{x}_0$ 是 $D$ 的聚点，则极限
$\lim_{\mathbf{x} \to \mathbf{x}_0} f(\mathbf{x}) = \mathbf{L}$
存在的充要条件是：
$\forall \varepsilon > 0, \exists \delta > 0, \forall \mathbf{x}, \mathbf{y} \in \mathring{U}(\mathbf{x}_0, \delta) \cap D: \|f(\mathbf{x}) - f(\mathbf{y})\| < \varepsilon$

**多元函数序列Cauchy准则**
函数列 $\{f_k(\mathbf{x})\}$ 在 $D$ 上一致收敛的充要条件是：
$\forall \varepsilon > 0, \exists N \in \mathbb{N}, \forall k, l > N, \forall \mathbf{x} \in D: |f_k(\mathbf{x}) - f_l(\mathbf{x})| < \varepsilon$

### 夹逼定理

**多元函数夹逼定理**
设 $f, g, h: D \subset \mathbb{R}^n \to \mathbb{R}$，$\mathbf{x}_0$ 是 $D$ 的聚点，且在 $\mathbf{x}_0$ 的某个去心邻域内满足：
$g(\mathbf{x}) \le f(\mathbf{x}) \le h(\mathbf{x})$
如果 $\lim_{\mathbf{x} \to \mathbf{x}_0} g(\mathbf{x}) = \lim_{\mathbf{x} \to \mathbf{x}_0} h(\mathbf{x}) = L$
则 $\lim_{\mathbf{x} \to \mathbf{x}_0} f(\mathbf{x}) = L$

> **示例：**
> 证明 $\lim_{(x,y) \to (0,0)} \frac{x^2y}{x^2 + y^2} = 0$
> 解：由于 $|x| \le \sqrt{x^2 + y^2}$，$|y| \le \sqrt{x^2 + y^2}$，所以
> $0 \le \left|\frac{x^2y}{x^2 + y^2}\right| \le |y| \le \sqrt{x^2 + y^2}$
> 由夹逼定理得极限为 0。

### Heine 原理

**多元函数Heine原理**
设 $f: D \subset \mathbb{R}^n \to \mathbb{R}^m$，$\mathbf{x}_0$ 是 $D$ 的聚点，则
$\lim_{\mathbf{x} \to \mathbf{x}_0} f(\mathbf{x}) = \mathbf{L}$
的充要条件是：对于任意满足 $\mathbf{x}_k \to \mathbf{x}_0$，$\mathbf{x}_k \ne \mathbf{x}_0$，$\mathbf{x}_k \in D$ 的点列 $\{\mathbf{x}_k\}$，都有
$\lim_{k \to \infty} f(\mathbf{x}_k) = \mathbf{L}$

## 多元微分学

### 多元Taylor公式

**多元Taylor公式**
设 $f: U \subset \mathbb{R}^n \to \mathbb{R}$ 在点 $\mathbf{a} \in U$ 处有 $m+1$ 阶连续偏导数，则对任意 $\mathbf{h} = (h_1, \dots, h_n)$ 使得 $\mathbf{a} + \mathbf{h} \in U$，有
$f(\mathbf{a} + \mathbf{h}) = \sum_{k=0}^m \frac{1}{k!} \left(\sum_{i=1}^n h_i \frac{\partial}{\partial x_i}\right)^k f(\mathbf{a}) + R_m(\mathbf{h})$
其中余项 $R_m(\mathbf{h})$ 可表示为：
* Peano 余项：$R_m(\mathbf{h}) = o(\|\mathbf{h}\|^m)$
* Lagrange 余项：存在 $\theta \in (0,1)$ 使得
  $R_m(\mathbf{h}) = \frac{1}{(m+1)!} \left(\sum_{i=1}^n h_i \frac{\partial}{\partial x_i}\right)^{m+1} f(\mathbf{a} + \theta\mathbf{h})$

**二阶Taylor展开**
$f(\mathbf{a} + \mathbf{h}) = f(\mathbf{a}) + \sum_{i=1}^n \frac{\partial f}{\partial x_i}(\mathbf{a})h_i + \frac{1}{2}\sum_{i,j=1}^n \frac{\partial^2 f}{\partial x_i \partial x_j}(\mathbf{a})h_i h_j + o(\|\mathbf{h}\|^2)$
或写成矩阵形式：
$f(\mathbf{a} + \mathbf{h}) = f(\mathbf{a}) + \nabla f(\mathbf{a})^T \mathbf{h} + \frac{1}{2} \mathbf{h}^T H_f(\mathbf{a}) \mathbf{h} + o(\|\mathbf{h}\|^2)$
其中 $H_f(\mathbf{a})$ 是 Hessian 矩阵。

**示例**
二元函数 $f(x,y)$ 在 $(a,b)$ 处的二阶Taylor展开：
$\begin{aligned} f(a+h, b+k) = & f(a,b) + f_x(a,b)h + f_y(a,b)k \\ & + \frac{1}{2}[f_{xx}(a,b)h^2 + 2f_{xy}(a,b)hk + f_{yy}(a,b)k^2] + o(h^2 + k^2) \end{aligned}$

## 隐函数存在定理

### 单个方程情形

**隐函数存在定理**
设函数 $F: D \subset \mathbb{R}^{n+1} \to \mathbb{R}$ 满足：
1. $F(\mathbf{x}_0, y_0) = 0$，其中 $\mathbf{x}_0 \in \mathbb{R}^n$，$y_0 \in \mathbb{R}$
2. 在 $(\mathbf{x}_0, y_0)$ 的某邻域内，$F$ 有连续偏导数
3. $\frac{\partial F}{\partial y}(\mathbf{x}_0, y_0) \ne 0$
则在 $\mathbf{x}_0$ 的某邻域 $U \subset \mathbb{R}^n$ 内存在唯一函数 $y = f(\mathbf{x})$ 满足：
1. $f(\mathbf{x}_0) = y_0$
2. $F(\mathbf{x}, f(\mathbf{x})) \equiv 0$
3. $f$ 在 $U$ 内连续可微，且
   $\frac{\partial f}{\partial x_i}(\mathbf{x}) = -\frac{\frac{\partial F}{\partial x_i}(\mathbf{x}, f(\mathbf{x}))}{\frac{\partial F}{\partial y}(\mathbf{x}, f(\mathbf{x}))}, \quad i = 1, \dots, n$

**示例**
方程 $F(x,y) = x^2 + y^2 - 1 = 0$ 在 $(0,1)$ 附近确定隐函数 $y = f(x)$，且 $\frac{dy}{dx} = -\frac{F_x}{F_y} = -\frac{2x}{2y} = -\frac{x}{y}$

### 方程组情形

**隐函数组存在定理**
设函数组 $F_i: D \subset \mathbb{R}^{n+m} \to \mathbb{R}$，$i = 1, \dots, m$ 满足：
1. $F_i(\mathbf{x}_0, \mathbf{y}_0) = 0$，其中 $\mathbf{x}_0 \in \mathbb{R}^n$，$\mathbf{y}_0 \in \mathbb{R}^m$
2. 在 $(\mathbf{x}_0, \mathbf{y}_0)$ 的某邻域内，$F_i$ 有连续偏导数
3. Jacobi 行列式在 $(\mathbf{x}_0, \mathbf{y}_0)$ 处不为零：
   $\frac{\partial(F_1, \dots, F_m)}{\partial(y_1, \dots, y_m)}(\mathbf{x}_0, \mathbf{y}_0) \ne 0$
则在 $\mathbf{x}_0$ 的某邻域 $U \subset \mathbb{R}^n$ 内存在唯一函数组 $\mathbf{y} = \mathbf{f}(\mathbf{x}) = (f_1(\mathbf{x}), \dots, f_m(\mathbf{x}))$ 满足：
1. $\mathbf{f}(\mathbf{x}_0) = \mathbf{y}_0$
2. $F_i(\mathbf{x}, \mathbf{f}(\mathbf{x})) \equiv 0, \quad i = 1, \dots, m$
3. $\mathbf{f}$ 在 $U$ 内连续可微

**隐函数组微分公式**
在定理条件下，有 $\frac{\partial \mathbf{f}}{\partial \mathbf{x}} = -\left(\frac{\partial \mathbf{F}}{\partial \mathbf{y}}\right)^{-1} \frac{\partial \mathbf{F}}{\partial \mathbf{x}}$
即
$\begin{bmatrix} \frac{\partial f_1}{\partial x_1} & \cdots & \frac{\partial f_1}{\partial x_n} \\ \vdots & \ddots & \vdots \\ \frac{\partial f_m}{\partial x_1} & \cdots & \frac{\partial f_m}{\partial x_n} \end{bmatrix} = - \begin{bmatrix} \frac{\partial F_1}{\partial y_1} & \cdots & \frac{\partial F_1}{\partial y_m} \\ \vdots & \ddots & \vdots \\ \frac{\partial F_m}{\partial y_1} & \cdots & \frac{\partial F_m}{\partial y_m} \end{bmatrix}^{-1} \begin{bmatrix} \frac{\partial F_1}{\partial x_1} & \cdots & \frac{\partial F_1}{\partial x_n} \\ \vdots & \ddots & \vdots \\ \frac{\partial F_m}{\partial x_1} & \cdots & \frac{\partial F_m}{\partial x_n} \end{bmatrix}$

### 反函数组定理

**反函数组定理**
设函数组 $\mathbf{y} = \mathbf{f}(\mathbf{x}): U \subset \mathbb{R}^n \to \mathbb{R}^n$ 满足：
1. $\mathbf{f}$ 在 $\mathbf{x}_0$ 处可微
2. Jacobi 行列式在 $\mathbf{x}_0$ 处不为零：$J = \frac{\partial(f_1, \dots, f_n)}{\partial(x_1, \dots, x_n)}(\mathbf{x}_0) \ne 0$
则在 $\mathbf{y}_0 = \mathbf{f}(\mathbf{x}_0)$ 的某邻域内存在唯一反函数组 $\mathbf{x} = \mathbf{g}(\mathbf{y})$，且 $\frac{\partial \mathbf{g}}{\partial \mathbf{y}} = \left(\frac{\partial \mathbf{f}}{\partial \mathbf{x}}\right)^{-1}$

## 应用与推论

### 条件极值与 Lagrange 乘数法

**Lagrange 乘数法**
设 $f, g_i: \mathbb{R}^n \to \mathbb{R}$，$i = 1, \dots, m$ 连续可微，考虑条件极值问题：
$\begin{cases} \min f(\mathbf{x}) \\ g_i(\mathbf{x}) = 0, \quad i = 1, \dots, m \end{cases}$
若 $\mathbf{x}^*$ 是极值点，且 $\nabla g_1(\mathbf{x}^*), \dots, \nabla g_m(\mathbf{x}^*)$ 线性无关，则存在 Lagrange 乘数 $\lambda_1, \dots, \lambda_m$ 使得
$\nabla f(\mathbf{x}^*) = \sum_{i=1}^m \lambda_i \nabla g_i(\mathbf{x}^*)$

### 曲面的切平面与法线

**隐式曲面切平面**
设曲面由 $F(x,y,z) = 0$ 确定，$P(x_0,y_0,z_0)$ 是曲面上一点，且 $\nabla F(P) \ne \mathbf{0}$，则曲面在 $P$ 点的切平面方程为：
$F_x(P)(x - x_0) + F_y(P)(y - y_0) + F_z(P)(z - z_0) = 0$
法线方向为 $\nabla F(P)$。

**参数曲面切平面**
设曲面由 $\mathbf{r}(u,v) = (x(u,v), y(u,v), z(u,v))$ 给出，则切平面由向量 $\frac{\partial \mathbf{r}}{\partial u} \times \frac{\partial \mathbf{r}}{\partial v}$ 决定。

## 重要公式总结

### 多元Taylor展开常用形式

* **一阶展开**：$f(\mathbf{a} + \mathbf{h}) = f(\mathbf{a}) + \nabla f(\mathbf{a}) \cdot \mathbf{h} + o(\|\mathbf{h}\|)$
* **二阶展开**：$f(\mathbf{a} + \mathbf{h}) = f(\mathbf{a}) + \nabla f(\mathbf{a})^T \mathbf{h} + \frac{1}{2} \mathbf{h}^T H_f(\mathbf{a}) \mathbf{h} + o(\|\mathbf{h}\|^2)$
* **二元函数**：
  $\begin{aligned} f(a+h,b+k) = & f(a,b) + f_x h + f_y k \\ & + \frac{1}{2}(f_{xx}h^2 + 2f_{xy}hk + f_{yy}k^2) + \cdots \end{aligned}$

### 隐函数求导公式

* **单个方程**：$\frac{dy}{dx} = -\frac{F_x}{F_y}$
* **二元方程组**：对于 $\begin{cases} F(x,y,u,v) = 0 \\ G(x,y,u,v) = 0 \end{cases}$
  有 $\frac{\partial u}{\partial x} = -\frac{1}{J} \frac{\partial(F,G)}{\partial(x,v)}, \quad \frac{\partial v}{\partial x} = -\frac{1}{J} \frac{\partial(F,G)}{\partial(u,x)}$
  其中 $J = \frac{\partial(F,G)}{\partial(u,v)}$

### Jacobi 行列式性质

* **链式法则**：$\frac{\partial(u,v)}{\partial(x,y)} = \frac{\partial(u,v)}{\partial(s,t)} \cdot \frac{\partial(s,t)}{\partial(x,y)}$
* **反函数**：$\frac{\partial(x,y)}{\partial(u,v)} = \left[\frac{\partial(u,v)}{\partial(x,y)}\right]^{-1}$

## 求解公式总结

### 一阶方程通解公式

* **可分离变量**：$\int \frac{dy}{g(y)} = \int f(x)dx + C$
* **一阶线性**：$y = e^{-\int Pdx}\left[\int Qe^{\int Pdx}dx + C\right]$
* **Bernoulli**：令 $z = y^{1-n}$ 化为一阶线性

### 二阶常系数方程通解

* **齐次方程** $y'' + py' + qy = 0$：
  $\begin{aligned} \Delta > 0 &: y = C_1e^{r_1x} + C_2e^{r_2x} \\ \Delta = 0 &: y = (C_1 + C_2x)e^{rx} \\ \Delta < 0 &: y = e^{\alpha x}(C_1\cos\beta x + C_2\sin\beta x) \end{aligned}$
* **Euler 方程** $x^2y'' + pxy' + qy = 0$：
  $\begin{aligned} \Delta > 0 &: y = C_1x^{r_1} + C_2x^{r_2} \\ \Delta = 0 &: y = (C_1 + C_2\ln x)x^{r} \\ \Delta < 0 &: y = x^{\alpha}[C_1\cos(\beta\ln x) + C_2\sin(\beta\ln x)] \end{aligned}$

### 重要公式

* **Liouville 公式**：$W(x) = W(x_0)e^{-\int_{x_0}^x P(t)dt}$
* **Wronski 行列式**：$W(x) = y_1y_2' - y_2y_1'$
* **矩阵指数**：$e^{\mathbf{A}t} = \sum_{k=0}^{\infty} \frac{\mathbf{A}^k t^k}{k!}$