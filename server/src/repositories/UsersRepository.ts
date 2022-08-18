import { User } from '../model/User'
import { ICreateUserDTO } from './IUsersRepository'

class UserRepository {
  private users: User[]

  constructor () {
    this.users = []
  }

  create ({ name, email, senha } : ICreateUserDTO): void {
    const user = new User()

    Object.assign(user, {
      name,
      email,
      senha,
      created_at: new Date()
    })

    this.users.push(user)
  }

  list (): User[] {
    return this.users
  }

  findByEmail (email: string): User {
    const user = this.users.find(user => user.email === email)
    return user
  }
}

export { UserRepository }
