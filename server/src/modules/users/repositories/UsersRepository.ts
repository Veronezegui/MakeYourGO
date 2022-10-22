import { User } from "../model/User";
import {
  ICreateUserDTO,
  IUpdatePasswordUserDTO,
  IUpdateTokenUserDTO,
  IUserUpdate,
} from "./IUsersRepository";

class UserRepository {
  private users: User[];

  constructor() {
    this.users = [];
  }

  update({
    email,
    passwordResetToken,
    passwordResetExpires,
  }: IUpdateTokenUserDTO): void {
    const user = this.users.find((user) => user.email === email);

    Object.assign(user, {
      passwordResetToken,
      passwordResetExpires,
    });
  }

  create({ name, email, senha }: ICreateUserDTO): void {
    const user = new User();

    Object.assign(user, {
      name,
      email,
      senha,
      created_at: new Date(),
    });

    this.users.push(user);
  }

  updatePassword({ email, senha }: IUpdatePasswordUserDTO): void {
    const user = this.users.find((user) => user.email === email);

    Object.assign(user, {
      senha,
    });
  }

  list(): User[] {
    return this.users;
  }

  findByEmail(email: string): User {
    const user = this.users.find((user) => user.email === email);
    return user;
  }

  findBySenha(senha: string): User {
    const user = this.users.find((user) => user.senha === senha);
    return user;
  }
}

export { UserRepository };
