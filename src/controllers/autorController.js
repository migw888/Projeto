import autorRepository from "../repositories/autorRepository.js";
import autorService from "../services/autorService.js";
import Autor from "../models/Autor.js";

const autorController = {
    selecionar: async (req, res) => {
        try {
            const resultado = await autorService.recuperarAutores();

            res.status(200).json({
                message: "Autores recuperados com sucesso",
                data: resultado
            });
        }
        catch (error) {
            console.error(error);
            res.status(500).json({
                message: "Erro ao recuperar autores",
                error: error.message
            });
        }
    },
    selecionarPorId: async (req, res) => {
        const autorId = Number(req.params.ID);

        try {
            const autor = await autorService.recuperarAutorPorId(autorId);

            if (!autor) {
                return res.status(404).json({
                    message: "Autor não encontrado"
                });
            }

            res.status(200).json({
                message: "Autor recuperado com sucesso",
                data: autor
            });
        }
        catch (error) {
            console.error(error);
            res.status(500).json({
                message: "Erro ao recuperar autor",
                error: error.message
            });
        }
    },
    deletar: async (req, res) => {
        const autorId = Number(req.params.ID);

        try {
            const resultado = await autorService.removerAutor(autorId);

            if (resultado.affectedRows === 0) {
                throw new Error("Autor não encontrado");
            }

            res.status(200).json({
                message: "Autor removido com sucesso"
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: "Erro ao remover autor",
                error: error.message
            });
        }
    },
    criar: async (req, res) => {
        const { Nome, Nacionalidade, Data_nascimento } = req.body;

        const autor = new Autor(null, Nome, Nacionalidade, Data_nascimento);

        try {
            // validação simples para garantir que name e email não estejam vazios
            if (Nome.trim() === "" || Nacionalidade.trim() === "" || Data_nascimento.trim() === "") {
                return res.status(400).json({
                    message: "Nome, nacionalidade e data de nascimento são obrigatórios"
                });
            }

            const resultado = await autorService.criarAutor(autor);

            res.status(201).json({
                message: "Autor criado com sucesso",
                data: {
                    ID: resultado.insertId
                }
            });

        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: "Erro ao criar autor",
                error: error.message
            });
        }
    },
    atualizar: async (req, res) => {
        const autorId = Number(req.params.ID);
        const { Nome, Nacionalidade, Data_nascimento } = req.body;

        const autor = new Autor(autorId, Nome, Nacionalidade, Data_nascimento);
        try {
            // validação simples para garantir que name e email não estejam vazios
            if (Nome.trim() === "" || Nacionalidade.trim() === "" || Data_nascimento.trim() === "") {
                return res.status(400).json({
                    message: "Nome, nacionalidade e data de nascimento são obrigatórios"
                });
            }

            const resultado = await autorService.atualizarAutor(autor);

            if (resultado.affectedRows === 0) {
                throw new Error("Autor não encontrado");
            }

            res.status(200).json({
                message: "Autor atualizado com sucesso"
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: "Erro ao atualizar autor",
                error: error.message
            });
        }
    }
};

export default autorController;