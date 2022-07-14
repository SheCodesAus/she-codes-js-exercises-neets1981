window.onload = function () 
{ let speechBubbleElement = document.createElement("div"); // its like <div> <//div>
speechBubbleElement.classList.add("speech-bubble");
let messageBox = document.createElement("p");//<p></p>
messageBox.innerText = "...";
messageBox.id = "message-box";
speechBubbleElement.appendChild(messageBox);
/*
    <div id="output">
      <div class="speech-bubble">
        <p id="message-box">...</p>
      </div>
    </div>
  */
let outputElement = document.getElementById("output");
outputElement.appendChild(speechBubbleElement);
   
console.log(speechBubbleElement);
console.log("page has loaded")
}
    


// console.log(speechBubbleElement);
// console.log("page has loaded")


function showMessage(){
// let inputfield = document.getElementById("message-text")
// let message = inputfield.value
let message = document.getElementById("message-text").value
let message1 = document.getElementById("message-text1").value
let messageBox = document.getElementById("message-box");
messageBox.innerText = message +" "+ message1 ;


// or let message = document.getElementById("message-text").value
 console.log(message);
} 
 