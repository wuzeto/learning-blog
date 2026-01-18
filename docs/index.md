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
      <div class="glitch" data-text="🚀 未来知识引擎">🚀 未来知识引擎</div>
    </div>
    
    <p class="subtitle">
      <span class="typing-text" data-text="探索·学习·创造·超越"></span>
      <span class="cursor">|</span>
    </p>
  </div>

  <!-- 星空背景 -->
  <div class="stars"></div>
  <div class="stars2"></div>
  <div class="stars3"></div>

  <!-- 3D网格背景 -->
  <canvas id="grid3d" class="grid-canvas"></canvas>

  <!-- 导航卡片（悬浮效果） -->
  <div class="nav-grid">
    
    <div class="nav-card" data-color="blue">
      <div class="card-icon">
        <i class="fas fa-atom"></i>
      </div>
      <h3>量子学习</h3>
      <p>在无限可能中寻找最优解</p>
      <a href="/docs/ai/" class="card-link">
        <span>进入维度</span>
        <i class="fas fa-arrow-right"></i>
      </a>
    </div>

    <div class="nav-card" data-color="purple">
      <div class="card-icon">
        <i class="fas fa-code"></i>
      </div>
      <h3>代码矩阵</h3>
      <p>数字世界的构建法则</p>
      <a href="/docs/programming/" class="card-link">
        <span>破解源码</span>
        <i class="fas fa-arrow-right"></i>
      </a>
    </div>

    <div class="nav-card" data-color="green">
      <div class="card-icon">
        <i class="fas fa-brain"></i>
      </div>
      <h3>神经接口</h3>
      <p>思想与技术的融合</p>
      <a href="/docs/thoughts/" class="card-link">
        <span>连接网络</span>
        <i class="fas fa-arrow-right"></i>
      </a>
    </div>

    <div class="nav-card" data-color="orange">
      <div class="card-icon">
        <i class="fas fa-rocket"></i>
      </div>
      <h3>星际远征</h3>
      <p>超越现有认知边界</p>
      <a href="/docs/future/" class="card-link">
        <span>启动引擎</span>
        <i class="fas fa-arrow-right"></i>
      </a>
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
      <span class="console-title">系统控制台</span>
    </div>
    <div class="console-content">
      <div class="console-line">
        <span class="prompt">$</span>
        <span class="command">加载知识库...</span>
      </div>
      <div class="console-line">
        <span class="prompt">></span>
        <span class="output">初始化思维网络... ✓</span>
      </div>
      <div class="console-line">
        <span class="prompt">></span>
        <span class="output">激活量子处理器... ✓</span>
      </div>
      <div class="console-line">
        <span class="prompt">></span>
        <span class="output">连接星际数据库... ✓</span>
      </div>
      <div class="console-line">
        <span class="prompt">></span>
        <span class="output highlight">系统就绪 | 欢迎来到未来</span>
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