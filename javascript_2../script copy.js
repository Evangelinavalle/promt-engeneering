alert("Hello there");

const MAX_LOGIN_ATTEMPTS = 3;
let attempts = 2;

if (attempts < MAX_LOGIN_ATTEMPTS) {
    console.log("Try logging in.");
} else if (attempts === MAX_LOGIN_ATTEMPTS) {
    console.log("Last attempt!");
} else {
    console.log("Account locked.");
}

let counter = 0;
while (counter < 5) {
    console.log("Counter is at: " + counter);
    counter++;
}

// For Loop Example
for (let index = 0; index < 5; index++) {
    console.log("Loop iteration number: " + index);
}

function greetPerson(personName) {
    console.log("Hello, " + personName);
}
greetPerson("Alice");

function calculateSum(numberOne, numberTwo) {
    return numberOne + numberTwo;
}
console.log(calculateSum(5, 7));

function multiplyNumbers(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}
console.log(multiplyNumbers(3, 4));

let petTypes = ["Dog", "Cat", "Rabbit", "Parrot", "Fish"];
// Accessing an element in an array
console.log(petTypes[0]);
// Iterating through the array using a for loop
for (let index = 0; index < petTypes.length; index++) {
    let pet = petTypes[index];
    console.log("Pet type " + (index + 1) + ": " + pet);
}

document.getElementById("demo").innerText = "Hello World!";
// Get element by class and change color
document.getElementsByClassName("example-class")[0].style.color = "blue";
// Get element by tag and set attribute
let imgTag = document.getElementsByTagName("img")[0];
imgTag.setAttribute("alt", "Example Image");
// Create an attribute node
let newAttr = document.createAttribute("data-custom");
newAttr.value = "customData";
imgTag.setAttributeNode(newAttr);
// Add CSS styling via DOM
document.getElementById("demo").style.fontSize = "20px";

document.getElementById("clickButton").onclick = function () {
    alert("Button clicked!");
};
// Actions on Event: Change text on button click
document.getElementById("clickButton").addEventListener('click', () => {
    this.innerText = "Clicked!";
});
// Onload Event: Show message when page loads
window.onload = function () {
    console.log("Page loaded!");
};
// Onmouseover Event: Change color on mouse over
document.getElementById("hoverDiv").onmouseover = function() {
    this.style.backgroundColor = "lightblue";
};

let intervalId = setInterval(() => {
    console.log("Message displayed every 2 seconds");
}, 2000);

// After 10 seconds, clear the interval
setTimeout(() => {
    clearInterval(intervalId);
    console.log("Interval cleared after 10 seconds");
}, 10000);



// testing
