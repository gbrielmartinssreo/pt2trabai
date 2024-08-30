"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gerente = void 0;
var Gerente = /** @class */ (function () {
    function Gerente(nome, senha, numeroConta, numeroContato, contasPJ, contasPF) {
        this._nome = nome;
        this._senha = senha;
        this._numeroConta = numeroConta;
        this._numeroContato = numeroContato;
        this._contasPJ = contasPJ;
        this._contasPF = contasPF;
    }
    Gerente.prototype.getNome = function () {
        return this._nome;
    };
    Gerente.prototype.setNome = function (nome) {
        this._nome = nome;
    };
    Gerente.prototype.getSenha = function () {
        return this._senha;
    };
    Gerente.prototype.setSenha = function (senha) {
        this._senha = senha;
    };
    Gerente.prototype.getNumeroConta = function () {
        return this._numeroConta;
    };
    Gerente.prototype.setNumeroConta = function (numeroConta) {
        this._numeroConta = numeroConta;
    };
    Gerente.prototype.getNumeroContato = function () {
        return this._numeroContato;
    };
    Gerente.prototype.setNumeroContato = function (numeroContato) {
        this._numeroContato = numeroContato;
    };
    Gerente.prototype.getContasPF = function () {
        return this._contasPF;
    };
    Gerente.prototype.getContasPJ = function () {
        return this._contasPJ;
    };
    Gerente.prototype.adicionarContaPF = function (conta) {
        this._contasPF.push(conta);
    };
    Gerente.prototype.adicionarContaPJ = function (conta) {
        this._contasPJ.push(conta);
    };
    Gerente.prototype.listarContasPJ = function () {
        console.log("Contas PJ:");
        this._contasPJ.forEach(function (conta) {
            console.log("Nome: ".concat(conta.nomeTitular, ", CNPJ: ").concat(conta.cnpj, ", N\u00FAmero da Conta: ").concat(conta.numeroConta));
        });
    };
    Gerente.prototype.listarContasPF = function () {
        console.log("Contas PF:");
        this._contasPF.forEach(function (conta) {
            console.log("Nome: ".concat(conta.nomeTitular, ", CPF: ").concat(conta.cpf, ", N\u00FAmero da Conta: ").concat(conta.numeroConta));
        });
    };
    /*public adicionarContaPJ(numeroConta: PJ) {
        return this._contasPJ.push(numeroConta);
    }*/
    Gerente.prototype.removerContaPF = function (numeroConta) {
        var novoArray = [];
        for (var i = 0; i < this._contasPF.length; i++) {
            if (this._contasPF[i].numeroConta !== numeroConta) {
                novoArray.push(this._contasPF[i]);
            }
        }
        this._contasPF = novoArray;
    };
    Gerente.prototype.removerContaPJ = function (numeroConta) {
        var novoArray = [];
        for (var i = 0; i < this._contasPJ.length; i++) {
            if (this._contasPJ[i].numeroConta !== numeroConta) {
                novoArray.push(this._contasPJ[i]);
            }
        }
        this._contasPJ = novoArray;
    };
    return Gerente;
}());
exports.Gerente = Gerente;
