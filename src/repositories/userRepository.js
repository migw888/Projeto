import pool from '../configs/Database.js';

const userRepository = {
    selecionar: async () => {
        const sql = 'SELECT id, name, email, password FROM users ORDER BY id DESC;';
        const rows = await pool.execute(sql);
        return rows[0];
    },
    selecionarPorId: async (userId) => {
        const sql = 'SELECT id, name, email, password FROM users WHERE id = ?;';
        const rows = await pool.execute(sql, [userId]);
        return rows[0];
    },
    selecionarPorEmail: async (email) => {
        const sql = 'SELECT id, name, email, password FROM users WHERE email = ?;';
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
    atualizar: async (userId, nome, email, telefone) => {
        const sql = 'UPDATE users SET name = ?, email = ?, telefone = ? WHERE id = ?;';
        const resultado = await pool.execute(sql, [nome.trim(), email.trim(), cpf.trim(), telefone.trim()]);
        return resultado[0];
    }
}

export default userRepository;