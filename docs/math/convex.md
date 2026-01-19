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

# 凸优化核心知识点笔记

## 一、数学优化基础：范数与可微性
### 1.1 向量范数
若实值函数$\|\cdot\|$满足以下三个条件，则称其为**向量范数**（其中$\mathbb{R}^n$表示$n$维向量空间，$x=(x_1,x_2,\cdots,x_n)^T \in \mathbb{R}^n$）：
- **非负性**：$\forall x \in \mathbb{R}^n,\|x\| \geq 0$且$\|x\| = 0 \Leftrightarrow x=0$
- **齐次性**：$\forall \alpha \in \mathbb{R}, \forall x \in \mathbb{R}^n,\|\alpha x\| = |\alpha| \cdot \|x\|$
- **三角不等式**：$\forall x, y \in \mathbb{R}^n,\|x+y\| \leq \|x\| + \|y\|$

常见向量范数类型：
| 范数类型 | 定义公式 | 核心特点 |
|----------|----------|----------|
| $L_1$范数 | $\|x\|_1 = \sum_{i=1}^n |x_i|$ | 又称“曼哈顿距离”，对异常值鲁棒 |
| $L_2$范数 | $\|x\|_2 = \left(\sum_{i=1}^n x_i^2\right)^{\frac{1}{2}}$ | 又称“欧几里得距离”，最常用的范数 |
| $L_\infty$范数 | $\|x\|_\infty = \max_{i} |x_i|$ | 又称“切比雪夫距离”，取向量分量绝对值的最大值 |
| $L_p$范数 | $\|x\|_p = \left(\sum_{i=1}^n |x_i|^p\right)^{\frac{1}{p}}$ | 范数通用形式，$p \geq 1$ |


### 1.2 矩阵范数
针对矩阵$A \in \mathbb{R}^{m \times n}$（元素为$a_{ij}$），常见范数类型如下：
1. **Frobenius范数**：  
   $\|A\|_F = \left(\sum_{i=1}^m \sum_{j=1}^n |a_{ij}|^2\right)^{\frac{1}{2}} = \left(\text{tr}(A^T A)\right)^{\frac{1}{2}}$  
   （$\text{tr}(\cdot)$表示矩阵的迹，即主对角线元素之和）

2. **诱导矩阵范数**：  
   由向量范数诱导而来，定义为$\|A\| = \max_{x \neq 0} \frac{\|A x\|}{\|x\|}$，常见诱导范数：
   - $\|A\|_1$（列和范数）：$\|A\|_1 = \max_{j} \sum_{i=1}^m |a_{ij}|$（取矩阵各列元素绝对值之和的最大值）
   - $\|A\|_2$（谱范数）：$\|A\|_2 = \sqrt{\lambda_{A^T A}}$（$\lambda_{A^T A}$表示$A^T A$的最大特征值）
   - $\|A\|_\infty$（行和范数）：$\|A\|_\infty = \max_{i} \sum_{j=1}^n |a_{ij}|$（取矩阵各行元素绝对值之和的最大值）

3. **矩阵条件数**：  
   若矩阵$A$正定，条件数定义为$\text{cond}(A) = \|A\| \cdot \|A^{-1}\|$；在$L_2$范数下，$\text{cond}(A) = \frac{\lambda_{\text{max}}(A)}{\lambda_{\text{min}}(A)}$（$\lambda_{\text{max}}$、$\lambda_{\text{min}}$分别为$A$的最大、最小特征值）。  
   **意义**：条件数是判断矩阵“病态”与否的度量，条件数越大，矩阵越病态（求解线性方程组时误差放大越明显）。


### 1.3 梯度、Jacobi矩阵与Hessian矩阵
#### （1）梯度
函数$f(x)$在$x$处的梯度是一阶偏导数构成的列向量，定义为：  
$\nabla f(x) = \left[\frac{\partial f(x)}{\partial x_1}, \frac{\partial f(x)}{\partial x_2}, \cdots, \frac{\partial f(x)}{\partial x_n}\right]^T$

