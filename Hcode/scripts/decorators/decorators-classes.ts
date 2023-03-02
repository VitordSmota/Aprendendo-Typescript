import {debug} from "./utils/debug";

@debug
class PrimeiraClasse {

    constructor(){}
}

const log = (constructor: any)=>{

    return class extends constructor {
        created_at: Date = new Date();
    }
}

@log 
class SegundaClasse{
    constructor(){}
}
console.log(new SegundaClasse());