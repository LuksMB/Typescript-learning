function espaco():void{
    console.log("")
}

//Relembrando...
//Com os generics, o typescript é capaz de formar novos tipos.
//Essa seção é feita para a facilidade de fazer a manuntenção do programa, evitando bugs futuros
// com a utilização de mais tempo no preparo da estrutura dos tipos.



//1. Relembrando Generics
//Utilizados para funções aceitarem mais de um tipo sem o uso de any ou union types.

function mostrarDado<T>(dado: T): string{ 
    return `O dado é ${dado}` 

}
console.log(mostrarDado(5));
console.log(mostrarDado("Teste"));
console.log(mostrarDado(true));
espaco();

//2. Constraints em Generics ---> O recurso usado para limitar os tipos que os generics aceitam.

function mostrarNome<T extends {nome: string}>(obj: T){
    return `O nome é ${obj.nome}`
}
const obj1 = {
    nome: "Mouse",
    cor: "Branco com vermelho"
}
console.log(mostrarNome(obj1));

//3. Interfaces com Generics  ---> Adiciona uma adaptação para os tipos complexos criados pelas 
//                                 interfaces, permitindo tipos variados dependendo do caso.

interface Gene<T, U, C>{
    id: string
    rodas: T
    motor: U
    cor: C
}

type Carro = Gene<number, number, string>;
type Mouse = Gene<boolean, boolean, string>;

const carro1: Carro = {id: "Uno", rodas: 4, motor: 1.6, cor: "Vermelho"};
const mouse1: Mouse = {id: "Mouse RGB", rodas: false, motor: false, cor: "Branco"};

console.log(carro1);
console.log(mouse1);
espaco();


//4. Type parameters --> possibilita a criação de relação entre tipo genérico e sua chave.
function getSomeKey<T, U extends keyof T>(obj: T, key: U){
    return `A chave ${key} está presente no objeto e tem o valor de ${obj[key]}`;
}

const server = {
    hd: "2TB",
    ram: "16GB"
}

console.log(getSomeKey(server, "ram"));


//5. keyof Type Operator  ---> permite criar tipos baseados nas chaves do objeto por meio de parâmetro.

interface Pessoa{
    nome: string
    idade: number
    sexo: "M" | "F"
}

type P = keyof Pessoa;

function mostrarKey(pessoa: Pessoa, key: P): string{
    return `${pessoa[key]}`;
}

const josias: Pessoa = {
    nome: "Josias",
    idade: 16,
    sexo: "M"
}

console.log(mostrarKey(josias, "sexo"));
espaco();


//6. typeof Type Operator --> permite criar variáveis com tipos de outras.
const username: string = "Lucas";
const username2: typeof username = "Lopes";

type user = typeof username;
const username3: user = "Jonas";


//7. Indexed Acess Types ---> permite a criação de um tipo baseado na propriedade de um objeto.
type mobilete = {km: number, passageiros: number, descricao: string };

type Km = mobilete["km"]; 

const pop100: mobilete = {
    km: 5000,
    passageiros: 5,
    descricao: "motorista bom faz tetris de passageiro"
}

function showKm(km: Km){
    console.log(`O veículo tem a km de: ${km}`);
}

showKm(pop100.km);

//8. Conditional types --> permite criar um tipo baseado numa condição.
//utiliza da sintaxe do if ternário.

interface A{}

interface B extends A{}

type myType = B extends A ? number : string;

const someVar: myType = 45;

//9. Template literal types --> customização de tipos.
type TestA = "text";

type CustomType = `some ${TestA}`
const variavel: CustomType = "some text";

type testando1 = "Union";
type testando2 = "Types";

type a = `${testando1}` | `${testando2}`


//Fim da Seção.