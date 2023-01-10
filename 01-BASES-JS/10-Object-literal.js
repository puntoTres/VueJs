//Objetos 

const persona = {
    nombre:'tony',
    apellido:'Stark',
    edad:45,
    direcion:{
        ciudad:'new york',
        zip:3423523545
    }
}


// spread operator.
// Copias un objeto sin referencias al primero

const persona2 = { ...persona };

persona2.nombre = "moron";
console.log(persona2)
console.log(persona)