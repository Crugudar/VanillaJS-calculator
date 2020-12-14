const erase = document.querySelector("#c");
const current = document.querySelector(".second-part");
const past = document.querySelector(".first-part");
const ops = document.getElementsByClassName("ops");
const equal = document.querySelector("#equal");
const num = document.getElementsByClassName("num");


let pastOperation=[];
let calculation =[];
let previousResult = "";
let selected ="";
let operator = null;
let erasedOneTime=false;

const updateNum = (e) => {
    
    erasedOneTime=false;

    if(["+", "-","/", "*"].includes(operator)){
        if(previousResult !== ""){
            past.innerHTML = pastOperation;
        }else{
            past.innerHTML = pastOperation;
        }
        
    }else if(previousResult!==""){
        past.innerHTML = "";
        previousResult="";
    }
    const clickedNum = e.target.innerText;
    selected += clickedNum;
    current.innerHTML = selected;
}

const selectOperator = (e) => {
    
    erasedOneTime=false;

    if(selected!=="" || previousResult!==""){

        if(previousResult!==""){
            past.innerHTML = previousResult;
            calculation.push(previousResult);
            pastOperation=previousResult
            pastOperation+=selected;
            
        }else{
            calculation.push(selected);
            pastOperation+=selected;
            past.innerHTML = pastOperation;
            selected="";
        }
        operator=e.target.innerText;
        calculation.push(operator);
        pastOperation+=operator;
        current.innerHTML = operator;        
   }
}
    
// Calculation
const getResult = (e) => {
    if (selected !== "") {
      calculation.push(selected);
      pastOperation+=selected;
      past.innerHTML = pastOperation;
      pastOperation=[];
    };
    
    console.log(calculation)
    const result = eval(calculation.join("")).toString();
    current.innerHTML = result;
    
    pastOperation=[] 
    calculation =[];
    previousResult = result;
    selected ="";
    operator = null;
   
}
     
  // Erase function
erase.onclick = () => {
    if(erasedOneTime===true){
        previousResult="";
        past.innerHTML = "";
    }else{
        erasedOneTime=true;
        current.innerHTML = "0";
        selected = "";
        calculation= [];
    }
}

// Event listener to operator and number buttons using for loop
for (let i = 0; i<num.length; i++) {
num[i].addEventListener('click', updateNum);
}
for (i = 0; i<ops.length; i++) {
ops[i].addEventListener('click', selectOperator);
}

equal.addEventListener('click', getResult);
  
