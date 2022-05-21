import '../css/index.css';
import data from '../resources/data.json';

const days = document.querySelectorAll('.day');
const bars = document.querySelectorAll('.day .bar');
const amounts = document.querySelectorAll('.day #amount');

const date = new Date();
const today = date.getDay() === 0 ? 6 : date.getDay() - 1;

data.forEach((day, index) => {
  amounts[index].textContent = `$${day.amount}`;
  if (index === today) {
    days[index].classList.add('today');
  }
  bars[index].style.height = `${day.amount * 2.5}px`;
});
