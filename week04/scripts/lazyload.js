document.getElementById("currentyear").innerHTML = new Date().getFullYear();
const lastModifiedElement = document.getElementById("lastModified");
if (lastModifiedElement) {
    lastModifiedElement.innerHTML = `Last modification: ${document.lastModified}`;
}
