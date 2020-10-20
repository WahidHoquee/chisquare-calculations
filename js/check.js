let chiSquare = 0;
const DOM = {
  card: document.querySelector(".book"),

  submit: document.querySelector(".check"),
  chiObserved: document.querySelector("#chiObserved"),
  chiExpected: document.querySelector("#chiExpected"),

  check: document.querySelector(".ans"),
  table: document.querySelector(".table tbody"),
  tableRow: document.querySelectorAll("tbody .table__row")
};

document.addEventListener("DOMContentLoaded", () => {
  let values;
  if (localStorage.getItem("values") === null) {
    values = [];
  } else {
    values = JSON.parse(localStorage.getItem("values"));
  }
  values.forEach(value => {
    chiSquare += parseFloat(value.calculated);
  });

  DOM.chiObserved.value = chiSquare;
});

DOM.submit.addEventListener("click", (e) => {
    e.preventDefault();
    const chiSquareA = parseFloat(DOM.chiExpected.value);

    if(DOM.chiExpected.value!=""){

    
    let icon,text
    

    if(chiSquare<chiSquareA){
        icon= "checkmark";
        text="Accepted";
    }
    else{
        icon= "close";
        text="Rejected";
    }
    const html =`<div class="ans__img">
                    <svg class="ans__logo">
                        <use xlink:href="icon/sprite.svg#icon-${icon}"
                    </svg>
                </div>
                <h1 class="heading heading--light heading--big">
                    ${text}
                </h1>`;

    DOM.check.innerHTML=html;
    localStorage.clear();
  }
});
