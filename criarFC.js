
const frenteFC = document.getElementById("titulo")
const trasFC = document.getElementById("texto")


export function criarFC(){
    
    if (frenteFC.value === "" || trasFC.value ==="") {
        alert("nao porra");
        return
    }
    
    const FlashCard = document.createElement("button");
    FlashCard.classList.add("FlashCard");
    FlashCard.innerText = frenteFC.value;

    FlashCard.dataset.frente = frenteFC.value;
    FlashCard.dataset.tras = trasFC.value;
    FlashCard.dataset.id = Date.now();
    frenteFC.value = "";
    trasFC.value = "";
    return FlashCard;

    
}

