// Enhanced Interactive Features for Mobile TPM Wiki

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Mobile TPM Wiki loaded successfully!');

    // ==================== Navigation & Scrolling ====================
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-item, .quick-link-card');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    // Update active nav item
                    document.querySelectorAll('.nav-item').forEach(item => {
                        item.classList.remove('active');
                    });
                    if (this.classList.contains('nav-item')) {
                        this.classList.add('active');
                    }
                }
            }
        });
    });

    // ==================== Theme Toggle ====================
    
    const themeToggle = document.getElementById('themeToggle');
    let isDark = false;

    themeToggle.addEventListener('click', function() {
        isDark = !isDark;
        document.body.classList.toggle('dark-mode', isDark);
        
        const icon = this.querySelector('i');
        if (isDark) {
            icon.className = 'fas fa-sun';
            this.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
        } else {
            icon.className = 'fas fa-moon';
            this.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
        }
        
        // Show notification
        showNotification(isDark ? 'Dark mode enabled' : 'Light mode enabled');
    });

    // ==================== Search Functionality ====================
    
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            if (searchTerm.length > 2) {
                console.log('Searching for:', searchTerm);
                // In a real implementation, this would filter content
                highlightSearchResults(searchTerm);
            } else {
                clearHighlights();
            }
        });
    }

    function highlightSearchResults(term) {
        // Simulated search highlight
        document.querySelectorAll('h2, h3, h4, p').forEach(element => {
            const text = element.textContent.toLowerCase();
            if (text.includes(term)) {
                element.style.background = 'rgba(255, 217, 61, 0.2)';
                element.style.transition = 'background 0.3s';
            }
        });
    }

    function clearHighlights() {
        document.querySelectorAll('h2, h3, h4, p').forEach(element => {
            element.style.background = '';
        });
    }

    // ==================== Contact Tabs ====================
    
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            
            // Remove active class from all tabs
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            const targetContent = document.getElementById(tabName + '-tab');
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });

    // ==================== Like Button ====================
    
    const likeBtn = document.querySelector('.like-btn');
    let isLiked = false;
    let likeCount = 12;

    if (likeBtn) {
        likeBtn.addEventListener('click', function() {
            isLiked = !isLiked;
            likeCount += isLiked ? 1 : -1;
            
            this.classList.toggle('liked', isLiked);
            const countElement = this.querySelector('.engagement-count');
            if (countElement) {
                countElement.textContent = likeCount;
            }
            
            // Animate like
            if (isLiked) {
                this.style.transform = 'scale(1.1)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 200);
                showNotification('❤️ Liked!');
            }
        });
    }

    // ==================== Notification System ====================
    
    function showNotification(message) {
        // Remove existing notifications
        const existing = document.querySelector('.notification-toast');
        if (existing) {
            existing.remove();
        }
        
        const notification = document.createElement('div');
        notification.className = 'notification-toast';
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #00B8A9 0%, #00897B 100%);
            color: white;
            padding: 15px 25px;
            border-radius: 10px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
            z-index: 10000;
            animation: slideInRight 0.3s ease;
            font-weight: 600;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    // Add animation keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // ==================== Team Member Interactions ====================
    
    const teamMembers = document.querySelectorAll('.team-member');
    teamMembers.forEach(member => {
        member.addEventListener('mouseenter', function() {
            this.style.borderLeft = '4px solid var(--secondary)';
        });
        
        member.addEventListener('mouseleave', function() {
            this.style.borderLeft = 'none';
        });
    });

    // Action buttons
    const actionButtons = document.querySelectorAll('.action-btn');
    actionButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const icon = this.querySelector('i');
            const action = icon.classList.contains('fa-slack') ? 'Slack' : 
                          icon.classList.contains('fa-envelope') ? 'Email' : 'Calendar';
            showNotification(`Opening ${action}...`);
        });
    });

    // ==================== Metric Cards Animation ====================
    
    const metricCards = document.querySelectorAll('.metric-card');
    metricCards.forEach(card => {
        card.addEventListener('click', function() {
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'translateY(-5px)';
            }, 100);
        });
    });

    // ==================== Timeline Progress Animation ====================
    
    const progressBars = document.querySelectorAll('.progress-fill');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const width = bar.style.width;
                bar.style.width = '0%';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            }
        });
    }, { threshold: 0.5 });

    progressBars.forEach(bar => observer.observe(bar));

    // ==================== Show More Button ====================
    
    const showMoreBtn = document.querySelector('.show-more-btn');
    if (showMoreBtn) {
        showMoreBtn.addEventListener('click', function() {
            const icon = this.querySelector('i');
            icon.classList.toggle('fa-chevron-down');
            icon.classList.toggle('fa-chevron-up');
            showNotification('Loading more activities...');
            
            // Simulate loading
            this.disabled = true;
            this.style.opacity = '0.5';
            setTimeout(() => {
                this.disabled = false;
                this.style.opacity = '1';
                showNotification('✓ Activities loaded');
            }, 1000);
        });
    }

    // ==================== Comment System ====================
    
    const commentInput = document.querySelector('.comment-input');
    const commentBtn = document.querySelector('.comment-btn');

    if (commentInput && commentBtn) {
        commentBtn.addEventListener('click', function() {
            const comment = commentInput.value.trim();
            if (comment) {
                showNotification('Comment posted successfully!');
                commentInput.value = '';
                
                // Animate button
                this.innerHTML = '<i class="fas fa-check"></i> Posted!';
                setTimeout(() => {
                    this.innerHTML = '<i class="fas fa-paper-plane"></i> Post Comment';
                }, 2000);
            } else {
                showNotification('⚠️ Please write a comment first');
            }
        });

        commentInput.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
                commentBtn.click();
            }
        });
    }

    // ==================== Activity Items ====================
    
    const activityItems = document.querySelectorAll('.activity-item');
    activityItems.forEach(item => {
        item.addEventListener('click', function() {
            this.style.background = '#f0f8ff';
            setTimeout(() => {
                this.style.background = 'transparent';
            }, 300);
        });
    });

    // ==================== Quick Links Animation ====================
    
    const quickLinks = document.querySelectorAll('.quick-link-card');
    quickLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (!this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const toolName = this.querySelector('span').textContent;
                showNotification(`Opening ${toolName}...`);
            }
        });
    });

    // ==================== Doc Cards ====================
    
    const docLinks = document.querySelectorAll('.doc-link');
    docLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const docTitle = this.closest('.doc-card').querySelector('h4').textContent;
            showNotification(`📖 Opening ${docTitle}...`);
        });
    });

    // ==================== Emergency Button ====================
    
    const emergencyBtn = document.querySelector('.emergency-btn');
    if (emergencyBtn) {
        emergencyBtn.addEventListener('click', function(e) {
            e.preventDefault();
            if (confirm('Are you sure you want to page the on-call engineer? This should only be used for L5 emergencies.')) {
                showNotification('🚨 Paging on-call engineer...');
            }
        });
    }

    // ==================== Notification Badge ====================
    
    const notificationBtn = document.querySelector('.notification-btn');
    if (notificationBtn) {
        notificationBtn.addEventListener('click', function() {
            const badge = this.querySelector('.notification-badge');
            if (badge) {
                badge.style.animation = 'pulse 0.5s';
                setTimeout(() => {
                    badge.style.animation = '';
                }, 500);
            }
            showNotification('3 new notifications');
        });
    }

    // ==================== Scroll-based Nav Highlighting ====================
    
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 200;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-item').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });

    // ==================== Keyboard Shortcuts ====================
    
    document.addEventListener('keydown', function(e) {
        // Cmd/Ctrl + K for search
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
            e.preventDefault();
            searchInput.focus();
            showNotification('🔍 Search activated');
        }
        
        // Esc to clear search
        if (e.key === 'Escape' && document.activeElement === searchInput) {
            searchInput.value = '';
            searchInput.blur();
            clearHighlights();
        }
    });

    // ==================== Page Load Animation ====================
    
    // Animate sections on load
    const sections = document.querySelectorAll('.container > section');
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        setTimeout(() => {
            section.style.transition = 'all 0.6s ease';
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, index * 100);
    });

    // ==================== Welcome Message ====================
    
    setTimeout(() => {
        showNotification('👋 Welcome to the Mobile TPM Hub!');
    }, 500);

    // ==================== Console Easter Egg ====================
    
    console.log('%c🚀 Mobile TPM Wiki', 'font-size: 20px; font-weight: bold; color: #00B8A9;');
    console.log('%cBuilt with Cursor AI', 'font-size: 12px; color: #666;');
    console.log('%cKeyboard Shortcuts:', 'font-size: 14px; font-weight: bold; margin-top: 10px;');
    console.log('  Cmd/Ctrl + K: Focus search');
    console.log('  Esc: Clear search');
    console.log('  Cmd/Ctrl + Enter: Post comment');
});

// ==================== Utility Functions ====================

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Format dates
function formatDate(date) {
    return new Intl.DateTimeFormat('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    }).format(date);
}

// ==================== Export for potential module use ====================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        debounce,
        formatDate
    };
}
