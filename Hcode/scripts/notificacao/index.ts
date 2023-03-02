import { Android, Email, SMS } from "./classes/MeiosComun"

new Email().enviar({
    nome: "Vitor",
    email: "vitormota05@gmail.com",
    telefone: "11997159497"
})
new SMS().enviar({
    nome: "Vitor",
    email: "vitormota05@gmail.com",
    telefone: "11997159497"
})
new Android().enviar({
    nome: "Vitor",
    email: "vitormota05@gmail.com",
    telefone: "11997159497",
    idAndroid: "212sdadasdade23r42#$%¨&*&¨%$#@#$%¨&*deded",
})