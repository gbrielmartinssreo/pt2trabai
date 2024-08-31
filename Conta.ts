import { Iconta } from "./interface_conta";

export abstract class Conta implements Iconta {
    public _nome: string;
    public _senha: number;
    public _numeroConta: number;
    protected _saldo: number;

    constructor(nome: string, senha: number, numeroConta: number, saldo: number) {
        this._nome = nome;
        this._senha = senha;
        this._numeroConta = numeroConta;
        this._saldo = saldo;
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

    protected get saldo() {
        return this._saldo;
    }

    protected set saldo(saldo: number) {
        this._saldo = saldo;
    }

    // Métodos abstratos para serem implementados pelas classes filhas
    protected abstract saque(valor: number): void;
    protected abstract deposito(valor: number): void;

    // Método Info para exibir os dados básicos da conta
    Info(): void {
        console.log(`Nome: ${this._nome}`);
        console.log(`Número da Conta: ${this._numeroConta}`);
        console.log(`Saldo: ${this._saldo}`);
    }
}
