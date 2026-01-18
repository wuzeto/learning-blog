// math-config.js - 增强版 KaTeX 配置
(function() {
    'use strict';
    
    // 配置对象
    const katexConfig = {
        delimiters: [
            {left: '$$', right: '$$', display: true},
            {left: '$', right: '$', display: false},
            {left: '\\(', right: '\\)', display: false},
            {left: '\\[', right: '\\]', display: true}
        ],
        throwOnError: false,
        strict: false,  // 宽松模式
        output: 'htmlAndMathml',  // 同时输出 HTML 和 MathML
        trust: true,  // 信任一些特殊命令
        macros: {
            "\\R": "\\mathbb{R}",
            "\\N": "\\mathbb{N}",
            "\\Z": "\\mathbb{Z}",
            "\\Q": "\\mathbb{Q}",
            "\\C": "\\mathbb{C}",
            "\\E": "\\mathbb{E}",
            "\\P": "\\mathbb{P}",
            "\\dd": "\\mathrm{d}",
            "\\D": "\\mathrm{D}",
            "\\abs": ["\\left|#1\\right|", 1],
            "\\norm": ["\\left\\|#1\\right\\|", 1],
            "\\brak": ["\\left(#1\\right)", 1],
            "\\brac": ["\\left\\{#1\\right\\}", 1]
        },
        fleqn: false,  // 左对齐公式
        leqno: false   // 公式编号在左边
    };
    
    // 等待 KaTeX 加载完成的函数
    function waitForKaTeX(maxAttempts = 10, interval = 200) {
        return new Promise((resolve, reject) => {
            let attempts = 0;
            
            const checkKaTeX = () => {
                attempts++;
                
                if (window.katex && window.renderMathInElement) {
                    console.log(`KaTeX loaded successfully (attempt ${attempts})`);
                    resolve();
                } else if (attempts >= maxAttempts) {
                    console.warn('KaTeX not loaded after maximum attempts');
                    reject(new Error('KaTeX timeout'));
                } else {
                    setTimeout(checkKaTeX, interval);
                }
            };
            
            checkKaTeX();
        });
    }
    
    // 渲染数学公式
    function renderMath() {
        try {
            if (!window.renderMathInElement) {
                console.warn('renderMathInElement not available');
                return false;
            }
            
            renderMathInElement(document.body, katexConfig);
            console.log('Math formulas rendered');
            
            // 隐藏原始的 LaTeX 代码
            document.querySelectorAll('.arithmatex').forEach(el => {
                el.style.display = 'none';
            });
            
            // 为公式容器添加样式类
            document.querySelectorAll('.katex').forEach(el => {
                el.classList.add('math-rendered');
            });
            
            return true;
        } catch (error) {
            console.error('Error rendering math:', error);
            return false;
        }
    }
    
    // 延迟渲染（用于动态内容）
    function lazyRenderMath() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const container = entry.target;
                    
                    // 只渲染未渲染的容器
                    if (!container.classList.contains('math-rendered')) {
                        try {
                            renderMathInElement(container, katexConfig);
                            container.classList.add('math-rendered');
                        } catch (e) {
                            console.warn('Failed to render math in container:', e);
                        }
                    }
                    
                    observer.unobserve(container);
                }
            });
        }, {
            rootMargin: '100px',  // 提前100px开始渲染
            threshold: 0.1
        });
        
        // 观察所有可能包含公式的元素
        document.querySelectorAll('article, .content, .post-content, [class*="math"]').forEach(el => {
            observer.observe(el);
        });
    }
    
    // 主初始化函数
    async function initMathRendering() {
        console.log('Initializing KaTeX...');
        
        // 如果 KaTeX 已经加载，直接渲染
        if (window.katex && window.renderMathInElement) {
            renderMath();
            lazyRenderMath();
            return;
        }
        
        try {
            // 等待 KaTeX 加载
            await waitForKaTeX();
            
            // 立即渲染
            renderMath();
            
            // 设置延迟渲染
            setTimeout(lazyRenderMath, 300);
            
            // 监听 DOM 变化（用于动态加载的内容）
            const mutationObserver = new MutationObserver(() => {
                lazyRenderMath();
            });
            
            mutationObserver.observe(document.body, {
                childList: true,
                subtree: true
            });
            
            // 添加重试机制
            let retryCount = 0;
            const maxRetries = 3;
            
            const checkAndRetry = () => {
                setTimeout(() => {
                    const mathElements = document.querySelectorAll('script[type^="math/tex"]');
                    const renderedElements = document.querySelectorAll('.katex');
                    
                    if (mathElements.length > 0 && renderedElements.length === 0 && retryCount < maxRetries) {
                        retryCount++;
                        console.log(`Retrying math render (${retryCount}/${maxRetries})...`);
                        renderMath();
                        checkAndRetry();
                    }
                }, 1000);
            };
            
            checkAndRetry();
            
        } catch (error) {
            console.error('Failed to initialize KaTeX:', error);
            
            // 后备方案：显示纯文本
            document.querySelectorAll('script[type^="math/tex"]').forEach(el => {
                const text = el.textContent;
                const span = document.createElement('span');
                span.className = 'math-fallback';
                span.textContent = text;
                span.style.cssText = 'color: #ff6b6b; background: #fff5f5; padding: 2px 4px; border-radius: 3px; font-family: monospace;';
                el.parentNode.insertBefore(span, el);
                el.style.display = 'none';
            });
            
            document.querySelectorAll('.arithmatex').forEach(el => {
                el.style.display = 'block';
                el.style.color = '#666';
                el.style.fontStyle = 'italic';
            });
        }
    }
    
    // 加载策略
    const loadStrategies = {
        // 策略1：立即执行（如果 DOM 已就绪）
        immediate: function() {
            if (document.readyState === 'interactive' || document.readyState === 'complete') {
                initMathRendering();
                return true;
            }
            return false;
        },
        
        // 策略2：等待 DOMContentLoaded
        domContentLoaded: function() {
            document.addEventListener('DOMContentLoaded', initMathRendering);
            return true;
        },
        
        // 策略3：等待 window.load（所有资源加载完成）
        windowLoad: function() {
            if (document.readyState === 'complete') {
                initMathRendering();
            } else {
                window.addEventListener('load', initMathRendering);
            }
            return true;
        }
    };
    
    // 选择合适的加载策略
    function startMathRendering() {
        // 按优先级尝试不同策略
        if (loadStrategies.immediate()) {
            console.log('Math rendering: immediate strategy');
        } else if (loadStrategies.domContentLoaded()) {
            console.log('Math rendering: DOMContentLoaded strategy');
        } else {
            loadStrategies.windowLoad();
            console.log('Math rendering: window.load strategy');
        }
    }
    
    // 开始渲染
    startMathRendering();
    
    // 导出给全局使用（如果需要）
    window.mathRenderer = {
        render: renderMath,
        config: katexConfig,
        isReady: () => !!(window.katex && window.renderMathInElement)
    };
    
})();