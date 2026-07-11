import bcrypt from "bcrypt";
import empRepository from "../repositories/empRepository.js";

const empService = {
    recuperarEmprestimo: async (req, res) => {
        try {
            const resultado = await empRepository.selecionar();
            return resultado;
        }
        catch (error) {
            console.error(error);
            throw new Error("Erro ao recuperar emprestimo: " + error.message);
        }
    },
    recuperarEmprestimorPorId: async (empId) => {
        try {
            const resultado = await empRepository.selecionarPorId(empId);
            return resultado;
        }
        catch (error) {
            console.error(error);
            throw new Error("Erro ao recuperar emprestimo por ID: " + error.message);
        }
    },
    recuperarEmprestimoPorIdusuario: async (id_usuario) => {
        try {
            const resultado = await empRepository.selecionarPorId_usuario(id_usuario);
            return resultado;
        }
        catch (error) {
            console.error(error);
            throw new Error("Erro ao recuperar usuário por nome: " + error.message);
        }
    },
    removerAutor: async (empId) => {
        try {
            const resultado = await empRepository.deletar(empId);
            return resultado;
        } catch (error) {
            console.error(error);
            throw new Error("Erro ao remover autor: " + error.message);
        }
    },
    criarEmprestimo: async (emprestimo) => {
        try {
            const resultado = await empRepository.criar(emprestimo.id_usuario, emprestimo.id_livro, emprestimo.Data_emprestimo, emprestimo.Data_devolucao);
            return resultado;
        } catch (error) {
            console.error(error);
            throw new Error("Erro ao criar autor: " + error.message);
        }
    },
    atualizarEmprestimo: async (emprestimo) => {
        try {
            console.log(emprestimo.Data_emprestimo, emprestimo.Data_devolucao);
            
            const resultado = await empRepository.atualizar(emprestimo.id, emprestimo.Data_emprestimo, emprestimo.Data_devolucao);
            return resultado;
        } catch (error) {
            console.error(error);
            throw new Error("Erro ao atualizar Emprestimo: " + error.message);
        }
    }
}

export default empService;