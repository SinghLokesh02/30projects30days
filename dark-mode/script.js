let parent = document.querySelector(".parent");
let child = document.querySelector(".child");
let container = document.querySelector(".container");


parent.addEventListener("click",()=>{
    container.classList.toggle("black");
    container.style.transitionDuration = '1s';
    parent.classList.toggle("white");
    parent.style.transitionDuration = '1s';
    child.classList.toggle("black");
    child.style.transitionDuration = '1s';
     
    
    // Clicking on button 
    if(child.classList.contains("toggle-left") || !(child.classList.contains("toggle-right") || child.classList.contains("toggle-left"))){
        child.classList.remove("toggle-left");
        child.classList.add("toggle-right");
    }
    else{
        child.classList.remove("toggle-right");
        child.classList.add("toggle-left");
    }
})