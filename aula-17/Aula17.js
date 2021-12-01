// ok ok ok

let numerosPares  = [4,6,8,12,14,16,18,20]

let numerosImpares = numerosPares.map(function(num){
    return num+1
})
console.log(numerosImpares)



let nome = ['João', 'Francisco', 'Maria', 'Maria']

let nomeMaria = nome.filter(function(callback){
    return callback == 'Maria';
})
console.log(nomeMaria)



let numeros = [1,5,9,3,7]

let numerosFormatados = numeros.reduce(function(acumulador, item){
    return acumulador+" - "+item
})
console.log(numerosFormatados)




let animais = ['Cachorro', 'Gato', 'Galinha']

let animais1 = animais.forEach(function(item){
    console.log ('O animal é '+item)
})