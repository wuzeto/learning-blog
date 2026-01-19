

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



# 统计



## 概率论与数理统计核心内容



### 三大抽样分布



* **卡方分布** ($\chi^2$分布)

  $\chi^2(n) = \sum_{i=1}^n X_i^2, \quad X_i \sim N(0,1), \quad i.i.d.$

  性质：$E[\chi^2(n)] = n$, $\text{Var}[\chi^2(n)] = 2n$



* **t分布** (学生氏分布)

  $T = \frac{X}{\sqrt{Y/n}}, \quad X \sim N(0,1), \quad Y \sim \chi^2(n), \quad \text{独立}$

  性质：对称分布，当$n \to \infty$时，$t(n) \to N(0,1)$



* **F分布**

  $F = \frac{X/m}{Y/n}, \quad X \sim \chi^2(m), \quad Y \sim \chi^2(n), \quad \text{独立}$

  性质：$F(m,n) = \frac{1}{F(n,m)}$



### 八大统计量



| **符号** | **名称** | **定义** |
|----------|----------|----------|
| $\bar{X}$ | 样本均值 | $\frac{1}{n}\sum_{i=1}^n X_i$ |
| $S^2$ | 样本方差 | $\frac{1}{n-1}\sum_{i=1}^n (X_i - \bar{X})^2$ |
| $S$ | 样本标准差 | $\sqrt{S^2}$ |
| $a_k$ | k阶样本原点矩 | $\frac{1}{n}\sum_{i=1}^n X_i^k$ |
| $A_k$ | k阶样本中心矩 | $\frac{1}{n}\sum_{i=1}^n (X_i - \bar{X})^k$ |
| $X_{(i)}$ | 次序统计量 | 第i小的观测值 |
| $M$ | 样本中位数 | $X_{(\frac{n+1}{2})}$ (n为奇数) |
| $R$ | 样本极差 | $X_{(n)} - X_{(1)}$ |



### 八大概率分布



| **分布** | **记号** | **概率函数/密度** | **期望** | **方差** |
|----------|----------|-------------------|----------|----------|
| 0-1分布 | $B(1,p)$ | $P(X=k)=p^k(1-p)^{1-k}$ | $p$ | $p(1-p)$ |
| 二项分布 | $B(n,p)$ | $P(X=k)=C_n^k p^k(1-p)^{n-k}$ | $np$ | $np(1-p)$ |
| 几何分布 | $G(p)$ | $P(X=k)=(1-p)^{k-1}p$ | $\frac{1}{p}$ | $\frac{1-p}{p^2}$ |
| 泊松分布 | $P(\lambda)$ | $P(X=k)=\frac{\lambda^k}{k!}e^{-\lambda}$ | $\lambda$ | $\lambda$ |
| 均匀分布 | $U[a,b]$ | $f(x)=\frac{1}{b-a}I_{[a,b]}(x)$ | $\frac{a+b}{2}$ | $\frac{(b-a)^2}{12}$ |
| 指数分布 | $E(\beta)$ | $f(x)=\frac{1}{\beta}e^{-x/\beta}$ | $\beta$ | $\beta^2$ |
| 正态分布 | $N(\mu,\sigma^2)$ | $f(x)=\frac{1}{\sqrt{2\pi}\sigma}e^{-\frac{(x-\mu)^2}{2\sigma^2}}$ | $\mu$ | $\sigma^2$ |
| 标准正态 | $N(0,1)$ | $\varphi(x)=\frac{1}{\sqrt{2\pi}}e^{-x^2/2}$ | $0$ | $1$ |



### 三大参数估计方法



* **矩估计法**

  $\text{原理：样本矩} = \text{总体矩}, \quad \frac{1}{n}\sum_{i=1}^n X_i^k = E[X^k]$



* **极大似然估计法**

  $L(\theta) = \prod_{i=1}^n f(x_i;\theta), \quad \hat{\theta}_{MLE} = \arg\max_{\theta} L(\theta)$



* **区间估计**

  $P(\hat{\theta}_1 < \theta < \hat{\theta}_2) = 1 - \alpha$



### 假设检验分类



| **分类** | **子类** | **主要内容** |
|----------|----------|--------------|
| 参数检验 | 单个正态总体 | 均值检验($\sigma^2$已知/未知)，方差检验 |
| 参数检验 | 两个正态总体 | 均值差检验，方差比检验 |
| 非参数检验 | --- | 分布拟合检验，独立性检验，符号检验 |



#### 单个正态总体检验



* **均值检验** ($\sigma^2$已知)：$Z = \frac{\bar{X}-\mu_0}{\sigma/\sqrt{n}} \sim N(0,1)$

* **均值检验** ($\sigma^2$未知)：$T = \frac{\bar{X}-\mu_0}{S/\sqrt{n}} \sim t(n-1)$

* **方差检验**：$\chi^2 = \frac{(n-1)S^2}{\sigma_0^2} \sim \chi^2(n-1)$



#### 两个正态总体检验



* **均值差检验**：$T = \frac{(\bar{X}-\bar{Y})-(\mu_1-\mu_2)}{S_w\sqrt{\frac{1}{n_1}+\frac{1}{n_2}}} \sim t(n_1+n_2-2)$

* **方差比检验**：$F = \frac{S_1^2/\sigma_1^2}{S_2^2/\sigma_2^2} \sim F(n_1-1,n_2-1)$



### 二维分布与复合分布



#### 二维分布关系



| **分布类型** | **定义** | **关系** |
|--------------|----------|----------|
| 联合分布 | $F(x,y) = P(X \leq x, Y \leq y)$ | 基础 |
| 边缘分布 | $F_X(x) = P(X \leq x) = F(x,\infty)$ | 边际化 |
| 条件分布 | $F_{X|Y}(x|y) = P(X \leq x|Y=y)$ | 条件概率 |
| 均匀分布 | $f(x,y) = \frac{1}{S_D}I_D(x,y)$ | 区域$D$上均匀 |



#### 复合分布



| **分布** | **定义** | **性质/分布** |
|----------|----------|----------------|
| $X+Y$ | 和分布 | 卷积公式：$f_{X+Y}(z) = \int f_X(x)f_Y(z-x)dx$ |
| $\max\{X,Y\}$ | 最大值分布 | $F_{\max}(z) = F_X(z)F_Y(z)$ |
| $\min\{X,Y\}$ | 最小值分布 | $F_{\min}(z) = 1 - [1-F_X(z)][1-F_Y(z)]$ |
| Rayleigh分布 | $R = \sqrt{X^2+Y^2}$ | $X,Y \sim N(0,\sigma^2)$，独立 |



#### 重要公式



* **卷积公式**：$f_{X+Y}(z) = \int_{-\infty}^{\infty} f_X(x)f_Y(z-x)dx$

* **瑞利分布密度**：$f_R(r) = \frac{r}{\sigma^2}e^{-r^2/(2\sigma^2)}, r \geq 0$

* **次序统计量联合分布**：$f(x_{(1)},\cdots,x_{(n)}) = n!\prod_{i=1}^n f(x_i)$