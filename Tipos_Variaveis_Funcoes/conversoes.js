// conversao implicita
const numero = 245;
const numero_string = "245";

// converte o numero em string de forma implicita
console.log(numero == numero_string);
console.log(numero + numero_string);

// compara valor E tipo
console.log(numero === numero_string);


// conversao explicita
// Number() / String()

console.log(numero + Number(numero_string));