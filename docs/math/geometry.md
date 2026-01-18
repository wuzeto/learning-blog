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

# 场论

## 二重积分理论基础

### 二重积分定义

**二重积分**
设 $D$ 是 $Oxy$ 平面上的有界闭区域，函数 $f(x,y)$ 在 $D$ 上有界。将 $D$ 任意分割成 $n$ 个小区域：
$\Delta D_1, \Delta D_2, \dots, \Delta D_n$
其中 $\Delta D_i$ 的面积记为 $\Delta \sigma_i$，直径记为 $d_i$，$\lambda = \max\{d_1, d_2, \dots, d_n\}$。在每个 $\Delta D_i$ 上任取一点 $(\xi_i, \eta_i)$，作和式：
$S_n = \sum_{i=1}^n f(\xi_i, \eta_i) \Delta \sigma_i$
如果当 $\lambda \to 0$ 时，极限
$\lim_{\lambda \to 0} S_n = I$
存在且与分割方式和取点方式无关，则称 $f(x,y)$ 在 $D$ 上可积，$I$ 称为二重积分，记为：
$\iint_D f(x,y) \, d\sigma = \lim_{\lambda \to 0} \sum_{i=1}^n f(\xi_i, \eta_i) \Delta \sigma_i$

### Darboux 定理

**Darboux 大和与小和**
设 $f(x,y)$ 在 $D$ 上有界，$P$ 是 $D$ 的一个分割：
* 上确界：$M_i = \sup_{(x,y) \in \Delta D_i} f(x,y)$
* 下确界：$m_i = \inf_{(x,y) \in \Delta D_i} f(x,y)$
* Darboux 大和：$S(P) = \sum_{i=1}^n M_i \Delta \sigma_i$
* Darboux 小和：$s(P) = \sum_{i=1}^n m_i \Delta \sigma_i$

**Darboux 定理**
有界函数 $f(x,y)$ 在 $D$ 上可积的充要条件是：
$\lim_{\lambda \to 0} [S(P) - s(P)] = 0$
即
$\lim_{\lambda \to 0} \sum_{i=1}^n (M_i - m_i) \Delta \sigma_i = 0$

**可积的充分条件**
1. 若 $f(x,y)$ 在 $D$ 上连续，则 $f(x,y)$ 在 $D$ 上可积
2. 若 $f(x,y)$ 在 $D$ 上有界，且间断点集的面积为 0，则 $f(x,y)$ 在 $D$ 上可积

### Lebesgue 定理

**Lebesgue 定理**
有界函数 $f(x,y)$ 在 $D$ 上 Riemann 可积的充要条件是：$f(x,y)$ 在 $D$ 上几乎处处连续，即 $f(x,y)$ 的间断点集是零测集。

**零测集**
集合 $E \subset \mathbb{R}^2$ 称为零测集，如果对任意 $\varepsilon > 0$，存在可数个矩形 $\{R_i\}$ 覆盖 $E$，且这些矩形的面积之和小于 $\varepsilon$。

> **示例：可积函数举例**
> * 连续函数：在闭区域上连续的函数必可积
> * 分段连续函数：若间断点构成有限条光滑曲线，则可积
> * Dirichlet 函数：在 $[0,1] \times [0,1]$ 上不可积

## 二重积分中值定理

### 积分中值定理

**二重积分第一中值定理**
若 $f(x,y)$ 在 $D$ 上连续，则存在 $(\xi, \eta) \in D$ 使得：
$\iint_D f(x,y) \, d\sigma = f(\xi, \eta) \cdot S(D)$
其中 $S(D)$ 是区域 $D$ 的面积。

**二重积分第二中值定理**
若 $f(x,y)$ 在 $D$ 上可积，$g(x,y)$ 在 $D$ 上连续且不变号，则存在 $(\xi, \eta) \in D$ 使得：
$\iint_D f(x,y)g(x,y) \, d\sigma = f(\xi, \eta) \iint_D g(x,y) \, d\sigma$

**二重积分第三中值定理**
若 $f(x,y)$ 在 $D$ 上连续，$g(x,y)$ 在 $D$ 上可积且不变号，则存在 $(\xi, \eta) \in D$ 使得：
$\iint_D f(x,y)g(x,y) \, d\sigma = f(\xi, \eta) \iint_D g(x,y) \, d\sigma$

