// ok ok ok


// Tem-se um conjunto de dados contendo a altura e o sexo (M ou F) de 15 pessoas. Faça um programa que calcule e escreva:	
// a maior e a menor altura do grupo;
// a média de altura das mulheres;
// o número de homens.




const arquivos = [
    {
        "sexo": "F",
        "nome": "Abigael Natte",
        "altura": 1.80
    },
    {
        
        "sexo": "M",
        "nome": "Ramon Connell",
        "altura": 1.65
    },
    {
        
        "sexo": "M",
        "nome": "Jarret Lafuente",
        "altura": 1.70
    },
    {
        
        "sexo": "F",
        "nome": "Ansel Ardley",
        "altura": 1.50
    },
    {
        
        "sexo": "F",
        "nome": "Jacki Shurmer",
        "altura": 1.84
    },
    {
        
        "sexo": "M",
        "nome": "Jobi Mawtus",
        "altura": 1.73
    },
    {
        
        "sexo": "M",
        "nome": "Thomasin Latour",
        "altura": 1.68
    },
    {
        
        "sexo": "S",
        "nome": "Lonnie Verheijden",
        "altura": 1.80
    },
    {
        
        "sexo": "M",
        "nome": "Alonso Wannan",
        "altura": 1.76
    },
    {
        
        "sexo": "F",
        "nome": "Bendite Huggett",
        "altura": 1.88
    }
  ]

console.log("1º")
arquivos.sort(function(a, b) {
    if (a.altura>b.altura) return 1;
    if (a.altura<b.altura) return -1;
    return 0;
});

console.log("Menor altura - "+arquivos[0].altura+" e "+ "Maior altura - "+arquivos[9].altura)


console.log("2º")

let sexo1 = arquivos.filter(function(x) {
    if(x.sexo=="F"){
        return  x;
    }
    
});

let media = sexo1.map(function(z){
    return z.altura
});

let comprimentoArray = media.length

let media2 = media.reduce(function(a, b){
    return a+b
});
console.log("A média de altura das mulheres é "+media2/comprimentoArray)

console.log("3º")
let sexo2 = arquivos.filter(function(x) {
    if(x.sexo=="M"){
        return  x;
    }
});
console.log("Existem "+sexo2.length+" homens!")

