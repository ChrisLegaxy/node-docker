import express, { Application, Request, Response } from 'express';
import router from './routes'

require('dotenv').config()

const app: Application = express();

const PORT = process.env.PORT || 3000

app.use('/', router)

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`)
})
