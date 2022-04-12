function formatCPF(){
    return function(target: Object, propertKey: string){

        let value: string;

        const getter = function(){
            return value; 
        }

        const setter = function(newVal: string){
            if (newVal.length === 11){
                let part1 = newVal.slice(0, 3);
                let part2 = newVal.slice(3, 6);
                let part3 = newVal.slice(6, 9);
                let part4 = newVal.slice(9, 11);
                value = part1 + "." + part2 + "." + part3 + "-" + part4;
            } else {
                value = "Não foi possível identificar o número do CPF, informe-o novamente."
            }
        }

        Object.defineProperty(target, propertKey, {
            set: setter,
            get: getter
        });
    }
}


class Pessoa {
    @formatCPF()
    cpf
    nome
    
    constructor(nome: string, cpf: string){
        this.nome = nome;
        this.cpf = cpf;
    }
}

const lucas1 = new Pessoa("Lucas", "62362312300");
console.log(lucas1);