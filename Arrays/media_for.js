const notas = [10, 6.5, 8, 7.5];
let soma_notas = 0;

for (let i = 0; i < notas.length; i++){
	soma_notas += notas[i];
}

let media = soma_notas/notas.length;

console.log(`A média é ${media}`);