**加权积分中值定理**
若 $f(x,y)$ 在 $D$ 上连续，$g(x,y)$ 在 $D$ 上可积且 $g(x,y) \geq 0$，则存在 $(\xi, \eta) \in D$ 使得：
$\iint_D f(x,y)g(x,y) \, d\sigma = f(\xi, \eta) \iint_D g(x,y) \, d\sigma$

> **示例**
> 计算 $\iint_D (x^2 + y^2) \, d\sigma$，其中 $D: x^2 + y^2 \leq R^2$
> 
> 解：由积分中值定理，存在 $(\xi, \eta) \in D$ 使得：
> $\iint_D (x^2 + y^2) \, d\sigma = (\xi^2 + \eta^2) \cdot \pi R^2$
> 由于 $0 \leq \xi^2 + \eta^2 \leq R^2$，可得：
> $0 \leq \iint_D (x^2 + y^2) \, d\sigma \leq R^2 \cdot \pi R^2 = \pi R^4$

## 二重积分换元法

### 一般换元公式

**二重积分换元公式**
设变换 $T: x = x(u,v), y = y(u,v)$ 将 $uv$ 平面上的区域 $D'$ 一一对应地映射到 $xy$ 平面上的区域 $D$，且满足：
1. $x(u,v), y(u,v)$ 在 $D'$ 上具有一阶连续偏导数
2. Jacobi 行列式在 $D'$ 上不为零：
   $J = \frac{\partial(x,y)}{\partial(u,v)} = 
   \begin{vmatrix}
      \frac{\partial x}{\partial u} & \frac{\partial x}{\partial v} \\
      \frac{\partial y}{\partial u} & \frac{\partial y}{\partial v}
   \end{vmatrix} \neq 0$
