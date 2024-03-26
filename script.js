/**
 * Adiciona um ouvinte de evento ao formulário de contato para lidar com o envio do formulário.
 * @param {Event} event - O evento de envio do formulário.
 */
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        displayMessage('Preencha todos os campos.', 'error');
    } else {
        displayMessage('Formulário enviado com sucesso!', 'success');

        document.getElementById('contactForm').reset();
    }
});

/**
 * Exibe uma mensagem no elemento de resposta.
 * @param {string} message - A mensagem a ser exibida.
 * @param {string} type - O tipo de mensagem (error ou success).
 */
function displayMessage(message, type) {
    var messageElement = document.getElementById('responseMessage');
    messageElement.innerHTML = message;
    messageElement.className = type;
}


/** Role suavemente até a seção 2 quando o link for clicado. */

const scrollToSection = () => {
    const section = document.querySelector('#section2');
    section.scrollIntoView({ behavior: 'smooth' });
};

const scrollLink = document.querySelector('a[href="#section2"]');
scrollLink.addEventListener('click', scrollToSection);

/** Ativa o modo escuro quando o botão for clicado. */
var darkModeButton = document.getElementById('darkModeButton');
darkModeButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});