常见函数的梯度公式：
- $\nabla (b^T x) = b$（$b$为常向量）
- $\nabla (x^T A x) = (A + A^T) x$；若$A$为对称矩阵，则$\nabla (x^T A x) = 2 A x$
- $\nabla \left(\frac{1}{2} x^T A x + b^T x + c\right) = A x + b$（$c$为常数）

#### （2）方向导数
函数$f$在点$x^0$关于方向$p$的方向导数，描述$f$在$x^0$沿$p$方向的变化率：  
$\frac{\partial f(x^0)}{\partial p} = \lim_{t \to 0^+} \frac{f(x^0 + t p) - f(x^0)}{t}$

#### （3）Jacobi矩阵
对于向量值函数$h(x) = (h_1(x), h_2(x), \cdots, h_m(x))^T$（$x \in \mathbb{R}^n$），其Jacobi矩阵是$m \times n$的一阶偏导数矩阵：  
$h'(x) = \nabla h(x)^T = \begin{pmatrix} 
\frac{\partial h_1(x)}{\partial x_1} & \frac{\partial h_1(x)}{\partial x_2} & \cdots & \frac{\partial h_1(x)}{\partial x_n} \\
\frac{\partial h_2(x)}{\partial x_1} & \frac{\partial h_2(x)}{\partial x_2} & \cdots & \frac{\partial h_2(x)}{\partial x_n} \\
\vdots & \vdots & & \vdots \\
\frac{\partial h_m(x)}{\partial x_1} & \frac{\partial h_m(x)}{\partial x_2} & \cdots & \frac{\partial h_m(x)}{\partial x_n}
\end{pmatrix}$

#### （4）Hessian矩阵
对于二阶可微函数$f(x)$（$x \in \mathbb{R}^n$），其Hessian矩阵是$n \times n$的二阶偏导数对称矩阵（若二阶偏导数连续）：  
$\nabla^2 f(x) = \begin{pmatrix} 
\frac{\partial^2 f(x)}{\partial x_1^2} & \frac{\partial^2 f(x)}{\partial x_1 x_2} & \cdots & \frac{\partial^2 f(x)}{\partial x_1 x_n} \\
\frac{\partial^2 f(x)}{\partial x_2 x_1} & \frac{\partial^2 f(x)}{\partial x_2^2} & \cdots & \frac{\partial^2 f(x)}{\partial x_2 x_n} \\
\vdots & \vdots & & \vdots \\
\frac{\partial^2 f(x)}{\partial x_n x_1} & \frac{\partial^2 f(x)}{\partial x_n x_2} & \cdots & \frac{\partial^2 f(x)}{\partial x_n^2}
\end{pmatrix}$


### 1.4 Taylor展开
Taylor展开是近似函数的核心工具，用于将复杂函数在某点附近展开为多项式形式：
1. **一阶Taylor展开**：  
   若$f: \mathbb{R}^n \to \mathbb{R}$连续可微，对任意向量$p \in \mathbb{R}^n$，有：  
   $f(x + p) = f(x) + \nabla f(x)^T p + o(\|p\|)$  
   （$o(\|p\|)$表示当$\|p\| \to 0$时，比$\|p\|$更高阶的无穷小）

2. **二阶Taylor展开**：  
   若$f: \mathbb{R}^n \to \mathbb{R}$二阶连续可微，对任意向量$p \in \mathbb{R}^n$，有：  
   $f(x + p) = f(x) + \nabla f(x)^T p + \frac{1}{2} p^T \nabla^2 f(x) p + o(\|p\|^2)$


## 二、凸集
### 2.1 基本定义
#### （1）仿射集
设$S \subset \mathbb{R}^n$，若对任意$x^{(1)}, x^{(2)} \in S$及任意$\lambda \in \mathbb{R}$，都有$\lambda x^{(1)} + (1 - \lambda) x^{(2)} \in S$，则称$S$为**仿射集**。  
- 核心性质：仿射集的任意仿射组合（$\sum_{i=1}^k \lambda_i x_i$，其中$\sum_{i=1}^k \lambda_i = 1$）仍属于该集合。  
- 仿射包：集合$S$的所有仿射组合构成的集合，记为$\text{aff}(S) = \left\{ \sum_{i=1}^k \lambda_i x_i \mid x_i \in S, \sum_{i=1}^k \lambda_i = 1 \right\}$。

