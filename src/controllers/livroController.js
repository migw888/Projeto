import userRepository from "../repositories/livroRepository.js";
import livroService from "../services/livroService.js";
import User from "../models/User.js";
import Livro from "../models/Livro.js";

const livroController = {
    selecionar: async (req, res) => {
        try {
            const resultado = await livroService.recuperarLivros();

            res.status(200).json({
                message: "Livros recuperados com sucesso",
                data: resultado
            });
        }
        catch (error) {
            console.error(error);
            res.status(500).json({
                message: "Erro ao recuperar livros",
                error: error.message
            });
        }
    },
    selecionarPorId: async (req, res) => {
        const LivroId = Number(req.params.id);

        try {
            const livro = await livroService.recuperarLivroPorId(LivroId);

            if (!livro) {
                return res.status(404).json({
                    message: "Livro não encontrado"
                });
            }

            res.status(200).json({
                message: "Livro recuperado com sucesso",
                data: livro
            });
        }
        catch (error) {
            console.error(error);
            res.status(500).json({
                message: "Erro ao recuperar livro",
                error: error.message
            });
        }
    },
    deletar: async (req, res) => {
        const LivroId = Number(req.params.id);

        try {
            const resultado = await livroService.removerLivro(LivroId);

            if(resultado.affectedRows === 0) {
                throw new Error("Livro não encontrado");
            }

            res.status(200).json({
                message: "Livro removido com sucesso"
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: "Erro ao remover livro",
                error: error.message
            });
        }
    },
    criar: async (req, res) => {
        const { titulo, isbn, Ano_publicacao, quantidade_disponivel } = req.body;
        console.log(titulo, isbn, Ano_publicacao, quantidade_disponivel);
        const livro = new Livro(titulo, isbn, Ano_publicacao, quantidade_disponivel);
        
        
        try {
            // validação simples para garantir que name e email não estejam vazios
            if (titulo.trim() === "" || isbn.trim() === "" || Ano_publicacao.trim() === "" || quantidade_disponivel <= 0) {
                return res.status(400).json({
                    message: "titulo, isbn, Ano publicação e Quantidade disponivel são obrigatórios"
                });
            }

            const resultado = await livroService.criarLivro(livro);

            res.status(201).json({
                message: "Livro criado com sucesso",
                data: {
                    id: resultado.insertId
                }
            });

        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: "Erro ao criar livro",
                error: error.message
            });
        }
    },
    atualizar: async (req, res) => {
        const livroId = Number(req.params.id);
        const { titulo, isbn, Ano_publicacao, quantidade_disponivel } = req.body;

        const livro = new Livro(titulo, isbn, Ano_publicacao, quantidade_disponivel, livroId);

        try {
            // validação simples para garantir que name e email não estejam vazios
            if (titulo.trim() === "" || isbn.trim() === "" || Ano_publicacao.trim() === ""|| quantidade_disponivel.trim() === "") {
                return res.status(400).json({
                    message: "Titulo, isbn, Ano publicação e quantidade disponivel são obrigatórios"
                });
            }

            const resultado = await livroService.atualizarLivro(livro);

            if (resultado.affectedRows === 0) {
                throw new Error("Livro não encontrado");
            }

            res.status(200).json({
                message: "Livro atualizado com sucesso"
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: "Erro ao atualizar Livro",
                error: error.message
            });
        }
    }
};

export default livroController;