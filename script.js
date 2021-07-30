let ranking  = [
    {  
    nome: 'Julia Gama', 
    pontos: 214 
    },    
    
    {
    nome: 'Laudemir',
    pontos: 366
    },
    
    {
    nome: 'Emanuel Martins',
    pontos: 277
    },    
    
    {
    nome: 'Lucas Elias',
    pontos: 182
    },    
    
    {
    nome: 'Ian kuntz',
    pontos: 129
    },
    
    {
    nome: 'João Pedro Nonato', 
    pontos: 200
    },
    
    {
    nome: 'Sthéfany Gomes',
    pontos: 259
    },
    
    
    {
    nome: 'Rafael Sousa', 
    pontos: 304
    },
    
    
    {
    nome: 'Wallace Silva', 
    pontos: 545
    },    
    
    {
    nome: 'Madu Rubini',
    pontos: 262
    },    
    
    {
    nome: 'Felipe Silveira',
    pontos: 645
    },
    
    {
    nome: 'Natan dos Santos',
    pontos: 223
    },
    
    {
    nome: 'Matheus Bueno',
    pontos: 800
    },    
    
    {
    nome: 'Miguel Teruel',
    pontos: 216
    },
    
    {
    nome: 'Ique Moraes',
    pontos: 186
    },
        
    {
    nome: 'Nicholas dos Santos',
    pontos: 125
    },
    
    
    {
    nome: 'Gabriel Gutierrez',
    pontos: 228
    },    
    
    { 
    nome: 'Renato Tateiwa',
    pontos: 610
    },    
    
    { 
    nome: 'Glen Escobar',
    pontos: 262
    },  
    
    
    { 
    nome: 'Willian Santos',
    pontos: 190
    },    
    
    { 
    nome: 'Mateus Alves',
    pontos: 344
    },    
    
    { 
    nome: 'Kaueh Prats',
    pontos: 216
    },    
    
    { 
    nome: 'Ricardo Oliveira',
    pontos: 150
    },
    
    
    { 
    nome: 'Victor Scherer',
    pontos: 213
    },    
    
    { 
    nome: 'Natalia Veríssimo',
    pontos: 118
    },    
    
    { 
    nome: 'Luciana Nunes',
    pontos: 195
    },   
    
    { 
    nome: 'Thiago Trad',
    pontos: 208
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





