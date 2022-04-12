//1. Módulos --> a forma que temos para importar código em arquivos.
//Para exportar código, utilizamos "export default"
//Para importar código, utilizamos "import ..."
//Os arquivos serão criados com TS mas serão importados como .js
//Os módulos permitem a divisão de responsabilidades em arquivos distintos.
//Node.js vai ser utilizado para execução.

//2. Importando/Exportando de arquivos.
//continuação desse módulo da seção se encontra no greet.ts
import importGreet from "./greet.js";

importGreet();
console.log("");

//3. Importando variáveis --> export e destructuring.
//continuação em variavel.js
import {x} from "./variavel.js"

console.log(x);
console.log("");

//3. Importações múltiplas.
//continuação em multiplos.js

import { a , b , myFunction } from "./multiplos"

console.log(a);
console.log(b);
myFunction();

console.log("");
//4. Alias para importação --> feito para renomear a importação em casos em que é possível simplificar.
//continuação em alias.js

import { someName as name} from "./alias.js";

console.log(name);
console.log("");

//5. Importando tudo --> import all
//continuação em tudo.js

import * as myNumbers from "./tudo"; //É necessária a criação de um alias pra receber o objeto;
console.log(myNumbers.n1);
console.log(myNumbers.n2);
console.log(myNumbers.n3);
console.log("");

//6. Importando tipos --> específico do TS, importa tipos, interfaces.
//continuação em tipos.js

import { Humano } from "./tipos.js";
class Usuario implements Humano{
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}

//Fim da Seção.