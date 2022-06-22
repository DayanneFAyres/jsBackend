const clientes = [
	{
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
	},
	{
		nome: "Laura",
		idade: 38,
		cpf: "14527498379",
		email: "dayanne@email.com",
		fones: ["939401248504", "4897945402"],
		dependentes: [{
			nome: "Bruna",
			parentesco: "filha",
			dataNasc: "09/11/2001"
		}],
		saldo: 500,
		depositar: function(valor){
			this.saldo += valor;
		}
	}
];

// spread operator
const listaDependentes = [ ...clientes[0].dependentes, ...clientes[1].dependentes];

console.table(listaDependentes)