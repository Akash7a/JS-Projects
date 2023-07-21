const form = document.querySelector("form");
const titleBox = document.querySelector("#title-box");
const descriptionBox = document.querySelector("#description-box");
const container = document.querySelector(".container");
let tasks = [];

function showAllTasks() {
    tasks.forEach((value, index) => {

        const div = document.createElement("div");
        div.setAttribute("class", "task");

        const innerDiv = document.createElement("div");

        const title = document.createElement("p");
        title.setAttribute("class", "title");
        title.innerText = value.title;
        innerDiv.append(title);

        const description = document.createElement("p");
        description.setAttribute("class", "description");
        description.innerText = value.description;
        innerDiv.append(description);

        const deleteBtn = document.createElement("button");
        deleteBtn.setAttribute("class", "delete-btn");
        deleteBtn.innerText = "-";
        deleteBtn.addEventListener("click", () => {
            tasks.splice(index, 1);
            showAllTasks();

        })
        innerDiv.append(deleteBtn);

        div.append(innerDiv);
        container.append(div)
    });
}
function removeTask() {
    tasks.forEach(() => {
        const div = document.querySelector(".taks");
        div.remove();
    })
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    removeTask();
    tasks.push = ({
        title: titleBox.value,
        description: descriptionBox.value
    })
    localStorage.setItem("tasks", JSON.stringify(tasks));
    showAllTasks();
});
console.log(tasks)