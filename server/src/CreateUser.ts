
interface User {
    name: string;
    email: string;
    senha: string;
}

class CreateUser {

    execute({name, email, senha}: User) {
        console.log(name, email, senha)
    }
}

export default new CreateUser;