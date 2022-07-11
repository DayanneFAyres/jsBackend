const listaLivro = require('./array');

/*	
	Troca posicoes dentro de um array
	array - array original para a troca
	de - indice do elemento a sert trocado
	para - indice no array em que se deseja inserir o elemento
*/
function trocaLugar(array, de, para){
	const elem1 = array[de];
	const elem2 = array[para];

	array[para] = elem1;
	array[de] = elem2;
}

/*
*/
function particiona(array, esquerda, direita){
	let pivo = array[Math.floor((esquerda + direita)/2)];
	let atualEsquerda = esquerda;
	let atualDireita = direita;

	while(atualEsquerda <= atualDireita){

		while(array[atualEsquerda].preco < pivo.preco){
			atualEsquerda++;
		}

		while(array[atualDireita].preco > pivo.preco){
			atualDireita--;
		}

		if(atualEsquerda <= atualDireita){
			trocaLugar(array, atualDireita, atualEsquerda);
			atualEsquerda++;
			atualDireita--;
		}

	}

	return atualEsquerda;
}

/*
	Retorna o array ordenado.
	array - array original para ordenacao
	esquerda - indice inicial a esquerda do array		
	direita - indice final a direita do array
*/
function quickSort(array, esquerda, direita){

	if(array.length > 1){

		let indiceAtual = particiona(array, esquerda, direita);

		if(esquerda < indiceAtual - 1){
			quickSort(array, esquerda, indiceAtual - 1);
		}

		if(indiceAtual < direita){
			quickSort(array, indiceAtual, direita);
		}

	}

	return array;

}

console.log(quickSort(listaLivro, 0, listaLivro.length - 1));