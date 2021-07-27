let ranking  = [
    {  
    nome: 'Julia Gama', 
    pontos: 186 
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
    pontos: 174
    },    
    
    {
    nome: 'Ian kuntz',
    pontos: 129
    },
    
    {
    nome: 'João Pedro Nonato', 
    pontos: 192
    },
    
    {
    nome: 'Sthéfany Gomes',
    pontos: 232
    },
    
    
    {
    nome: 'Rafael Sousa', 
    pontos: 201
    },
    
    
    {
    nome: 'Wallace Silva', 
    pontos: 415
    },    
    
    {
    nome: 'Madu Rubini',
    pontos: 228
    },    
    
    {
    nome: 'Felipe Silveira',
    pontos: 521
    },
    
    {
    nome: 'Natan dos Santos',
    pontos: 119
    },
    
    {
    nome: 'Matheus Bueno',
    pontos: 530
    },    
    
    {
    nome: 'Miguel Teruel',
    pontos: 214
    },
    
    {
    nome: 'Ique Moraes',
    pontos: 164
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
    pontos: 566
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
    pontos: 318
    },    
    
    { 
    nome: 'Kaueh Prats',
    pontos: 164
    },    
    
    { 
    nome: 'Ricardo Oliveira',
    pontos: 150
    },
    
    
    { 
    nome: 'Victor Scherer',
    pontos: 184
    },    
    
    { 
    nome: 'Natalia Veríssimo',
    pontos: 118
    },    
    
    { 
    nome: 'Luciana Nunes',
    pontos: 145
    },   
    
    { 
    nome: 'Thiago Trad',
    pontos: 200
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





