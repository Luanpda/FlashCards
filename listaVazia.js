const menssagemsemFC = document.querySelector(".lista-vazia");

function verificarListaVazia(containerFC){
    const qtdFC = containerFC.querySelectorAll("button");
    if(qtdFC.length === 0){
        menssagemsemFC.style.display = "block";
    } else{
        menssagemsemFC.style.display = "none";
    }

}

export default verificarListaVazia;