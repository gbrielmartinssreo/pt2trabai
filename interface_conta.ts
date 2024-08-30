
export interface Contas{
    _nome:string;
    _senha:number;
    _numeroConta:number;

    getNome():string
    setNome(nome:string):void

    getSenha():number
    setSenha(senha:number):void

    getNumeroConta():number
    setNumeroConta(numeroConta:number):void

    Info(): void;
}