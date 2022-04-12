"use strict";
function espaco() {
    console.log("");
}
//Relembrando...
//Com os generics, o typescript é capaz de formar novos tipos.
//Essa seção é feita para a facilidade de fazer a manuntenção do programa, evitando bugs futuros
// com a utilização de mais tempo no preparo da estrutura dos tipos.
//1. Relembrando Generics
//Utilizados para funções aceitarem mais de um tipo sem o uso de any ou union types.
function mostrarDado(dado) {
    return `O dado é ${dado}`;
}
console.log(mostrarDado(5));
console.log(mostrarDado("Teste"));
console.log(mostrarDado(true));
espaco();
//2. Constraints em Generics ---> A peça que faltava para limitar os tipos que os generics aceitam.
function mostrarNome(obj) {
    return `O nome é ${obj.nome}`;
}
const obj1 = {
    nome: "Mouse",
    cor: "Branco com vermelho"
};
console.log(mostrarNome(obj1));
const carro1 = { id: "Uno", rodas: 4, motor: 1.6, cor: "Vermelho" };
const mouse1 = { id: "Mouse RGB", rodas: false, motor: false, cor: "Branco" };
console.log(carro1);
console.log(mouse1);
espaco();
//4. Type parameters --> possibilita a criação de relação entre tipo genérico e sua chave.
function getSomeKey(obj, key) {
    return `A chave ${key} está presente no objeto e tem o valor de ${obj[key]}`;
}
const server = {
    hd: "2TB",
    ram: "16GB"
};
console.log(getSomeKey(server, "ram"));
function mostrarKey(pessoa, key) {
    return `${pessoa[key]}`;
}
const josias = {
    nome: "Josias",
    idade: 16,
    sexo: "M"
};
console.log(mostrarKey(josias, "sexo"));
espaco();
//6. typeof Type Operator --> permite criar variáveis com tipos de outras.
const username = "Lucas";
const username2 = "Lopes";
const username3 = "Jonas";
const pop100 = {
    km: 5000,
    passageiros: 5,
    descricao: "motorista bom faz tetris de passageiro"
};
function showKm(km) {
    console.log(`O veículo tem a km de: ${km}`);
}
showKm(pop100.km);
const someVar = 45;
const variavel = "some text";
//Fim da Seção.
