function filterCategory(category) {
    const videos = document.querySelectorAll('.video-container');
    
    videos.forEach(video => {
        if (category === 'all' || video.getAttribute('data-category') === category) {
            video.style.display = 'block';
        } else {
            video.style.display = 'none';
        }
    });
}
