// s ju  const person = {
// //     name: 'Nahuel',
// //     age: 30,
// //     location: {
// //         city: 'La Plata',
// //         temp: 32,
// //     }
// // };


// //console.log(`${person.name} tiene ${person.age} años de edad`)


// const book = {
//     title: 'un titulo',
//     sothor: 'pepito',
//     publisher: {
//         // name: 'Los libros'
//     }
// };

// const {name: publisherName = 'Auto Publicado'} = book.publisher;

// console.log(publisherName); 

//
//  Array destructuring
//

const address = ['12999 S Juniper Street', 'Philadephia', 'Pensilvania', '19147'];

const [street, city, state, zip] = address;

console.log(`you are in ${address[1]} ${address[2]}.`);



 
const item = ['cafe', '$2.50', '3.0', '$3.50']

const [cafe, chico, mediano, grande] = item;

console.log(`un ${cafe} valor ${mediano}`);
