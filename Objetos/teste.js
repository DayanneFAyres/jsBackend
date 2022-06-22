
function conta(name) {
    this.name = name;
    this.saldo = 0;
    this.deposita = function (value) {
        (value > 0) ? this.saldo +=  5 + value : false; 
    }
}

function conta2(name) {
    conta.call(this, name);

}
conta2.deposita = function(value) { (value > 0) ? conta2.saldo = value : false;}

const joao = new conta2('João');

joao.deposita(5); 

console.log(joao)
console.log(Object.getOwnPropertyDescriptor(joao, "deposita"))