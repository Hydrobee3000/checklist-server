import express from 'express'
import mongoose from 'mongoose'

const PORT = 5000

const app = express()

app.use(express.json()) // to convert json format

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