则
$\iint_D f(x,y) \, dxdy = \iint_{D'} f(x(u,v), y(u,v)) |J| \, dudv$

**证明**
考虑面积微元的变换：
$dxdy = \left| \frac{\partial(x,y)}{\partial(u,v)} \right| dudv$
代入积分即得结论。

### 极坐标变换

**极坐标变换**
令
$x = r\cos\theta, \quad y = r\sin\theta$
则 Jacobi 行列式为：
$J = \frac{\partial(x,y)}{\partial(r,\theta)} = 
\begin{vmatrix}
   \cos\theta & -r\sin\theta \\
   \sin\theta & r\cos\theta
\end{vmatrix} = r$
换元公式：
$\iint_D f(x,y) \, dxdy = \iint_{D'} f(r\cos\theta, r\sin\theta) r \, drd\theta$

> **示例**
> 计算 $\iint_D e^{-x^2-y^2} \, dxdy$，其中 $D: x^2 + y^2 \leq R^2$
> 
> 解：极坐标变换：
> $\iint_D e^{-x^2-y^2} \, dxdy = \int_0^{2\pi} \int_0^R e^{-r^2} r \, drd\theta = 2\pi \left[ -\frac{1}{2}e^{-r^2} \right]_0^R = \pi(1 - e^{-R^2})$

### 广义极坐标变换

**椭圆坐标变换**
对于椭圆区域 $\frac{x^2}{a^2} + \frac{y^2}{b^2} \leq 1$，令：
$x = ar\cos\theta, \quad y = br\sin\theta$
则 Jacobi 行列式为：
$J = \frac{\partial(x,y)}{\partial(r,\theta)} = 
\begin{vmatrix}
   a\cos\theta & -ar\sin\theta \\
   b\sin\theta & br\cos\theta
\end{vmatrix} = abr$
换元公式：
$\iint_D f(x,y) \, dxdy = ab \int_0^{2\pi} \int_0^1 f(ar\cos\theta, br\sin\theta) r \, drd\theta$

### 一般变量替换

**一般变量替换步骤**
1. 选择适当的变量替换：$x = x(u,v), y = y(u,v)$
2. 确定新区域 $D'$：将原区域 $D$ 的边界用新变量表示
3. 计算 Jacobi 行列式：$J = \frac{\partial(x,y)}{\partial(u,v)}$
4. 代入换元公式计算

> **示例：线性变换**
> 计算 $\iint_D (x+y)^2 \, dxdy$，其中 $D$ 由 $x=0, y=0, x+y=1$ 围成
> 
> 解：令 $u = x+y, v = x-y$，则：
> $x = \frac{u+v}{2}, \quad y = \frac{u-v}{2}$
> Jacobi 行列式：
> $J = \frac{\partial(x,y)}{\partial(u,v)} = 
> \begin{vmatrix}
>    \frac{1}{2} & \frac{1}{2} \\
>    \frac{1}{2} & -\frac{1}{2}
> \end{vmatrix} = -\frac{1}{2}$
> 新区域：$0 \leq u \leq 1, -u \leq v \leq u$
> $\iint_D (x+y)^2 \, dxdy = \int_0^1 \int_{-u}^u u^2 \cdot \frac{1}{2} \, dvdu = \frac{1}{2} \int_0^1 u^2 \cdot 2u \, du = \int_0^1 u^3 \, du = \frac{1}{4}$

## 应用与计算技巧

### 对称性简化

**奇偶对称性**
设 $D$ 关于 $x$ 轴对称：
* 若 $f(x,-y) = -f(x,y)$，则 $\iint_D f(x,y) \, d\sigma = 0$
* 若 $f(x,-y) = f(x,y)$，则 $\iint_D f(x,y) \, d\sigma = 2\iint_{D_1} f(x,y) \, d\sigma$，其中 $D_1$ 是 $D$ 的上半部分
关于 $y$ 轴对称有类似结论。

**轮换对称性**
若区域 $D$ 关于直线 $y=x$ 对称，则：
$\iint_D f(x,y) \, d\sigma = \iint_D f(y,x) \, d\sigma$
特别地：
$\iint_D [f(x,y) + f(y,x)] \, d\sigma = 2\iint_D f(x,y) \, d\sigma$

### 积分次序交换

**Fubini 定理**
若 $f(x,y)$ 在矩形区域 $[a,b] \times [c,d]$ 上可积，则：
$\iint_{[a,b] \times [c,d]} f(x,y) \, dxdy = \int_a^b \left[ \int_c^d f(x,y) \, dy \right] dx = \int_c^d \left[ \int_a^b f(x,y) \, dx \right] dy$

**一般区域积分次序交换**
对于 $y$-型区域：$D = \{(x,y) \mid \varphi_1(x) \leq y \leq \varphi_2(x), a \leq x \leq b\}$
$\iint_D f(x,y) \, dxdy = \int_a^b \left[ \int_{\varphi_1(x)}^{\varphi_2(x)} f(x,y) \, dy \right] dx$
对于 $x$-型区域：$D = \{(x,y) \mid \psi_1(y) \leq x \leq \psi_2(y), c \leq y \leq d\}$
$\iint_D f(x,y) \, dxdy = \int_c^d \left[ \int_{\psi_1(y)}^{\psi_2(y)} f(x,y) \, dx \right] dy$

## 第一型曲线积分

### 定义与中值定理

**第一型曲线积分**
设 $L$ 是光滑曲线，$f(x,y)$ 在 $L$ 上有定义。将 $L$ 任意分割成 $n$ 个小弧段 $\Delta s_i$，长度为 $\Delta s_i$，在 $\Delta s_i$ 上任取一点 $(\xi_i, \eta_i)$，作和式：
$\sum_{i=1}^n f(\xi_i, \eta_i) \Delta s_i$
如果当 $\max \Delta s_i \to 0$ 时极限存在，则称此极限为第一型曲线积分：
$\int_L f(x,y) \, ds = \lim_{\max \Delta s_i \to 0} \sum_{i=1}^n f(\xi_i, \eta_i) \Delta s_i$

**第一型曲线积分中值定理**
若 $f(x,y)$ 在光滑曲线 $L$ 上连续，则存在 $(\xi, \eta) \in L$ 使得：
$\int_L f(x,y) \, ds = f(\xi, \eta) \cdot \text{length}(L)$
其中 $\text{length}(L)$ 是曲线 $L$ 的长度。

**证明**
由于 $f(x,y)$ 在紧集 $L$ 上连续，故存在最大值 $M$ 和最小值 $m$，使得：
$m \cdot \text{length}(L) \leq \int_L f(x,y) \, ds \leq M \cdot \text{length}(L)$
由介值定理，存在 $(\xi, \eta) \in L$ 使得结论成立。

## Green 公式

### 基本 Green 公式

**Green 公式**
设 $D$ 是平面有界闭区域，其边界 $\partial D$ 由有限条分段光滑曲线组成。若函数 $P(x,y), Q(x,y)$ 在 $D$ 上具有一阶连续偏导数，则：
$\oint_{\partial D} P\,dx + Q\,dy = \iint_D \left( \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right) dxdy$
其中 $\partial D$ 取正向（逆时针方向）。

> **示例**
> 计算 $\oint_L x\,dy - y\,dx$，其中 $L$ 是椭圆 $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$ 逆时针方向。
> 
> 解：由 Green 公式：
> $\oint_L x\,dy - y\,dx = \iint_D \left( \frac{\partial x}{\partial x} - \frac{\partial (-y)}{\partial y} \right) dxdy = \iint_D (1 + 1) dxdy = 2\iint_D dxdy = 2\pi ab$

### 平面 Green 公式的推广

**平面 Green 第一公式**
设 $D$ 为平面区域，$u,v \in C^2(D) \cap C^1(\overline{D})$，则：
$\iint_D \nabla u \cdot \nabla v \, dxdy = \oint_{\partial D} v \frac{\partial u}{\partial n} \, ds - \iint_D v \Delta u \, dxdy$
其中 $\frac{\partial u}{\partial n}$ 是 $u$ 沿外法向的方向导数，$\Delta u = \frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2}$。

**平面 Green 第二公式**
在相同条件下：
$\iint_D (u\Delta v - v\Delta u) \, dxdy = \oint_{\partial D} \left( u \frac{\partial v}{\partial n} - v \frac{\partial u}{\partial n} \right) ds$

**平面 Green 第三公式**
对于调和函数 $u$（即 $\Delta u = 0$），有：
$u(x_0, y_0) = \frac{1}{2\pi} \oint_{\partial D} \left[ u \frac{\partial}{\partial n}(\ln r) - \ln r \frac{\partial u}{\partial n} \right] ds$
其中 $r = \sqrt{(x-x_0)^2 + (y-y_0)^2}$。

## 调和函数与 Riemann 定理

### 调和函数性质

**调和函数**
若函数 $u(x,y)$ 在区域 $D$ 内满足 Laplace 方程：
$\Delta u = \frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 0$
则称 $u$ 为 $D$ 内的调和函数。

**调和函数平面中值定理**
若 $u$ 在圆盘 $B_R(P_0)$ 内调和，在闭圆盘上连续，则：
$u(P_0) = \frac{1}{2\pi R} \oint_{\partial B_R(P_0)} u \, ds = \frac{1}{\pi R^2} \iint_{B_R(P_0)} u \, dxdy$
即函数在圆心的值等于圆周上的平均值和圆盘上的平均值。

**Riemann 定理**
单连通区域上的调和函数由其在边界上的值唯一确定。

**极值原理**
非常数的调和函数在区域内部不能取得最大值和最小值。

## Gauss 公式

### 基本 Gauss 公式

**Gauss 公式（散度定理）**
设 $\Omega$ 是空间有界闭区域，其边界 $\partial \Omega$ 分片光滑。若向量场 $\mathbf{F} = (P, Q, R)$ 在 $\Omega$ 上具有一阶连续偏导数，则：
$\oiint_{\partial \Omega} \mathbf{F} \cdot \mathbf{n} \, dS = \iiint_\Omega \nabla \cdot \mathbf{F} \, dV$
即
$\oiint_{\partial \Omega} P\,dydz + Q\,dzdx + R\,dxdy = \iiint_\Omega \left( \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} + \frac{\partial R}{\partial z} \right) dxdydz$
其中 $\mathbf{n}$ 是单位外法向量。

