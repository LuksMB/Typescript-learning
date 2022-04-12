"use strict";
//1. As classes podem ter campos que serão as propriedades dos objetos
//   instanciados, campos quue podem ser tipados e possuir um valor inicial.
//  obs: campos não inicializados devem ser declarados com !
class User {
}
const jorge = new User();
console.log(jorge);
jorge.name = "Seu Jorge";
jorge.age = 52;
console.log(jorge);
console.log("");
//2. Constructor --> Nos permite iniciar um objeto com propriedades definidas.
//                   (com isso, não precisamos mais do !)
class Aluno {
    constructor(name, age) {
        this.name = "Não identificado";
        this.age = 18;
        this.name = name;
        this.age = age;
    }
}
const lucas = new Aluno("Lucas", 20);
const gui = new Aluno("Guilherme", 15);
console.log(lucas);
console.log(gui);
console.log("");
//3. Campos readonly --> possível transformar um valor de inicialização no único valor possível da propriedade.
class Carro {
    constructor(nome) {
        this.rodas = 4;
        this.modelo = nome;
    }
}
const fusca = new Carro("Fusca");
console.log(fusca);
console.log("");
//4. Herança e super --> Herança com a palavra extends. O método super passa as propriedades da classe pai para a filha.
class Mouse {
    constructor(name) {
        this.name = "Comum";
        this.name = name;
    }
}
const mouse = new Mouse("Mouse branco comum");
class MouseGamer extends Mouse {
    constructor(name, cores) {
        super(name); //referencia ao construtor da própria classe Mouse.
        this.cores = "RGB";
        this.cores = cores;
    }
}
//5. Métodos --> adiciona funcionalidades às classes.
class Elfo {
    constructor(name) {
        this.name = "Aerin";
        if (name) {
            this.name = name;
        }
    }
    greeting() {
        console.log(`${this.name}: Be careful, traveler...`);
    }
}
const aerin = new Elfo;
aerin.greeting();
console.log("");
//6. This ---> this faz referência ao objeto em si, isso é, suas propriedades podem ser acessadas.
//             os exemplos anteriores podem ser usados como referência para este tópico.
//7. Getters --> Método para ler propriedades e que pode retornar as propriedades de uma classe com
//               certa modificação no valor.
class Person {
    constructor(name, lastname) {
        this.name = name;
        this.lastname = lastname;
    }
    get fullName() {
        return this.name + " " + this.lastname;
    }
}
const lucasM = new Person("Lucas", "Braga");
console.log(lucasM.name);
console.log(lucasM.lastname);
console.log(lucasM.fullName);
console.log("");
//8. Setters ---> funcionam para modificar ou atribuir as propriedades, funcionando como método.
//                é possível fazer validações antes de inserir propriedades.
class Coords {
    set fillx(x) {
        if (x === 0) {
            return;
        }
        else {
            this.x = x;
            console.log("X inserido com sucesso!");
        }
    }
    set filly(y) {
        if (y === 0) {
            return;
        }
        else {
            this.y = y;
            console.log("Y inserido com sucesso!");
        }
    }
    get getCoords() {
        return `x: ${this.x}\ny: ${this.y}`;
    }
}
const myCoords = new Coords();
console.log(myCoords);
myCoords.fillx = 53;
myCoords.filly = 2;
console.log(myCoords.getCoords);
console.log("");
class blogPost {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O título do post é ${this.title}`;
    }
}
const myPost = new blogPost("Hello World");
console.log(myPost.itemTitle());
console.log("");
//10. Override --> herança de nome do método.
class Pai {
    metodoQualquer() {
        console.log("Exemplo");
    }
}
class Filha extends Pai {
    metodoQualquer() {
        console.log("Exemplo de que mudou.");
    }
}
const teste = new Filha();
teste.metodoQualquer();
console.log("");
//11. Visibilidade ---> public, protected e private.
//Public --> default, pode ser acessado em qualquer lugar.
//Protected --> acessível apenas a subclasses da classe do método, para acessar precisa de um método.
//Private --> Apenas a classe que declarou o método pode utilizar.
//12. Public --> de forma geral, qualquer método ou propriedade da classe pai pode ser acessado pela classe filha.
//13. Protected --> Só pode ser acessado por um método, em uma subclasse.
class ProtectedClass {
    constructor() {
        this.x = 30;
    }
}
class LL extends ProtectedClass {
    showX() {
        console.log(`x: ${this.x}`);
    }
}
const fInstance = new LL();
//console.log(fInstance.x);  Não funciona pois x é protegido.
fInstance.showX();
console.log("");
//14. Private --> propriedades e métodos só podem ser acessados na classe que os definiu.
//                Também só podem ser acessados por meio de métodos.
class PrivateClass {
    constructor() {
        this.name = "Privado";
    }
    showName() {
        console.log(`O nome é ${this.name}`);
    }
}
const privateObject = new PrivateClass();
//console.log(privateObject.name); Nao pode ser acessado dessa forma direta.
privateObject.showName();
console.log("");
//15. Static members --> permite a utilização de propriedades e métodos dentro da própria classe, sem a necessidade de um objeto.
class StaticMembers {
    static method() {
        console.log("tentativa");
    }
}
StaticMembers.prop = "teste static";
console.log(StaticMembers.prop);
StaticMembers.method();
console.log("");
//16. Generic Class --> As classes podem ser criadas com tipagem genérica (propriedades com tipos definidos).
class Item {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
    get showFirst() {
        return `O first é ${this.first}`;
    }
}
const newItem = new Item("Qualquer", "coisa");
console.log(newItem);
console.log(newItem.showFirst);
console.log(typeof newItem.first);
console.log("");
const newestItem = new Item(532, false);
console.log(newestItem);
console.log(newestItem.showFirst);
console.log(typeof newestItem.first);
console.log("");
//17. Parameter Properties --> recurso para definir privacidade, nome e tipos no próprio construtor.
class TesteParameters {
    constructor(name, quant, price) {
        this.name = name;
        this.quant = quant;
        this.price = price;
        this.name = name;
        this.quant = quant;
        this.price = price;
    }
    get showQuant() {
        return `Quantidade total: ${this.quant}`;
    }
    get showPrice() {
        return `Preço: ${this.price * this.quant}`;
    }
}
const carimbo = new TesteParameters("Carimbo", 15, 8.90);
console.log(carimbo.name);
console.log(carimbo.showQuant);
console.log(carimbo.showPrice);
console.log("");
//18. Class Expressions --> Recurso para a criação de classes anônimas (Possível aplicar generics).
//                          A classe fica encapsulada em uma variável.
const myClass = class {
    constructor(name) {
        this.name = name;
    }
};
const pessoa = new myClass("Lucas");
console.log(pessoa.name);
console.log("");
//19. Abstract Class --> Recurso que serve de molde para outra classe.
//                       Não permite a instanciação de objetos e exige que todos os seus métodos
//                       sejam implementados nas classes que herdam.
class Molde {
}
//const newObj = new Molde();   abstract class não instancia.
class ClasseQualquer extends Molde {
    constructor(name) {
        super();
        this.name = name;
    }
    showName() {
        console.log(this.name);
    }
}
const newAbstractObject = new ClasseQualquer("Lucas abstrato");
newAbstractObject.showName();
//20. Relações entre classes --> É possível criar um objeto de uma classe com base em outra classe.
//                               Porém é necessário que essa outra classe seja igual a original.
class Dog {
}
class Cat {
}
const thor = new Cat();
console.log(thor);
//Essa última divisão foi apenas uma curiosidade.
//Fim da Seção.
