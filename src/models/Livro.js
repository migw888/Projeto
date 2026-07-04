class Livro {

    #id;
    #titulo;
    #isbn;
    #Ano_publicacao;
    #quantidade_disponivel;

    constructor(titulo, isbn, Ano_publicacao,quantidade_disponivel, id = null) {
        this.#id = id;
        this.#titulo = titulo;
        this.#isbn = isbn;
        this.#Ano_publicacao = Ano_publicacao;
        this.#quantidade_disponivel = quantidade_disponivel;
    }

    // Getters
    get id() {
        return this.#id;
    }

    get titulo() {
        return this.#titulo;
    }

    get isbn() {
        return this.#isbn;
    }

    get Ano_publicacao() {
        return this.#Ano_publicacao;
    }

    get quantidade_disponivel() {
        return this.#quantidade_disponivel;
    }

    // Setters
    set titulo(newTitulo) {
        this.#titulo = newtitulo;
    }

    set isbn(newIsbn) {
        this.#isbn = newIsbn;
    }

    set Ano_publicacao(newAno_publicacao) {
        this.#Ano_publicacao = newAno_publicacao;
    }

}

export default Livro;

