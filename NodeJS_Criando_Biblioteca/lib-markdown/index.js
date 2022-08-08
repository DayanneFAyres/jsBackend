import chalk from 'chalk';
import fs from 'fs';

function extraiLinks(texto){
    /* 
    é necessario incluir / no inicio e no final do regex, com gm no final para que possa reconhecer o padrao.
    gm significa global e com multilinhas, para que nao pare no primeiro match e nem com quebra de linha.

    classes sao representados por colchetes [abc]
    grupos sao representados por parenteses ([a-z][12])
    o circunflexo representa negaçao, sendo o caractere que nao está buscando ^#
    a interrogação representa um caractere opcional, é colocada depois dele. s?
    para incluir um caractere especial que faz parte do padrao regex, coloca-se a \ antes. \(
    O asterisco representa multiplas ocorrencias do padrao em questao. [a-z]*
    */
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s]*.[^\s]*)\)/gm;
    // match é um metodo de string, que retorna todo link sem separar os grupos
    //const linksExtraidos = texto.match(regex);
    const arrayResultados = [];
    let temp;
    while((temp = regex.exec(texto)) !== null){
        arrayResultados.push({[temp[1]]:temp[2]});
    } 
       
    return arrayResultados.length === 0 ? 'não há links' : arrayResultados;

}

function trataErro(erro){
    throw new Error(chalk.red(erro.code, 'não há arquivo no caminho'));
}

// assincrono com async/await
async function pegaArquivo(caminhoDoArquivo){
    
    const encoding = 'utf-8';

    try{
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
        return extraiLinks(texto);
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

//pegaArquivo('.\\arquivos\\texto1.md');
export default pegaArquivo;