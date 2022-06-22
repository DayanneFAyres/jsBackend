const cliente = {
	nome: "Dayanne",
	idade: 28,
	cpf: "12563498361",
	email: "dayanne@email.com",
	fones: ["739483048504", "3857945402"],
	dependentes: [{
		nome: "Ana",
		parentesco: "filha",
		dataNasc: "20/02/2011"
	}]
}

cliente.dependentes.push({
	nome: "Maria",
	parentesco: "filha",
	dataNasc: "27/09/2020"
});

//console.log(cliente);

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc === "27/09/2020")
console.log(filhaMaisNova);
console.log(filhaMaisNova[0].nome);

