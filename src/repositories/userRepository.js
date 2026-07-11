import pool from '../configs/Database.js';

const userRepository = {
    selecionar: async () => {
        const sql = 'SELECT id, nome, email, cpf, telefone FROM usuario ORDER BY id DESC;';
        const rows = await pool.execute(sql);
        return rows[0];
    },
    selecionarPorId: async (userId) => {
        const sql = 'SELECT nome, email, cpf, telefone FROM usuario WHERE id = ?;';
        const rows = await pool.execute(sql, [userId]);
        return rows[0];
    },
    selecionarPorEmail: async (email) => {
        const sql = 'SELECT nome, email, cpf, telefone FROM usuario WHERE email = ?;';
        const rows = await pool.execute(sql, [email]);
        return rows[0][0];
    },
    deletar: async (userId) => {
        const sql = 'DELETE FROM usuario WHERE id = ?;';
        const resultado = await pool.execute(sql, [userId]);
        return resultado[0];
    },
    criar: async (nome, email, cpf, telefone) => {
        const sql = 'INSERT INTO usuario (nome, email, cpf, telefone) VALUES (?, ?, ?, ?);';
        const resultado = await pool.execute(sql, [nome.trim(), email.trim(), cpf.trim(), telefone.trim()]);
        return resultado[0];
    },
    atualizar: async (userId, nome, email, telefone, cpf) => {
        console.log (userId, nome, email, telefone, cpf)
        const sql = 'UPDATE usuario SET nome = ?, email = ?, telefone = ?, cpf = ? WHERE id = ?;';
        const resultado = await pool.execute(sql, [nome.trim(), email.trim(), telefone.trim(), cpf.trim(), userId]);
        return resultado[0];
    }
}

export default userRepository;