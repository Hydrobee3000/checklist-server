import express from 'express'

const PORT = 5000

const app = express()

app.use(express.json()) // to convert json format

async function startApp() {
  try {
    // listen for changes on the specified port
    app.listen(PORT, () => {
      console.log(`Server Started at ${PORT}`)
    })
  } catch (error) {
    console.log(error)
  }
}

startApp()
