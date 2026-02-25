
//Projeto: Calculadora ( JavaScript )
//Arquivo: main.js
//Objetivo: praticar funções e execução com Node.js (sem loops complexos).

//1)Crie as funções básicas:
function somar(a,b) {
    return a + b;
}

function subtrair(a,b){
    return a-b;
}

function multiplicar(a,b){
    return a*b;
}

function dividir(a,b){
    // Observação: evite b=0 para não dividir por zero.
    return a/b;
}

//2) Defina dois valores para testar:
let x=10;
let y=2;

//3) Mostre os resultados no console:
console.log("Soma:",somar(x,y));
console.log("Subtração:",subtrair(x,y));
console.log("Multiplicação:",multiplicar(x,y));
console.log("Divisão:",dividir(x,y));

//4)DESAFIO SIMPLES (sem loops):
//-troque os valores de x e y.
//-Teste números decimais (ex.:7.5 e 2.5).
//-Crie uma função 'potencial(a,b)'usando Math.pow(a,b) e exiba o resultado.

function trocarValores(x, y) {
    return [y, x]; // Retorna os valores trocados
}

function potencia(a,b){
    return Math.pow(a,b);
}

console.log("Potênciação:",potencia(x,y));
