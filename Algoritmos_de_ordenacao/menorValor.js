function menorValor(arrProdutos, posicaoInicial){

	let posicaoBarato = posicaoInicial;

	for(let i = posicaoBarato; i < arrProdutos.length; i++){
		if(arrProdutos[i].preco < arrProdutos[posicaoBarato].preco){
			posicaoBarato = i;
		}
	}
	return posicaoBarato;
}

module.exports = menorValor;

/*
const livros = require('./listaLivros');

let posicaoBarato = posicaoInicial;

/*
for(let atual = 0; atual < livros.length; atual++){
	if(livros[atual].preco < livros[posicaoBarato].preco){
		posicaoBarato = atual;
	}
}


livros.forEach((livroAtual, posAtual, posicaoInicial) => livroAtual.preco < livros[posicaoBarato].preco ? posicaoBarato = posAtual:false);
const precoBarato = livros[posicaoBarato].preco.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'});

console.log(`${livros[posicaoBarato].titulo} é o livro mais barato e custa ${precoBarato}.`);
*/