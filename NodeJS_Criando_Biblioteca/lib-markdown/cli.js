import chalk from 'chalk';
import pegaArquivo from './index.js';
import validaURLs from './http-validacao.js';

// captura os dados do terminal
const caminho = process.argv;

async function processaTexto(caminhoDeArquivo){

    // indice 2 contem o caminho do arquvivo informado no terminal
    const resultado = await pegaArquivo(caminhoDeArquivo[2]);
    if(caminho[3] === 'validar'){
        console.log(chalk.yellow('Lista de Links'), await validaURLs(resultado));
    }
    else{
        console.log(chalk.yellow('Lista de Links'), resultado);
    }
}

processaTexto(caminho);