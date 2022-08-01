"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateUser {
    execute({ name, email, senha }) {
        console.log(name, email, senha);
    }
}
exports.default = new CreateUser;
