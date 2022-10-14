/* eslint-disable no-unused-vars */
import express from 'express'
import { usersRoutes } from './routes/user.routes'
// import { uberRoutes } from './routes/uber.routes'

const app = express()

app.use(express.json())

app.use('/users', usersRoutes)

// app.use('/uber', uberRoutes)

app.get('/', (request, response) => {
  return response.json({ message: 'Hello World' })
})

app.listen(3333, () => console.log('Server is running!'))
