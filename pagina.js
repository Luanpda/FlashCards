import verificarListaVazia  from "./listaVazia.js"



const frenteFC = document.getElementById("titulo")
const trasFC = document.getElementById("texto")
const Criar = document.getElementById("criar")
const containerFC = document.getElementById("containerFC")

Criar.addEventListener("click",(evento) =>{
    evento.preventDefault();
    if (frenteFC.value === "" || trasFC.value ==="") {
        alert("nao porra");
        return
    }
    const frentedoflash = frenteFC.value;
    const trasdoflash = trasFC.value;
    const FlashCard = document.createElement("button");
    FlashCard.classList.add("FlashCard");
    FlashCard.innerText = frentedoflash;
    containerFC.appendChild(FlashCard);
    verificarListaVazia(containerFC)
    
    FlashCard.addEventListener("click",(evento) =>{
        evento.preventDefault();
        if (FlashCard.innerText === frentedoflash){
            FlashCard.innerText = trasdoflash;
            containerFC.appendChild(FlashCard);
        } else{
            FlashCard.innerText = frentedoflash;
            containerFC.appendChild(FlashCard);
        }
        
    })

})

verificarListaVazia(containerFC);