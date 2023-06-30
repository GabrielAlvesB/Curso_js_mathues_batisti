class Livro {
    constructor(titulo, autor, disponivel) {
      this.titulo = titulo;
      this.autor = autor;
      this.disponivel = disponivel;
    }
  
    emprestar() {
      if (this.disponivel) {
        this.disponivel = false;
        console.log("Livro emprestado com sucesso.");
      } else {
        console.log("O livro não está disponível para empréstimo.");
      }
    }
  
    devolver() {
      if (!this.disponivel) {
        this.disponivel = true;
        console.log("Livro devolvido com sucesso.");
      } else {
        console.log("Disponível.");
      }
    }
  
    consultarDisponibilidade() {
      return this.disponivel;
    }
  }
  
  // Exemplo de uso:
  const livro = new Livro("Dom Quixote", "Miguel de Cervantes", true);
  
  console.log("Disponibilidade do livro:", livro.consultarDisponibilidade());
  
  livro.emprestar();
  console.log("Disponibilidade do livro:", livro.consultarDisponibilidade());
  
  livro.devolver();
  console.log("Disponibilidade do livro:", livro.consultarDisponibilidade());
  