function decoratorMetodo(
    target: unknown,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    
    descriptor.value = (...args: unknown[]) => {

        return args.map(item => (<string>item).toUpperCase())
    };
}

class TratarMensagem {
    @decoratorMetodo
    dizerMensagem(...mensagens: string[]){

        return mensagens;
    }

}

const instancia = new TratarMensagem();



console.log(instancia.dizerMensagem("ola","seja-bemvindo","hcode"))