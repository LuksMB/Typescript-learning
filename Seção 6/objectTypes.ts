function espaco(): void{
    console.log("");
}

//1. Object Types --> dados que tem como tipo objeto;
//2. Interface como parâmetro ---> Auxiliar e organizar na criação da tipagem dos parâmetros.
interface Produto{
    name: string
    price: number
    isAvailable: boolean
}

function showProduct(product: Produto){
    console.log(`O nome do produto é ${product.name} e seu preço é R$${product.price}`)
    if (product.isAvailable){
        console.log("O produto está disponível.")
    } else{
        console.log("O produto não está disponível. Tente novamente mais tarde.")
    }
}

const ssd: Produto = {
    name: "SSD 240Gb",
    price: 239.99,
    isAvailable: true
}

showProduct(ssd);
espaco();
showProduct({name: "Playstation 2", price: 300.00, isAvailable: false} );
espaco();

//3. Propriedades opcionais em interface
interface Usuario{
    email: string
    nickname?: string
    nivel?: number
}

function showPlayer(user: Usuario){
    console.log(`O jogador foi cadastrado no endereço de email: ${user.email}`)
    if (user.nickname && user.nivel){
        console.log(`${user.nickname} - Nível ${user.nivel}`)
    } else if(user.nickname && !user.nivel){
        console.log(`${user.nickname} - Nível 1`)
    }
}

const user1 = {email: "lucasmb.7@gmail.com", nickname: "LukksMB", nível: 105};

showPlayer(user1);
espaco();

//4.readonly -->  permite a criação de propriedades que só podem ser acessadas, não modificadas.
interface Carro{
    marca: string
    readonly rodas: 4 //Objeto não pode mudar essa propriedade
} 

//5. index signature ---> mais segurança para restrição de tipos.
// A segurança é aplicada no nome do objeto.
interface Objeto{
    [index: string]: number
}

let obj1: Objeto = {
    dezenas: 5
}  //Só funciona pois o nome da variável é uma string.

//6. Extending types ---> com o uso do extends, uma interface pode herdar propriedades de outra.
interface Human{
    name: string
    age: number
}

interface SuperHuman extends Human{
    superpowers: string[]
}

let saitamaBefore: Human = {
    name: "Saitama",
    age: 22
}

let saitamaAfter: SuperHuman = {
    name: "Saitama",
    age: 25,
    superpowers: ["Super speed", "Extreme strength", "High Agility", "Baldness"]
}

console.log(saitamaBefore);
console.log(saitamaAfter);
espaco();

//7. Intersection types --> Permite a criação de tipos mais complexos a partir da concatenação
//                          de interfaces.

interface Disguise{
    falseId: string
    
}

type SuperhumanDisguise = SuperHuman & Disguise;

const superhomem: SuperhumanDisguise = {
    name: "Kal-El",
    age: 45,
    superpowers: ["Super velocidade", "voar", "olhos laser", "sopro congelante", "corpo de aço"],
    falseId: "Clark Kent"
}

console.log(superhomem);
espaco();

//8. ReadOnlyArray ---> aplica em uma array pra permitir a modificação de seus itens mas não no tamanho
//                      da array.(obs: a modificação dos elementos se dá por meio de métodos.)

let arrayQualquer: ReadonlyArray<string> = ["Elemento 1", "Elemento 2", "Elemento 3", "Elemento 4"];

//arrayQualquer.push("Qualquer");  ---> Não funciona pois o tipo de array é readonly string[].

arrayQualquer.forEach((item) => {
    console.log(item)
})

arrayQualquer = arrayQualquer.map((elemento) => {
    return `Alteração ${elemento}`;
})

console.log(arrayQualquer);
//Conclui-se que é possível alterar o valor dos elementos por métodos não diretos.


//9. Tuplas --> Arrays mas com número pré definido de elementos e tipos definidos em uma array.
// Novamente, serve como uma segurança e controle melhor dos dados.
//O readonly também pode ser usado em tuplas, criando um tipo super restrito, pois
//limita o número de itens que teremos, seus tipos e não nos permite mudar seus valores.
type threeNumbers = [number, number, number];

const arrayCom3: threeNumbers = [5, 3, 2];

type numbers = readonly[number, number];


function showNumbers(nums: numbers){
    console.log(nums[0]);
    console.log(nums[1]);
}

showNumbers([0, 5]);
showNumbers([3, 2]);
espaco();

//Fim da Seção.