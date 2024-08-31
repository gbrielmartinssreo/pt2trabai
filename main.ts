import promptSync from 'prompt-sync'; // importa um módulo que captura entradas do usuário
import { PF } from "./PF";
import { PJ } from "./PJ";
import {Gerente} from "./Gerente";
import { log } from 'console';

const prompt = promptSync(); // cria uma instância do prompt-sync



//! Declaração de variáveis

const arraycontasPF: PF[] = [];
const arraycontasPJ: PJ[] = [];
const arrayGerentes: Gerente[] = [];
let valorTransferecia: number = 0;
let tipoConta: string = '\0';
let indiceConta: number = 0;
let indiceUsuarioMembro:number=0;

//! Criação de usuários

let user1: PJ = new PJ("Maotun", 12345678912345, 1234, 1, 850);
let user2: PJ = new PJ("JK Kennedy", 10203040506070, 4321, 2, 1345);
let user3: PF = new PF("Jucelino", 11223344556, 1111, 3, 31000);
let user4: PF = new PF("Adolfo", 99887766554, 2222, 4, 120);
let user5: Gerente = new Gerente("Paul Matos",5678 , 12345678,[],[]);
let user6: Gerente = new Gerente("Antoncio da silva",1234, 32345678,[],[]);

arraycontasPJ.push(user1, user2);
arraycontasPF.push(user3, user4);
arrayGerentes.push(user5, user6);
user5.adicionarContaPJ(user1);
user5.adicionarContaPF(user3);

//! Função login de membros
function acessoMembros() {
    do {
        let senha: number = parseInt(prompt("Digite sua senha: "));

        const procuraConta = (senha: number, arrayGerentes: Gerente[]): number => {
            return arrayGerentes.findIndex((gerente) => gerente.getSenha() === senha);
        };

        indiceUsuarioMembro = procuraConta(senha, arrayGerentes);

        if (indiceUsuarioMembro === -1) {
            console.log("Senha incorreta. Tente novamente.");
            continue;
        }
        break;
    } while (true);
}

//! Função de login de clientes

function login(): void {
    do {
        let usuario: number = parseInt(prompt("Digite o CPF ou CNPJ sem ponto ou traço: "));
        let tamanho: number = usuario.toString().length;

        if (tamanho == 11) {
            tipoConta = "PF";

            const procuraConta = (cpf: number, arraycontas: PF[]): number => {
                return arraycontas.findIndex((PF) => PF.getcpf() === cpf);
            };

            indiceConta = procuraConta(usuario, arraycontasPF);

            if (indiceConta === -1) {
                console.log("\nConta não existente\n");
                continue;
            } else {
                let inputSenha = parseInt(prompt("Senha da conta: "));
                if (arraycontasPF[indiceConta].getSenha() !== inputSenha) {
                    console.log("\nSenha incorreta, operação reiniciada\n");
                    continue;
                }
            }

        } else if (tamanho == 14) {
            tipoConta = "PJ";

            const procuraConta = (cnpj: number, arraycontas: PJ[]): number => {
                return arraycontas.findIndex((PJ) => PJ.getCNPJ() === cnpj);
            };

            indiceConta = procuraConta(usuario, arraycontasPJ);

            if (indiceConta === -1) {
                console.log("\nConta não existente\n");
                continue;
            } else {
                let inputSenha = parseInt(prompt("Senha da conta: "));
                if (arraycontasPJ[indiceConta].getSenha() !== inputSenha) {
                    console.log("\nSenha incorreta, operação reiniciada\n");
                    continue;
                }
            }
        } else {
            console.log("\nCPF ou CNPJ inválido\n");
            continue;
        }
        break;
    } while (true);
}

