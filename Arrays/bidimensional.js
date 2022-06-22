const alunos = ['joao', 'juliana', 'caio', 'ana'];
const medias = [10, 7, 9, 6];

let lista_de_notas_e_alunos = [alunos, medias];

console.log(`${lista_de_notas_e_alunos[0][0]} - média ${lista_de_notas_e_alunos[1][0]}`);

/*
const indice_aluno2 = (nome_aluno) => {
	if (lista_de_notas_e_alunos[0].includes(nome_aluno)){
		indice = lista_de_notas_e_alunos[0].indexOf(nome_aluno);
		return indice;
	}else{
		return -1;
	}
}
*/

const indice_aluno = nome => lista_de_notas_e_alunos[0].includes(nome) ? lista_de_notas_e_alunos[0].indexOf(nome): -1;
const nome_nota = indice => indice != -1 ? `${lista_de_notas_e_alunos[0][indice]} - nota ${lista_de_notas_e_alunos[1][indice]}` : `Aluno não cadastrado.`

console.log(nome_nota(indice_aluno('ana')));

