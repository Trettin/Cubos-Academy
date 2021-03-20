const original = [5, 7, 13, 17, 26, 34, 118, 245];

const newArray = [];

for (let numero of original){
    if (numero >10 && numero <20 || numero>100) {
        newArray.push(numero);
    }
}
console.log(newArray)