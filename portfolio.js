function showContent(event){
    let Elm = event.target.getAttribute("data-id");
    console.log(event.target.classList)
    let targetElm = document.querySelector(`.${Elm}`);
    let activeElm = document.querySelector(".active-section");
    if(activeElm){
        activeElm.classList.remove("active-section");
        activeElm.classList.add("hidden")
    }
    if(targetElm && targetElm.classList.contains("hidden")){
        targetElm.classList.remove("hidden");
        targetElm.classList.add("active-section");
    }
}
