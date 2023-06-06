var paragrafo = document.querySelector("#cor");
var paragrafo1 = document.querySelector("#bv");

function boasVindas(){
paragrafo1.textContent = "Bem-vindo!";
}
var x = 0;
function salvar(){ 
    paragrafo.textContent ="Nome: Pedro Henrique Vasconcelos";
    paragrafo.style.color = getCor(x % 6);
    paragrafo.style.fontWeight = "bold"
    x = x + 1;
}

function getCor(n){
    cores = ["red", "blue", "green", "yellow","orange","violet"]
    return cores[n];
}