// Verifica se um eleitor já votou nesta eleição
// Percorre a lista de eleitores e devolve true se o id já estiver registado
function eleitorJaVotou(eleitores, idEleitor) {
    for (let i = 0; i < eleitores.length; i++) {
        if (eleitores[i] === idEleitor) {
            return true // Eleitor encontrado — já votou
        }
    }
    return false // Eleitor não encontrado — ainda não votou
}

// Procura o índice de um candidato pelo nome
// Devolve o índice se encontrar, ou -1 se o candidato não existir
function obterIndiceCandidato(nomes, nomeCandidato) {
    for (let i = 0; i < nomes.length; i++) {
        if (nomes[i] === nomeCandidato) {
            return i // Candidato encontrado, devolve a sua posição
        }
    }
    return -1 // Candidato não encontrado
}

export {
    eleitorJaVotou,
    obterIndiceCandidato
}
