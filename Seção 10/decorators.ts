//Essa seção irá apresentar mais conceitos que as outras, vai exigir mais desenvolvimento teórico.

//1. Decorators
//Eles podem adicionar novas funcionalidades às classes e funções.
//Criamos novas funções que são adicionadas a partir de @nome().
//Essa função é chamada assim que o item que foi definido o decorator for executado.
//Tem que adicionar uma configuração no tsconfig.json;

//2. Primeiro decorator 
//O decorator é criado como uma function, trabalhando com argumentos especiais:
//Target, PropertKey e Descriptor;
//Esses argumentos nos dão informação do local de execução do decorator.

function myDecorator(){
    console.log("Iniciando decorator!")

    return function(target: any, propertKey: string, descriptor: PropertyDescriptor){

        console.log("Executando decorator!");
        console.log(target);
        console.log(propertKey);
        console.log(descriptor);

    }
}

class MyClass{
    @myDecorator()
    testing(){
        console.log("Terminando a execução do método");
    }
}

const myObj = new MyClass();

myObj.testing();
console.log("");

//3. Múltiplos decorators
//A ordem de execução vem de baixo pra cima, esse recurso nos permite criar operações de maior complexidade.

function a(){
    return function(target: any, propertKey: string, descriptor: PropertyDescriptor){
        console.log("executou a!");
    }
}

function b(){
    return function(target: any, propertKey: string, descriptor: PropertyDescriptor){
        console.log("executou b!");
    }
}

class MultipleDecorators{
    @a()
    @b()
    testing(){
        console.log("Terminando execução!")
    }
}

const multiple = new MultipleDecorators();
multiple.testing();
console.log("");

//4. Decorator de classe
//Ligado ao constructor, executado quando o constructor estiver executando.
//Permite acrescentar algo na criação de classes (new);
function classDec(constructor: Function){
    console.log(constructor)
    if(constructor.name === "User"){
        console.log("Criando usuário...")
    }
}

@classDec
class User {
    name

    constructor(name: string){
        this.name = name;
    }
}

const lucas = new User("Lucas");

console.log(lucas);
console.log("");

//5. Decorator de método --> permite modificar a execução de métodos.
//Inserido antes da declaração do método e executa primeiro que o método.
//Obs: o exemplo demonstra o enumerable, um método do descriptor que pode omitir um método da classe em que ele foi aplicado.

function enumerable(value: boolean){
    return function(
        target: any,
        propertKey: string, 
        descriptor: PropertyDescriptor){
        descriptor.enumerable = value;
    }
}

class Machine{
    name

    constructor(name: string){
        this.name = name;
    }

    @enumerable(false)
    showName(){
        console.log(this);
        return `O nome da máquina é ${this.name}`;
    }
}

const trator = new Machine("Trator");

console.log(trator.showName());
console.log("");


//6. Accessor decorator
//Semelhante ao de método mas aplicável apenas em getters e setters;
//Obs: Não tem diferença no contexto prático, mas no técnico sim.
class Monster{
    name?
    age?

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    @enumerable(true)
    get showName(){
        return `Nome do monstro: ${this.name}`;
    }
    
    @enumerable(true)
    get showAge(){
        return `Idade do monstro: ${this.age}`;
    }
}

const bichoPapao = new Monster("Bicho Papão", 890);
console.log(bichoPapao);
console.log("");

//7. Property Decorator
//Utilizado nas propriedades de uma classe, frequentemente utilizado para validações.
function formatNumber(){
    return function(target: Object, propertKey: string){

        let value: string;

        const getter = function(){
            return value;
        }

        const setter = function(newVal: string){
            value = newVal.padStart(5, "0");
        }

        Object.defineProperty(target, propertKey, {
            set: setter,
            get: getter
        });
    }
}

class ID {
    @formatNumber()
    id

    constructor(id: string){
        this.id = id;
    }
}

const newItem = new ID("1");

console.log(newItem.id);
console.log("");

//8. Exemplo real: Class Decorator
//O exemplo vai demonstrar uma função de inserção de data de criação dos objetos;
function createdDate(created: Function){
    created.prototype.createdAt = new Date();
}

@createdDate
class Book{
    id
    createdAt?: Date
    constructor(id: number){
        this.id = id;
    }
}

@createdDate
class Pen{
    id
    createdAt? : Date

    constructor(id: number){
        this.id = id;
    }
}

const newBook = new Book(12);
const newPen = new Pen(15);

console.log(newBook);
console.log(newPen);
console.log(newBook.createdAt)

console.log("");

//9. Exemplo real: Method Decorator
//O exemplo vai demonstrar a validação de poder de um usuário ao tentar fazer uma alteração no sistema.
function checkIfUserPosted(){
    return function(
        target: Object, 
        key: string | Symbol, 
        descriptor: PropertyDescriptor
        ){
            const childFunction = descriptor.value;
            console.log(childFunction);
            descriptor.value = function(...args: any[]){
                if(args[1] === true){
                    console.log("Usuário já postou!")
                    return null
                } else {
                    return childFunction.apply(this, args);
                }
            }
            return descriptor;
        }

}

class Post {
    alreadyPosted = false

    @checkIfUserPosted()
    post(content: string, alreadyPosted: boolean){
        this.alreadyPosted = true;
        console.log(`Post do usuário: ${content}`);
    }
    
}
const newPost = new Post();
newPost.post("Meu primeiro post!", newPost.alreadyPosted);
//Só é possível um post por usuário.
newPost.post("Tentativa número 2!", newPost.alreadyPosted);
console.log("")

//10. Exemplo real: Property Decorator
//Nesse exemplo, o objetivo é a criação de uma validação do número máximo de caracteres de uma string, com decorators.
function Max(limit: number){
    return function
    (
        target: Object,
        propertKey: string
    ){
        let value: string
        
        const getter = function(){
            return value;
        }

        const setter = function(newVal: string){
            if (newVal.length > limit){
                console.log(`O valor deve ter no máximo ${limit} dígitos.`)
                return
            } else {
                value = newVal
            }
        }
        
        Object.defineProperty(target, propertKey, {
            get: getter,
            set: setter
        });
    }
}

class Admin{
    @Max(10)
    username

    constructor(username: string){
        this.username = username
    }
}

const admin = new Admin("Lucas");
console.log(admin.username);

//Fim da Seção