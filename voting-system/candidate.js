// Cria e devolve um array de votos inicializado a 0 para cada candidato
// Exemplo: se houver 3 candidatos, devolve [0, 0, 0]

function criarCandidatos(nomes) {
    const votos = []

    // Para cada candidato, adiciona um contador de votos a 0
    for (let i = 0; i < nomes.length; i++) {
        votos.push(0)
    }

    return votos
}

// Incrementa em 1 o voto do candidato na posição indicada pelo índice
function adicionarVoto(votos, indice) {
    votos[indice] = votos[indice] + 1
}

export {
    criarCandidatos,
    adicionarVoto
}
