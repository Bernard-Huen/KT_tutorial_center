document.addEventListener("DOMContentLoaded", function ( ) {
    const toggleButton = document.querySelector(".navbar .mobile-menu-toggle");
    const mobileMenu = document.querySelector(".navbar .mobile-menu-items");

    toggleButton.addEventListener("click", function() {
        mobileMenu.classList.toggle("active");
    });
});


const buttons = document.querySelectorAll('.toggle-button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        if (answer.style.display === 'none' || answer.style.display === '') {
            answer.style.display = 'block';
            button.textContent = '➖'; 
        } else {
            answer.style.display = 'none';
            button.textContent = '➕'; 
        }
    });
});