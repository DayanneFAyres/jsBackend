const lista_de_chamada = ["Joao", "Ana", "Caio", "Lara", "Marjore", "Leo"];

// retira os alunos da posicao 1 e 2 e acrescenta Rodrigo no lugar
// primeiro parametro - indice de alteração da lista
// segundo parametro - numero de elementos a remover
// terceiro em diante - elementos a serem inseridos
lista_de_chamada.splice(1, 2, "Rodrigo");
//lista_de_chamada.splice(1, 0, "Rodrigo");


console.log(`Lista de chamada: ${lista_de_chamada}`);

animaisDoAquario = ['🐋', '🐙', '🐬', '🦈']

animaisDoAquario.splice(1,0,'🐠')
animaisDoAquario.splice(3,2,'🐟')

console.log(animaisDoAquario)