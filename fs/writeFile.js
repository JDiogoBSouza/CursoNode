const {writeFile} = require('fs') 

writeFile("arquivo.txt", 'Criando arquivo de Texto com Write File.', (err) => {
    if(err) throw err

    console.log('Arquivo criado com sucesso!');
})