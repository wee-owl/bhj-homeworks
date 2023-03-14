const chatWidget = document.querySelector('.chat-widget');
const input = document.getElementById('chat-widget__input');
const messages = document.getElementById('chat-widget__messages');
const robotMessage = [
  'К сожалению, все операторы заняты. Не пишите нам больше', 
  'Время ожидания ответа оператора составляет 10 лет', 
  'Если вы что-то потеряли, обратитесь в бюро находок', 
  'За покупками будьте добры в соседний супермаркет', 
  'Вы не слишком любезны, не пишите нам', 
  'Аппарат вызываемого абонента вне зоны доступа', 
  'Здравствуйте! И до свидания!'
];
const inactiveRobotMessage = [
  'Тук-тук! Кто там?', 
  'Желаете поговорить?', 
  'У вас есть вопросы?', 
  'Как дела?', 
  '???'
];
let time = new Date().toLocaleTimeString('ru-RU', { hour: "2-digit", minute: "2-digit" });


// открытие/закрытие чата
window.addEventListener('click', ({target}) => {
  if (target.closest('.chat-widget__side')) {
    chatWidget.classList.add('chat-widget_active');
    timer();
  }
  if (!target.closest('.chat-widget')) {
    chatWidget.classList.remove('chat-widget_active');
    clearInterval(timerId);
  }
});


// таймер на 30сек простоя
let timerId, counter;
const timer = () => {
  if (timerId) clearInterval(timerId)
  counter = 0;
  timerId = setInterval(() => {
    counter++;
    console.log(counter);
    if (counter % 30 === 0 && chatWidget.classList.contains('chat-widget_active')) {
      addRobotMessage(inactiveRobotMessage);
    }
  }, 1000);
};


// добавление сообщений пользователя
const addClientMessage = () => {
  messages.innerHTML += `
    <div class="message message_client">
      <div class="message__time">${time}</div>
      <div class="message__text">
        ${input.value}
      </div>
    </div>
  `;
  document.querySelector('.chat-widget__messages-container').scrollTo(0, 1000);
  timer();
};


// добавление сообщений робота
const addRobotMessage = (array) => {
  let index = Math.floor(Math.random() * array.length);
  messages.innerHTML += `
    <div class="message">
      <div class="message__time">${time}</div>
      <div class="message__text">
        ${array[index]}
      </div>
    </div>
  `;
  document.querySelector('.chat-widget__messages-container').scrollTo(0, 1000);
  timer();
};


// отправка сообщений
input.addEventListener('keydown', (e) => {
  if (input.value && e.key === 'Enter') {
    addClientMessage();
    input.value = '';
    input.blur();
    setTimeout(() => {
      addRobotMessage(robotMessage);
    }, 1000);
  }
});