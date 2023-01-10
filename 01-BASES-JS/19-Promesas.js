console.log('Inicio')


/* La promesas se usan bastante con peticiones asincrona para pedir peticiones del servidor o api  */

new Promise((resolve,reject) =>{
    /*Cuerpo de la promesa*/
    console.log("cuerpo de la promesa")
    // resolve('Promesa resuelta')
    reject('Promesa con errores')
})
.then( console.log)
.catch(console.log)
// .then( msg => console.log(msg))
// .catch( err => console.log( err))



console.log('Fin')