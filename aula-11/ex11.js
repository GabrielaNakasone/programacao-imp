
// 1 - 


let filmes = ["star wars", "totoro",  "rocky", "pulp fiction",  "la vida es bella"];
let filmes2 = ["toy story", "finding nemo", "kung-fu panda", "wally", "fortnite"];


function upper(array){
    for (let i=0; i<array.length; i++){
        array[i]= array[i].toUpperCase();  
     }
     return array;
}
console.log(upper(filmes));


// 2 - Agora precisamos modificar afunçãode passagemde elemento() que nos permite adicionar o conteúdo de nossa matriz de filme animado à matriz de filme original.



function passagemDeElementos(array1, array2) {
    let qtd= array2.length
    for (let i=1; i< qtd; i++){
        console.log(array2.length);
        array1.push(array2.pop(). toUpperCase())
    }
    return array1
}



// 4 - 

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function compararClassificacoes(asia, europa) {
  let comparacoesAsiaEuropa = []
  comparacoesAsiaEuropa[0] = asia[0] === europa[0]
  comparacoesAsiaEuropa[1] = asia[1] === europa[1]
  comparacoesAsiaEuropa[2] = asia[2] === europa[2]
  comparacoesAsiaEuropa[3] = asia[3] === europa[3]
}