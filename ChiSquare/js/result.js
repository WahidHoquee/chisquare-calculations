const DOM = {
  avgWait : document.querySelector('#avgWait'),
  probWait : document.querySelector('#probWait'),
  probIdle : document.querySelector('#probIdle'),
  avgService : document.querySelector('#avgService')
}
document.addEventListener("DOMContentLoaded", () => {
  let values;
  let avgWait,probWait,totalCustomer,totalWait=0,waitCustomer=0;
  let avgService,probIdle,totalIdle=0,totalService=0,runTime;
  if (localStorage.getItem("data") === null) {
    values = [];
  } else {
    values = JSON.parse(localStorage.getItem("data"));
  }
  totalCustomer = values.length;

  values.forEach(value => {
    let { index, arrival, service, begin, end, wait, spend, idle, run} = value;
    console.log(index);
    
    totalWait += wait;
    totalIdle += idle;
    totalService += service;
    runTime = run;
    if(wait > 0)  waitCustomer++;
  });

  avgWait = totalWait/totalCustomer;
  probWait = waitCustomer/totalCustomer;
  probIdle = totalIdle/runTime;
  avgService = totalService/totalCustomer;

  DOM.avgWait.value = Number.parseFloat(avgWait).toFixed(2);
  DOM.probWait.value =Number.parseFloat(probWait).toFixed(2) ;
  DOM.probIdle.value =Number.parseFloat(probIdle).toFixed(2) ;
  DOM.avgService.value =Number.parseFloat(avgService).toFixed(2) ;
  console.log(Customer);

});


