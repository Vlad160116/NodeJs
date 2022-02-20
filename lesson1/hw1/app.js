const fs = require('fs');
const path = require('path');


fs.readdir('./', (err, files) => {
    console.log(files);
})

const inPersonUser = [
    {name: 'Andrii',age: 22,city: 'Lviv'}
]

const onlineUser = [
    {name: 'Vlad',age: 25,city: 'Kyiv'}
]



for (const user of inPersonUser) {
    const { name, age, city } = inPersonUser
    fs.writeFile(path.join(__dirname, 'main', 'inPerson', `${inPerson}.txt`), `name: ${inPersonUser.name}\age: ${inPersonUser.age}\city: ${inPersonUser.city}\`,  (err) => {
        // err
    })
}




 
// fs.writeFile(path.join(__dirname, 'main', 'inPerson', 'inPerson.txt'), 'inPersonUser',  (err) =>{
//     if (err) {
//         console.log(err);
//         throw err;
//     }
// })



// fs.writeFile(path.join(__dirname, 'main', 'online', 'online.txt'), 'onlineUser',  (err) =>{
//     if (err) {
//         console.log(err);
//         throw err;
//     }
// })

