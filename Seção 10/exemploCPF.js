"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function formatCPF() {
    return function (target, propertKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newVal) {
            if (newVal.length === 11) {
                let part1 = newVal.slice(0, 3);
                let part2 = newVal.slice(3, 6);
                let part3 = newVal.slice(6, 9);
                let part4 = newVal.slice(9, 11);
                value = part1 + "." + part2 + "." + part3 + "-" + part4;
            }
            else {
                value = "Não foi possível identificar o número do CPF, informe-o novamente.";
            }
        };
        Object.defineProperty(target, propertKey, {
            set: setter,
            get: getter
        });
    };
}
class Pessoa {
    constructor(nome, cpf) {
        this.nome = nome;
        this.cpf = cpf;
    }
}
__decorate([
    formatCPF()
], Pessoa.prototype, "cpf", void 0);
const lucas1 = new Pessoa("Lucas", "62362312300");
console.log(lucas1);
