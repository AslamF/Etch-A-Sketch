const fullGrid = document.querySelector(".container");
const button = document.querySelector("button");
const RGB = document.querySelector(".RGB");
const reset = document.querySelector(".reset");
const black = document.querySelector(".black");



for (i = 0; i < 256; i++){
    let square = document.createElement('div');
    fullGrid.appendChild(square).classList.add("cube");
    square.style.border = "1px solid black";
};

const boxes = fullGrid.querySelectorAll(".cube");
boxes.forEach(box => box.addEventListener("mouseover", () => {
    box.style.backgroundColor = "black";
}))





let userPrompt = function(){
    let input = prompt ("select a grid size");
    let integer = parseInt(input, 10);
    if (integer > 100){
        alert("Number must be smaller than or equal to 100");
        return;
    }
    let n = (integer * integer);
    console.log(n);
    fullGrid.innerHTML = "";
    fullGrid.setAttribute("style", `grid-template-columns: repeat(${integer}, auto); grid-template-rows: repeat(${integer}, auto);`);
    for (i = 0; i < n; i++){
        let newSquare = document.createElement("div");
        fullGrid.appendChild(newSquare).classList.add("cube");
        newSquare.style.border = "1px solid black";
    }

    const boxes = fullGrid.querySelectorAll(".cube");
    boxes.forEach(box => box.addEventListener("mouseover", () => {
    box.style.backgroundColor = "black";
}))

}

button.addEventListener("click", userPrompt);


let changeColor = function(){
    const boxes = fullGrid.querySelectorAll(".cube");
    boxes.forEach(box => box.addEventListener("mouseover", () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    box.style.backgroundColor = "#" + randomColor;
}))
};
RGB.addEventListener("click", changeColor);




let clearGrid = function(){
    const boxes = fullGrid.querySelectorAll(".cube");
    boxes.forEach(box => box.style.backgroundColor = "white");
}

reset.addEventListener("click", clearGrid);

let color = "rgb(0, 0, 0)";

let scale = function(){
    const boxes = fullGrid.querySelectorAll(".cube");
    boxes.forEach(box => box.addEventListener("mouseover", () => {
    box.style.backgroundColor = "black";
    
}))
};

black.addEventListener("click", scale);

