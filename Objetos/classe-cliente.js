// classes iniciam com a primeira maiuscula
class Cliente{

	constructor(nome, email, cpf, saldo){
		this.nome = nome;
		this.email = email;
		this.cpf = cpf;
		this.saldo = saldo;
	}

	depositar(valor){
		this.saldo += valor;
	}

	extrato(){
		return this.saldo;
	}
}

const day = new Cliente("Dayanne", "dayanne@email.com", "12345678910", 100);
console.log(day.extrato()); 

class ClientePoupanca extends Cliente{

	constructor(nome, email, cpf, saldo, saldoPoup){
		super(nome, email, cpf, saldo);
		this.saldoPoup = saldoPoup;
	}

	depositarPoup(valor){
		this.saldoPoup += valor;
	}
}

const poupanca = new ClientePoupanca("Dayanne", "dayanne@email.com", "12345678910", 100, 200);
console.log(poupanca); 


