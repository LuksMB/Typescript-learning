"use strict";
//Aprofundando em tipos: Arrays, any, parâmetros, returns, funções anônimas, objetos, propriedades e 
//parâmetros opcionais, union types, type alias, interfaces, literal types, Non null assertation operator,
//BigInt e Symbol.
//1. Arrays
//Arrays normalmente têm um tipo único para todos os seus itens.
//tipos de array: number[], string[], boolean[];
let conjunto = [5, 3, 2];
conjunto.push(0);
for (let x = 0; x < conjunto.length; x++) {
    console.log("Item " + (x + 1) + ": " + conjunto[x]);
}
console.log("");
let meuNome = ["Lucas", "Maurício", "Braga"];
meuNome.push("LMB");
for (let x = 0; x < meuNome.length; x++) {
    console.log("Item " + (x + 1) + ": " + meuNome[x]);
}
console.log("");
//2. Array com outra sintaxe: Array<type>.
const exemplo = ["Array", "do", "tipo", "string"];
console.log(exemplo[0]);
console.log(exemplo[1]);
console.log(exemplo[2]);
console.log(exemplo[3]);
console.log("");
//3. Any: Tipo nada recomendado para o typescript, exclusivo para criação de arrays com vários tipos.
//        ou quando o tipo de dado não importa.
let qualquer = 2; //tipo number
console.log(qualquer);
qualquer = "exemplificando a troca de tipos da mesma variável."; //tipo string
console.log(qualquer);
qualquer = false; //tipo boolean
console.log(qualquer);
console.log("");
let anyArray = ["Sabão", 1, true, meuNome];
console.log(anyArray);
console.log("");
//4. Funções com parâmetros e retorno tipados.
// sintaxe --> function newFunction(parameterName: type): type{}
function soma(num1, num2) {
    return num1 + num2;
}
console.log(soma(8, 15));
console.log("");
//5. Funções anônimas.
//setTimeout nos permite utilizar uma função sem nome.
setTimeout(function () {
    const teste = "Apenas um teste de função anônima...";
    //console.log(teste);   comentado pois printa sempre por último por conta do timer.
}, 1);
//6. Tipos de Objetos.]
// sintaxe = {propiedade1: type, propriedade2: type}
function mostrarCartao(cartao) {
    console.log("O titular desse cartão é " + cartao.titular);
    console.log("O saldo da conta é R$" + cartao.saldo);
}
const cartao1 = { titular: "Lucas Maurício Braga", saldo: 0.00 };
function qualquer1(x) {
    x;
}
mostrarCartao(cartao1);
qualquer1(function () {
    console.log(cartao1);
});
console.log("");
//OBS ---> propiedades opcionais
// os objetos podem ter suas últimas propriedades opcionais por meio do ?
//sintaxe = {propiedade1: type, propriedade2?: type}
//Nesse caso, tudo funcionaria normalmente se apenas uma propriedade fosse passada.
//é possível também validar os parâmetros opcionais utilizando condicionais.
//7. Union Types
//atribui mais de um tipo possível pra uma variável ( um ou outro ).
function mostrarVariavel(a) {
    console.log(a);
}
let texto2 = 2;
mostrarVariavel(texto2);
texto2 = "Mudei";
mostrarVariavel(texto2);
console.log("");
function mostrarValor(a) {
    console.log(a);
}
mostrarValor(8);
console.log("");
function mostrarCoordenadas(mapa) {
    console.log("x: " + mapa.x + "\ny: " + mapa.y + "\nz: " + mapa.z);
}
let mapa1 = {
    x: 5,
    y: 3,
    z: 2
};
mostrarCoordenadas(mapa1);
console.log("");
//A diferença entre o alias e a interface é a possibilidade de modificação de tipo, que apenas existe
// na interface. Sendo assim, o alias não pode ser alterado após sua criação.
//10. Literal Types ---> É possível passar valores literais como um tipo para uma variável.
let gago;
gago = "isso é tudo pessoal!";
//Qualquer outra string não permitiria a atribuição.
//Pode também ser usado com union types para permitir atribuições específicas.("left" | "right" | "center").
//11. Non-null Assertation Operator ---> Limpar os erros relacionados a gets do html.
//(!) - Caractere que realiza o non-null AO.
const puxada = document.getElementById("puxavel");
console.log(puxada.innerText);
//12. Bigint - números maiores (n > 2^53).
let n;
n = 1500n;
//13. Symbol ---> Cria uma referência única para um valor, fazendo com que diferencie em comparações de 
// valores iguais.
let textoBase = Symbol("Teste");
let textoCopiado = Symbol("Teste");
console.log(textoBase === textoCopiado); //imprime falso
console.log("");
//Fim da seção.
