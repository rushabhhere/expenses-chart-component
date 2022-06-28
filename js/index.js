import '../css/index.css';
import data from '../resources/data.json';
import { scaleLinear } from 'd3-scale';
import { max } from 'd3-array';

const days = document.querySelectorAll('.day');
const bars = document.querySelectorAll('.day .bar');
const amounts = document.querySelectorAll('.day .amount');

const date = new Date();
const today = date.getDay() === 0 ? 6 : date.getDay() - 1;

const scale = scaleLinear()
  .domain([0, max(data, d => d.amount)])
  .range([0, 155]);

data.forEach((day, index) => {
  amounts[index].textContent = `$${day.amount}`;
  if (index === today) {
    days[index].classList.add('today');
  }

  bars[index].style.height = `${scale(day.amount)}px`;
});
