import mongoose from 'mongoose'

// Определение схемы для ответов на вопросы
const answerSchema = new mongoose.Schema({
  questionId: String, // Поле для хранения идентификатора вопроса
  answer: String, // Поле для хранения ответа на вопрос
})

// Определение схемы для формы
const formSchema = new mongoose.Schema({
  answers: [answerSchema], // Массив ответов на вопросы
  date: String, // Дата заполнения формы
  device: String, // Информация о устройстве
  formsName: String, // Название формы
  startTime: String, // Время начала заполнения формы
})

// Создание модели Form на основе схемы formSchema
export default mongoose.model('Form', formSchema)
