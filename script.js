
// Basic JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded successfully!');
    
    // Add click event to images
    const images = document.querySelectorAll('.image-gallery img');
    images.forEach(img => {
        img.addEventListener('click', function() {
            alert(`You clicked on ${this.alt}`);
        });
    });
});
