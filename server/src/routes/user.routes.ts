/* eslint-disable no-unused-vars */
import { Router } from 'express'

import { CreateUserService } from '../services/CreateUserService'

import { UserRepository } from '../repositories/UsersRepository'
import { AuthenticateUser } from '../services/AuthenticateUser'

const usersRoutes = Router()
const userRepository = new UserRepository()

usersRoutes.post('/', (request, response) => {
  const { name, email, senha } = request.body

  const createUserService = new CreateUserService(userRepository)

  createUserService.execute({ name, email, senha })
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

usersRoutes.post('/login', (request, response) => {
  const { email, senha } = request.body

  const authenticateUser = new AuthenticateUser(userRepository)

  const result = authenticateUser.execute({
    email,
    senha
  })

  return response.json(result)
})

export { usersRoutes }
