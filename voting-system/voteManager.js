import { addVote } from "./candidate.js"
import { voterAlreadyVoted, candidateExists, getCandidateIndex } from "./validation.js"

function createVoteManager() {
    const voters = []
    return voters
}

function registerVote(voters, names, votes, voterId, candidateName) {

    if (voterAlreadyVoted(voters, voterId)) {
        console.log("Eleitor já votou.")
        return
    }

    if (!candidateExists(names, candidateName)) {
        console.log("Candidato não existe.")
        return
    }

    const index = getCandidateIndex(names, candidateName)
    addVote(votes, index)

    voters.push(voterId)
}

export {
    createVoteManager,
    registerVote

}
