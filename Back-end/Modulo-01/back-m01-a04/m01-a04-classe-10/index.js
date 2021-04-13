const original = [1, 4, 12, 21, 53, 88, 112];

const nova = [];

for (let i=0; i<original.length;i++){
    if (original[i]%2===0) {
        nova.push(original[i]);
    }
}
console.log(nova)