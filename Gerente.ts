import { PJ } from "./PJ";
import { PF } from "./PF";   
import { Contas } from "./interface_conta.ts";

export class Gerente implements Contas{
    public _nome: string;
    public _senha: number;
    public _numeroConta:number;
    private _numeroContato: number;
    private _contasPF: PF[];
    private _contasPJ: PJ[];
    

    constructor(nome: string, senha: number, numeroConta:number,numeroContato: number,contasPJ:PJ[],contasPF:PF[]){
        this._nome = nome;
        this._senha = senha;
        this._numeroConta = numeroConta;
        this._numeroContato = numeroContato;
        this._contasPJ=contasPJ;
        this._contasPF=contasPF;
    }

    public getNome(): string{
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

    public getNumeroConta(): number {
        return this._numeroConta;
    }
    public setNumeroConta(numeroConta:number): void {
        this._numeroConta = numeroConta;
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
            console.log(`Nome: ${conta.nomeTitular}, CNPJ: ${conta.cnpj}, Número da Conta: ${conta.numeroConta}`);
        });
    }

    public listarContasPF(): void {
        console.log("Contas PF:");
        this._contasPF.forEach((conta) => {
            console.log(`Nome: ${conta.nomeTitular}, CPF: ${conta.cpf}, Número da Conta: ${conta.numeroConta}`);
        });
    }
    /*public adicionarContaPJ(numeroConta: PJ) {
        return this._contasPJ.push(numeroConta);
    }*/

    public removerContaPF(numeroConta: number): void {
        const novoArray: PF[] = [];
        for (let i = 0; i < this._contasPF.length; i++) {
            if (this._contasPF[i].numeroConta !== numeroConta) {
                novoArray.push(this._contasPF[i]);
            }
        }
        this._contasPF = novoArray;
    }

    public removerContaPJ(numeroConta: number): void {
        const novoArray: PJ[] = [];
        for (let i = 0; i < this._contasPJ.length; i++) {
            if (this._contasPJ[i].numeroConta !== numeroConta) {
                novoArray.push(this._contasPJ[i]);
            }
        }
        this._contasPJ = novoArray;
    }

}