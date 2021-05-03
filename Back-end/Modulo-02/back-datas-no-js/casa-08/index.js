const { format } = require('date-fns');
// import { pt } from "date-fns/locale";
const ptBR = require('date-fns/locale/pt-BR');


function formatA(data) {
    return data.toLocaleString(undefined, { day: 'numeric', month: 'long', year: 'numeric' });
}
function formatB(data) {
    return format(data, "dd/MM/yyyy")
}
function formatC(data) {
    return format(data, "d MMM", { locale: ptBR })
}
function formatD(data) {
    return format(data, "dd MMM yyyy", { locale: ptBR })
}
function formatE(data) {
    return format(data, "dd 'de' MMM 'de' yyyy", { locale: ptBR })
}
function formatF(data) {
    return format(data, "dd/MMM", { locale: ptBR })
}

const umaData = new Date();

console.log(formatA(umaData));
console.log(formatB(umaData));
console.log(formatC(umaData));
console.log(formatD(umaData));
console.log(formatE(umaData));
console.log(formatF(umaData));



