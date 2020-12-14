const erase = document.querySelector("#c");
const current = document.querySelector(".second-part");
const ops = document.getElementsByClassName("ops");
const equal = document.querySelector("#equal");
const num = document.getElementsByClassName("num");

console.log(num);

let calculation =[];
let previousNum = "";
let alreadySelected ="";
let operator = null;

const updateNum = (e) => {
    if (operator === "" && previousNum !== ""){
    previousNum = "";
    }
    const numSelected = e.target.innerText;
    alreadySelected += numSelected;
    current.innerHTML = alreadySelected;
}

const selectOperator = (e) => {
    if (previousNum !== "") {
      calculation.push(previousNum);
      console.log('que es esto 1',previousNum);
      if(calculation[calculation.length -1] !== ("+" || "-" || "*" || "/")) {
        operator = e.target.innerText;
        calculation.push(operator);
    }
    previousNum = "";
    }
   

    if (alreadySelected !== "") {
      calculation.push(alreadySelected);
      if(calculation[calculation.length -1] !== ("+" || "-" || "*" || "/")) {
        operator = e.target.innerText;
        calculation.push(operator);
    }
    }
    alreadySelected = "";
}
    
  // Calculation
  const getResult = (e) => {
    if (alreadySelected !== "") {
      calculation.push(alreadySelected);
    };
  
  const result = eval(calculation.join("")).toString();
    current.innerHTML = result;
    previousNum = result;
    alreadySelected = "";
    calculation = [];
    operator = null;
   
  }
  
  
  // Event listener to operator and number buttons using for loop
  for (let i = 0; i<num.length; i++) {
    num[i].addEventListener('click', updateNum);
  }
  for (i = 0; i<ops.length; i++) {
    ops[i].addEventListener('click', selectOperator);
  }
  
  equal.addEventListener('click', getResult);
  
  
  // Erase function
  erase.onclick = () => {
    current.innerHTML = "0";
    alreadySelected = "";
    pendingNum = "";
    calculation= [];
    }