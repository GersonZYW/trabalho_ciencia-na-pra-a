// Alterna a visibilidade do dropdown ao clicar no ícone de engrenagem
document.querySelector('.gear-icon').addEventListener('click', function(e) {
    e.preventDefault();
    const dropdown = this.nextElementSibling; // Pega o próximo elemento (o dropdown)
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block'; // Alterna a visibilidade
});

// Alterna a visibilidade do submenu de acessibilidade
document.querySelector('.dropdown_gear li a').addEventListener('click', function(e) {
    e.preventDefault();
    const dropdown = this.nextElementSibling; // Pega o próximo elemento (o submenu)
    if (dropdown) {
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block'; // Alterna a visibilidade
    }
});


  function toggleContraste() {
    const body = document.body;
    body.classList.toggle("alto-contraste");
  }  

  // Variáveis para controlar o estado
let fontSize = 1; // Tamanho da fonte padrão




function alterarTamanhoPagina() {
    let body = document.body;
    let currentSize = window.getComputedStyle(body, null).getPropertyValue('font-size');
    let newSize = parseFloat(currentSize) * 1.1; // Aumenta a fonte em 10%
    body.style.fontSize = newSize + 'px';
}

function diminuirTamanhoPagina() {
    let body = document.body;
    let currentSize = window.getComputedStyle(body, null).getPropertyValue('font-size');
    let newSize = parseFloat(currentSize) * 0.9; // Diminui a fonte em 10%
    body.style.fontSize = newSize + 'px';
}
