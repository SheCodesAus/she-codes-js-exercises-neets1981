console.log("Hello, we are working!");
// just to make sure that file is imported properly
function add(numberToadd) 
// get Dom element

{ let counter =  document.getElementById("number");

//Add 1 to currrent value
let newValue = parseInt(counter.innerHTML )+ numberToadd // Conver into int 

 // Re-assign the value to the DOM element
counter.innerHTML = newValue

console.log(typeof add)
console.log(typeof "Hello")
console.log(typeof 1)
console.log('Value:', numberToadd)
}

//console.log("add function", newValue);}
function multiply(numberTomultiply) 
{ let counter =  document.getElementById("number");
let newValue = parseInt(counter.innerHTML )* numberTomultiply // Conver into int 
counter.innerHTML = newValue}

function division(numberTodivide) 
{ let counter =  document.getElementById("number");
let newValue = parseInt(counter.innerHTML )/ numberTodivide // Conver into int 
counter.innerHTML = newValue}
