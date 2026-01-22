---
hide:
  - navigation
  - toc
---

<!-- Fonts for academic aesthetics -->
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Merriweather:wght@300;400;700&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<div class="homepage-container">
  
  <!-- Background layers -->
  <div class="bg-layer">
    <div class="stars"></div>
    <div class="stars2"></div>
    <div class="stars3"></div>
  </div>

  <!-- Academic header -->
  <header class="academic-header">
    <h1 class="academic-title">ACADEMIC MATRIX</h1>
    <p class="academic-subtitle">系统化学习 · 数学 · 计算机科学 · 算法与系统</p>
  </header>

  <!-- Navigation grid -->
  <div class="nav-grid">
    
    <a href="math/" class="nav-card" data-color="blue">
      <div class="card-icon"><i class="fas fa-infinity"></i></div>
      <h3>MATH_CORE</h3>
      <p>几何 · 微积分 · 线性代数</p>
      <div class="status-bar">
        <div class="bar-fill" style="width: 75%"></div>
      </div>
    </a>

    <a href="cs/" class="nav-card" data-color="purple">
      <div class="card-icon"><i class="fas fa-microchip"></i></div>
      <h3>CS_ARCH</h3>
      <p>架构 · 系统 · 编译原理</p>
      <div class="status-bar">
        <div class="bar-fill" style="width: 60%"></div>
      </div>
    </a>

    <a href="algorithms/" class="nav-card" data-color="green">
      <div class="card-icon"><i class="fas fa-network-wired"></i></div>
      <h3>ALGO_NET</h3>
      <p>数据结构 · 图论 · 动态规划</p>
      <div class="status-bar">
        <div class="bar-fill" style="width: 85%"></div>
      </div>
    </a>

    <a href="systems/" class="nav-card" data-color="orange">
      <div class="card-icon"><i class="fas fa-server"></i></div>
      <h3>SYS_OPS</h3>
      <p>分布式 · 数据库 · 容器化</p>
      <div class="status-bar">
        <div class="bar-fill" style="width: 50%"></div>
      </div>
    </a>

    <!-- 替换原有MC卡片，新增指向mc.html的点击入口 -->
      <a href="mc.html" class="nav-card" data-color="cyan"> <!-- 改用专属青色，区分其他卡片 -->
      <div class="card-icon"><i class="fas fa-map-marked-alt"></i></div> <!-- 地图图标更贴合MC地图 -->
      <h3>MC_MAP</h3>
      <p>我的世界 · 地图可视化</p>
      <div class="status-bar">
        <div class="bar-fill" style="width: 50%"></div>
      </div>
    </a>

  </div>

  <!-- Category sections -->
  <div class="category-grid">
    
    <div class="category-section">
      <div class="category-title"><i class="fas fa-shapes"></i> 数学</div>
      <div class="sub-categories">
        <a href="math/elementary1/" class="sub-category">
          <div class="sub-icon"><i class="fas fa-drafting-compass"></i></div>
          <div class="sub-name">初中基础 Elementary1</div>
        <a href="math/elementary2/" class="sub-category">
          <div class="sub-icon"><i class="fas fa-drafting-compass"></i></div>
          <div class="sub-name">高中基础 Elementary2</div>
        <a href="math/geometry/" class="sub-category">
          <div class="sub-icon"><i class="fas fa-drafting-compass"></i></div>
          <div class="sub-name">几何 Geometry</div>
        </a>
        <a href="math/differential/" class="sub-category">
          <div class="sub-icon"><i class="fas fa-calculator"></i></div>
          <div class="sub-name">微分 Calculus</div>
        </a>
        <a href="math/linear-algebra/" class="sub-category">
          <div class="sub-icon"><i class="fas fa-border-none"></i></div>
          <div class="sub-name">线性代数 Linear Algebra</div>
        </a>
        <a href="math/probability/" class="sub-category">
          <div class="sub-icon"><i class="fas fa-percent"></i></div>
          <div class="sub-name">概率 Probability</div>
        </a>
      </div>
    </div>

    <div class="category-section">
      <div class="category-title"><i class="fas fa-microchip"></i> 计算机科学</div>
      <div class="sub-categories">
        <a href="cs/os/" class="sub-category">
          <div class="sub-icon"><i class="fas fa-memory"></i></div>
          <div class="sub-name">操作系统 OS</div>
        </a>
        <a href="cs/network/" class="sub-category">
          <div class="sub-icon"><i class="fas fa-network-wired"></i></div>
          <div class="sub-name">网络 Network</div>
        </a>
        <a href="cs/database/" class="sub-category">
          <div class="sub-icon"><i class="fas fa-database"></i></div>
          <div class="sub-name">数据库 Database</div>
        </a>
        <a href="cs/compiler/" class="sub-category">
          <div class="sub-icon"><i class="fas fa-code"></i></div>
          <div class="sub-name">编译原理 Compiler</div>
        </a>
      </div>
    </div>

    <div class="category-section">
      <div class="category-title"><i class="fas fa-project-diagram"></i> 算法</div>
      <div class="sub-categories">
        <a href="algorithms/data-structures/" class="sub-category">
          <div class="sub-icon"><i class="fas fa-sitemap"></i></div>
          <div class="sub-name">数据结构 Data Structures</div>
        </a>
        <a href="algorithms/graph/" class="sub-category">
          <div class="sub-icon"><i class="fas fa-project-diagram"></i></div>
          <div class="sub-name">图论 Graph</div>
        </a>
        <a href="algorithms/dynamic/" class="sub-category">
          <div class="sub-icon"><i class="fas fa-stream"></i></div>
          <div class="sub-name">动态规划 DP</div>
        </a>
        <a href="algorithms/search/" class="sub-category">
          <div class="sub-icon"><i class="fas fa-search"></i></div>
          <div class="sub-name">查找 Search</div>
        </a>
      </div>
    </div>
  </div>

  <!-- Academic reading list -->
  <div class="reading-list">
    <a href="math/linear-algebra/" class="reading-item">
      <div class="title">Linear Algebra Essentials</div>
      <div class="meta">主线 · 矩阵 · 特征值</div>
    </a>
    <a href="cs/architecture/" class="reading-item">
      <div class="title">Computer Architecture Map</div>
      <div class="meta">基础 · 指令 · 存储层级</div>
    </a>
    <a href="algorithms/dynamic/" class="reading-item">
      <div class="title">Dynamic Programming Toolkit</div>
      <div class="meta">子问题 · 状态转移 · 优化</div>
    </a>
  </div>

  <!-- Progress dashboard -->
  <div class="dashboard-section">
    <div class="dashboard-title"><i class="fas fa-tachometer-alt"></i> 学习进度</div>
    <div class="progress-grid">
      <div class="progress-item">
        <div class="progress-label">数学</div>
        <div class="progress-bar"><div class="progress-fill" style="width: 72%"></div></div>
        <div class="progress-percent">72%</div>
      </div>
      <div class="progress-item">
        <div class="progress-label">计算机科学</div>
        <div class="progress-bar"><div class="progress-fill" style="width: 58%"></div></div>
        <div class="progress-percent">58%</div>
      </div>
      <div class="progress-item">
        <div class="progress-label">算法</div>
        <div class="progress-bar"><div class="progress-fill" style="width: 80%"></div></div>
        <div class="progress-percent">80%</div>
      </div>
      <div class="progress-item">
        <div class="progress-label">系统</div>
        <div class="progress-bar"><div class="progress-fill" style="width: 46%"></div></div>
        <div class="progress-percent">46%</div>
      </div>
      <div class="progress-item">
        <div class="progress-label">MC</div>
        <div class="progress-bar"><div class="progress-fill" style="width: 46%"></div></div>
        <div class="progress-percent">地图</div>
      </div>
    </div>
  </div>

  <!-- Academic quote -->
  <div class="quote-section">
    <div>“Mathematics is the language in which God has written the universe.”</div>
    <div class="author">— Galileo Galilei</div>
  </div>

  <!-- Console section -->
  <div class="console-section">
    <div class="console-header">
      <div class="console-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div>
      <div class="console-title">root@matrix-core:~</div>
    </div>
    <div class="console-content" id="console-out">
      <div class="console-line"><span class="prompt">$</span> <span class="command">init knowledge_graphs</span></div>
      <div class="console-line"><span class="prompt">$</span> <span class="command">load modules [math, cs, algo, systems]</span></div>
      <div class="console-line"><span class="prompt">$</span> <span class="output highlight">ready. welcome, scholar.</span></div>
    </div>
  </div>

</div>

<script>
  document.addEventListener('DOMContentLoaded', () => {
    const extraLines = [
      { t: '$', c: 'Analyzing data streams...' },
      { t: '$', c: 'Optimizing rendering pipeline...' },
      { t: '$', c: 'Matrix online.' }
    ];
    const out = document.getElementById('console-out');
    extraLines.forEach((line, i) => {
      setTimeout(() => {
        const div = document.createElement('div');
        div.className = 'console-line';
        div.innerHTML = `<span class="prompt">${line.t}</span> <span class="output">${line.c}</span>`;
        out.appendChild(div);
      }, (i + 1) * 1200);
    });
  });
</script>