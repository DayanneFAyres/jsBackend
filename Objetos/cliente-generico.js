function Cliente(nome, cpf, email, saldo){
	this.nome = nome;
	this.cpf = cpf;
	this.email = email;
	this.saldo = saldo;
	this.depositar = valor => this.saldo += valor;
}

const dayanne = new Cliente("Dayanne", "12345678910", "dayanne@email.com", 100);
dayanne.depositar(150);
console.log(dayanne.saldo)