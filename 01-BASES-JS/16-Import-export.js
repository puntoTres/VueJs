/* Destructuramos la importacion */
import { owners } from './data/heroes.js'; // Importacion sin ser por defecto
import hero from './data/heroes.js'; // Importacion por defecto

console.log(owners)

const [a, b] = owners;

console.log(a)
console.log(b)

console.log(hero)
