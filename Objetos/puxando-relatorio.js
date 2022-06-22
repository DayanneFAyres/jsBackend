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
	},
	{
		nome: "Maria",
		parentesco: "filha",
		dataNasc: "27/09/2020"
	}],
	saldo: 100,
	depositar: function(valor){
		this.saldo += valor;
	}
}

let relatorio = "";

console.log(typeof cliente.fones);

for(let info in cliente){
	if(typeof cliente[info] !== "object" && typeof cliente[info] !== "function"){
		relatorio += `${info}: ${cliente[info]}\n`;
	}
}

console.log(relatorio);