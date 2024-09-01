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

    getcnpj(){
        return this._cnpj;
    }

    setcnpj(cnpj: number){
        return this._cnpj = cnpj;
    }

// ---------------------------------------------------------------//
    saque(valor: number){
        if(!isNaN(valor) && valor <= this.saldo ){
            this._saldo -= valor;
            this._extratoSaque.push(valor);
        } else {
            console.log("Deu errado, meu bacano. Vai ter q fz tudo dnv XD\n PFVR Renan, melhore (te amo) ");
        }
    }

    deposito(valor: number){
        if(!isNaN(valor) && valor > 0 ){
            this._saldo += valor;
            this._extratoDeposito.push(valor);
        } else {
            console.log("Deu errado, meu bacano. Vai ter q fz tudo dnv XD\n PFVR Renan, melhore (te amo) ");
        }
    }
    
// ---------------------------------------------------------------//


}