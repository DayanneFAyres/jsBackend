const notas = [10, 9.9, 8.5, 7, 6];
const notas_atualizadas = notas.map(nota => nota + 1 <= 10 ? ++nota : 10);

console.log(notas_atualizadas);