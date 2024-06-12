displayStoredTasks();

function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskList = document.getElementById("taskList");

  if (taskInput.value.trim() !== "") {
    var newListItem = document.createElement("input");
    newListItem.type = "checkbox";
    newListItem.id = "taskItem";
    newListItem.onclick = function () {
      taskCompleted(newListItem);
    };

    var newLabel = document.createElement("label");
    newLabel.appendChild(document.createTextNode(taskInput.value));

    var newCloseButton = document.createElement("button");
    newCloseButton.className = "btn-close button btn-xs";
    newCloseButton.innerHTML = "&times";
    newCloseButton.onclick = function () {
      deleteTask(newListItem, newLabel, newCloseButton, newListItemBr);
    };

    var newListItemBr = document.createElement("br");

    taskList.appendChild(newListItem);
    taskList.appendChild(newLabel);
    taskList.appendChild(newCloseButton);
    taskList.appendChild(newListItemBr);

    taskInput.value = "";
    addStoredTask(newLabel.innerHTML);
  } else {
    alert("Please enter a task!");
  }
}

document.getElementById("taskInput").addEventListener("keypress", function (event) {
    if (event.keyCode === 13) {
      addTask();
    }
  });

function taskCompleted(checkedTask) {
  var checkedLabel = document.getElementById("label");
  var label = checkedTask.nextElementSibling;

  if (checkedTask.checked == true) {
    label.style.color = "green";
  } else {
    label.style.color = "#DBEDF3";
  }
}

function deleteTask(newListItem, newLabel, newCloseButton, newListItemBr) {
  newListItem.remove();
  newLabel.remove();
  newCloseButton.remove();
  newListItemBr.remove();
  deleteStoredTask(newLabel);
}

function getTasks() {
  const tasksJSON = localStorage.getItem("tasks");
  return JSON.parse(tasksJSON);
}

function saveTasks(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addStoredTask(taskText) {
  var tasks = getTasks();
  if (!tasks) {
    tasks = [];
  }
  tasks.push({ text: taskText });
  saveTasks(tasks);
}

function deleteStoredTask(taskText) {
  var tasks = getTasks();
  if (tasks) {
    tasks.pop({ text: taskText });
  }
  saveTasks(tasks);
}

function displayStoredTasks() {
  var tasks = getTasks();
  if (tasks) {
    for (var k in tasks) {
      var taskInput = tasks[k].text;

      var taskList = document.getElementById("taskList");

      var newListItem = document.createElement("input");
      newListItem.type = "checkbox";
      newListItem.id = "taskItem";
      newListItem.onclick = function () {
        taskCompleted(newListItem);
      };

      var newLabel = document.createElement("label");
      newLabel.appendChild(document.createTextNode(taskInput));

      var newCloseButton = document.createElement("button");
      newCloseButton.className = "btn-close button btn-xs";
      newCloseButton.innerHTML = "&times";
      newCloseButton.onclick = function () {
        deleteTask(newListItem, newLabel, newCloseButton, newListItemBr);
      };

      var newListItemBr = document.createElement("br");

      taskList.appendChild(newListItem);
      taskList.appendChild(newLabel);
      taskList.appendChild(newCloseButton);
      taskList.appendChild(newListItemBr);

      taskInput.value = "";
    }
  }
}
