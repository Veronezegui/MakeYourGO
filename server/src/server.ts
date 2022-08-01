import express from 'express'
import { createUser } from './routes'

const app = express()

app.get('/', createUser)

app.listen(3333)
