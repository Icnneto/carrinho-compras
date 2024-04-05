let totalCarrinho = 0;

function adicionar(){
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitarioProduto = parseInt(produto.split('R$')[1]);

    let quantidade = document.getElementById('quantidade').value; 

    let subTotalProduto = valorUnitarioProduto * quantidade;
    totalCarrinho = totalCarrinho + subTotalProduto;
    
    let listaCarrinho = document.getElementById('lista-produtos');
    listaCarrinho.innerHTML = listaCarrinho.innerHTML +
    `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${subTotalProduto}</span>
    </section>`;

    totalCarrinhoDeCompras(totalCarrinho);
    document.getElementById('quantidade').value = 0;
}


function limpar() {
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
    totalCarrinho = 0;
}


function totalCarrinhoDeCompras (totalCarrinho){
    let cart = document.getElementById('valor-total');
    cart.textContent = `R$${totalCarrinho}`;
}


















