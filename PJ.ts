import { Conta } from "./Conta";
import { Iconta } from "./interface_conta";

export class PJ extends Conta implements Iconta {

    private _cnpj: number;
    private _extratoSaque: number[] = [];
    private _extratoDeposito: number[] = [];

    constructor(
        nome: string,
        cnpj: number, 
        senha: number, 
        numeroConta: number, 
        saldo: number
    ) {
        super(nome, senha, numeroConta, saldo);
        this._cnpj = cnpj;
    }

    getCNPJ() {
        return this._cnpj;
    }

    setCNPJ(cnpj: number) {
        this._cnpj = cnpj;
    }

    saque(valor: number) {
        if (valor > 0 && valor <= this._saldo) {
            this._saldo -= valor;
            this._extratoSaque.push(valor);
            console.log(`Saque de R$${valor} realizado com sucesso.`);
        } else {
            console.log("Saldo insuficiente ou valor inválido.");
        }
    }

    deposito(valor: number) {
        if (!isNaN(valor) && valor > 0) {
            this._saldo += valor;
            this._extratoDeposito.push(valor);
            console.log(`Depósito de R$${valor} realizado com sucesso.`);
        } else {
            console.log("Valor de depósito inválido.");
        }
    }

    Info() {
        console.log("...................");
        super.Info();
        console.log(`CNPJ: ${this._cnpj}`);
    }

    extrato() {
        console.log("Extrato de Saques:", this._extratoSaque);
        console.log("Extrato de Depósitos:", this._extratoDeposito);
    }
}