> **示例**
> 计算 $\oiint_S (x^2\,dydz + y^2\,dzdx + z^2\,dxdy)$，其中 $S$ 是单位球面 $x^2 + y^2 + z^2 = 1$ 外侧。
> 
> 解：由 Gauss 公式：
> $\oiint_S (x^2\,dydz + y^2\,dzdx + z^2\,dxdy) = \iiint_\Omega (2x + 2y + 2z) dxdydz$
> 由对称性，$\iiint_\Omega x \, dV = \iiint_\Omega y \, dV = \iiint_\Omega z \, dV = 0$，故结果为 0。

### 空间 Green 公式

**空间 Green 第一公式**
设 $\Omega$ 为空间区域，$u,v \in C^2(\Omega) \cap C^1(\overline{\Omega})$，则：
$\iiint_\Omega \nabla u \cdot \nabla v \, dV = \oiint_{\partial \Omega} v \frac{\partial u}{\partial n} \, dS - \iiint_\Omega v \Delta u \, dV$
其中 $\Delta u = \frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} + \frac{\partial^2 u}{\partial z^2}$。

**空间 Green 第二公式**
在相同条件下：
$\iiint_\Omega (u\Delta v - v\Delta u) \, dV = \oiint_{\partial \Omega} \left( u \frac{\partial v}{\partial n} - v \frac{\partial u}{\partial n} \right) dS$

