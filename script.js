let container = document.getElementById("container");


let rows = 16;
let columns = 16;
let percent = (1/rows) * 100;


function clearGrid() {
    container.textContent = "";
    rows = window.prompt("how many rows?");
    columns = rows;
    percent = (1/rows) * 100;
    createGrid();
}

function createGrid() {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            let div = document.createElement('div');
            div.setAttribute("class", "child");
            div.style.flexBasis = percent + "%";
            div.style.color = "blue";
            div.textContent = " x ";
            div.addEventListener("mouseenter", function( event ) {
                event.target.style.backgroundColor = "purple";
            })
            container.appendChild(div);
        }
    }
}

createGrid();