const taskInput = document.getElementById('task__input');
const taskList = document.getElementById('tasks__list');
let taskArray = JSON.parse(localStorage.getItem('task')) || [];

const createTask = () => {
  for (let i = 0; i < taskArray.length; i++) {
    let task = document.createElement('div');
    task.classList.add('task');
    task.innerHTML = `
      <div class="task__title">${taskArray[i]}</div>
      <a href="" class="task__remove">&times;</a>
    `;
    taskList.prepend(task);
  }
};

const controlTask = () => {
  document.getElementById('tasks__add').addEventListener('click', (e) => {
    e.preventDefault();
    if (taskInput.value.trim() !== '') {
      taskArray = JSON.parse(localStorage.getItem('task')) || [];
      taskArray.push(taskInput.value.trim());
      localStorage.setItem('task', JSON.stringify(taskArray));
      taskList.insertAdjacentHTML('afterend', `
        <div class="task">
          <div class="task__title">${taskInput.value}</div>
          <a href="#" class="task__remove">&times;</a>
        </div>
      `);
      taskInput.value = '';
    }
  });

  document.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.closest('.task__remove')) {
      let taskValue = e.target.closest('.task__remove').previousElementSibling.innerText;
      taskArray = JSON.parse(localStorage.getItem('task')) || [];
      taskArray.splice(taskArray.indexOf(taskValue), 1);
      localStorage.setItem('task', JSON.stringify(taskArray));
      e.target.parentElement.remove();
    }
  });
};

controlTask();
createTask();