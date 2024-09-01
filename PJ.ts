import { Conta } from "./Conta";
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

    getcpf(){
        return this._cnpj;
    }

    setcpf(cnpj: number){
        return this._cnpj = cnpj;
    }

// ---------------------------------------------------------------//
    saque(valor: number){
        let i: number = 0;

        this._saldo -= valor;
        this._extratoSaque[i] = valor;
        i++;
    }

    deposito(valor: number){
        let i: number = 0;

        this._saldo += valor;
        this._extratoDeposito[i] = valor;
        i++;
    }
// ---------------------------------------------------------------//

}