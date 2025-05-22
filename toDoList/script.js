const plusBtn = document.getElementById("plus-btn");
const task = document.getElementById("task");
const board = document.getElementById("board");

function addNewTask(task, board){
	if(task.value.trim().length !== 0){
		const newTask = document.createElement('div');
		newTask.className = "added-task";
		
		const newTaskCheckbox = document.createElement("input");
		newTaskCheckbox.type = "checkbox";
		newTaskCheckbox.className = "task-checkbox";
		newTask.appendChild(newTaskCheckbox);
	
		const newTaskContent = document.createElement("div");
		newTaskContent.className = "added-task-content";
		newTaskContent.innerText = task.value;
		newTask.appendChild(newTaskContent);
	
		board.appendChild(newTask);
		task.value = "";
	}
}

plusBtn.addEventListener('click', (e) => {
	addNewTask(task, board);
});