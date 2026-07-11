import { Router } from 'express';
import autorController from "../controllers/autorController.js"


const autorRoutes = Router();

autorRoutes.post('/', autorController.criar);
autorRoutes.put('/:ID', autorController.atualizar);
autorRoutes.delete('/:ID', autorController.deletar);
autorRoutes.get('/', autorController.selecionar);
autorRoutes.get('/:ID', autorController.selecionarPorId);

export default autorRoutes;