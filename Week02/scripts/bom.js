const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener("click", function () {
    if (input.value.trim() === "") {
        alert("Please enter a book and chapter");
        input.focus();
        return;
    }
    
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");
    li.textContent = input.value;
    deleteButton.textContent = "❌"
    li.appendChild(deleteButton);
    list.appendChild(li);

    deleteButton.addEventListener("click", function () {
        list.removeChild(li);
        input.focus();
    })
    input.value = "";
    input.focus();
})  
