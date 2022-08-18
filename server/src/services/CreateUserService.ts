/* eslint-disable no-useless-constructor */
import { IUsersRepository } from '../repositories/IUsersRepository'

interface IRequest {
  name: string;
  email: string;
  senha: string;
}

class CreateUserService {
  constructor (private usersRepository: IUsersRepository) {}

  execute ({ name, email, senha }: IRequest): void {
    const userAlreadyExists = this.usersRepository.findByEmail(email)

    if (userAlreadyExists) {
      throw new Error('Usuário já existe!')
    }

    this.usersRepository.create({ name, email, senha })
  }
}

export { CreateUserService }
