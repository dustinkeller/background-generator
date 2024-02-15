var leftColor = document.getElementById("left-color");
var rightColor = document.getElementById("right-color");
var body = document.querySelector("body");
var h3 = document.querySelector("h3");

function updateGradient() {
    var gradient = `linear-gradient(to right, ${leftColor.value} , ${rightColor.value})`
    body.style.background = gradient;
    h3.textContent = gradient;
}

leftColor.addEventListener("input", updateGradient);

rightColor.addEventListener("input", updateGradient);