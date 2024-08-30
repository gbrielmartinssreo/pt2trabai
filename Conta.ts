import { Interface } from "readline"; // QUE ISSO?

export abstract class Conta implements Interface{

    //vem da interface
    public _nome: string;
    public _senha: number;
    public _numeroConta: number;

    //é daqui mesmo
    protected _saldo: number;
    protected _extratoSaque: number[];
    protected _extratoDeposito: number[];

    constructor(nome: string,senha: number,numeroConta: number,saldo: number, extratoSaque: number[], extratoDeposito: number[]){

        this._nome = nome;
        this._senha = senha;
        this._numeroConta = numeroConta;
        this._saldo = saldo;
        this._extratoSaque = extratoSaque;
        this._extratoDeposito = extratoDeposito;
    }

    protected get saldo(){
        return this._saldo;
    }

    protected get extratoSaque(){
        return this._extratoSaque;
    }

    protected get extratoDeposito(){
        return this._extratoDeposito;
    }

    protected set saldo(saldo: number){
        this._saldo = saldo;
    }

    protected set extratoSaque(extratoSaque: number[]){
        this._extratoSaque = extratoSaque;
    }

    protected set extratoDeposito(extratoDeposito: number[]){
        this._extratoDeposito = extratoDeposito;
    }

    protected abstract saque(numeroConta: number, saldo: number): void;

    protected abstract deposito(numeroConta: number, saldo: number): void;

}