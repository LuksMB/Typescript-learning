"use strict";
//Funções que não retornam - tipo void.
function exemplo1() {
    console.log("Essa função não retorna nada!");
}
function espaco() {
    console.log("");
}
exemplo1();
espaco();
//2. Callback - É uma função passada a outra função como argumento.****
function ola(name) {
    return "Olá " + name;
}
function oi_real(funcao, username) {
    console.log("Preparando o oi...");
    const resposta = funcao(username);
    console.log(resposta);
}
oi_real(ola, "Lucas");
//3. Generic functions - tipo de retorno relacionado com o tipo de argumento.
//Ajuda a tratar as listas com tipos não definidos, no caso, para qualquer tipo.
//<T>
function elementoInicial(arr) {
    return arr[0];
}
console.log(elementoInicial([5, 3, 2]));
console.log(elementoInicial(["L", "U", "C", "K"]));
espaco();
function juntarObjetos(obj1, obj2) {
    return {
        ...obj1,
        ...obj2
    };
}
const objeto3 = juntarObjetos({ nome: "Lucas" }, { idade: 19, ultimoNome: "Braga" });
console.log(objeto3);
espaco();
//5. Constraints - feitos para limitar os tipos de uma generic function.
function funcao_generica(a, b) {
    let retorno;
    if (a > b) {
        retorno = a;
    }
    else {
        retorno = b;
    }
    return retorno;
}
console.log(funcao_generica(5, 4));
console.log(funcao_generica(1, 9));
espaco();
//6. Especificar o tipo de argumento da constraint.
function juntarListas(lista1, lista2) {
    let lista3 = lista1.concat(lista2);
    return lista3;
}
console.log(juntarListas([5, 3, 2, 5, 3, 2], ["Lucas", "Braga", "Teste"]));
espaco();
//Lembrar dos parâmetros default e opcionais 
//sintaxe => (parametro?: type = default).
//7. Unknown type ---> Reconhece qualquer tipo, mas não permite a execução de operacoes sem a tipagem
//   adequada(precisa de validação para se mostrar útil).
function funcao_qualquer(x) {
    if (Array.isArray(x)) {
        console.log(x[0]);
    }
    else if (typeof x === "number") {
        console.log(x);
    }
}
funcao_qualquer([2, 3, 4]);
funcao_qualquer(92);
espaco();
//8. tipo never - retorno de erros. 
function showErrorMessage(msg) {
    throw new Error(msg);
}
//showErrorMessage("Deu erro!"); ---> comentar pois não permite a continuação do console.
//9. Rest parameters -- Rest Operator(JS ES6)
// rest operator (...) --> permite a passagem de infinitos parâmetros convergindo em uma array 
//                         com tipo definido.
//dúvida: método reduce de arrays.
function somaTotal(...serie) {
    return serie.map((number) => 2 * number);
}
console.log(somaTotal(2, 4, 6, 8, 12));
espaco();
//10. Destructuring em parâmetros -- JS (ES6)
//evita a necessidade de coisas como acesso a propriedade de objeto na função. (product.name)
function mostrarProduto({ name, price }) {
    return `O nome do produto é ${name} e ele custa R$${price}`;
}
const ps5 = { name: "Playstation 5", price: 4499.99 };
console.log(mostrarProduto(ps5));
espaco();
//Parâmetros default ficam por último na lista dos argumentos.
//Fim da Seção.
