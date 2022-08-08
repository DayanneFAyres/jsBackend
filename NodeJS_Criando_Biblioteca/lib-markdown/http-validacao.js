import fetch from 'node-fetch';

function manejaErros(erro){
    throw new Error(erro.message);
}
async function checaStatus(arrayURLs){
    try{
        const arrayStatus = await Promise
            .all(arrayURLs
                .map(async url => {
                    const res = await fetch(url);
                    return res.status;
        }));
        return arrayStatus;
    }
    catch(erro){
        manejaErros(erro);
    }
}

function geraArrayURLs(arrayLinks){
    return arrayLinks.map(objetoLink => Object.values(objetoLink).join());
}

async function validaURLs(arrayLinks){
    const links = geraArrayURLs(arrayLinks);
    const statusLinks = await checaStatus(links);

    //spread operator ... para reconstruir ou remontar um objeto
    // como o retorno da função é um objeto e precisa das chaves, é necessario colocar parenteses tbm, 
    // somente chaves poderia indicar abrir um bloco
    const resultados = arrayLinks
        .map((objeto, indice) => ({ 
            ...objeto, 
            status: statusLinks[indice]
    }));
    return resultados;
}

export default validaURLs;