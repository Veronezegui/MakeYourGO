import { User } from '../model/User'
import { ICreateUserDTO, IUsersRepository } from './IUsersRepository'

class PostgresUsersRepository implements IUsersRepository {
  findByEmail (email: string) {
    console.log(email)
    return null
  }

  list (): User[] {
    return null
  }

  create ({ name, email, senha }: ICreateUserDTO): void {
    console.log(name, email, senha)
  }
}

export { PostgresUsersRepository }
