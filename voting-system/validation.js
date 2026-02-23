// Este arquivo é responsável por conter funções de validação. Ele contém as seguintes funções: 
// - **voterAlreadyVoted(voters, voterId)**: Verifica se um eleitor já votou, comparando o ID do eleitor com uma lista de eleitores que já votaram.
// - **candidateExists(names, candidateName)**: Verifica se um candidato existe, comparando o nome do candidato com uma lista de nomes de candidatos.
// - **getCandidateIndex(names, candidateName)**: Retorna o índice de um candidato na lista de nomes, ou -1 se não encontrado.


function voterAlreadyVoted(voters, voterId) {
    for (let i = 0; i < voters.length; i++) {
        if (voters[i] === voterId) {
            return true
        }
    }
    return false
}

function candidateExists(names, candidateName) {
    for (let i = 0; i < names.length; i++) {
        if (names[i] === candidateName) {
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
    candidateExists,
    getCandidateIndex
}