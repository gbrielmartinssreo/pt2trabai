
export interface Iconta{
    _nome:string;
    _senha:number;

    getNome():string
    setNome(nome:string):void

    getSenha():number
    setSenha(senha:number):void

    Info(param1?: number[],param2?: number[]):void
}