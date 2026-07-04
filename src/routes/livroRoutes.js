import { Router } from 'express';
import livroController from '../controllers/livroController.js';

const livroRoutes = Router();

livroRoutes.post('/', livroController.criar);
livroRoutes.put('/:id', livroController.atualizar);
livroRoutes.delete('/:id', livroController.deletar);
livroRoutes.get('/', livroController.selecionar);
livroRoutes.get('/:id', livroController.selecionarPorId);

export default livroRoutes;