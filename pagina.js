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

    FlashCard.dataset.frente = frentedoflash;
    FlashCard.dataset.tras = trasdoflash;
    FlashCard.dataset.id = Date.now();




    containerFC.appendChild(FlashCard);
    verificarListaVazia(containerFC)
    
    FlashCard.addEventListener("click",(evento) =>{
        evento.preventDefault();
        const card = evento.target; // Obtém o elemento flashcard clicado
        const frenteTexto = card.dataset.frente;
        const trasTexto = card.dataset.tras;




        if (card.innerText === frenteTexto){
            card.innerText = trasTexto;
            
        } else{
            card.innerText = frenteTexto
            
        }
        
    })
    frenteFC.value = "";
    trasFC.value = "";
})

verificarListaVazia(containerFC);