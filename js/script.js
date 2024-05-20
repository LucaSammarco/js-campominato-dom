const gridElement = document.querySelector("#myGrid")

const squareElment = document.createElement("div")

const myButton = document.querySelector("body > header > nav > div > div > div.pe-3 > button")

let bombsCells = []

function getRandomInt(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
}

// for (let index = 1; index <= 16; index++) {
//     const bombNum = getRandomInt(1, 16)
//     bombsCells.push(bombNum)
    
// }

while (bombsCells.length < 16) {

    let bombNum = getRandomInt(1, 16);
    if (!bombsCells.includes(bombNum)) {
        bombsCells.push(bombNum);
    }

}



//TODO Greed generator function    
function gridGenerator() {

    gridElement.innerHTML = '';



    for (let index = 1; index <= 100; index++) {

        

            const squareElment = document.createElement("div");
            squareElment.classList.add("quadratino");
    
            
            const contentEl = document.createElement("span");
            contentEl.classList.add("content");
            contentEl.append(index);
            squareElment.appendChild(contentEl);
    
            
            squareElment.addEventListener("click", function () {
                squareElment.classList.add("active")
                console.log(index)
                contentEl.classList.add("active");
            }); 
    
            
            gridElement.appendChild(squareElment);
        }
    
    }
    

    
//! Click to generate grid
myButton.addEventListener("click", gridGenerator);


