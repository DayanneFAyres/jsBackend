import chalk from 'chalk';
import fs from 'fs';

function trataErro(erro){
    throw new Error(chalk.red(erro.code, 'não há arquivo no caminho'));
}

// assincrono com async/await
async function pegaArquivo(caminhoDoArquivo){
    
    const encoding = 'utf-8';

    try{
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
        console.log(chalk.green(texto))
    }
    catch(erro){
        trataErro(erro);
    }
}

// Com promises
/* function pegaArquivo(caminhoDoArquivo){
    const enconding = 'utf-8';
    // lendo arquivo de forma assíncrona
    fs.promises
    .readFile(caminhoDoArquivo, enconding)
    .then(texto => console.log(chalk.green(texto)))
    .catch(erro => trataErro(erro));
} */

/* function pegaArquivo(caminhoDoArquivo){
    
    const enconding = 'utf-8';
    //fs.readFile(filePath(string), enconding, callback function(parametros: erro, dados))
    fs.readFile(caminhoDoArquivo, enconding, (erro, texto) => {
        if(erro){
            trataErro(erro);
        }
        console.log(chalk.green(texto));
    })
} */

pegaArquivo('./arquivos/texto1.md');