"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
const CreateUser_1 = __importDefault(require("./CreateUser"));
function createUser(request, response) {
    CreateUser_1.default.execute({
        name: "Guilherme",
        email: "gui.veroneze@gmail.com",
        senha: "991968"
    });
    return response.send();
}
exports.createUser = createUser;
