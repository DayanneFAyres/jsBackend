function Cliente(nome, cpf, email, saldo){
	this.nome = nome;
	this.cpf = cpf;
	this.email = email;
	this.saldo = saldo;
	this.depositar = valor => this.saldo += valor;
}

function ClientePoupanca(nome, cpf, email, saldo, saldoPoup){
	Cliente.call(this, nome, cpf, email, saldo);
	this.saldoPoup = saldoPoup;
}

const day = new ClientePoupanca("Day", "123456576868", "day@email.com", 100, 200);

ClientePoupanca.prototype.depositarPoup = function (valor){
	this.saldoPoup += valor;
}
day.depositarPoup(30);
console.log(day)
console.log(day.saldoPoup)
