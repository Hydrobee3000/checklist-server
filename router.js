import { Router } from 'express'
import FormController from './FormController.js' // logic of actions with form
import TemplateController from './TemplateController.js'

const router = Router()

router.post('/template', TemplateController.create) // create
router.post('/form', FormController.create) // create
router.get('/forms', FormController.getAll) // read all
router.get('/forms/:id', FormController.get) // read one
router.put('/form/:id', FormController.update) // update
router.delete('/forms/:id', FormController.delete) // delete

export default router
