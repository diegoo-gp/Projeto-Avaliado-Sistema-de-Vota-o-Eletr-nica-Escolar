function voterAlreadyVoted(voters, voterId) {
    for (let i = 0; i < voters.length; i++) {
        if (voters[i] === voterId) {
            return true
        }
    }
    return false
}

function getCandidateIndex(names, candidateName) {
    for (let i = 0; i < names.length; i++) {
        if (names[i] === candidateName) {
            return i
        }
    }
    return -1
}

export {
    voterAlreadyVoted,
    getCandidateIndex
}