#### （2）凸集
设$S \subset \mathbb{R}^n$，若对任意$x^{(1)}, x^{(2)} \in S$及任意$\lambda \in [0,1]$，都有$\lambda x^{(1)} + (1 - \lambda) x^{(2)} \in S$，则称$S$为**凸集**。  
- 核心性质：凸集的任意凸组合（$\sum_{i=1}^k \lambda_i x_i$，其中$\sum_{i=1}^k \lambda_i = 1$且$\lambda_i \geq 0$）仍属于该集合。  
- 凸包：集合$S$的所有凸组合构成的集合，记为$\text{conv}(S) = \left\{ \sum_{i=1}^k \lambda_i x_i \mid x_i \in S, \sum_{i=1}^k \lambda_i = 1, \lambda_i \geq 0 \right\}$。

#### （3）锥与凸锥
- **锥**：设$C \subset \mathbb{R}^n$，若对任意$x \in C$及$\lambda > 0$，都有$\lambda x \in C$，则称$C$为锥。  
- **凸锥**：设$C \subset \mathbb{R}^n$，若对任意$x^{(1)}, x^{(2)} \in C$及$\lambda_1, \lambda_2 \geq 0$，都有$\lambda_1 x^{(1)} + \lambda_2 x^{(2)} \in C$，则称$C$为凸锥。


### 2.2 典型凸集
| 凸集类型 | 定义 | 核心特征 |
|----------|------|----------|
| 超平面 | $H = \{ x \mid p^T x = \alpha \}$（$p \in \mathbb{R}^n \neq 0$，$\alpha \in \mathbb{R}$） | 将$\mathbb{R}^n$分为两个半空间的线性集合 |
| 半空间 | 闭半空间：$H^+ = \{ x \mid p^T x \geq \alpha \}$，$H^- = \{ x \mid p^T x \leq \alpha \}$；<br>开半空间：$\dot{H}^+ = \{ x \mid p^T x > \alpha \}$，$\dot{H}^- = \{ x \mid p^T x < \alpha \}$ | 超平面的一侧区域，是凸集 |
| 多面体 | 有限个线性等式和不等式的解集（即有限个半空间与超平面的交集） | 如$\{ x \mid A x = b, G x \leq h \}$（$A \in \mathbb{R}^{p \times n}$，$G \in \mathbb{R}^{m \times n}$） |
| 多胞形 | 有限点集$\{ x^0, x^1, \cdots, x^m \} \subset \mathbb{R}^n$的凸包 | 有界的多面体，顶点个数有限 |
| 单纯形 | 若$\{ x^0, x^1, \cdots, x^m \}$仿射无关（$x^1 - x^0, \cdots, x^m - x^0$线性无关），则其凸包为$m$维单纯形 | 如$\mathbb{R}^2$中的三角形、$\mathbb{R}^3$中的四面体 |


### 2.3 集合的保凸运算
若$S_1, S_2 \subset \mathbb{R}^n$为凸集，$\beta \in \mathbb{R}$，则以下运算结果仍为凸集：
1. 数乘：$\beta S_1 = \{ \beta x \mid x \in S_1 \}$
2. 平移：$S_1 + \beta = \{ x + \beta \mid x \in S_1 \}$
3. 和集：$S_1 + S_2 = \{ x^{(1)} + x^{(2)} \mid x^{(1)} \in S_1, x^{(2)} \in S_2 \}$
4. 差集：$S_1 - S_2 = \{ x^{(1)} - x^{(2)} \mid x^{(1)} \in S_1, x^{(2)} \in S_2 \}$
5. 仿射映射：若$f(x) = A x + b$（$A \in \mathbb{R}^{m \times n}$，$b \in \mathbb{R}^m$）为仿射函数，则$f(S_1) = \{ f(x) \mid x \in S_1 \}$为凸集。


