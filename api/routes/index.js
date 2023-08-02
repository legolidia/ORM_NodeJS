const bodyParser = require('body-parser')
const pessoas = require('./pessoasRoute')
const niveis = require('./niveisRoute')
const turmas = require('./turmasRoute')

//adicionamos as instâncias de níveis e turmas
//e refatoramos um pouco a função
module.exports = app => {
 app.use(
   bodyParser.json(),
   pessoas,
   niveis,
   turmas
   )
 }