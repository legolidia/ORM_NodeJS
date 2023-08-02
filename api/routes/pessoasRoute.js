const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController')

const router = Router()

router.get('/pessoas', PessoaController.getAllPeople)
router.get('/pessoas/:id', PessoaController.getPersonById)
router.post('/pessoas', PessoaController.createPerson)
router.post('/pessoas/:id', PessoaController.updatePerson)
router.delete('/pessoas/:id', PessoaController.deletePerson)
router.get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.getRegistration)

module.exports = router