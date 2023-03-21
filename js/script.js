//array numeri clickkati
const clickedNumber = [""]

// Dichiarazioni:
let numberOfSquares = 0;
const button = document.querySelector(".buttone")
const grid = document.querySelector(".grid");
let value = document.getElementById("modalita")

// Per ogni numero generato genero le caselle della griglia
button.addEventListener("click", function () {
    grid.innerHTML = ""
    grid.classList.remove("disabled")
    if (value.value === "easy") {
        numberOfSquares = 100;

    } else if (value.value === "medium") {
        numberOfSquares = 81;
    } else {
        numberOfSquares = 49;
    }

    for (let i = 1; i <= numberOfSquares; i++) {
        const currentNumber = i;
        const newItem = generateGridItem(currentNumber);
        newItem.addEventListener("click", handleItemClick);
        grid.append(newItem);
    }



    function generateGridItem(text) {
        const newSquare = document.createElement("div");
        let modalities = value.value
        newSquare.classList.add("grid-item", modalities);
        newSquare.innerHTML = `<span>${text}</span>`;
        return newSquare;
    
    }
    // dato il numero massimo di click possibili (max number- bomb number) una volta raggiunto stamo hai visto
    
    function handleItemClick() {
        const clickedNumber = parseInt(this.querySelector("span").textContent);
        this.classList.add("green");
        this.classList.add("disabled")
        console.log(clickedNumber);
        
        // check se clickedNumber è presente tra i numeri casuali
        
        if (numeriCasuali.includes(clickedNumber)) {
            console.log("hai perso");
            this.classList.add("red")
            grid.classList.add("disabled")
        } 
        
    }
    
    // creare la funzione per numero casuale
    numeriCasuali = generaNumeriCasualiNonRipetuti(1, 100, 16);
    function generaNumeriCasualiNonRipetuti(min, max, lunghezza) {
        const numeriCasuali = [];
    
        while (numeriCasuali.length < lunghezza) {
            const numeroCasuale = Math.floor(Math.random() * (max - min + 1)) + min;
    
            if (numeriCasuali.indexOf(numeroCasuale) === -1) {
                numeriCasuali.push(numeroCasuale);
            }
        }
    
        return numeriCasuali;
    }
})