**空间 Green 第三公式**
对于调和函数 $u$（即 $\Delta u = 0$），有：
$u(P_0) = \frac{1}{4\pi} \oiint_{\partial \Omega} \left[ u \frac{\partial}{\partial n}\left(\frac{1}{r}\right) - \frac{1}{r} \frac{\partial u}{\partial n} \right] dS$
其中 $r = \sqrt{(x-x_0)^2 + (y-y_0)^2 + (z-z_0)^2}$。

## Stokes 公式

**Stokes 公式**
设 $S$ 是分片光滑的有向曲面，其边界 $\partial S$ 是分段光滑的有向闭曲线。若向量场 $\mathbf{F} = (P, Q, R)$ 在包含 $S$ 的空间区域上具有一阶连续偏导数，则：
$\oint_{\partial S} \mathbf{F} \cdot d\mathbf{r} = \iint_S (\nabla \times \mathbf{F}) \cdot \mathbf{n} \, dS$
即
$\oint_{\partial S} P\,dx + Q\,dy + R\,dz = \iint_S \left( \frac{\partial R}{\partial y} - \frac{\partial Q}{\partial z} \right) dydz + \left( \frac{\partial P}{\partial z} - \frac{\partial R}{\partial x} \right) dzdx + \left( \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right) dxdy$
其中 $\mathbf{n}$ 是 $S$ 的单位法向量，方向与 $\partial S$ 的方向满足右手法则。

> **示例**
> 计算 $\oint_C y\,dx + z\,dy + x\,dz$，其中 $C$ 是圆周 $x^2 + y^2 + z^2 = R^2, x+y+z=0$，从 $x$ 轴正向看去为逆时针方向。
> 
> 解：旋度 $\nabla \times \mathbf{F} = (-1, -1, -1)$，法向量 $\mathbf{n} = \frac{1}{\sqrt{3}}(1,1,1)$，故：
> $\oint_C y\,dx + z\,dy + x\,dz = \iint_S (-1, -1, -1) \cdot \frac{1}{\sqrt{3}}(1,1,1) \, dS = -\sqrt{3} \iint_S dS = -\sqrt{3} \pi R^2$

## 空间调和函数

**空间调和函数中值定理**
若 $u$ 在球体 $B_R(P_0)$ 内调和，在闭球体上连续，则：
$u(P_0) = \frac{1}{4\pi R^2} \oiint_{\partial B_R(P_0)} u \, dS = \frac{3}{4\pi R^3} \iiint_{B_R(P_0)} u \, dV$
即函数在球心的值等于球面上的平均值和球体中的平均值。

**空间调和函数性质**
1. 平均值性质：调和函数在任一点的值等于以该点为心的任何球面（球体）上的平均值
2. 极值原理：非常数的调和函数在区域内部不能取得最大值和最小值
3. 解析性：调和函数是实解析的
4. Liouville 定理：有界整调和函数必为常数

## 公式总结与关系

### 三大积分公式关系

* **Green 公式**：平面情形，联系曲线积分与二重积分
  $\oint_{\partial D} P\,dx + Q\,dy = \iint_D \left( \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right) dxdy$
  
* **Gauss 公式**：空间情形，联系曲面积分与三重积分
  $\oiint_{\partial \Omega} \mathbf{F} \cdot \mathbf{n} \, dS = \iiint_\Omega \nabla \cdot \mathbf{F} \, dV$
  
