/* eslint-disable no-unused-vars */
import { User } from "../model/User";

interface ICreateUserDTO {
  name: string;
  email: string;
  senha: string;
}

interface IUpdateTokenUserDTO {
  email: string;
  passwordResetToken: number;
  passwordResetExpires: Date;
}

interface IUpdatePasswordUserDTO {
  email: string;
  senha: string;
}

interface ILoginDTO {
  email: string;
  senha: string;
}

interface IUsersRepository {
  findByEmail(email: string);
  findBySenha(senha: string);
  list(): User[];
  create({ name, email, senha }: ICreateUserDTO): void;
  update({
    passwordResetToken,
    passwordResetExpires,
  }: IUpdateTokenUserDTO): void;
}

interface IUserUpdate {
  updatePassword({ email, senha }: IUpdatePasswordUserDTO): void;
}

export {
  IUsersRepository,
  IUserUpdate,
  ICreateUserDTO,
  ILoginDTO,
  IUpdateTokenUserDTO,
  IUpdatePasswordUserDTO,
};
