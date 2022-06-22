const cliente = {
	nome: "Dayanne",
	idade: 28,
	cpf: "12563498361",
	email: "dayanne@email.com"
};

cliente.fone = "988887765";
console.table(cliente);

// alterando o valor de uma chave
cliente.fone = "111187765";
console.table(cliente);


// deletanto uma propriedade
// retorna true em caso de sucesso
const delProp = delete cliente.fone
console.table(cliente);
console.log(delProp);
