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
    
