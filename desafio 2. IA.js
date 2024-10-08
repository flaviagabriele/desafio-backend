const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
let currentIndex = 0;
document.getElementById('nextBtn').addEventListener('click', () => {
currentIndex = (currentIndex + 1) % images.length;
const galleryImage = document.getElementById('galleryImage');
galleryImage.style.opacity = '0';
setTimeout(() => {
galleryImage.src = images[currentIndex];
galleryImage.style.opacity = '1';
}, 500);
});