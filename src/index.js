import './sass/main.scss';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

console.log(colors);

let switchThemeTimeoutID = null;

const refs = {
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
};

// Для генерации случайного числа (индекс элемента массива цветов),
// используй функцию randomIntegerFromInterval

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// Меняем фон раз на рандомный цвет, используя фун-ию randomIntegerFromInterval

function switchBgColor() {
  document.body.style.background =
    colors[randomIntegerFromInterval(0, colors.length - 1)];
  console.log('Меняю цвет фона на:', document.body.style.background);
}

// Запускаем изменение фона раз в 1 сек, блокируем кнопку Start, разблокируем Stop

function startSwitchTheme() {
  switchThemeTimeoutID = setInterval(switchBgColor, 1000);
  refs.startBtn.setAttribute('disabled', true);
  refs.stopBtn.removeAttribute('disabled');
}

// Останавливаем изменение фона, разблокируем Start, блокируем Stop

function stopSwitchTheme() {
  clearInterval(switchThemeTimeoutID);
  refs.startBtn.removeAttribute('disabled');
  refs.stopBtn.setAttribute('disabled', true);
  console.log('Останавливаю изменение фона');
}

refs.startBtn.addEventListener('click', startSwitchTheme);
refs.stopBtn.addEventListener('click', stopSwitchTheme);
