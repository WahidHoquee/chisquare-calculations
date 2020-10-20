let i = 9;
const DOM = {
  card: document.querySelector(".book"),

  submit: document.querySelector(".submit"),
  observed: document.querySelector("#observed"),
  expected: document.querySelector("#expected"),

  calculate: document.querySelector(".calculate"),
  table: document.querySelector(".table tbody"),
  tableRow: document.querySelectorAll("tbody .table__row")
};

console.log(DOM.tableRow);
DOM.tableRow.forEach(row => {
  row.addEventListener('click',()=>{
    console.log(row);
    
    row.remove();
  })
})

function restoreData(values){
    values.forEach(value => {
        addRow(value.observed,value.expected,value.calculated);  
    });
}

function addRow(o,e,c) {
    const row = `<tr class="table__row">
                  <td>${o}</td>
                  <td>${e}</td>
                  <td>${c}</td>
              </tr>`;
  
    DOM.table.insertAdjacentHTML("afterbegin", row);
    console.log(DOM.tableRow.length);
    
    if(i>=0){
        DOM.table.removeChild(DOM.tableRow[i]);
    }
    i--;
}

document.addEventListener("DOMContentLoaded", () => {
  let values;
  if (localStorage.getItem("values") === null) {
    values = [];
  } else {
    values = JSON.parse(localStorage.getItem("values"));
  }

  restoreData(values);
  
});

function storeValueInLocaleStorage(value) {
  let values;
  if (localStorage.getItem("values") === null) {
    values = [];
  } else {
    values = JSON.parse(localStorage.getItem("values"));
  }

  values.push(value);
  localStorage.setItem("values", JSON.stringify(values));
}

DOM.submit.addEventListener("click", e => {
  e.preventDefault();
    
  const observ = parseInt(DOM.observed.value);
  const expect = parseInt(DOM.expected.value);
  console.log(Number.isInteger(observ));
  

  if(observ != null && expect != null && Number.isInteger(observ) && Number.isInteger(expect)){

    DOM.observed.value = "";
    DOM.expected.value = "";
  
    const calculate = (((observ - expect) * (observ - expect)) / expect).toFixed(3);
    const data = {
      observed: observ,
      expected: expect,
      calculated: calculate
    };
    
    storeValueInLocaleStorage(data);
    addRow(data.observed,data.expected,data.calculated);
    tableRow = document.querySelectorAll("tbody .table__row")

  }  
});
