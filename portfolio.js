
function showContent(event){
    let bar = document.querySelector(".box");
    let Elm = event.target.getAttribute("data-id");
    let targetElm = document.querySelector(`.${Elm}`);
    let activeElm = document.querySelector(".active-section");
    let Tran = document.getElementById("check");
    if(activeElm && bar.classList.contains("myactive")){
        activeElm.classList.remove("active-section");
        activeElm.classList.add("hidden");
        bar.classList.remove("myactive");
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
    var bar = document.querySelector(".box");
    if(bar.classList.contains("myactive")){
        bar.classList.remove("myactive");
    }
    else{
        bar.classList.add("myactive");
    }
}
