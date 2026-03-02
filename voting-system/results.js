// Calcula e devolve o total de votos de todos os candidatos
function totalVotos(votos) {
    let total = 0

    for (let i = 0; i < votos.length; i++) {
        total += votos[i]
    }

    return total
}

// Mostra os resultados da eleição no terminal:
// nome do candidato, número de votos e percentagem
function mostrarResultados(nomes, votos) {
    const total = totalVotos(votos)

    console.log("\n======= RESULTADOS =======")

    for (let i = 0; i < nomes.length; i++) {
        let percentagem = 0

        // Evita divisão por zero caso não haja votos
        if (total > 0) {
            percentagem = ((votos[i] / total) * 100).toFixed(2)
        }

        console.log(
            nomes[i] + " - " +
            votos[i] + " votos (" +
            percentagem + "%)"
        )
    }

    console.log("==========================")
}

// Determina e anuncia o vencedor da eleição
// Se houver empate, mostra todos os candidatos empatados
function determinarVencedor(nomes, votos) {

    // Soma todos os votos com reduce
    const total = votos.reduce((a, b) => a + b, 0)

    // Se não houve nenhum voto, termina sem declarar vencedor
    if (total === 0) {
        console.log("Nenhum voto registado.")
        return
    }

    // Encontra o maior número de votos
    const maxVotos = Math.max(...votos)

    // Filtra os candidatos que têm o número máximo de votos
    const vencedores = nomes.filter((_, i) => votos[i] === maxVotos)

    if (vencedores.length > 1) {
        // Mais de um candidato com o mesmo número máximo → empate
        console.log("Empate entre: " + vencedores.join(", "))
    } else {
        console.log("Vencedor: " + vencedores[0])
    }
}

export {
    mostrarResultados,
    determinarVencedor
}
