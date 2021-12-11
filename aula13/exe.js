const jsonConvertidos = require('./mesa');

let json = JSON.parse(jsonConvertidos)

function converteArray(jason) {
  let clientes = [];
  for (let i = 0; i < jason.length; i++) {
      clientes.push(jason[i]);        
  }
  return clientes
}

let banco = {
  clientes: converteArray(json),
  consultarCliente: function (nome) {
      for (let i = 0; i < this.clientes.length; i++) {
        if (nome == this.clientes[i].titular) {
          console.log(this.clientes[i])
        }
        else{
          console.log(nome+" não possui conta em nosso banco.")
        }
      }
    }
}
banco.consultarCliente('Marcos');


let json = [
    {titular: "Abldael Natte",
saldo: 27771,
Tipo: "cc",
numero: 5486273622,
},

{titular: "Ramom Connell",
saldo: 8675,
Tipo: "poup",
numero: 1183971869,
},

{titular: "Jarret Lafuente",
saldo: 27363,
Tipo: "poup",
numero: 9582019689,
},


{titular: "Ansel Ardley",
saldo: 32415,
Tipo: "poup",
numero: 1761924656,
},


{titular: "Jacki Shurmer",
saldo: 18789,
Tipo: "poup",
numero: 7401971607,
},

{titular: "Jobi Mawtus",
saldo: 28776,
Tipo: "cc",
numero: 630841470,
},

{titular: "Thomasin Latour",
saldo: 2177,
Tipo: "cc",
numero: 4223508636,
},


{titular: "Lonnie Verheijden",
saldo:25994,
Tipo:"poup",
numero:185979521,
},

{titular:"Alonso Wannan",
saldo:7601,
Tipo:"cc",
numero:3151956165,
},



{titular:"Bendite Huggett",
saldo:33196,
Tipo:"poup",
numero:2138105881,
}
];

let jsonConvertidos = JSON.stringify(json);

module.exports = jsonConvertidos;


console.log(jsonConvertidos);


