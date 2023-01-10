import {getHeroByid} from './17-Exportar-funciones.js';

const getHeroBeyIdAsync = (id) => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const hero = getHeroByid(id);
            hero ? resolve(hero) : reject("Heroe no exite")

        },1000)

    })
   
}

getHeroBeyIdAsync(2)
.then(aux =>{console.log(`El heroe es: ${aux.name}`)})
.catch(console.log)