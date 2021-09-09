/**
 * Functions
 */
const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;


/**
 * Main code
 */
let squads = [
    {
        "nome": 'Atalanta',
        "punti": 0,
        "falli": 0
    },
    {
        "nome": 'Bologna',
        "punti": 0,
        "falli": 0
    },
    {
        "nome": 'Cagliari',
        "punti": 0,
        "falli": 0
    },
    {
        "nome": 'Empoli',
        "punti": 0,
        "falli": 0
    },
    {
        "nome": 'Fiorentina',
        "punti": 0,
        "falli": 0
    },
    {
        "nome": 'Genoa',
        "punti": 0,
        "falli": 0
    },
    {
        "nome": 'Inter',
        "punti": 0,
        "falli": 0
    },
    {
        "nome": 'Juventus',
        "punti": 0,
        "falli": 0
    },
    {
        "nome": 'Lazio',
        "punti": 0,
        "falli": 0
    },
    {
        "nome": 'Milan',
        "punti": 0,
        "falli": 0
    },
    {
        "nome": 'Napoli',
        "punti": 0,
        "falli": 0
    },
    {
        "nome": 'Roma',
        "punti": 0,
        "falli": 0
    },
    {
        "nome": 'Salernitana',
        "punti": 0,
        "falli": 0
    },
    {
        "nome": 'Sampdoria',
        "punti": 0,
        "falli": 0
    },
    {
        "nome": 'Sassuolo',
        "punti": 0,
        "falli": 0
    },
    {
        "nome": 'Spezia',
        "punti": 0,
        "falli": 0
    },
    {
        "nome": 'Torino',
        "punti": 0,
        "falli": 0
    },
    {
        "nome": 'Udinese',
        "punti": 0,
        "falli": 0
    },
    {
        "nome": 'Venezia',
        "punti": 0,
        "falli": 0
    },
    {
        "nome": 'Verona',
        "punti": 0,
        "falli": 0
    }
];

for(let i = 0; i < squads.length; i++) {
    squads[i].punti = randomNumber(23, 98);
    squads[i].falli = randomNumber(250, 500);
}

squads.sort((a, b) => {
    return a.punti - b.punti;
});

squads = squads.reverse();

// employees.forEach((e) => {
//     console.log(`${e.firstName} ${e.lastName} ${e.age}`);
// });

for (let i = 0; i < squads.length; i++) {
    const {nome, punti, falli} = squads[i];
    document.getElementById('squads').innerHTML += `<div id="rankingSquads">${i+1}.    ${nome}     Punti: ${punti}    Falli subiti: ${falli} <br> <br></div>`
    const rankingSquads = document.getElementById('rankingSquads');
    if (i == 1) rankingSquads.style.color = "dark green";
    if (i == 2 || i == 3 || i == 4) rankingSquads.style.color = "green";



    // switch(i) {
    //     case 1:
    //         rankingSquads.style.color = "dark green";
    //         break;
    //     case 2:
    //     case 3:
    //     case 4:
            
    //         break;
    //     case 5:
    //     case 6:
    //         rankingSquads.style.color = "red";
    //         break;
    //     case 7:
    //         rankingSquads.style.color = "ligth blue";
    //         break;
    //     case 18:
    //     case 19:
    //     case 20:
    //         rankingSquads.style.color = "dark red";
    //         break;
    // }
}

console.log(squads);