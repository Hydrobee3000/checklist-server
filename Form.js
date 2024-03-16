import mongoose from 'mongoose'

const formElementSchema = new mongoose.Schema({
  elementOrder: Number,
  element: {
    type: String,
    enum: ['title', 'question'],
  },
  indexName: String,
  title: {
    text: String,
    remark: String,
  },
  order: Number,
  isRequire: Boolean,
  type: String,
  component: String,
  isMultipleAnswers: Boolean,
  variants: [
    {
      value: String,
      additionalInput: Boolean,
    },
  ],
})

const formSchema = new mongoose.Schema({
  formsName: String,
  startTime: Date,
  elements: [formElementSchema],
})

export default mongoose.model('Form', formSchema)
