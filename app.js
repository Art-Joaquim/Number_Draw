const inputQtde = document.getElementById("quantidade");
inputQtde.addEventListener("input", function () 
{
    this.value = this.value.replace(/\D/g, ""); // Remove tudo que não for dígito
})

const inputDe = document.getElementById("de");
inputDe.addEventListener("input", function () 
{
    this.value = this.value.replace(/\D/g, ""); // Remove tudo que não for dígito
})

const inputAte = document.getElementById("ate");
inputAte.addEventListener("input", function () 
{
    this.value = this.value.replace(/\D/g, ""); // Remove tudo que não for dígito
})

function sortear(){
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);
    const intervalo = ate - de + 1;
    let sorteados = [];
    let numero;
    
    if (ate < de || ate == de){
        alert("Erro: O número no campo 'Até o Número' precisa ser maior do que o número do campo 'Do número'.");
        return;

    } else {
    if (quantidade > intervalo) {
        alert( "Erro: A quantidade de números solicitada é maior que o intervalo de busca disponível.");
        return;
    } else {
    for (let i = 0; i < quantidade; i++) {
    numero = obterNumeroAleatorio(de, ate);

    while (sorteados.includes(numero)){
        numero = obterNumeroAleatorio(de, ate);
    }{
        sorteados.push(numero);
    }
    }
    }
    }
    
    sorteados.sort((a,b) => a - b);
    let fraseCorreta = quantidade == 1 ? "Número sorteado:" : "Números sorteados:";
    let mensagem = `${fraseCorreta} ${sorteados}`;

    atualizarTexto("resultado", mensagem);
    alteraStatusBotao();
    document.getElementById("quantidade").disabled = true;
    document.getElementById("de").disabled = true;
    document.getElementById("ate").disabled = true;
}

function obterNumeroAleatorio (min, max){
    return Math.floor (Math.random() * (max - min)) + min;
}

function atualizarTexto(seletor, texto){
    let elemento = document.getElementById(seletor);
    elemento.innerHTML = texto;
}

//Alterar status dos botões
function alteraStatusBotao(){
    
    let botaoR = document.getElementById("btn-reiniciar");
    //Ativar botão de reiniciar ao sortear, e desabitar botão reiniciar ao usá-lo.
    if (botaoR.classList.contains("container__botao-desabilitado"))
    {
        botaoR.classList.remove("container__botao-desabilitado");
        botaoR.classList.add("container__botao");
    } else {
        botaoR.classList.remove("container__botao");
        botaoR.classList.add("container__botao-desabilitado");
    }

    let botaoS = document.getElementById("btn-sortear");
    //Desativar botão de sortear após usá-lo, e reabilitar botão sortear ao reiniciar.
    if (botaoS.classList.contains("container__botao")){
        botaoS.classList.remove("container__botao");
        botaoS.classList.add("container__botao-desabilitado");
    } else {
        botaoS.classList.remove("container__botao-desabilitado");
        botaoS.classList.add("container__botao");
    }
}

//Limpar campos de input após reiniciar
function reiniciar(){
    document.getElementById("quantidade").value = "";
    document.getElementById("de").value = "";
    document.getElementById("ate").value = "";
    document.getElementById("resultado").innerHTML = "Nenhum número sorteado até agora";
    alteraStatusBotao();

    document.getElementById("quantidade").disabled = false;
    document.getElementById("de").disabled = false;
    document.getElementById("ate").disabled = false;

}