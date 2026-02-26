import * as readline from "readline"
import { createCandidates } from "./candidate.js"
import { createVoteManager, registerVote } from "./voteManager.js"
import { showResults, determineWinner } from "./results.js"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function question(text) {
    return new Promise(resolve => rl.question(text, resolve))
}

async function runElection(categoryName) {

    console.log("\n=== Eleição: " + categoryName + " ===")

    const names = []

    for (let i = 1; i <= 3; i++) {
        const name = await question("Nome do candidato " + i + ": ")
        names.push(name)
    }

    const votes = createCandidates(names)
    const voters = createVoteManager()

    console.log("\nCandidatos:")
    for (let i = 0; i < names.length; i++) {
        console.log("  " + (i + 1) + ". " + names[i])
    }

    console.log("\nDigite 0 para encerrar a votação.\n")

    let count = 1

    while (true) {

        const voterName = await question("Nome do votante " + count + ": ")

        if (voterName === "0") break

        console.log("Candidatos disponíveis:")
        for (let i = 0; i < names.length; i++) {
            console.log("  " + (i + 1) + ". " + names[i])
        }

        const candidateChoice = await question("Número do candidato: ")

        if (candidateChoice === "0") break

        const candidateIndex = parseInt(candidateChoice) - 1

        if (isNaN(candidateIndex) || candidateIndex < 0 || candidateIndex >= names.length) {
            console.log("Número inválido, tente novamente.")
            continue
        }

        registerVote(voters, names, votes, voterName, names[candidateIndex])

        count++
    }

    showResults(names, votes)
    determineWinner(names, votes)
}

async function main() {

    const elections = [
        "Associação de Estudantes",
        "Representante de Turma",
        "Orçamento Participativo Escolar"
    ]

    const order = []

    console.log("\n=== BEM VINDO AO SISTEMA DE VOTAÇÃO ===")
    console.log("\nEscolha a ordem das eleições:")

    while (order.length < elections.length) {
        console.log("\nEleições disponíveis:")
        for (let i = 0; i < elections.length; i++) {
            if (!order.includes(i)) {
                console.log("  " + (i + 1) + ". " + elections[i])
            }
        }

        const choice = await question("Escolha a próxima eleição (número): ")
        const index = parseInt(choice) - 1

        if (isNaN(index) || index < 0 || index >= elections.length) {
            console.log("Opção inválida, tente novamente.")
            continue
        }

        if (order.includes(index)) {
            console.log("Essa eleição já foi escolhida.")
            continue
        }

        order.push(index)
        console.log("✔ " + elections[index] + " adicionada à ordem.")
    }

    console.log("\nOrdem das eleições:")
    for (let i = 0; i < order.length; i++) {
        console.log("  " + (i + 1) + ". " + elections[order[i]])
    }

    for (let i = 0; i < order.length; i++) {
        await runElection(elections[order[i]])
    }

    rl.close()
}

main()
