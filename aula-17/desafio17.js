// ok ok ok


// Crie uma função que receba um array composto por números e retorna uma nova matriz (array) com todos os valores divididos pela soma de toda a matriz, usando map() e reduce().
 
let arrayNum = [1,2,3,4,5]
 
function divisorDeArrays(numeros) {
    let soma = numeros.reduce((acum, numero) => acum + numero)
    let arrayResultado = numeros.map(numero => numero / soma)
    return arrayResultado
}
console.log(divisorDeArrays(arrayNum))
 


//Crie uma função que receba um array de palavras e um número, e que retorna uma matriz (array) com apenas as palavras que têm mais do que uma quantidade de letras maior do que o número informado. (verifique como funciona o método filter ()).
 
let arrayPalavras = ["leandro", "nicolas", "esteban", "pedro", "jose"]
 
function filtroDeArrays(palavras, numero) {
    let resultado = palavras.filter( palavra => palavra.length > numero )
 
    return resultado
}
console.log (filtroDeArrays)





let verduras = [
    {nome: "lechuga", precoPorKilo: 150, kilosVendidos: 15},
    {nome: "tomate", precoPorKilo: 180, kilosVendidos: 20},
    {nome: "cebolla", precoPorKilo: 70, kilosVendidos: 100},
    {nome: "papa", precoPorKilo: 55, kilosVendidos: 150},
    {nome: "zapallo", precoPorKilo: 75, kilosVendidos: 7}
]
 
 
function lucroTotal(produtos){
    let lucroPorProduto = produtos.map( produto => produto.precoPorKilo * produto.kilosVendidos) 
    let resultado = lucroPorProduto.reduce((acum, elemento) => acum+elemento)
    return resultado
}
 
function encontrarProduto(produtos, produtoAEncontrar){
    return produtos.find(produto => produto.nome === produtoAEncontrar)
}
let lechuga = encontrarProduto(verduras, "lechuga")
console.log(lechuga);
 




function vendiMasQue(produtos, num){
    let resultado = produtos.filter( produto => produto.kilosVendidos > num)
    return resultado
}
 
let produto = encontrarProduto(verduras, "lechuga").precoPorKilo = 110
console.log(verduras);




let lucroBruto = lucroTotal(verduras)
let lucroLiquido = lucroBruto - lucroBruto * 0.45
 
console.log(lucroLiquido);