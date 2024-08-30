"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PF = void 0;
var PF = /** @class */ (function () {
    function PF(nomeTitular, cpf, senha, numeroConta, saldo) {
        this._extratoSaque = [];
        this._extratoDeposito = [];
        this._nomeTitular = nomeTitular;
        this._cpf = cpf;
        this._senha = senha;
        this._numeroConta = numeroConta;
        this._saldo = saldo;
    }
    Object.defineProperty(PF.prototype, "nomeTitular", {
        get: function () {
            return this._nomeTitular;
        },
        set: function (nomeTitular) {
            this._nomeTitular = nomeTitular;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PF.prototype, "cpf", {
        get: function () {
            return this._cpf;
        },
        set: function (cpf) {
            this._cpf = cpf;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PF.prototype, "senha", {
        get: function () {
            return this._senha;
        },
        set: function (senha) {
            this._senha = senha;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PF.prototype, "numeroConta", {
        get: function () {
            return this._numeroConta;
        },
        set: function (numeroConta) {
            this._numeroConta = numeroConta;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PF.prototype, "saldo", {
        get: function () {
            return this._saldo;
        },
        set: function (saldo) {
            this._saldo = saldo;
        },
        enumerable: false,
        configurable: true
    });
    PF.prototype.saque = function (contasFisica, indice, valor) {
        if (contasFisica[indice].saldo >= valor) {
            contasFisica[indice].saldo -= valor;
            contasFisica[indice]._extratoSaque.push(valor);
        }
        else {
            console.log("\nSaldo insuficiente\n");
        }
    };
    PF.prototype.deposito = function (contasPF, indice, valor) {
        if (!isNaN(valor) && valor > 0 && contasPF[indice]) {
            contasPF[indice].saldo += valor;
            contasPF[indice]._extratoDeposito.push(valor);
        }
        else {
            console.log("Depósito Inválido");
        }
    };
    PF.prototype.infoPF = function (contasPF, indice) {
        console.log("-------------------");
        console.log("Nome: ".concat(contasPF[indice].nomeTitular));
        console.log("Saldo: ".concat(contasPF[indice].saldo));
        console.log("N\u00FAmero Conta: ".concat(contasPF[indice].numeroConta));
        console.log("Saídas Realizados:");
        contasPF[indice]._extratoSaque.forEach(function (valor, index) {
            console.log("Sa\u00EDda ".concat(index + 1, ": ").concat(valor));
        });
        console.log("Entradas Realizados:");
        contasPF[indice]._extratoDeposito.forEach(function (valor, index) {
            console.log("Entrada ".concat(index + 1, ": ").concat(valor));
        });
    };
    PF.prototype.emprestimoPF = function (contasPF, indice, pedido, parcelas) {
        if ((contasPF[indice].saldo) * 0.75 >= pedido) {
            pedido = pedido * 1.3;
            if (parcelas > 0) {
                pedido = pedido * (parcelas * 1.05);
                var val = pedido / parcelas;
                console.log("Numero de parcelas {".concat(parcelas, "}. Valor de cada parcela: ").concat(val));
            }
            console.log("O empr\u00E9stimo totalizar\u00E1: ".concat(pedido));
        }
        else {
            console.log("Provavel não aceitação de sua proposta;\n");
            console.log("Motivo: saldo em conta muito baixo.");
        }
    };
    return PF;
}());
exports.PF = PF;
