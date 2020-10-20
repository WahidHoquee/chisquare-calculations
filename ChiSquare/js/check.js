let chiSquare = 0,
  tempBegin = 0,
  prevEnd = 0;
let values,run,mainBegin,mainEnd;

const DOM = {
  card: document.querySelector(".book"),

  submit: document.querySelector(".calculate"),
  run: document.querySelector("#run"),
  chiExpected: document.querySelector("#chiExpected"),

  check: document.querySelector(".ans"),
  table: document.querySelector(".table tbody"),
  tableRow: document.querySelectorAll("tbody .table__row")
};
DOM.submit.addEventListener('click',(e)=>{
  e.preventDefault();
  run = DOM.run.value;

  values.forEach(value => {
    let {index, arrival, service, begin, end, wait, spend, idle} = calculate(value);

    storeValueInLocaleStorage({index, arrival, service, begin, end, wait, spend, idle, run})
    console.log(run);
    
    window.open('result.html', "_top");
    })
})
function storeValueInLocaleStorage(value) {
  
  let data;
  if (localStorage.getItem("data") === null) {
    data = [];
  } else {
    data = JSON.parse(localStorage.getItem("data"));
  }

  data.push(value);

  localStorage.setItem("data", JSON.stringify(data));
}

function addRow(index, arrival, service, begin, end, wait, spend, idle) {
  // mainBegin = begin;
  // mainEnd = End;
  const row = `<tr class="table__row">
                <td>${index}</td>
                <td>${arrival}</td>
                <td>${service}</td>
                <td>${begin}</td>  
                <td>${idle}</td>
              </tr>`;
  DOM.table.insertAdjacentHTML("beforeend", row);
  // console.log(DOM.tableRow.length);
}

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("values") === null) {
    values = [];
  } else {
    values = JSON.parse(localStorage.getItem("values"));
  }

  values.forEach(value => {
    let {index, arrival, service, begin, end, wait, spend, idle} = calculate(value);

    console.log(begin);
    
    addRow(index, arrival, service, begin, end, wait, spend, idle);
  });

});
function calculate(value){
  let { index, arrival, service } = value;
  let begin, end, wait, spend, idle;

  if (tempBegin > arrival) {
    begin = tempBegin;
  } else {
    begin = arrival;
  }

  end = begin + service;
  wait = begin - arrival;
  spend = end - arrival;
  idle = arrival - prevEnd;

  if (idle < 0) idle = 0;

  tempBegin = arrival + service;
  prevEnd = end;
  return {index, arrival, service, begin, end, wait, spend, idle};
}