const listaLivros = require('./array');

function ordena(lista1, lista2){

	let listaFinal = [];
	let posAtualLista1 = 0;
	let posAtualLista2 = 0;

	while(posAtualLista1 < lista1.length && posAtualLista2 < lista2.length){
		let produtoAtualLista1 = lista1[posAtualLista1];
		let produtoAtualLista2 = lista2[posAtualLista2];

		if(produtoAtualLista1.preco < produtoAtualLista2.preco){
			listaFinal.push(produtoAtualLista1);
			posAtualLista1++;
		}
		else{
			listaFinal.push(produtoAtualLista2);
			posAtualLista2++;
		}

	}

	return listaFinal.concat(posAtualLista1 < lista1.length ? lista1.slice(posAtualLista1):lista2.slice(posAtualLista2));
}

function mergeSort(array){
	if( array.length > 1 ){
		const meio = Math.floor(array.length/2);
		const parte1 = mergeSort(array.slice(0, meio));
		const parte2 = mergeSort(array.slice(meio, array.length));
		array = (ordena(parte1, parte2));
	}

	return array;
}



console.log(mergeSort(listaLivros));