var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");


console.log(css);
console.log(color1);
console.log(color2);
console.log(body);



color1.addEventListener("input", function(){
    console.log(color1.value);
    var bgCssC1 = "linear-gradient(to right, "+ color1.value + " , " + color2.value + ")";
    body.style.background = bgCssC1;
    css.innerHTML = bgCssC1;
    
})



color2.addEventListener("input", function(){
    console.log(color2.value);
    var bgCssC2 = "linear-gradient(to right, "+ color1.value + " , " + color2.value + ")";
    body.style.background = bgCssC2;
    css.innerHTML = bgCssC2;
})


