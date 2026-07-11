import empRepository from "../repositories/empRepository.js";
import empService from "../services/empService.js"
import Emprestimo from "../models/Emprestimo.js";

const empController = {
    selecionar: async (req, res) => {
        try {
            const resultado = await empService.recuperarEmprestimo();

            res.status(200).json({
                message: "Emprestimos listados com sucesso",
                data: resultado
            });     x
        }
        catch (error) {
            console.error(error);
            res.status(500).json({
                message: "listar emprestimos",
                error: error.message
            });
        }
    },
    selecionarPorId: async (req, res) => {
        const empId = Number(req.params.id);

        try {
            const emprestimo = await empService.recuperarEmprestimoPorId(empId);

            if (!emprestimo) {
                return res.status(404).json({
                    message: "Emprestimo não encontrado"
                });
            }

            res.status(200).json({
                message: " Emprestimo recuperado com sucesso",
                data: usuario
            });
        }
        catch (error) {
            console.error(error);
            res.status(500).json({
                message: "Erro ao recuperar emprestimo",
                error: error.message
            });
        }
    },
    deletar: async (req, res) => {
        const empId = Number(req.params.id);

        try {
            const resultado = await empService.removerUsuario(empId);
            if(resultado.affectedRows === 0) {
                throw new Error("Emprestimo não encontrado");
            }

            res.status(200).json({
                message: "Emprestimo removido com sucesso"
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: "Erro ao remover Emprestimo",
                error: error.message
            });
        }
    },
    criar: async (req, res) => {
        const { id_usuario, id_livro, Data_emprestimo, Data_devolucao } = req.body;
        console.log(id_usuario, id_livro, Data_emprestimo, Data_devolucao);
        
        const emprestimo = new Emprestimo(id_usuario, id_livro, Data_emprestimo, Data_devolucao);

        try {
            // validação simples para garantir que name e email não estejam vazios
            if (Data_emprestimo.trim() === "" || Data_devolucao.trim() === "") {
                return res.status(400).json({
                    message: "Usuario, livro, data de emprestimo e devolução são obrigatórios"
                });
            }

            const resultado = await empService.criarEmprestimo(emprestimo);

            res.status(201).json({
                message: "Emprestimo criado com sucesso",
                data: {
                    id: resultado.insertId
                }
            });

        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: "Erro ao criar emprestimo",
                error: error.message
            });
        }
    },
    atualizar: async (req, res) => {
        const empId = Number(req.params.id);
        const {Data_devolucao, Data_emprestimo } = req.body;

        const emp = new Emprestimo(null, null, Data_devolucao, Data_emprestimo, empId);

        try {
            // validação simples para garantir que name e email não estejam vazios
            if (Data_emprestimo.trim() === ""  || Data_devolucao.trim() === "") {
                return res.status(400).json({
                    message: "usuario, livro, data de emprestimo e devolução são obrigatorios"
                });
            }

            const resultado = await empService.atualizarEmprestimo(emp);

            if (resultado.affectedRows === 0) {
                throw new Error("Emprestimo não encontrado");
            }

            res.status(200).json({
                message: "Emprestimo atualizado com sucesso"
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: "Erro ao atualizar Emprestimo",
                error: error.message
            });
        }
    }
};

export default empController;