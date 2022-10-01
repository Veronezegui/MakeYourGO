/* eslint-disable no-useless-constructor */
import {
  IUsersRepository,
  IUserUpdate,
} from "../repositories/IUsersRepository";
import mailer from "../../mailer";
import ejs from "ejs";

interface IRequest {
  name: string;
  email: string;
  senha: string;
}

interface IRequestForgetPassword {
  email: string;
  passwordResetToken: number;
  passwordResetExpires: Date;
}

interface IUpdatePassword {
  email: string;
  senha: string;
}

class CreateUserService {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({ name, email, senha }: IRequest) {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new Error("Usuário já existe!");
    } // if (email || name || senha === ' ') {

    // throw new Error('Preencha as informações')
    // }

    this.usersRepository.create({ name, email, senha });

    // if (name || email || senha === '') {
    //   throw new Error('Favor preencher os campos')
    // }
  }
}

class UpdateUserForgetPasswordService {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({
    email,
    passwordResetToken,
    passwordResetExpires,
  }: IRequestForgetPassword) {
    ejs.renderFile(
      __dirname + "/forgot_password.ejs",
      { codigo: passwordResetToken },
      function (err, data) {
        if (err) {
          console.log(err);
        } else {
          mailer.sendMail({
            from: "contato@makeyourgo.com.br",
            to: email,
            subject: "MakeYourGo: Recuperação de senha",
            html: data,
          });
        }
      }
    );

    this.usersRepository.update({
      email,
      passwordResetExpires,
      passwordResetToken,
    });
  }
}

class UpdatePasswordUserService {
  constructor(private usersUpdateRepository: IUserUpdate) {}

  async execute({ email, senha }: IUpdatePassword) {
    this.usersUpdateRepository.updatePassword({
      email,
      senha,
    });
  }
}

export {
  CreateUserService,
  UpdateUserForgetPasswordService,
  UpdatePasswordUserService,
};
