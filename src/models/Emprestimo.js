class Emprestimo {

    #id;
    #id_usuario;
    #id_livro;
    #Data_emprestimo;
    #Data_devolucao;

    constructor(id_usuario, id_livro, Data_emprestimo, Data_devolucao, id = null) {
        this.#id = id;
        this.#id_usuario = id_usuario;
        this.#id_livro = id_livro;
        this.#Data_emprestimo = Data_emprestimo;
        this.#Data_devolucao = Data_devolucao;
    }

    // Getters
    get id() {
        return this.#id;
    }

    get id_usuario() {
        return this.#id_usuario;
    }

    get id_livro() {
        return this.#id_livro;
    }

    get Data_emprestimo() {
        return this.#Data_emprestimo;
    }

    get Data_devolucao() {
        return this.#Data_devolucao;
    }

    // Setters
    set id_usuario(newUsuario) {
        this.#id_usuario = newUsuario;
    }

    set id_livro(newLivro) {
        this.#id_livro = newLivro;
    }

    set Data_emprestimo(newData_emprestimo) {
        this.#Data_emprestimo = newData_emprestimo;
    }

    set Data_devolucao(newData_devolucao) {
        this.#Data_devolucao = newData_devolucao;
    }

}

export default Emprestimo;

