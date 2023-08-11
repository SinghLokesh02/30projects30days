var lower = document.getElementsByClassName("btn1")[0];
var reset = document.getElementById("reset");
var higher = document.getElementById("add");


var counter = document.getElementById("counter");

reset.addEventListener("click",()=>{
    counter.innerHTML = 0;
    counter.style.color = "black";
})

lower.addEventListener("click",()=>{
    counter.innerHTML--;
    counter.style.color = "red";
})
add.addEventListener("click",()=>{
    counter.innerHTML++;
    counter.style.color = "rgb(17, 205, 83)";
})