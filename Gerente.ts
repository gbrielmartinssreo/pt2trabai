import { PJ } from "./PJ";
import { PF } from "./PF.ts";
import { Iconta } from "./interface_conta.ts";

export class Gerente implements Iconta {
    public _nome: string;
    public _senha: number;
    private _numeroContato: number;
    private _contasPF: PF[];
    private _contasPJ: PJ[];

    constructor(nome: string, senha: number, numeroContato: number, contasPJ: PJ[], contasPF: PF[]) {
        this._nome = nome;
        this._senha = senha;
        this._numeroContato = numeroContato;
        this._contasPJ = contasPJ;
        this._contasPF = contasPF;
    }

    public getNome(): string {
        return this._nome;
    }

    public setNome(nome: string): void {
        this._nome = nome;
    }

    public getSenha(): number {
        return this._senha;
    }

    public setSenha(senha: number): void {
        this._senha = senha;
    }

    public getNumeroContato(): number {
        return this._numeroContato;
    }

    public setNumeroContato(numeroContato: number): void {
        this._numeroContato = numeroContato;
    }

    public getContasPF(): PF[] {
        return this._contasPF;
    }

    public getContasPJ(): PJ[] {
        return this._contasPJ;
    }

    public adicionarContaPF(conta: PF) {
        this._contasPF.push(conta);
    }

    public adicionarContaPJ(conta: PJ) {
        this._contasPJ.push(conta);
    }

    public listarContasPJ(): void {
        console.log("Contas PJ:");
        this._contasPJ.forEach((conta) => {
            console.log(`Nome: ${conta._nome}, CNPJ: ${conta.getCNPJ()}, Número da Conta: ${conta._numeroConta}`);
        });
    }

    public listarContasPF(): void {
        console.log("Contas PF:");
        this._contasPF.forEach((conta) => {
            console.log(`Nome: ${conta._nome}, CPF: ${conta.getcpf()}, Número da Conta: ${conta._numeroConta}`);
        });
    }

    public removerContaPF(numeroConta: number): void {
        const novoArray: PF[] = this._contasPF.filter(conta => conta._numeroConta !== numeroConta);
        this._contasPF = novoArray;
    }

    public removerContaPJ(numeroConta: number): void {
        const novoArray: PJ[] = this._contasPJ.filter(conta => conta._numeroConta !== numeroConta);
        this._contasPJ = novoArray;
    }

    Info(): void {
        console.log(`Nome: ${this._nome}`);
        console.log(`Número de Contato: ${this._numeroContato}`);
        console.log("Contas PJ:");
        this.listarContasPJ();
        console.log("Contas PF:");
        this.listarContasPF();
    }
}
