export class PF {
    private _nomeTitular: string;
    private _cpf: number;
    private _senha: number;
    private _numeroConta: number;
    private _saldo: number;
    private _extratoSaque: number[] = [];
    private _extratoDeposito: number[] = [];

    constructor(nomeTitular: string, cpf: number, senha: number, numeroConta: number, saldo: number) {
        this._nomeTitular = nomeTitular;
        this._cpf = cpf;
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

    get cpf() {
        return this._cpf;
    }

    set cpf(cpf: number) {
        this._cpf = cpf;
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

    public saque(contasFisica: PF[], indice: number, valor: number) {
        if (contasFisica[indice].saldo >= valor) {
            contasFisica[indice].saldo -= valor;
            contasFisica[indice]._extratoSaque.push(valor);
        } else {
            console.log("\nSaldo insuficiente\n");
        }
    }

    public deposito(contasPF: PF[], indice: number, valor: number) {
        if (!isNaN(valor) && valor > 0 && contasPF[indice]) {
            contasPF[indice].saldo += valor;
            contasPF[indice]._extratoDeposito.push(valor);
        } else {
            console.log("Depósito Inválido");
        }
    }


    public infoPF(contasPF: PF[], indice: number) {
        console.log("-------------------");
        console.log(`Nome: ${contasPF[indice].nomeTitular}`);
        console.log(`Saldo: ${contasPF[indice].saldo}`);
        console.log(`Número Conta: ${contasPF[indice].numeroConta}`);

        console.log("Saídas Realizados:");
        contasPF[indice]._extratoSaque.forEach((valor, index) => {
            console.log(`Saída ${index + 1}: ${valor}`);
        });

        console.log("Entradas Realizados:");
        contasPF[indice]._extratoDeposito.forEach((valor, index) => {
            console.log(`Entrada ${index + 1}: ${valor}`);
        });
    }

    public emprestimoPF(contasPF: PF[], indice: number, pedido: number, parcelas: number): void {
            
        if ((contasPF[indice].saldo) * 0.75 >= pedido) {
            pedido = pedido * 1.3;
            if (parcelas > 0) {
                pedido = pedido * (parcelas * 1.05);
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