// HTMLInclude.js
document.addEventListener('DOMContentLoaded', function() {
    const headerContainer = document.getElementById('topSection'); // Ensure this ID exists in your HTML
    fetch('components/header.html')  // Check this path is correctly pointing to the 'header.html' file
        .then(response => response.text())
        .then(data => {
            headerContainer.innerHTML = data;
            updateActiveLink();
        }).catch(error => {
            console.error('Error loading the header:', error);  // This will show any errors in the console
        });
});

//makes it so the page you are on is highlighted
function updateActiveLink() {
    const navButtons = document.querySelectorAll('.nav-button');
    const currentLocation = window.location.pathname;

    navButtons.forEach(button => {
        if (button.href.includes(currentLocation)) {
            button.style.textDecorationLine = 'underline';
        }
    });
}
