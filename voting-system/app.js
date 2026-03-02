import * as readline from "readline"
import { criarCandidatos } from "./candidate.js"
import { criarGestorDeVotos, registarVoto } from "./voteManager.js"
import { mostrarResultados, determinarVencedor } from "./results.js"

// Cria a interface de leitura/escrita no terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function pergunta(texto) {
    return new Promise(resolve => rl.question(texto, resolve))
}

// Função principal de cada eleição — recebe o nome da categoria (ex: "Associação de Estudantes")
async function executarEleicao(nomeCategoria) {

    console.log("\n=== Eleição: " + nomeCategoria + " ===")

    const nomes = []

    // Pede o nome de 3 candidatos ao utilizador
    for (let i = 1; i <= 3; i++) {
        const nome = await pergunta("Nome do candidato " + i + ": ")
        nomes.push(nome)
    }

    // Cria o array de votos (iniciado a 0 para cada candidato)
    const votos = criarCandidatos(nomes)

    // Cria a lista de eleitores que já votaram (para evitar votos duplicados)
    const eleitores = criarGestorDeVotos()

    // Mostra a lista de candidatos disponíveis
    console.log("\nCandidatos:")
    for (let i = 0; i < nomes.length; i++) {
        console.log("  " + (i + 1) + ". " + nomes[i])
    }

    console.log("\nDigite 0 para encerrar a votação.\n")

    let contador = 1

    // Ciclo de votação — continua até o utilizador digitar "0"
    while (true) {

        const nomeEleitor = await pergunta("Nome do votante " + contador + ": ")

        // Se digitar "0", termina a votação
        if (nomeEleitor === "0") break

        // Mostra os candidatos antes de pedir a escolha
        console.log("Candidatos disponíveis:")
        for (let i = 0; i < nomes.length; i++) {
            console.log("  " + (i + 1) + ". " + nomes[i])
        }

        const escolhaCandidato = await pergunta("Número do candidato: ")

        // Se digitar "0" aqui, também encerra a votação
        if (escolhaCandidato === "0") break

        // Converte a escolha para índice do array (começa em 0)
        const indiceCandidato = parseInt(escolhaCandidato) - 1

        // Valida se o número inserido é válido
        if (isNaN(indiceCandidato) || indiceCandidato < 0 || indiceCandidato >= nomes.length) {
            console.log("Número inválido, tente novamente.")
            continue
        }

        // Regista o voto do eleitor no candidato escolhido
        registarVoto(eleitores, nomes, votos, nomeEleitor, nomes[indiceCandidato])

        contador++
    }

    // Mostra os resultados e o vencedor no final da eleição
    mostrarResultados(nomes, votos)
    determinarVencedor(nomes, votos)
}

// Função de entrada do programa
async function main() {

    // Lista das 3 eleições disponíveis
    const eleicoes = [
        "Associação de Estudantes",
        "Representante de Turma",
        "Orçamento Participativo Escolar"
    ]

    const ordem = [] // Guarda a ordem escolhida pelo utilizador

    console.log("\n=== BEM VINDO AO SISTEMA DE VOTAÇÃO ===")
    console.log("\nEscolha a ordem das eleições:")

    // Pede ao utilizador para ordenar as 3 eleições antes de começar
    while (ordem.length < eleicoes.length) {
        console.log("\nEleições disponíveis:")

        // Mostra apenas as eleições que ainda não foram escolhidas
        for (let i = 0; i < eleicoes.length; i++) {
            if (!ordem.includes(i)) {
                console.log("  " + (i + 1) + ". " + eleicoes[i])
            }
        }

        const escolha = await pergunta("Escolha a próxima eleição (número): ")
        const indice = parseInt(escolha) - 1

        // Valida se o número é válido
        if (isNaN(indice) || indice < 0 || indice >= eleicoes.length) {
            console.log("Opção inválida, tente novamente.")
            continue
        }

        // Impede que a mesma eleição seja escolhida duas vezes
        if (ordem.includes(indice)) {
            console.log("Essa eleição já foi escolhida.")
            continue
        }

        ordem.push(indice)
        console.log("✔ " + eleicoes[indice] + " adicionada à ordem.")
    }

    // Mostra a ordem final definida pelo utilizador
    console.log("\nOrdem das eleições:")
    for (let i = 0; i < ordem.length; i++) {
        console.log("  " + (i + 1) + ". " + eleicoes[ordem[i]])
    }

    // Executa cada eleição na ordem definida
    for (let i = 0; i < ordem.length; i++) {
        await executarEleicao(eleicoes[ordem[i]])
    }

    rl.close() // Fecha a interface do terminal no fim
}

// Inicia o programa
main()
