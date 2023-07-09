function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const selectors = {
  body: document.querySelector('body'),
  start: document.querySelector('[data-start]'),
  stop: document.querySelector('[data-stop]'),
};
let setColor;
selectors.start.addEventListener('click', onStart);
selectors.stop.addEventListener('click', onStop);

function onStart(evt) {
  selectors.body.style.backgroundColor = getRandomHexColor();
  setColor = setInterval(() => {
    selectors.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  selectors.start.disabled = true;
  selectors.stop.disabled = false;
}

function onStop(evt) {
  clearInterval(setColor);
  selectors.stop.disabled = true;
  selectors.start.disabled = false;
}
