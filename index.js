import express from 'express'
import mongoose from 'mongoose'
import router from './router.js'

const PORT = 5000
const DB_URL = `mongodb+srv://user:user@cluster0.edfrxne.mongodb.net/?retryWrites=true&w=majority` // connection db url

const app = express()

app.use(express.json()) // to convert json format
app.use('/api', router) // register route

async function startApp() {
  try {
    await mongoose.connect(DB_URL) // connection to mongoDB

    // listen for changes on the specified port
    app.listen(PORT, () => {
      console.log(`Server Started at ${PORT}`)
    })
  } catch (error) {
    console.log(error)
  }
}

startApp()
