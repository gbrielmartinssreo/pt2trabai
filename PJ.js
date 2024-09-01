"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PJ = void 0;
const Conta_1 = require("./Conta");
class PJ extends Conta_1.Conta {
    constructor(cnpj, nome, senha, numeroConta, saldo, extratoSaque, extratoDeposito) {
        super(nome, senha, numeroConta, saldo, extratoSaque, extratoDeposito);
        this._cnpj = cnpj;
    }
    getcnpj() {
        return this._cnpj;
    }
    setcnpj(cnpj) {
        return this._cnpj = cnpj;
    }
    // ---------------------------------------------------------------//
    saque(valor) {
        if (!isNaN(valor) && valor <= this.saldo) {
            this._saldo -= valor;
            this._extratoSaque.push(valor);
        }
        else {
            console.log("Deu errado, meu bacano. Vai ter q fz tudo dnv XD\n PFVR Renan, melhore (te amo) ");
        }
    }
    deposito(valor) {
        if (!isNaN(valor) && valor > 0) {
            this._saldo += valor;
            this._extratoDeposito.push(valor);
        }
        else {
            console.log("Deu errado, meu bacano. Vai ter q fz tudo dnv XD\n PFVR Renan, melhore (te amo) ");
        }
    }
}
exports.PJ = PJ;
