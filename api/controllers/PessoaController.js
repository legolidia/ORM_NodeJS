const database = require('../models');

class PessoaController {
  static async getAllPeople(req, res) {
    try {
      const people = await database.Pessoas.findAll()
      return res.status(200).json(people)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async getPersonById(req, res) {
    try {
      const { id } = req.params
      const person = await database.Pessoas.findOne({
        where: {
          id: Number(id)
        }
      })
      return res.status(200).json(person)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async createPerson(req, res) {
    try {
      const person = await database.Pessoas.create(req.body)
      return res.status(200).json(person)
    } catch (error) {
      return res.status(500).send(error.message)
    }
  }

  static async updatePerson(req, res) {
    try {
      const { id } = req.params
      const [updated] = await database.Pessoas.update(req.body, {
        where: { id: Number(id) }
      })
      if (updated) {
        const updatedPerson = await database.Pessoas.findOne({ where: { id: Number(id) } })
        return res.status(200).json(updatedPerson)
      }
    }
    catch (error) {
      return res.status(500).send(error.message)
    }
  }

  static async deletePerson(req, res) {
    try {
      const { id } = req.params
      const deletedPerson = await database.Pessoas.destroy({ where: { id: id } })
      return res.status(200).json(deletedPerson)
    }
    catch (error) {
      return res.status(500).send(error.message)
    }
  }
}

module.exports = PessoaController