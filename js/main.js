const toggleButton = document.getElementById('toggleButton');
const sidebar = document.getElementById('sidebar');
const closeButton = document.getElementById('closeButton');

toggleButton.addEventListener('click', () => {
    sidebar.classList.add('open');
});

closeButton.addEventListener('click', () => {
    sidebar.classList.remove('open');
});