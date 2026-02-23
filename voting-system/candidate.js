// Este arquivo é responsável por criar os candidatos e gerenciar os votos de cada um. Ele contém as seguintes funções: 
// - **createCandidates(names)**: Cria um array de votos inicializado com 0 para cada candidato, com base em uma lista de nomes fornecida.
// - **addVote(votes, index)**: Incrementa o número de votos para um candidato específico, identificado pelo índice no array de votos.

function createCandidates(names) {
    // Cria array de votos com 0 para cada candidato
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
