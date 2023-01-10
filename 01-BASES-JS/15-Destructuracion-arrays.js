const char = ['Goku','Vegeta','Trunks'];


const [g,v,t,goten = "no tiene valor"] = char;
console.log(goten)
const [,,tr] = char;
const [,vegeta,] = char;
const [gok,,] = char;


console.log(tr)
console.log(vegeta)
console.log(gok)


/* Con funciones */

const returnLista = () => {
    return ['ABCD',1234]
}

const [a,num] = returnLista();

console.log(a, num)
