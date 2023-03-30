
const container = document.querySelector(".container")
const main = document.querySelector(".main-wrapper")
const selectLevel = document.getElementById("level")
const btnGioca = document.getElementById("gioca")
let level = selectLevel.value

const NumBomb = 16;
let bombs = [];
let points = 0
let winLose = false



btnGioca.addEventListener("click", function(){

    restart()
    console.log(bombs);

    level = selectLevel.value
    
    chooseLevel(level);


    for (let i = 1; i <= level; i++){
      
        const square = createSquare()
        square.id = i
        container.append(square)

        getBomb()

        square.addEventListener("click", function(){

            if(bombs.includes(parseInt(square.id))){
                square.classList.add("boom")
            }

            square.classList.add("clicked")
            console.log(square.id)
            
            getExplose(bombs,square.id)
            console.log(points);
        })  
    
    }

    


})




//-------- FUNCTIONS ---------//

function chooseLevel(lev){

    if(lev === "49"){
        container.classList.add("facile")
        container.classList.remove("medio", "difficile", "hide")
    } else if(lev === "81"){
        container.classList.add("medio")
        container.classList.remove("difficile", "facile", "hide")
    } else if(lev === "100"){
        container.classList.add("difficile")
        container.classList.remove("medio", "hide","facile")
    } else {
        alert("scegli un livello")
    }
}


function createSquare(){

    const getsquare = document.createElement("div")

    getsquare.classList.add("box")

    return getsquare
}

function getBomb(){

    while(bombs.length < NumBomb){

        const bomb = getRandomNumber(1 ,parseInt(level))

        if(!(bombs.includes(bomb))){
            bombs.push(bomb)
        }
    }

    return bombs
}


function getRandomNumber(min,max){

    return Math.floor(Math.random() * (max - min + 1) + min)
}

function restart(){
    bombs = []
    container.innerHTML = ""
    document.getElementById("output").innerHTML =""

}

function getExplose(A,B){

    if(A.includes(parseInt(B))){
        console.log("sei esploso");
        gameFinish(true)
        document.getElementById("output").innerHTML =  `HAI PERSO! Hai fatto ${points} su ${level-NumBomb} ` 
    } else{
        points++;

        if(points === level - NumBomb){
            console.log("hai finito tutte le caselle, HAI VINTO");
            gameFinish(true)
            document.getElementById("output").innerHTML =  `HAI VINTO! Hai fatto ${points} su ${level-NumBomb} `
        } 
    }
}

function gameFinish(winLose){

    let blokgame = document.createElement("div")
    container.append(blokgame)
    
    if(level === "49"){
        blokgame.classList.add("blockgame1")
    } else if(level === "81"){
        blokgame.classList.add("blockgame2")
    } else if(level === "100"){
        blokgame.classList.add("blockgame3")
    }


}