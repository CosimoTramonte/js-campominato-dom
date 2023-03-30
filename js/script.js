
const container = document.querySelector(".container")
const selectLevel = document.getElementById("level")
const btnGioca = document.getElementById("gioca")



btnGioca.addEventListener("click", function(){

    container.innerHTML = ""

    const level = selectLevel.value
    
    if(level === "49"){
        container.classList.add("facile")
        container.classList.remove("medio", "difficile", "hide")
    } else if(level === "81"){
        container.classList.add("medio")
        container.classList.remove("difficile", "facile", "hide")
    } else if(level === "100"){
        container.classList.add("difficile")
        container.classList.remove("medio", "hide","facile")
    } else {
        alert("scegli un livello")
    }


    for (let i = 1; i <= level; i++){

        console.log(level)
        
        const square = createSquare()
        square.id = i
        container.append(square)


        square.addEventListener("click", function(){

            square.classList.toggle("clicked")
            console.log(square.id)
        })
    }

})




//-------- FUNCTIONS ---------//



function createSquare(){

    const getsquare = document.createElement("div")

    getsquare.classList.add("box")

    return getsquare
}
