/* Array */

const arreglo = [1,2,3,4];
arreglo.push(5)


/*Spread operator */
const arreglo2 = [...arreglo];


/* Mostar  el arreglo dos con el doble de cada item por posicion*/
const arreglo3 = arreglo2.map( n =>{
    return n * 2;
})


console.log(arreglo)
console.log(arreglo2)
console.log(arreglo3)