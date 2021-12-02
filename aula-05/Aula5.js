// adição
console.log(4+2);


//subtração
console.log(4-3);


//multiplicação
console.log(3*4);


//divisão
console.log(3/4);


//incremento
let numero = 10;
console.log(++numero);


//descremento
let valor = 8;
console.log(--valor);


//sobra da divisão
console.log(5%4);


//comparação simples
console.log(5==7);


// comparação rigorosa
console.log(5!="5");
//ou
console.log(5!=="5"); //verifica se o valor e/ou o tipo de dados é diferente




//comparações: > ; >= ; < ; <=
console.log(5>5);
console.log(5<=5);


//comparação de igualdade string

console.log("ola"=="ola");



//comparadores lógico &&
console.log(10>5 && 8<10);

console.log(10>5 && 8>10 && 11<2);


//comparadores lógico OR ||
console.log(10>5 || 8>10);
console.log(10<5 || 8>10);


//comparadores lógico negação !
console.log(5>3) ; //verdade
console.log(!5>3);  // alterando, negando a verdade


//contatenação
let nome = "Gabi"
let sobrenome = "Nakasone"

console.log (nome + " " + sobrenome);



// funções
// forma declarada ou tradicional
function darOi(){
    console.log("Olá tudo bem?")
};

darOi() 
darOi()


// funções
// forma expressa

let somar = function(){
    console.log(1 + 3);
}
somar();



let adicao = function(numA, numB){
    console.log(numA + numB);
}
adicao(10,2);




function soma(x,y){ // criar função
    return x + y; //retorna calculo
}

console.log ( soma(15, 10) ); // printei o retorno da função


function soma(nome,idade){ // criar função
    return nome+" tem "+idade; //retorna calculo de nome. " tem " retorna espaço e a palavra tem quando eu quero acrescentar. +idade retorna dado 
}

console.log ( soma('Gabi', 26) ); // printei o retorno da função


function pessoa(nome,idade){
    return nome+" tem "+idade;

}

console.log( pessoa("João", 25));


function somar(x,y){
    return x+y;
}

let result = somar(15,5);

console.log(somar(20,15))
console.log(somar(2,15))