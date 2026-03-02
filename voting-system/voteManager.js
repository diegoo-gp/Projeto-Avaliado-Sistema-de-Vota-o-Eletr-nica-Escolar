
import { adicionarVoto } from "./candidate.js"
import { eleitorJaVotou, obterIndiceCandidato } from "./validation.js"

// Cria e devolve uma lista vazia de eleitores
// Esta lista vai guardar os nomes/ids de quem já votou
function criarGestorDeVotos() {
    const eleitores = []
    return eleitores
}

// Tenta registar o voto de um eleitor num candidato
// Valida se o eleitor já votou e se o candidato existe antes de registar
function registarVoto(eleitores, nomes, votos, idEleitor, nomeCandidato) {

    // Impede que o mesmo eleitor vote mais do que uma vez
    if (eleitorJaVotou(eleitores, idEleitor)) {
        console.log("Eleitor já votou.")
        return
    }

    // Procura o índice do candidato pelo nome
    const indice = obterIndiceCandidato(nomes, nomeCandidato)

    // Se o candidato não for encontrado, cancela o voto
    if (indice === -1) {
        console.log("Candidato não existe.")
        return
    }

    // Regista o voto no candidato e guarda o eleitor na lista
    adicionarVoto(votos, indice)
    eleitores.push(idEleitor)
}

export {
    criarGestorDeVotos,
    registarVoto
}
