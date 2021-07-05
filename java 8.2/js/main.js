let gazrda = document.querySelector (".gazrda");
let shemcireba = document.querySelector (".shemcireba");
let reseti = document.querySelector (".reseti");
let numb = document.querySelector (".counter");

let count = 0;

update ();
function update () {
    numb.innerHTML = count;
}



gazrda.addEventListener ("click", function () {
    count ++;
    update ();
})

shemcireba.addEventListener ("click", function (){
    count --;
    if (count < 0) {count=0};
    update ();
})

reseti.addEventListener ("click", function (){
    count = 0;
    update ();
})

