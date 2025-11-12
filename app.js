const addBtn = document.querySelector("#add-btn");
const inputBox = document.querySelector("#task-input");
const list = document.querySelector("#task-do");

function updateNumbers() {
    const items = document.querySelectorAll(".task-item");
    items.forEach((item, index) => {
        item.querySelector(".task-number").textContent = (index + 1) + ".";
    });
}

addBtn.addEventListener("click", () => {
    const taskText = inputBox.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");
    li.classList.add("task-item");
    li.innerHTML = `<span class="task-number"></span> <span class="task-text">${taskText}</span><button class="delete-btn">Delete</button>`;
    list.appendChild(li);
    inputBox.value = "";
    updateNumbers();
});

list.addEventListener("click", (e) => {
    const element = e.target;

    if (element.classList.contains("delete-btn")) {
        element.parentElement.remove();
        updateNumbers();
    }

    if (element.classList.contains("task-text")) {
        element.parentElement.classList.toggle("completed");
    }
});
