<<<<<<< HEAD
export class PF {
    private _nomeTitular: string;
=======
import { Conta } from "./Conta";
import { Iconta } from "./interface_conta";

class PF extends Conta implements Iconta {

>>>>>>> de03e672f551a11c3e9e9dd88b28d24254ce7cfe
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


    info(){

    }


}