## 三、凸函数
### 3.1 基本定义
设$S \subset \mathbb{R}^n$为非空凸集，函数$f: S \to \mathbb{R}$：
- **凸函数**：对任意$x_1, x_2 \in S$及$\lambda \in (0,1)$，有$f(\lambda x_1 + (1 - \lambda) x_2) \leq \lambda f(x_1) + (1 - \lambda) f(x_2)$。
- **严格凸函数**：对任意$x_1 \neq x_2 \in S$及$\lambda \in (0,1)$，有$f(\lambda x_1 + (1 - \lambda) x_2) < \lambda f(x_1) + (1 - \lambda) f(x_2)$。


### 3.2 凸函数的判定条件
#### （1）一阶条件（可微函数）
设$S \subset \mathbb{R}^n$为非空开凸集，$f: S \to \mathbb{R}$连续可微：
- $f$是凸函数 $\Leftrightarrow$ 对任意$x^*, x \in S$，有$f(x) \geq f(x^*) + \nabla f(x^*)^T (x - x^*)$。
- $f$是严格凸函数 $\Leftrightarrow$ 对任意$x^*, x \in S$（$x \neq x^*$），有$f(x) > f(x^*) + \nabla f(x^*)^T (x - x^*)$。

**推广**：$f$是凸函数 $\Leftrightarrow$ 对任意$x_1, x_2 \in S$，有$(\nabla f(x_1) - \nabla f(x_2))^T (x_2 - x_1) \geq 0$。

#### （2）二阶条件（二次可微函数）
设$S \subset \mathbb{R}^n$为非空凸集，$f: S \to \mathbb{R}$二次连续可微：
- $f$是凸函数 $\Leftrightarrow$ 对任意$x \in S$，Hessian矩阵$\nabla^2 f(x)$半正定（即$\forall p \in \mathbb{R}^n$，$p^T \nabla^2 f(x) p \geq 0$）。
- $f$是严格凸函数 $\Leftrightarrow$ 对任意$x \in S$，Hessian矩阵$\nabla^2 f(x)$正定（即$\forall p \in \mathbb{R}^n \neq 0$，$p^T \nabla^2 f(x) p > 0$）。

#### （3）切西瓜定理（方向凸性）
设$S \subset \mathbb{R}^n$为非空凸集，$f: S \to \mathbb{R}$可微：  
$f$是凸函数 $\Leftrightarrow$ 对任意$x \in S$、任意方向$v \in \mathbb{R}^n$，一元函数$g(t) = f(x + t v)$（$\text{dom}(g) = \{ t \mid x + t v \in \text{dom}(f) \}$）是凸函数。


### 3.3 函数的保凸运算
1. **非负加权和**：若$f_1, \cdots, f_m$为凸函数，$w_1, \cdots, w_m \geq 0$，则$f = \sum_{i=1}^m w_i f_i$为凸函数。
2. **仿射映射**：若$f$为凸函数，$g(x) = f(A x + b)$（$A \in \mathbb{R}^{m \times n}$，$b \in \mathbb{R}^m$），则$g$为凸函数。
3. **逐点最大**：若$f_1, \cdots, f_m$为凸函数，则$f(x) = \max\{ f_1(x), \cdots, f_m(x) \}$为凸函数。
4. **函数透视**：若$f$为凸函数，$g(x, t) = t f(x/t)$（$\text{dom}(g) = \{ (x, t) \mid x/t \in \text{dom}(f), t > 0 \}$），则$g$为凸函数。
5. **函数共轭**：对任意函数$f$，其共轭函数$f^*(y) = \sup_{x \in \text{dom}(f)} (y^T x - f(x))$是凸函数（无论$f$是否凸）。
6. **复合函数**：设$f(x) = h(g(x))$，其中$g: \mathbb{R}^n \to \mathbb{R}^m$，$h: \mathbb{R}^m \to \mathbb{R}$：
   - 若$h$非减且凸，$g$凸，则$f$凸；
   - 若$h$非增且凸，$g$凹，则$f$凸；
   - 凹凸性相反时，需根据具体情况判断。


