const Customer = [], Ends = [];

document.addEventListener("DOMContentLoaded", () => {
  let values;
  if (localStorage.getItem("data") === null) {
    values = [];
  } else {
    values = JSON.parse(localStorage.getItem("data"));
  }

  values.forEach(value => {
    let { index, arrival, service, begin, end, wait, spend, idle, run} = value;
     console.log(end);
    
    Customer.push(index);
    Ends.push(end);

  });
  var ctx = document.getElementById('myChart').getContext('2d');
// ctx.defaults.global.defaultFontColor = 'white';
console.log(Ends);
Ends[0] = 4;
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: Customer,
        datasets: [{
            label: 'Customer serving',
            data: Ends,  


            backgroundColor:  '#fff',
            borderColor: 'green',
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true, margin : 0
                },

            }],
            xAxes: [{
                categoryPercentage: 1.0,
                barPercentage: 1.0
            }]
        },
        maintainAspectRatio: false

    }
});
});

console.log([...Customer]);
