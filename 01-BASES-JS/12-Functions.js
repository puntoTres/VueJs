const heroes = [{
    id:1,
    name:'Batman'
},
{
    id:2,
    name:'Superman'
}
]
 /* El some barre todos los elementos */
const res = heroes.some( patron => patron.id ===  2);

/* Destructuracion */
const { id, name } = heroes.find( patron => patron.id ===  2);

console.log(res);
console.log(id , name);