var i = 0;
const DOM = {
  card: document.querySelector(".book"),

  submit: document.querySelector(".submit"),
  observed: document.querySelector("#observed"),
  expected: document.querySelector("#expected"),

  calculate: document.querySelector(".calculate"),
  table: document.querySelector(".table tbody"),
  tableRow: document.querySelectorAll("tbody .table__row")
};

function restoreData(values){
    values.forEach(value => {
        addRow(value.index,value.arrival,value.service);  
    });
}

function addRow(i,o,e) {
  
    const row = `<tr class="table__row">
                  <td>${i}</td>
                  <td>${o}</td>
                  <td>${e}</td>
              </tr>`;
    DOM.table.insertAdjacentHTML("beforeend", row);
    // console.log(DOM.tableRow.length);
    i++;
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
  
  i++;
  if(observ != null && expect != null && Number.isInteger(observ) && Number.isInteger(expect)){

    DOM.observed.value = "";
    DOM.expected.value = "";
  
    // const calculate = (((observ - expect) * (observ - expect)) / expect).toFixed(3);
    const data = {
      index: i,
      arrival: observ,
      service: expect,
    };
    
    storeValueInLocaleStorage(data);
    addRow(i,data.arrival,data.service);
    // tableRow = document.querySelectorAll("tbody .table__row")
    // i++;
  }  
});
