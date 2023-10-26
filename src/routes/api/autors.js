const router = require('express').Router();

const AutorsController = require('../../controllers/autors.controllers');

router.get('/', AutorsController.getAllAutors);
router.post('/', AutorsController.createAutors);

router.get('/:autorId', AutorsController.getAutorById);

router.put('/:autorId', AutorsController.updateAutor);
router.delete('/:autorId', AutorsController.deleteAutor);

module.exports = router;