"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync")); // importa um módulo que captura entradas do usuário
const PF_1 = require("./PF");
const PJ_1 = require("./PJ");
const Gerente_1 = require("./Gerente");
const prompt = (0, prompt_sync_1.default)(); // cria uma instância do prompt-sync
//! Declaração de variáveis
const arraycontasPF = [];
const arraycontasPJ = [];
const arrayGerentes = [];
let valorTransferecia = 0;
let tipoConta = '\0';
let indiceConta = 0;
let indiceUsuarioMembro = 0;
//! Criação de usuários
let user1 = new PJ_1.PJ(12345678912345, "Rean Moreira", 1234, 1, 850, [], []);
let user2 = new PJ_1.PJ(54321987654321, "Rean da Silva Pinto", 1111, 2, 5, [], []);
let user3 = new PF_1.PF(11111111111111, "Rean Albuquerke da Silva Leita", 2222, 3, 120, [], []);
let user4 = new PF_1.PF(22222222222222, "Rean Da Vara(la ele)", 3333, 4, 0, [], []);
let user5 = new Gerente_1.Gerente("Paul Matos", 5678, 12345678, [], []);
let user6 = new Gerente_1.Gerente("Antoncio da silva", 1234, 32345678, [], []);
arraycontasPJ.push(user1, user2);
arraycontasPF.push(user3, user4);
arrayGerentes.push(user5, user6);
user5.adicionarContaPJ(user1);
user5.adicionarContaPF(user3);
//! Função login de membros
function acessoMembros() {
    do {
        let senha = parseInt(prompt("Digite sua senha: "));
        const procuraConta = (senha, arrayGerentes) => {
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
function login() {
    do {
        let usuario = parseInt(prompt("Digite o CPF ou CNPJ sem ponto ou traço: "));
        let tamanho = usuario.toString().length;
        if (tamanho == 11) {
            tipoConta = "PF";
            const procuraConta = (cpf, arraycontas) => {
                return arraycontas.findIndex((PF) => PF.getcpf() === cpf);
            };
            indiceConta = procuraConta(usuario, arraycontasPF);
            if (indiceConta === -1) {
                console.log("\nConta não existente\n");
                continue;
            }
            else {
                let inputSenha = parseInt(prompt("Senha da conta: "));
                if (arraycontasPF[indiceConta].getSenha() !== inputSenha) {
                    console.log("\nSenha incorreta, operação reiniciada\n");
                    continue;
                }
            }
        }
        else if (tamanho == 14) {
            tipoConta = "PJ";
            const procuraConta = (cnpj, arraycontas) => {
                return arraycontas.findIndex((PJ) => PJ.getcnpj() === cnpj);
            };
            indiceConta = procuraConta(usuario, arraycontasPJ);
            if (indiceConta === -1) {
                console.log("\nConta não existente\n");
                continue;
            }
            else {
                let inputSenha = parseInt(prompt("Senha da conta: "));
                if (arraycontasPJ[indiceConta].getSenha() !== inputSenha) {
                    console.log("\nSenha incorreta, operação reiniciada\n");
                    continue;
                }
            }
        }
        else {
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
    const procuraContaPF = (numConta, arraycontas) => {
        return arraycontas.findIndex((PF) => PF.getNumeroConta() === numConta);
    };
    const procuraContaPJ = (numConta, arraycontas) => {
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
    }
    else {
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
    const procuraContaPF = (numConta, arraycontas) => {
        return arraycontas.findIndex((PF) => PF.getNumeroConta() === numConta);
    };
    const procuraContaPJ = (numConta, arraycontas) => {
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
    }
    else {
        console.log("\nConta removida com sucesso!\n");
    }
}
//! Função menu de membros
function menuMembros() {
    let escolha = -1;
    do {
        console.log("----------------------------\n" +
            "| 1 Adicionar conta aos cuidados\n" +
            "| 2 Listar clientes\n" +
            "| 4 Remover conta" +
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
    } while (escolha !== 0);
}
//! Função menu de clientes
function menuClientes() {
    let escolha = -1;
    do {
        console.log("----------------------------\n" +
            "| 1 Sacar dinheiro\n" +
            "| 2 Depositar\n" +
            "| 3 Extrato\n" +
            "| 4 Transferencia\n" +
            "| 5 Simular emprestimo\n" +
            "| 6 Obter dados do gerente" +
            "| 0 Voltar\n" +
            "----------------------------");
        escolha = +prompt('Escolha: >> ');
        switch (escolha) {
            case 1:
                //! Saque
                if (tipoConta === "PF") {
                    const valorSaque = parseFloat(prompt("Digite o valor do saque: "));
                    arraycontasPF[indiceConta].saque(valorSaque);
                }
                else if (tipoConta === "PJ") {
                    const valorSaque = parseFloat(prompt("Digite o valor do saque: "));
                    arraycontasPJ[indiceConta].saque(valorSaque);
                }
                break;
            case 2:
                //! Depositar
                if (tipoConta === "PF") {
                    const valorDeposito = parseFloat(prompt("Digite o valor do deposito: "));
                    arraycontasPF[indiceConta].deposito(valorDeposito);
                }
                else if (tipoConta === "PJ") {
                    const valorDeposito = parseFloat(prompt("Digite o valor do deposito: "));
                    arraycontasPJ[indiceConta].deposito(valorDeposito);
                }
                break;
            case 3:
                // if(arraycontasPF[indiceConta]){
                //     arraycontasPF[indiceConta].Info();
                // } else { 
                //     arraycontasPJ[indiceConta].Info();
                // }
                if (user1) {
                    user1.Info();
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
                var indiceContaRecebe = 0;
                do {
                    indiceContaRecebe = 0;
                    let recebeTransferencia = +(prompt("Digite o pix da conta destinatária: "));
                    let tamanhoRecebeTransferencia = recebeTransferencia.toString().length;
                    if (tamanhoRecebeTransferencia === 11) {
                        const procuraConta = (cpf, arraycontas) => {
                            return arraycontas.findIndex((PF) => PF.getcpf() === cpf);
                        };
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
                            arraycontasPF[indiceConta].saque(valorTransferecia);
                        }
                        else if (tipoConta === "PJ") {
                            arraycontasPJ[indiceConta].saque(valorTransferecia);
                        }
                        arraycontasPF[indiceContaRecebe].deposito(valorTransferecia);
                    }
                    else if (tamanhoRecebeTransferencia === 14) {
                        const procuraConta = (cnpj, arraycontas) => {
                            return arraycontas.findIndex((PJ) => PJ.getcnpj() === cnpj);
                        };
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
                            arraycontasPF[indiceConta].saque(valorTransferecia);
                        }
                        else if (tipoConta === "PJ") {
                            arraycontasPJ[indiceConta].saque(valorTransferecia);
                        }
                        arraycontasPJ[indiceContaRecebe].deposito(valorTransferecia);
                    }
                    else {
                        console.log("\nCPF ou CNPJ inválido\n");
                        continue;
                    }
                    break;
                } while (true);
                break;
            case 5:
                //! Simulação de empréstimo
                // if (tipoConta === "PF") {
                //     let parcelas: number;
                //     let pedido: number;
                //     pedido = +prompt("Digite o valor a ser simulado >> ");
                //     parcelas = +prompt("Digite quantas parcelas >> ");
                //     arraycontasPF[indiceConta].emprestimoPF(arraycontasPF, indiceConta, pedido, parcelas);
                // } else if (tipoConta === "PJ") {
                //     let parcelas: number;
                //     let pedido: number;
                //     pedido = +prompt("Digite o valor a ser simulado >> ");
                //     parcelas = +prompt("Digite quantas parcelas >> ");
                //     arraycontasPJ[indiceConta].emprestimoPJ(arraycontasPJ, indiceConta, pedido, parcelas);
                // }
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
                        if (gerenteEncontrado)
                            break;
                    }
                }
                else if (tipoConta === "PJ") {
                    for (let gerente of arrayGerentes) {
                        for (let conta of gerente.getContasPJ()) {
                            if (conta.getcnpj() === arraycontasPJ[indiceConta].getcnpj()) {
                                console.log(`Nome do Gerente: ${gerente.getNome()}`);
                                console.log(`Telefone do Gerente: ${gerente.getNumeroContato()}`);
                                gerenteEncontrado = true;
                                break;
                            }
                        }
                        if (gerenteEncontrado)
                            break;
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
let escolha1;
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
    }
    else if (escolha1 === 2) {
        acessoMembros();
        menuMembros();
    }
    else if (escolha1 === 0) {
        process.exit(0); // encerra o processo com código de status 0
    }
    else {
        console.log("\nFizeste cagada colega\n");
    }
} while (true);
