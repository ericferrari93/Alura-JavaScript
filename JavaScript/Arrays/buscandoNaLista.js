/* - Crie uma função que recebe como argumento o nome de um aluno.
- Verifique se o aluno está presente na lista e retorne a média final que se encontra no mesmo índice.
- Caso o nome do aluno não esteja nalista, retorne uma mensagem indicando que o aluno não foi encontrado.*/

const alunos = ['João', 'Juliana', 'Caio', 'Ana']
const mediasDosAlunos = [10, 7, 9, 6]
let listaDeNotasEAlunos = [alunos, mediasDosAlunos]

const exibeNomeNota = (nomeDoAluno) => {
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)){
        let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)
        return listaDeNotasEAlunos[0] [indice] + ', sua média é ' + listaDeNotasEAlunos[1][indice]
    }else {
        return "Aluno não está cadastrado"
    }
}

console.log(exibeNomeNota('Ana'))