### 3.4 凸函数与凸集的关系
1. **水平集**：凸函数$f$的水平集$L(f, \alpha) = \{ x \in S \mid f(x) \leq \alpha \}$（$\alpha \in \mathbb{R}$）是凸集。
2. **上镜图**：凸函数$f$的上镜图$\text{epi}(f) = \{ (x, y) \mid x \in S, y \in \mathbb{R}, y \geq f(x) \}$是凸集（**充要条件**：$f$是凸函数 $\Leftrightarrow$ $\text{epi}(f)$是凸集）。

#### （补充）拟凸函数与拟凹函数
- **拟凸函数**：若函数$f: \mathbb{R}^n \to \mathbb{R}$的所有$\alpha$-下水平集$S_\alpha = \{ x \in \text{dom}(f) \mid f(x) \leq \alpha \}$为凸集，则$f$为拟凸函数；  
  等价定义：若$\text{dom}(f)$为凸集，且对任意$x_1, x_2 \in \text{dom}(f)$、$\lambda \in (0,1)$，有$f(\lambda x_1 + (1 - \lambda) x_2) \leq \max\{ f(x_1), f(x_2) \}$。
- **拟凹函数**：若函数$f: \mathbb{R}^n \to \mathbb{R}$的所有$\alpha$-上水平集$S_\alpha = \{ x \in \text{dom}(f) \mid f(x) \geq \alpha \}$为凸集，则$f$为拟凹函数。


## 四、凸优化问题
### 4.1 基本定义
**凸优化问题（凸规划）** 的标准形式：  
$$
\begin{aligned}
\underset{x}{\text{minimize}} & \quad f_0(x) \\
\text{subject to} & \quad f_i(x) \leq 0 \quad (i=1,2,\cdots,m) \\
& \quad h_i(x) = 0 \quad (i=1,2,\cdots,p)
\end{aligned}
$$
其中满足两个核心条件：
1. 目标函数$f_0: \mathbb{R}^n \to \mathbb{R}$是凸函数；
2. 可行域$\mathcal{D} = \{ x \in \text{dom}(f_0) \mid f_i(x) \leq 0, h_i(x) = 0 \}$是凸集（要求$f_i$凸、$h_i$仿射）。

**关键性质**：凸优化问题的任意局部最优解都是全局最优解。


### 4.2 凸优化问题的等价变形
#### （1）变量替换
设$x = \phi(z)$（$\phi$为仿射映射），令$\tilde{f}_i(z) = f_i(\phi(z))$，则原问题等价于：  
$$
\begin{aligned}
\underset{z}{\text{minimize}} & \quad \tilde{f}_0(z) \\
\text{subject to} & \quad \tilde{f}_i(z) \leq 0 \quad (i=1,\cdots,m) \\
& \quad \tilde{h}_i(z) = 0 \quad (i=1,\cdots,p)
\end{aligned}
$$

#### （2）消除等式约束
对等式约束$A x = b$（$A \in \mathbb{R}^{p \times n}$，秩为$p$），设$x = F z + x_0$（$F$为$A$零空间的基矩阵，$x_0$为$A x = b$的一个特解），则原问题等价于：  
$$
\begin{aligned}
\underset{z}{\text{minimize}} & \quad f_0(F z + x_0) \\
\text{subject to} & \quad f_i(F z + x_0) \leq 0 \quad (i=1,\cdots,m)
\end{aligned}
$$

#### （3）引入松弛变量
对线性不等式约束$a_i^T x \leq b_i$，引入松弛变量$s_i \geq 0$，将约束转化为$a_i^T x + s_i = b_i$，原问题等价于：  
$$
\begin{aligned}
\underset{x, s}{\text{minimize}} & \quad f_0(x) \\
\text{subject to} & \quad a_i^T x + s_i = b_i \quad (i=1,\cdots,m) \\
& \quad s_i \geq 0 \quad (i=1,\cdots,m)
\end{aligned}
$$

#### （4）目标函数转化为约束
原问题$\underset{x}{\text{min}} f_0(x) \ \text{s.t.} \ f_i(x) \leq 0, A x = b$，等价于：  
$$
\begin{aligned}
\underset{x, t}{\text{minimize}} & \quad t \\
\text{subject to} & \quad f_0(x) - t \leq 0 \\
& \quad f_i(x) \leq 0 \quad (i=1,\cdots,m) \\
& \quad A x = b
\end{aligned}
$$


