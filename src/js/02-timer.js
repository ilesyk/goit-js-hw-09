import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const selectors = {
  input: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

let countdownTime;
let countdownInterval;

selectors.startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    const currentDate = new Date();
    countdownTime = selectedDate.getTime() - currentDate.getTime();
    if (countdownTime < 0) {
      window.alert('Please choose a date in the future');
      selectors.startBtn.disabled = true;
    } else {
      selectors.startBtn.disabled = false;
      updateTimer(countdownTime);
    }
  },
};

flatpickr(selectors.input, options);

selectors.startBtn.addEventListener('click', startCountdown);

function updateTimer(countdownTime) {
  const time = convertMs(countdownTime);
  selectors.days.textContent = addLeadingZero(time.days);
  selectors.hours.textContent = addLeadingZero(time.hours);
  selectors.minutes.textContent = addLeadingZero(time.minutes);
  selectors.seconds.textContent = addLeadingZero(time.seconds);
}

function startCountdown() {
  clearInterval(countdownInterval);
  countdownInterval = setInterval(() => {
    countdownTime -= 1000;
    if (countdownTime <= 0) {
      clearInterval(countdownInterval);
      countdownTime = 0;
    }
    updateTimer(countdownTime);
    if (countdownTime === 0) {
      console.log('Timer reached 0');
    }
  }, 1000);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}
