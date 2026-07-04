class User {

    #id;
    #nome;
    #cpf;
    #email;
    #telefone;

    constructor(nome, email, cpf, telefone, id = null) {
        this.#id = id;
        this.#nome = nome;
        this.#cpf = cpf;
        this.#email = email;
        this.#telefone = telefone;
    }

    // Getters
    get id() {
        return this.#id;
    }

    get nome() {
        return this.#nome;
    }

    get cpf() {
        return this.#cpf;
    }

    get email() {
        return this.#email;
    }

    get telefone() {
        return this.#telefone;
    }

    // Setters
    set nome(newName) {
        this.#nome = newName;
    }

    set cpf(newCpf) {
        this.#cpf = newCpf;
    }

    set email(newEmail) {
        this.#email = newEmail;
    }

    set telefone(newTelefone) {
        this.#telefone = newTelefone;
    }

}

export default User;

