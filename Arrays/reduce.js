const sala_js = [8, 5, 4, 3, 2, 8, 9, 2, 10];
const sala_java = [8, 5, 4, 3, 2, 8, 9, 2, 10];
const sala_python = [2, 10, 10, 8, 5, 8, 9, 2, 10];

function mediaSala(notas_sala){
	// reduce - recebe o acumulador e o atual e retorna a funçao, inicializada em 0
	const soma_notas = notas_sala.reduce((acum, atual) => atual + acum, 0)
	return soma_notas/notas_sala.length;
}

console.log(`Media da sala de JavaScript ${mediaSala(sala_js)}`);
console.log(`Media da sala de Java ${mediaSala(sala_java)}`);
console.log(`Media da sala de Python ${mediaSala(sala_python)}`);


const notas = [10, 5, 8, 7];
const media = notas.reduce((acum, atual) => atual + acum, 0)/notas.length;
console.log(media);