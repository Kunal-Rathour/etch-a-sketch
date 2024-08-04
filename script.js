"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector("#container");
    const rangeInput = document.querySelector("#myRange");
    const colorPicker = document.querySelector("#color");
    const clearButton = document.querySelector("#clear");
    let pickedColor = colorPicker.value;
    function createBoard(size) {
        container.innerHTML = '';
        const boxSize = 600 / size;
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                const box = document.createElement("div");
                box.className = "box";
                box.style.width = `${boxSize}px`;
                box.style.height = `${boxSize}px`;
                container.appendChild(box);
            }
        }

        draw();
    }

    function draw() {
        let isDrawing = false;

        container.addEventListener("mousedown", () => isDrawing = true);
        container.addEventListener("mouseup", () => isDrawing = false);
        container.addEventListener("mouseleave", () => isDrawing = false);

        container.addEventListener("mouseover", (event) => {
            if (isDrawing && event.target.classList.contains("box")) {
                event.target.style.backgroundColor = pickedColor;
            }
        });
    }

    function clearScreen() {
        const drawBoxes = document.querySelectorAll(".box");
        drawBoxes.forEach(box => {
            box.style.backgroundColor = "white";
        });
    }
    createBoard(rangeInput.value);
    rangeInput.addEventListener("input", () => {
        createBoard(rangeInput.value);
    });
    colorPicker.addEventListener("input", () => {
        pickedColor = colorPicker.value;
    });

    // Clear screen on button click
    clearButton.addEventListener("click", clearScreen);
});
