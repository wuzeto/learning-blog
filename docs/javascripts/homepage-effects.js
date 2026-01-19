// 主页特效脚本
document.addEventListener('DOMContentLoaded', function() {
  
    // 打字机效果（兼容学术版标题，优先 .typing-text，其次 .academic-subtitle）
    const typingElement = document.querySelector('.typing-text') || document.querySelector('.academic-subtitle');
    if (typingElement) {
      const text = typingElement.getAttribute('data-text') || typingElement.textContent || '';
      typingElement.textContent = '';
      let index = 0;
      
      function typeWriter() {
        if (index < text.length) {
          typingElement.textContent += text.charAt(index);
          index++;
          setTimeout(typeWriter, 100);
        } else {
          setTimeout(() => {
            typingElement.textContent = '';
            index = 0;
            typeWriter();
          }, 2000);
        }
      }
      
      if (text.length) {
        setTimeout(typeWriter, 1000);
      }
    }
    
    // 3D网格背景
    const canvas = document.getElementById('grid3d');
    if (canvas) {
      const ctx = canvas.getContext('2d');
      
      // 设置canvas尺寸
      function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
      
      resizeCanvas();
      window.addEventListener('resize', resizeCanvas);
      
      // 网格点
      const grid = [];
      const gridSize = 30;
      const gridWidth = Math.ceil(canvas.width / gridSize);
      const gridHeight = Math.ceil(canvas.height / gridSize);
      
      // 初始化网格
      for (let x = 0; x < gridWidth; x++) {
        grid[x] = [];
        for (let y = 0; y < gridHeight; y++) {
          grid[x][y] = {
            x: x * gridSize,
            y: y * gridSize,
            z: Math.random() * 100 - 50,
            pulse: Math.random() * Math.PI * 2
          };
        }
      }
      
      // 鼠标跟踪
      let mouseX = canvas.width / 2;
      let mouseY = canvas.height / 2;
      
      document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
      });
      
      // 动画循环
      function animate() {
        const now = Date.now() / 1000;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // 绘制网格线和点
        for (let x = 0; x < gridWidth; x++) {
          for (let y = 0; y < gridHeight; y++) {
            const point = grid[x][y];
            
            // 计算鼠标影响
            const dx = mouseX - point.x;
            const dy = mouseY - point.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const influence = Math.max(0, 1 - distance / 200);
            
            // 更新点的位置
            point.pulse += 0.05;
            const pulse = Math.sin(point.pulse) * 5;
            
            const finalX = point.x + Math.sin((point.z + now) * 0.5) * influence * 30;
            const finalY = point.y + pulse + Math.cos((point.z + now) * 0.5) * influence * 30;
            
            // 绘制点
            ctx.beginPath();
            ctx.arc(finalX, finalY, 2 + influence * 3, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0, ${200 + Math.sin(now) * 55}, 255, ${0.3 + influence * 0.7})`;
            ctx.fill();
            
            // 绘制连接线
            if (x < gridWidth - 1) {
              const nextPoint = grid[x + 1][y];
              const nextX = nextPoint.x + Math.sin((nextPoint.z + now) * 0.5) * influence * 30;
              const nextY = nextPoint.y + Math.sin(nextPoint.pulse) * 5 + 
                           Math.cos((nextPoint.z + now) * 0.5) * influence * 30;
              
              const alpha = Math.max(0.1, 0.5 - distance / 400);
              
              ctx.beginPath();
              ctx.moveTo(finalX, finalY);
              ctx.lineTo(nextX, nextY);
              ctx.strokeStyle = `rgba(0, 243, 255, ${alpha})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
            
            if (y < gridHeight - 1) {
              const nextPoint = grid[x][y + 1];
              const nextX = nextPoint.x + Math.sin((nextPoint.z + now) * 0.5) * influence * 30;
              const nextY = nextPoint.y + Math.sin(nextPoint.pulse) * 5 + 
                           Math.cos((nextPoint.z + now) * 0.5) * influence * 30;
              
              const alpha = Math.max(0.1, 0.5 - distance / 400);
              
              ctx.beginPath();
              ctx.moveTo(finalX, finalY);
              ctx.lineTo(nextX, nextY);
              ctx.strokeStyle = `rgba(0, 243, 255, ${alpha})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        }
        
        requestAnimationFrame(animate);
      }
      
      animate();
    }
    
    // 卡片悬停效果增强
    const cards = document.querySelectorAll('.nav-card');
    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateY = (x - centerX) / 25;
        const rotateX = (centerY - y) / 25;
        
        card.style.transform = `
          perspective(1000px) 
          rotateX(${rotateX}deg) 
          rotateY(${rotateY}deg)
          translateY(-10px)
          scale(1.03)
        `;
        
        // 光斑效果
        const light = card.querySelector('.light-spot');
        if (!light) {
          const lightSpot = document.createElement('div');
          lightSpot.className = 'light-spot';
          lightSpot.style.position = 'absolute';
          lightSpot.style.top = y + 'px';
          lightSpot.style.left = x + 'px';
          lightSpot.style.width = '100px';
          lightSpot.style.height = '100px';
          lightSpot.style.background = 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)';
          lightSpot.style.pointerEvents = 'none';
          card.appendChild(lightSpot);
        }
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
        const light = card.querySelector('.light-spot');
        if (light) light.remove();
      });
    });
    
    // 控制台模拟命令
    const consoleLines = document.querySelectorAll('.console-line');
    consoleLines.forEach((line, index) => {
      setTimeout(() => {
        line.style.opacity = '1';
        line.style.transform = 'translateY(0)';
      }, 500 * (index + 1));
    });
    
    // 添加粒子背景
    function createParticles() {
      const container = document.querySelector('.homepage-container');
      if (!container) return;
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 3 + 1 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = 'rgba(0, 243, 255, 0.6)';
        particle.style.borderRadius = '50%';
        particle.style.top = Math.random() * window.innerHeight + 'px';
        particle.style.left = Math.random() * window.innerWidth + 'px';
        particle.style.boxShadow = '0 0 6px rgba(0, 243, 255, 0.8)';
        particle.style.opacity = '0.8';
        particle.style.transition = 'transform 1s ease-out, opacity 1s ease-out';
        container.appendChild(particle);
        
        setTimeout(() => {
          particle.style.transform = `translateY(${Math.random() * -60}px)`;
          particle.style.opacity = '0.3';
        }, Math.random() * 2000);
      }
    }
    createParticles();
  
});

  // 在原有脚本末尾添加以下内容

// 进度条动画
document.addEventListener('DOMContentLoaded', function() {
    // 原有的脚本...
    
    // 进度条动画
    setTimeout(() => {
      const progressBars = document.querySelectorAll('.progress-fill');
      progressBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = width + '%';
      });
    }, 3000);
    
    // 动态更新进度百分比
    const progressItems = document.querySelectorAll('.progress-item');
    progressItems.forEach(item => {
      const fill = item.querySelector('.progress-fill');
      const percent = item.querySelector('.progress-percent');
      const width = fill.getAttribute('data-width');
      
      let current = 0;
      const interval = setInterval(() => {
        if (current < width) {
          current++;
          percent.textContent = current + '%';
        } else {
          clearInterval(interval);
        }
      }, 1500 / width);
    });
  });