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
        console.log(names[i] + " - " + votes[i] + " votos (" + percentage + "%)")
    }
    console.log("==========================")
}

function determineWinner(names, votes) {
    let maxVotes = 0
    let winnerIndex = 0
    let tie = false

    for (let i = 0; i < votes.length; i++) {
        if (votes[i] > maxVotes) {
            maxVotes = votes[i]
            winnerIndex = i
            tie = false
        } else if (votes[i] === maxVotes && i !== winnerIndex) {
            tie = true
        }
    }

    if (tie) {
        console.log("Empate detectado.")
    } else {
        console.log("Vencedor: " + names[winnerIndex])
    }
}

export {
    showResults,
    determineWinner
}