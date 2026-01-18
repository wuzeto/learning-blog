

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





# 概率论



## 集合运算定律



### 基本运算定律



**交换律**

$\begin{aligned}

A \cup B &= B \cup A \\

A \cap B &= B \cap A

\end{aligned}$



**结合律**

$\begin{aligned}

(A \cup B) \cup C &= A \cup (B \cup C) \\

(A \cap B) \cap C &= A \cap (B \cap C)

\end{aligned}$



**分配律**

$\begin{aligned}

A \cup (B \cap C) &= (A \cup B) \cap (A \cup C) \\

A \cap (B \cup C) &= (A \cap B) \cup (A \cap C)

\end{aligned}$



**De Morgan 定律**

$\begin{aligned}

\overline{A \cup B} &= \overline{A} \cap \overline{B} \\

\overline{A \cap B} &= \overline{A} \cup \overline{B}

\end{aligned}$



推广到 $n$ 个事件：

$\begin{aligned}

\overline{\bigcup_{i=1}^n A_i} &= \bigcap_{i=1}^n \overline{A_i} \\

\overline{\bigcap_{i=1}^n A_i} &= \bigcup_{i=1}^n \overline{A_i}

\end{aligned}$



## 概率基本公式



### 加法公式



**概率加法公式**

对于任意两个事件 $A, B$：

$P(A \cup B) = P(A) + P(B) - P(A \cap B)$

特别地，若 $A$ 与 $B$ 互斥（$A \cap B = \emptyset$），则：

$P(A \cup B) = P(A) + P(B)$



**三个事件的加法公式**

$\begin{aligned}

P(A \cup B \cup C) = & P(A) + P(B) + P(C) \\

& - P(A \cap B) - P(A \cap C) - P(B \cap C) \\

& + P(A \cap B \cap C)

\end{aligned}$



**一般加法公式（容斥原理）**

$P\left( \bigcup_{i=1}^n A_i \right) = \sum_{i=1}^n P(A_i) - \sum_{1 \leq i < j \leq n} P(A_i \cap A_j) + \cdots + (-1)^{n-1} P\left( \bigcap_{i=1}^n A_i \right)$



### 条件概率与乘法公式



**条件概率**

在事件 $B$ 发生的条件下，事件 $A$ 发生的概率为：

$P(A|B) = \frac{P(A \cap B)}{P(B)}, \quad \text{其中 } P(B) > 0$



**乘法公式**

$\begin{aligned}

P(A \cap B) &= P(A) \cdot P(B|A) = P(B) \cdot P(A|B) \\

P(A \cap B \cap C) &= P(A) \cdot P(B|A) \cdot P(C|A \cap B) \\

P\left( \bigcap_{i=1}^n A_i \right) &= P(A_1) \cdot P(A_2|A_1) \cdot P(A_3|A_1 \cap A_2) \cdots P(A_n|A_1 \cap \cdots \cap A_{n-1})

\end{aligned}$



**全概率公式**

设 $B_1, B_2, \dots, B_n$ 是样本空间 $\Omega$ 的一个划分（即 $B_i \cap B_j = \emptyset$ 且 $\bigcup_{i=1}^n B_i = \Omega$），且 $P(B_i) > 0$，则对任意事件 $A$：

$P(A) = \sum_{i=1}^n P(B_i) \cdot P(A|B_i)$



**Bayes 公式**

在相同条件下：

$P(B_i|A) = \frac{P(B_i) \cdot P(A|B_i)}{\sum_{j=1}^n P(B_j) \cdot P(A|B_j)} = \frac{P(B_i) \cdot P(A|B_i)}{P(A)}$



> **示例：疾病检测问题**

> 某种疾病的发病率为 $1\%$，检测准确率为 $99\%$（即患者检测阳性的概率为 $99\%$，健康人检测阴性的概率为 $99\%$）。若某人检测结果为阳性，求他确实患病的概率。

> 

> 解：设 $A$ = "患病"，$B$ = "检测阳性"

> $\begin{aligned}

> P(A) &= 0.01, \quad P(\overline{A}) = 0.99 \\

> P(B|A) &= 0.99, \quad P(B|\overline{A}) = 0.01 \\

> P(A|B) &= \frac{0.01 \times 0.99}{0.01 \times 0.99 + 0.99 \times 0.01} = \frac{0.0099}{0.0198} = 0.5

> \end{aligned}$



## 重要概率分布



