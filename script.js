// Interactive features for the Mobile TPM Wiki

document.addEventListener('DOMContentLoaded', function() {
    // Like button functionality
    const likeBtn = document.querySelector('.like-btn');
    const likeText = document.querySelector('.like-text');
    let isLiked = false;

    likeBtn.addEventListener('click', function() {
        isLiked = !isLiked;
        if (isLiked) {
            likeBtn.style.background = '#0052cc';
            likeBtn.style.color = 'white';
            likeBtn.style.borderColor = '#0052cc';
            likeText.textContent = 'You liked this';
        } else {
            likeBtn.style.background = 'transparent';
            likeBtn.style.color = '#333';
            likeBtn.style.borderColor = '#ddd';
            likeText.textContent = 'Be the first to like this';
        }
    });

    // Show More button functionality
    const showMoreBtn = document.querySelector('.show-more-btn');
    showMoreBtn.addEventListener('click', function() {
        alert('This would load more activity items in a real implementation!');
    });

    // Animate team member cards on hover
    const teamMembers = document.querySelectorAll('.team-member');
    teamMembers.forEach(member => {
        member.addEventListener('mouseenter', function() {
            this.style.borderColor = '#0052cc';
        });
        
        member.addEventListener('mouseleave', function() {
            this.style.borderColor = '#dfe1e6';
        });
    });

    // Comment input focus effect
    const commentInput = document.querySelector('.comment-input');
    commentInput.addEventListener('focus', function() {
        this.style.boxShadow = '0 0 0 3px rgba(0, 82, 204, 0.1)';
    });

    commentInput.addEventListener('blur', function() {
        this.style.boxShadow = 'none';
    });

    // Edit button functionality
    const editBtn = document.querySelector('.btn-icon');
    editBtn.addEventListener('click', function() {
        alert('Edit mode would be enabled here!');
    });

    // Activity items click animation
    const activityItems = document.querySelectorAll('.activity-item');
    activityItems.forEach(item => {
        item.addEventListener('click', function() {
            this.style.background = '#f0f8ff';
            setTimeout(() => {
                this.style.background = 'transparent';
            }, 300);
        });
    });

    console.log('Mobile TPM Wiki initialized successfully! 🚀');
});
