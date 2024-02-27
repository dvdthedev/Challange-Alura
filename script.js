function visibilidade(){
    let respostaVisivel = document.getElementById("respostaGerada");
    let imagemVisivel = document.getElementById("caixaImagem");
    let botaoVisivel = document.getElementById("copybutton");
    respostaVisivel.style.visibility = 'visible';
    imagemVisivel.style.display = 'none';
    botaoVisivel.style.visibility = 'visible';
} //controla visibilidade quando a função é chamada com um texto digitado na textarea.

function visibilidadePadrao(){
    let respostaVisivel = document.getElementById("respostaGerada");
    let imagemVisivel = document.getElementById("caixaImagem");
    let botaoVisivel = document.getElementById("copybutton");
    respostaVisivel.style.visibility = 'hidden'
    imagemVisivel.style.display = 'flex'
    botaoVisivel.style.visibility = 'hidden'
    let resposta = document.getElementById("respostaGerada")
    resposta.textContent = ''
} //volta a visibilidade para padrão.



function encripta(){
    let str = document.getElementById("textarea").value
    if(str == false){return visibilidadePadrao()}
    let novaString = '';
    for(let i = 0; i < str.length; i++){
        let letra = str[i]
        switch(letra){
            case 'a':
                novaString += 'ai';
                break
            case 'e':
                novaString += 'enter';
                break
            case 'i':
                novaString += 'imes';
                break
            case 'o':
                novaString += 'ober';
                break
            case 'u':
                novaString += 'ufat';
                break
            default:
                novaString += letra
        }

    } 
    visibilidade()
    console.log(novaString)
    let resposta = document.getElementById("respostaGerada")
    return resposta.textContent = novaString
} //encripta o text area e envia a resposta para o respost

function desencripta(){
    let str = document.getElementById("textarea").value
    if(str == false){return visibilidadePadrao()}
    str = str.replaceAll('imes', 'i');
    str = str.replaceAll('ai', 'a');
    str = str.replaceAll('ufat', 'u');
    str = str.replaceAll('ober', 'o');
    str = str.replaceAll('enter', 'e');
    console.log(str)
    visibilidade()
    let resposta = document.getElementById("respostaGerada")
    return resposta.textContent = str

}//desencripta o text area e envia a resposta para o respost

function copy() {
    let copyText = document.getElementById("respostaGerada");
    let textToCopy = copyText.textContent;
    navigator.clipboard.writeText(textToCopy)
        
}

document.addEventListener("DOMContentLoaded", function() {
    const botaoCopiar = document.getElementById("copybutton");
    if (botaoCopiar) {
        botaoCopiar.addEventListener("click", function(){
            const textoOriginal = this.textContent;
            this.textContent = "Copiado!";
            setTimeout(() => {
                this.textContent = textoOriginal;
            }, 1000);
        });
    } else {
        console.error("Elemento com o ID 'copybutton' não encontrado.");
    }
});


function darkMode(){
    document.body.classList.toggle('dark-theme')
    if(document.body.classList.contains('dark-theme')){
        moon.src = '/Assets/sun-solid.svg'
        logo.src = '/Assets/logoDark.svg'
        imgResposta.src = '/Assets/sherlock.svg'
    } else {
        moon.src = '/Assets/moon-solid.svg'
        logo.src = '/Assets/Logo.svg'
        imgResposta.src = '/Assets/resposta.svg'
    }
}