### 4.3 常见凸优化问题类型
| 问题类型 | 目标函数 | 约束条件 | 核心特点 |
|----------|----------|----------|----------|
| 线性规划（LP） | 线性函数：$f_0(x) = c^T x + d$（$c \in \mathbb{R}^n$，$d \in \mathbb{R}$） | 线性不等式+线性等式：$G x \leq h$，$A x = b$ | 可行域是多面体，最优解在顶点处 |
| 二次规划（QP） | 二次凸函数：$f_0(x) = \frac{1}{2} x^T P x + q^T x + r$（$P$半正定） | 线性不等式+线性等式：$G x \leq h$，$A x = b$ | 目标函数是凸函数，可通过数值方法高效求解 |
| 二次约束二次规划（QCQP） | 二次凸函数：$f_0(x) = \frac{1}{2} x^T P_0 x + q_0^T x + r_0$（$P_0$半正定） | 二次凸约束+线性等式：$\frac{1}{2} x^T P_i x + q_i^T x + r_i \leq 0$（$P_i$半正定），$A x = b$ | 约束均为凸集，属于凸优化问题 |
| 半正定规划（SDP） | 线性函数：$f_0(X) = \text{tr}(C X)$（$C, X \in \mathbb{S}^n$，$\mathbb{S}^n$为$n$阶对称矩阵空间） | 线性矩阵不等式+线性等式：$\text{tr}(A_i X) = b_i$，$X \succeq 0$（$X$半正定） | 变量是矩阵，约束为半正定锥，应用于控制、信号处理等领域 |


## 五、对偶问题与最优性条件
### 5.1 拉格朗日函数与对偶函数
#### （1）拉格朗日函数
对标准凸优化问题：  
$$
\begin{aligned}
\underset{x}{\text{minimize}} & \quad f_0(x) \\
\text{subject to} & \quad f_i(x) \leq 0 \quad (i=1,\cdots,m) \\
& \quad h_i(x) = 0 \quad (i=1,\cdots,p)
\end{aligned}
$$
定义**拉格朗日函数**：  
$L(x, \lambda, \nu) = f_0(x) + \sum_{i=1}^m \lambda_i f_i(x) + \sum_{i=1}^p \nu_i h_i(x)$  
其中$\lambda = (\lambda_1, \cdots, \lambda_m) \geq 0$（拉格朗日乘子，对应不等式约束），$\nu = (\nu_1, \cdots, \nu_p)$（拉格朗日乘子，对应等式约束）。

#### （2）对偶函数
对偶函数$g: \mathbb{R}^m \times \mathbb{R}^p \to \mathbb{R}$定义为拉格朗日函数关于$x$的下确界：  
$g(\lambda, \nu) = \inf_{x \in \text{dom}(f_0) \cap \cap \text{dom}(f_i) \cap \cap \text{dom}(h_i)} L(x, \lambda, \nu)$  

**核心性质**：对偶函数$g$是凹函数（无论原问题是否凸），且对任意$\lambda \geq 0$、$\nu$，有$g(\lambda, \nu) \leq p^*$（$p^*$为原问题最优值，即弱对偶性）。


### 5.2 对偶问题
对偶问题的标准形式（最大化对偶函数， subject to 乘子非负）：  
$$
\begin{aligned}
\underset{\lambda, \nu}{\text{maximize}} & \quad g(\lambda, \nu) \\
\text{subject to} & \quad \lambda \geq 0
\end{aligned}
$$

**关键概念**：
- 弱对偶性：对偶问题最优值$d^* \leq$ 原问题最优值$p^*$，对偶间隙为$p^* - d^* \geq 0$。
- 强对偶性：若$d^* = p^*$，则对偶间隙为0，此时原问题与对偶问题最优值相等。
- Slater约束规范：对凸优化问题，若存在严格可行点$x$（满足$f_i(x) < 0$，$h_i(x) = 0$），则强对偶性成立。