### Bernoulli 分布与二项分布



**Bernoulli 分布（两点分布）**

若随机变量 $X$ 只取 0 和 1 两个值，且：

$P(X = 1) = p, \quad P(X = 0) = 1 - p, \quad 0 \leq p \leq 1$

则称 $X$ 服从参数为 $p$ 的 Bernoulli 分布，记为 $X \sim \text{Bernoulli}(p)$。



期望和方差：

$E(X) = p, \quad \text{Var}(X) = p(1-p)$



**二项分布**

$n$ 重 Bernoulli 试验中成功次数 $X$ 的分布：

$P(X = k) = \binom{n}{k} p^k (1-p)^{n-k}, \quad k = 0, 1, 2, \dots, n$

记为 $X \sim B(n, p)$。



期望和方差：

$E(X) = np, \quad \text{Var}(X) = np(1-p)$



**二项分布的可加性**

若 $X \sim B(n, p)$，$Y \sim B(m, p)$，且 $X$ 与 $Y$ 独立，则：

$X + Y \sim B(n + m, p)$



### Poisson 分布



**Poisson 分布**

若随机变量 $X$ 的概率分布为：

$P(X = k) = \frac{\lambda^k e^{-\lambda}}{k!}, \quad k = 0, 1, 2, \dots, \quad \lambda > 0$

则称 $X$ 服从参数为 $\lambda$ 的 Poisson 分布，记为 $X \sim \text{Poisson}(\lambda)$。



期望和方差：

$E(X) = \lambda, \quad \text{Var}(X) = \lambda$



**Poisson 定理**

在 $n$ 重 Bernoulli 试验中，事件 $A$ 在每次试验中发生的概率为 $p_n$（与 $n$ 有关），如果 $\lim_{n \to \infty} np_n = \lambda > 0$，则对任意固定的 $k$：

$\lim_{n \to \infty} \binom{n}{k} p_n^k (1-p_n)^{n-k} = \frac{\lambda^k e^{-\lambda}}{k!}$



**Poisson 分布的可加性**

若 $X \sim \text{Poisson}(\lambda_1)$，$Y \sim \text{Poisson}(\lambda_2)$，且 $X$ 与 $Y$ 独立，则：

$X + Y \sim \text{Poisson}(\lambda_1 + \lambda_2)$



> **示例：二项分布的 Poisson 近似**

> 某工厂生产的产品中不合格品率为 $0.005$，求在 1000 件产品中恰好有 4 件不合格品的概率。

> 

> 精确解（二项分布）：

> $P = \binom{1000}{4} (0.005)^4 (0.995)^{996}$

> Poisson 近似（$\lambda = 1000 \times 0.005 = 5$）：

> $P \approx \frac{5^4 e^{-5}}{4!} = \frac{625 \times e^{-5}}{24} \approx 0.1755$



## 独立性



**事件的独立性**

两个事件 $A$ 和 $B$ 称为独立的，如果：

$P(A \cap B) = P(A) \cdot P(B)$

$n$ 个事件 $A_1, A_2, \dots, A_n$ 称为相互独立的，如果对任意 $1 \leq i_1 < i_2 < \cdots < i_k \leq n$：

$P(A_{i_1} \cap A_{i_2} \cap \cdots \cap A_{i_k}) = P(A_{i_1}) \cdot P(A_{i_2}) \cdots P(A_{i_k})$



**独立性的性质**

若 $A$ 与 $B$ 独立，则：

* $A$ 与 $\overline{B}$ 独立

* $\overline{A}$ 与 $B$ 独立

* $\overline{A}$ 与 $\overline{B}$ 独立



## 重要公式总结



### 概率基本公式



* **加法公式**：$P(A \cup B) = P(A) + P(B) - P(A \cap B)$

* **条件概率**：$P(A|B) = \dfrac{P(A \cap B)}{P(B)}$

* **乘法公式**：$P(A \cap B) = P(A) \cdot P(B|A)$

* **全概率公式**：$P(A) = \sum P(B_i) P(A|B_i)$

* **Bayes 公式**：$P(B_i|A) = \dfrac{P(B_i) P(A|B_i)}{\sum P(B_j) P(A|B_j)}$



### 分布公式



* **Bernoulli 分布**：$P(X=k) = \begin{cases} p, & k=1 \\ 1-p, & k=0 \end{cases}$

* **二项分布**：$P(X=k) = \binom{n}{k} p^k (1-p)^{n-k}$

