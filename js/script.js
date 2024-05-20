const gridElement = document.querySelector("#myGrid")

const squareElment = document.createElement("div")

const myButton = document.querySelector("body > header > nav > div > div > div.pe-3 > button")



function getRandomInt(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
}

function generateUniqueBombs(numBombs, min, max) {
    let bombsCells = [];
    while (bombsCells.length < numBombs) {
        let bombNum = getRandomInt(min, max);
        if (!bombsCells.includes(bombNum)) {
            bombsCells.push(bombNum);
        }
    }
    return bombsCells;
}



//TODO Greed generator function    
function gridGenerator() {

        
    gridElement.innerHTML = '';

    let bombs = generateUniqueBombs(16, 1, 100)

    console.log(bombs)

    let punteggio = 0;


    for (let index = 1; index <= 100; index++) {

        

            const squareElment = document.createElement("div");
            squareElment.classList.add("quadratino");
    
            
            const contentEl = document.createElement("span");
            contentEl.classList.add("content");
            contentEl.append(index);
            squareElment.appendChild(contentEl);
    
            
            squareElment.addEventListener("click", function ()) {

                if (squareElement.classList.contains("clicked")) {
                }


                if (bombs.includes(index)) {
                squareElement.classList.add("bomb");
                squareElement.classList.add("clicked");
                
                }

                } else {
                    squareElment.classList.add("noBomb");
                    console.log(index);
                }
                }

      
            
            gridElement.appendChild(squareElment);
        }
        
        
    
    

    
//! Click to generate grid
myButton.addEventListener("click", gridGenerator);


