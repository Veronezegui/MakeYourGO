/* eslint-disable no-unused-vars */
import { response, Router } from 'express'

import { CreateUserService } from '../modules/users/services/CreateUserService'

import { UserRepository } from '../modules/users/repositories/UsersRepository'
import { AuthenticateUser } from '../modules/users/services/AuthenticateUser'

const usersRoutes = Router()
const userRepository = new UserRepository()

// Rota para cadastro de usuários
usersRoutes.post('/', (request, response) => {
  // try {
  const { name, email, senha } = request.body

  const createUserService = new CreateUserService(userRepository)

  createUserService.execute({ name, email, senha })
  const userAlreadyExists = userRepository.findByEmail(email)

  if (userAlreadyExists) {
    return response.status(400).json({ error: 'Esse usuário já existe' })
  }

  return response.status(201).send()
})

// Rota para listar todos usuários
usersRoutes.get('/', (request, response) => {
  const all = userRepository.list()

  return response.json(all)
})

// Rota para Autenticação de usuários
usersRoutes.post('/login', (request, response) => {
  const { email, senha } = request.body

  const authenticateUser = new AuthenticateUser(userRepository)

  const result = authenticateUser.execute({
    email,
    senha
  })

  return response.json(result)
})

usersRoutes.put('/', (request, response) => {
  const { email, senha } = request.body

  const user = userRepository.findByEmail(email)
  if (user) {
    user.senha = senha
    return response.status(201).send()
  } else {
    return response.status(400).json({ error: 'Esse email não existe' })
  }
})

export { usersRoutes }
