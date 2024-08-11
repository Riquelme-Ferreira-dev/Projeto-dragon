/*
    OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente
    
passo 1 - dar um jeito de pegar o elemento HTML dos botões
passo 2 - dar um jeito de identificar o clique do usuário no botão
passo 3 - desmarcar o botão selecionado anterior
passo 4 - marcar o botão clicado como se estivesse selecionado
passo 5 - esconder a imagem anteriormente selecionada
passo 6 - fazer aparecer a imagem correspondente ao botão clicado
passo 7 - esconder a informação do dragão anteriormente selecionado
passo 8 - mostrar a informação do dragão referente ao botão clicado
*/

// passo 1 - dar um jeito de pegar o elemento HTML dos botões

const botoesCarrossel = window.document.querySelectorAll(".botao")
const imagens = document.querySelectorAll(".imagem")// passo 6
const informacoes = document.querySelectorAll(".informacoes")//passo 8

// passo 2 - dar um jeito de identificar o clique do usuário no botão

botoesCarrossel.forEach((botao, indice)=> {
    botao.addEventListener('click', () => {
        //passo 3 - desmarcar o botão selecionado anterior
        desativarBotaoSelecionado()

        // passo 4 - marcar o botão clicado como se estivesse selecionado

        marcarBotaoSelecionado(botao)

        //passo 5 - esconder a imagem anteriormente selecionada

        EsconderImagemAtiva()

        //passo 6 - fazer aparecer a imagem correspondente ao botão clicado
        
        mostraImagemDeFundo(indice)

        //passo 7 - esconder a informação do dragão anteriormente selecionado

        esconderInformacoesAtivas()

        //passo 8 - mostrar a informação do dragão referente ao botão clicado

        MostraInformacoes(indice)
    })
})

function marcarBotaoSelecionado(botao) {
    botao.classList.add("selecionado")
}

function MostraInformacoes(indice) {
    informacoes[indice].classList.add("ativa")
}

function esconderInformacoesAtivas() {
    const informacaoAtiva = document.querySelector(".informacoes.ativa")
    informacaoAtiva.classList.remove("ativa")
}

function mostraImagemDeFundo(indice) {
    imagens[indice].classList.add("ativa")
}

function EsconderImagemAtiva() {
    const imagemAtiva = document.querySelector(".ativa")
    imagemAtiva.classList.remove("ativa")
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = window.document.querySelector(".selecionado")
    botaoSelecionado.classList.remove("selecionado")
}

