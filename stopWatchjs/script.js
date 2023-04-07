let displayMin =document.querySelector('#minute');
let displaySec =document.querySelector('#second');

var sec=0;
var min=0;

let start=document.querySelector('.start');
let stop=document.querySelector('.stop');
let reset=document.querySelector('.reset');
console.log(start);


var stopInterval;
let isStart=false;

start.addEventListener('click',function(){
    // console.log("Hello");
    stopInterval=setInterval(function(){
        
        if(sec==59){
            sec=0;
            sec++;
            min++;
            
            if(min<10){
                displayMin.innerText="0"+min+":";
            }
            else{
                displayMin.innerText=min+":";
            }
            
            displaySec.innerText="0"+sec;
        }
        else{
            sec++;
            if(sec<10){
                displaySec.innerText="0"+sec;
            }
            else{
                displaySec.innerText=sec;
            }
            
        }
        
    },1000)
});

stop.addEventListener('click',function(){
    clearInterval(stopInterval);
});

reset.addEventListener('click',function(){
    clearInterval(stopInterval);
    min=00;
    sec=00;
    displayMin.innerText="00:";
    displaySec.innerText="00";
})

