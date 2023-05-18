let container = document.querySelector(".container")
let body = document.querySelector("body")

let catchKey = (e) => {

    container.innerHTML = ""


    let keys = {

        "Key" : e.key == " " ? "Space": e.key,
        "Key Code" : e.keyCode,
        "Code" : e.code
    }

    for(  a in   keys){
        let div = document.createElement("div")
        div.className ="divs"
        let p = document.createElement("p")
        let small =document.createElement("small")
        small.textContent = a
        p.textContent = keys[a]
        div.append(p , small)
        container.appendChild(div)   
        
    }
}




body.addEventListener("keydown", catchKey)