//*Função para adicionar conta ao gerente
function adicionarContaAoGerente() {
    let numberConta = +prompt("Digite o número da conta que deseja adicionar: ");
    let contaEncontrada = false;

    const procuraContaPF = (numConta: number, arraycontas: PF[]): number => {
        return arraycontas.findIndex((PF) => PF.getNumeroConta() === numConta);
    };

    const procuraContaPJ = (numConta: number, arraycontas: PJ[]): number => {
        return arraycontas.findIndex((PJ) => PJ.getNumeroConta() === numConta);
    };

    let indiceNumberPF = procuraContaPF(numberConta, arraycontasPF);
    if (indiceNumberPF !== -1) {
        arrayGerentes[indiceUsuarioMembro].adicionarContaPF(arraycontasPF[indiceNumberPF]);
        contaEncontrada = true;
    }

    let indiceNumberPJ = procuraContaPJ(numberConta, arraycontasPJ);
    if (indiceNumberPJ !== -1) {
        arrayGerentes[indiceUsuarioMembro].adicionarContaPJ(arraycontasPJ[indiceNumberPJ]);
        contaEncontrada = true;
    }

    if (!contaEncontrada) {
        console.log("\nConta não existente, operação reiniciada\n");
    } else {
        console.log("\nConta adicionada com sucesso!\n");
    }
}

//! Função para exibir extrato do cliente
// function exibirExtratoCliente() {
//     let numberConta = +prompt("Digite o número da conta para ver o extrato: ");
//     let contaEncontrada = false;

//     const procuraContaPF = (numConta: number, arraycontas: PF[]): number => {
//         return arraycontas.findIndex((PF) => PF.getNumeroConta() === numConta);
//     };

//     const procuraContaPJ = (numConta: number, arraycontas: PJ[]): number => {
//         return arraycontas.findIndex((PJ) => PJ.getNumeroConta() === numConta);
//     };

//     let indiceNumberPF = procuraContaPF(numberConta, arraycontasPF);
//     if (indiceNumberPF !== -1) {
//         arraycontasPF[indiceNumberPF].infoPF(arraycontasPF, indiceNumberPF);
//         contaEncontrada = true;
//     }

//     let indiceNumberPJ = procuraContaPJ(numberConta, arraycontasPJ);
//     if (indiceNumberPJ !== -1) {
//         arraycontasPJ[indiceNumberPJ].infoPJ(arraycontasPJ, indiceNumberPJ);
//         contaEncontrada = true;
//     }

//     if (!contaEncontrada) {
//         console.log("\nConta não existente\n");
//     }
// }

//! Função para remover conta
function removerConta() {
    let numberConta = +prompt("Digite o número da conta que deseja remover: ");
    let contaEncontrada = false;

    const procuraContaPF = (numConta: number, arraycontas: PF[]): number => {
        return arraycontas.findIndex((PF) => PF.getNumeroConta() === numConta);
    };

    const procuraContaPJ = (numConta: number, arraycontas: PJ[]): number => {
        return arraycontas.findIndex((PJ) => PJ.getNumeroConta() === numConta);
    };

    let indiceNumberPF = procuraContaPF(numberConta, arraycontasPF);
    if (indiceNumberPF !== -1) {
        arraycontasPF.splice(indiceNumberPF, 1);
        contaEncontrada = true;
    }

    let indiceNumberPJ = procuraContaPJ(numberConta, arraycontasPJ);
    if (indiceNumberPJ !== -1) {
        arraycontasPJ.splice(indiceNumberPJ, 1);
        contaEncontrada = true;
    }

    if (!contaEncontrada) {
        console.log("\nConta não existente\n");
    } else {
        console.log("\nConta removida com sucesso!\n");
    }
}

//! Função menu de membros
function menuMembros() {
    let escolha: number = -1;

    do {
        console.log("----------------------------\n" +
            "| 1 Adicionar conta aos cuidados\n" +
            // "| 2 Extrato de cliente\n" +
            "| 2 Listar clientes\n" +
            "| 4 Remover conta"+
            "| 0 Voltar\n" +
            "----------------------------");

        escolha = +prompt('Escolha: >> ');

        switch (escolha) {
            case 1:
                adicionarContaAoGerente();
                break;
            // case 2:
            //     exibirExtratoCliente();
            //     break;
            case 2:
                arrayGerentes[indiceUsuarioMembro].listarContasPJ();
                arrayGerentes[indiceUsuarioMembro].listarContasPF();
                break;
            case 4:
                removerConta();
            case 0:
                break;
            default:
                console.log("Opção inválida");
                break;
        }
    } while (escolha !== 0)
}


