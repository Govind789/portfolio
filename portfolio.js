
function showContent(event){
    let Elm = event.target.getAttribute("data-id");
    console.log(event.target.classList)
    let targetElm = document.querySelector(`.${Elm}`);
    let activeElm = document.querySelector(".active-section");
    let Tran = document.getElementById("check");
    if(activeElm){
        activeElm.classList.remove("active-section");
        activeElm.classList.add("hidden");
    }
    if(targetElm && targetElm.classList.contains("hidden")){
        targetElm.classList.remove("hidden");
        targetElm.classList.add("active-section");
    }
    if(Tran.checked){
        Tran.checked = false;
    }
}

function rotateBtn(){
    var bar = document.querySelector(".box")
    if(bar.classList.contains("myactive")){
        bar.classList.remove("myactive");
    }
    else{
        bar.classList.add("myactive");
    }
}
