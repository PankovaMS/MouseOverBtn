const padding = 20;
const button = document.getElementById ('runBtn');

button.addEventListener('mouseover', () => {
    const maxX = window.innerWidth - button.offsetWidth - padding;
    const maxY = window.innerHeight - button.offsetHeight - padding;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
});
