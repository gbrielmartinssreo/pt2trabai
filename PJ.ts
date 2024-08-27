export class PJ {
    private _nomeTitular: string;
    private _cnpj: number;
    private _senha: number;
    private _numeroConta: number;
    private _saldo: number;
    private _extratoSaque: number[] = [];
    private _extratoDeposito: number[] = [];

    constructor(nomeTitular: string, cnpj: number, senha: number, numeroConta: number, saldo: number) {
        this._nomeTitular = nomeTitular;
        this._cnpj = cnpj;
        this._senha = senha;
        this._numeroConta = numeroConta;
        this._saldo = saldo;
    }

    get nomeTitular() {
        return this._nomeTitular;
    }

    set nomeTitular(nomeTitular: string) {
        this._nomeTitular = nomeTitular;
    }

    get cnpj() {
        return this._cnpj;
    }
    
    set cnpj(cnpj: number) {
        this._cnpj = cnpj;
    }

    get senha() {
        return this._senha;
    }

    set senha(senha: number) {
        this._senha = senha;
    }

    get numeroConta() {
        return this._numeroConta;
    }

    set numeroConta(numeroConta: number) {
        this._numeroConta = numeroConta;
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(saldo: number) {
        this._saldo = saldo;
    }

    public saque(contasJuridicas: PJ[], indice: number, valor: number) {
        if (contasJuridicas[indice].saldo >= valor) {
            contasJuridicas[indice].saldo -= valor;
            contasJuridicas[indice]._extratoSaque.push(valor);
        } else {
            console.log("\nSaldo insuficiente\n");
        }
    }

    public deposito(contasPJ: PJ[], indice: number, valor: number) {
        if (!isNaN(valor) && valor > 0 && contasPJ[indice]) {
            contasPJ[indice].saldo += valor;
            contasPJ[indice]._extratoDeposito.push(valor);
        } else {
            console.log("Depósito Inválido");
        }
    }

    public infoPJ(contasPJ: PJ[], indice: number) {
        console.log("-------------------");
        console.log(`Nome: ${contasPJ[indice].nomeTitular}`);
        console.log(`Saldo: ${contasPJ[indice].saldo}`);
        console.log(`Número Conta: ${contasPJ[indice].numeroConta}`);

        console.log("Saídas Realizados:");
        contasPJ[indice]._extratoSaque.forEach((valor, index) => {
            console.log(`Saída ${index + 1}: ${valor}`);
        });

        console.log("Entradas Realizados:");
        contasPJ[indice]._extratoDeposito.forEach((valor, index) => {
            console.log(`Entrada ${index + 1}: ${valor}`);
        });
    }

    public emprestimoPJ(contasPJ: PJ[], indice: number, pedido: number, parcelas: number): void {
            
        if ((contasPJ[indice].saldo) * 0.85 >= pedido) {
            pedido = pedido * 1.45;
            if (parcelas > 0) {
                pedido = pedido * (parcelas * 1.10);
                let val = pedido/parcelas;
                console.log(`Numero de parcelas {${parcelas}}. Valor de cada parcela: ${val}`);
            }
        console.log(`O empréstimo totalizará: ${pedido}`);
        } else {
            console.log("Provavel não aceitação de sua proposta;\n");
            console.log("Motivo: saldo em conta muito baixo.");
        }
    }

    
    
}

export {};