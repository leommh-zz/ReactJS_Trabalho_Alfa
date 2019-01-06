const express = require('express');
const router = express.Router();

const { autenticarToken } = require('../utils/token');

const validateSchema = require('./validateSchema');
const controller = require('../controllers/tarefas');

const validateBody = {
    titulo: {
        in: "body",
        isString: true,
        notEmpty: true,
        errorMessage: "Informe o titulo."
    },
    descricao: {
    	in: "body",
    	isString: true,
    	notEmpty: true,
    	errorMessage: "Informe a descrição."
    }
}


router.get('/',autenticarToken, controller.listagem);
router.post('/', autenticarToken, validateSchema(validateBody), controller.cadastro);
router.get('/:tarefaId', autenticarToken, controller.buscaPorId);
router.put('/:tarefaId', autenticarToken, controller.edicao);
router.delete('/:tarefaId', autenticarToken, controller.remocao);
router.put('/:tarefaId/concluida', autenticarToken, controller.marcarConcluida);
router.delete('/:tarefaId/concluida', autenticarToken, controller.desmarcarConcluida);


module.exports = router;
