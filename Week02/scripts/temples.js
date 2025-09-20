const hammenu = document.querySelector('.hammenu');
const navUl = document.querySelector('#ul-li');

hammenu.addEventListener('click', () => {
  navUl.classList.toggle('show');
});

document.getElementById('currentyear').innerHTML = new Date().getFullYear();
const lastModifiedElement = document.getElementById('lastModified');
if (lastModifiedElement) {
    lastModifiedElement.innerHTML = `Last modification: ${document.lastModified}`;
}