class Livro {
  constructor(titulo, autor, disponivel) {
    this._titulo = titulo;
    this._autor = autor;
    this._disponivel = disponivel;
  }

  set disponivel(bool) {
      this._disponivel = bool;
  }

  emprestar() {
    let message = "O livro não está disponível para empréstimo."
    
    if (this.consultarDisponibilidade()) {
      this.disponivel = false;
      message = "Livro emprestado com sucesso.";
    }

    console.log(message);
  }

  devolver() {
    let message = "Disponível."

    if (!this.consultarDisponibilidade()) {
      this.disponivel = true;
      message = "Livro devolvido com sucesso.";
    }

    console.log(message);
  }

  consultarDisponibilidade() {
    return this._disponivel;
  }
}

// Exemplo de uso:
const livro = new Livro("Dom Quixote", "Miguel de Cervantes", true);

console.log("Disponibilidade do livro:", livro.consultarDisponibilidade());

livro.emprestar();
console.log("Disponibilidade do livro:", livro.consultarDisponibilidade());

livro.devolver();
console.log("Disponibilidade do livro:", livro.consultarDisponibilidade());