import pool from '../configs/Database.js';

const livroRepository = {
    selecionar: async () => {
        const sql = 'SELECT id, titulo, isbn, Ano_publicacao, quantidade_disponivel FROM livro ORDER BY id DESC;';
        const rows = await pool.execute(sql);
        return rows[0];
    },
    selecionarPorId: async (LivroId) => {
        const sql = 'SELECT id, titulo, isbn, Ano_publicacao, quantidade_disponivel FROM livro WHERE id = ?;';
        const rows = await pool.execute(sql, [LivroId]);
        return rows[0];
    },
    selecionarPorTitulo: async (titulo) => {
        const sql = 'SELECT id, titulo, isbn, Ano_publicacao, quantidade_disponivel FROM livro WHERE email = ?;';
        const rows = await pool.execute(sql, [titulo]);
        return rows[0][0];
    },
    deletar: async (LivroId) => {
        const sql = 'DELETE FROM livro WHERE id = ?;';
        const resultado = await pool.execute(sql, [LivroId]);
        return resultado[0];
    },
    criar: async (titulo, isbn, Ano_publicacao, quantidade_disponivel) => {
        const sql = 'INSERT INTO livro (titulo, isbn, Ano_publicacao, quantidade_disponivel) VALUES (?, ?, ?, ?);';
        const resultado = await pool.execute(sql, [titulo, isbn, Ano_publicacao, quantidade_disponivel]);
        return resultado[0];
    },
    atualizar: async (LivroId, titulo, isbn, Ano_publicacao, quantidade_disponivel) => {
        const sql = 'UPDATE livro SET titulo = ?, isbn = ?, Ano_publicacao = ? quantidade_disponivel = ? WHERE id = ?;';
        const resultado = await pool.execute(sql, [titulo, isbn, Ano_publicacao, quantidade_disponivel, LivroId]);
        return resultado[0];
    }
}

export default livroRepository;