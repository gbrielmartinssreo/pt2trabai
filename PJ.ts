import { Conta } from "./Conta";
import { Interface } from "readline";
import { Iconta } from "./interface_conta";

export class PJ extends Conta implements Iconta{

    private _cnpj: number

    constructor(
        cnpj: number,
        nome: string, 
        senha: number, 
        numeroConta: number, 
        saldo: number,
        extratoSaque: number[],
        extratoDeposito: number[]
    ) {
        super(nome, senha, numeroConta, saldo, extratoSaque, extratoDeposito)
        this._cnpj = cnpj
    }


    saque(valor: number){
        this._saldo -= valor
    }

    deposito(valor: number){
        this._saldo += valor
    }


}

export {};