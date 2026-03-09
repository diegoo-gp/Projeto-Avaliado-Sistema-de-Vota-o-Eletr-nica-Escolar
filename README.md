# Projeto-Avaliado-Sistema-de-Votação-Eletronica-Escolar


 
# Elementos do Grupo 
 - Rodrigo Carrilho nº 20
 - Diego Albino nº 5
 - Aaron Domingos nº 1
 - Fabio Junior nº 27
   
Turma: 10º GPSI


# Descrição do Projeto 
O presente projeto consiste no desenvolvimento de um sistema de votação eletrónica executado através do terminal, utilizando exclusivamente JavaScript.
O sistema foi criado com o objetivo de simular eleições escolares, permitindo a realização de três tipos de votação:
Eleição da Associação de Estudantes
Eleição do Representante de Turma
Votação do Orçamento Participativo Escolar
O programa permite:
Definir os nomes dos candidatos
Registar votos de diferentes eleitores
Impedir votos duplicados
Calcular o total de votos
Calcular percentagens com duas casas decimais
Determinar o vencedor
Detetar situações de empate

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

criarCandidato(nome): Cria um novo candidato com um nome e inicializa os votos como 0.
incrementarVoto(candidato): Incrementa o número de votos de um candidato.
criarGestorDeVotos(): Cria um gerenciador de votos que rastreia os eleitores.
registarVoto(gestor, candidatos, idEleitor, nomeCandidato): Regista um voto para um eleitor em um candidato específico, verificando se o eleitor já votou e se o candidato existe.
jaVotou(eleitores, idEleitor): Verifica se um eleitor já votou.
candidatoExiste(candidatos, nome): Verifica se um candidato existe.
stringValida(valor): Verifica se uma string é válida (não vazia).
obterTotalVotos(candidatos): Retorna o total de votos de todos os candidatos.
calcularPercentagens(candidatos): Calcula a percentagem de votos para cada candidato.
determinarVencedor(candidatos): Determina o vencedor da eleição com base nos votos.

# •	Justificação das decisões tomadas
Durante o desenvolvimento do sistema de votação eletrónica, foram tomadas várias decisões técnicas com o objetivo de garantir organização, simplicidade e fiabilidade do programa.
Primeiramente, optou-se por dividir o projeto em vários ficheiros (modularização). Esta decisão foi tomada para separar responsabilidades e tornar o código mais organizado, legível e fácil de manter. 
Cada ficheiro trata apenas de uma parte específica do sistema, evitando confusão e facilitando futuras melhorias.
A utilização de funções específicas para cada tarefa (como criar candidato, validar dados, calcular resultados, etc.) foi escolhida para tornar o código reutilizável e mais estruturado. 
Isso permite evitar repetição de código e facilita a identificação de erros.
Foi também implementado um sistema de verificação de votos duplicados. Esta decisão foi essencial para garantir justiça no processo eleitoral, impedindo que um eleitor vote mais do que uma vez.
A validação de dados de entrada foi incluída para garantir a integridade do sistema. 
Ao validar nomes e entradas do utilizador, evita-se que o programa aceite valores inválidos ou vazios, reduzindo a possibilidade de erros.
