const cellElements = document.querySelectorAll("[data-cell]")

let isCircleTurn = false;

const placeMark = (cell, classToAdd) => {
    cell.classList.add(classToAdd);
};

const handleClick = (e) => {
    // Colocar a marca 'x ou circle'
    const cell = e.target;
    const classToAdd = isCircleTurn ? "circle" : "x";

    cell.classList.add(classToAdd);
    // verificar por vitória
    // verificar por empate
    // mudar simbolo
};

for (const cell of cellElements){
    cell.addEventListener("click", handleClick, { once: true });
}