import { Router } from 'express';
import empController from '../controllers/empController.js';

const empRoutes = Router();

empRoutes.post('/', empController.criar);
empRoutes.put('/:id', empController.atualizar);
empRoutes.delete('/:id', empController.deletar);
empRoutes.get('/', empController.selecionar);
empRoutes.get('/:id', empController.selecionarPorId);

export default empRoutes;