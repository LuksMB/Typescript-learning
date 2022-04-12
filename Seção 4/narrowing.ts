//Narrowing ---> recurso do js pra identificar um tipo de dado.
//1. typeof Type Guard
type nors = number | string;
function soma (a: nors, b: nors){
    if (typeof a === "string" && typeof b === "string"){
        console.log(parseFloat(a) + parseFloat(b));
    } else if(typeof a === "number" && typeof b === "number"){
        console.log(a + b);
    } else{
        console.log("Impossível realizar a soma");
    }
}
soma("5", "32");
soma(5, 32);
soma(5, "32");
console.log("");

//2. Checando existência de valores em variáveis.

function calcular(numeros: Array<number>, operador?: string | undefined){
    if (operador){
        if (operador === "+"){
            let x: number = 0;
            for (let i = 0; i < numeros.length; i++){
                x += numeros[i];
            }
            console.log(x);
        } else if (operador === "-"){
            let x: number = numeros[0];
            for (let i = 1; i < numeros.length; i++){
                x -= numeros[i];
            }
            console.log(x);
        }
    } else{
        console.log("Nenhum operador identificado, informe um operador!");
    }
}
calcular([5, 3, 2]);
calcular([5, 3, 2], "+");   
calcular([5, 3, 2], "-");   
console.log("");

//3. Operador instanceof.

class Usuário{
    name

    constructor(name: string){
        this.name = name;
    }
}

class SuperUsuário extends Usuário{
    constructor(name: string){
        super(name);
    }
}

const lucas = new Usuário("Lucas");
const carlos = new SuperUsuário("Carlos");

console.log(lucas);
console.log(carlos);

function abordarUser(user: object){
    if(user instanceof SuperUsuário){
        console.log("Seja bem-vindo, " + user.name + "!\nDeseja ver seus dados cadastrados?");
    } else if(user instanceof Usuário){
        console.log("Olá, " + user.name + "!");
    }
}
abordarUser(carlos);
abordarUser(lucas);
console.log("");


//4. Operador in ---> verifica a existência de uma propriedade em um objeto, incluindo as opcionais.

class Gato{
    nome;
    corPelo;
    corOlho?;

    constructor(nome: string, corPelo: string | undefined, corOlho?: string){
        this.nome = nome;
        this.corPelo = corPelo!;
        this.corOlho = corOlho;        
    }
}

const mira = new Gato("Mira", "rajado", "verde");
const arya = new Gato("Arya", "preto com manchas amarelas");

function mostrarOlho(gata: Gato){

    if(gata.corOlho && "corOlho" in gata){
        console.log("A cor de seus olhos é " + gata.corOlho);
    } else{
        console.log("Seus olhos nunca foram vistos... " + gata.corPelo);
    }
}
mostrarOlho(mira);
mostrarOlho(arya);
console.log("");

//Fim da seção.