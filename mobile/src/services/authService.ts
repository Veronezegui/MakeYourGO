import { AuthData } from "../contexts/AuthContext";
import { api } from "./api";
async function signIn(email: string, senha: string): Promise<AuthData> {
  const login = await api.post("/users/login", {
    email,
    senha,
  });

  console.log(login);

  return new Promise((resolve, reject) => {
    console.log(login);
    if (login) {
      resolve({
        id: login.data.id,
        email: login.data.email,
        name: login.data.name,
        senha: login.data.senha,
      });
    } else {
      reject(new Error("Credenciais erradas"));
    }
  });
}

export const authService = { signIn };
