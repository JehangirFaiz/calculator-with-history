let display = document.getElementById("display");
let historyList = document.getElementById("historylist");


function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}


function DeleteList() {
    display.value = display.value.slice(0, -1);
}


function calculate() {
    try {
        let expression = display.value;
        let result = eval(expression);

        
        let li = document.createElement("li");
        li.textContent = expression + " = " + result;
        historyList.prepend(li);

        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
}

function updateClock() {
    let now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("clock").innerText =
        hours + ":" + minutes + ":" + seconds;
}

setInterval(updateClock, 1000);
updateClock();
function updateClock() {
    let now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("watch").innerText =
        hours + ":" + minutes + ":" + seconds;
}

setInterval(updateClock, 1000);
updateClock();
