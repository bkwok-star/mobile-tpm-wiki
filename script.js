// Enhanced Interactive Features for Mobile TPM Wiki

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Mobile TPM Wiki loaded successfully!');

    // ==================== Metric Card Modal ====================
    
    const metricCards = document.querySelectorAll('.metric-card.clickable');
    const modal = document.getElementById('metricModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    const modalClose = document.getElementById('modalClose');
    
    console.log('Found metric cards:', metricCards.length);
    console.log('Modal element:', modal);
    console.log('Modal title:', modalTitle);
    console.log('Modal body:', modalBody);
    console.log('Modal close:', modalClose);

    const metricData = {
        'success-rate': {
            title: 'Release Success Rate - 98.5%',
            content: `
                <div class="metric-detail">
                    <h3>Overview</h3>
                    <p>Our release success rate has improved by 2.3% compared to last month, reaching an all-time high of 98.5%.</p>
                </div>
                <div class="metric-chart-placeholder">
                    <i class="fas fa-chart-line" style="font-size: 3em;"></i>
                    <span style="margin-left: 15px;">Trend Chart Visualization</span>
                </div>
                <div class="metric-stats-grid">
                    <div class="metric-stat-item">
                        <strong>247</strong>
                        <span>Successful Releases</span>
                    </div>
                    <div class="metric-stat-item">
                        <strong>4</strong>
                        <span>Failed Releases</span>
                    </div>
                    <div class="metric-stat-item">
                        <strong>96.2%</strong>
                        <span>Last Month</span>
                    </div>
                    <div class="metric-stat-item">
                        <strong>95.8%</strong>
                        <span>6 Month Avg</span>
                    </div>
                </div>
                <div class="metric-detail">
                    <h3>Key Improvements</h3>
                    <ul style="padding-left: 20px; line-height: 1.8;">
                        <li>Enhanced automated testing coverage (+15%)</li>
                        <li>Improved rollback procedures</li>
                        <li>Better pre-release validation</li>
                        <li>Increased staging environment testing</li>
                    </ul>
                </div>
            `
        },
        'deploy-time': {
            title: 'Average Deploy Time - 2.4 hours',
            content: `
                <div class="metric-detail">
                    <h3>Overview</h3>
                    <p>Deploy time has decreased by 15 minutes this month through optimized CI/CD pipelines and parallel processing.</p>
                </div>
                <div class="metric-chart-placeholder">
                    <i class="fas fa-clock" style="font-size: 3em;"></i>
                    <span style="margin-left: 15px;">Timeline Breakdown</span>
                </div>
                <div class="metric-stats-grid">
                    <div class="metric-stat-item">
                        <strong>35min</strong>
                        <span>Build Time</span>
                    </div>
                    <div class="metric-stat-item">
                        <strong>45min</strong>
                        <span>Test Execution</span>
                    </div>
                    <div class="metric-stat-item">
                        <strong>60min</strong>
                        <span>Deployment</span>
                    </div>
                    <div class="metric-stat-item">
                        <strong>24min</strong>
                        <span>Post-Deploy Checks</span>
                    </div>
                </div>
                <div class="metric-detail">
                    <h3>Optimization Areas</h3>
                    <ul style="padding-left: 20px; line-height: 1.8;">
                        <li>Parallelized test suites</li>
                        <li>Cached build dependencies</li>
                        <li>Optimized Docker images</li>
                        <li>Incremental deployments</li>
                    </ul>
                </div>
            `
        },
        'releases': {
            title: 'Releases This Month - 24',
            content: `
                <div class="metric-detail">
                    <h3>Overview</h3>
                    <p>We're on track with 24 releases this month across all three mobile applications (Rider, Driver, Eater).</p>
                </div>
                <div class="metric-chart-placeholder">
                    <i class="fas fa-mobile-alt" style="font-size: 3em;"></i>
                    <span style="margin-left: 15px;">Release Distribution</span>
                </div>
                <div class="metric-stats-grid">
                    <div class="metric-stat-item">
                        <strong>9</strong>
                        <span>Rider Releases</span>
                    </div>
                    <div class="metric-stat-item">
                        <strong>8</strong>
                        <span>Driver Releases</span>
                    </div>
                    <div class="metric-stat-item">
                        <strong>7</strong>
                        <span>Eater Releases</span>
                    </div>
                    <div class="metric-stat-item">
                        <strong>25</strong>
                        <span>Target for Month</span>
                    </div>
                </div>
                <div class="metric-detail">
                    <h3>Platform Breakdown</h3>
                    <ul style="padding-left: 20px; line-height: 1.8;">
                        <li>iOS: 13 releases (54%)</li>
                        <li>Android: 11 releases (46%)</li>
                        <li>Hotfixes: 3 releases</li>
                        <li>Major versions: 2 releases</li>
                    </ul>
                </div>
            `
        },
        'developers': {
            title: 'Active Developers - 156',
            content: `
                <div class="metric-detail">
                    <h3>Overview</h3>
                    <p>Developer engagement increased by 12 new active contributors this week across mobile platforms.</p>
                </div>
                <div class="metric-chart-placeholder">
                    <i class="fas fa-users" style="font-size: 3em;"></i>
                    <span style="margin-left: 15px;">Developer Activity Heatmap</span>
                </div>
                <div class="metric-stats-grid">
                    <div class="metric-stat-item">
                        <strong>68</strong>
                        <span>iOS Developers</span>
                    </div>
                    <div class="metric-stat-item">
                        <strong>62</strong>
                        <span>Android Developers</span>
                    </div>
                    <div class="metric-stat-item">
                        <strong>26</strong>
                        <span>Full-stack</span>
                    </div>
                    <div class="metric-stat-item">
                        <strong>+12</strong>
                        <span>New This Week</span>
                    </div>
                </div>
                <div class="metric-detail">
                    <h3>Engagement Metrics</h3>
                    <ul style="padding-left: 20px; line-height: 1.8;">
                        <li>Average 4.2 commits per developer/day</li>
                        <li>1,847 pull requests merged this month</li>
                        <li>92% code review participation</li>
                        <li>3.4 hour average PR review time</li>
                    </ul>
                </div>
            `
        }
    };

    metricCards.forEach(card => {
        // Add cursor pointer style
        card.style.cursor = 'pointer';
        
        // Add click event
        card.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const metricType = this.getAttribute('data-metric');
            const data = metricData[metricType];
            
            console.log('Metric card clicked:', metricType);
            
            if (data) {
                modalTitle.textContent = data.title;
                modalBody.innerHTML = data.content;
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
        
        // Add tooltip on hover as alternative
        card.setAttribute('title', 'Click to view detailed metrics');
    });

    // Close modal
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }
    
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    // ESC key to close modal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
            closeModal();
        }
    });

    function closeModal() {
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
            console.log('Modal closed');
        }
    }

    // ==================== Countdown Timer ====================
    
    function updateCountdown() {
        const targetDate = new Date('2026-12-08T15:00:00-08:00'); // Dec 8, 2026, 3pm PST
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

    // ==================== Docs Dropdown ====================
    
    const docsDropdownBtn = document.getElementById('docsDropdownBtn');
    if (docsDropdownBtn) {
        docsDropdownBtn.addEventListener('click', function(e) {
            e.preventDefault();
        });
    }

    // ==================== Interactive Charts ====================
    
    // Build Time Chart (Line)
    const buildTimeCtx = document.getElementById('buildTimeChart');
    if (buildTimeCtx) {
        new Chart(buildTimeCtx, {
            type: 'line',
            data: {
                labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                datasets: [{
                    label: 'Build Time (minutes)',
                    data: [38, 35, 32, 35],
                    borderColor: '#4D96FF',
                    backgroundColor: 'rgba(77, 150, 255, 0.1)',
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
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return value + 'min';
                            }
                        }
                    }
                }
            }
        });
    }

    // Build Size Chart (Bar)
    const buildSizeCtx = document.getElementById('buildSizeChart');
    if (buildSizeCtx) {
        new Chart(buildSizeCtx, {
            type: 'bar',
            data: {
                labels: ['Rider', 'Driver', 'Eater'],
                datasets: [{
                    label: 'iOS (MB)',
                    data: [85, 92, 78],
                    backgroundColor: '#00B8A9'
                }, {
                    label: 'Android (MB)',
                    data: [72, 80, 68],
                    backgroundColor: '#4D96FF'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return value + 'MB';
                            }
                        }
                    }
                }
            }
        });
    }

    // Remove old release volume chart
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

    // ==================== Calendar removed - using timeline instead ====================

    // ==================== Mobile App Carousel ====================
    
    let currentSlide = 0;
    const slides = document.querySelectorAll('.app-preview');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.getElementById('carouselPrev');
    const nextBtn = document.getElementById('carouselNext');
    const container = document.getElementById('appsContainer');

    function showSlide(index) {
        if (!container || slides.length === 0) return;
        
        // Remove active class from all
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        // Calculate new index with wrapping
        currentSlide = ((index % slides.length) + slides.length) % slides.length;
        
        // Update transform
        container.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        // Add active class
        if (slides[currentSlide]) slides[currentSlide].classList.add('active');
        if (dots[currentSlide]) dots[currentSlide].classList.add('active');
        
        console.log('Showing slide:', currentSlide);
    }

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Previous button clicked');
            showSlide(currentSlide - 1);
        });

        nextBtn.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Next button clicked');
            showSlide(currentSlide + 1);
        });
    }

    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            console.log('Dot clicked:', index);
            showSlide(index);
        });
    });

    // Auto-advance carousel
    let carouselInterval = setInterval(() => {
        showSlide(currentSlide + 1);
    }, 7000);

    // Pause auto-advance on hover
    const appsCarousel = document.querySelector('.apps-carousel');
    if (appsCarousel) {
        appsCarousel.addEventListener('mouseenter', () => {
            clearInterval(carouselInterval);
        });

        appsCarousel.addEventListener('mouseleave', () => {
            carouselInterval = setInterval(() => {
                showSlide(currentSlide + 1);
            }, 7000);
        });
    }

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

    // ==================== Metric Cards Animation (removed - using modal click handler) ====================
    
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
