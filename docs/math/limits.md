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



## 函数极限定理



**函数夹逼定理**

若在点 $x_0$ 的某去心邻域内，$f(x) \le g(x) \le h(x)$ 且 $\lim_{x \to x_0} f(x) = \lim_{x \to x_0} h(x) = L$，则 $\lim_{x \to x_0} g(x) = L$。



**Heine 定理**

$\lim_{x \to x_0} f(x) = L \iff \forall \{x_n\}, x_n \to x_0, x_n \ne x_0: \lim_{n \to \infty} f(x_n) = L$。



**函数柯西准则**

$\lim_{x \to x_0} f(x)$ 存在的充要条件是：

$\forall \varepsilon > 0, \exists \delta > 0, \forall x', x'' \in \mathring{U}(x_0, \delta): |f(x') - f(x'')| < \varepsilon$。



## 重要常数与极限



**Euler 常数**

$\gamma = \lim_{n \to \infty} \left( \sum_{k=1}^n \frac{1}{k} - \ln n \right) \approx 0.5772156649\dots$



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



