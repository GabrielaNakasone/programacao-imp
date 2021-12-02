// OK OK OK

// 1.O que cada expressão retorna?
// Dê uma olhada nestes exemplos e pense sobre o que cada um retorna:

// !true        --> FALSE
// !false       --> TRUE
// !!false      --> FALSE
// !!true       --> TRUE
// !1           --> FALSE
// !!1          --> TRUE
// !0           --> TRUE
// !!0          --> FALSE
// !!""         --> FALSE
// let x = 5 ;
// let y = 9;
// x < 10 && x!==5
// x>9 || x===5
// console.log(!(x===y))       --> TRUE



// 2.O que cada expressão retorna?


// 1. RETORNA true
// let x=10
// let y ="a"
// console.log(y==="b" || x >= 10) 


// 2. RETORNA false
// let x=3
// let y=8
// console.log(!(x == "3" || x === y) && !(y !== 8 && x <= y))



// 3. RETORNA false
// let str = ""
// let msg = "haha!"
// let eBonito = "false"
console.log(!((str || msg) && eBonito))




