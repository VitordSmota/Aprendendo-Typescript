"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Documento_nmr, _CNPJ_nmr;
class Documento {
    constructor() {
        this.valor = 12344321;
        _Documento_nmr.set(this, 35);
    }
    mostrarNmr() {
        return __classPrivateFieldGet(this, _Documento_nmr, "f");
    }
}
_Documento_nmr = new WeakMap();
class CNPJ extends Documento {
    constructor() {
        super(...arguments);
        // private valor: number = 999999
        _CNPJ_nmr.set(this, 50);
    }
    mostrarNmr() {
        return __classPrivateFieldGet(this, _CNPJ_nmr, "f");
    }
}
_CNPJ_nmr = new WeakMap();
const rg = new Documento();
const cnpj = new CNPJ();
// console.log( rg.valor);
