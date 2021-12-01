// let valor=5;
// let fatorial=1;
// for (let i=valor; i>1; i--){
//     fatorial*=i;
// }
// console.log("Fatorial = "+fatorial);


// let valor=5;
// let fatorial=1;
// for (let i=valor; i>1; i--){
//     fatorial=i;
// }
// console.log("Fatorial = "+fatorial);

// let valor=5;
// let fatorial=1;
// for (let i=0; i<=5; i++){
//     fatorial*=i;
// }
// console.log("Fatorial = "+fatorial);


// let valor=5;
// let fatorial=1;
// for (let i=valor; i<=5; i++){
//     fatorial+=i;
// }
// console.log("Fatorial = "+fatorial);


// for (var i=0; i<50; i+=10){
//     console.log(i);
// }
// console.log(i);


// function soletrar(texto){
//     console.log(texto.replace('-','').
//     toLocaleUpperCase().split("").join("-"));
// }
// soletrar("digital-house");
// soletrar("ctd");

// let frutasAmarelas= ['Melão','Mamão','Limão'];
// let [fruta1,fruta2,fruta3]= frutasAmarelas;

// console.log(fruta1);
// console.log(fruta2);
// console.log(fruta3);
// console.log(frutasAmarelas);


// let x=50;
// let resto=50%2;
//     resposta = resto==0 ? 'Par' : 'Impar';


// console.log(resposta);


// let x=5;
// let y= x++ + ++x;
// console.log("y= "+y);
// x=3
// y=x*(x+1)*x++;
// x=5;
// y=3;
// y*=x+1
// console.log("x= "+x);
// console.log("y= "+y);


// var z=0;
// for (var i=20; i<50; i+=10);{
//     z+=i;
// }
// console.log(z);

// function soma (a=1, b=3)
// {return a+b;}

// console.log(soma());
// console.log(soma(3));
// console.log(soma(1,2));


// let numeros= [10, 8, 7, 99, 0, 1, 6]
// numeros.sort(function(a,b){ return b-a;});
// console.log(numeros)


let frutasAmarelas=['Melão', 'Mamão', 'Limão siciliano']; //linha1: está criando a variável 'frutasAmarelas' e dizendo que essa variável é igual (corresponde) as strings que estão dentro do colchetes
let frutasVermelhas=['Morango', 'Cereja', 'Maça red'];  //linha2:está criando a variável 'frutasVermelhas' e dizendo que essa variável é igual (corresponde) as strings que estão dentro do colchetes
let frutasVerdes=['Limão', 'Kiwi', 'Maça verde'];  //linha3:está criando a variável 'frutasVerdes' e dizendo que essa variável é igual (corresponde) as strings que estão dentro do colchetes

frutasVermelhas1=frutasVermelhas.map(fruta => fruta.toUpperCase()); //linha5: .map esta chamando a função callback para cada elemento do Array original por parâmetro. toUpperCase esta alterando as letras para todas maiúsculas. Então, frutasVermelhas será frutasVermelhas1 e será impresso os nomes com todas as letras maiúsculas. 
let todasFrutas=[...frutasAmarelas,...frutasVermelhas1,...frutasVerdes]; //linha6: esta criando a variável todasFrutas sendo ela igual combinação dos let anteriores (frutasAmarelas, frutasVermelhas, frutasVerdes) usando reticências para permitir chamar todos a quem pertence no formato de array
console.log(todasFrutas);     //linha7:irá imprimir o resultado de todasFrutas que foram detalhadas na linha de código acima