//use strict = com ele conseguimos ter os erros scopo, ele padroniza seu código.


// - não pega o this global, mas se não estiver no modo estrito, sim!
//Global
this.name = "Eduardo";
console.log(this.name)

function sayMyName() {
    //local scope
    console.log(this.mane);
}

sayMyName();