//! Função menu de clientes
function menuClientes() {

    let escolha: number = -1;
    do {
        console.log("----------------------------\n" +
            "| 1 Sacar dinheiro\n" +
            "| 2 Depositar\n" +
            "| 3 Saldo\n" +
            "| 4 Transferencia\n" +
            "| 5 Simular emprestimo\n" +
            "| 6 Obter dados do gerente"+
            "| 0 Voltar\n" +
            "----------------------------");

        escolha = +prompt('Escolha: >> ');

        switch (escolha) {
            case 1:
                //! Saque
                if (tipoConta === "PF") {
                    const valorSaque = parseFloat(prompt("Digite o valor do saque: "));
                    arraycontasPF[indiceConta].saque(arraycontasPF, indiceConta, valorSaque);
                } else if (tipoConta === "PJ") {
                    const valorSaque = parseFloat(prompt("Digite o valor do saque: "));
                    arraycontasPJ[indiceConta].saque(arraycontasPJ, indiceConta, valorSaque);
                }

                break;

            case 2:
                //! Depositar
                if (tipoConta === "PF") {
                    const valorDeposito = parseFloat(prompt("Digite o valor do deposito: "));
                    arraycontasPF[indiceConta].deposito(arraycontasPF, indiceConta, valorDeposito);
                } else if (tipoConta === "PJ") {
                    const valorDeposito = parseFloat(prompt("Digite o valor do deposito: "));
                    arraycontasPJ[indiceConta].deposito(arraycontasPJ, indiceConta, valorDeposito);
                }

                break;

            case 3:
                 
                 if(user1){
                    return user1.Info();
                 } else if(){
                    return
                 }
                 
                //! Extrato
                // if (tipoConta === "PF") {
                //     arraycontasPF[indiceConta].infoPF(arraycontasPF, indiceConta);
                // } else if (tipoConta === "PJ") {
                //     arraycontasPJ[indiceConta].infoPJ(arraycontasPJ, indiceConta);
                // }

                break;

            case 4:
                //! Transferência
                var indiceContaRecebe: number = 0;

                do {
                    indiceContaRecebe = 0;

                    let recebeTransferencia: number = +(prompt("Digite o pix da conta destinatária: "));
                    let tamanhoRecebeTransferencia: number = recebeTransferencia.toString().length;

                    if (tamanhoRecebeTransferencia === 11) {
                        const procuraConta = (cpf: number, arraycontas: PF[]): number => {
                            return arraycontas.findIndex((PF) => PF.getcpf() === cpf);
                        }
                        indiceContaRecebe = procuraConta(recebeTransferencia, arraycontasPF);

                        if (indiceContaRecebe === -1) {
                            console.log("\nConta não existente\n");
                            continue;
                        }

                        valorTransferecia = parseInt(prompt("Digite o valor: "));

                        if (valorTransferecia <= 0) {
                            console.log("\nValor não correspondente\n");
                        }

                        if (tipoConta === "PF") {
                            arraycontasPF[indiceConta].saque(arraycontasPF, indiceConta, valorTransferecia);
                        } else if (tipoConta === "PJ") {
                            arraycontasPJ[indiceConta].saque(arraycontasPJ, indiceConta, valorTransferecia);
                        }

                        arraycontasPF[indiceContaRecebe].deposito(arraycontasPF, indiceContaRecebe, valorTransferecia);

                    } else if (tamanhoRecebeTransferencia === 14) {
                        const procuraConta = (cnpj: number, arraycontas: PJ[]): number => {
                            return arraycontas.findIndex((PJ) => PJ.cnpj === cnpj);
                        }
                        indiceContaRecebe = procuraConta(recebeTransferencia, arraycontasPJ);

                        if (indiceContaRecebe === -1) {
                            console.log("\nConta não existente\n");
                            continue;
                        }

                        valorTransferecia = parseInt(prompt("Digite o valor: "));

                        if (valorTransferecia <= 0) {
                            console.log("\nValor não correspondente\n");
                        }

                        if (tipoConta === "PF") {
                            arraycontasPF[indiceConta].saque(arraycontasPF, indiceConta, valorTransferecia);
                        } else if (tipoConta === "PJ") {
                            arraycontasPJ[indiceConta].saque(arraycontasPJ, indiceConta, valorTransferecia);
                        }

                        arraycontasPJ[indiceContaRecebe].deposito(arraycontasPJ, indiceContaRecebe, valorTransferecia);

                    } else {
                        console.log("\nCPF ou CNPJ inválido\n");
                        continue;
                    }
                    break;

                } while (true);
                break;

            case 5:
                //! Simulação de empréstimo
                if (tipoConta === "PF") {
                    let parcelas: number;
                    let pedido: number;
                    pedido = +prompt("Digite o valor a ser simulado >> ");
                    parcelas = +prompt("Digite quantas parcelas >> ");
                    arraycontasPF[indiceConta].emprestimoPF(arraycontasPF, indiceConta, pedido, parcelas);

                } else if (tipoConta === "PJ") {
                    let parcelas: number;
                    let pedido: number;
                    pedido = +prompt("Digite o valor a ser simulado >> ");
                    parcelas = +prompt("Digite quantas parcelas >> ");
                    arraycontasPJ[indiceConta].emprestimoPJ(arraycontasPJ, indiceConta, pedido, parcelas);
                }


                break;

            case 6:
                //acesso de dados do gerente pelo cliente
                //! Acesso de dados do gerente pelo cliente
                let gerenteEncontrado = false;

                if (tipoConta === "PF") {
                    for (let gerente of arrayGerentes) {
                        for (let conta of gerente.getContasPF()) {
                            if (conta.getcpf() === arraycontasPF[indiceConta].getcpf()) {
                                console.log(`Nome do Gerente: ${gerente.getNome()}`);
                                console.log(`Telefone do Gerente: ${gerente.getNumeroContato()}`);
                                gerenteEncontrado = true;
                                break;
                            }
                        }
                        if (gerenteEncontrado) break;
                    }
                } else if (tipoConta === "PJ") {
                    for (let gerente of arrayGerentes) {
                        for (let conta of gerente.getContasPJ()) {
                            if (conta.getCNPJ() === arraycontasPJ[indiceConta].getCNPJ()) {
                                console.log(`Nome do Gerente: ${gerente.getNome()}`);
                                console.log(`Telefone do Gerente: ${gerente.getNumeroContato()}`);
                                gerenteEncontrado = true;
                                break;
                            }
                        }
                        if (gerenteEncontrado) break;
                    }
                }

                if (!gerenteEncontrado) {
                    console.log("Não há gerente responsável por esta conta.");
                }
                break;
            case 0:

                break;

            default:
                console.log("Opção inválida");
                break;
        }
    } while (escolha !== 0);
}




//! Menu principal

let escolha1: number;


do {

    console.log("-------------------------------------\n" +
        "|  Bem vindo ao Banco Aspili Getas  |\n" +
        "|  1 Login Cliente\n" +
        "|  2 Sou Gerente\n" +
        "|  0 Sair\n");

    escolha1 = +prompt("Digite a opção desejada: ");

    if (escolha1 === 1) {
        login();
        menuClientes();

    } else if (escolha1 === 2) {
        acessoMembros();
        menuMembros();
    } else if (escolha1 === 0) {
        process.exit(0); // encerra o processo com código de status 0
    } else {
        console.log("\nFizeste cagada colega\n");
    }
}while(true);