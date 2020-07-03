//Height e Width

/*
Estas são propriedades e médotos dos objetos Element e HTMLElement, a maioria delas são Read Only

*/

const section = document.querySelector('.section');

section.clientHeight; // height + padding
section.offsetHeight; // height + padding + border
section.scrollHeight; // height total, mesmo dentro do secroll

//Distâmcia entre o topo do elemento e o topo da página
section.offesetTop;

//Distância entre o canto esquerdo do elmento e o canto esquerdo da página
section.offsetLeft;

//Window
window.innerWidth; // width a janela
window.outerWidth; // soma de tools também
window.innerHeight; // height da janela
window.outerWidth; // soma a barra do endereço

window.pageYOffset; // distância total do scroll horizontal
window.pageXOffset; // distância total dp scroll vertical

//matchMedia();
/* Utilize um media-querie como no CSS para verificar a largura do browser */
const small = window.matchMedia('(max-width: 600px)');
if(small.matches) {
    //
}