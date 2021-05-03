import { getHours, getMinutes } from 'date-fns'

function taAberto(data) {
    if (getHours(data) >= 8 && getHours(data) <18) {
        return true;
    } else if (getHours(data) === 18 && getMinutes(data) === 0) {
        return true;
    } else {
        return false;
    }
}