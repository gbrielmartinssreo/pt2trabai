"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gerente = void 0;
class Gerente {
    constructor(nome, senha, numeroContato, contasPJ, contasPF) {
        this._nome = nome;
        this._senha = senha;
        this._numeroContato = numeroContato;
        this._contasPJ = contasPJ;
        this._contasPF = contasPF;
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
    getNumeroContato() {
        return this._numeroContato;
    }
    setNumeroContato(numeroContato) {
        this._numeroContato = numeroContato;
    }
    getContasPF() {
        return this._contasPF;
    }
    getContasPJ() {
        return this._contasPJ;
    }
    adicionarContaPF(conta) {
        this._contasPF.push(conta);
    }
    adicionarContaPJ(conta) {
        this._contasPJ.push(conta);
    }
    listarContasPJ() {
        console.log("Contas PJ:");
        this._contasPJ.forEach((conta) => {
            console.log(`Nome: ${conta._nome}, CNPJ: ${conta.getcnpj()}, Número da Conta: ${conta._numeroConta}`);
        });
    }
    listarContasPF() {
        console.log("Contas PF:");
        this._contasPF.forEach((conta) => {
            console.log(`Nome: ${conta._nome}, CPF: ${conta.getcpf()}, Número da Conta: ${conta._numeroConta}`);
        });
    }
    removerContaPF(numeroConta) {
        const novoArray = this._contasPF.filter(conta => conta._numeroConta !== numeroConta);
        this._contasPF = novoArray;
    }
    removerContaPJ(numeroConta) {
        const novoArray = this._contasPJ.filter(conta => conta._numeroConta !== numeroConta);
        this._contasPJ = novoArray;
    }
    Info() {
        console.log(`Nome: ${this._nome}`);
        console.log(`Número de Contato: ${this._numeroContato}`);
        console.log("Contas PJ:");
        this.listarContasPJ();
        console.log("Contas PF:");
        this.listarContasPF();
    }
}
exports.Gerente = Gerente;
