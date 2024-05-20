const gridElement = document.querySelector("#myGrid")

const squareElment = document.createElement("div")

const myButton = document.querySelector("body > header > nav > div > div > div.pe-3 > button")

myButton.addEventListener("click", gridGenerator);
    
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