const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;
// const range = document.getElementById("jsRange");
// const fill = document.getElementById("jsMode");
// const save = document.getElementById("jsSave");

let painting = false;

//마우스가 캔버스를 벗어났을때
function stopPainting() {
    painting = false;
}

function startPainting() {
    painting = true;
}
//마우스가 위에 올라갔을때 발생하는 이벤트
function onMouseMove(e) {
    const x = e.offsetX;
    const y = e.offsetY;
}

//마우스를 클릭했을때 발생
function onMouseDown(e) {
    console.log(e);
    painting = true;
}

//마우스 클릭을 놓았을때 발생
function onMouseUp(e) {
    stopPainting();
}

if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}
