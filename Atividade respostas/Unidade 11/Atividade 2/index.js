class CarrinhoDeCompras {
    constructor() {
      this.itens = {}; // Dicionário de itens, onde as chaves são os nomes dos itens e os valores são as quantidades
      this.quantidadeTotal = 0; // Quantidade total de itens no carrinho
      this.valorTotal = 0; // Valor total dos itens no carrinho
    }
  
    adicionarItem(item, quantidade, valor) {
      if (item in this.itens) { // Se o item já existe no carrinho
        this.itens[item] += quantidade; // Aumenta a quantidade do item
      } else {
        this.itens[item] = quantidade; // Adiciona o item ao carrinho com a quantidade especificada
      }
  
      this.quantidadeTotal += quantidade; // Atualiza a quantidade total de itens no carrinho
      this.valorTotal += valor * quantidade; // Atualiza o valor total dos itens no carrinho
    }
  
    removerItem(item, quantidade) {
      if (item in this.itens) { // Se o item existe no carrinho
        if (quantidade >= this.itens[item]) { // Se a quantidade a ser removida é maior ou igual à quantidade do item no carrinho
          quantidade = this.itens[item]; // Define a quantidade a ser removida como a quantidade do item no carrinho
          delete this.itens[item]; // Remove o item do carrinho
        } else {
          this.itens[item] -= quantidade; // Reduz a quantidade do item no carrinho
        }
  
        this.quantidadeTotal -= quantidade; // Atualiza a quantidade total de itens no carrinho
        this.valorTotal -= quantidade * valor; // Atualiza o valor total dos itens no carrinho
      } else {
        console.log("O item não está presente no carrinho.");
      }
    }
  }
  
  // Exemplo de uso:
  const carrinho = new CarrinhoDeCompras();
  
  // Adicionando itens
  carrinho.adicionarItem("Camiseta", 2, 29.99);
  carrinho.adicionarItem("Calça", 1, 49.99);
  carrinho.adicionarItem("Meias", 3, 9.99);
  
  // Removendo itens
  carrinho.removerItem("Camiseta", 1);
  carrinho.removerItem("Meias", 4); // Tentando remover mais itens do que existem
  
  // Imprimindo os detalhes do carrinho
  console.log("Itens no carrinho:", carrinho.itens);
  console.log("Quantidade total:", carrinho.quantidadeTotal);
  console.log("Valor total:", carrinho.valorTotal);
  