let pElHome = document.getElementById("counter-home")
let counterFirst = 0

function addOneHome() {
    counterFirst += 1
    pElHome.innerText = counterFirst
}

function addTwoHome() {
    counterFirst += 2
    pElHome.innerText = counterFirst
}

function addTreeHome() {
    counterFirst += 3
    pElHome.innerText = counterFirst
}

let pElGuest = document.getElementById("counter-guest");
let counterSecond = 0;

function addOneGuest() {
    counterSecond += 1
    pElGuest.innerText = counterSecond
}

function addTwoGuest() {
    counterSecond += 2
    pElGuest.innerText = counterSecond
}

function addTreeGuest() {
    counterSecond += 3
    pElGuest.innerText = counterSecond
}

let btn = document.getElementById("rest-btn");


function resetScore() {
    pElHome.innerText = 0
    pElGuest.innerText = 0
    counterFirst = 0
    counterSecond = 0
}

let history = document.getElementById("prev-msg");

function seeHistory() {
    let score = counterFirst + " - " + counterSecond + ";" + " "
    history.textContent += score
}


