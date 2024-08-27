import { PJ } from "./PJ";
import { PF } from "./PF";    

export class Gerente{
    private _nome: string;
    private _email: string;
    private _senha: number;
    private _numeroContato: number;
    private _contasPF: PF[];
    private _contasPJ: PJ[];
    

    constructor(nome: string, email: string, senha: number, numeroContato: number,contasPJ:PJ[],contasPF:PF[]){
        this._nome = nome;
        this._email = email;
        this._senha = senha;
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

    public getEmail(): string {
        return this._email;
    }

    public setEmail(email: string): void {
        this._email = email;
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

    getContasPF(): PF[] {
        return this._contasPF;
    }

    getContasPJ(): PJ[] {
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