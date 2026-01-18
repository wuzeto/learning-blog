---
hide:
  - navigation
  - toc
---

<!-- 主页容器 -->
<div class="homepage-container">

  <!-- 科幻风格标题区域 -->
  <div class="sci-fi-header">
    <div class="glitch-wrapper">
      <div class="glitch" data-text="🔬 学术矩阵核心">🔬 学术矩阵核心</div>
    </div>
    
    <p class="subtitle">
      <span class="typing-text" data-text="数学·计算机·算法·系统"></span>
      <span class="cursor">|</span>
    </p>
  </div>

  <!-- 星空背景 -->
  <div class="stars"></div>
  <div class="stars2"></div>
  <div class="stars3"></div>

  <!-- 3D网格背景 -->
  <canvas id="grid3d" class="grid-canvas"></canvas>

  <!-- 主要学科分类 -->
  <div class="nav-grid">
    
    <!-- 数学基础 -->
    <div class="nav-card" data-color="blue">
      <div class="card-icon">
        <i class="fas fa-calculator"></i>
      </div>
      <h3>数学基础</h3>
      <p>数学思维的核心基石</p>
      <a href="/math/" class="card-link">
        <span>进入矩阵</span>
        <i class="fas fa-arrow-right"></i>
      </a>
    </div>

    <!-- 计算机科学 -->
    <div class="nav-card" data-color="purple">
      <div class="card-icon">
        <i class="fas fa-laptop-code"></i>
      </div>
      <h3>计算机科学</h3>
      <p>数字世界的构建法则</p>
      <a href="/cs/" class="card-link">
        <span>编译源码</span>
        <i class="fas fa-arrow-right"></i>
      </a>
    </div>

    <!-- 算法与数据结构 -->
    <div class="nav-card" data-color="green">
      <div class="card-icon">
        <i class="fas fa-sitemap"></i>
      </div>
      <h3>算法与数据结构</h3>
      <p>问题求解的艺术</p>
      <a href="/algorithms/" class="card-link">
        <span>优化算法</span>
        <i class="fas fa-arrow-right"></i>
      </a>
    </div>

    <!-- 系统架构 -->
    <div class="nav-card" data-color="orange">
      <div class="card-icon">
        <i class="fas fa-server"></i>
      </div>
      <h3>系统架构</h3>
      <p>构建可靠的技术栈</p>
      <a href="/systems/" class="card-link">
        <span>部署系统</span>
        <i class="fas fa-arrow-right"></i>
      </a>
    </div>

  </div>

  <!-- 详细分类网格 -->
  <div class="category-grid">
    
    <!-- 数学子分类 -->
    <div class="category-section">
      <h2 class="category-title"><i class="fas fa-square-root-alt"></i> 数学矩阵</h2>
      <div class="sub-categories">
        <a href="/math/geometry/" class="sub-category" data-subject="几何">
          <span class="sub-icon">📐</span>
          <span class="sub-name">几何学</span>
        </a>
        <a href="/math/limits/" class="sub-category" data-subject="极限">
          <span class="sub-icon">∞</span>
          <span class="sub-name">极限理论</span>
        </a>
        <a href="/math/differential/" class="sub-category" data-subject="微分">
          <span class="sub-icon">∂</span>
          <span class="sub-name">微分学</span>
        </a>
        <a href="/math/integral/" class="sub-category" data-subject="积分">
          <span class="sub-icon">∫</span>
          <span class="sub-name">积分学</span>
        </a>
        <a href="/math/linear-algebra/" class="sub-category" data-subject="线代">
          <span class="sub-icon">⃗</span>
          <span class="sub-name">线性代数</span>
        </a>
        <a href="/math/probability/" class="sub-category" data-subject="概率">
          <span class="sub-icon">🎲</span>
          <span class="sub-name">概率论</span>
        </a>
        <a href="/math/statistics/" class="sub-category" data-subject="统计">
          <span class="sub-icon">📊</span>
          <span class="sub-name">统计学</span>
        </a>
      </div>
    </div>

    <!-- 计算机子分类 -->
    <div class="category-section">
      <h2 class="category-title"><i class="fas fa-microchip"></i> 计算机架构</h2>
      <div class="sub-categories">
        <a href="/cs/architecture/" class="sub-category" data-subject="架构">
          <span class="sub-icon">🏗️</span>
          <span class="sub-name">计算机架构</span>
        </a>
        <a href="/cs/storage/" class="sub-category" data-subject="存储">
          <span class="sub-icon">💾</span>
          <span class="sub-name">存储系统</span>
        </a>
        <a href="/cs/io-system/" class="sub-category" data-subject="IO">
          <span class="sub-icon">📥</span>
          <span class="sub-name">输入输出系统</span>
        </a>
        <a href="/cs/os/" class="sub-category" data-subject="系统">
          <span class="sub-icon">🖥️</span>
          <span class="sub-name">操作系统</span>
        </a>
        <a href="/cs/network/" class="sub-category" data-subject="网络">
          <span class="sub-icon">🌐</span>
          <span class="sub-name">网络通信</span>
        </a>
        <a href="/cs/database/" class="sub-category" data-subject="数据库">
          <span class="sub-icon">🗄️</span>
          <span class="sub-name">数据库系统</span>
        </a>
        <a href="/cs/compiler/" class="sub-category" data-subject="编译">
          <span class="sub-icon">⚙️</span>
          <span class="sub-name">编译原理</span>
        </a>
      </div>
    </div>

    <!-- 算法子分类 -->
    <div class="category-section">
      <h2 class="category-title"><i class="fas fa-project-diagram"></i> 算法与数据结构</h2>
      <div class="sub-categories">
        <a href="/algorithms/data-structures/" class="sub-category" data-subject="结构">
          <span class="sub-icon">📚</span>
          <span class="sub-name">数据结构</span>
        </a>
        <a href="/algorithms/sorting/" class="sub-category" data-subject="排序">
          <span class="sub-icon">🔢</span>
          <span class="sub-name">排序算法</span>
        </a>
        <a href="/algorithms/search/" class="sub-category" data-subject="查找">
          <span class="sub-icon">🔍</span>
          <span class="sub-name">查找算法</span>
        </a>
        <a href="/algorithms/dynamic/" class="sub-category" data-subject="动态">
          <span class="sub-icon">📈</span>
          <span class="sub-name">动态规划</span>
        </a>
        <a href="/algorithms/graph/" class="sub-category" data-subject="图论">
          <span class="sub-icon">🕸️</span>
          <span class="sub-name">图论算法</span>
        </a>
        <a href="/algorithms/string/" class="sub-category" data-subject="字符串">
          <span class="sub-icon">📝</span>
          <span class="sub-name">字符串算法</span>
        </a>
        <a href="/algorithms/complexity/" class="sub-category" data-subject="复杂度">
          <span class="sub-icon">⚡</span>
          <span class="sub-name">复杂度分析</span>
        </a>
      </div>
    </div>

  </div>

  <!-- 数据流特效 -->
  <div class="data-streams">
    <div class="stream"></div>
    <div class="stream"></div>
    <div class="stream"></div>
  </div>

  <!-- 控制台区域 -->
  <div class="console-section">
    <div class="console-header">
      <div class="console-dots">
        <span class="dot red"></span>
        <span class="dot yellow"></span>
        <span class="dot green"></span>
      </div>
      <span class="console-title">学术矩阵控制台</span>
    </div>
    <div class="console-content">
      <div class="console-line">
        <span class="prompt">$</span>
        <span class="command">初始化学术数据库...</span>
      </div>
      <div class="console-line">
        <span class="prompt">></span>
        <span class="output">加载数学知识库... ✓</span>
      </div>
      <div class="console-line">
        <span class="prompt">></span>
        <span class="output">编译计算机架构模块... ✓</span>
      </div>
      <div class="console-line">
        <span class="prompt">></span>
        <span class="output">优化算法矩阵... ✓</span>
      </div>
      <div class="console-line">
        <span class="prompt">></span>
        <span class="output highlight">学术矩阵就绪 | 知识密度：87.4%</span>
      </div>
    </div>
  </div>

  <!-- 进度仪表盘 -->
  <div class="dashboard-section">
    <h2 class="dashboard-title"><i class="fas fa-chart-line"></i> 学习进度</h2>
    <div class="progress-grid">
      <div class="progress-item">
        <div class="progress-label">数学基础</div>
        <div class="progress-bar">
          <div class="progress-fill" data-width="75" style="width: 75%"></div>
        </div>
        <div class="progress-percent">75%</div>
      </div>
      <div class="progress-item">
        <div class="progress-label">计算机科学</div>
        <div class="progress-bar">
          <div class="progress-fill" data-width="60" style="width: 60%"></div>
        </div>
        <div class="progress-percent">60%</div>
      </div>
      <div class="progress-item">
        <div class="progress-label">算法与数据结构</div>
        <div class="progress-bar">
          <div class="progress-fill" data-width="85" style="width: 85%"></div>
        </div>
        <div class="progress-percent">85%</div>
      </div>
      <div class="progress-item">
        <div class="progress-label">系统架构</div>
        <div class="progress-bar">
          <div class="progress-fill" data-width="50" style="width: 50%"></div>
        </div>
        <div class="progress-percent">50%</div>
      </div>
    </div>
  </div>

</div>

<!-- 全息投影效果 -->
<div class="hologram"></div>

<!-- 脚本和样式 -->
<script src="/javascripts/homepage-effects.js"></script>
<style>
  @import "/stylesheets/sci-fi-theme.css";
</style>