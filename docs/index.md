---
hide:
  - navigation
  - toc
---

<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Orbitron:wght@400;700;900&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">

<div class="matrix-container">
  
  <div class="bg-layer">
    <div class="stars"></div>
    <div class="stars-2"></div>
    <div class="grid-floor"></div>
    <div class="cyber-overlay"></div>
  </div>

  <header class="cyber-header">
    <div class="logo-glitch-container">
      <h1 class="glitch-text" data-text="ACADEMIC MATRIX">ACADEMIC MATRIX</h1>
      <div class="scan-line"></div>
    </div>
    <p class="subtitle">
      <span class="bracket">[</span>
      <span class="typing-effect">SYSTEM.INIT(MATH, CS, ALGO)</span>
      <span class="cursor">_</span>
      <span class="bracket">]</span>
    </p>
  </header>

  <div class="nav-grid">
    
    <a href="/math/" class="cyber-card" style="--card-hue: 210;">
      <div class="card-content">
        <div class="card-icon"><i class="fas fa-infinity"></i></div>
        <h3>MATH_CORE</h3>
        <p>几何 · 微积分 · 线性代数</p>
        <div class="status-bar">
          <div class="bar-fill" style="width: 75%"></div>
        </div>
      </div>
      <div class="card-deco"></div>
      <div class="card-glare"></div>
    </a>

    <a href="/cs/" class="cyber-card" style="--card-hue: 280;">
      <div class="card-content">
        <div class="card-icon"><i class="fas fa-microchip"></i></div>
        <h3>CS_ARCH</h3>
        <p>架构 · 系统 · 编译原理</p>
        <div class="status-bar">
          <div class="bar-fill" style="width: 60%"></div>
        </div>
      </div>
      <div class="card-deco"></div>
      <div class="card-glare"></div>
    </a>

    <a href="/algorithms/" class="cyber-card" style="--card-hue: 150;">
      <div class="card-content">
        <div class="card-icon"><i class="fas fa-network-wired"></i></div>
        <h3>ALGO_NET</h3>
        <p>数据结构 · 图论 · 动态规划</p>
        <div class="status-bar">
          <div class="bar-fill" style="width: 85%"></div>
        </div>
      </div>
      <div class="card-deco"></div>
      <div class="card-glare"></div>
    </a>

    <a href="/systems/" class="cyber-card" style="--card-hue: 30;">
      <div class="card-content">
        <div class="card-icon"><i class="fas fa-server"></i></div>
        <h3>SYS_OPS</h3>
        <p>分布式 · 数据库 · 容器化</p>
        <div class="status-bar">
          <div class="bar-fill" style="width: 50%"></div>
        </div>
      </div>
      <div class="card-deco"></div>
      <div class="card-glare"></div>
    </a>

  </div>

  <section class="modules-section">
    <div class="section-title">
      <i class="fas fa-cube"></i> KNOWLEDGE_MODULES
      <div class="line-deco"></div>
    </div>
    
    <div class="hex-grid">
      <a href="/math/geometry/" class="module-capsule"><span>GEOMETRY</span></a>
      <a href="/math/calculus/" class="module-capsule"><span>CALCULUS</span></a>
      <a href="/cs/os/" class="module-capsule"><span>OS_KERNEL</span></a>
      <a href="/algorithms/graph/" class="module-capsule"><span>GRAPH_TH</span></a>
      <a href="/cs/network/" class="module-capsule"><span>TCP/IP</span></a>
      <a href="/systems/docker/" class="module-capsule"><span>DOCKER</span></a>
    </div>
  </section>

  <div class="terminal-wrapper">
    <div class="terminal-header">
      <div class="lights">
        <span></span><span></span><span></span>
      </div>
      <div class="title">ROOT@MATRIX-CORE:~</div>
    </div>
    <div class="terminal-body" id="console-output">
      <div class="log-entry">> Initializing neural link... [OK]</div>
      <div class="log-entry">> Loading knowledge graphs... [87%]</div>
      <div class="log-entry">> Access granted. Welcome, User.</div>
      <div class="log-entry active">> <span class="blink">_</span></div>
    </div>
  </div>

</div>

<script>
  // 简单的控制台打字效果
  document.addEventListener('DOMContentLoaded', () => {
    const texts = ["Analyzing data streams...", "Optimizing rendering...", "Matrix online."];
    let output = document.getElementById('console-output');
    
    texts.forEach((text, index) => {
      setTimeout(() => {
        let div = document.createElement('div');
        div.className = 'log-entry';
        div.innerText = `> ${text}`;
        output.insertBefore(div, output.lastElementChild);
      }, (index + 1) * 1200);
    });
  });
</script>