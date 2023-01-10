const person = {
    name: 'Moron',
    age:44,
    codeName:'El esta bien'
}


const createHero = ({name,age,codeName,power}) => ({id:2354234534,name,age,codeName,power})

// const createHero = (person) => {
//     const {name,age,codeName,power = 'ojo pocho'} = person;
//     return{
//         id:2354234534,
//         name,
//         age,
//         codeName,
//         power
//     }


// }

// const createHero = (person) => {
//     const {name,age,codeName,power = 'ojo pocho'} = person;
//     return{
//         id:2354234534,
//         name,
//         age,
//         codeName,
//         power
//     }

//     // return{
//     //     id:2354234534,
//     //     name: name,
//     //     age:age,
//     //     codeName:codeName,
//     //     power: power

//     // }
// }

console.log(createHero(person))