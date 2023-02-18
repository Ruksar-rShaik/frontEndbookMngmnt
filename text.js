const x = ['hi', 'my', 'name', 'is', 'aproov'];
// hi, my name is aproov.

let str = '';

for (let i = 0; i < x.length; i++) {
    if (i < 1) {
        str = str + x[0] + ',' 
    } else {
        str += ' ' +x[i] 
    }
}

str = str + '.';

console.log(str);