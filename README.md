# Projeto-Avaliado-Sistema-de-Votação-Eletronica-Escolar
#-----------------------------------------------------/
# Projeto " Sistema de Votação Eletrónica Escolar "
 
# Elementos do Grupo 
 - Rodrigo Carrilho nº --
 - Diego Albino nº 5
 - Aaron Domingos nº 1
 - Fabio Junior nº --
Turma: 10º GPSI
#------------------------------------------------/

# Descrição do Projeto 

# •	Explicação da estrutura de ficheiros

A estrutura do projeto é organizada em diferentes arquivos para separar as responsabilidades e facilitar a manutenção do código.
Cada arquivo tem uma função específica dentro do sistema de votação:

📁 voting-system/
 ├── candidate.js
 ├── voteManager.js
 ├── results.js
 ├── validation.js
 └── app.js

# •	Responsabilidade de cada ficheiro

- **candidate.js**: Contém funções relacionadas a candidatos, como criação e manipulação de votos.
- **voteManager.js**: Gerencia o processo de votação, incluindo registro de votos e verificação de eleitores.
- **results.js**: Calcula e determina os resultados da votação, incluindo porcentagens e vencedores.
- **validation.js**: Contém funções de validação para garantir a integridade dos dados de entrada.
- **app.js**: O ponto de entrada principal que orquestra a interação entre os diferentes módulos.

# •	Explicação das principais funções

- **createCandidate(name)**: Cria um novo candidato com um nome e inicializa os votos como 0.
- **incrementVote(candidate)**: Incrementa o número de votos de um candidato.
- **createVoteManager()**: Cria um gerenciador de votos que rastreia os eleitores.
- **registerVote(manager, candidates, voterId, candidateName)**: Registra um voto para um eleitor em um candidato específico, verificando se o eleitor já votou e se o candidato existe.
- **hasVoted(voters, voterId)**: Verifica se um eleitor já votou.
- **candidateExists(candidates, name)**: Verifica se um candidato existe.
- **isValidString(value)**: Verifica se uma string é válida (não vazia).
- **getTotalVotes(candidates)**: Retorna o total de votos de todos os candidatos.
- **calculatePercentages(candidates)**: Calcula a porcentagem de votos para cada candidato.
- **determineWinner(candidates)**: Determina o vencedor da eleição com base nos votos.

# •	Justificação das decisões tomadas

