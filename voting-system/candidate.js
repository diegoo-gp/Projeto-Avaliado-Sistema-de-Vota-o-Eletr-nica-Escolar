function createCandidates(names) {
    const votes = []

    for (let i = 0; i < names.length; i++) {
        votes.push(0)
    }

    return votes
}

function addVote(votes, index) {
    votes[index] = votes[index] + 1
}

export {
    createCandidates,
    addVote
}
