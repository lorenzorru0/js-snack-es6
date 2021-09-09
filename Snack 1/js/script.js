const biciDaCorsa = [
    {
        "nome": 'maino',
        "peso": 10
    },
    {
        "nome": 'merida',
        "peso": 8
    },
    {
        "nome": 'tred',
        "peso": 7
    }
];

let biciLeggera;
for(let i = 0; i < biciDaCorsa.length; i++) {
    if(i == 0) {
        biciLeggera = biciDaCorsa[i];
    } else if (biciDaCorsa[i].peso < biciLeggera.peso) {
        biciLeggera = biciDaCorsa[i];
    }
}
const {nome, peso} = biciLeggera;
console.log(`La bici più leggera è la ${nome} e pesa ${peso}kg`);