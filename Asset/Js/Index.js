const button = document.getElementById('button')
const icon = document.getElementById('icon')

button.onclick = function(){
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark")){
        icon.className ="fa-solid fa-moon";
    }else{
        icon.className = "fa-regular fa-sun";
    }
};