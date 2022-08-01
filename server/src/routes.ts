import {Request, Response } from 'express';

import CreateUser from './CreateUser';

export function createUser(request: Request, response: Response) {
    CreateUser.execute({
        name: "Guilherme",
        email: "gui.veroneze@gmail.com",
        senha: "991968"
    })

    return response.send()
}