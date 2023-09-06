document.addEventListener('DOMContentLoaded', function () {
    const revealingCircle = document.getElementById('revealingCircle');
    
    window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY + window.innerHeight;
        const circlePosition = revealingCircle.offsetTop;
        
        if (scrollPosition > circlePosition + 100) {
            revealingCircle.classList.add('visible');
        }
    });
});