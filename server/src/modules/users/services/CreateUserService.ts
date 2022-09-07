/* eslint-disable no-useless-constructor */
import { IUsersRepository } from '../repositories/IUsersRepository'

interface IRequest {
  name: string;
  email: string;
  senha: string;
}

class CreateUserService {
  constructor(private usersRepository: IUsersRepository) { }

  async execute({ name, email, senha }: IRequest) {
    const userAlreadyExists = await this.usersRepository.findByEmail(email)

    if (userAlreadyExists) {
      throw new Error('Usuário já existe!')
    } // if (email || name || senha === ' ') {

    // throw new Error('Preencha as informações')
    // }
    this.usersRepository.create({ name, email, senha })

    // if (name || email || senha === '') {
    //   throw new Error('Favor preencher os campos')
    // }
  }
}

export { CreateUserService }
