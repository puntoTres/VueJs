import hero from './data/heroes.js'; // Importacion por defecto

/* No Resumido */
// const getHeroByid = id => {
//    const {name} = hero.find(item => item.id === id )
//    return name;
// }


/* Resumido */
export const getHeroByid = id =>  hero.find(item => item.id === id )
// console.log(getHeroByid(5))//Spiderman

export const getHeroByOwner = owner =>  hero.filter(element => element.owner === owner )
// console.log(getHeroByOwner('DC'));
