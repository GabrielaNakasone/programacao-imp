//1- Crie uma função que converta polegadas em centímetros. Recebe pelo parâmetro polegadas e retorna seu equivalente em centímetros.

function convertePolegada(pol) {
    return pol*2,5;
}

console.log(convertePolegada(10));

// 2- Crie uma função que receba uma string e a converta em um URL. ex: "funcaojs" é retornado como "http://www.funcaojs.com.br"

function converterUrl(url){
    return ("http://www." +url+ ".com.br")
}

console.log(converterUrl ("youtube"))

// 3 -Crie uma função que recebe uma string e retorna a mesma frase, mas com o caracter de exclamação ( ! ).

function recebeString(frase) {
    return (frase + "!")
}
console.log(recebeString("Hello"))

// 4 -Crie uma função que calcule a idade dos cachorros, considerando que 1 ano humano, equivale a 7 anos para eles.

function idadeCachorro(Dog){
    return Dog*7;
}

console.log(idadeCachorro(2))

// 5 - Crie uma função que calcule o valor da sua hora de trabalho, tendo como parâmetro o seu salário mensal. 
// PS: considere que você trabalhe 160 horas no mês.

function salarioMensal(valorhora){
    return valorhora*160
}
console.log(salarioMensal(2));

// 6 - Crie a função calculadora de IMC* de uma pessoa, que recebe a altura em centímetros e o peso em quilogramas. 
//Em seguida, execute a função, testando diferentes valores. 

function calcularIMC()