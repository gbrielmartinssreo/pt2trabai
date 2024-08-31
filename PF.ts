import { Conta } from "./Conta";
import { Iconta } from "./interface_conta";

class PF extends Conta implements Iconta {

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
        this._saldo -= valor;
    }

    deposito(valor: number){
        this._saldo += valor;
    }
// ---------------------------------------------------------------//


    info(){

    }


}