// função que adiciona ou remove a classe active de menu na versão mobile
// se active for adicionada o menu de links será exibido
// do contrário o menu será ocultado
function toggleMenu() {
    // identificando o menu dentro do DOM
    const menu = document.querySelector('.header__menu');
    // método que adiciona ou remove a classe active
    // se a classe existir então remova
    // do contrário adiciona
    menu.classList.toggle('active');
}

// identificando os botões que serão responsáveis por abrir e fechar o menu
// botão que abre o menu
const btnMenu = document.querySelector('.header__toogle-button');
//botão que fecha o menu
const btnClose = document.querySelector('.menu__btn-close');

// adicionando um evento de clique para que toda vez que
// clicar em um dos botões
// seja possível abrir e fechar o menu
btnMenu.addEventListener('click', toggleMenu);
btnClose.addEventListener('click', toggleMenu);
