function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        var li = document.createElement("li");
        li.textContent = taskInput.value;

        var span = document.createElement("span");
        span.textContent = " x";
        span.classList.add("close");
        span.onclick = function() {
            var li = this.parentElement;
            li.style.display = "none";
        };

        li.appendChild(span);
        li.onclick = function() {
            this.classList.toggle("completed");
        };

        taskList.appendChild(li);
        taskInput.value = "";
    }
}
