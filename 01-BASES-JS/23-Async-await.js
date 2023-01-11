/*
Una funcion asincrona por defecto devuelve una promesa
 
El await solo se puede utilizar dentro de una function asincrona

El await me permite tener el valor correcto de la promesa y trabajarla como si fuera una function sincrona


async() convierte mi funcion para que retorne una promesa

*/


const miPromesa = () => {
    return new Promise(( resolve,reject ) => {
        setTimeout(() => {
           resolve('Tenemos un valor en la promesa')
           // reject('Error reject en la promesa')
        }, 1000);
    })

}


const medirTiempoAsync = async () => {

    try {
        console.log('inicio')

        // miPromesa().then(console.log)
        const respuesta = await miPromesa() // Espera la repuesta correcta o error
        console.log(respuesta)

        console.log('fin')

        return 'Respuesta correcta de la funcion medirTiempoAsync'
    } catch (error) {
        throw 'catch en medirTiempoAsync'
    }
    

    //throw 'Error atrapado en la funcion medirTiempoAsync'

}



medirTiempoAsync()
 .then( valor => console.log( "then exito:",valor))
  .catch( err => console.log( "Error:",err))