/* eslint-disable no-useless-constructor */
import { IUsersRepository } from '../repositories/IUsersRepository'
import { sign } from 'jsonwebtoken'

interface IAuthenticateUser {
  email: string;
  senha: string
}

class AuthenticateUser {
  constructor(private usersRepository: IUsersRepository) { }
  execute({ email, senha }: IAuthenticateUser) {
    const user = this.usersRepository.findByEmail(email)
    console.log(user)
    if (!user) {
      throw new Error('Email e senha incorretos!')
    }

    const passwordMatch = this.usersRepository.findBySenha(senha)

    if (!passwordMatch) {
      throw new Error('Email e senha incorretos!')
    }

    const token = sign({ email }, '192309aaddc500140db28668e1bbd8b5', {
      subject: user.id
    })

    return {
      token
    }
  }
}

export { AuthenticateUser }
