// Scrivi una funzione che accetti tre argomenti, un array e due numeri (a oiù piccolo di b)
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri 
// Usiamo i due nuovi metodi degli array foreach e filter

/**
 * FUNCTIONS
 */

const arrayBetweenAandB = (array, min, max) => {
    let arrayCut = [];

    arrayCut = array.filter( (arr) => {
        return (arr >= min || arr <= max);
    });

    return arrayCut;
};

/**
 * MAIN CODE
 */
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 17, 18, 19, 20];
for (let i = 0; i < array.length; i++) {
    document.getElementById(`stampaArray`).innerHTML += `${array[i]}  `
}
document.getElementById(`a`).value = '';
document.getElementById(`b`).value = '';
let btnTaglia = document.getElementById(`taglia`);
btnTaglia.addEventListener(`click`,
    () => {
        let a = parseInt(document.getElementById(`a`).value);
        let b = parseInt(document.getElementById(`b`).value);
        if (isNaN(a) || isNaN(b) || b <= a) {
            document.getElementById(`arrayTagliato`).innerHTML = `Array tagliato: `;
            alert(`Inserisci dei dati corretti!!`);
            return null;
        }
        let arrayTagliato = arrayBetweenAandB(array, a, b);
        for (let i = 0; i < arrayTagliato.length; i++) {
            document.getElementById(`arrayTagliato`).innerHTML += `${arrayTagliato[i]}  `
        }
    }
);