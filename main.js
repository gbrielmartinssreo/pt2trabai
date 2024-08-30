"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var prompt_sync_1 = __importDefault(require("prompt-sync")); // importa um módulo que captura entradas do usuário
var PF_1 = require("./PF");
var PJ_1 = require("./PJ");
var Gerente_1 = require("./Gerente");
var prompt = (0, prompt_sync_1.default)(); // cria uma instância do prompt-sync
//! Declaração de variáveis
var arraycontasPF = [];
var arraycontasPJ = [];
var arrayGerentes = [];
var valorTransferecia = 0;
var tipoConta = '\0';
var indiceConta = 0;
var indiceUsuarioMembro = 0;
//! Criação de usuários
var user1 = new PJ_1.PJ("Maotun", 12345678912345, 1234, 1, 850);
var user2 = new PJ_1.PJ("JK Kennedy", 10203040506070, 4321, 2, 1345);
var user3 = new PF_1.PF("Jucelino", 11223344556, 1111, 3, 31000);
var user4 = new PF_1.PF("Adolfo", 99887766554, 2222, 4, 120);
var user5 = new Gerente_1.Gerente("Paul Matos", 5678, 12345678, 40028922, [], []);
var user6 = new Gerente_1.Gerente("Antoncio da silva", 1234, 32345678, 40028923, [], []);
arraycontasPJ.push(user1, user2);
arraycontasPF.push(user3, user4);
arrayGerentes.push(user5, user6);
user5.adicionarContaPJ(user1);
user5.adicionarContaPF(user3);
//! Função login de membros
function acessoMembros() {
    do {
        var senha = parseInt(prompt("Digite sua senha: "));
        var procuraConta = function (senha, arrayGerentes) {
            return arrayGerentes.findIndex(function (gerente) { return gerente.getSenha() === senha; });
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
        var usuario = parseInt(prompt("Digite o CPF ou CNPJ sem ponto ou traço: "));
        var tamanho = usuario.toString().length;
        if (tamanho == 11) {
            tipoConta = "PF";
            var procuraConta = function (cpf, arraycontas) {
                return arraycontas.findIndex(function (PF) { return PF.cpf === cpf; });
            };
            indiceConta = procuraConta(usuario, arraycontasPF);
            if (indiceConta === -1) {
                console.log("\nConta não existente\n");
                continue;
            }
            else {
                var inputSenha = parseInt(prompt("Senha da conta: "));
                if (arraycontasPF[indiceConta].senha !== inputSenha) {
                    console.log("\nSenha incorreta, operação reiniciada\n");
                    continue;
                }
            }
        }
        else if (tamanho == 14) {
            tipoConta = "PJ";
            var procuraConta = function (cnpj, arraycontas) {
                return arraycontas.findIndex(function (PJ) { return PJ.cnpj === cnpj; });
            };
            indiceConta = procuraConta(usuario, arraycontasPJ);
            if (indiceConta === -1) {
                console.log("\nConta não existente\n");
                continue;
            }
            else {
                var inputSenha = parseInt(prompt("Senha da conta: "));
                if (arraycontasPJ[indiceConta].senha !== inputSenha) {
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
    var numberConta = +prompt("Digite o número da conta que deseja adicionar: ");
    var contaEncontrada = false;
    var procuraContaPF = function (numConta, arraycontas) {
        return arraycontas.findIndex(function (PF) { return PF.numeroConta === numConta; });
    };
    var procuraContaPJ = function (numConta, arraycontas) {
        return arraycontas.findIndex(function (PJ) { return PJ.numeroConta === numConta; });
    };
    var indiceNumberPF = procuraContaPF(numberConta, arraycontasPF);
    if (indiceNumberPF !== -1) {
        arrayGerentes[indiceUsuarioMembro].adicionarContaPF(arraycontasPF[indiceNumberPF]);
        contaEncontrada = true;
    }
    var indiceNumberPJ = procuraContaPJ(numberConta, arraycontasPJ);
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
function exibirExtratoCliente() {
    var numberConta = +prompt("Digite o número da conta para ver o extrato: ");
    var contaEncontrada = false;
    var procuraContaPF = function (numConta, arraycontas) {
        return arraycontas.findIndex(function (PF) { return PF.numeroConta === numConta; });
    };
    var procuraContaPJ = function (numConta, arraycontas) {
        return arraycontas.findIndex(function (PJ) { return PJ.numeroConta === numConta; });
    };
    var indiceNumberPF = procuraContaPF(numberConta, arraycontasPF);
    if (indiceNumberPF !== -1) {
        arraycontasPF[indiceNumberPF].infoPF(arraycontasPF, indiceNumberPF);
        contaEncontrada = true;
    }
    var indiceNumberPJ = procuraContaPJ(numberConta, arraycontasPJ);
    if (indiceNumberPJ !== -1) {
        arraycontasPJ[indiceNumberPJ].infoPJ(arraycontasPJ, indiceNumberPJ);
        contaEncontrada = true;
    }
    if (!contaEncontrada) {
        console.log("\nConta não existente\n");
    }
}
//! Função para remover conta
function removerConta() {
    var numberConta = +prompt("Digite o número da conta que deseja remover: ");
    var contaEncontrada = false;
    var procuraContaPF = function (numConta, arraycontas) {
        return arraycontas.findIndex(function (PF) { return PF.numeroConta === numConta; });
    };
    var procuraContaPJ = function (numConta, arraycontas) {
        return arraycontas.findIndex(function (PJ) { return PJ.numeroConta === numConta; });
    };
    var indiceNumberPF = procuraContaPF(numberConta, arraycontasPF);
    if (indiceNumberPF !== -1) {
        arraycontasPF.splice(indiceNumberPF, 1);
        contaEncontrada = true;
    }
    var indiceNumberPJ = procuraContaPJ(numberConta, arraycontasPJ);
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
    var escolha = -1;
    do {
        console.log("----------------------------\n" +
            "| 1 Adicionar conta aos cuidados\n" +
            "| 2 Extrato de cliente\n" +
            "| 3 Listar clientes\n" +
            "| 4 Remover conta" +
            "| 0 Voltar\n" +
            "----------------------------");
        escolha = +prompt('Escolha: >> ');
        switch (escolha) {
            case 1:
                adicionarContaAoGerente();
                break;
            case 2:
                exibirExtratoCliente();
                break;
            case 3:
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
    var escolha = -1;
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
                    var valorSaque = parseFloat(prompt("Digite o valor do saque: "));
                    arraycontasPF[indiceConta].saque(arraycontasPF, indiceConta, valorSaque);
                }
                else if (tipoConta === "PJ") {
                    var valorSaque = parseFloat(prompt("Digite o valor do saque: "));
                    arraycontasPJ[indiceConta].saque(arraycontasPJ, indiceConta, valorSaque);
                }
                break;
            case 2:
                //! Depositar
                if (tipoConta === "PF") {
                    var valorDeposito = parseFloat(prompt("Digite o valor do deposito: "));
                    arraycontasPF[indiceConta].deposito(arraycontasPF, indiceConta, valorDeposito);
                }
                else if (tipoConta === "PJ") {
                    var valorDeposito = parseFloat(prompt("Digite o valor do deposito: "));
                    arraycontasPJ[indiceConta].deposito(arraycontasPJ, indiceConta, valorDeposito);
                }
                break;
            case 3:
                //! Extrato
                if (tipoConta === "PF") {
                    arraycontasPF[indiceConta].infoPF(arraycontasPF, indiceConta);
                }
                else if (tipoConta === "PJ") {
                    arraycontasPJ[indiceConta].infoPJ(arraycontasPJ, indiceConta);
                }
                break;
            case 4:
                //! Transferência
                var indiceContaRecebe = 0;
                do {
                    indiceContaRecebe = 0;
                    var recebeTransferencia = +(prompt("Digite o pix da conta destinatária: "));
                    var tamanhoRecebeTransferencia = recebeTransferencia.toString().length;
                    if (tamanhoRecebeTransferencia === 11) {
                        var procuraConta = function (cpf, arraycontas) {
                            return arraycontas.findIndex(function (PF) { return PF.cpf === cpf; });
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
                            arraycontasPF[indiceConta].saque(arraycontasPF, indiceConta, valorTransferecia);
                        }
                        else if (tipoConta === "PJ") {
                            arraycontasPJ[indiceConta].saque(arraycontasPJ, indiceConta, valorTransferecia);
                        }
                        arraycontasPF[indiceContaRecebe].deposito(arraycontasPF, indiceContaRecebe, valorTransferecia);
                    }
                    else if (tamanhoRecebeTransferencia === 14) {
                        var procuraConta = function (cnpj, arraycontas) {
                            return arraycontas.findIndex(function (PJ) { return PJ.cnpj === cnpj; });
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
                            arraycontasPF[indiceConta].saque(arraycontasPF, indiceConta, valorTransferecia);
                        }
                        else if (tipoConta === "PJ") {
                            arraycontasPJ[indiceConta].saque(arraycontasPJ, indiceConta, valorTransferecia);
                        }
                        arraycontasPJ[indiceContaRecebe].deposito(arraycontasPJ, indiceContaRecebe, valorTransferecia);
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
                if (tipoConta === "PF") {
                    var parcelas = void 0;
                    var pedido = void 0;
                    pedido = +prompt("Digite o valor a ser simulado >> ");
                    parcelas = +prompt("Digite quantas parcelas >> ");
                    arraycontasPF[indiceConta].emprestimoPF(arraycontasPF, indiceConta, pedido, parcelas);
                }
                else if (tipoConta === "PJ") {
                    var parcelas = void 0;
                    var pedido = void 0;
                    pedido = +prompt("Digite o valor a ser simulado >> ");
                    parcelas = +prompt("Digite quantas parcelas >> ");
                    arraycontasPJ[indiceConta].emprestimoPJ(arraycontasPJ, indiceConta, pedido, parcelas);
                }
                break;
            case 6:
                //acesso de dados do gerente pelo cliente
                //! Acesso de dados do gerente pelo cliente
                var gerenteEncontrado = false;
                if (tipoConta === "PF") {
                    for (var _i = 0, arrayGerentes_1 = arrayGerentes; _i < arrayGerentes_1.length; _i++) {
                        var gerente = arrayGerentes_1[_i];
                        for (var _a = 0, _b = gerente.getContasPF(); _a < _b.length; _a++) {
                            var conta = _b[_a];
                            if (conta.cpf === arraycontasPF[indiceConta].cpf) {
                                console.log("Nome do Gerente: ".concat(gerente.getNome()));
                                console.log("Telefone do Gerente: ".concat(gerente.getNumeroContato()));
                                gerenteEncontrado = true;
                                break;
                            }
                        }
                        if (gerenteEncontrado)
                            break;
                    }
                }
                else if (tipoConta === "PJ") {
                    for (var _c = 0, arrayGerentes_2 = arrayGerentes; _c < arrayGerentes_2.length; _c++) {
                        var gerente = arrayGerentes_2[_c];
                        for (var _d = 0, _e = gerente.getContasPJ(); _d < _e.length; _d++) {
                            var conta = _e[_d];
                            if (conta.cnpj === arraycontasPJ[indiceConta].cnpj) {
                                console.log("Nome do Gerente: ".concat(gerente.getNome()));
                                console.log("Telefone do Gerente: ".concat(gerente.getNumeroContato()));
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
var escolha1;
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