### 5.3 KKT最优性条件
对凸优化问题，若强对偶性成立，且$x^*$、$\lambda^*$、$\nu^*$分别为原问题和对偶问题的最优解，则以下条件（KKT条件）成立：
1. **原问题可行**：$f_i(x^*) \leq 0$（$i=1,\cdots,m$），$h_i(x^*) = 0$（$i=1,\cdots,p$）；
2. **对偶问题可行**：$\lambda^* \geq 0$；
3. **互补松弛**：$\lambda_i^* f_i(x^*) = 0$（$i=1,\cdots,m$）（即若$\lambda_i^* > 0$，则$f_i(x^*) = 0$）；
4. **梯度为零**：$\nabla f_0(x^*) + \sum_{i=1}^m \lambda_i^* \nabla f_i(x^*) + \sum_{i=1}^p \nu_i^* \nabla h_i(x^*) = 0$。

**逆命题**：对凸优化问题，若$x^*$满足KKT条件，则$x^*$是原问题的全局最优解。


## 六、凸优化常用算法
### 6.1 一维搜索算法（线搜索）
#### （1）0.618法（黄金分割法）
- **适用场景**：单峰函数（存在$\alpha^* \in [a,b]$，使$f(x)$在$[a,\alpha^*]$递减、在$[\alpha^* ,b]$递增）的一维极小值求解。
- **核心步骤**：
  1. 设第$k$次迭代搜索区间为$[a_k, b_k]$，取两个试探点$\lambda_k = a_k + (1 - 0.618)(b_k - a_k)$，$\mu_k = a_k + 0.618(b_k - a_k)$；
  2. 若$f(\lambda_k) \leq f(\mu_k)$，则新区间为$[a_{k+1}, b_{k+1}] = [a_k, \mu_k]$；
  3. 若$f(\lambda_k) > f(\mu_k)$，则新区间为$[a_{k+1}, b_{k+1}] = [\lambda_k, b_k]$；
  4. 重复步骤1-3，直到区间长度小于阈值$\epsilon$，输出区间中点为近似极小值点。

#### （2）牛顿法（一维）
- **适用场景**：二阶可微函数的一维极小值求解，收敛速度快（二次收敛）。
- **迭代公式**：$x^{(k+1)} = x^{(k)} - \frac{f'(x^{(k)})}{f''(x^{(k)})}$
- **特点**：需计算二阶导数，对初始点敏感（需靠近极小值点）。

#### （3）割线法（一维）
- **适用场景**：无法计算二阶导数时的一维极小值求解（用两点导数近似二阶导数）。
- **迭代公式**：$x^{(k+1)} = x^{(k)} - \frac{x^{(k)} - x^{(k-1)}}{f'(x^{(k)}) - f'(x^{(k-1)})} f'(x^{(k)})$
- **特点**：仅需一阶导数，收敛速度为超线性（小于二次）。


### 6.2 多维优化算法
#### （1）梯度下降法（最速下降法）
- **核心思想**：沿负梯度方向（函数下降最快的方向）迭代更新。
- **迭代步骤**：
  1. 给定初始点$x^{(1)}$，精度阈值$\epsilon$；
  2. 计算负梯度方向$d^{(k)} = -\nabla f(x^{(k)})$；
  3. 线搜索求步长$\lambda_k$（满足$f(x^{(k)} + \lambda_k d^{(k)})$最小）；
  4. 更新$x^{(k+1)} = x^{(k)} + \lambda_k d^{(k)}$；
  5. 若$\|\nabla f(x^{(k+1)})\|_2 \leq \epsilon$，停止迭代；否则返回步骤2。
- **特点**：简单易实现，初期下降快，但后期收敛慢（锯齿状路径）。

#### （2）牛顿法（多维）
- **核心思想**：用二阶Taylor展开近似函数，沿近似函数的极小值方向迭代。
- **迭代公式**：$x^{(k+1)} = x^{(k)} - \left(\nabla^2 f(x^{(k)})\right)^{-1} \nabla f(x^{(k)})$
- **特点**：二次收敛，后期收敛快；但需计算Hessian矩阵及其逆，计算成本高，对初始点敏感。