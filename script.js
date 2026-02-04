// Enhanced Interactive Features for Mobile TPM Wiki

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Mobile TPM Wiki loaded successfully!');

    // ==================== Countdown Timer ====================
    
    function updateCountdown() {
        const targetDate = new Date('2025-12-08T15:00:00-08:00'); // Dec 8, 2025, 3pm PST
        const now = new Date();
        const diff = targetDate - now;

        if (diff > 0) {
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            document.getElementById('days').textContent = String(days).padStart(2, '0');
            document.getElementById('hours').textContent = String(hours).padStart(2, '0');
            document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
            document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');

            // Add urgent class if less than 24 hours
            const timer = document.getElementById('countdownTimer');
            if (days === 0 && hours < 24) {
                timer.classList.add('urgent');
            }
        } else {
            document.getElementById('countdownTimer').innerHTML = '<div class="countdown-complete">🎉 Code freeze reached!</div>';
        }
    }

    // Update countdown every second
    updateCountdown();
    setInterval(updateCountdown, 1000);

    // ==================== Notification Dropdown ====================
    
    const notificationBtn = document.getElementById('notificationBtn');
    const notificationDropdown = document.getElementById('notificationDropdown');
    const notificationCount = document.getElementById('notificationCount');
    const markAllRead = document.getElementById('markAllRead');

    notificationBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        notificationDropdown.classList.toggle('active');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!notificationDropdown.contains(e.target) && !notificationBtn.contains(e.target)) {
            notificationDropdown.classList.remove('active');
        }
    });

    // Filter notifications
    const filterButtons = document.querySelectorAll('.filter-btn');
    const notificationItems = document.querySelectorAll('.notification-item');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            filterButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            notificationItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Mark all as read
    markAllRead.addEventListener('click', function() {
        notificationItems.forEach(item => {
            item.classList.remove('unread');
        });
        notificationCount.textContent = '0';
        notificationCount.style.display = 'none';
        showNotification('All notifications marked as read');
    });

    // Close individual notifications
    document.querySelectorAll('.notif-close').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const item = this.closest('.notification-item');
            item.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => {
                item.remove();
                updateNotificationCount();
            }, 300);
        });
    });

    function updateNotificationCount() {
        const unreadCount = document.querySelectorAll('.notification-item.unread').length;
        notificationCount.textContent = unreadCount;
        if (unreadCount === 0) {
            notificationCount.style.display = 'none';
        }
    }

    // ==================== Interactive Charts ====================
    
    // Success Rate Chart (Line)
    const successRateCtx = document.getElementById('successRateChart');
    if (successRateCtx) {
        new Chart(successRateCtx, {
            type: 'line',
            data: {
                labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [{
                    label: 'Success Rate',
                    data: [95.2, 96.8, 97.5, 98.1, 98.5, 98.5],
                    borderColor: '#00B8A9',
                    backgroundColor: 'rgba(0, 184, 169, 0.1)',
                    tension: 0.4,
                    fill: true,
                    pointRadius: 5,
                    pointHoverRadius: 7
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        min: 94,
                        max: 100,
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            }
                        }
                    }
                }
            }
        });
    }

    // Platform Distribution Chart (Doughnut)
    const platformCtx = document.getElementById('platformChart');
    if (platformCtx) {
        new Chart(platformCtx, {
            type: 'doughnut',
            data: {
                labels: ['iOS Rider', 'Android Rider', 'iOS Driver', 'Android Driver', 'iOS Eater', 'Android Eater'],
                datasets: [{
                    data: [22, 20, 18, 17, 13, 10],
                    backgroundColor: [
                        '#00B8A9',
                        '#00897B',
                        '#4D96FF',
                        '#2196F3',
                        '#FF6B6B',
                        '#ff8787'
                    ]
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });
    }

    // Release Volume Chart (Bar)
    const releaseVolumeCtx = document.getElementById('releaseVolumeChart');
    if (releaseVolumeCtx) {
        new Chart(releaseVolumeCtx, {
            type: 'bar',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [
                    {
                        label: 'Rider',
                        data: [8, 9, 10, 11, 9, 10, 11, 10, 9, 8, 7, 6],
                        backgroundColor: '#00B8A9'
                    },
                    {
                        label: 'Driver',
                        data: [7, 8, 9, 8, 8, 9, 8, 9, 8, 7, 6, 5],
                        backgroundColor: '#4D96FF'
                    },
                    {
                        label: 'Eater',
                        data: [6, 7, 8, 7, 7, 8, 9, 8, 7, 9, 8, 7],
                        backgroundColor: '#FF6B6B'
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        position: 'top'
                    }
                },
                scales: {
                    x: {
                        stacked: true
                    },
                    y: {
                        stacked: true,
                        beginAtZero: true
                    }
                }
            }
        });
    }

    // ==================== Interactive Calendar ====================
    
    const calendarEl = document.getElementById('calendar');
    if (calendarEl) {
        const calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: 'dayGridMonth',
            headerToolbar: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek'
            },
            events: [
                {
                    title: 'Rider iOS 4.52.0',
                    start: '2025-12-08',
                    color: '#00B8A9'
                },
                {
                    title: 'Driver Android 4.48.2',
                    start: '2025-12-10',
                    color: '#4D96FF'
                },
                {
                    title: 'Eater iOS 5.23.1',
                    start: '2025-12-12',
                    color: '#FF6B6B'
                },
                {
                    title: 'Rider Android 4.51.5',
                    start: '2025-12-15',
                    color: '#00897B'
                },
                {
                    title: 'Final 2025 Rollout',
                    start: '2025-12-18',
                    end: '2025-12-19',
                    color: '#FFD93D'
                },
                {
                    title: '2026 Releases Resume',
                    start: '2026-01-05',
                    color: '#6BCB77'
                },
                {
                    title: 'Rider iOS 5.0.0',
                    start: '2026-01-12',
                    color: '#00B8A9'
                },
                {
                    title: 'Driver iOS 5.0.0',
                    start: '2026-01-15',
                    color: '#4D96FF'
                }
            ],
            eventClick: function(info) {
                showNotification(`📅 ${info.event.title} - ${info.event.start.toLocaleDateString()}`);
            }
        });
        calendar.render();
    }

    // ==================== Mobile App Carousel ====================
    
    let currentSlide = 0;
    const slides = document.querySelectorAll('.app-preview');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.getElementById('carouselPrev');
    const nextBtn = document.getElementById('carouselNext');

    function showSlide(index) {
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        dots.forEach(dot => {
            dot.classList.remove('active');
        });

        currentSlide = (index + slides.length) % slides.length;
        
        const container = document.getElementById('appsContainer');
        container.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    prevBtn.addEventListener('click', () => {
        showSlide(currentSlide - 1);
    });

    nextBtn.addEventListener('click', () => {
        showSlide(currentSlide + 1);
    });

    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            showSlide(index);
        });
    });

    // Auto-advance carousel
    let carouselInterval = setInterval(() => {
        showSlide(currentSlide + 1);
    }, 5000);

    // Pause auto-advance on hover
    const appsCarousel = document.querySelector('.apps-carousel');
    appsCarousel.addEventListener('mouseenter', () => {
        clearInterval(carouselInterval);
    });

    appsCarousel.addEventListener('mouseleave', () => {
        carouselInterval = setInterval(() => {
            showSlide(currentSlide + 1);
        }, 5000);
    });

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

    // Notification badge animation handled by dropdown section above

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
