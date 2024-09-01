"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PF = void 0;
const Conta_1 = require("./Conta");
class PF extends Conta_1.Conta {
    constructor(cpf, nome, senha, numeroConta, saldo, extratoSaque, extratoDeposito) {
        super(nome, senha, numeroConta, saldo, extratoSaque, extratoDeposito);
        this._cpf = cpf;
    }
    getcpf() {
        return this._cpf;
    }
    setcpf(cpf) {
        return this._cpf = cpf;
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
exports.PF = PF;
