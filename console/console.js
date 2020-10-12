console.log('Exibindo uma mensagem no console!')

//Erro

console.error(new Error('Exibindo a Mensagem de erro, temos problemas'));

// Tabela

const carros = ['GM', 'Fiat', 'FORD', 'VW', 'Renault', 'Honda', 'Hyundai']
console.table(carros)

const dados = {name: 'Diogo Souza', empresa: 'DGCorp'}
console.table(dados)

console.count('Processo')
console.count('Processo')
console.count('Processo')
console.count('Processo')

console.log('Resetando o processo')
console.countReset('Processo')
console.count('Processo')

// Tempo

console.time('Contador')
for (let index = 0; index < 100; index++) {
    //console.log(' - ')    
}
console.timeEnd('Contador')

// Assert

console.assert(true, 'Faça alguma coisa')
console.assert(false, 'Ih Rapaz %s, que pena!', 'Não Funcionou')

// Limpar console
//console.clear()
