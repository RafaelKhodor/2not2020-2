// Expressão de função "tradicional"

// Características desta função
// - Um único argumento -> n
// - Seu corpotem apenas uma lista de código com return

let quadrado = function(n) {
    return n * n
}

console.log(quadrado(6))

console.log('------------------------------------------')

// A função tradicional acima pode ser transformada em uma ARROW FUNCTION
// - Desaparece a palavra function
// - O argumento não precisa de parênteses 
// - Após o argumento há a flecha (arrow) =>
// - As chaves e a palavra return são omitidos
let quadrado2 = n => n * n

console.log(quadrado2(6))

// Situação alternativa 1: função sem argumento

// Retorna um número aleatório entre 0 e 99
let aleatorio = function() {
    // Math.randow() -> gera um número aleatório entre 0 e 1 (fracionário)
    // Math.floor() -> "corta fora" as casas decimais de um número
    return Math.floor(Math.random() * 1000)
}

console.log('------------------------------------------')

console.log(aleatorio())

console.log('------------------------------------------')

// Aroow function com 0 argumento
// - Os parênteses vazios marcam o lugar do argumento (obrigatório)
let aleatorio2 = () => Math.floor(Math.random() * 1000)

// Situação alternativa 2: função com 1+ argumentos
let imc = function(peso, altura) {
    return peso / (altura ** 2)
}

// Arrow function com 1+ argumento
// Os parênteses dos argumentos são obrigatórios quando nº de argumentos > 1
let imc2 = (peso, altura) => peso / (altura ** 2)

console.log(imc(87,1.78))

console.log('------------------------------------------')

console.log(imc2(87, 1.78))

console.log('------------------------------------------')

// CONCLUSÃO: os parênteses só podem ser omitidos da lista de argumentos
// de uma arrow function quando há UM e APENAS UM argumento.

// Situação alternativa 3: funções com maus de uma linha no corpo

// Função tradicional
let fatorial = function(n) {
    let res = 1
    for(let i = n; i > 1; i--) {
    res *= i
    }
    return res
}

console.log(fatorial(5))

console.log('------------------------------------------')

// Arrow function com corpo maior que uma linha 
// - Não há como fazer otimização quanto ao corpo da função

let fatorial2 = n => {
    let res = 1
    for (let i = n; i > 1; i--) {
        res *= i
    }
    return res
}

console.log(fatorial2(5))

console.log('----------------------------------------')

