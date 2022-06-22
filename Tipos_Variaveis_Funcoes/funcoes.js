function imprimeTexto(texto){
	console.log(texto)
}

// tres formas de escrever function

// sem parametros
function soma(){
	return 2 + 2;
}

// com parametros
function nomeIdade(nome, idade){
	return `Meu nome é ${nome} e minha idade é ${idade}`
}

// parametros com valor padrao
function multiplica(num1 = 1, num2 = 1){
	return num1 * num2;

}

// execucao
//imprimeTexto("oi")
//console.log(soma())
//imprimeTexto(soma())

console.log(nomeIdade("Dayanne", 28))
console.log(multiplica(soma()))

// expressoes de funcao
// nome da funcao eh opcional

const somar = function(num1, num2){ return num1 + num2}
console.log(somar(1,1))

// arrow function - se comporta como expressao
// nao pode ser nomeada

					//parametros => return
const apresentarArrow = nome => `Meu nome é ${nome}.`;
const somaArrow = (num1, num2) => num1 + num2;
const intervaloZeroANove = num => num < 10 && num >= 0;

const somarNumerosPequenos = (num1, num2) => {
	if(! intervaloZeroANove(num1) || ! intervaloZeroANove(num2)){
		return "Somente números de 0 a 9";
	}else{
		return num1 + num2;
	}
}

console.log(somarNumerosPequenos(1, 10))