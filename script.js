let ranking  = [
    {  
    nome: 'Julia Gama', 
    pontos: 132 
    },    
    
    {
    nome: 'Laudemir',
    pontos: 250
    },
    
    {
    nome: 'Emanuel Martins',
    pontos: 130
    },    
    
    {
    nome: 'Lucas Elias',
    pontos: 139
    },    
    
    {
    nome: 'Ian kuntz',
    pontos: 89
    },
    
    {
    nome: 'João Pedro Nonato', 
    pontos: 132
    },
    
    {
    nome: 'Sthéfany Gomes',
    pontos: 165
    },
    
    
    {
    nome: 'Rafael Sousa', 
    pontos: 163
    },
    
    
    {
    nome: 'Wallace Silva', 
    pontos: 287
    },    
    
    {
    nome: 'Madu Rubini',
    pontos: 166
    },    
    
    {
    nome: 'Felipe Silveira',
    pontos: 343
    },
    
    {
    nome: 'Natan dos Santos',
    pontos: 69
    },
    
    {
    nome: 'Matheus Bueno',
    pontos: 220,
    },    
    
    {
    nome: 'Miguel Teruel',
    pontos: 162
    },
    
    {
    nome: 'Ique Moraes',
    pontos: 85
    },
        
    {
    nome: 'Nicholas dos Santos',
    pontos: 69
    },
    
    
    {
    nome: 'Gabriel Gutierrez',
    pontos: 219
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
    pontos: 126
    },    
    
    { 
    nome: 'Mateus Alves',
    pontos: 250
    },    
    
    { 
    nome: 'Kaueh Prats',
    pontos: 130
    },    
    
    { 
    nome: 'Ricardo Oliveira',
    pontos: 126
    },
    
    
    { 
    nome: 'Victor Scherer',
    pontos: 106
    },    
    
    { 
    nome: 'Natalia Veríssimo',
    pontos: 0
    },    
    
    { 
    nome: 'Luciana Nunes',
    pontos: 81
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





