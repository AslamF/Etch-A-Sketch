const fullGrid = document.querySelector(".container");



for (i = 0; i < 256; i++){
    let square = document.createElement('div');
    fullGrid.appendChild(square).classList.add("cube");
    square.style.border = "1px solid black";
};

const boxes = fullGrid.querySelectorAll(".cube");


// box is the current value in the array, boxes is the array. queryseelctor all creates an array of nodes with the class of cube
boxes.forEach(box => box.addEventListener("mouseover", () => {
    box.style.backgroundColor = "black";
}))


/*
box.addEventListener("mouseover", over);
box.addEventListener("mouseout", out);




function over(){
    box.style.backgroundColor = "black";
    
}

function out(){
    box.style.backgroundColor = "transparent";
}
*/