* **Poisson 分布**：$P(X=k) = \dfrac{\lambda^k e^{-\lambda}}{k!}$



### 数字特征



* **Bernoulli**：$E(X) = p$, $\text{Var}(X) = p(1-p)$

* **二项分布**：$E(X) = np$, $\text{Var}(X) = np(1-p)$

* **Poisson**：$E(X) = \lambda$, $\text{Var}(X) = \lambda$



### 极限定理



* **Poisson 定理**：二项分布以 Poisson 分布为极限

* 当 $n$ 很大，$p$ 很小时，$B(n,p) \approx \text{Poisson}(np)$

* 实用条件：$n \geq 20$, $p \leq 0.05$ 或 $n \geq 100$, $np \leq 10$



> **示例：综合例题**

> 某系统由 3 个元件组成，元件正常工作的概率分别为 $0.9, 0.8, 0.7$，且相互独立。求：

> 1. 系统正常工作的概率（串联）

> 2. 系统正常工作的概率（并联）

> 3. 系统正常工作的概率（2/3 表决系统）

> 

> 解：

> 1. 串联：$P = 0.9 \times 0.8 \times 0.7 = 0.504$

> 2. 并联：$P = 1 - (1-0.9)(1-0.8)(1-0.7) = 1 - 0.006 = 0.994$

> 3. 2/3 表决：$P = 0.9\times0.8\times0.7 + 0.9\times0.8\times0.3 + 0.9\times0.2\times0.7 + 0.1\times0.8\times0.7 = 0.902$



## 大数定律



### Chebyshev 不等式



**Chebyshev 不等式**

设随机变量 $X$ 的数学期望 $E(X) = \mu$ 和方差 $\text{Var}(X) = \sigma^2$ 存在，则对任意 $\varepsilon > 0$：

$P(|X - \mu| \geq \varepsilon) \leq \frac{\sigma^2}{\varepsilon^2}$

等价形式：

$P(|X - \mu| < \varepsilon) \geq 1 - \frac{\sigma^2}{\varepsilon^2}$



**证明**

考虑随机变量 $Y = (X - \mu)^2$，则 $E(Y) = \sigma^2$。由 Markov 不等式：

$P(|X - \mu| \geq \varepsilon) = P((X - \mu)^2 \geq \varepsilon^2) \leq \frac{E[(X - \mu)^2]}{\varepsilon^2} = \frac{\sigma^2}{\varepsilon^2}$



**Markov 不等式**

设 $X$ 是非负随机变量，则对任意 $\varepsilon > 0$：

$P(X \geq \varepsilon) \leq \frac{E(X)}{\varepsilon}$



> **示例**

> 已知某随机变量 $X$ 的期望为 10，方差为 4，估计 $P(|X-10| \geq 5)$。

> 

> 解：由 Chebyshev 不等式：

> $P(|X-10| \geq 5) \leq \frac{4}{25} = 0.16$

> 所以 $P(|X-10| < 5) \geq 0.84$。



## 大数定律



### Bernoulli 大数定律



**Bernoulli 大数定律**

设 $n_A$ 是 $n$ 重 Bernoulli 试验中事件 $A$ 发生的次数，$p$ 是每次试验中 $A$ 发生的概率，则对任意 $\varepsilon > 0$：

$\lim_{n \to \infty} P\left( \left| \frac{n_A}{n} - p \right| < \varepsilon \right) = 1$

即频率 $\frac{n_A}{n}$ 依概率收敛于概率 $p$。



**证明**

由于 $n_A \sim B(n, p)$，有 $E\left( \frac{n_A}{n} \right) = p$，$\text{Var}\left( \frac{n_A}{n} \right) = \frac{p(1-p)}{n}$。

由 Chebyshev 不等式：

$P\left( \left| \frac{n_A}{n} - p \right| \geq \varepsilon \right) \leq \frac{p(1-p)}{n\varepsilon^2}$

当 $n \to \infty$ 时，右边趋于 0，故得证。



### Chebyshev 大数定律



**Chebyshev 大数定律**

设 $X_1, X_2, \dots, X_n, \dots$ 是相互独立的随机变量序列，各有数学期望 $E(X_k) = \mu_k$ 和方差 $\text{Var}(X_k) = \sigma_k^2$，且方差一致有界：$\sigma_k^2 \leq C$（$C$ 为常数）。则对任意 $\varepsilon > 0$：

