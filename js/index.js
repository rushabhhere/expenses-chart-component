import '../css/index.css';
import data from '../resources/data.json';
import { scaleLinear } from 'd3-scale';
import { max } from 'd3-array';

const days = document.querySelectorAll('.day');
const bars = document.querySelectorAll('.day .bar');
const amounts = document.querySelectorAll('.day .amount');

// determining today (to display bar in cyan)
const date = new Date();
const today = date.getDay() === 0 ? 6 : date.getDay() - 1;

// determining how the bars will scale to fit within 155px
const scale = scaleLinear()
  .domain([0, max(data, d => d.amount)]) // minimum possible amount and maximum amount spent
  .range([0, 155]); // minimum and maximum bar size

data.forEach((day, index) => {
  // adding tooltip
  amounts[index].textContent = `$${day.amount}`;

  // marking today
  if (index === today) {
    days[index].classList.add('today');
  }

  // assigning heights to the bars
  bars[index].style.height = `${scale(day.amount)}px`;
});
