const listaLivros = require('./array');

/*
*/
function encontraMenores(pivo, array){
	let numMenores = 0;

	for(let i = 0; i < array.length; i++){
		let produtoAtual = array[i];

		if(produtoAtual.preco < pivo.preco){
			numMenores++;
		}
	}
	trocaLugar(array, array.indexOf(pivo), numMenores);
	return array;
}

/*
array - array originao para a troca
de - indice do elemento a sert trocado
para - indice no array em que se deseja inserir o elemento
*/
function trocaLugar(array, de, para){
	const elem1 = array[de];
	const elem2 = array[para];

	array[para] = elem1;
	array[de] = elem2;
}

function divideNoPivo(array){
	let pivo = array[Math.floor(array.length/2)];
	encontraMenores(pivo, array);
	let valoresMenores = 0;

	for(let i = 0; i < array.length; i++){
		let atual = array[i];
		if(atual.preco <= pivo.preco && atual !== pivo){
			trocaLugar(array, i, valoresMenores);
			valoresMenores++;
		}
	}

	return array;
}

console.log(divideNoPivo(listaLivros));