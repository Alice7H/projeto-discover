
function toggleMode() {
    const html = document.documentElement
    
    html.classList.toggle('light')

    // pegar tag img
    const img = document.querySelector("#profile img");

    // substituir a imagem
    if(html.classList.contains('light')){
        // se tiver light mode, adicionar a imagem light,
        img.setAttribute('src', './assets/avatar-light.png');
        img.setAttribute('alt', 'foto de Mayk Brito sem barba e sorrindo, usando óculos escuros, jaqueta e camisa preta e com o fundo em degradê da esquerda para a direita de rosa para azul');
    } else {
        //  senão manter a imagem normal
        img.setAttribute('src', './assets/avatar.png');
        img.setAttribute('alt', 'foto de Mayk Brito sem barba e sorrindo, usando óculos, jaqueta e camisa preta e com o fundo em degradê da esquerda para a direita de rosa para azul');
    }
};
