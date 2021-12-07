// ok ok ok

// Cada espectador de um cinema respondeu a um questionário no qual constava sua idade e a sua opinião em relação ao filme: ótimo - 3, bom - 2, regular -1.
// Faça um programa que receba a idade e a opinião de 15 espectadores, calcule e imprima:
// 1- a média das idades das pessoas que responderam ótimo;
// 2- quantidade de pessoas que responderam regular;
// 3-a porcentagem de pessoas que responderam bom entre todos os espectadores analisados.




let espectadores = [];

function Espectador(idade,opiniao){
    this.idade = idade;
    this.opiniao = opiniao;
}

espectadores.push(new Espectador(17,'ótimo'));
espectadores.push(new Espectador(13,'bom'));
espectadores.push(new Espectador(15,'regular'));
espectadores.push(new Espectador(18,'ótimo'));
espectadores.push(new Espectador(22,'bom'));
espectadores.push(new Espectador(34,'ótimo'));
espectadores.push(new Espectador(50,'regular'));
espectadores.push(new Espectador(25,'bom'));
espectadores.push(new Espectador(30,'ótimo'));
espectadores.push(new Espectador(14,'regular'));
espectadores.push(new Espectador(21,'ótimo'));
espectadores.push(new Espectador(20,'bom'));
espectadores.push(new Espectador(15,'regular'));
espectadores.push(new Espectador(22,'ótimo'));
espectadores.push(new Espectador(23,'bom'));



// 1

let var1 = espectadores.filter(function(x){
    if(x.opiniao=="ótimo"){
        return x;
    }
});
// console.log(var1)  retornando todos que avaliaram como ótimo

let var2 = var1.map(function(z){
    return z.idade
})
// console.log(var2)  retornando só as idades das pessoas que avaliaram como ótimo

let comprimentoArray = var2.length 

let soma1 = var2.reduce(function(a,b){
    return a+b
});

// console.log("A média das idades é "+soma1/comprimentoArray)  retornando a média das idades de quem avaliou como ótimo


// 2
let var3 = espectadores.filter(function(x){
    if(x.opiniao=="regular"){
        return x;
    }
});
// console.log("A quantidade de pessoas que responderam regular é "+var3.length);  retornando a quantidade de pessoas que responderam regular (.length = somatória)


// 3

let var4 = espectadores.filter(function(x){
    if(x.opiniao=="bom"){
        return x;
    }
});
// console.log(var4)   retornando todos que avaliaram como bom

let var5 = (var4.length/espectadores.length)*100

// console.log(var5+"%")   retornando porcentagem de pessoas que responderam bom entre todos os espectadores analisados.