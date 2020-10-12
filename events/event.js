const {EventEmitter} = require('events')

class Evento extends EventEmitter{}

const meuEvento = new Evento()

// Subscriber - assinante
meuEvento.on('Seguranca', (x, y) =>{
    console.log(`Executando o evento 'Seguranca': ${x} ${y}`)
})

// Publisher - emissor
meuEvento.emit('Seguranca', 'userAdmin', 'Alterou Salario')

meuEvento.on('Encerrar',(dados) => {
    console.log('Assinante: ' + dados)
})

meuEvento.emit('Encerrar', 'Encerrando a execução da importação de dados')