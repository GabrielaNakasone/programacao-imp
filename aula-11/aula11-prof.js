


// let arrayNome = ["Marcos", "João", "Fulano", "Ciclano", "Giovanna"];
// console.log("1  - ",arrayNome[1]);

// console.log(arrayNome.length);
// for (let j = 0; j < arrayNome.length; j++) {
//     console.log(j," - ",arrayNome[j]);
// }

// let contador = 1;
// while(contador <= 5){
//     console.log(contador,"Ola pessoal ");
//     contador++;
// }
// console.log("---------------");
// contador = 1;
// do{
//     console.log(contador,"Ola pessoal ");
//     contador++;
// }while (contador <= 5);

// for(let contador = 1; contador <=5; contador++){
//     console.log(contador," - Olá mundo ");
// }

// for (let i = 1; i <=10; i++) {//loop que pecorre do 1 até o 10 
//     //verificar se é impar 
//     // console.log(i%2)
//     if(i%2 != 0){// se o numero divido por 2 o resto for != 0, quer dizer que ele é impar 
//         console.log("numero ímpar == ",i);
//     }
// }
let listaFilmes2 = ["filme1", "filme1", "filme1"];

let listaFilmes1 = ["filme1", "filme1", "filme1", "filme1", "novo filme"];

function converterMaiusculas(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].toUpperCase()
    }
    console.log(array);
}
// converterMaiusculas(listaFilmes1)
// console.log(  );

function passagemDeElementos(array1, array2) {
    let invalido = array2.pop();
    let qtd = array2.length;

    for (let i = 0; i < qtd; i++) {
        array1.push(array2.pop().toUpperCase())
    }

    console.log("esse filme é invalido ", invalido);
    return array1
}

let filmes = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"];
let filmes2 = ["toy story", "finding nemo", "kung-fu panda", "wally", "fortnite"];

// console.log( passagemDeElementos(filmes, filmes2 ) );

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function compararClassificacoes(asia, europa) {
    let comparacoesAsiaEuropa = [];
    for (let i = 0; i < asia.length; i++) {
        comparacoesAsiaEuropa[i] = asia[i] === europa[i];
    }
    return comparacoesAsiaEuropa;
}

console.log( compararClassificacoes(asiaScores, euroScores) );