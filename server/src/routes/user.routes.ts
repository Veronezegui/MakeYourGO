/* eslint-disable no-unused-vars */
import { json, request, response, Router } from 'express'

import { UserRepository } from '../repositories/UsersRepository'

const usersRoutes = Router()
const userRepository = new UserRepository()

usersRoutes.post('/', (request, response) => {
  const { name, email, senha } = request.body

  const userAlreadyExists = userRepository.findByEmail(email)

  if (userAlreadyExists) {
    return response.status(400).json({ error: 'Esse usuário já existe' })
  }

  userRepository.create({ name, email, senha })

  return response.status(201).send()
})

usersRoutes.get('/', (request, response) => {
  const all = userRepository.list()

  return response.json(all)
})
export { usersRoutes }
