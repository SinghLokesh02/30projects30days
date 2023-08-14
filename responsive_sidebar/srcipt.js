const ham = document.querySelector("#ham");
var w = document.querySelector(".main");
var slider = document.querySelector(".slider");
console.log(w);
let count = 0;
ham.addEventListener("click",()=>{
const get_all = document.querySelectorAll(".contain1");

if(count%2==0){
get_all.forEach((element)=>{
    element.lastElementChild.style.display = "none";
    w.style.width = "min-content";
    slider.style.margin = "0 1vh";
    slider.style.float = "left";
     
});
}
 else if(count%2!=0){
    get_all.forEach((element)=>{
        element.lastElementChild.style.display = "block";
        console.log(element.lastElementChild)
        slider.style.margin = "1vh 1vh"
        slider.style.float = "right"
        w.style.width = "25vh";
    });
}
count++;
});