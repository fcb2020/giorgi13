let chan = document.querySelector("#pass")


function change () {
    // chan.setAttribute('type', 'text');

    if(chan.type == "password") {
        chan.type = "text"
    }else {
        chan.type = "password"
    }
}