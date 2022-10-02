/* eslint-disable no-unused-vars */
import { response, Router } from "express";

import {
  CreateUserService,
  UpdatePasswordUserService,
  UpdateUserForgetPasswordService,
} from "../modules/users/services/CreateUserService";

import { UserRepository } from "../modules/users/repositories/UsersRepository";
import { AuthenticateUser } from "../modules/users/services/AuthenticateUser";

import crypto from "crypto";

const usersRoutes = Router();
const userRepository = new UserRepository();

// Rota para cadastro de usuários
usersRoutes.post("/", (request, response) => {
  // try {
  const { name, email, senha } = request.body;

  const createUserService = new CreateUserService(userRepository);

  createUserService.execute({ name, email, senha });
  const userAlreadyExists = userRepository.findByEmail(email);

  if (userAlreadyExists) {
    return response.status(400).json({ error: "Esse usuário já existe" });
  }

  return response.status(201).send();
});

// Rota para listar todos usuários
usersRoutes.get("/", (request, response) => {
  const all = userRepository.list();

  return response.json(all);
});

// Rota para Autenticação de usuários
usersRoutes.post("/login", (request, response) => {
  const { email, senha } = request.body;

  const authenticateUser = new AuthenticateUser(userRepository);

  const result = authenticateUser.execute({
    email,
    senha,
  });

  return response.json(result);
});

usersRoutes.put("/", (request, response) => {
  const { email, senha } = request.body;

  const user = userRepository.findByEmail(email);
  if (user) {
    user.senha = senha;
    return response.status(201).send();
  } else {
    return response.status(400).json({ error: "Esse email não existe" });
  }
});

usersRoutes.post("/forgot_password", async (request, response) => {
  const { email } = request.body;

  try {
    const user = await userRepository.findByEmail(email);

    if (!user) {
      return response.status(400).json({ error: "Esse email não existe" });
    }

    const token = Math.floor(Math.random() * 1000005);

    const now = new Date();
    now.setHours(now.getHours() + 1);

    const updateUserForgetPassword = new UpdateUserForgetPasswordService(
      userRepository
    );

    updateUserForgetPassword.execute({
      email,
      passwordResetToken: token,
      passwordResetExpires: now,
    });

    return response.status(201).send();
  } catch (err) {
    response.status(400).send({ error: "Erro on forgot password, try again" });
  }
});

usersRoutes.post("/reset_password", async (request, response) => {
  const { token, email, senha } = request.body;

  const user = userRepository.findByEmail(email);
  const now = new Date();

  console.log(user.passwordResetToken);

  if (user.passwordResetToken !== token) {
    return response.status(400).send({ error: "Token invalido" });
  }

  if (now > user.passwordResetExpires) {
    return response.status(400);
  }

  const updateUserPassword = new UpdatePasswordUserService(userRepository);

  updateUserPassword.execute({
    email,
    senha,
  });

  return response.status(200).send({ user });
});

export { usersRoutes };
