"use strict";
//Essa seção irá apresentar mais conceitos que as outras, vai exigir mais desenvolvimento teórico.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//1. Decorators
//Eles podem adicionar novas funcionalidades às classes e funções.
//Criamos novas funções que são adicionadas a partir de @nome().
//Essa função é chamada assim que o item que foi definido o decorator for executado.
//Tem que adicionar uma configuração no tsconfig.json;
//2. Primeiro decorator 
//O decorator é criado como uma function, trabalhando com argumentos especiais:
//Target, PropertKey e Descriptor;
//Esses argumentos nos dão informação do local de execução do decorator.
function myDecorator() {
    console.log("Iniciando decorator!");
    return function (target, propertKey, descriptor) {
        console.log("Executando decorator!");
        console.log(target);
        console.log(propertKey);
        console.log(descriptor);
    };
}
class MyClass {
    testing() {
        console.log("Terminando a execução do método");
    }
}
__decorate([
    myDecorator()
], MyClass.prototype, "testing", null);
const myObj = new MyClass();
myObj.testing();
console.log("");
//3. Múltiplos decorators
//A ordem de execução vem de baixo pra cima, esse recurso nos permite criar operações de maior complexidade.
function a() {
    return function (target, propertKey, descriptor) {
        console.log("executou a!");
    };
}
function b() {
    return function (target, propertKey, descriptor) {
        console.log("executou b!");
    };
}
class MultipleDecorators {
    testing() {
        console.log("Terminando execução!");
    }
}
__decorate([
    a(),
    b()
], MultipleDecorators.prototype, "testing", null);
const multiple = new MultipleDecorators();
multiple.testing();
console.log("");
//4. Decorator de classe
//Ligado ao constructor, executado quando o constructor estiver executando.
//Permite acrescentar algo na criação de classes (new);
function classDec(constructor) {
    console.log(constructor);
    if (constructor.name === "User") {
        console.log("Criando usuário...");
    }
}
let User = class User {
    constructor(name) {
        this.name = name;
    }
};
User = __decorate([
    classDec
], User);
const lucas = new User("Lucas");
console.log(lucas);
console.log("");
//5. Decorator de método --> permite modificar a execução de métodos.
//Inserido antes da declaração do método e executa primeiro que o método.
//Obs: o exemplo demonstra o enumerable, um método do descriptor que pode omitir um método da classe em que ele foi aplicado.
function enumerable(value) {
    return function (target, propertKey, descriptor) {
        descriptor.enumerable = value;
    };
}
class Machine {
    constructor(name) {
        this.name = name;
    }
    showName() {
        console.log(this);
        return `O nome da máquina é ${this.name}`;
    }
}
__decorate([
    enumerable(false)
], Machine.prototype, "showName", null);
const trator = new Machine("Trator");
console.log(trator.showName());
console.log("");
//6. Accessor decorator
//Semelhante ao de método mas aplicável apenas em getters e setters;
//Obs: Não tem diferença no contexto prático, mas no técnico sim.
class Monster {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get showName() {
        return `Nome do monstro: ${this.name}`;
    }
    get showAge() {
        return `Idade do monstro: ${this.age}`;
    }
}
__decorate([
    enumerable(true)
], Monster.prototype, "showName", null);
__decorate([
    enumerable(true)
], Monster.prototype, "showAge", null);
const bichoPapao = new Monster("Bicho Papão", 890);
console.log(bichoPapao);
console.log("");
//7. Property Decorator
//Utilizado nas propriedades de uma classe, frequentemente utilizado para validações.
function formatNumber() {
    return function (target, propertKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newVal) {
            value = newVal.padStart(5, "0");
        };
        Object.defineProperty(target, propertKey, {
            set: setter,
            get: getter
        });
    };
}
class ID {
    constructor(id) {
        this.id = id;
    }
}
__decorate([
    formatNumber()
], ID.prototype, "id", void 0);
const newItem = new ID("1");
console.log(newItem.id);
console.log("");
//8. Exemplo real: Class Decorator
//O exemplo vai demonstrar uma função de inserção de data de criação dos objetos;
function createdDate(created) {
    created.prototype.createdAt = new Date();
}
let Book = class Book {
    constructor(id) {
        this.id = id;
    }
};
Book = __decorate([
    createdDate
], Book);
let Pen = class Pen {
    constructor(id) {
        this.id = id;
    }
};
Pen = __decorate([
    createdDate
], Pen);
const newBook = new Book(12);
const newPen = new Pen(15);
console.log(newBook);
console.log(newPen);
console.log(newBook.createdAt);
console.log("");
//9. Exemplo real: Method Decorator
//O exemplo vai demonstrar a validação de poder de um usuário ao tentar fazer uma alteração no sistema.
function checkIfUserPosted() {
    return function (target, key, descriptor) {
        const childFunction = descriptor.value;
        console.log(childFunction);
        descriptor.value = function (...args) {
            if (args[1] === true) {
                console.log("Usuário já postou!");
                return null;
            }
            else {
                return childFunction.apply(this, args);
            }
        };
        return descriptor;
    };
}
class Post {
    constructor() {
        this.alreadyPosted = false;
    }
    post(content, alreadyPosted) {
        this.alreadyPosted = true;
        console.log(`Post do usuário: ${content}`);
    }
}
__decorate([
    checkIfUserPosted()
], Post.prototype, "post", null);
const newPost = new Post();
newPost.post("Meu primeiro post!", newPost.alreadyPosted);
//Só é possível um post por usuário.
newPost.post("Tentativa número 2!", newPost.alreadyPosted);
console.log("");
//10. Exemplo real: Property Decorator
//Nesse exemplo, o objetivo é a criação de uma validação do número máximo de caracteres de uma string, com decorators.
function Max(limit) {
    return function (target, propertKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newVal) {
            if (newVal.length > limit) {
                console.log(`O valor deve ter no máximo ${limit} dígitos.`);
                return;
            }
            else {
                value = newVal;
            }
        };
        Object.defineProperty(target, propertKey, {
            get: getter,
            set: setter
        });
    };
}
class Admin {
    constructor(username) {
        this.username = username;
    }
}
__decorate([
    Max(10)
], Admin.prototype, "username", void 0);
const admin = new Admin("Lucas");
console.log(admin.username);
//Fim da Seção
