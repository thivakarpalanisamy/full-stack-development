const input = document.getElementById("taskInput");
const btn = document.getElementById("addBtn");
const list = document.getElementById("taskList");

btn.addEventListener("click", () => {
    const taskText = input.value.trim();
    if (taskText === "") return;
    const li = document.createElement("li");
    li.innerText = taskText;
    li.addEventListener("click", () => {
        li.classList.toggle("done");
    });
    li.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        li.remove();
    });
    list.appendChild(li);
    input.value = "";
});