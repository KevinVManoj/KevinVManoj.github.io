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

  // current file (default to index.html)
  const current = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  const isHome =
    current === '' ||
    current === 'index.html' ||
    current === 'homepage.html' ||
    current === 'homepage' ||
    current === 'homepage.htm' ||
    current === 'homepage.php' ||
    current === 'homepage.aspx';

  navButtons.forEach(a => {
    const target = (a.getAttribute('href') || '').split('/').pop().toLowerCase();

    const match =
      target === current ||
      (isHome && (target === 'index.html' || target === 'homepage.html' || target === 'homepage'));

    if (match) {
      a.classList.add('is-active');          // <-- white pill via CSS
      a.setAttribute('aria-current', 'page');
      a.style.textDecorationLine = '';       // remove old underline styling if present
    } else {
      a.classList.remove('is-active');
      a.removeAttribute('aria-current');
      a.style.textDecorationLine = '';
    }
  });
}
