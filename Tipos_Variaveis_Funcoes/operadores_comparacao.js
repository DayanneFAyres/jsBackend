// == comparacao implicita - nao eh boa pratica
// compara o valor apenas

const numero = 5;
const texto = "5";

console.log(numero == texto)

// === comparacao explicita
// compara tipo e valor

console.log(numero === texto)

// typeof

console.log(typeof numero)
console.log(typeof texto)

// ternario

const idade_minima = 18;
const idade_cliente = 16;

// if padrao
if (idade_cliente >= idade_minima){
	console.log("Vinho")
}else{
	console.log("Suco")
}

console.log(idade_cliente >= idade_minima ? "Vinho": "Suco")

