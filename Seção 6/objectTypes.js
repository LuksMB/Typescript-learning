"use strict";
function espaco() {
    console.log("");
}
function showProduct(product) {
    console.log(`O nome do produto é ${product.name} e seu preço é R$${product.price}`);
    if (product.isAvailable) {
        console.log("O produto está disponível.");
    }
    else {
        console.log("O produto não está disponível. Tente novamente mais tarde.");
    }
}
const ssd = {
    name: "SSD 240Gb",
    price: 239.99,
    isAvailable: true
};
showProduct(ssd);
espaco();
showProduct({ name: "Playstation 2", price: 300.00, isAvailable: false });
espaco();
function showPlayer(user) {
    console.log(`O jogador foi cadastrado no endereço de email: ${user.email}`);
    if (user.nickname && user.nivel) {
        console.log(`${user.nickname} - Nível ${user.nivel}`);
    }
    else if (user.nickname && !user.nivel) {
        console.log(`${user.nickname} - Nível 1`);
    }
}
const user1 = { email: "lucasmb.7@gmail.com", nickname: "LukksMB", nível: 105 };
showPlayer(user1);
espaco();
let obj1 = {
    dezenas: 5
}; //Só funciona pois o nome da variável é uma string.
let saitamaBefore = {
    name: "Saitama",
    age: 22
};
let saitamaAfter = {
    name: "Saitama",
    age: 25,
    superpowers: ["Super speed", "Extreme strength", "High Agility", "Baldness"]
};
console.log(saitamaBefore);
console.log(saitamaAfter);
espaco();
const superhomem = {
    name: "Kal-El",
    age: 45,
    superpowers: ["Super velocidade", "voar", "olhos laser", "sopro congelante", "corpo de aço"],
    falseId: "Clark Kent"
};
console.log(superhomem);
espaco();
//8. ReadOnlyArray ---> aplica em uma array pra permitir a modificação de seus itens mas não no tamanho
//                      da array.(obs: a modificação dos elementos se dá por meio de métodos.)
let arrayQualquer = ["Elemento 1", "Elemento 2", "Elemento 3", "Elemento 4"];
//arrayQualquer.push("Qualquer");  ---> Não funciona pois o tipo de array é readonly string[].
arrayQualquer.forEach((item) => {
    console.log(item);
});
arrayQualquer = arrayQualquer.map((elemento) => {
    return `Alteração ${elemento}`;
});
console.log(arrayQualquer);
const arrayCom3 = [5, 3, 2];
function showNumbers(nums) {
    console.log(nums[0]);
    console.log(nums[1]);
}
showNumbers([0, 5]);
showNumbers([3, 2]);
espaco();
//Fim da Seção.
