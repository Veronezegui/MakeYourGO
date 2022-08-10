/* eslint-disable no-unused-vars */
import { json, request, response, Router } from 'express'
import { PostgresUsersRepository } from '../repositories/PostgresUsersRepository'

import { UserRepository } from '../repositories/UsersRepository'
import { CreateUserService } from '../services/CreateUserService'

const usersRoutes = Router()
const usersRepository = new UserRepository()

usersRoutes.post('/', (request, response) => {
  const { name, email, senha } = request.body

  const createUserService = new CreateUserService(usersRepository)

  createUserService.execute({ name, email, senha })

  return response.status(201).send()
})

usersRoutes.get('/', (request, response) => {
  const all = usersRepository.list()

  return response.json(all)
})
export { usersRoutes }
