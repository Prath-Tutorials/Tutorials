var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");


console.log(css);
console.log(color1);
console.log(color2);
console.log(body);

function setGradient(){
    cssCode = "linear-gradient(to right, "+ color1.value + " , " + color2.value + ")"
    body.style.background = cssCode;
    css.textContent = cssCode;
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);


