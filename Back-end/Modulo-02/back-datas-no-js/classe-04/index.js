import { getHours, getMinutes, getDay } from 'date-fns'

function taAberto(data) {
    if (getDay(data)>0 && getDay(data) < 6){
        if (getHours(data) >= 8 && getHours(data) <18) {
            return true;
        } else if (getHours(data) === 18 && getMinutes(data) === 0) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

console.log(taAberto(new Date(2021,3,26,12)))