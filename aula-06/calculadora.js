//Crie uma função adicionar, que deverá receber dois parâmetros e retornar a soma deles.

function soma( x,y){
    return x+y
}

console.log(soma(2,2));



//Crie uma função de subtração, que deverá receber dois parâmetros e retornar a subtração do primeiro menos o segundo.
function subtracao(w,z){
    return w-z
}

console.log(subtracao(7,3));

//Crie uma função de multiplicação, que deverá receber dois parâmetros e retornar o resultado de sua multiplicação.

function multiplicacao(a,b){
    return a*b
}

console.log(multiplicacao(4,1));


//Crie uma função de divisão, que receberá dois parâmetros e retornará o resultado da divisão do primeiro sobre o segundo.

function divisao(a,b){
    return a/b
}

console.log(divisao(4,1));

//No seu arquivo calculadora.js,  a partir das 4 funções feitas anteriormente, crie um console.log no qual você irá colocar uma string para indicar que abaixo dela você começará a testar as funções, por exemplo:
//console.log ("-------------- Teste de Operações / Calculadora --------------")


//Execute a função que soma e a função que subtrai, passando quaisquer dois números como argumentos. Mostrar resultados no console.


//Execute a função que multiplica, passando quaisquer dois números como argumentos. Mostre o resultado no console.


//Execute a função que faz divisão, passando quaisquer dois números como argumentos. Mostre o resultado no console.


//Execute a função que faz divisão, passando agora o número zero como um dos dois argumentos. Mostre o resultado no console.




//Crie uma função chamada quadradoDoNumero, que recebe um número como parâmetro e deve retornar esse número multiplicado por ele mesmo, ou seja, ao quadrado.
//Importante: quadradoDoNumero() deve usar a função multiplicação() para calcular o quadrado do parâmetro inserido em power().

function quadradoDoNumero (x){
    return multiplicacao(x,x)
}
console.log(quadradoDoNumero(3));

//Crie a função mediaDeTresNumeros, ela deve calcular a média de 3 números, que serão inseridos por parâmetro.
//Importante: Em mediaDeTresNumeros() você precisará usar algumas funções criadas anteriormente em nossa calculadora.

function mediaDeTresNumeros(x,y,z){
    let soma1 = soma (x,y)
    let soma2 = soma (soma1,z)
    return divisao(soma2,3)
}

console.log(mediaDeTresNumeros(5,5,5));



//Crie a função calculaPorcentagem, que receberá dois parâmetros: o número total e a porcentagem que deseja calcular, e que deverá retornar x% de totalPorcentagem.
//Exemplo: calculaPorcentagem(300, 15)  (deve retornar 45, pois é 15% de 300). 
//Importante: calculaPorcentagem() você precisará usar algumas funções criadas anteriormente em nossa calculadora.

function calculaPorcentagem(a,b){
    let multiplicar1 = multiplicacao(a,b)
    return divisao(multiplicar1, 100)

}

console.log(calculaPorcentagem(300,15));

//Crie uma função geradorDePorcentagem que leva dois parâmetros, e que deverá retornar a porcentagem do primeiro em relação ao segundo parâmetro.
//Exemplo: geradorDePorcentagem (2, 200) (deve retornar 1 já que 2 é 1% de 200).

function geradorDePorcentagem(z,w){
    let result = divisao(z,w)
    return multiplicacao (result,100)
}


console.log(geradorDePorcentagem(2,200));