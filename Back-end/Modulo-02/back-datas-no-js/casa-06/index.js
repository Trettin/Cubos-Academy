// function promocaoEhValida(inicioPromo, dataCliente) {
//     if (+dataCliente - (+inicioPromo) <= (1000*60*60*24) && +dataCliente - (+inicioPromo) >= 0) {
//         return true;
//     } else {
//         return false;
//     };
// }

// const inicio = new Date();
// const cliente = new Date (+inicio + (1000*60*60*25))

// console.log(promocaoEhValida(inicio, cliente));

import { isWithinInterval, addHours } from 'date-fns'

function promocaoEhValida(inicioPromo, dataCliente) {
    return isWithinInterval(dataCliente, {start: inicioPromo, end: addHours(inicioPromo, 24)})
}

const dataPromocao = new Date();
const cliente = addHours(dataPromocao, 23);

console.log(promocaoEhValida(dataPromocao, cliente));

