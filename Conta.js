"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
class Conta {
    constructor(nome, senha, numeroConta, saldo, extratoSaque, extratoDeposito) {
        this._nome = nome;
        this._senha = senha;
        this._numeroConta = numeroConta;
        this._saldo = saldo;
        this._extratoSaque = extratoSaque;
        this._extratoDeposito = extratoDeposito;
    }
    getNome() {
        return this._nome;
    }
    setNome(nome) {
        this._nome = nome;
    }
    getSenha() {
        return this._senha;
    }
    setSenha(senha) {
        this._senha = senha;
    }
    getNumeroConta() {
        return this._numeroConta;
    }
    setNumeroConta(numeroConta) {
        this._numeroConta = numeroConta;
    }
    get saldo() {
        return this._saldo;
    }
    //é vetor, tem que mexer dps
    get extratoSaque() {
        return this._extratoSaque;
    }
    get extratoDeposito() {
        return this._extratoDeposito;
    }
    set saldo(saldo) {
        this._saldo = saldo;
    }
    set extratoSaque(extratoSaque) {
        this._extratoSaque = extratoSaque;
    }
    set extratoDeposito(extratoDeposito) {
        this._extratoDeposito = extratoDeposito;
    }
    //------------------------------------------------------------------------------------------//
    Info(extratoDeposito = this._extratoDeposito, extratoSaque = this._extratoSaque) {
        console.log(`Saldo da conta: ${this._saldo}`);
        console.log("Extrato:\n");
        for (let i = 0; i < extratoDeposito.length; i++) {
            console.log(`Valor de deposito: ${extratoDeposito[i]}\n`);
        }
        for (let i = 0; i < extratoSaque.length; i++) {
            console.log(`Valor de saque: ${extratoSaque[i]}\n`);
        }
    }
}
exports.Conta = Conta;
