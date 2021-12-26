const fs = require('fs')

const caminho = __dirname + '/arquivoDeLeitura.json' //pegando caminho de onde o arquivo está.

//sincrono

const conteudo = fs.readFileSync(caminho, 'utf-8') // fazendo a leitura do arquivo usando formato utf-8 como params.
console.log(conteudo)

//assincrono

fs.readFile(caminho, 'utf-8', (err, conteudo ) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`) // fazendo a leitura de um arquivo de forma asyncrona.
})

const config = require('./arquivoDeLeitura.json')  // fazendo a leitura de forma direta se for JSON.
console.log(config)
console.log(config.db.port)
console.log(config.db.user)

//__dirname === diretório atual