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

const SWITCH_DELAY = 1000;
let switchThemeTimeoutID = null;
let switchIsActive = false;

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
  const randomIndex = randomIntegerFromInterval(0, colors.length - 1);

  document.body.style.background = colors[randomIndex];
  console.log('Меняю цвет фона на:', colors[randomIndex]);
}

// Запускаем изменение фона раз в 1 сек, блокируем кнопку Start, разблокируем Stop

function startSwitchTheme() {
  if (switchIsActive) {
    return;
  }

  switchThemeTimeoutID = setInterval(switchBgColor, SWITCH_DELAY);
  switchIsActive = true;
}

// Останавливаем изменение фона, разблокируем Start, блокируем Stop

function stopSwitchTheme() {
  if (!switchIsActive) {
    return;
  }

  clearInterval(switchThemeTimeoutID);
  switchIsActive = false;

  console.log('Останавливаю изменение фона');
}

refs.startBtn.addEventListener('click', startSwitchTheme);
refs.stopBtn.addEventListener('click', stopSwitchTheme);
