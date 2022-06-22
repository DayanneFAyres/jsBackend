const cliente = {
	nome: "Dayanne",
	idade: 28,
	cpf: "12563498361",
	email: "dayanne@email.com"
};

const chaves = ["nome", "idade", "cpf", "email"];

//acessando com notacao de colchetes
console.log(cliente[chaves[0]]);

chaves.forEach(info => console.log(cliente[info]));