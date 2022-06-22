// var - carregada primeiro
// problemático, pois fica visivel para outros blocos

/*
var altura = 5;
var comprimento = 7;

area = altura * comprimento;
console.log(area);
var area;
*/

// utilizando com let

/*
let forma = "quadrado";
let altura = 5;
let comprimento = 7;
let area;

if(forma === "quadrado"){
	area = altura * comprimento;
} else{
	area = altura * comprimento / 2;
}

console.log(area);

*/

let nao_definido;
const null_var = null;

console.log(nao_definido);
console.log(null_var);
console.log(typeof nao_definido);
console.log(typeof null_var);