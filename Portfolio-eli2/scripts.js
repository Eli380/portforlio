function enviarWhats(event) {
    event.preventDefault(); // Evita o recarregamento da página ao enviar o formulário

    const nome = document.getElementById('nome').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    if (nome === '' || mensagem === '') {
        alert('Por favor, preencha todos os campos antes de enviar.');
        return;
    }

    const numeroTelefone = '5584987251752'; // Substitua pelo seu número com DDD
    const mensagemFormatada = `Olá, meu nome é ${nome}. %0A%0A${mensagem}`;
    const linkWhatsApp = `https://wa.me/${numeroTelefone}?text=${mensagemFormatada}`;

    window.open(linkWhatsApp, '_blank'); // Abre o WhatsApp em uma nova aba
}
