// const lalala = new Promise((resolve, reject) => {
//     const random = Math.random();
//     setTimeout(() => {
//         if (random > 0.5) {
//             resolve("ok");
//         }
//             reject("oops");

//     }, 1500);
// })

// console.log(lalala);


// lalala
//     .then((value) => {
//         console.log("then", value);
//     })
//     .catch(error => console.log("catch", error))
//     .finally(() => {
//         console.log("finally");
//     })

// лагцюжки промісів //

//

const promise = new Promise((resolve) => {
    resolve(10);
})

promise
    .then((value) => {
         new Promise((resolve) => {
            resolve(value * 2);

        })
            
     
    })
    .then((value) => console.log(value))

    const promise1 = new Promise((resolve) => {
    resolve(10);
})

// функція нічого не повертала тому результат - помилка //

promise1
    .then((value) => {
         return new Promise((resolve) => {
            resolve(value * 2);

        })
            
     
    })
    .then((value) => console.log(value))

// а тут ми повернули return і отримали бажагу відповідь //
    

let globalVar; // undefined

// 1. Виконуємо HTTP-запит
fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(users => {
    console.log("users inside then callback: ", users);

    // Асинхронно записуємо результат запиту в зовнішню змінну
    globalVar = users;

    // Усередині колбека методу then усе добре
    console.log("globalVar inside fetch callback: ", globalVar);
  });

// Зовні колбека методу then у синхронному 
// коді немає доступу до даних асинхронної відповіді бекенда
// тому що цей код виконаєтся перед кодом в методі then
console.log("globalVar outside fetch: ", globalVar); // undefined

fetch("https://jsonplaceholder.typicode.com/users?_limit=7&_sort=name")

