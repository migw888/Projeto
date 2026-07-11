import bcrypt from "bcrypt";
import autorRepository from "../repositories/autorRepository.js";

const autorService = {
    recuperarAutores: async (req, res) => {
        try {
            const resultado = await autorRepository.selecionar();
            return resultado;
        }
        catch (error) {
            console.error(error);
            throw new Error("Erro ao recuperar autor: " + error.message);
        }
    },
    recuperarAutorPorId: async (autorId) => {
        try {
            const resultado = await autorRepository.selecionarPorId(autorId);
            return resultado;
        }
        catch (error) {
            console.error(error);
            throw new Error("Erro ao recuperar autor por ID: " + error.message);
        }
    },
    recuperarAutorPorNome: async (Nome) => {
        try {
            const resultado = await autorRepository.selecionarPorNome(Nome);
            return resultado;
        }
        catch (error) {
            console.error(error);
            throw new Error("Erro ao recuperar usuário por nome: " + error.message);
        }
    },
    removerAutor: async (autorId) => {
        try {
            const resultado = await autorRepository.deletar(autorId);
            return resultado;
        } catch (error) {
            console.error(error);
            throw new Error("Erro ao remover autor: " + error.message);
        }
    },
    criarAutor: async (autor) => {
        try {
            const resultado = await autorRepository.criar(autor.Nome, autor.Nacionalidade, autor.Data_Nascimento);
            return resultado;
        } catch (error) {
            console.error(error);
            throw new Error("Erro ao criar autor: " + error.message);
        }
    },
    atualizarAutor: async (autor) => {
        try {
            const resultado = await autorRepository.atualizar(autor.ID, autor.Nome, autor.Nacionalidade, autor.Data_Nascimento);
            return resultado;
        } catch (error) {
            console.error(error);
            throw new Error("Erro ao atualizar autor: " + error.message);
        }
    }
}

export default autorService;