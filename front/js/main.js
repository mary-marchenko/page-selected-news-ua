document.addEventListener('DOMContentLoaded', () => {
    let darkBtn = document.querySelector('.dark-btn');
    darkBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark');
    });
});