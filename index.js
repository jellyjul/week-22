// подключаем модули
const Chart = require('chart.js/auto');
const anime = require('animejs');
const moment = require('moment');


// Работа с Moment

let date = moment().format("MMM Do YY");
document.querySelector('.current-date').innerHTML = `Current date: ${date}`;

// Работа с Anime
const svgPath = document.querySelectorAll('.path');

const svgText = anime({
  targets: svgPath,
  loop: true,
  direction: 'alternate',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 700,
  delay: (el, i) => { return i * 500 }
});



// Работа с Chart doghnut
const config = {
  type: 'doughnut',
  data: {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  }
};
const myChart = new Chart(document.getElementById('doughnutChart'), configSales);

// Bar Chart
const brandsData = [0.56, 0.48, 0.37, 0.22];

const brandsChart = new Chart(document.getElementById('sizesChart'), {
    type: 'bar',
    data: {
        labels: ['Adidas', 'Nike', 'Puma', 'Bosco'],
        datasets: [{
            label: '% of sales',
            data: brandsData,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(100, 206, 86, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(120, 206, 86, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        indexAxis: 'y',

        plugins: {
            title: {
                display: true,
                text: 'Top selling brands',
                padding: {
                    top: 10,
                    bottom: 10
                },
                font: {
                    size: 24
                }
            }
        },

        scales: {
            x: {
                ticks: {
                    format: {
                        style: 'percent'
                    }
                }
            }
        }
    }
});

// Работа с Chart

const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});r