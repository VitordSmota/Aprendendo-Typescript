function decoratorGetSet(permission: boolean) {
    
    return function (
    target: unknown,
    propertyKey: string,
    descriptor: PropertyDescriptor
    ) {
        
        descriptor.enumerable = permission
    }
}

class Login {
    constructor(
        private _usuario: string,
        private _senha: string,
    ){}
    @decoratorGetSet(true)
    get usuario() {
        return this._usuario;
    }
    @decoratorGetSet(false)
    get senha() {
        return this._senha;
    }

}
const login = new Login('Antony@gmail.com', "102030");

for (let chave in login) {
    console.log("chave", chave)
    console.log("Permission", login[chave])
}