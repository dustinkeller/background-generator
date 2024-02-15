var leftColor = document.getElementById("left-color");
var rightColor = document.getElementById("right-color");
var body = document.querySelector("body");
var h3 = document.querySelector("h3");
var button = document.querySelector("button");
h3.textContent = `linear-gradient(to right, ${leftColor.value} , ${rightColor.value})`;

function randomColor() {
    return `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`
}

function updateGradient(event) {
    if (event.target.id == 'random') {
        console.log(randomColor());
        body.style.background = `linear-gradient(to right, ${randomColor()}, ${randomColor()})`;
    } else {
        body.style.background = `linear-gradient(to right, ${leftColor.value} , ${rightColor.value})`;
    }
    h3.textContent = body.style.background;
}

leftColor.addEventListener("input", updateGradient);

rightColor.addEventListener("input", updateGradient);

button.addEventListener("click", updateGradient);

