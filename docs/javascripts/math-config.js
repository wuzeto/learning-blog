// math-config.js - KaTeX 自动渲染配置
document.addEventListener('DOMContentLoaded', function() {
    // 配置 KaTeX 自动渲染
    renderMathInElement(document.body, {
        delimiters: [
            {left: '$$', right: '$$', display: true},
            {left: '$', right: '$', display: false},
            {left: '\\(', right: '\\)', display: false},
            {left: '\\[', right: '\\]', display: true}
        ],
        throwOnError: false,
        // 添加宏定义方便使用
        macros: {
            "\\R": "\\mathbb{R}",
            "\\N": "\\mathbb{N}",
            "\\Z": "\\mathbb{Z}",
            "\\Q": "\\mathbb{Q}",
            "\\C": "\\mathbb{C}",
            "\\E": "\\mathbb{E}",
            "\\P": "\\mathbb{P}"
        }
    });
    
    // 隐藏 pymdownx.arithmatex 生成的原始 LaTeX 代码
    setTimeout(function() {
        document.querySelectorAll('.arithmatex').forEach(function(el) {
            el.style.display = 'none';
        });
    }, 100); // 延迟一点确保 KaTeX 已经渲染完成
});