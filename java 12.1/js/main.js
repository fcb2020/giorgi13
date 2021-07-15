let feri1 = document.querySelector(".witeli");
let feri2 = document.querySelector(".shavi");
let feri3 = document.querySelector(".yviteli");

let frame = document.querySelector("body");

feri1.addEventListener("click" , function(){
     frame.style.backgroundColor = "red";
})

feri2.addEventListener("click" , function(){
    frame.style.backgroundColor = "black";
    
})

feri3.addEventListener("click" , function(){
    frame.style.backgroundColor = "yellow";
})


