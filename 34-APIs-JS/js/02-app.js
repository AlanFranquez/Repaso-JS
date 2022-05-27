// Intersection OBSERVER
// Nos permite identificar cuando un objeto está visible
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        if(entries[0].isIntersecting) {
            console.log('ya está visible')
        }
    });

    const premium = document.querySelector('.premium');
    observer.observe(premium)
});