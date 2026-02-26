function totalVotes(votes) {
    let total = 0

    for (let i = 0; i < votes.length; i++) {
        total += votes[i]
    }

    return total
}

function showResults(names, votes) {
    const total = totalVotes(votes)

    console.log("\n======= RESULTADOS =======")

    for (let i = 0; i < names.length; i++) {
        let percentage = 0

        if (total > 0) {
            percentage = ((votes[i] / total) * 100).toFixed(2)
        }

        console.log(
            names[i] + " - " +
            votes[i] + " votos (" +
            percentage + "%)"
        )
    }

    console.log("==========================")
}

function determineWinner(names, votes) {

    const total = votes.reduce((a, b) => a + b, 0)

    if (total === 0) {
        console.log("Nenhum voto registado.")
        return
    }

    const maxVotes = Math.max(...votes)
    const winners = names.filter((_, i) => votes[i] === maxVotes)

    if (winners.length > 1) {
        console.log("Empate entre: " + winners.join(", "))
    } else {
        console.log("Vencedor: " + winners[0])
    }
}

export {
    showResults,
    determineWinner
}
