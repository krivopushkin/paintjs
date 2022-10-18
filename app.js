const canvas = document.querySelector('#jsCanvas');
const ctx = canvas.getContext('2d');
const colors  = document.querySelectorAll('.jsColor');
const range = document.querySelector('jsRange');
const mode = document.querySelector('jsMode');

canvas.height = 700;
canvas.width = 700;

ctx.lineWidth = 2.5;
ctx.strokeStyle = '#2c2c2c';

let painting = false;
let filling = false;

function stopPainting() {
    painting = false;
}

function startPainting() {
    painting = true;
}

function onMouseMove(event) {
    x = event.offsetX;
    y = event.offsetY;
    if (!painting) {
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

function onMouseDown(event) {
    painting = true;
}

function handleColorClick(event) {
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
}

function handleRangeChange(event) {
    const rangeValue = event.target.value;
    ctx.lineWidth = rangeValue;
}

function handleModeClick() {
    if (filling === true) {
        filling = false;
        mode.innerText = 'Рисование';
    } else {
        filling = true;
        mode.innerText = 'Заливка';
    }
}

if (canvas) {
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mousedown', onMouseDown);
    canvas.addEventListener('mouseup', stopPainting);
    canvas.addEventListener('mouseleave', stopPainting);
}

Array.from(colors).forEach(color => addEventListener('click', handleColorClick));

if (range) {
    range.addEventListener('input', handleRangeChange)
}

if (mode) {
    mode.addEventListener('click', handleModeClick);
}