$\lim_{n \to \infty} P\left( \left| \frac{1}{n} \sum_{k=1}^n X_k - \frac{1}{n} \sum_{k=1}^n \mu_k \right| < \varepsilon \right) = 1$



**证明**

令 $Y_n = \frac{1}{n} \sum_{k=1}^n X_k$，则：

$E(Y_n) = \frac{1}{n} \sum_{k=1}^n \mu_k, \quad \text{Var}(Y_n) = \frac{1}{n^2} \sum_{k=1}^n \sigma_k^2 \leq \frac{C}{n}$

由 Chebyshev 不等式：

$P\left( \left| Y_n - E(Y_n) \right| \geq \varepsilon \right) \leq \frac{\text{Var}(Y_n)}{\varepsilon^2} \leq \frac{C}{n\varepsilon^2} \to 0$



### Khinchin 大数定律



**Khinchin 大数定律**

设 $X_1, X_2, \dots, X_n, \dots$ 是独立同分布的随机变量序列，且数学期望 $E(X_k) = \mu$ 存在，则对任意 $\varepsilon > 0$：

$\lim_{n \to \infty} P\left( \left| \frac{1}{n} \sum_{k=1}^n X_k - \mu \right| < \varepsilon \right) = 1$

即样本均值 $\frac{1}{n} \sum_{k=1}^n X_k$ 依概率收敛于总体均值 $\mu$。



**证明**

此定理的证明需要特征函数工具，比 Chebyshev 大数定律条件更弱（不要求方差存在）。



**大数定律的对比**

* **Bernoulli**：针对 Bernoulli 试验，要求方差存在

* **Chebyshev**：针对独立变量，要求方差一致有界

* **Khinchin**：针对独立同分布，只要求期望存在



## 中心极限定理



### 独立同分布情形



**独立同分布中心极限定理 (Lévy-Lindeberg)**

设 $X_1, X_2, \dots, X_n, \dots$ 是独立同分布的随机变量序列，$E(X_k) = \mu$，$\text{Var}(X_k) = \sigma^2 > 0$，则对任意实数 $x$：

$\lim_{n \to \infty} P\left( \frac{\sum_{k=1}^n X_k - n\mu}{\sigma\sqrt{n}} \leq x \right) = \Phi(x)$

其中 $\Phi(x)$ 是标准正态分布函数：

$\Phi(x) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^x e^{-t^2/2} dt$



**证明思路**

使用特征函数方法。设 $\varphi(t)$ 是 $X_k - \mu$ 的特征函数，则 $\frac{\sum_{k=1}^n (X_k - \mu)}{\sigma\sqrt{n}}$ 的特征函数为：

$\left[ \varphi\left( \frac{t}{\sigma\sqrt{n}} \right) \right]^n$

利用 Taylor 展开和极限定理可证明其收敛于标准正态分布的特征函数 $e^{-t^2/2}$。



### Lyapunov 中心极限定理



**Lyapunov 中心极限定理**

设 $X_1, X_2, \dots, X_n, \dots$ 是相互独立的随机变量序列，$E(X_k) = \mu_k$，$\text{Var}(X_k) = \sigma_k^2 > 0$，记：

$B_n^2 = \sum_{k=1}^n \sigma_k^2$

若存在 $\delta > 0$ 使得 Lyapunov 条件成立：

$\lim_{n \to \infty} \frac{1}{B_n^{2+\delta}} \sum_{k=1}^n E(|X_k - \mu_k|^{2+\delta}) = 0$

则对任意实数 $x$：

$\lim_{n \to \infty} P\left( \frac{\sum_{k=1}^n X_k - \sum_{k=1}^n \mu_k}{B_n} \leq x \right) = \Phi(x)$



**证明思路**

使用特征函数方法和 Taylor 展开，Lyapunov 条件保证了高阶矩的影响可以忽略。



### de Moivre-Laplace 定理



**de Moivre-Laplace 定理**

设 $n_A$ 是 $n$ 重 Bernoulli 试验中事件 $A$ 发生的次数，$p$ 是每次试验中 $A$ 发生的概率，则对任意实数 $a < b$：

$\lim_{n \to \infty} P\left( a \leq \frac{n_A - np}{\sqrt{np(1-p)}} \leq b \right) = \Phi(b) - \Phi(a)$



**证明**

