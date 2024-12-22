let get = document.querySelector("#btn")
console.log(get)

let get_data = document.querySelector(".show_data")
// get_data.style.visibilty = "none";
get_data.style.display = "none";
let get_image = document.querySelector(".center")
get.addEventListener("click",()=>{
let get_user = document.querySelector("input").value;
fetch("https://api.github.com/users/"+get_user)
.then((response)=>{
    return response.json();
})
.then((data)=>{
    // get_data.style.visibilty = "visible";
    get_data.style.display = "flex";
    get_image.style.display = "block";
    console.log(data)
    document.querySelector("#name").innerText = data.name;
    document.querySelector("#bio").innerText = data.bio;
    document.querySelector("#followers").innerText = data.followers;
    document.querySelector("#following").innerText = data.following;
    document.querySelector("#public_repos").innerText = data.public_repos;
    document.querySelector("#public_gists").innerText = data.public_gists;
    document.querySelector("#avatar_url").src = data.avatar_url;    
})
})