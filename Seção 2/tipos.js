"use strict";
//Tipos primitivos e alguns de seus métodos:
//(string, number, boolean)
//1. Number -> tipagem para números
let x = 532;
console.log("x é igual a " + x);
console.log("O tipo da variável x" + " é " + typeof x);
//number agrupa todos os números, funcionando como um int, double, float, etc.
const y = 23.45678;
console.log("y é igual a " + y);
console.log("O tipo da variável y" + " é " + typeof y);
console.log("");
//2. String - tipagem para texto
let nome = "Lucas";
console.log(nome.toUpperCase());
let nomeCompleto;
let sobrenome = "Braga";
nomeCompleto = nome + " " + sobrenome;
console.log(nomeCompleto);
console.log("A variável é do tipo " + typeof nomeCompleto);
console.log("");
//3. Boolean - tipagem para verdadeiro ou falso
let botao = true;
console.log("a variável é do tipo " + typeof botao);
if (botao) {
    botao = false;
    console.log("o valor da variável é " + botao);
    console.log("");
}
//Bonus: Typescript funciona como uma pessoa a mais, nos apontando erros e garantindo que
//        bugs sejam menos frequentes, como uma trava na compilação.
//4. Type Inference e Type Annotation
//Annotation - Uso de dois pontos para definir manualmente o tipo da variável.
//Inference - O tipo da variável é deduzido pelo formato do valor atribuído a variável.
let annotation = "Testando atribuição de tipo por Annotation";
let inference = "Testando atribuição de tipo por Inference";
console.log("Os tipos das variáveis são respectivamente " + typeof annotation + " e " + typeof inference);
//OBS: mesmo que por inferência, o tipo da variável não pode ser alterado no typescript;
