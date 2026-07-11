import 'dotenv/config';
import express from 'express';
import mysql from 'mysql2/promise';
import userRoutes from './routes/userRoutes.js';
import authRoutes from './routes/authRoutes.js';
import livroRoutes from './routes/livroRoutes.js';
import autorRoutes from './routes/autorRoutes.js';

const port = 3000;

const app = express();
	
app.use(express.json());
app.use('/usuarios', userRoutes);
app.use('/autor', autorRoutes);
app.use('/auth', authRoutes);
app.use('/livro', livroRoutes)

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
