const livros = require('./listaLivros');
const menorValor = require('./menorValor');

for(let i = 0; i < livros.length - 1; i++){
	let menorIndice = menorValor(livros, i);
	let livroAtual = livros[i];
	let livroMenorPreco = livros[menorIndice];

	livros[i] = livroMenorPreco;
	livros[menorIndice] = livroAtual;
}

console.log(livros);
