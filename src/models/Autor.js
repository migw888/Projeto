class Autor {

    #ID;
    #Nome;
    #Nacionalidade;
    #Data_Nascimento;

    constructor(ID = null, Nome, Nacionalidade, Data_Nascimento) {
        this.#ID = ID;
        this.#Nome = Nome;
        this.#Nacionalidade = Nacionalidade;
        this.#Data_Nascimento = Data_Nascimento;
    }

    // Getters
    get ID() {
        return this.#ID;
    }

    get Nome() {
        return this.#Nome;
    }

    get Nacionalidade() {
        return this.#Nacionalidade;
    }

    get Data_Nascimento() {
        return this.#Data_Nascimento;
    }

    // Setters
    set Nome(novoNome) {
        this.#Nome = novoNome;
    }

    set Nacionalidade(novaNacionalidade) {
        this.#Nacionalidade = novaNacionalidade;
    }

    set Data_Nascimento(novaDataNascimento) {
        this.#Data_Nascimento = novaDataNascimento;
    }

}

export default Autor;

