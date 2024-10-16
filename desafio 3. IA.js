const images = document.querySelectorAll('.image-container img');

images.forEach(image => {
    image.addEventListener('click', () => {
        image.style.width = '400px';
        image.style.height = '300px';
    });
});

const date = new Date();
document.getElementById('date').textContent = date.toLocaleDateString();