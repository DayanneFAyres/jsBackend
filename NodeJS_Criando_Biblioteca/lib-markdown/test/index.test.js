import pegaArquivo from '../index.js';

const arrayResult = [
    {
        FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
    }
];

describe('pegaArquivo::', () => {
    it('deve ser uma funcao', () => {
        expect(typeof pegaArquivo).toBe('function');
    });
    it('deve retornar array com resultados', async () => {
        const resultado = await pegaArquivo('./test/arquivos/texto1.md');
        expect(resultado).toEqual(arrayResult);
    });
    it('deve retornar mensagem "nao ha links"', async () => {
        const resultado = await pegaArquivo('./test/arquivos/texto1_semlinks.md');
        expect(resultado).toBe('não há links');
    });
    it('deve lançar um erro na falta de arquivo', async () => {
        await expect(pegaArquivo('./test/arquivos')).rejects.toThrow(/não há arquivo no caminho/);
    });
})

/*
test('deve ser uma funcao', () => {
    expect(typeof pegaArquivo).toBe('function');
});
*/