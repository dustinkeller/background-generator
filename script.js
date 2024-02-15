var leftColor = document.getElementById("left-color");
var rightColor = document.getElementById("right-color");
var body = document.querySelector("body");
var h3 = document.querySelector("h3");

function updateGradient() {
    body.style.background = `linear-gradient(to right, ${leftColor.value} , ${rightColor.value})`
    h3.textContent = body.style.background;
}

leftColor.addEventListener("input", updateGradient);

rightColor.addEventListener("input", updateGradient);