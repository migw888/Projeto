import bcrypt from "bcrypt";
import livroRepository from "../repositories/livroRepository.js";   

const livroService = {
    recuperarLivros: async (req, res) => {
        try {
            const resultado = await livroRepository.selecionar();
            return resultado;
        }
        catch (error) {
            console.error(error);
            throw new Error("Erro ao recuperar livros: " + error.message);
        }
    },
    recuperarLivroPorId: async (LivroId) => {
        try {
            const resultado = await livroRepository.selecionarPorId(LivroId);
            return resultado;
        }
        catch (error) {
            console.error(error);
            throw new Error("Erro ao recuperar livro por ID: " + error.message);
        }
    },
    recuperarLivroPorIbsn: async (isbn) => {
        try {
            const resultado = await livroRepository.selecionarPorIbsn(isbn);
            return resultado;
        }
        catch (error) {
            console.error(error);
            throw new Error("Erro ao recuperar livro por ISBN: " + error.message);
        }
    },
    removerLivro: async (LivroId) => {
        try {
            const resultado = await livroRepository.deletar(LivroId);
            return resultado;
        } catch (error) {
            console.error(error);
            throw new Error("Erro ao remover livro: " + error.message);
        }
    },
    criarLivro: async (livro) => {
        try {
            const resultado = await livroRepository.criar(livro.titulo, livro.isbn, livro.Ano_publicacao, livro.quantidade_disponivel);
            return resultado;
        } catch (error) {
            console.error(error);
            throw new Error("Erro ao criar livro: " + error.message);
        }
    },
    atualizarLivro: async (livro) => {
        try {
            const resultado = await livroRepository.atualizar(livro.id, livro.titulo, livro.isbn, livro.Ano_publicacao, livro.quantidade_disponivel);
            return resultado;
        } catch (error) {
            console.error(error);
            throw new Error("Erro ao atualizar livro: " + error.message);
        }
    },
 
    
}

export default livroService;