这是独立同分布中心极限定理的特例，因为 $n_A = \sum_{k=1}^n X_k$，其中 $X_k \sim \text{Bernoulli}(p)$。



**二项分布的正态近似**

当 $n$ 很大时，二项分布 $B(n, p)$ 可用正态分布 $N(np, np(1-p))$ 近似：

$P(a \leq n_A \leq b) \approx \Phi\left( \frac{b + 0.5 - np}{\sqrt{np(1-p)}} \right) - \Phi\left( \frac{a - 0.5 - np}{\sqrt{np(1-p)}} \right)$

其中 $0.5$ 是连续性校正。



## 应用与例题



### 大数定律的应用



> **示例：Monte Carlo 方法**

> 用频率估计概率：进行 $n$ 次独立试验，用事件发生的频率估计其概率。由 Bernoulli 大数定律，当 $n$ 充分大时，估计精度很高。



> **示例：样本均值估计总体均值**

> 设 $X_1, X_2, \dots, X_n$ 是来自某总体的样本，则样本均值 $\bar{X} = \frac{1}{n} \sum_{i=1}^n X_i$ 是总体均值 $\mu$ 的相合估计。



### 中心极限定理的应用



> **示例：产品质量控制**

> 某生产线生产的产品不合格率为 $0.01$，求在 10000 件产品中不合格品数在 90 到 110 之间的概率。

> 

> 解：不合格品数 $X \sim B(10000, 0.01)$，由 de Moivre-Laplace 定理：

> $\begin{aligned}

> P(90 \leq X \leq 110) &\approx \Phi\left( \frac{110 + 0.5 - 100}{\sqrt{99}} \right) - \Phi\left( \frac{90 - 0.5 - 100}{\sqrt{99}} \right) \\

> &= \Phi(1.055) - \Phi(-1.055) = 2\Phi(1.055) - 1 \approx 0.709

> \end{aligned}$



> **示例：误差估计**

> 测量某物理量 $n$ 次，得到独立同分布的观测值 $X_1, \dots, X_n$，$E(X_i) = \mu$，$\text{Var}(X_i) = \sigma^2$。求样本均值与真值的误差小于 $\varepsilon$ 的概率。

> 

> 解：由中心极限定理：

> $P(|\bar{X} - \mu| < \varepsilon) \approx 2\Phi\left( \frac{\varepsilon\sqrt{n}}{\sigma} \right) - 1$



## 定理关系总结



### 大数定律的层次



* **最弱条件**：Khinchin 大数定律（独立同分布，期望存在）

* **中等条件**：Chebyshev 大数定律（独立，方差一致有界）

* **特殊情形**：Bernoulli 大数定律（Bernoulli 试验）



### 中心极限定理的层次



* **最基本**：独立同分布中心极限定理

* **更一般**：Lyapunov 中心极限定理（不同分布，满足 Lyapunov 条件）

* **历史最早**：de Moivre-Laplace 定理（二项分布的正态近似）



### 重要不等式与极限



* **Markov 不等式**：$P(X \geq \varepsilon) \leq \frac{E(X)}{\varepsilon}$（$X \geq 0$）

* **Chebyshev 不等式**：$P(|X-\mu| \geq \varepsilon) \leq \frac{\sigma^2}{\varepsilon^2}$

* **大数定律**：样本均值收敛于总体均值

* **中心极限定理**：标准化和收敛于正态分布



> **示例：综合应用**

> 某保险公司有 10000 个投保人，每人年理赔金额 $X_i$ 独立同分布，$E(X_i) = 280$ 元，$\sigma(X_i) = 100$ 元。求：

> 1. 年总理赔金额超过 285 万元的概率

> 2. 设保费为 $a$ 元，要使公司亏损概率小于 $0.01$，求 $a$

> 

> 解：总理赔金额 $S = \sum_{i=1}^{10000} X_i$

> 1. $E(S) = 2800000$，$\text{Var}(S) = 10000 \times 10000 = 10^8$

>    $P(S > 2850000) = 1 - \Phi\left( \frac{2850000 - 2800000}{10000} \right) = 1 - \Phi(5) \approx 2.87 \times 10^{-7}$

> 2. 亏损条件：$S > 10000a$

>    $P(S > 10000a) = 1 - \Phi\left( \frac{10000a - 2800000}{10000} \right) < 0.01$

>    $\Phi^{-1}(0.99) \approx 2.33$，解得 $a > 280 + 2.33 = 282.33$ 元。