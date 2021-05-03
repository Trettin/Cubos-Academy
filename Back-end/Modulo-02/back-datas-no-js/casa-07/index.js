import { isWithinInterval, addDays } from 'date-fns'

function promocaoEhValida(inicioPromo, dataCliente) {
    return isWithinInterval(dataCliente, {start: inicioPromo, end: addDays(inicioPromo, 30)})
}

const dataPromocao = new Date();
const cliente = addDays(dataPromocao, 23);

console.log(promocaoEhValida(dataPromocao, cliente));