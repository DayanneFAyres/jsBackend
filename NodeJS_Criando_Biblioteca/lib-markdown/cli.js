import chalk from 'chalk';
import pegaArquivo from './index.js';

// captura os dados do terminal
const caminho = process.argv;

async function processaTexto(caminhoDeArquivo){

    // indice 2 contem o caminho do arquvivo informado no terminal
    const resultado = await pegaArquivo(caminhoDeArquivo[2]);
    console.log(chalk.yellow('Lista de Links'), resultado);
}

processaTexto(caminho);