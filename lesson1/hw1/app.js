// Всі дії виконувати з допомогою модулів (вручну нічого не створюємо)
// Створити основну папку (main), в яку покласти дві інші папки: перша - online, друга - inPerson
// Потім створити в вашому головному файлі (для прикладу app.js) два масиви з обєктами user ({. name: "Andrii", age: 22, city: "Lviv" }),  відповідно перший - onlineUsers, другий - inPersonUsers;
// і створити файли txt в папках (online, inPerson) в яких як дату покласти юзерів з ваших масивів,
// але щоб ваш файл виглядав як NAME: ім'я з обєкту і т.д і всі пункти з нового рядка.
//
// Коли ви це виконаєте напишіть функцію яка буде міняти місцями юзерів з одного файлу і папки в іншу.
// (ті, що були в папці inPerson будуть в папці online)

const fsPromises = require('fs/promises');
const path = require('path');


const onlineUser = [
    {
        name: 'Vlad',
        age: 25,
        city: 'Kyiv'
    },
];


const inPersonUser = [
    {
        name: 'Andrii',
        age: 22,
        city: 'Lviv'
    },
];

const mainPath = path.join(__dirname, 'main')

async function  createData() {
    await fsPromises.mkdir(mainPath);

    await Promise.all([
        fsPromises.mkdir(path.join(mainPath, 'inPerson')),
        fsPromises.mkdir(path.join(mainPath, 'online')),
        writeAndAppendFile('inPerson', inPersonUser),
        writeAndAppendFile('online', onlineUser)
    ]);

}

async function writeAndAppendFile(pathFolder, users) {
    const data = users.map(({ name, age, city }) => `NAME:${name} AGE:${age} CITY:${city}`)
    return fsPromises.writeFile(path.join(mainPath, pathFolder, 'user.txt'), data)
}

createData();















// for (const user of inPersonUser) {
//     const { name, age, city } = inPersonUser
//     fs.writeFile(path.join(__dirname, 'main'__dirname, 'main', 'inPerson', `${inPerson}.txt`), `name: ${inPersonUser.name}\age: ${inPersonUser.age}\city: ${inPersonUser.city}\`,  (err) => {
//         // err
//     })
// }





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
