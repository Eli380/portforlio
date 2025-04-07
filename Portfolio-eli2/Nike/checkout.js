document.addEventListener('DOMContentLoaded', () => {
    const checkoutItensContainer = document.querySelector('.checkout-itens');
    const totalEl = document.getElementById('total');
    const form = document.getElementById('checkout-form');
  
    // Recupera os itens do carrinho do localStorage
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  
    // Renderiza os itens no checkout
    function renderizarItens() {
      checkoutItensContainer.innerHTML = '';
      let total = 0;
      carrinho.forEach(item => {
        const itemEl = document.createElement('div');
        itemEl.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
        checkoutItensContainer.appendChild(itemEl);
        total += item.preco;
      });
      totalEl.textContent = total.toFixed(2);
    }
  
    // Manipula o envio do formulário
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Pagamento confirmado! Obrigado pela sua compra.');
      localStorage.removeItem('carrinho');
      window.location.href = 'index.html';
    });
  
    renderizarItens();
  });
  
  function mostrarNotificacao(mensagem) {
    const notificacao = document.createElement('div');
    notificacao.classList.add('notificacao');
    notificacao.textContent = mensagem;
    document.body.appendChild(notificacao);
  
    setTimeout(() => {
      notificacao.classList.add('mostrar');
    }, 100);
  
    setTimeout(() => {
      notificacao.classList.remove('mostrar');
      setTimeout(() => {
        document.body.removeChild(notificacao);
      }, 500);
    }, 3000);
  }
  
  function adicionarCarrinho() {
    const item = {
      nome: 'Nike Air Zoom',
      preco: 799.00
    };
  
    // Recupera o carrinho do localStorage ou inicializa um novo
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho.push(item);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
  
    mostrarNotificacao('Item adicionado ao carrinho!');
  }
   