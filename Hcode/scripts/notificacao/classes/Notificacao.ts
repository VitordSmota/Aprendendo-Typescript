import { IMeuUsuario } from "../../interfaces/IMeuUsuario";

export default abstract class Notificacao {

    abstract enviar(usuario:IMeuUsuario): boolean;
}
