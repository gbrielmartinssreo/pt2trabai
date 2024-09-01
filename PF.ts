import { Conta } from "./Conta";
import { Iconta } from "./interface_conta";

export class PF extends Conta implements Iconta {

    private _cpf: number;

    constructor(cpf: number, nome: string,senha: number,numeroConta: number,saldo: number, extratoSaque: number[], extratoDeposito: number[]){

        super(nome, senha, numeroConta, saldo, extratoSaque, extratoDeposito);
        this._cpf = cpf;
    }

    getcpf(){
        return this._cpf;
    }

    setcpf(cpf: number){
        return this._cpf = cpf;
    }

// ---------------------------------------------------------------//
saque(valor: number){
    if(!isNaN(valor) && valor <= this.saldo ){
        this._saldo += valor;
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
