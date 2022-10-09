const fullGrid = document.querySelector(".container");
const button = document.querySelector("button");



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
        console.log("Select a number smaller than 100");
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







