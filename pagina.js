import verificarListaVazia  from "./listaVazia.js"
import { criarFC } from "./criarFC.js"


const Criar = document.getElementById("criar")
const containerFC = document.getElementById("containerFC")

Criar.addEventListener("click",(evento) =>{
    evento.preventDefault();

    const FlashCard = criarFC();
    containerFC.appendChild(FlashCard);
    verificarListaVazia(containerFC)
    
    FlashCard.addEventListener("click",(evento) =>{
        evento.preventDefault();
        const card = evento.target; 
        const frenteTexto = card.dataset.frente;
        const trasTexto = card.dataset.tras;

        if (card.innerText === frenteTexto){
            card.innerText = trasTexto;
            
        } else{
            card.innerText = frenteTexto
            
        }
        
    })
    
})

verificarListaVazia(containerFC);
