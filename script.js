"use strict";
let pickedColor = "000000";
document.addEventListener("DOMContentLoaded", () => {
    const colorPicker = document.querySelector("#color");
    const pickButton = document.querySelector("#pickbutton");


    pickButton.addEventListener("click", () => {
        pickedColor = colorPicker.value;
        console.log(`Picked color: ${pickedColor}`);
    });
});
const container = document.querySelector("#container");
const button = document.querySelector("button");
const numberOfBoxes = document.querySelector("input");

// const drawButton = document.querySelector("#draw");
const clearButton = document.querySelector("#clear");
function createBoard() {
    let size = parseInt(numberOfBoxes.value);
    if (size > 100) {
        size = 100;
        alert("Max Allowed size for the board is 100;\nCreating 100x100 Board ")
    }
    // const maxWidth = Math.floor(600 / size);
    // const maxHeight = Math.floor(600 / size);

    const maxHeight = 600 / size;
    const maxWidth = 600 / size;
    let child = container.lastElementChild;
    while (child) {
        container.removeChild(child);
        child = container.lastElementChild;
    }
    for (let i = 0; i < size; i++) {
        // container.appendChild(document.createElement("div").setAttribute("id", "box"));
        for (let j = 0; j < size; j++) {
            const box = document.createElement("div");

            box.style.minHeight = `${maxHeight}px`;
            box.style.minWidth = `${maxWidth}px`;
            box.setAttribute("class", "box")

            container.appendChild(box);
        }
    };
    draw();
}

function draw() {
    let isDrawing = false;

    container.addEventListener("mousedown", () => {
        isDrawing = true;
    });

    container.addEventListener("mouseup", () => {
        isDrawing = false;
    });

    container.addEventListener("mouseleave", () => {
        isDrawing = false;
    });

    const drawBoxes = document.querySelectorAll(".box");
    drawBoxes.forEach(box => {
        box.addEventListener("mouseover", () => {
            if (isDrawing) {
                box.style.backgroundColor = `${pickedColor}`;
            }
        });
    });
    // container.addEventListener("mousedown", () => {
    //     const drawBoxes = document.querySelectorAll(".box");
    //     drawBoxes.forEach(box => {
    //         box.addEventListener("mouseover", () => { box.style.backgroundColor = "red" })
    //     });
    // })
}
function clearScreen() {
    const drawBoxes = document.querySelectorAll(".box");
    drawBoxes.forEach(box => {
        box.style.backgroundColor = "white";
    });
}
// const clearBorder = document.querySelector("#hideborder");
// clearBorder.addEventListener("click", () => {
//     const drawBoxes = document.querySelectorAll(".box");
//     drawBoxes.forEach(box => {
//         box.style.border = "2px solid white";
//         container.style.border = "2px solid black";
//     });
// })
// const showBorder = document.querySelector("#showborder");
// showBorder.addEventListener("click", () => {
//     const drawBoxes = document.querySelectorAll(".box");
//     drawBoxes.forEach(box => {
//         box.style.border = "1px solid black";
//         container.style.border = "2px solid black";
//     });
// })
button.addEventListener("click", createBoard);
clearButton.addEventListener("click", clearScreen);