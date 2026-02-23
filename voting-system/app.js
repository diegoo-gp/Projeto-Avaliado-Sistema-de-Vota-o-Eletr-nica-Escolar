// Este é o arquivo principal do sistema de votação. Ele importa as funções dos módulos e simula um processo de votação.
// Ele cria uma lista de candidatos, registra votos de eleitores e exibe os resultados, inclui

import { createCandidates } from "./candidate.js"
import { createVoteManager, registerVote } from "./voteManager.js"
import { showResults, determineWinner } from "./results.js"

// Lista de candidatos
const names = ["Lista A", "Lista B", "Lista C"]

// Inicializa votos (todos 0)
const votes = createCandidates(names)

// Inicializa lista de eleitores
const voters = createVoteManager()

// Simulação de votos
registerVote(voters, names, votes, "aluno1", "Lista A")
registerVote(voters, names, votes, "aluno2", "Lista B")
registerVote(voters, names, votes, "aluno3", "Lista A")
registerVote(voters, names, votes, "aluno1", "Lista C") // duplicado

// Mostrar resultados
showResults(names, votes)
determineWinner(names, votes)

