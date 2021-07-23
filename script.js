let ranking  = [
    {  
    nome: 'Julia Gama', 
    pontos: 142 
    },    
    
    {
    nome: 'Laudemir',
    pontos: 250
    },
    
    {
    nome: 'Emanuel Martins',
    pontos: 136
    },    
    
    {
    nome: 'Lucas Elias',
    pontos: 154
    },    
    
    {
    nome: 'Ian kuntz',
    pontos: 110
    },
    
    {
    nome: 'João Pedro Nonato', 
    pontos: 156
    },
    
    {
    nome: 'Sthéfany Gomes',
    pontos: 174
    },
    
    
    {
    nome: 'Rafael Sousa', 
    pontos: 169
    },
    
    
    {
    nome: 'Wallace Silva', 
    pontos: 334
    },    
    
    {
    nome: 'Madu Rubini',
    pontos: 184
    },    
    
    {
    nome: 'Felipe Silveira',
    pontos: 389
    },
    
    {
    nome: 'Natan dos Santos',
    pontos: 75
    },
    
    {
    nome: 'Matheus Bueno',
    pontos: 364
    },    
    
    {
    nome: 'Miguel Teruel',
    pontos: 171
    },
    
    {
    nome: 'Ique Moraes',
    pontos: 127
    },
        
    {
    nome: 'Nicholas dos Santos',
    pontos: 69
    },
    
    
    {
    nome: 'Gabriel Gutierrez',
    pontos: 222
    },    
    
    { 
    nome: 'Renato Tateiwa',
    pontos: 364
    },    
    
    { 
    nome: 'Glen Escobar',
    pontos: 218
    },  
    
    
    { 
    nome: 'Willian Santos',
    pontos: 142
    },    
    
    { 
    nome: 'Mateus Alves',
    pontos: 264
    },    
    
    { 
    nome: 'Kaueh Prats',
    pontos: 138
    },    
    
    { 
    nome: 'Ricardo Oliveira',
    pontos: 138
    },
    
    
    { 
    nome: 'Victor Scherer',
    pontos: 118
    },    
    
    { 
    nome: 'Natalia Veríssimo',
    pontos: 118
    },    
    
    { 
    nome: 'Luciana Nunes',
    pontos: 97
    },   
    
    { 
    nome: 'Thiago Trad',
    pontos: 180
    }];


    ranking.sort(function (a, b) {
        if (a.pontos < b.pontos) {
        return 1;
        }
        if (a.pontos > b.pontos) {
        return -1;
        }
        // a must be equal to b
        return 0;
  });

  //console.log(ranking)

let arrTop = []
for (let i = 0; i < 5; i++){
    arrTop.push(ranking[i])
}


const listas = [];
listas[0] = { nome: 'Renato Tateiwa', pontos: 322 };
listas[1] = { nome: 'Felipe Silveira', pontos: 311 };
listas[2] = { nome: 'Wallace Silva', pontos: 281 };
listas[3] = { nome: 'Matheus Bueno', pontos: 220 };
listas[4] = { nome: 'Glen Escobar', pontos: 218 };

const novalista = listas.map(lista => ({
    nome: lista.nome,
    pontos: lista.pontos
}))


document.getElementById("first").innerHTML = Object.values(arrTop[0]);
document.getElementById("second").innerHTML = Object.values(arrTop[1]);
document.getElementById("third").innerHTML = Object.values(arrTop[2]);
document.getElementById("fourth").innerHTML = Object.values(arrTop[3]);
document.getElementById("fifth").innerHTML = Object.values(arrTop[4]);


//console.log(Object.values(arrTop[0]));





