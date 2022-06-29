const livros = require('./listaLivros');

function insertionSort(lista){

	for(let i = 1; i < lista.length; i++){

		let analise = i;

		while(analise > 0 && lista[analise].preco < lista[analise - 1].preco){

			let itemAnalise = lista[analise];
			let itemAnterior = lista[analise - 1];

			lista[analise] = itemAnterior;
			lista[analise - 1] = itemAnalise;

			analise--;

		}
	}
	console.log(lista);
}

insertionSort(livros);