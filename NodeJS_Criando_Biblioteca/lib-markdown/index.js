import chalk from 'chalk';
import fs from 'fs';

function pegaArquivo(caminhoDoArquivo){
    
    const enconding = 'utf-8';
    //fs.readFile(filePath(string), enconding, callback function(parametros: erro, dados))
    fs.readFile(caminhoDoArquivo, enconding, (_, texto) => {
        console.log(chalk.green(texto));
    })
}

pegaArquivo('./arquivos/texto1.md')