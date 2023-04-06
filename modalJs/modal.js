// let button=document.querySelector('.b1');
var modal=document.querySelector('.modal');
const overlay = document.querySelector(".overlay");

function showModal(){
    overlay.classList.add("overlayactive");
    modal.classList.add("visiblee");
}

function closeModal(){
    // var modal=document.querySelector('.modal');
    overlay.classList.remove("overlayactive");
    modal.classList.remove("visiblee");
}