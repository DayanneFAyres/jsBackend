const cliente = {
	nome: "Dayanne",
	idade: 28,
	cpf: "12563498361",
	email: "dayanne@email.com",
	fones: ["739483048504", "3857945402"]
}

cliente.dependentes = {
	nome: "Ana",
	parentesco: "filha",
	dataNasc: "20/02/2011"
}

console.log(cliente);

cliente.dependentes.nome = "Ana Ferreira";
console.log(cliente);
