"use strict";
function criticar(review) {
    if (typeof review === "number") {
        if (review === 1) {
            console.log("1 estrela - Não funcionou, refaça do zero!");
        }
        else if (review === 2) {
            console.log("2 estrelas - Decepcionante, melhore!");
        }
        else if (review === 3) {
            console.log("3 estrelas - Bom, mas é possível melhorar");
        }
        else if (review === 4) {
            console.log("4 estrelas - Ótimo trabalho!");
        }
        else if (review === 5) {
            console.log("5 estrelas - Perfeito!");
        }
    }
    else if (typeof review === "boolean") {
        console.log("Nenhuma avaliação recebida, tente novamente.");
    }
}
criticar(1);
criticar(2);
criticar(3);
criticar(4);
criticar(5);
criticar(false);
