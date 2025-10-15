// Get the hamburger menu element
const hamMenu = document.querySelector('.hammenu');
const navList = document.querySelector('header nav ul');

hamMenu.addEventListener('click', () => {
  navList.classList.toggle('show');
});


document.getElementById('currentyear').innerHTML = new Date().getFullYear();
const lastModifiedElement = document.getElementById('lastModified');
if (lastModifiedElement) {
    lastModifiedElement.innerHTML = `Last modification: ${document.lastModified}`;
}