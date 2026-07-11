import pool from '../configs/Database.js';

const empRepository = {
    selecionar: async () => {
        const sql = `SELECT Livro.titulo, Usuario.nome, Emprestimo.data_emprestimo, Emprestimo.data_devolucao FROM Emprestimo 
                        INNER JOIN livro 
                            ON Emprestimo.id_livro = livro.id 
                        INNER JOIN usuario 
                            ON Emprestimo.id_usuario = usuario.id`;
        const rows = await pool.execute(sql);
        return rows[0];
    },
    selecionarPorId: async (empId) => {
        const sql = 'SELECT id, id_usuario, id_livro, Data_emprestimo, Data_devolucao FROM Emprestimo WHERE id = ?;';
        const rows = await pool.execute(sql, [empId]);
        return rows[0];
    },
    selecionarPorIdusuario: async (id_usuario) => {
        const sql = 'SELECT id,  id_usuario, id_livro, Data_emprestimo, Data_devolucao FROM Emprestimo WHERE email = ?;';
        const rows = await pool.execute(sql, [id_usuario]);
        return rows[0][0];
    },
    deletar: async (empId) => {
        const sql = 'DELETE FROM  WHERE id = ?;';
        const resultado = await pool.execute(sql, [empId]);
        return resultado[0];
    },
    criar: async (id_usuario, id_livro, Data_emprestimo, Data_devolucao) => {
        const sql = 'INSERT INTO emprestimo ( id_usuario, id_livro, Data_emprestimo, Data_devolucao) VALUES (?, ?, ?, ?);';
        const resultado = await pool.execute(sql, [id_usuario, id_livro, Data_emprestimo, Data_devolucao]);
        return resultado[0];
    },
    atualizar: async (empId, Data_emprestimo, Data_devolucao) => {
        const sql = 'UPDATE Emprestimo SET Data_Emprestimo = ?, Data_devolucao = ? WHERE id = ?;';
        const resultado = await pool.execute(sql, [Data_emprestimo, Data_devolucao, empId]);
        return resultado[0];
    }
}

export default empRepository;