const nomes = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const notas = [7, 4.5, 8, 7.5];

// filter espera que a funcao callback retorne booleano
//const reprovados = nomes.filter((aluno, indice) => notas[indice] < 5);
const reprovados = nomes.filter((_, indice) => notas[indice] < 5);
console.log(`Reprovados: ${reprovados}`);

