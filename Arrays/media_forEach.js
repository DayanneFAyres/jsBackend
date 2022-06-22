const notas = [10, 6.5, 8, 7.5];
let soma_notas = 0;

// callback
notas.forEach(nota => {
	soma_notas += nota;
})

let media = soma_notas/notas.length;
console.log(media);