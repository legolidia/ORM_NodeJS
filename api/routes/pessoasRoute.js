const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController')

const router = Router()

router.get('/pessoas', PessoaController.getAllPeople)
router.get('/pessoas/:id', PessoaController.get.PersonById)
router.post('/pessoas', PessoaController.createPerson)
router.post('/pessoas/:id', PessoaController.updatePerson)
router.delete('/pessoas/:id', PessoaController.deletePerson)

module.exports = router