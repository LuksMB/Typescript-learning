"use strict";
//1. Módulos --> a forma que temos para importar código em arquivos.
//Para exportar código, utilizamos "export default"
//Para importar código, utilizamos "import ..."
//Os arquivos serão criados com TS mas serão importados como .js
//Os módulos permitem a divisão de responsabilidades em arquivos distintos.
//Node.js vai ser utilizado para execução.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//2. Importando/Exportando de arquivos.
//continuação desse módulo da seção se encontra no greet.ts
const greet_js_1 = __importDefault(require("./greet.js"));
(0, greet_js_1.default)();
console.log("");
//3. Importando variáveis --> export e destructuring.
//continuação em variavel.js
const variavel_js_1 = require("./variavel.js");
console.log(variavel_js_1.x);
console.log("");
//3. Importações múltiplas.
//continuação em multiplos.js
const multiplos_1 = require("./multiplos");
console.log(multiplos_1.a);
console.log(multiplos_1.b);
(0, multiplos_1.myFunction)();
console.log("");
//4. Alias para importação --> feito para renomear a importação em casos em que é possível simplificar.
//continuação em alias.js
const alias_js_1 = require("./alias.js");
console.log(alias_js_1.someName);
console.log("");
//5. Importando tudo --> import all
//continuação em tudo.js
const myNumbers = __importStar(require("./tudo")); //É necessária a criação de um alias pra receber o objeto;
console.log(myNumbers.n1);
console.log(myNumbers.n2);
console.log(myNumbers.n3);
console.log("");
class Usuario {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
//Fim da Seção.
