"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MeiosComun_1 = require("./classes/MeiosComun");
new MeiosComun_1.Email().enviar({
    nome: "Vitor",
    email: "vitormota05@gmail.com",
    telefone: "11997159497"
});
new MeiosComun_1.SMS().enviar({
    nome: "Vitor",
    email: "vitormota05@gmail.com",
    telefone: "11997159497"
});
new MeiosComun_1.Android().enviar({
    nome: "Vitor",
    email: "vitormota05@gmail.com",
    telefone: "11997159497",
    idAndroid: "212sdadasdade23r42#$%¨&*&¨%$#@#$%¨&*deded",
});
