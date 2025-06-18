// DocumentDB Hello World - Interactive Scripts

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add scroll effect to header
    const header = document.querySelector('.header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });

    // Add intersection observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe feature cards and steps for animation
    const animatedElements = document.querySelectorAll('.feature-card, .step');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add hover effect to code blocks
    const codeBlocks = document.querySelectorAll('.code-block, .code-inline');
    codeBlocks.forEach(block => {
        block.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'transform 0.2s ease';
        });
        
        block.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Add click-to-copy functionality for code snippets
    const codeSnippets = document.querySelectorAll('.code-inline code');
    codeSnippets.forEach(snippet => {
        snippet.style.cursor = 'pointer';
        snippet.title = 'Click to copy';
        
        snippet.addEventListener('click', function() {
            const text = this.textContent;
            navigator.clipboard.writeText(text).then(() => {
                // Show a temporary tooltip
                const tooltip = document.createElement('div');
                tooltip.textContent = 'Copied!';
                tooltip.style.cssText = `
                    position: absolute;
                    background: #10b981;
                    color: white;
                    padding: 0.5rem 1rem;
                    border-radius: 0.25rem;
                    font-size: 0.875rem;
                    z-index: 1000;
                    pointer-events: none;
                `;
                
                const rect = this.getBoundingClientRect();
                tooltip.style.left = rect.left + 'px';
                tooltip.style.top = (rect.top - 40) + 'px';
                
                document.body.appendChild(tooltip);
                
                setTimeout(() => {
                    document.body.removeChild(tooltip);
                }, 2000);
            }).catch(err => {
                console.log('Failed to copy text: ', err);
            });
        });
    });

    // Add a simple console message
    console.log('🚀 DocumentDB Hello World page loaded successfully!');
    console.log('📄 Welcome to DocumentDB - A modern document database for the cloud era');
    
    // Add some fun easter egg
    let clickCount = 0;
    const logo = document.querySelector('.logo');
    
    logo.addEventListener('click', function() {
        clickCount++;
        if (clickCount === 5) {
            this.style.transform = 'rotate(360deg)';
            this.style.transition = 'transform 0.5s ease';
            setTimeout(() => {
                this.style.transform = 'rotate(0deg)';
            }, 500);
            clickCount = 0;
        }
    });
}); 