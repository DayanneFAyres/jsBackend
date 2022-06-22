const notas = [10, 6.5, 8, 6];

// adicionando nota
notas.push(7);
console.log(notas);

// removendo a ultima nota
notas.pop()
console.log(notas);

let media = (notas[0] + notas[1] + notas[2] + notas[3])/notas.length;

console.log(`A média é ${media}`);

const nomes = ["Ana", "Joao", "Marcelo", "Maria", "Fernanda", "Guilherme", "Carlos", "Renata"];

const sala1 = nomes.slice(0,nomes.length/2);
const sala2 = nomes.slice(nomes.length/2);

console.log(`Alunos da sala 1: ${sala1}`);
console.log(`Alunos da sala 2: ${sala2}`);
