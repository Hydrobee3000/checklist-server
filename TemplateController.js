import Form from './Form.js'
import Template from './Template.js'

// logic of actions with form

class TemplateController {
  /* add template */

  async create(req, res) {
    try {
      const { data } = req.body
      const jsonData = JSON.parse(data)
      const { userId, formsName, startTime, elements } = jsonData
      const form = await Template.create({ userId, formsName, startTime, elements })

      console.log(req.body)
      res.json(form)
    } catch (error) {
      res.status(500).json(error)
    }
  }

  /* get all forms */

  async getAll(req, res) {
    try {
      const forms = await Form.find() // get all records

      return res.json(forms)
    } catch (error) {
      res.status(500).json(error)
    }
  }

  /* get one form */

  async get(req, res) {
    try {
      const { id } = req.params

      // if id no exists - return error with message
      if (!id) {
        res.status(400).json({ message: 'Id not specified' })
      }
      const form = await Form.findById(id)

      return res.json(form)
    } catch (error) {
      res.status(500).json(error)
    }
  }

  /* update form */

  async update(req, res) {
    try {
      const form = req.body

      // if id no exists - return error with message
      if (!form._id) {
        res.status(400).json({ message: 'Id not specified' })
      }

      const updatedForm = await Form.findByIdAndUpdate(form._id, form, { new: true }) // get updated version

      return res.json(updatedForm)
    } catch (error) {
      res.status(500).json(error)
    }
  }

  /* delete form */

  async delete(req, res) {
    try {
      const { id } = req.params

      // if id no exists - return error with message
      if (!id) {
        res.status(400).json({ message: 'Id not specified' })
      }

      const form = await Form.findByIdAndDelete(id)

      return res.json(form)
    } catch (error) {
      res.status(500).json(error)
    }
  }
}

export default new TemplateController()
