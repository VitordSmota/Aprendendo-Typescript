
import "reflect-metadata";

function decoratorParametros(
    target: any,
    key: string,
    propertyKey: number)
{
    Reflect.getMetadata("design:paramstypes", target, key)
        .map(item => console.log(item));
}
class TratarParametros {

    metodo1(@decoratorParametros mensagem: string){}
    metodo2(@decoratorParametros numero : number){}
}

new TratarParametros();