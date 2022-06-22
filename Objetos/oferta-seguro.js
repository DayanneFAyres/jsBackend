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


function oferecerSeguro(obj){
	// retorna um array com as chaves de cliente
	const propsClientes = Object.keys(obj);

	if(propsClientes.includes("dependentes")){
		console.log(`Oferta de seguro de vida para ${obj.nome}.`);
	} 
}

oferecerSeguro(cliente)

console.log(Object.values(cliente))
console.log(Object.entries(cliente))