<script>

window.MathJax = {

  tex: {

    inlineMath: [['$', '$'], ['\\(', '\\)']],

    displayMath: [['$$', '$$'], ['\$$
', '\$$
']],

    macros: {

      oiint: "{\\mathchoice{\\mkern-18mu\\iint}{\\mkern-12mu\\iint}{\\mkern-13mu\\iint}{\\mkern-12mu\\iint}}"

    }

  }

};

</script>

# 高中理科数学公式汇总

## §01 集合与简易逻辑

1. **元素与集合的关系**  
   $$
   x \in A \Leftrightarrow x \notin C_U A,\quad x \in C_U A \Leftrightarrow x \notin A.
   $$


2. **德摩根公式**  
   $$
   C_U(A \cap B) = C_U A \cup C_U B,\quad C_U(A \cup B) = C_U A \cap C_U B.
   $$


3. **包含关系**  
   $$
   A \cap B = A \Leftrightarrow A \cup B = B \Leftrightarrow A \subseteq B \Leftrightarrow C_U B \subseteq C_U A
   $$

   $$
   \Leftrightarrow A \cap C_U B = \varnothing \Leftrightarrow C_U A \cup B = \mathbb{R}.
   $$


4. **容斥原理**  
   $$
   \text{card}(A \cup B) = \text{card}A + \text{card}B - \text{card}(A \cap B).
   $$


5. 集合 \(\{a_1, a_2, \dots, a_n\}\) 的子集个数共有 \(2^n\) 个；真子集有 \(2^n - 1\) 个；非空子集有 \(2^n - 1\) 个；非空的真子集有 \(2^n - 2\) 个。


6. **二次函数的解析式的三种形式**  
   (1) 一般式 \(f(x) = ax^2 + bx + c \ (a \neq 0)\)  
   (2) 顶点式 \(f(x) = a(x - h)^2 + k \ (a \neq 0)\)  
   (3) 零点式 \(f(x) = a(x - x_1)(x - x_2) \ (a \neq 0)\)

7. **解连不等式 \(N < f(x) < M\) 的转化形式**  
   $$
   \begin{aligned}
   N &< f(x) < M \\
   &\Leftrightarrow [f(x) - M][f(x) - N] < 0 \\
   &\Leftrightarrow \left| f(x) - \frac{M+N}{2} \right| < \frac{M-N}{2} \\
   &\Leftrightarrow \frac{f(x)-N}{M-f(x)} > 0 \\
   &\Leftrightarrow \frac{1}{f(x)-N} > \frac{1}{M-N}.
   \end{aligned}
   $$


8. **方程 \(f(x)=0\) 在 \((k_1,k_2)\) 上有且仅有一个实根**  
   与 \(f(k_1)f(k_2)<0\) 不等价，前者是后者的必要不充分条件。特别地，方程 \(ax^2+bx+c=0 \ (a\neq0)\) 有且仅有一个实根在 \((k_1,k_2)\) 内，等价于  
   $$
   f(k_1)f(k_2)<0,
   $$

   或  
   $$
   f(k_1)=0 \ \text{且} \ k_1 < -\frac{b}{2a} < \frac{k_1+k_2}{2},
   $$

   或  
   $$
   f(k_2)=0 \ \text{且} \ \frac{k_1+k_2}{2} < -\frac{b}{2a} < k_2.
   $$


9. **闭区间上二次函数的最值**  
   二次函数 \(f(x)=ax^2+bx+c \ (a\neq0)\) 在闭区间 \([p,q]\) 上的最值只能在 \(x=-\frac{b}{2a}\) 处及区间端点取得：  
   - 当 \(a>0\) 时，若 \(x=-\frac{b}{2a} \in [p,q]\)，则 \(f(x)_{\min}=f(-\frac{b}{2a})\)，\(f(x)_{\max}=\max\{f(p),f(q)\}\)；若 \(x=-\frac{b}{2a} \notin [p,q]\)，则 \(f(x)_{\max}=\max\{f(p),f(q)\}\)，\(f(x)_{\min}=\min\{f(p),f(q)\}\)。
  
   - 当 \(a<0\) 时，若 \(x=-\frac{b}{2a} \in [p,q]\)，则 \(f(x)_{\min}=\min\{f(p),f(q)\}\)；若 \(x=-\frac{b}{2a} \notin [p,q]\)，则 \(f(x)_{\max}=\max\{f(p),f(q)\}\)，\(f(x)_{\min}=\min\{f(p),f(q)\}\)。


10. **一元二次方程的实根分布**  
    依据：若 \(f(m)f(n)<0\)，则方程 \(f(x)=0\) 在区间 \((m,n)\) 内至少有一个实根。
  
    设 \(f(x)=x^2+px+q\)，则  
    (1) 方程在区间 \((m,+\infty)\) 内有根的充要条件为 \(f(m)=0\) 或  
        $$
        \begin{cases}
        p^2-4q \geq 0, \\
        -\frac{p}{2} > m.
        \end{cases}
        $$
  
    (2) 方程在区间 \((m,n)\) 内有根的充要条件为 \(f(m)f(n)<0\) 或  
        $$
        \begin{cases}
        f(m)>0,p^2-4q \geq 0, \\
        m < -\frac{p}{2} < n
        \end{cases}
        $$
        或  
        $$
        \begin{cases}
        f(m)=0, \\
        f(n)>0.
        \end{cases}
        $$
  
    (3) 方程在区间 \((-\infty, n)\) 内有根的充要条件为 \(f(m)<0\) 或  
        $$
        \begin{cases}
        p^2-4q \geq 0, \\
        -\frac{p}{2} < m.
        \end{cases}
        $$


11. **定区间上含参数的二次不等式恒成立的条件**  
    (1) 在给定区间 \((-\infty,+\infty)\) 的子区间 \(L\)（形如 \([\alpha,\beta],\ (-\infty,\beta],\ [\alpha,+\infty)\) 等）上含参数的二次不等式 \(f(x,t)\geq 0\)（\(t\) 为参数）恒成立的充要条件是 \(f(x,t)_{\min} \geq 0 \ (x\in L)\)。
  
    (2) 在给定区间 \((-\infty,+\infty)\) 的子区间上含参数的二次不等式 \(f(x,t)\geq 0\)（\(t\) 为参数）恒成立的充要条件是 \(f(x,t)_{\max} \leq 0 \ (x\notin L)\)。
  
    (3) \(f(x)=ax^4+bx^2+c>0\) 恒成立的充要条件是  
        $$
        \begin{cases}
        a \geq 0, \\
        b \geq 0, \\
        c > 0,
        \end{cases}
        \quad \text{或} \quad
        \begin{cases}
        a < 0, \\
        b^2-4ac < 0, \\
        c > 0.
        \end{cases}
        $$


12. **真值表**

    | p | q | 非 p | p 或 q | p 且 q |
    |---|---|------|--------|--------|
    | 真 | 真 | 假   | 真     | 真     |
    | 真 | 假 | 假   | 真     | 假     |
    | 假 | 真 | 真   | 真     | 假     |
    | 假 | 假 | 真   | 假     | 假     |

13. **常见结论的否定形式**

    | 原结论 | 反设词 | 原结论 | 反设词 |
    |--------|--------|--------|--------|
    | 是 | 不是 | 至少有一个 | 一个也没有 |
    | 都是 | 不都是 | 至多有一个 | 至少有两个 |
    | 大于 | 不大于 | 至少有 \(n\) 个 | 至多有 \(n-1\) 个 |
    | 小于 | 不小于 | 至多有 \(n\) 个 | 至少有 \(n+1\) 个 |
    | 对所有 \(x\) 成立 | 存在某 \(x\) 不成立 | \(p\) 或 \(q\) | \(\lnot p\) 且 \(\lnot q\) |
    | 对任何 \(x\) 不成立 | 存在某 \(x\) 成立 | \(p\) 且 \(q\) | \(\lnot p\) 或 \(\lnot q\) |

14. **四种命题的相互关系**  
    原命题与逆命题互逆，与否命题互否，与逆否命题互为逆否；  
    逆命题与原命题互逆，与逆否命题互否，与否命题互为逆否；  
    否命题与原命题互否，与逆命题互为逆否，与逆否命题互逆；  
    逆否命题与逆命题互否，与否命题互逆，与原命题互为逆否。


15. **充要条件**  
    (1) 充分条件：若 \(p \Rightarrow q\)，则 \(p\) 是 \(q\) 的充分条件。
  
    (2) 必要条件：若 \(q \Rightarrow p\)，则 \(p\) 是 \(q\) 的必要条件。
  
    (3) 充要条件：若 \(p \Rightarrow q\)，且 \(q \Rightarrow p\)，则 \(p\) 是 \(q\) 的充要条件。
  
    注：如果甲是乙的充分条件，则乙是甲的必要条件；反之亦然。


---

## §02 函数

16. **函数的单调性**  
    (1) 设 \(x_1, x_2 \in [a,b],\ x_1 \neq x_2\)，那么  
        $$
        (x_1-x_2)[f(x_1)-f(x_2)] > 0 \Leftrightarrow \frac{f(x_1)-f(x_2)}{x_1-x_2} > 0 \Leftrightarrow f(x) \text{ 在 } [a,b] \text{ 上单调递增};
        $$
        $$
        (x_1-x_2)[f(x_1)-f(x_2)] < 0 \Leftrightarrow \frac{f(x_1)-f(x_2)}{x_1-x_2} < 0 \Leftrightarrow f(x) \text{ 在 } [a,b] \text{ 上单调递减}.
        $$

    (2) 设函数 \(y=f(x)\) 在某个区间内可导，若 \(f'(x)>0\)，则 \(f(x)\) 为增函数；若 \(f'(x)<0\)，则 \(f(x)\) 为减函数。


17. **复合函数的单调性**  
    如果函数 \(f(x)\) 和 \(g(x)\) 都是减函数，则在公共定义域内，和函数 \(f(x)+g(x)\) 也是减函数；  
    如果函数 \(y=f(u)\) 和 \(u=g(x)\) 在其对应的定义域上都是减函数，则复合函数 \(y=f[g(x)]\) 是增函数。


18. **奇偶函数的图象特征**  
    奇函数的图象关于原点对称，偶函数的图象关于 \(y\) 轴对称；反过来，如果一个函数的图象关于原点对称，那么这个函数是奇函数；如果一个函数的图象关于 \(y\) 轴对称，那么这个函数是偶函数。


19. **偶函数的性质**  
    若函数 \(y=f(x)\) 是偶函数，则 \(f(x+a)=f(-x-a)\)；  
    若函数 \(y=f(x+a)\) 是偶函数，则 \(f(x+a)=f(-x+a)\)。


20. **函数对称轴**  
    对于函数 \(y=f(x)\ (x\in\mathbb{R})\)，\(f(x+a)=f(b-x)\) 恒成立，则函数 \(f(x)\) 的对称轴为 \(x=\frac{a+b}{2}\)；  
    两个函数 \(y=f(x+a)\) 与 \(y=f(b-x)\) 的图象关于直线 \(x=\frac{a+b}{2}\) 对称。


21. **函数的对称中心与周期性**  
    若 \(f(x)=-f(-x+a)\)，则函数 \(y=f(x)\) 的图象关于点 \(\left(\frac{a}{2},0\right)\) 对称；  
    若 \(f(x)=-f(x+a)\)，则函数 \(y=f(x)\) 为周期为 \(2a\) 的周期函数。


22. **多项式函数的奇偶性**  
    多项式函数 \(P(x)=a_n x^n + a_{n-1} x^{n-1} + \dots + a_0\) 是奇函数 \(\Leftrightarrow\) \(P(x)\) 的偶次项（即奇数项）的系数全为零；  
    多项式函数 \(P(x)\) 是偶函数 \(\Leftrightarrow\) \(P(x)\) 的奇次项（即偶数项）的系数全为零。


23. **函数图象的对称性**  
    (1) 函数 \(y=f(x)\) 的图象关于直线 \(x=a\) 对称  
        \(\Leftrightarrow f(a+x)=f(a-x) \Leftrightarrow f(2a-x)=f(x)\)。
  
    (2) 函数 \(y=f(x)\) 的图象关于直线 \(x=\frac{a+b}{2}\) 对称  
        \(\Leftrightarrow f(a+mx)=f(b-mx) \Leftrightarrow f(a+b-mx)=f(mx)\)。


24. **两个函数图象的对称性**  
    (1) 函数 \(y=f(x)\) 与函数 \(y=f(-x)\) 的图象关于直线 \(x=0\)（即 \(y\) 轴）对称。
  
    (2) 函数 \(y=f(mx-a)\) 与函数 \(y=f(b-mx)\) 的图象关于直线 \(x=\frac{a+b}{2m}\) 对称。
  
    (3) 函数 \(y=f(x)\) 与 \(y=f^{-1}(x)\) 的图象关于直线 \(y=x\) 对称。


25. **图象平移**  
    若将函数 \(y=f(x)\) 的图象右移 \(a\)、上移 \(b\) 个单位，得到函数 \(y=f(x-a)+b\) 的图象；  
    若将曲线 \(f(x,y)=0\) 的图象右移 \(a\)、上移 \(b\) 个单位，得到曲线 \(f(x-a,y-b)=0\) 的图象。


26. **反函数关系**  
    $$
    f(a)=b \Leftrightarrow f^{-1}(b)=a.
    $$


27. **反函数的求法**  
    若函数 \(y=f(kx+b)\) 存在反函数，则其反函数为 \(y=\frac{1}{k}[f^{-1}(x)-b]\)，而不是 \(y=f^{-1}(kx+b)\)；而函数 \(y=f^{-1}(kx+b)\) 是 \(y=\frac{1}{k}[f(x)-b]\) 的反函数。


28. **常见的函数方程**  
    (1) 正比例函数 \(f(x)=cx\)：\(f(x+y)=f(x)+f(y),\ f(1)=c\)。
  
    (2) 指数函数 \(f(x)=a^x\)：\(f(x+y)=f(x)f(y),\ f(1)=a\neq0\)。
  
    (3) 对数函数 \(f(x)=\log_a x\)：\(f(xy)=f(x)+f(y),\ f(a)=1\ (a>0,\ a\neq1)\)。
  
    (4) 幂函数 \(f(x)=x^\alpha\)：\(f(xy)=f(x)f(y),\ f(1)=\alpha\)。
  
    (5) 余弦函数 \(f(x)=\cos x\)，正弦函数 \(g(x)=\sin x\)：  
        \(f(x-y)=f(x)f(y)+g(x)g(y),\ f(0)=1,\ \lim_{x\to0}\frac{g(x)}{x}=1\)。


29. **函数方程的周期（约定 \(a>0\)）**  
    (1) \(f(x)=f(x+a)\)，则 \(f(x)\) 的周期 \(T=a\)。
  
    (2) \(f(x+a)=-f(x)\) 或 \(f(x+a)=\frac{1}{f(x)}\ (f(x)\neq0)\) 或 \(f(x+a)=-\frac{1}{f(x)}\ (f(x)\neq0)\)，或 \(\frac{1}{2}+\sqrt{f(x)-f^2(x)}=f(x+a)\ (f(x)\in[0,1])\)，则周期 \(T=2a\)。
  
    (3) \(f(x)=1-\frac{1}{f(x+a)}\ (f(x)\neq0)\)，则周期 \(T=3a\)。
  
    (4) \(f(x_1+x_2)=\frac{f(x_1)+f(x_2)}{1-f(x_1)f(x_2)}\) 且 \(f(a)=1\ (f(x_1)f(x_2)\neq1,\ 0<|x_1-x_2|<2a)\)，则周期 \(T=4a\)。
  
    (5) \(f(x)+f(x+a)+f(x+2a)+f(x+3a)+f(x+4a)=f(x)f(x+a)f(x+2a)f(x+3a)f(x+4a)\)，则周期 \(T=5a\)。
  
    (6) \(f(x+a)=f(x)-f(x+a)\)，则周期 \(T=6a\)。


30. **分数指数幂**  
    (1) \(a^{\frac{m}{n}}=\frac{1}{\sqrt[n]{a^m}}\ (a>0,\ m,n\in\mathbb{N}^*,\ n>1)\)。
  
    (2) \(a^{-\frac{m}{n}}=\frac{1}{a^{\frac{m}{n}}}\ (a>0,\ m,n\in\mathbb{N}^*,\ n>1)\)。


31. **根式的性质**  
    (1) \((\sqrt[n]{a})^n=a\)。
  
    (2) 当 \(n\) 为奇数时，\(\sqrt[n]{a^n}=a\)；  
        当 \(n\) 为偶数时，\(\sqrt[n]{a^n}=|a|=\begin{cases}a, & a\geq0,\\-a, & a<0.\end{cases}\)

32. **有理指数幂的运算性质**  
    (1) \(a^r \cdot a^s = a^{r+s}\ (a>0,\ r,s\in\mathbb{Q})\)。
  
    (2) \((a^r)^s = a^{rs}\ (a>0,\ r,s\in\mathbb{Q})\)。
  
    (3) \((ab)^r = a^r b^r\ (a>0,\ b>0,\ r\in\mathbb{Q})\)。
  
    注：若 \(a>0\)，\(p\) 是无理数，则 \(a^p\) 表示一个确定的实数，上述性质对无理数指数幂也适用。


33. **指数式与对数式的互化**  
    $$
    \log_a N = b \Leftrightarrow a^b = N\ (a>0,\ a\neq1,\ N>0).
    $$


34. **对数的换底公式**  
    $$
    \log_a N = \frac{\log_m N}{\log_m a}\ (a>0,\ a\neq1,\ m>0,\ m\neq1,\ N>0).
    $$

    推论：\(\log_{a^m} b^n = \frac{n}{m} \log_a b\ (a>0,\ a\neq1,\ m,n>0,\ m\neq1,\ n\neq1)\)。


35. **对数的四则运算法则**  
    若 \(a>0,\ a\neq1,\ M>0,\ N>0\)，则  
    (1) \(\log_a (MN) = \log_a M + \log_a N\)。
  
    (2) \(\log_a \frac{M}{N} = \log_a M - \log_a N\)。
  
    (3) \(\log_a M^n = n \log_a M\ (n\in\mathbb{R})\)。


36. **对数函数的定义域与值域**  
    设函数 \(f(x)=\log_a (ax^2+bx+c)\ (a\neq0)\)，记 \(\Delta=b^2-4ac\)。
  
    若 \(f(x)\) 的定义域为 \(\mathbb{R}\)，则 \(a>0\) 且 \(\Delta<0\)；  
    若 \(f(x)\) 的值域为 \(\mathbb{R}\)，则 \(a>0\) 且 \(\Delta\geq0\)。对于 \(a=0\) 的情形需单独检验。


37. **对数换底不等式及其推广**  
    若 \(a>0,\ b>0,\ x>0,\ x\neq\frac{1}{a}\)，则函数 \(y=\log_{ax}(bx)\)：  
    (1) 当 \(a>b\) 时，在 \((0,\frac{1}{a})\) 和 \((\frac{1}{a},+\infty)\) 上为增函数；  
    (2) 当 \(a<b\) 时，在 \((0,\frac{1}{a})\) 和 \((\frac{1}{a},+\infty)\) 上为减函数。
  
    推论：设 \(n>m>1,\ p>0,\ a>0,\ a\neq1\)，则  
    (1) \(\log_{m+p}(n+p) < \log_m n\)；  
    (2) \(\log_a m \log_a n < \log_a^2 \frac{m+n}{2}\)。


---

## §03 数列

38. **平均增长率问题**  
    如果原来产值的基础数为 \(N\)，平均增长率为 \(p\)，则对于时间 \(x\) 的总产值 \(y\)，有 \(y=N(1+p)^x\)。


39. **数列的通项公式与前 \(n\) 项和的关系**  
    $$
    a_n = \begin{aligned}
    s_1, & n=1,\\
    s_n - s_{n-1}, & n\geq2,
    \end{aligned}
    $$

    其中 \(s_n=a_1+a_2+\dots+a_n\)。


40. **等差数列的通项公式与前 \(n\) 项和公式**  
    $$
    a_n = a_1 + (n-1)d = dn + a_1 - d \quad (n\in\mathbb{N}^*),
    $$

    $$
    s_n = \frac{n(a_1+a_n)}{2} = na_1 + \frac{n(n-1)}{2}d = \frac{d}{2}n^2 + \left(a_1-\frac{d}{2}\right)n.
    $$


41. **等比数列的通项公式与前 \(n\) 项和公式**  
    $$
    a_n = a_1 q^{n-1} = \frac{a_1}{q} \cdot q^n \quad (n\in\mathbb{N}^*),
    $$

    $$
    s_n = \begin{cases}
    \frac{a_1(1-q^n)}{1-q}, & q\neq1,\\
    na_1, & q=1,
    \end{cases}
    \quad \text{或} \quad
    s_n = \begin{cases}
    \frac{a_1-a_n q}{1-q}, & q\neq1,\\
    na_1, & q=1.
    \end{cases}
    $$


42. **等比差数列的通项公式与前 \(n\) 项和公式**  
    数列 \(\{a_n\}\)：\(a_{n+1}=q a_n+d,\ a_1=b\ (q\neq0)\)，  
    $$
    a_n = \begin{cases}
    b+(n-1)d, & q=1,\\
    \frac{b q^n + (d-b)q^{n-1}-d}{q-1}, & q\neq1,
    \end{cases}
    $$

    $$
    s_n = \begin{cases}
    nb + \frac{n(n-1)}{2}d, & q=1,\\
    \left(b-\frac{d}{1-q}\right)\frac{1-q^n}{1-q} + \frac{d}{1-q}n, & q\neq1.
    \end{cases}
    $$


43. **分期付款（按揭贷款）**  
    每次还款 \(x = \frac{a b (1+b)^n}{(1+b)^n-1}\) 元（贷款 \(a\) 元，分 \(n\) 次还清，每期利率为 \(b\)）。


---

## §04 三角函数

44. **常见三角不等式**  
    (1) 若 \(x\in(0,\frac{\pi}{2})\)，则 \(\sin x < x < \tan x\)。
  
    (2) 若 \(x\in(0,\frac{\pi}{2})\)，则 \(1 < \sin x + \cos x \leq \sqrt{2}\)。
  
    (3) \(|\sin x| + |\cos x| \geq 1\)。


45. **同角三角函数的基本关系式**  
    $$
    \sin^2\theta + \cos^2\theta = 1,\quad \tan\theta = \frac{\sin\theta}{\cos\theta},\quad \tan\theta \cdot \cot\theta = 1.
    $$


46. **正弦、余弦的诱导公式**（奇变偶不变，符号看象限）

47. **和角与差角公式**  
    $$
    \begin{aligned}
    \sin(\alpha\pm\beta) &= \sin\alpha\cos\beta \pm \cos\alpha\sin\beta, \\
    \cos(\alpha\pm\beta) &= \cos\alpha\cos\beta \mp \sin\alpha\sin\beta, \\
    \tan(\alpha\pm\beta) &= \frac{\tan\alpha \pm \tan\beta}{1 \mp \tan\alpha\tan\beta}.
    \end{aligned}
    $$

    $$
    \sin(\alpha+\beta)\sin(\alpha-\beta) = \sin^2\alpha - \sin^2\beta \quad \text{(平方正弦公式)},
    $$

    $$
    \cos(\alpha+\beta)\cos(\alpha-\beta) = \cos^2\alpha - \sin^2\beta.
    $$

    $$
    a\sin\alpha + b\cos\alpha = \sqrt{a^2+b^2}\sin(\alpha+\phi),
    $$

    其中辅助角 \(\phi\) 满足 \(\tan\phi = \frac{b}{a}\)，所在象限由点 \((a,b)\) 决定。


48. **二倍角公式**  
    $$
    \begin{aligned}
    \sin 2\alpha &= 2\sin\alpha\cos\alpha, \\
    \cos 2\alpha &= \cos^2\alpha - \sin^2\alpha = 2\cos^2\alpha - 1 = 1 - 2\sin^2\alpha, \\
    \tan 2\alpha &= \frac{2\tan\alpha}{1-\tan^2\alpha}.
    \end{aligned}
    $$


49. **三倍角公式**  
    $$
    \begin{aligned}
    \sin 3\theta &= 3\sin\theta - 4\sin^3\theta = 4\sin\theta \sin\left(\frac{\pi}{3}-\theta\right)\sin\left(\frac{\pi}{3}+\theta\right), \\
    \cos 3\theta &= 4\cos^3\theta - 3\cos\theta = 4\cos\theta \cos\left(\frac{\pi}{3}-\theta\right)\cos\left(\frac{\pi}{3}+\theta\right), \\
    \tan 3\theta &= \frac{3\tan\theta - \tan^3\theta}{1-3\tan^2\theta} = \tan\theta \tan\left(\frac{\pi}{3}-\theta\right)\tan\left(\frac{\pi}{3}+\theta\right).
    \end{aligned}
    $$


50. **三角函数的周期公式**  
    函数 \(y = \sin(\omega x+\phi),\ x\in\mathbb{R}\) 及 \(y = \cos(\omega x+\phi),\ x\in\mathbb{R}\)（\(\omega,\phi\) 为常数，\(\omega>0\)）的周期 \(T = \frac{2\pi}{\omega}\)；  
    函数 \(y = \tan(\omega x+\phi),\ x\neq k\pi+\frac{\pi}{2},\ k\in\mathbb{Z}\)（\(\omega,\phi\) 为常数，\(\omega>0\)）的周期 \(T = \frac{\pi}{\omega}\)。


51. **正弦定理**  
    $$
    \frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C} = 2R.
    $$


52. **余弦定理**  
    $$
    a^2 = b^2 + c^2 - 2bc\cos A,\quad b^2 = c^2 + a^2 - 2ca\cos B,\quad c^2 = a^2 + b^2 - 2ab\cos C.
    $$


53. **面积定理**  
    (1) \(S = \frac{1}{2} a h_a = \frac{1}{2} b h_b = \frac{1}{2} c h_c\)（\(h_a,h_b,h_c\) 分别为边 \(a,b,c\) 上的高）。
  
    (2) \(S = \frac{1}{2} ab\sin C = \frac{1}{2} bc\sin A = \frac{1}{2} ca\sin B\)。
  
    (3) \(S_{\triangle OAB} = \frac{1}{2} \sqrt{(|\overrightarrow{OA}|\cdot|\overrightarrow{OB}|)^2 - (\overrightarrow{OA}\cdot\overrightarrow{OB})^2}\)。


54. **三角形内角和定理**  
    在 \(\triangle ABC\) 中，有  
    $$
    A+B+C = \pi \Leftrightarrow C = \pi - (A+B) \Leftrightarrow \frac{C}{2} = \frac{\pi}{2} - \frac{A+B}{2} \Leftrightarrow 2C = 2\pi - 2(A+B).
    $$


55. **简单的三角方程的通解**  
    $$
    \begin{aligned}
    \sin x = a &\Leftrightarrow x = k\pi + (-1)^k \arcsin a \quad (k\in\mathbb{Z},\ |a|\leq1), \\
    \cos x = a &\Leftrightarrow x = 2k\pi \pm \arccos a \quad (k\in\mathbb{Z},\ |a|\leq1), \\
    \tan x = a &\Leftrightarrow x = k\pi + \arctan a \quad (k\in\mathbb{Z},\ a\in\mathbb{R}).
    \end{aligned}
    $$

    特别地，  
    $$
    \begin{aligned}
    \sin\alpha = \sin\beta &\Leftrightarrow \alpha = k\pi + (-1)^k \beta \quad (k\in\mathbb{Z}), \\
    \cos\alpha = \cos\beta &\Leftrightarrow \alpha = 2k\pi \pm \beta \quad (k\in\mathbb{Z}), \\
    \tan\alpha = \tan\beta &\Leftrightarrow \alpha = k\pi + \beta \quad (k\in\mathbb{Z}).
    \end{aligned}
    $$


56. **最简单的三角不等式及其解集**  
    $$
    \begin{aligned}
    \sin x > a\ (|a|\leq1) &\Leftrightarrow x \in (2k\pi + \arcsin a,\ 2k\pi + \pi - \arcsin a),\ k\in\mathbb{Z}, \\
    \sin x < a\ (|a|\leq1) &\Leftrightarrow x \in (2k\pi - \pi - \arcsin a,\ 2k\pi + \arcsin a),\ k\in\mathbb{Z}, \\
    \cos x > a\ (|a|\leq1) &\Leftrightarrow x \in (2k\pi - \arccos a,\ 2k\pi + \arccos a),\ k\in\mathbb{Z}, \\
    \cos x < a\ (|a|\leq1) &\Leftrightarrow x \in (2k\pi + \arccos a,\ 2k\pi + 2\pi - \arccos a),\ k\in\mathbb{Z}, \\
    \tan x > a\ (a\in\mathbb{R}) &\Rightarrow x \in \left(k\pi + \arctan a,\ k\pi + \frac{\pi}{2}\right),\ k\in\mathbb{Z}, \\
    \tan x < a\ (a\in\mathbb{R}) &\Rightarrow x \in \left(k\pi - \frac{\pi}{2},\ k\pi + \arctan a\right),\ k\in\mathbb{Z}.
    \end{aligned}
    $$


---

## §05 平面向量

57. **实数与向量的积的运算律**  
    设 \(\lambda,\mu\) 为实数，则  
    (1) 结合律：\(\lambda(\mu\mathbf{a}) = (\lambda\mu)\mathbf{a}\)。
  
    (2) 第一分配律：\((\lambda+\mu)\mathbf{a} = \lambda\mathbf{a} + \mu\mathbf{a}\)。
  
    (3) 第二分配律：\(\lambda(\mathbf{a}+\mathbf{b}) = \lambda\mathbf{a} + \lambda\mathbf{b}\)。


58. **向量的数量积的运算律**  
    (1) \(\mathbf{a}\cdot\mathbf{b} = \mathbf{b}\cdot\mathbf{a}\)（交换律）。
  
    (2) \((\lambda\mathbf{a})\cdot\mathbf{b} = \lambda(\mathbf{a}\cdot\mathbf{b}) = \lambda\mathbf{a}\cdot\mathbf{b} = \mathbf{a}\cdot(\lambda\mathbf{b})\)。
  
    (3) \((\mathbf{a}+\mathbf{b})\cdot\mathbf{c} = \mathbf{a}\cdot\mathbf{c} + \mathbf{b}\cdot\mathbf{c}\)。


59. **平面向量基本定理**  
    如果 \(\mathbf{e}_1,\mathbf{e}_2\) 是同一平面内的两个不共线向量，那么对于该平面内的任一向量 \(\mathbf{a}\)，有且仅有一对实数 \(\lambda_1,\lambda_2\)，使得 \(\mathbf{a} = \lambda_1\mathbf{e}_1 + \lambda_2\mathbf{e}_2\)。
  
    不共线的向量 \(\mathbf{e}_1,\mathbf{e}_2\) 叫做表示这一平面内所有向量的一组基底。


60. **向量平行的坐标表示**  
    设 \(\mathbf{a}=(x_1,y_1),\ \mathbf{b}=(x_2,y_2)\)，且 \(\mathbf{b}\neq\mathbf{0}\)，则  
    $$
    \mathbf{a}\parallel\mathbf{b} \Leftrightarrow x_1 y_2 - x_2 y_1 = 0.
    $$


61. **数量积的几何意义**  
    数量积 \(\mathbf{a}\cdot\mathbf{b}\) 等于 \(\mathbf{a}\) 的长度 \(|\mathbf{a}|\) 与 \(\mathbf{b}\) 在 \(\mathbf{a}\) 方向上的投影 \(|\mathbf{b}|\cos\theta\) 的乘积。


62. **平面向量的坐标运算**  
    设 \(\mathbf{a}=(x_1,y_1),\ \mathbf{b}=(x_2,y_2)\)，则  
    (1) \(\mathbf{a}+\mathbf{b} = (x_1+x_2,\ y_1+y_2)\)。
  
    (2) \(\mathbf{a}-\mathbf{b} = (x_1-x_2,\ y_1-y_2)\)。
  
    (3) 设 \(A(x_1,y_1),\ B(x_2,y_2)\)，则 \(\overrightarrow{AB} = (x_2-x_1,\ y_2-y_1)\)。
  
    (4) 设 \(\mathbf{a}=(x,y),\ \lambda\in\mathbb{R}\)，则 \(\lambda\mathbf{a} = (\lambda x,\ \lambda y)\)。
  
    (5) \(\mathbf{a}\cdot\mathbf{b} = x_1 x_2 + y_1 y_2\)。


63. **两向量的夹角公式**  
    $$
    \cos\theta = \frac{x_1 x_2 + y_1 y_2}{\sqrt{x_1^2+y_1^2}\cdot\sqrt{x_2^2+y_2^2}} \quad (\mathbf{a}=(x_1,y_1),\ \mathbf{b}=(x_2,y_2)).
    $$


64. **平面两点间的距离公式**  
    $$
    d_{A,B} = |\overrightarrow{AB}| = \sqrt{(x_2-x_1)^2 + (y_2-y_1)^2} \quad (A(x_1,y_1),\ B(x_2,y_2)).
    $$


65. **向量的平行与垂直**  
    设 \(\mathbf{a}=(x_1,y_1),\ \mathbf{b}=(x_2,y_2)\)，且 \(\mathbf{b}\neq\mathbf{0}\)，则  
    $$
    \mathbf{a}\parallel\mathbf{b} \Leftrightarrow \mathbf{b} = \lambda\mathbf{a} \Leftrightarrow x_1 y_2 - x_2 y_1 = 0,
    $$
    $$
    \mathbf{a}\perp\mathbf{b} \Leftrightarrow \mathbf{a}\cdot\mathbf{b} = 0 \Leftrightarrow x_1 x_2 + y_1 y_2 = 0.
    $$


66. **线段的定比分公式**  
    设 \(P_1(x_1,y_1),\ P_2(x_2,y_2)\)，点 \(P(x,y)\) 是线段 \(P_1 P_2\) 的分点，\(\lambda\) 是实数，且 \(\overrightarrow{P_1 P} = \lambda \overrightarrow{P P_2}\)，则  
    $$
    \begin{cases}
    x = \dfrac{x_1 + \lambda x_2}{1+\lambda}, 
    y = \dfrac{y_1 + \lambda y_2}{1+\lambda},
    \end{cases}
    \quad \Leftrightarrow \quad
    \overrightarrow{OP} = \frac{\overrightarrow{OP_1} + \lambda\overrightarrow{OP_2}}{1+\lambda}
    \quad \Leftrightarrow \quad
    \overrightarrow{OP} = t\overrightarrow{OP_1} + (1-t)\overrightarrow{OP_2} \ \left(t=\frac{1}{1+\lambda}\right).
    $$


67. **三角形的重心坐标公式**  
    \(\triangle ABC\) 三个顶点坐标分别为 \(A(x_1,y_1),\ B(x_2,y_2),\ C(x_3,y_3)\)，则重心坐标为  
    $$
    G\left(\frac{x_1+x_2+x_3}{3},\ \frac{y_1+y_2+y_3}{3}\right).
    $$


68. **点的平移公式**  
    $$
    \begin{cases}
    x' = x + h, \\
    y' = y + k,
    \end{cases}
    \quad \Leftrightarrow \quad
    \begin{cases}
    x = x' - h, \\
    y = y' - k,
    \end{cases}
    \quad \Leftrightarrow \quad
    \overrightarrow{OP'} = \overrightarrow{OP} + \overrightarrow{PP'}.
    $$

    注：图形 \(F\) 上任意一点 \(P(x,y)\) 在平移后图形 \(F'\) 上的对应点为 \(P'(x',y')\)，且 \(\overrightarrow{PP'}=(h,k)\)。


69. **“按向量平移”的几个结论**  
    (1) 点 \(P(x,y)\) 按向量 \(\mathbf{a}=(h,k)\) 平移后得到点 \(P'(x+h,\ y+k)\)。
  
    (2) 函数 \(y=f(x)\) 的图象 \(C\) 按向量 \(\mathbf{a}=(h,k)\) 平移后得到图象 \(C'\)，则 \(C'\) 的函数解析式为 \(y = f(x-h) + k\)。
  
    (3) 图象 \(C'\) 按向量 \(\mathbf{a}=(h,k)\) 平移后得到图象 \(C\)，若 \(C\) 的解析式为 \(y=f(x)\)，则 \(C'\) 的函数解析式为 \(y = f(x+h) - k\)。
  
    (4) 曲线 \(C:\ f(x,y)=0\) 按向量 \(\mathbf{a}=(h,k)\) 平移后得到图象 \(C'\)，则 \(C'\) 的方程为 \(f(x-h,\ y-k)=0\)。
  
    (5) 向量 \(\mathbf{a}=(x,y)\) 按向量 \(\mathbf{a}=(h,k)\) 平移后得到的向量仍然为 \(\mathbf{a}=(x,y)\)。


70. **三角形五“心”向量形式的充要条件**  
    设 \(O\) 为 \(\triangle ABC\) 所在平面上一点，角 \(A,B,C\) 所对边长分别为 \(a,b,c\)，则  
    (1) \(O\) 为外心 \(\Leftrightarrow |\overrightarrow{OA}|^2 = |\overrightarrow{OB}|^2 = |\overrightarrow{OC}|^2\)。
  
    (2) \(O\) 为重心 \(\Leftrightarrow \overrightarrow{OA} + \overrightarrow{OB} + \overrightarrow{OC} = \mathbf{0}\)。
  
    (3) \(O\) 为垂心 \(\Leftrightarrow \overrightarrow{OA}\cdot\overrightarrow{OB} = \overrightarrow{OB}\cdot\overrightarrow{OC} = \overrightarrow{OC}\cdot\overrightarrow{OA}\)。
  
    (4) \(O\) 为内心 \(\Leftrightarrow a\overrightarrow{OA} + b\overrightarrow{OB} + c\overrightarrow{OC} = \mathbf{0}\)。
  
    (5) \(O\) 为 \(\angle A\) 的旁心 \(\Leftrightarrow a\overrightarrow{OA} = b\overrightarrow{OB} + c\overrightarrow{OC}\)。


---

## §06 不等式

71. **常用不等式**  
    (1) \(a,b\in\mathbb{R} \Rightarrow a^2+b^2 \geq 2ab\)（当且仅当 \(a=b\) 时取等号）。
  
    (2) \(a,b\in\mathbb{R}^+ \Rightarrow \dfrac{a+b}{2} \geq \sqrt{ab}\)（当且仅当 \(a=b\) 时取等号）。
  
    (3) \(a^3+b^3+c^3 \geq 3abc\ (a>0,b>0,c>0)\)。
  
    (4) 柯西不等式：\((a^2+b^2)(c^2+d^2) \geq (ac+bd)^2\ (a,b,c,d\in\mathbb{R})\)。
  
    (5) \(|a|-|b| \leq |a+b| \leq |a|+|b|\)。


72. **极值定理**  
    已知 \(x,y\) 都是正数，则  
    (1) 若积 \(xy\) 是定值 \(p\)，则当 \(x=y\) 时，和 \(x+y\) 有最小值 \(2\sqrt{p}\)。
  
    (2) 若和 \(x+y\) 是定值 \(s\)，则当 \(x=y\) 时，积 \(xy\) 有最大值 \(\frac{1}{4}s^2\)。
  
    推广：已知 \(x,y\in\mathbb{R}\)，则有 \((x+y)^2 = (x-y)^2 + 4xy\)。
  
    (1) 若积 \(xy\) 是定值，则当 \(|x-y|\) 最大时，\(|x+y|\) 最大；当 \(|x-y|\) 最小时，\(|x+y|\) 最小。
  
    (2) 若和 \(|x+y|\) 是定值，则当 \(|x-y|\) 最大时，\(|xy|\) 最小；当 \(|x-y|\) 最小时，\(|xy|\) 最大。


73. **一元二次不等式的解集**  
    一元二次不等式 \(ax^2+bx+c>0\)（或 \(<0\)）\((a\neq0,\ \Delta=b^2-4ac>0)\)，如果 \(a\) 与 \(ax^2+bx+c\) 同号，则解集在两根之外；如果异号，则解集在两根之间。简言之：同号两根之外，异号两根之间。
    $$
    x_1 < x < x_2 \Leftrightarrow (x-x_1)(x-x_2) < 0 \quad (x_1 < x_2),
    $$
    $$
    x < x_1 \ \text{或} \ x > x_2 \Leftrightarrow (x-x_1)(x-x_2) > 0 \quad (x_1 < x_2).
    $$


74. **含有绝对值的不等式**  
    当 \(a>0\) 时，  
    $$
    |x| < a \Leftrightarrow x^2 < a^2 \Leftrightarrow -a < x < a,
    $$
    $$
    |x| > a \Leftrightarrow x^2 > a^2 \Leftrightarrow x > a \ \text{或} \ x < -a.
    $$


75. **无理不等式**  
    (1) \(\sqrt{f(x)} > \sqrt{g(x)} \Leftrightarrow \begin{cases} f(x) \geq 0, \\ g(x) \geq 0, \\ f(x) > g(x). \end{cases}\)  
    (2) \(\sqrt{f(x)} > g(x) \Leftrightarrow \begin{cases} f(x) \geq 0, \\ g(x) \geq 0, \\ f(x) > [g(x)]^2, \end{cases}\) 或 \(\begin{cases} f(x) \geq 0, \\ g(x) < 0. \end{cases}\)  
    (3) \(\sqrt{f(x)} < g(x) \Leftrightarrow \begin{cases} f(x) \geq 0, \\ g(x) > 0, \\ f(x) < [g(x)]^2. \end{cases}\)

76. **指数不等式与对数不等式**  
    (1) 当 \(a>1\) 时，  
        $$
        a^{f(x)} > a^{g(x)} \Leftrightarrow f(x) > g(x);
        $$
        $$
        \log_a f(x) > \log_a g(x) \Leftrightarrow \begin{cases} f(x) > 0, \\ g(x) > 0, \\ f(x) > g(x). \end{cases}
        $$
  
    (2) 当 \(0<a<1\) 时，  
        $$
        a^{f(x)} > a^{g(x)} \Leftrightarrow f(x) < g(x);
        $$
        $$
        \log_a f(x) > \log_a g(x) \Leftrightarrow \begin{cases} f(x) > 0, \\ g(x) > 0, \\ f(x) < g(x). \end{cases}
        $$


---

## §07 直线和圆的方程

77. **斜率公式**  
    $$
    k = \frac{y_2-y_1}{x_2-x_1} \quad (P_1(x_1,y_1),\ P_2(x_2,y_2)).
    $$


78. **直线的五种方程**  
    (1) 点斜式：\(y-y_1 = k(x-x_1)\)（直线过点 \(P_1(x_1,y_1)\)，斜率为 \(k\)）。
  
    (2) 斜截式：\(y = kx + b\)（\(b\) 为直线在 \(y\) 轴上的截距）。
  
    (3) 两点式：\(\dfrac{y-y_1}{y_2-y_1} = \dfrac{x-x_1}{x_2-x_1}\)（\(y_1\neq y_2,\ x_1\neq x_2\)）。
  
    (4) 截距式：\(\dfrac{x}{a} + \dfrac{y}{b} = 1\)（\(a,b\) 分别为横、纵截距，\(a,b\neq0\)）。
  
    (5) 一般式：\(Ax+By+C=0\)（\(A,B\) 不同时为0）。


79. **两条直线的平行和垂直**  
    (1) 若 \(l_1: y=k_1 x+b_1,\ l_2: y=k_2 x+b_2\)，则  
        $$
        l_1 \parallel l_2 \Leftrightarrow k_1 = k_2,\ b_1 \neq b_2;\quad l_1 \perp l_2 \Leftrightarrow k_1 k_2 = -1.
        $$
  
    (2) 若 \(l_1: A_1 x+B_1 y+C_1=0,\ l_2: A_2 x+B_2 y+C_2=0\)，且 \(A_1,A_2,B_1,B_2\) 都不为零，则  
        $$
        l_1 \parallel l_2 \Leftrightarrow \frac{A_1}{A_2} = \frac{B_1}{B_2} \neq \frac{C_1}{C_2};
        $$
        $$
        l_1 \perp l_2 \Leftrightarrow A_1 A_2 + B_1 B_2 = 0.
        $$


80. **夹角公式**  
    (1) \(\tan\alpha = \left| \dfrac{k_2-k_1}{1+k_1 k_2} \right|\)（\(l_1: y=k_1 x+b_1,\ l_2: y=k_2 x+b_2,\ k_1 k_2 \neq -1\)）。
  
    (2) \(\tan\alpha = \left| \dfrac{A_1 B_2 - A_2 B_1}{A_1 A_2 + B_1 B_2} \right|\)（\(l_1: A_1 x+B_1 y+C_1=0,\ l_2: A_2 x+B_2 y+C_2=0,\ A_1 A_2+B_1 B_2 \neq 0\)）。
  
    当 \(l_1 \perp l_2\) 时，直线 \(l_1\) 与 \(l_2\) 的夹角为 \(\frac{\pi}{2}\)。


81. **\(l_1\) 到 \(l_2\) 的角公式**  
    (1) \(\tan\alpha = \dfrac{k_2-k_1}{1+k_1 k_2}\)（\(l_1: y=k_1 x+b_1,\ l_2: y=k_2 x+b_2,\ k_1 k_2 \neq -1\)）。
  
    (2) \(\tan\alpha = \dfrac{A_1 B_2 - A_2 B_1}{A_1 A_2 + B_1 B_2}\)（\(l_1: A_1 x+B_1 y+C_1=0,\ l_2: A_2 x+B_2 y+C_2=0,\ A_1 A_2+B_1 B_2 \neq 0\)）。
  
    当 \(l_1 \perp l_2\) 时，直线 \(l_1\) 到 \(l_2\) 的角为 \(\frac{\pi}{2}\)。


82. **四种常用直线系方程**  
    (1) 定点直线系方程：经过定点 \(P_0(x_0,y_0)\) 的直线系方程为 \(y-y_0 = k(x-x_0)\)（除直线 \(x=x_0\)），或 \(A(x-x_0)+B(y-y_0)=0\)（\(A,B\) 为待定系数）。
  
    (2) 共点直线系方程：经过两直线 \(l_1: A_1 x+B_1 y+C_1=0,\ l_2: A_2 x+B_2 y+C_2=0\) 的交点的直线系方程为  
        $$
        (A_1 x+B_1 y+C_1) + \lambda (A_2 x+B_2 y+C_2) = 0 \quad (\text{除 } l_2),
        $$

        其中 \(\lambda\) 为待定系数。
  
    (3) 平行直线系方程：直线 \(y=kx+b\) 中当斜率 \(k\) 一定而 \(b\) 变动时，表示平行直线系；与直线 \(Ax+By+C=0\) 平行的直线系方程为 \(Ax+By+\lambda=0 \ (\lambda \neq C)\)。
  
    (4) 垂直直线系方程：与直线 \(Ax+By+C=0\)（\(A\neq0,\ B\neq0\)）垂直的直线系方程为 \(Bx-Ay+\lambda=0\)。


83. **点到直线的距离**  
    $$
    d = \frac{|Ax_0+By_0+C|}{\sqrt{A^2+B^2}} \quad (\text{点 } P(x_0,y_0),\ \text{直线 } l: Ax+By+C=0).
    $$


84. **二元一次不等式表示的平面区域**  
    设直线 \(l: Ax+By+C=0\)，则  
    - 若 \(B\neq0\)，当 \(B\) 与 \(Ax+By+C\) 同号时，表示直线 \(l\) 的上方区域；异号时，表示下方区域（同号在上，异号在下）。
  
    - 若 \(B=0\)，当 \(A\) 与 \(Ax+By+C\) 同号时，表示直线 \(l\) 的右方区域；异号时，表示左方区域（同号在右，异号在左）。


85. **二元二次不等式表示的平面区域**  
    设曲线 \(C: (A_1 x+B_1 y+C_1)(A_2 x+B_2 y+C_2)=0\)（\(A_1 A_2 B_1 B_2 \neq 0\)），则  
    \((A_1 x+B_1 y+C_1)(A_2 x+B_2 y+C_2) > 0\)（或 \(<0\)）所表示的平面区域是曲线 \(C\) 所围成的区域（不含边界）。


86. **圆的四种方程**  
    (1) 标准方程：\((x-a)^2 + (y-b)^2 = r^2\)。
  
    (2) 一般方程：\(x^2+y^2+Dx+Ey+F=0 \ (D^2+E^2-4F>0)\)。
  
    (3) 参数方程：\(\begin{cases} x = a + r\cos\theta, \\ y = b + r\sin\theta. \end{cases}\)  
    (4) 直径式方程：\((x-x_1)(x-x_2) + (y-y_1)(y-y_2)=0\)（直径的端点为 \(A(x_1,y_1),\ B(x_2,y_2)\)）。


87. **圆系方程**  
    (1) 过点 \(A(x_1,y_1),\ B(x_2,y_2)\) 的圆系方程：  
        $$
        (x-x_1)(x-x_2) + (y-y_1)(y-y_2) + \lambda[(x-x_1)(y_1-y_2) - (y-y_1)(x_1-x_2)] = 0,
        $$

        或 \((x-x_1)(x-x_2) + (y-y_1)(y-y_2) + \lambda(ax+by+c)=0\)，其中 \(ax+by+c=0\) 是直线 \(AB\) 的方程。
  
    (2) 过直线 \(l: Ax+By+C=0\) 与圆 \(C: x^2+y^2+Dx+Ey+F=0\) 的交点的圆系方程：  
        $$
        x^2+y^2+Dx+Ey+F + \lambda(Ax+By+C) = 0.
        $$
  
    (3) 过两圆 \(C_1: x^2+y^2+D_1 x+E_1 y+F_1=0,\ C_2: x^2+y^2+D_2 x+E_2 y+F_2=0\) 的交点的圆系方程：  
        $$
        x^2+y^2+D_1 x+E_1 y+F_1 + \lambda(x^2+y^2+D_2 x+E_2 y+F_2) = 0.
        $$


88. **点与圆的位置关系**  
    点 \(P(x_0,y_0)\) 与圆 \((x-a)^2+(y-b)^2=r^2\) 的位置关系：  
    设 \(d = \sqrt{(a-x_0)^2 + (b-y_0)^2}\)，则  
    \(d > r \Leftrightarrow\) 点在圆外；\(d = r \Leftrightarrow\) 点在圆上；\(d < r \Leftrightarrow\) 点在圆内。


89. **直线与圆的位置关系**  
    直线 \(Ax+By+C=0\) 与圆 \((x-a)^2+(y-b)^2=r^2\) 的位置关系：  
    设 \(d = \dfrac{|Aa+Bb+C|}{\sqrt{A^2+B^2}}\)，则  
    \(d > r \Leftrightarrow\) 相离 \(\Leftrightarrow \Delta < 0\)；  
    \(d = r \Leftrightarrow\) 相切 \(\Leftrightarrow \Delta = 0\)；  
    \(d < r \Leftrightarrow\) 相交 \(\Leftrightarrow \Delta > 0\)。


90. **两圆位置关系的判定**  
    设两圆圆心分别为 \(O_1,O_2\)，半径分别为 \(r_1,r_2\)，圆心距 \(d=|O_1 O_2|\)，则  
    - \(d > r_1+r_2 \Leftrightarrow\) 外离（4条公切线）；  
    - \(d = r_1+r_2 \Leftrightarrow\) 外切（3条公切线）；  
    - \(|r_1-r_2| < d < r_1+r_2 \Leftrightarrow\) 相交（2条公切线）；  
    - \(d = |r_1-r_2| \Leftrightarrow\) 内切（1条公切线）；  
    - \(0 < d < |r_1-r_2| \Leftrightarrow\) 内含（无公切线）。


91. **圆的切线方程**  
    (1) 已知圆 \(x^2+y^2+Dx+Ey+F=0\)：  
        - 若已知切点 \((x_0,y_0)\) 在圆上，则切线方程为  
          $$
          x_0 x + y_0 y + \frac{D(x_0+x)}{2} + \frac{E(y_0+y)}{2} + F = 0.
          $$
  
        - 过圆外一点 \(P(x_0,y_0)\) 的切线方程可设为 \(y-y_0 = k(x-x_0)\)，利用相切条件求 \(k\)（注意可能有一条切线斜率不存在）。
  
        - 斜率为 \(k\) 的切线方程可设为 \(y = kx + b\)，利用相切条件求 \(b\)。
  
    (2) 已知圆 \(x^2+y^2=r^2\)：  
        - 过圆上一点 \(P_0(x_0,y_0)\) 的切线方程为 \(x_0 x + y_0 y = r^2\)。
  
        - 斜率为 \(k\) 的切线方程为 \(y = kx \pm r\sqrt{1+k^2}\)。


---

## §08 圆锥曲线方程

92. **椭圆的参数方程**  
    $$
    \begin{cases}
    x = a\cos\theta, \\
    y = b\sin\theta
    \end{cases}
    \quad (\frac{x^2}{a^2}+\frac{y^2}{b^2}=1,\ a>b>0).
    $$


93. **椭圆的焦半径公式**  
    $$
    |PF_1| = e\left(x + \frac{a^2}{c}\right),\quad |PF_2| = e\left(\frac{a^2}{c} - x\right).
    $$


94. **椭圆的内部与外部**  
    (1) 点 \(P(x_0,y_0)\) 在椭圆 \(\frac{x^2}{a^2}+\frac{y^2}{b^2}=1\) 内部 \(\Leftrightarrow \frac{x_0^2}{a^2}+\frac{y_0^2}{b^2} < 1\)。
  
    (2) 点 \(P(x_0,y_0)\) 在椭圆 \(\frac{x^2}{a^2}+\frac{y^2}{b^2}=1\) 外部 \(\Leftrightarrow \frac{x_0^2}{a^2}+\frac{y_0^2}{b^2} > 1\)。


95. **椭圆的切线方程**  
    (1) 椭圆 \(\frac{x^2}{a^2}+\frac{y^2}{b^2}=1\) 上一点 \(P(x_0,y_0)\) 处的切线方程为 \(\frac{x_0 x}{a^2} + \frac{y_0 y}{b^2} = 1\)。
  
    (2) 过椭圆外一点 \(P(x_0,y_0)\) 所引两条切线的切点弦方程为 \(\frac{x_0 x}{a^2} + \frac{y_0 y}{b^2} = 1\)。
  
    (3) 椭圆 \(\frac{x^2}{a^2}+\frac{y^2}{b^2}=1\) 与直线 \(Ax+By+C=0\) 相切的条件是 \(A^2 a^2 + B^2 b^2 = C^2\)。


96. **双曲线的焦半径公式**  
    $$
    |PF_1| = e\left(x + \frac{a^2}{c}\right),\quad |PF_2| = e\left(\frac{a^2}{c} - x\right).
    $$


97. **双曲线的内部与外部**  
    (1) 点 \(P(x_0,y_0)\) 在双曲线 \(\frac{x^2}{a^2}-\frac{y^2}{b^2}=1\) 内部 \(\Leftrightarrow \frac{x_0^2}{a^2} - \frac{y_0^2}{b^2} > 1\)。
  
    (2) 点 \(P(x_0,y_0)\) 在双曲线 \(\frac{x^2}{a^2}-\frac{y^2}{b^2}=1\) 外部 \(\Leftrightarrow \frac{x_0^2}{a^2} - \frac{y_0^2}{b^2} < 1\)。


98. **双曲线方程与渐近线方程的关系**  
    (1) 若双曲线方程为 \(\frac{x^2}{a^2}-\frac{y^2}{b^2}=1\)，则渐近线方程为 \(\frac{x^2}{a^2}-\frac{y^2}{b^2}=0\)，即 \(y = \pm \frac{b}{a}x\)。
  
    (2) 若渐近线方程为 \(y = \pm \frac{b}{a}x\)，即 \(\frac{x}{a} \pm \frac{y}{b} = 0\)，则双曲线可设为 \(\frac{x^2}{a^2} - \frac{y^2}{b^2} = \lambda\)。
  
    (3) 若双曲线与 \(\frac{x^2}{a^2}-\frac{y^2}{b^2}=1\) 有公共渐近线，可设为 \(\frac{x^2}{a^2} - \frac{y^2}{b^2} = \lambda\)（\(\lambda>0\) 时焦点在 \(x\) 轴，\(\lambda<0\) 时焦点在 \(y\) 轴）。


99. **双曲线的切线方程**  
    (1) 双曲线 \(\frac{x^2}{a^2}-\frac{y^2}{b^2}=1\) 上一点 \(P(x_0,y_0)\) 处的切线方程为 \(\frac{x_0 x}{a^2} - \frac{y_0 y}{b^2} = 1\)。
  
    (2) 过双曲线外一点 \(P(x_0,y_0)\) 所引两条切线的切点弦方程为 \(\frac{x_0 x}{a^2} - \frac{y_0 y}{b^2} = 1\)。
  
    (3) 双曲线 \(\frac{x^2}{a^2}-\frac{y^2}{b^2}=1\) 与直线 \(Ax+By+C=0\) 相切的条件是 \(A^2 a^2 - B^2 b^2 = C^2\)。


100. **抛物线的焦半径公式**  
     抛物线 \(y^2=2px\ (p>0)\) 的焦半径 \(|CF| = x_0 + \frac{p}{2}\)。
  
     过焦点的弦长 \(|CD| = x_1 + x_2 + p\)。


101. **抛物线上的动点表示**  
     抛物线 \(y^2=2px\) 上的动点可设为 \(P\left(\frac{y_0^2}{2p}, y_0\right)\) 或 \(P(2pt^2, 2pt)\) 或 \(P(x_0, y_0)\)，其中 \(y_0^2 = 2px_0\)。


102. **二次函数的图象与抛物线**  
     二次函数 \(y = ax^2+bx+c\ (a\neq0)\) 的图象是抛物线：  
     (1) 顶点坐标为 \(\left(-\frac{b}{2a},\ \frac{4ac-b^2}{4a}\right)\)；  
     (2) 焦点的坐标为 \(\left(-\frac{b}{2a},\ \frac{4ac-b^2+1}{4a}\right)\)；  
     (3) 准线方程为 \(y = \frac{4ac-b^2-1}{4a}\)。


103. **抛物线的内部与外部**  
     (1) 点 \(P(x_0,y_0)\) 在抛物线 \(y^2=2px\ (p>0)\) 的内部 \(\Leftrightarrow y_0^2 < 2px_0\)；在外部 \(\Leftrightarrow y_0^2 > 2px_0\)。
  
     (2) 点 \(P(x_0,y_0)\) 在抛物线 \(y^2=-2px\ (p>0)\) 的内部 \(\Leftrightarrow y_0^2 < -2px_0\)；在外部 \(\Leftrightarrow y_0^2 > -2px_0\)。
  
     (3) 点 \(P(x_0,y_0)\) 在抛物线 \(x^2=2py\ (p>0)\) 的内部 \(\Leftrightarrow x_0^2 < 2py_0\)；在外部 \(\Leftrightarrow x_0^2 > 2py_0\)。
  
     (4) 点 \(P(x_0,y_0)\) 在抛物线 \(x^2=-2py\ (p>0)\) 的内部 \(\Leftrightarrow x_0^2 < -2py_0\)；在外部 \(\Leftrightarrow x_0^2 > -2py_0\)。


104. **抛物线的切线方程**  
     (1) 抛物线 \(y^2=2px\) 上一点 \(P(x_0,y_0)\) 处的切线方程为 \(y_0 y = p(x+x_0)\)。
  
     (2) 过抛物线 \(y^2=2px\) 外一点 \(P(x_0,y_0)\) 所引两条切线的切点弦方程为 \(y_0 y = p(x+x_0)\)。
  
     (3) 抛物线 \(y^2=2px\ (p>0)\) 与直线 \(Ax+By+C=0\) 相切的条件是 \(pB^2 = 2AC\)。


105. **两个常见的曲线系方程**  
     (1) 过曲线 \(f_1(x,y)=0,\ f_2(x,y)=0\) 的交点的曲线系方程为 \(f_1(x,y) + \lambda f_2(x,y)=0\)（\(\lambda\) 为参数）。
  
     (2) 共焦点的有心圆锥曲线系方程为 \(\frac{x^2}{a^2-k} + \frac{y^2}{b^2-k} = 1\)，其中 \(k < \max\{a^2,b^2\}\)。
当 \(k > \min\{a^2,b^2\}\) 时表示椭圆；当 \(\min\{a^2,b^2\} < k < \max\{a^2,b^2\}\) 时表示双曲线。


106. **直线与圆锥曲线相交的弦长公式**  
     $$
     |AB| = \sqrt{(x_1-x_2)^2 + (y_1-y_2)^2} = \sqrt{(1+k^2)(x_2-x_1)^2} = |x_1-x_2|\sqrt{1+\tan^2\alpha} = |y_1-y_2|\sqrt{1+\cot^2\alpha},
     $$

     其中 \(A(x_1,y_1),\ B(x_2,y_2)\)，\(\alpha\) 为直线 \(AB\) 的倾斜角，\(k\) 为斜率。


107. **圆锥曲线的两类对称问题**  
     (1) 曲线 \(F(x,y)=0\) 关于点 \(P(x_0,y_0)\) 成中心对称的曲线是 \(F(2x_0-x,\ 2y_0-y)=0\)。
  
     (2) 曲线 \(F(x,y)=0\) 关于直线 \(Ax+By+C=0\) 成轴对称的曲线是  
         $$
         F\left(x-\frac{2A(Ax+By+C)}{A^2+B^2},\ y-\frac{2B(Ax+By+C)}{A^2+B^2}\right)=0.
         $$


108. **“四线”一方程**  
     对于一般的二次曲线 \(Ax^2+Bxy+Cy^2+Dx+Ey+F=0\)，用 \(x_0 x\) 代 \(x^2\)，用 \(y_0 y\) 代 \(y^2\)，用 \(\frac{x_0 y + x y_0}{2}\) 代 \(xy\)，用 \(\frac{x_0+x}{2}\) 代 \(x\)，用 \(\frac{y_0+y}{2}\) 代 \(y\)，得到方程  
     $$
     A x_0 x + B\cdot\frac{x_0 y+x y_0}{2} + C y_0 y + D\cdot\frac{x_0+x}{2} + E\cdot\frac{y_0+y}{2} + F = 0,
     $$

     该方程对应曲线的切线、切点弦、中点弦、弦中点方程。


---

## §09 立体几何

109. **证明直线与直线平行的思考途径**  
     (1) 转化为判定共面二直线无交点；  
     (2) 转化为二直线同与第三条直线平行；  
     (3) 转化为线面平行；  
     (4) 转化为线面垂直；  
     (5) 转化为面面平行。


110. **证明直线与平面平行的思考途径**  
     (1) 转化为直线与平面无公共点；  
     (2) 转化为线线平行；  
     (3) 转化为面面平行。


111. **证明平面与平面平行的思考途径**  
     (1) 转化为判定二平面无公共点；  
     (2) 转化为线面平行；  
     (3) 转化为线面垂直。


112. **证明直线与直线垂直的思考途径**  
     (1) 转化为相交垂直；  
     (2) 转化为线面垂直；  
     (3) 转化为线与另一线的射影垂直；  
     (4) 转化为线与形成射影的斜线垂直。


113. **证明直线与平面垂直的思考途径**  
     (1) 转化为该直线与平面内任一直线垂直；  
     (2) 转化为该直线与平面内相交二直线垂直；  
     (3) 转化为该直线与平面的一条直线平行；  
     (4) 转化为该直线垂直于另一个平行平面；  
     (5) 转化为该直线与两个垂直平面的交线垂直。


114. **证明平面与平面垂直的思考途径**  
     (1) 转化为判断二面角是直二面角；  
     (2) 转化为线面垂直。


115. **空间向量的加法与数乘运算律**  
     (1) 加法交换律：\(\mathbf{a}+\mathbf{b}=\mathbf{b}+\mathbf{a}\)。
  
     (2) 加法结合律：\((\mathbf{a}+\mathbf{b})+\mathbf{c}=\mathbf{a}+(\mathbf{b}+\mathbf{c})\)。
  
     (3) 数乘分配律：\(\lambda(\mathbf{a}+\mathbf{b})=\lambda\mathbf{a}+\lambda\mathbf{b}\)。


116. **平面向量加法的平行四边形法则向空间的推广**  
     始点相同且不在同一个平面内的三个向量之和，等于以这三个向量为棱的平行六面体的以公共始点为始点的对角线所表示的向量。


117. **共线向量定理**  
     对空间任意两个向量 \(\mathbf{a},\mathbf{b}\ (\mathbf{b}\neq\mathbf{0})\)，\(\mathbf{a} \parallel \mathbf{b} \Leftrightarrow\) 存在实数 \(\lambda\) 使 \(\mathbf{a}=\lambda\mathbf{b}\)。
  
     \(P,A,B\) 三点共线 \(\Leftrightarrow \overrightarrow{AP} \parallel \overrightarrow{AB} \Leftrightarrow \overrightarrow{AP}=t\overrightarrow{AB} \Leftrightarrow \overrightarrow{OP}=(1-t)\overrightarrow{OA}+t\overrightarrow{OB}\)。
  
     \(\overrightarrow{AB} \parallel \overrightarrow{CD} \Leftrightarrow \overrightarrow{AB},\overrightarrow{CD}\) 共线且 \(AB,CD\) 不共线 \(\Leftrightarrow \overrightarrow{AB} = \overrightarrow{CD}\) 且 \(AB,CD\) 不共线。


118. **共面向量定理**  
     向量 \(\mathbf{p}\) 与两个不共线的向量 \(\mathbf{a},\mathbf{b}\) 共面 \(\Leftrightarrow\) 存在实数对 \(x,y\) 使 \(\mathbf{p}=x\mathbf{a}+y\mathbf{b}\)。
  
     推论：空间一点 \(P\) 位于平面 \(MAB\) 内 \(\Leftrightarrow\) 存在有序实数对 \(x,y\) 使 \(\overrightarrow{MP}=x\overrightarrow{MA}+y\overrightarrow{MB}\)，或对空间任一定点 \(O\)，有 \(\overrightarrow{OP}=\overrightarrow{OM}+x\overrightarrow{MA}+y\overrightarrow{MB}\)。


119. **空间四点共面的条件**  
     对空间任一点 \(O\) 和不共线的三点 \(A,B,C\)，满足 \(\overrightarrow{OP}=x\overrightarrow{OA}+y\overrightarrow{OB}+z\overrightarrow{OC}\ (x+y+z=k)\)。
  
     - 当 \(k=1\) 时，对于空间任一点 \(O\)，总有 \(P,A,B,C\) 四点共面；  
     - 当 \(k\neq1\) 时，若 \(O\in\) 平面 \(ABC\)，则 \(P,A,B,C\) 四点共面；若 \(O\notin\) 平面 \(ABC\)，则四点不共面。
  
     \(A,B,C,D\) 四点共面 \(\Leftrightarrow \overrightarrow{AD}\) 与 \(\overrightarrow{AB},\overrightarrow{AC}\) 共面 \(\Leftrightarrow \overrightarrow{AD}=x\overrightarrow{AB}+y\overrightarrow{AC} \Leftrightarrow \overrightarrow{OD}=(1-x-y)\overrightarrow{OA}+x\overrightarrow{OB}+y\overrightarrow{OC}\)（\(O\notin\) 平面 \(ABC\)）。


120. **空间向量基本定理**  
     如果三个向量 \(\mathbf{a},\mathbf{b},\mathbf{c}\) 不共面，那么对空间任一向量 \(\mathbf{p}\)，存在唯一的有序实数组 \(x,y,z\)，使 \(\mathbf{p}=x\mathbf{a}+y\mathbf{b}+z\mathbf{c}\)。
  
     推论：设 \(O,A,B,C\) 是不共面的四点，则对空间任一点 \(P\)，都存在唯一的三个有序实数 \(x,y,z\)，使 \(\overrightarrow{OP}=x\overrightarrow{OA}+y\overrightarrow{OB}+z\overrightarrow{OC}\)。


121. **射影公式**  
     已知向量 \(\overrightarrow{AB}=\mathbf{a}\) 和轴 \(l\)，\(\mathbf{e}\) 是 \(l\) 上与 \(l\) 同方向的单位向量，作 \(A\) 在 \(l\) 上的射影 \(A'\)，作 \(B\) 在 \(l\) 上的射影 \(B'\)，则  
     $$
     A'B' = |\overrightarrow{AB}|\cos\langle\mathbf{a},\mathbf{e}\rangle = \mathbf{a}\cdot\mathbf{e}.
     $$


122. **向量的直角坐标运算**  
     设 \(\mathbf{a}=(a_1,a_2,a_3),\ \mathbf{b}=(b_1,b_2,b_3)\)，则  
     (1) \(\mathbf{a}+\mathbf{b}=(a_1+b_1,\ a_2+b_2,\ a_3+b_3)\)；  
     (2) \(\mathbf{a}-\mathbf{b}=(a_1-b_1,\ a_2-b_2,\ a_3-b_3)\)；  
     (3) \(\lambda\mathbf{a}=(\lambda a_1,\ \lambda a_2,\ \lambda a_3)\ (\lambda\in\mathbb{R})\)；  
     (4) \(\mathbf{a}\cdot\mathbf{b}=a_1 b_1 + a_2 b_2 + a_3 b_3\)。


123. **空间两点间的向量**  
     $$
     \overrightarrow{AB} = (x_2-x_1,\ y_2-y_1,\ z_2-z_1) \quad (A(x_1,y_1,z_1),\ B(x_2,y_2,z_2)).
     $$


124. **空间的线线平行或垂直**  
     设 \(\vec{a}=(x_1,y_1,z_1),\ \vec{b}=(x_2,y_2,z_2)\)，则  
     $$
     \vec{a}\parallel\vec{b} \Leftrightarrow \vec{a}=\lambda\vec{b} \Leftrightarrow \begin{cases} x_1=\lambda x_2, \\ y_1=\lambda y_2, \\ z_1=\lambda z_2. \end{cases}
     $$

     $$
     \vec{a}\perp\vec{b} \Leftrightarrow \vec{a}\cdot\vec{b}=0 \Leftrightarrow x_1 x_2 + y_1 y_2 + z_1 z_2 = 0.
     $$


125. **夹角公式**  
     $$
     \cos\langle\mathbf{a},\mathbf{b}\rangle = \frac{a_1 b_1 + a_2 b_2 + a_3 b_3}{\sqrt{a_1^2+a_2^2+a_3^2}\sqrt{b_1^2+b_2^2+b_3^2}} \quad (\mathbf{a}=(a_1,a_2,a_3),\ \mathbf{b}=(b_1,b_2,b_3)).
     $$
  
     推论（三维柯西不等式）：\((a_1 b_1 + a_2 b_2 + a_3 b_3)^2 \leq (a_1^2+a_2^2+a_3^2)(b_1^2+b_2^2+b_3^2)\)。


126. **四面体的对棱所成的角**  
     四面体 \(ABCD\) 中，\(AC\) 与 \(BD\) 所成的角为 \(\theta\)，则  
     $$
     \cos\theta = \frac{|(AB^2+CD^2) - (BC^2+DA^2)|}{2AC\cdot BD}.
     $$


127. **异面直线所成角**  
     $$
     \cos\theta = |\cos\langle\vec{a},\vec{b}\rangle| = \frac{|\vec{a}\cdot\vec{b}|}{|\vec{a}||\vec{b}|} = \frac{|x_1 x_2 + y_1 y_2 + z_1 z_2|}{\sqrt{x_1^2+y_1^2+z_1^2}\sqrt{x_2^2+y_2^2+z_2^2}},
     $$

     其中 \(\vec{a},\vec{b}\) 分别为异面直线 \(a,b\) 的方向向量，\(\theta\in(0^\circ,90^\circ]\)。


128. **直线与平面所成角**  
     $$
     \beta = \arcsin\frac{|\overrightarrow{AB}\cdot\mathbf{m}|}{|\overrightarrow{AB}||\mathbf{m}|} \quad (\mathbf{m}\text{ 为平面 }\alpha\text{ 的法向量}).
     $$


129. **三面角公式（一）**  
     若 \(\triangle ABC\) 所在平面 \(\beta\) 与过边 \(AB\) 的平面 \(\alpha\) 所成的角为 \(\theta\)，另两边 \(AC,BC\) 与平面 \(\alpha\) 所成的角分别为 \(\theta_1,\theta_2\)，\(A,B\) 为 \(\triangle ABC\) 的两个内角，则  
     $$
     \sin^2\theta_1 + \sin^2\theta_2 = (\sin^2A + \sin^2B)\sin^2\theta.
     $$
  
     特别地，当 \(\angle ACB=90^\circ\) 时，\(\sin^2\theta_1 + \sin^2\theta_2 = \sin^2\theta\)。


130. **三面角公式（二）**  
     若 \(\triangle ABC\) 所在平面 \(\beta\) 与过边 \(AB\) 的平面 \(\alpha\) 所成的角为 \(\theta\)，另两边 \(AC,BC\) 与平面 \(\alpha\) 所成的角分别为 \(\theta_1,\theta_2\)，\(A,B\) 为 \(\triangle ABO\) 的两个内角，则  
     $$
     \tan^2\theta_1 + \tan^2\theta_2 = (\sin^2A + \sin^2B)\tan^2\theta.
     $$
  
     特别地，当 \(\angle AOB=90^\circ\) 时，\(\sin^2\theta_1 + \sin^2\theta_2 = \sin^2\theta\)。


131. **二面角的平面角**  
     $$
     \theta = \arccos\frac{\mathbf{m}\cdot\mathbf{n}}{|\mathbf{m}||\mathbf{n}|} \quad (\mathbf{m},\mathbf{n}\text{ 分别为二面角两个面的法向量}).
     $$


132. **三余弦定理**  
     设 \(AC\) 是 \(\alpha\) 内的任一条直线，且 \(BC\perp AC\)，垂足为 \(C\)，又设 \(AO\) 与 \(AB\) 所成的角为 \(\theta_1\)，\(AB\) 与 \(AC\) 所成的角为 \(\theta_2\)，\(AO\) 与 \(AC\) 所成的角为 \(\theta\)，则  
     $$
     \cos\theta = \cos\theta_1 \cos\theta_2.
     $$


133. **三射线定理**  
     若夹在平面角为 \(\phi\) 的二面角间的线段与二面角的两个半平面所成的角是 \(\theta_1,\theta_2\)，与二面角的棱所成的角是 \(\theta\)，则有  
     $$
     \sin^2\phi \sin^2\theta = \sin^2\theta_1 + \sin^2\theta_2 - 2\sin\theta_1\sin\theta_2\cos\phi,
     $$

     且 \(|\theta_1-\theta_2| \leq \phi \leq 180^\circ - (\theta_1+\theta_2)\)（当且仅当 \(\theta=90^\circ\) 时等号成立）。


134. **空间两点间的距离公式**  
     $$
     d_{A,B} = \sqrt{(x_2-x_1)^2 + (y_2-y_1)^2 + (z_2-z_1)^2} \quad (A(x_1,y_1,z_1),\ B(x_2,y_2,z_2)).
     $$


135. **点到直线的距离**  
     $$
     h = \frac{1}{|\mathbf{a}|}\sqrt{(|\mathbf{a}||\mathbf{b}|)^2 - (\mathbf{a}\cdot\mathbf{b})^2} \quad (\text{点 }P\text{ 在直线 }l\text{ 上，方向向量 }\mathbf{a}=\overrightarrow{PA},\ \mathbf{b}=\overrightarrow{PQ}).
     $$


136. **异面直线间的距离**  
     $$
     d = \frac{|\overrightarrow{CD}\cdot\mathbf{n}|}{|\mathbf{n}|} \quad (l_1,l_2\text{ 是两异面直线，公垂向量为 }\mathbf{n},\ C,D\text{ 分别在 }l_1,l_2\text{ 上}).
     $$


137. **点到平面的距离**  
     $$
     d = \frac{|\overrightarrow{AB}\cdot\mathbf{n}|}{|\mathbf{n}|} \quad (\mathbf{n}\text{ 为平面 }\alpha\text{ 的法向量，}AB\text{ 是经过平面 }\alpha\text{ 的一条斜线，}A\in\alpha).
     $$


138. **异面直线上两点距离公式**  
     $$
     d = \sqrt{h^2 + m^2 + n^2 \mp 2mn\cos\theta},
     $$

     其中两条异面直线 \(a,b\) 所成的角为 \(\theta\)，公垂线段 \(AA'\) 的长为 \(h\)，在直线 \(a,b\) 上分别取两点 \(E,F\)，使 \(A'E=m,\ AF=n,\ EF=d\)。


139. **三个向量和的平方公式**  
     $$
     (\mathbf{a}+\mathbf{b}+\mathbf{c})^2 = \mathbf{a}^2+\mathbf{b}^2+\mathbf{c}^2 + 2\mathbf{a}\cdot\mathbf{b} + 2\mathbf{b}\cdot\mathbf{c} + 2\mathbf{c}\cdot\mathbf{a}.
     $$


140. **线段在三个互相垂直的直线上的射影**  
     长度为 \(l\) 的线段在三条两两互相垂直的直线上的射影长分别为 \(l_1,l_2,l_3\)，夹角分别为 \(\theta_1,\theta_2,\theta_3\)，则  
     $$
     l^2 = l_1^2 + l_2^2 + l_3^2 \Leftrightarrow \cos^2\theta_1+\cos^2\theta_2+\cos^2\theta_3=1 \Leftrightarrow \sin^2\theta_1+\sin^2\theta_2+\sin^2\theta_3=2.
     $$


141. **面积射影定理**  
     $$
     S = \frac{S'}{\cos\theta},
     $$

     其中 \(S,S'\) 分别为平面多边形及其射影的面积，\(\theta\) 为它们所在平面所成的锐二面角。


142. **斜棱柱的直截面**  
     斜棱柱的侧棱长为 \(l\)，侧面积和体积分别为 \(S_{\text{斜棱柱侧}}\) 和 \(V_{\text{斜棱柱}}\)，直截面的周长和面积分别为 \(c_1\) 和 \(S_1\)，则  
     $$
     S_{\text{斜棱柱侧}} = c_1 l,\quad V_{\text{斜棱柱}} = S_1 l.
     $$


143. **作截面的依据**  
     三个平面两两相交，有三条交线，则这三条交线交于一点或互相平行。


144. **棱锥的平行截面的性质**  
     如果棱锥被平行于底面的平面所截，那么截面与底面相似，截面面积与底面面积的比等于顶点到截面距离与棱锥高的平方比；相应小棱锥与小棱锥的侧面积的比也等于该比的平方。


145. **欧拉定理（欧拉公式）**  
     $$
     V + F - E = 2,
     $$

     其中 \(V,E,F\) 分别为简单多面体的顶点数、棱数、面数。
  
     (1) \(E =\) 各面多边形边数和的一半；若每个面的边数为 \(n\)，则 \(E = \frac{1}{2} nF\)。
  
     (2) 若每个顶点引出的棱数为 \(m\)，则 \(E = \frac{1}{2} mV\)。


146. **球的体积与表面积**  
     球的半径为 \(R\)，则  
     $$
     V = \frac{4}{3}\pi R^3,\quad S = 4\pi R^2.
     $$


147. **球的组合体**  
     (1) 球与长方体的组合体：长方体的外接球的直径是长方体的体对角线长。
  
     (2) 球与正方体的组合体：  
         - 正方体的内切球的直径等于棱长；  
         - 正方体的棱切球的直径等于面对角线长；  
         - 正方体的外接球的直径等于体对角线长。
  
     (3) 球与正四面体的组合体：棱长为 \(a\) 的正四面体的内切球半径为 \(\frac{\sqrt{6}}{12}a\)，外接球半径为 \(\frac{\sqrt{6}}{4}a\)。


148. **柱体、锥体的体积**  
     $$
     V_{\text{柱体}} = Sh,\quad V_{\text{锥体}} = \frac{1}{3}Sh,
     $$

     其中 \(S\) 为底面积，\(h\) 为高。


---

## §10 排列组合与二项式定理

149. **分类计数原理（加法原理）**  
     $$
     N = m_1 + m_2 + \dots + m_n.
     $$


150. **分步计数原理（乘法原理）**  
     $$
     N = m_1 \times m_2 \times \dots \times m_n.
     $$


151. **排列数公式**  
     $$
     A_n^m = n(n-1)\dots(n-m+1) = \frac{n!}{(n-m)!} \quad (n,m\in\mathbb{N}^*,\ m\leq n).
     $$
  
     规定 \(0! = 1\)。


152. **排列恒等式**  
     (1) \(A_n^m = (n-m+1) A_n^{m-1}\)。
  
     (2) \(A_n^m = \frac{n}{n-m} A_{n-1}^m\)。
  
     (3) \(A_n^m = n A_{n-1}^{m-1}\)。
  
     (4) \(n A_n^m = A_{n+1}^{m+1} - A_n^m\)。
  
     (5) \(A_{n+1}^m = A_n^m + m A_n^{m-1}\)。
  
     (6) \(1! + 2\cdot2! + 3\cdot3! + \dots + n\cdot n! = (n+1)! - 1\)。


153. **组合数公式**  
     $$
     C_n^m = \frac{A_n^m}{m!} = \frac{n(n-1)\dots(n-m+1)}{1\cdot2\cdots m} = \frac{n!}{m!(n-m)!} \quad (n,m\in\mathbb{N}^*,\ m\leq n).
     $$


154. **组合数的两个性质**  
     (1) \(C_n^m = C_n^{n-m}\)。
  
     (2) \(C_n^m + C_n^{m-1} = C_{n+1}^m\)。
  
     规定 \(C_n^0 = 1\)。


155. **组合恒等式**  
     (1) \(C_n^m = \frac{n-m+1}{m} C_n^{m-1}\)。
  
     (2) \(C_n^m = \frac{n}{n-m} C_{n-1}^m\)。
  
     (3) \(C_n^m = \frac{n}{m} C_{n-1}^{m-1}\)。
  
     (4) \(\sum_{r=0}^n C_n^r = 2^n\)。
  
     (5) \(C_r^r + C_{r+1}^r + C_{r+2}^r + \dots + C_n^r = C_{n+1}^{r+1}\)。
  
     (6) \(C_n^0 + C_n^1 + C_n^2 + \dots + C_n^n = 2^n\)。
  
     (7) \(C_n^1 + C_n^3 + C_n^5 + \dots = C_n^0 + C_n^2 + C_n^4 + \dots = 2^{n-1}\)。
  
     (8) \(C_n^1 + 2C_n^2 + 3C_n^3 + \dots + n C_n^n = n 2^{n-1}\)。
  
     (9) \(C_m^r C_n^0 + C_m^{r-1} C_n^1 + \dots + C_m^0 C_n^r = C_{m+n}^r\)。
  
     (10) \((C_n^0)^2 + (C_n^1)^2 + \dots + (C_n^n)^2 = C_{2n}^n\)。


156. **排列数与组合数的关系**  
     $$
     A_n^m = m! \cdot C_n^m.
     $$


157. **单条件排列**（以下大前提：从 \(n\) 个元素中取 \(m\) 个元素的排列）  
     (1) “在位”与“不在位”：  
         - 某特元必在某位：有 \(A_{n-1}^{m-1}\) 种；  
         - 某特元不在某位：有 \(A_n^m - A_{n-1}^{m-1} = A_{n-1}^1 A_{n-1}^{m-1} = A_{n-1}^m + A_{n-1}^1 A_{n-1}^{m-1}\) 种。
  
     (2) 紧贴与插空（相邻与不相邻）：  
         - 定位紧贴：\(k\ (k\leq m\leq n)\) 个元在固定位的排列有 \(A_k^k A_{n-k}^{m-k}\) 种；  
         - 浮动紧贴：\(n\) 个元素的全排列把 \(k\) 个元排在一起的排法有 \(A_{n-k+1}^{n-k+1} A_k^k\) 种（常用捆绑法）；  
         - 插空：两组元素分别有 \(k,h\) 个（\(k\leq h+1\)），合起来全排列，\(k\) 个的一组互不能挨近的排列数有 \(A_h^k A_{k+1}^k\) 种。
  
     (3) 两组元素各相同的插空：\(m\) 个大球 \(n\) 个小球排成一列，小球必分开，排法数为  
         $$

         \frac{A_{m+1}^n}{A_n^n} = C_{m+1}^n \quad (n\leq m+1).
         $$
  
     (4) 两组相同元素的排列：两组元素各有 \(m\) 个和 \(n\) 个，各组元素分别相同的排列数为 \(C_{m+n}^n\)。


158. **分配问题**  
     (1) 平均分组有归属问题：将相异的 \(mn\) 个物件等分给 \(m\) 个人，各得 \(n\) 件，分配方法数为  
         $$
         N = C_{mn}^n \cdot C_{mn-n}^n \cdot C_{mn-2n}^n \cdots C_{2n}^n \cdot C_n^n = \frac{(mn)!}{(n!)^m}.
         $$
  
     (2) 平均分组无归属问题：将相异的 \(mn\) 个物体等分为无记号或无顺序的 \(m\) 堆，分配方法数为  
         $$
         N = \frac{(mn)!}{m!(n!)^m}.
         $$
  
     (3) 非平均分组有归属问题：将相异的 \(P=n_1+n_2+\dots+n_m\) 个物体分给 \(m\) 个人，分别得到 \(n_1,n_2,\dots,n_m\) 件（各数不相等），分配方法数为  
         $$
         N = C_P^{n_1} C_{P-n_1}^{n_2} \cdots C_{n_m}^{n_m} \cdot m! = \frac{P! \cdot m!}{n_1! n_2! \cdots n_m!}.
         $$
  
     (4) 非完全平均分组有归属问题：条件同 (3)，但 \(n_1,n_2,\dots,n_m\) 中有 \(a,b,c,\dots\) 个相等，则分配方法数为  
         $$
         N = \frac{P! \cdot m!}{n_1! n_2! \cdots n_m! \cdot (a! b! c! \cdots)}.
         $$
  
     (5) 非平均分组无归属问题：将相异的 \(P=n_1+n_2+\dots+n_m\) 个物体分为任意的 \(n_1,n_2,\dots,n_m\) 件无记号的 \(m\) 堆（各数不相等），分配方法数为  
         $$
         N = \frac{P!}{n_1! n_2! \cdots n_m!}.
         $$
  
     (6) 非完全平均分组无归属问题：条件同 (5)，但 \(n_1,n_2,\dots,n_m\) 中有 \(a,b,c,\dots\) 个相等，则分配方法数为  
         $$
         N = \frac{P!}{n_1! n_2! \cdots n_m! \cdot (a! b! c! \cdots)}.
         $$
  
     (7) 限定分组有归属问题：将相异的 \(P=n_1+n_2+\dots+n_m\) 个物体分给甲、乙、丙等 \(m\) 人，指定甲得 \(n_1\) 件、乙得 \(n_2\) 件等，分配方法数为  
         $$
         N = C_P^{n_1} C_{P-n_1}^{n_2} \cdots C_{n_m}^{n_m} = \frac{P!}{n_1! n_2! \cdots n_m!}.
         $$


159. **“错位问题”及其推广**  
     贝努利装错信封问题：\(n\) 封信与 \(n\) 个信封全部错位的组合数为  
     $$
     f(n) = n! \left(\frac{1}{2!} - \frac{1}{3!} + \frac{1}{4!} - \dots + (-1)^n \frac{1}{n!}\right).
     $$
  
     推广：\(n\) 个元素与 \(n\) 个位置，至少有 \(m\) 个元素错位的不同组合总数为  
     $$
     f(n,m) = n! - C_n^1 (n-1)! + C_n^2 (n-2)! - C_n^3 (n-3)! + \dots + (-1)^p C_n^p (n-p)! + \dots + (-1)^m C_n^m (n-m)!.
     $$


160. **不定方程 \(x_1 + x_2 + \dots + x_n = m\) 的解的个数**  
     (1) 正整数解有 \(C_{m-1}^{n-1}\) 个。
  
     (2) 非负整数解有 \(C_{m+n-1}^{n-1}\) 个。
  
     (3) 满足条件 \(x_i \geq k\ (k\in\mathbb{N}^*,\ 2\leq i\leq n-1)\) 的非负整数解有 \(C_{m+n-1-(n-2)(k-1)}^{n-1}\) 个。
  
     (4) 满足条件 \(x_i \leq k\) 的正整数解有  
         $$
         C_{m-1}^{n-1} - C_{n-2}^1 C_{m-1-k}^{n-1} + C_{n-2}^2 C_{m-1-2k}^{n-1} - \dots + (-1)^{n-2} C_{n-2}^{n-2} C_{m-1-(n-2)k}^{n-1}
         $$

         个。


161. **二项式定理**  
     $$
     (a+b)^n = C_n^0 a^n + C_n^1 a^{n-1} b + C_n^2 a^{n-2} b^2 + \dots + C_n^r a^{n-r} b^r + \dots + C_n^n b^n.
     $$
  
     通项公式：\(T_{r+1} = C_n^r a^{n-r} b^r \quad (r=0,1,2,\dots,n)\)。


---

## §11、12 概率与统计

162. **等可能性事件的概率**  
     $$
     P(A) = \frac{m}{n}.
     $$


163. **互斥事件 \(A,B\) 分别发生的概率的和**  
     $$
     P(A+B) = P(A) + P(B).
     $$


164. **\(n\) 个互斥事件分别发生的概率的和**  
     $$
     P(A_1+A_2+\dots+A_n) = P(A_1)+P(A_2)+\dots+P(A_n).
     $$


165. **独立事件 \(A,B\) 同时发生的概率**  
     $$
     P(A \cdot B) = P(A) \cdot P(B).
     $$


166. **\(n\) 个独立事件同时发生的概率**  
     $$
     P(A_1 \cdot A_2 \cdots A_n) = P(A_1) \cdot P(A_2) \cdots P(A_n).
     $$


167. **\(n\) 次独立重复试验中某事件恰好发生 \(k\) 次的概率**  
     $$
     P_n(k) = C_n^k p^k (1-p)^{n-k}.
     $$


168. **离散型随机变量的分布列的两个性质**  
     (1) \(P_i \geq 0 \ (i=1,2,\dots)\)；  
     (2) \(P_1 + P_2 + \dots = 1\)。


169. **数学期望**  
     $$
     E\xi = x_1 P_1 + x_2 P_2 + \dots + x_n P_n + \dots
     $$


170. **数学期望的性质**  
     (1) \(E(a\xi+b) = a E\xi + b\)。
  
     (2) 若 \(\xi \sim B(n,p)\)，则 \(E\xi = np\)。
  
     (3) 若 \(\xi\) 服从几何分布，且 \(P(\xi=k)=g(k,p)=q^{k-1}p\)，则 \(E\xi = \frac{1}{p}\)。


171. **方差**  
     $$
     D\xi = (x_1 - E\xi)^2 P_1 + (x_2 - E\xi)^2 P_2 + \dots + (x_n - E\xi)^2 P_n + \dots
     $$


172. **标准差**  
     $$
     \sigma\xi = \sqrt{D\xi}.
     $$


173. **方差的性质**  
     (1) \(D(a\xi+b) = a^2 D\xi\)。
  
     (2) 若 \(\xi \sim B(n,p)\)，则 \(D\xi = np(1-p)\)。
  
     (3) 若 \(\xi\) 服从几何分布，且 \(P(\xi=k)=g(k,p)=q^{k-1}p\)，则 \(D\xi = \frac{q}{p^2}\)。


174. **方差与期望的关系**  
     $$
     D\xi = E\xi^2 - (E\xi)^2.
     $$


175. **正态分布密度函数**  
     $$
     f(x) = \frac{1}{\sqrt{2\pi}\sigma} e^{-\frac{(x-\mu)^2}{2\sigma^2}}, \quad x\in(-\infty,+\infty),
     $$

     其中 \(\mu,\sigma\ (\sigma>0)\) 分别为均值与标准差。


176. **标准正态分布密度函数**  
     $$
     f(x) = \frac{1}{\sqrt{2\pi}} e^{-\frac{x^2}{2}}, \quad x\in(-\infty,+\infty).
     $$


177. **正态分布的概率计算**  
     对于 \(X \sim N(\mu,\sigma^2)\)，  
     $$
     P(X < x) = \Phi\left(\frac{x-\mu}{\sigma}\right),
     $$

     $$
     P(x_1 < X < x_2) = \Phi\left(\frac{x_2-\mu}{\sigma}\right) - \Phi\left(\frac{x_1-\mu}{\sigma}\right).
     $$


178. **回归直线方程**  
     $$
     \hat{y} = a + bx,
     $$

     其中  
     $$
     b = \frac{\sum_{i=1}^n (x_i-\bar{x})(y_i-\bar{y})}{\sum_{i=1}^n (x_i-\bar{x})^2} = \frac{\sum_{i=1}^n x_i y_i - n\bar{x}\bar{y}}{\sum_{i=1}^n x_i^2 - n\bar{x}^2},\quad a = \bar{y} - b\bar{x}.
     $$


179. **相关系数**  
     $$
     r = \frac{\sum_{i=1}^n (x_i-\bar{x})(y_i-\bar{y})}{\sqrt{\sum_{i=1}^n (x_i-\bar{x})^2} \sqrt{\sum_{i=1}^n (y_i-\bar{y})^2}} = \frac{\sum_{i=1}^n x_i y_i - n\bar{x}\bar{y}}{\sqrt{(\sum_{i=1}^n x_i^2 - n\bar{x}^2)(\sum_{i=1}^n y_i^2 - n\bar{y}^2)}}.
     $$
  
     \(|r| \leq 1\)，且 \(|r|\) 越接近 1，相关程度越大；越接近 0，相关程度越小。


---

## §13 极限

180. **特殊数列的极限**  
     (1) \(\lim_{n\to\infty} q^n = \begin{cases} 0, & |q|<1, \\ 1, & q=1, \\ \text{不存在}, & |q|>1 \text{ 或 } q=-1. \end{cases}\)  
     (2) \(\lim_{n\to\infty} \frac{a_k n^k + a_{k-1} n^{k-1} + \dots + a_0}{b_t n^t + b_{t-1} n^{t-1} + \dots + b_0} = \begin{cases} 0, & k<t, \\ \frac{a_k}{b_t}, & k=t, \\ \text{不存在}, & k>t. \end{cases}\)  
     (3) \(\lim_{n\to\infty} S_n = \frac{a_1}{1-q} \quad (|q|<1,\ S_n\text{ 为等比数列前 }n\text{ 项和})\)。


181. **函数的极限定理**  
     $$
     \lim_{x\to x_0} f(x) = a \Leftrightarrow \lim_{x\to x_0^-} f(x) = \lim_{x\to x_0^+} f(x) = a.
     $$


182. **函数的夹逼性定理**  
     如果函数 \(f(x),g(x),h(x)\) 在点 \(x_0\) 附近满足：  
     (1) \(g(x) \leq f(x) \leq h(x)\)；  
     (2) \(\lim_{x\to x_0} g(x) = \lim_{x\to x_0} h(x) = a\)（常数），  
     则 \(\lim_{x\to x_0} f(x) = a\)。该定理对单侧极限和 \(x\to\infty\) 也成立。


183. **几个常用极限**  
     (1) \(\lim_{n\to\infty} \frac{1}{n} = 0\)；\(\lim_{n\to\infty} a^n = 0 \ (|a|<1)\)。
  
     (2) \(\lim_{x\to x_0} x = x_0\)；\(\lim_{x\to x_0} \frac{1}{x} = \frac{1}{x_0}\)。


184. **两个重要的极限**  
     (1) \(\lim_{x\to 0} \frac{\sin x}{x} = 1\)。
  
     (2) \(\lim_{x\to\infty} \left(1+\frac{1}{x}\right)^x = e\)（\(e \approx 2.718281845\dots\)）。


185. **函数极限的四则运算法则**  
     若 \(\lim_{x\to x_0} f(x)=a,\ \lim_{x\to x_0} g(x)=b\)，则  
     $$
     \lim_{x\to x_0} [f(x)\pm g(x)] = a\pm b,\quad \lim_{x\to x_0} [f(x)\cdot g(x)] = a\cdot b,\quad \lim_{x\to x_0} \frac{f(x)}{g(x)} = \frac{a}{b}\ (b\neq0).
     $$


186. **数列极限的四则运算法则**  
     若 \(\lim_{n\to\infty} a_n = a,\ \lim_{n\to\infty} b_n = b\)，则  
     $$
     \lim_{n\to\infty} (a_n\pm b_n) = a\pm b,\quad \lim_{n\to\infty} (a_n\cdot b_n) = a\cdot b,\quad \lim_{n\to\infty} \frac{a_n}{b_n} = \frac{a}{b}\ (b\neq0),
     $$

     且 \(\lim_{n\to\infty} (c\cdot a_n) = c\cdot a\)（\(c\) 为常数）。


---

## §14 导数

187. **导数定义**  
     $$
     f'(x_0) = \lim_{\Delta x\to0} \frac{f(x_0+\Delta x)-f(x_0)}{\Delta x}.
     $$


188. **瞬时速度**  
     $$
     v = s'(t) = \lim_{\Delta t\to0} \frac{s(t+\Delta t)-s(t)}{\Delta t}.
     $$


189. **瞬时加速度**  
     $$
     a = v'(t) = \lim_{\Delta t\to0} \frac{v(t+\Delta t)-v(t)}{\Delta t}.
     $$


190. **导函数**  
     $$
     f'(x) = \lim_{\Delta x\to0} \frac{f(x+\Delta x)-f(x)}{\Delta x}.
     $$


191. **导数的几何意义**  
     函数 \(y=f(x)\) 在点 \(x_0\) 处的导数 \(f'(x_0)\) 是曲线 \(y=f(x)\) 在点 \(P(x_0,f(x_0))\) 处切线的斜率，切线方程为  
     $$
     y - y_0 = f'(x_0)(x-x_0).
     $$


192. **几种常见函数的导数**  
     (1) \(C' = 0\)（\(C\) 为常数）。
  
     (2) \((x^n)' = n x^{n-1} \ (n\in\mathbb{Q})\)。
  
     (3) \((\sin x)' = \cos x\)；\((\cos x)' = -\sin x\)。
  
     (4) \((\ln x)' = \frac{1}{x}\)；\((\log_a x)' = \frac{1}{x\ln a}\)。
  
     (5) \((e^x)' = e^x\)；\((a^x)' = a^x \ln a\)。


193. **导数的运算法则**  
     (1) \((u\pm v)' = u' \pm v'\)。
  
     (2) \((uv)' = u'v + uv'\)。
  
     (3) \(\left(\dfrac{u}{v}\right)' = \dfrac{u'v - uv'}{v^2} \ (v\neq0)\)。


194. **复合函数的求导法则**  
     设函数 \(u=\phi(x)\) 在点 \(x\) 处可导，函数 \(y=f(u)\) 在对应点 \(u\) 处可导，则复合函数 \(y=f(\phi(x))\) 在点 \(x\) 处可导，且  
     $$
     y_x' = y_u' \cdot u_x' \quad \text{或} \quad \frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}.
     $$


195. **常用的近似计算公式（当 \(|x|\) 很小时）**  
     (1) \(\sqrt{1+x} \approx 1+\frac{1}{2}x\)；\(\sqrt[n]{1+x} \approx 1+\frac{1}{n}x\)。
  
     (2) \((1+x)^\alpha \approx 1+\alpha x\)；\(\dfrac{1}{1+x} \approx 1-x\)。
  
     (3) \(e^x \approx 1+x\)。
  
     (4) \(\ln(1+x) \approx x\)。
  
     (5) \(\sin x \approx x\)（\(x\) 为弧度）。
  
     (6) \(\tan x \approx x\)（\(x\) 为弧度）。
  
     (7) \(\arctan x \approx x\)（\(x\) 为弧度）。


196. **判别极值的方法**  
     当函数 \(f(x)\) 在点 \(x_0\) 处连续时：  
     (1) 如果在 \(x_0\) 附近的左侧 \(f'(x)>0\)，右侧 \(f'(x)<0\)，则 \(f(x_0)\) 是极大值；  
     (2) 如果在 \(x_0\) 附近的左侧 \(f'(x)<0\)，右侧 \(f'(x)>0\)，则 \(f(x_0)\) 是极小值。


---

## §15 复数

197. **复数的相等**  
     $$
     a+bi = c+di \Leftrightarrow a=c,\ b=d \quad (a,b,c,d\in\mathbb{R}).
     $$


198. **复数的模**  
     $$
     |z| = |a+bi| = \sqrt{a^2+b^2}.
     $$


199. **复数的四则运算法则**  
     (1) \((a+bi)+(c+di) = (a+c)+(b+d)i\)。
  
     (2) \((a+bi)-(c+di) = (a-c)+(b-d)i\)。
  
     (3) \((a+bi)(c+di) = (ac-bd)+(bc+ad)i\)。
  
     (4) \(\dfrac{a+bi}{c+di} = \dfrac{ac+bd}{c^2+d^2} + \dfrac{bc-ad}{c^2+d^2}i \ (c+di\neq0)\)。


200. **复数的乘法的运算律**  
     交换律：\(z_1 \cdot z_2 = z_2 \cdot z_1\)；  
     结合律：\((z_1 \cdot z_2) \cdot z_3 = z_1 \cdot (z_2 \cdot z_3)\)；  
     分配律：\(z_1 \cdot (z_2+z_3) = z_1 \cdot z_2 + z_1 \cdot z_3\)。


201. **复平面上的两点间的距离公式**  
     $$
     d = |z_1-z_2| = \sqrt{(x_2-x_1)^2+(y_2-y_1)^2} \quad (z_1=x_1+y_1 i,\ z_2=x_2+y_2 i).
     $$


202. **向量的垂直**  
     非零复数 \(z_1=a+bi,\ z_2=c+di\) 对应的向量分别是 \(\overrightarrow{OZ_1},\ \overrightarrow{OZ_2}\)，则  
     $$
     \overrightarrow{OZ_1} \perp \overrightarrow{OZ_2} \Leftrightarrow z_1 \cdot \overline{z_2} \text{ 为纯虚数} \Leftrightarrow a c + b d = 0.
     $$


203. **实系数一元二次方程的解**  
     实系数一元二次方程 \(ax^2+bx+c=0\)：  
     (1) 若 \(\Delta=b^2-4ac>0\)，则 \(x_{1,2}=\dfrac{-b\pm\sqrt{\Delta}}{2a}\)；  
     (2) 若 \(\Delta=0\)，则 \(x_1=x_2=-\dfrac{b}{2a}\)；  
     (3) 若 \(\Delta<0\)，则在复数集内有共轭复数根 \(x=\dfrac{-b\pm\sqrt{-\Delta}\,i}{2a}\)。
