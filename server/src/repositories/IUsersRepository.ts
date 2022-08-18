/* eslint-disable no-unused-vars */
import { User } from '../model/User'

interface ICreateUserDTO {
  name: string;
  email: string;
  senha: string
}

interface ILoginDTO {
  email: string;
  senha: string
}

interface IUsersRepository {
  findByEmail(email: string);
  findBySenha(senha: string);
  list(): User[];
  create({ name, email, senha }: ICreateUserDTO): void
}

export { IUsersRepository, ICreateUserDTO, ILoginDTO }
