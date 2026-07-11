import pool from '../configs/Database.js';

const autorRepository = {
    selecionar: async () => {
        const sql = 'SELECT ID, Nome, Nacionalidade, Data_Nascimento FROM Autor ORDER BY ID DESC;';
        const rows = await pool.execute(sql);
        return rows[0];
    },
    selecionarPorId: async (autorId) => {
        const sql = 'SELECT ID, Nome, Nacionalidade, Data_Nascimento FROM Autor WHERE ID = ?;';
        const rows = await pool.execute(sql, [autorId]);
        return rows[0];
    },
    selecionarPorNome: async (Nome) => {
        const sql = 'SELECT Nome, Nacionalidade, Data_Nascimento FROM Autor WHERE Nome = ?;';
        const rows = await pool.execute(sql, [Nome]);
        return rows[0][0];
    },
    deletar: async (autorId) => {
        const sql = 'DELETE FROM Autor WHERE ID = ?;';
        const resultado = await pool.execute(sql, [autorId]);
        return resultado[0];
    },
    criar: async (Nome, Nacionalidade, Data_Nascimento) => {
        const sql = 'INSERT INTO Autor (Nome, Nacionalidade, Data_Nascimento) VALUES (?, ?, ?);';
        const resultado = await pool.execute(sql, [Nome.trim(), Nacionalidade.trim().toLowerCase(), Data_Nascimento]);
        return resultado[0];
    },
    atualizar: async (autorId, Nome, Nacionalidade, Data_Nascimento) => {
        const sql = 'UPDATE Autor SET Nome = ?, Nacionalidade = ?, Data_Nascimento = ? WHERE ID = ?;';
        const resultado = await pool.execute(sql, [Nome.trim(), Nacionalidade.trim().toLowerCase(), Data_Nascimento, autorId]);
        return resultado[0];
    }
}

export default autorRepository;