import mongoose from 'mongoose'

const formSchema = new mongoose.Schema({
  formsName: String,
  startTime: Date,
  device: String,
  date: Date,
  answers: [Object], // Массив объектов, содержащих ответы на вопросы
})

export default mongoose.model('Form', formSchema)
