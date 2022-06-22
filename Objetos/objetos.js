const listaCPFS = ["12345623456", "98745475690", "32897646190"];

//const cliente = ["nome", "Dayanne", "idade", 28];

const cliente = {
	nome: "Dayanne",
	idade: 28,
	cpf: "12563498361",
	email: "dayanne@email.com"
};

console.table(cliente);
console.log(`Meu nome é ${cliente.nome} e eu tenho ${cliente.idade} anos.`);
console.log(`CPF: ${cliente.cpf.substring(0,3)}******-**`);