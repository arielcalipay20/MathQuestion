const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);

let correctAns = num1 * num2;

const questionEl = document.getElementById("question");
questionEl.innerText = `What is ${num1} multiply by ${num2}`;

const userAns = document.getElementById("input");
let submitForm = document.getElementById("form");

const scoreEl = document.getElementById("score");
let score = JSON.parse(sessionStorage.getItem("score"));
if(!score) {
    score = 0;
}
else if(score === 10){
    showNow();
}


scoreEl.innerText = `Score: ${score}`;

submitForm.addEventListener("submit", checkAns);



function checkAns() {
    const finalAns = +userAns.value;
    if(finalAns == correctAns) {
        score++;
        updateLocalStorage();
    }
    else {
        score;
        updateLocalStorage();
    }
}

function updateLocalStorage() {
    sessionStorage.setItem("score", JSON.stringify(score));
    
}

function showNow() {
    let showContainer = document.getElementById("output-container");
    showContainer.style.top = "50%";
    let bodyEl = document.getElementById("body");
    bodyEl.classList.toggle("body");
    let outputText = document.getElementById("output-txt");
    outputText.innerText = `Congratulations you reached the score of ${score}`;
    return false; 
}

function exitNow() {
    let bodyEl = document.getElementById("body");
    bodyEl.style.background = "white";
    bodyEl.innerHTML = "";
    
}

let buttonEl = document.getElementById("btn");
buttonEl.addEventListener("click", exitNow);