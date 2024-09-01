import { Iconta } from "./interface_conta";

export abstract class Conta implements Iconta{

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

    getNome(): string {
        return this._nome;
    }
    setNome(nome: string): void {
        this._nome = nome;
    }

    getSenha(): number {
        return this._senha;
    }
    setSenha(senha: number): void {
        this._senha = senha;
    }

    getNumeroConta(): number {
        return this._numeroConta;
    }
    setNumeroConta(numeroConta: number): void {
        this._numeroConta = numeroConta;
    }

    protected get saldo(){
        return this._saldo;
    }

    //é vetor, tem que mexer dps
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

//------------------------------------------------------------------------------------------//

    Info(extratoDeposito: number[] = this._extratoDeposito, extratoSaque: number[] = this._extratoSaque){
        
        console.log(`Saldo da conta: ${this._saldo}`);

        console.log("Extrato:\n");

            for(let i = 0; i < this._extratoDeposito.length; i++){
                console.log(`Valor de deposito: ${this._extratoDeposito[i]}\n`);
            }
            for(let i = 0; i < this._extratoSaque.length; i++){
                console.log(`Valor de saque: ${this._extratoSaque[i]}\n`);
            }
        
    }

}
