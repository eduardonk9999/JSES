// Com a call conseguimos aplicar um this do escopo global em um escopo de uma function. // Call = Chamar;
// function.call(this);

this.name = "Camila";

function sayMyName() {
    console.log(this.name);
};
const dev = {
    name = "Isabela";
}

sayMyName.call(this);
sayMyName.call(dev);


//

// function.apply(this, [arg1, arg2]);
// retorna o this do contexto que eu enviar.

sayMyName.apply(this, [18, 19]);


//
// bind();
// bind - ligar, ele retorna a função chamada porém, ligada.


// Essa const está sendo ligada ao contexto do this. Agora a nossa const tem os mesmos poderes da function sayMyName
const boundSayMyName = sayMyName.bind(this);