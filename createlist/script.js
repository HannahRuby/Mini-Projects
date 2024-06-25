function addTask() {
  const taskInput = document.getElementById("taskInput");

  if (taskInput.value !== "") {
    const listItem = document.createElement("li");
    listItem.innerHTML = `${taskInput.value} <button onclick="removeTask(this)">Remove</button>`;

    const taskList = document.getElementById("taskList");
    taskList.appendChild(listItem);

    taskInput.value = "";
  }
}
function removeTask(button) {
  const listItem = button.parentElement;
  listItem.remove();
}
