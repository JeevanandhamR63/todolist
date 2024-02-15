function addTask() {
    const newTask = document.getElementById("newTask").value;
    if (newTask) {
        const taskList = document.getElementById("taskList");
        const li = document.createElement("li");
        li.textContent = newTask;
        taskList.appendChild(li);
        document.getElementById("newTask").value = "";
    }
}
