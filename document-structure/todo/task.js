const taskInput = document.getElementById('task__input');
let taskArray = JSON.parse(localStorage.getItem('task')) || [];

const createTask = () => {
  for (let i = 0; i < taskArray.length; i++) {
    let task = document.createElement('div');
    task.classList.add('task');
    task.innerHTML = `
      <div class="task__title">${taskArray[i]}
      </div>
      <a href="" class="task__remove">&times;</a>
    `;
    document.getElementById('tasks__list').prepend(task);
  }
};

const controlTask = () => {
  taskInput.addEventListener('keydown', (e) => {
    if ((e.key === 'Enter') && (taskInput.value.trim() !== '')) {
      taskArray = JSON.parse(localStorage.getItem('task')) || [];
      taskArray.push(taskInput.value.trim());
      localStorage.setItem('task', JSON.stringify(taskArray));
    }
  });

  document.addEventListener('click', (e) => {
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