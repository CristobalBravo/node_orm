import {Router} from 'express';
import { PersonaController } from '../controller/persona.controller';
import { PersonaRepository } from '../repository/persona.repository';

const router = Router();
const personaController = new PersonaController(new PersonaRepository());
router.get("/persona", personaController.listar.bind(personaController));
router.post("/persona", personaController.crear.bind(personaController));
router.put("/persona/:id", personaController.editar.bind(personaController));
router.delete("/persona/:id", personaController.eliminar.bind(personaController));
router.get("/persona/:id", personaController.buscar.bind(personaController));

export default router;