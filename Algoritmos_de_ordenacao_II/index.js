const { edGalho, edFolha } = require('./arrays');

percorreuTodaLista = lista => typeof lista === 'undefined';

function juntaListas(lista1, lista2){

	let listaFinal = [];
	let posAtualLista1 = 0;
	let posAtualLista2 = 0;

	while(posAtualLista1 < lista1.length || posAtualLista2 < lista2.length){
		let produtoAtualLista1 = lista1[posAtualLista1];
		let produtoAtualLista2 = lista2[posAtualLista2];

		if(percorreuTodaLista(produtoAtualLista2) || ( !percorreuTodaLista(produtoAtualLista1) && produtoAtualLista1.preco < produtoAtualLista2.preco)){
			listaFinal.push(produtoAtualLista1);
			posAtualLista1++;
		}
		else{
			listaFinal.push(produtoAtualLista2);
			posAtualLista2++;
		}

	}

	return listaFinal;
}

console.log(juntaListas(edGalho, edFolha));