* **Stokes 公式**：空间情形，联系曲线积分与曲面积分
  $\oint_{\partial S} \mathbf{F} \cdot d\mathbf{r} = \iint_S (\nabla \times \mathbf{F}) \cdot \mathbf{n} \, dS$

### 微分算子关系

**微分算子**
$\begin{aligned}
   \text{梯度：} & \quad \nabla u = \left( \frac{\partial u}{\partial x}, \frac{\partial u}{\partial y}, \frac{\partial u}{\partial z} \right) \\
   \text{散度：} & \quad \nabla \cdot \mathbf{F} = \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} + \frac{\partial R}{\partial z} \\
   \text{旋度：} & \quad \nabla \times \mathbf{F} = \left( \frac{\partial R}{\partial y} - \frac{\partial Q}{\partial z}, \frac{\partial P}{\partial z} - \frac{\partial R}{\partial x}, \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right) \\
   \text{Laplace 算子：} & \quad \Delta u = \nabla \cdot (\nabla u) = \frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} + \frac{\partial^2 u}{\partial z^2}
\end{aligned}$

### 重要恒等式

**向量分析恒等式**
$\begin{aligned}
   \nabla \cdot (\nabla \times \mathbf{F}) &= 0 \\
   \nabla \times (\nabla u) &= \mathbf{0} \\
   \nabla \cdot (u\mathbf{F}) &= u\nabla \cdot \mathbf{F} + \mathbf{F} \cdot \nabla u \\
   \nabla \times (u\mathbf{F}) &= u\nabla \times \mathbf{F} + \nabla u \times \mathbf{F} \\
   \nabla \cdot (\mathbf{F} \times \mathbf{G}) &= \mathbf{G} \cdot (\nabla \times \mathbf{F}) - \mathbf{F} \cdot (\nabla \times \mathbf{G})
\end{aligned}$

**无旋场与无散场**
* 若 $\nabla \times \mathbf{F} = \mathbf{0}$，则 $\mathbf{F}$ 为保守场，存在势函数 $u$ 使得 $\mathbf{F} = \nabla u$
* 若 $\nabla \cdot \mathbf{F} = 0$，则 $\mathbf{F}$ 为无源场，存在向量势 $\mathbf{A}$ 使得 $\mathbf{F} = \nabla \times \mathbf{A}$

## 重要公式总结

### 常用换元公式

* **极坐标**：$x = r\cos\theta, y = r\sin\theta$，$dxdy = rdrd\theta$
* **椭圆坐标**：$x = ar\cos\theta, y = br\sin\theta$，$dxdy = abrdrd\theta$
* **广义极坐标**：$x = ar^\alpha\cos\theta, y = br^\beta\sin\theta$，需具体计算 Jacobi 行列式

### 对称性应用

* **奇函数对称**：关于对称轴对称的奇函数积分为零
* **偶函数对称**：关于对称轴对称的偶函数积分可化为半区域的两倍
* **轮换对称**：交换变量积分值不变

### 计算技巧

* **选择合适次序**：使内层积分容易计算
* **利用对称性**：简化计算过程
* **适当换元**：将复杂区域变为简单区域
* **分割区域**：对不连续函数分段积分

> **示例：综合例题**
> 计算 $\iint_D \frac{\sin(x^2 + y^2)}{x^2 + y^2} \, dxdy$，其中 $D: \pi^2 \leq x^2 + y^2 \leq 4\pi^2$
> 
> 解：极坐标变换：
> $\iint_D \frac{\sin(x^2 + y^2)}{x^2 + y^2} \, dxdy = \int_0^{2\pi} \int_{\pi}^{2\pi} \frac{\sin(r^2)}{r^2} \cdot r \, drd\theta = 2\pi \int_{\pi}^{2\pi} \frac{\sin(r^2)}{r} \, dr$
> 令 $u = r^2$，则：
> $= \pi \int_{\pi^2}^{4\pi^2} \frac{\sin u}{u} \, du = \pi[\text{Si}(4\pi^2) - \text{Si}(\pi^2)]$
> 其中 $\text{Si}(x) = \int_0^x \frac{\sin t}{t} dt$ 是正弦积分函数。