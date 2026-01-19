// math-config.js - 针对 MkDocs Material 的 KaTeX 配置
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing KaTeX for MkDocs Material...');
    
    // 等待页面完全加载
    setTimeout(function() {
        // 配置 KaTeX 渲染
        if (typeof renderMathInElement === 'function') {
            renderMathInElement(document.body, {
                delimiters: [
                    {left: '$$', right: '$$', display: true},
                    {left: '$', right: '$', display: false},
                    {left: '\\(', right: '\\)', display: false},
                    {left: '\\[', right: '\\]', display: true}
                ],
                throwOnError: false,
                strict: false,
                // 宏定义
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
                    "\\norm": ["\\left\\|#1\\right\\|", 1]
                },
                // 信任一些命令
                trust: function(context) {
                    return context.command === '\\includegraphics' ||
                           context.command === '\\href';
                }
            });
            
            console.log('KaTeX initialized successfully');
            
            // 隐藏 arithmatex 原始代码
            const hideOriginal = function() {
                document.querySelectorAll('script[type="math/tex"], script[type="math/tex; mode=inline"], script[type="math/tex; mode=display"]').forEach(function(el) {
                    if (el.parentNode && el.nextSibling && el.nextSibling.classList && 
                        el.nextSibling.classList.contains('katex')) {
                        el.style.display = 'none';
                    }
                });
            };
            
            // 延迟执行，确保 KaTeX 已渲染
            setTimeout(hideOriginal, 100);
        } else {
            console.warn('KaTeX render function not found. Check if KaTeX loaded correctly.');
            
            // 后备方案：显示原始 LaTeX
            document.querySelectorAll('script[type="math/tex"], script[type="math/tex; mode=inline"], script[type="math/tex; mode=display"]').forEach(function(el) {
                const span = document.createElement('span');
                span.className = 'math-fallback';
                span.textContent = el.textContent;
                span.style.cssText = 'color: #e91e63; font-family: monospace; background: #f5f5f5; padding: 2px 4px; border-radius: 3px; margin: 0 2px;';
                el.parentNode.insertBefore(span, el);
            });
        }
    }, 300); // 延迟 300ms 确保所有资源加载完成
});