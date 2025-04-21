console.log("Асинхронність//Асинхронні операції");
console.log("=================================");
console.log("синхронний код");

console.log("First log"); // синхронний код, йдуть логи послідовно, один за одним  
console.log("Second log");
console.log("Third log");

console.log("=================================");

console.log("асинхронний код");


// метод setTimeout() {приймає 2 аргументи: КБФ,  час в мілісекундах. Він виконає кбф через 2000 мс.}
  
// console.log("First log");

// setTimeout(() => {
//     // Виконується третьою, через 2000 мілісекунд (2 секунди)
//     console.log("Second log");
// }, 2000);

// // Виконується другою
// console.log("Third log");


// наш потік не завмер, і не чекав на виконання second log, відкладено запустив кбф і ми побачили її  результат

/////////////////////////////////////////////////////////

//Очищення таймаута
//Скасування тайм-ауту
// Якщо з якихось причин нам потрібно скасувати відкладений виклик функції, зареєстрованої тайм-аутом, використовується метод clearTimeout(id).
// Метод clearTimeout(id)приймає ідентифікатор таймера та “очищає його”, тобто видаляє реєстрацію відкладеного виклику функції з черги.
// У прикладі вище ми викликали clearTimeout(), який виконається раніше, ніж буде викликана функція greet(). Отже, таймер з timerId буде видалений і реєстрація відкладеного виклику greet() скасується. Тому в консоль нічого не виведеться.

console.log("==============Codepen================");

const setBtn = document.querySelector(".js-set");
const clearBtn = document.querySelector(".js-clear");
let timeoutId;

setBtn.addEventListener("click", () => {
  timeoutId = setTimeout(() => {
    console.log("I love async JS!");
  }, 2000);
});

clearBtn.addEventListener("click", () => {
  clearTimeout(timeoutId);
  console.log(`Timeout with id ${timeoutId} has stopped!`);
});


///////////////////////////////////////////////////////////////////////////////////////////
// kahoot задачка //

for (let i = 3; i > 0; i--) {
    const delay = i * 4000;
    setTimeout(() => console.log(i), delay); // logs 3, 2, 1 with delays
}

////////////////////////////////////////////////////////////////////////////////////////

 const startBtn = document.querySelector(".js-start");
const stopBtn = document.querySelector(".js-stop");
let intervalIds = [];

startBtn.addEventListener("click", () => {
    const intervalId = setInterval(() => {
        console.log(`Interval ID: ${intervalId}, ${Math.random()}`);
    }, 1000);
    intervalIds.push(intervalId);
});

stopBtn.addEventListener("click", () => {
    intervalIds.forEach(id => clearInterval(id));
    console.log(`All intervals stopped: ${intervalIds.join(", ")}`);
    intervalIds = []; // Очищаємо масив після зупинки всіх інтервалів
});


/////////////////////////////////////////////////////////////////////////////////////////////////////////
const title = document.createElement("h1");
title.textContent = "Module-10";
document.body.append(title);


console.log("Дата і час // Створення дати");



const date0 = new Date();
console.log(date0);

console.log("Встановлення дати");

const date1 = new Date("2024-03-23");
console.log(date1); // "Sat Mar 23 2024 02:00:00 GMT+0200" // до класу Date передають рядок, який описує тільки дату.


console.log("Як ти бачиш, формат рядка, переданого до Date, дуже гнучкий.Можна передати тільки рік, рік і місяць, або повну дату, включно з числом і часом.");

const date = new Date("2030-03-16T14:25:00");
console.log(date); // "Sat Mar 16 2030 14:25:00 GMT+0200" // до Date передали рядок, де дата і час розділяються великою літерою T(time).
console.log(new Date("2030")); // "Tue Jan 01 2030 02:00:00 GMT+0200"
console.log(new Date("2030-03")); // "Fri Mar 01 2030 02:00:00 GMT+0200"
console.log(new Date("2030-03-16")); // "Sat Mar 16 2030 02:00:00 GMT+0200"
console.log(new Date("2030-03-16T14:25:00")); // "Sat Mar 16 2030 14:25:00 GMT+0200"


// Інший спосіб створення нової дати — це передати сім чисел, які описують рік, місяць(починається з 0), день, години, хвилини, секунди й мілісекунди.Обов'язкові тільки перші три.

const date2 = new Date(2030, 2, 16, 14, 25, 0, 0);
console.log(date2); // "Sat Mar 16 2030 14:25:00 GMT+0200"


console.log("Unix час");

// Для комп’ютерів відлік часу рахується в мілісекундах, що минули після опівночі 1 січня 1970 року в часовому поясі UTC(Coordinated Universal Time).Це — Unix час.
// Під час ініціалізації дати одним числом, воно являє собою кількість мілісекунд, що вже минула з 01.01.1970.

console.log(new Date(0)); //початок епохи Unix.
// "Thu Jan 01 1970 03:00:00 GMT+0300 (Eastern European Standard Time)"

console.log(new Date(15000)); //  15 секунд після цієї епохи."Thu Jan 01 1970 03:00:15 GMT+0300 (Eastern European Standard Time)"


//Вбудований метод getTime() повертає числове значення цієї дати (timestamp) — кількість мілісекунд, що минула з півночі 1 січня 1970 року.

const date3 = new Date();
console.log(date3.getTime()); // 1742751177587


console.log("Метод Date.now()");

const time = Date.now();
console.log(time);

// Основна ідея застосування Date.now() полягає у вимірюванні часу, розрахунку інтервалів тощо.
// Якщо ти хочеш виміряти, скільки часу займає виконання деякого коду, можна зробити так:

const startTime = Date.now();
console.log(startTime);

setTimeout(() => {
    const endTime = Date.now();
    const elapsedTime = endTime - startTime;

    console.log(`Elapsed time: ${elapsedTime} ms`);
}, 3000)

// Зберегти час до події.
// Зберегти час після події.
// Порахувати різницю між кінцевим і початковим часом.

console.log("Геттери і сеттери");

// Екземпляр класу Date має безліч методів для читання та запису значень дати і часу.Методи повертають або присвоюють рік, місяць, день місяця або тижня, годину, хвилину, секунду і мілісекунду для кожного екземпляра.

// Геттери використовуються для читання всієї дати або окремої складової.Значення, що повертається, залежить від поточного часового поясу, встановленого на комп'ютері.

console.log("аргументом в дужки можемо передавати різні дати");

const date4 = new Date("March 16, 2030 14:25:00");
console.log("Date: ", date4);

// Повертає день місяця від 1 до 31
console.log("Day: ", date4.getDate()); // 16

// Повертає день тижня від 0 до 6, починається з неділі
console.log("Day of the week: ", date4.getDay()); // 6

// Повертає місяць від 0 до 11
console.log("Month: ", date4.getMonth()); // 2

// Повертає рік з 4 цифр
console.log("Full year: ", date4.getFullYear()); // 2030

// Повертає години
console.log("Hours: ", date4.getHours()); // 14

// Повертає хвилини
console.log("Minutes: ", date4.getMinutes()); // 25

// Повертає секунди
console.log("Seconds: ", date4.getSeconds()); // 0

// Повертає мілісекунди
console.log("Milliseconds: ", date4.getMilliseconds()); // 0

////////////////////////////////////////////////////////////

console.log("порожні дужки - поточна інформація");
const date5 = new Date();
console.log("Date: ", date5);

// Повертає день місяця від 1 до 31
console.log("Day: ", date5.getDate()); // 16

// Повертає день тижня від 0 до 6, починається з неділі
console.log("Day of the week: ", date4.getDay()); // 6

// Повертає місяць від 0 до 11
console.log("Month: ", date5.getMonth()); // 2

// Повертає рік з 4 цифр
console.log("Full year: ", date5.getFullYear()); // 2030

// Повертає години
console.log("Hours: ", date5.getHours()); // 14

// Повертає хвилини
console.log("Minutes: ", date5.getMinutes()); // 25

// Повертає секунди
console.log("Seconds: ", date5.getSeconds()); // 0

// Повертає мілісекунди
console.log("Milliseconds: ", date5.getMilliseconds()); // 0

console.log("---------------------------------------------");


console.log("Проміси");

// Проміс — це об'єкт, що зберігає стан асинхронної операції, який використовується для відслідковування стану операції: чи була операція виконана успішно, з помилкою, або ще не завершена.

console.log("Життєвий цикл проміса");

// Проміс може бути у трьох станах:

console.log("===PENDING====FULFILLED====REJECTED====");


//Очікування(pending) — початковий стан під час створення промісу.
//Виконано(fulfilled) — операція виконана успішно з будь - яким результатом.
//Відхилено(rejected) — операція відхилена з помилкою.


console.log("Створення проміса");

// Проміс створюється як екземпляр класу Promise, який приймає функцію як аргумент(називається "виконавцем"(executor)) і відразу викликає її, ще до створення і повернення промісу.


console.log("//const promise = new Promise((resolve, reject) => { // Asynchronous operation }); //");

// resolve(value) — функція для виклику у разі успішної операції.Переданий їй аргумент буде значенням виконаного промісу.
// reject(error) — функція для виклику у разі помилки.Переданий їй аргумент буде значенням відхиленого промісу.

// Колбек - функція повідомляє проміс, коли і як операція, з якою він пов'язаний, буде завершена. У ній можна виконувати будь-яку асинхронну операцію. Після її завершення потрібно викликати:

// resolve() для позначення успішного виконання.Результатом буде fulfilled.
//     Або
// reject() у разі помилки, який встановлює стан промісу як "відхилений"(rejected).

//     Значення, що повертається цією функцією - виконавцем, ігнорується.

//У прикладі показано, як змінюється значення змінної isSuccess на true або false, щоб викликати resolve або reject та імітувати успішне виконання промісу (fulfilled) або виконання з помилкою (rejected).

const isSuccess = true;

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (isSuccess) {
            resolve("Success! Value passed to resolve function");
        } else {
            reject("Error! Error passed to reject function");
        }
    }, 2000);
});

console.log(promise); // Об'єкт промісу

//Правильний синтаксис створення промісу в JavaScript — це const promise = new Promise(executor). Тобто використовується ключове слово new і конструктор Promise(), щоб створити проміс.

console.log("Метод then()");

// Код, якому потрібно зробити щось асинхронно, створює проміс і повертає його.

// Зовнішній код, отримавши проміс, додає до нього обробники.Після завершення процесу асинхронний код переводить проміс у стан fulfilled або rejected, і автоматично викликаються методи промісів(обробники) у зовнішньому коді.

// Метод проміса then() приймає два аргументи — дві callback функції, які будуть викликані, коли проміс змінить свій стан.

// Результат промісу — це значення або помилка, яку функції отримають як аргументи.

//     promise.then(onResolve, onReject)

console.log("promise.then(onResolve, onReject)");


// onResolve(value) — 1 - й аргумент методу then(), колбек - функція, яка буде викликана у разі успішного виконання промісу та отримає його результат як аргумент.
//     onReject(error) — 2 - й аргумент методу then(), колбек - функція, яка буде викликана у разі виконання промісу з помилкою та отримає її як аргумент.

// Після створення промісу, його результат обробляється в callback - функції.

// Код пишеться таким чином, щоб врахувати всі сценарії на майбутнє:
// Якщо проміс виконається.
// Якщо проміс не виконається.

// У прикладі нижче callback - функція onResolve буде викликана через дві секунди, якщо проміс успішно виконається, а onReject буде викликана через дві секунди у тому разі, якщо проміс виконається з помилкою.

const isSuccess1 = true;

// Create promise
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (isSuccess) {
            resolve("Success! Value passed to resolve function");
        } else {
            reject("Error! Error passed to reject function");
        }
    }, 2000);
});

// Registering promise callbacks
// promise1.then(
//     value => {
//         console.log(value); // "Success! Value passed to resolve function"
//     },
//     error => {
//         console.log(error); // "Error! Error passed to reject function"
//     }
// );

console.log("Метод catch ()");



// На практиці в методі then() обробляють тільки успішне виконання промісу.

// Помилку його виконання обробляють у спеціальному методі catch () для «відловлювання» помилок.

// promise
//     .then(value => {
//         // Promise fulfilled
//     })
//     .catch(error => {
//         // Promise rejected
//     });
// Колбек - функція в методі catch буде викликана в разі виконання промісу з помилкою, і отримає цю помилку як аргумент.Метод catch має йти після then.
// Винесемо обробку помилки з методу then у метод catch.

const isSuccess2 = true;

// Create promise
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (isSuccess2) {
            resolve("Success! Value passed to resolve function");
        } else {
            reject("Error! Error passed to reject function");
        }
    }, 2000);
});

// Registering promise callbacks
// promise2
//     .then(value => {
//         console.log(value); // "Success! Value passed to resolve function"
//     })
//     .catch(error => {
//         console.log(error); // "Error! Error passed to reject function"
//     });

console.log("==================================");

console.log("Метод finally()");

// Цей метод може бути корисним, якщо необхідно виконати код після того, як проміс буде виконаний незалежно від результату(fulfilled або rejected).

// promise
//     .then(value => {
//         // Promise fulfilled
//     })
//     .catch(error => {
//         // Promise rejected
//     })
//     .finally(() => {
//         // Promise fulfilled or rejected
//     });

// Метод finally() дозволяє уникнути дублювання коду в обробниках then() і catch ().

// Колбек - функція не отримає жодних аргументів, оскільки неможливо визначити, чи був проміс виконаний або відхилений.Тут буде виконуватися код, який необхідно запустити в будь - якому разі.

const isSuccess4 = true;

// Create promise
const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (isSuccess4) {
            resolve("Success! Value passed to resolve function");
        } else {
            reject("Error! Error passed to reject function");
        }
    }, 2000);
});

// Registering promise callbacks
// promise4
//     .then(value => console.log(value)) // "Success! Value passed to resolve function"
//     .catch(error => console.log(error)) // "Error! Error passed to reject function"
//     .finally(() => console.log("Promise settled")); // "Promise settled"


console.log("Ланцюжки промісів");

// Метод then() повертає новий проміс, який у свою чергу отримує значення від своєї callback - функції onResolve.Ця особливість дозволяє формувати послідовність асинхронних операцій, зв'язуючи проміси в ланцюжок.

// Метод then() повертає проміс.Перед його виконанням може минути деякий час, отже, частина ланцюжка, що залишилася, буде чекати на результат.У разі виникнення помилки в будь - якому місці ланцюжка, виконання всіх наступних then() скасовується, а управління передається методу catch (). Тому він має знаходитись у кінці ланцюжка усіх then().

console.log("============================================");


const promise5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(5);
    }, 2000);
});

promise5
    .then(value => {
        console.log(value); // 5
        return value * 2;
    })
    .then(value => {
        console.log(value); // 10
        return value * 3;
    })
    .then(value => {
        console.log(value); // 30
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => {
        console.log("finally==================");
    });
console.log("============================================");

console.log("  //Промісифікація//  ");

console.log("Колбеки vs проміси");


// Уявімо, що в нас є функція, яка виконує асинхронну операцію, наприклад, запит на сервер за інформацією про користувача за його ім'ям.
// const fetchUserFromServer = (username, onSuccess, onError) => {
//     // ...
// };
// Зараз функція знає занадто багато про той код, який буде використовувати результат її роботи.Вона очікує колбеки для успішного запиту onSuccess і для помилки onError, та буде відповідати за їх виклик за певних умов.
// Тобто ми передаємо щось усередину функції(колбеки) і сподіваємося, що воно відпрацює правильно.Це може стати проблемою.

//     Краще, якщо функція не зважає на той код, який буде використовувати її результат.Вона просто виконує якусь операцію і повертає результат своєї роботи в зовнішній код.Для того щоб повернути результат асинхронної операції, із функції необхідно повернути проміс.

//         Промісифікація — це перетворення функції з колбеками таким чином, щоб вона не приймала колбеки, а повертала проміс.Така функція називається промісифікована.

// Відмінності промісу і callback - функції:

// Колбеки — це функції, проміси — це об'єкти.
// Колбеки передаються як аргументи функції, що виконує асинхронну операцію, а проміси створюються всередині цієї функції і повертаються як її результат.
// Колбеки обробляють успішне або неуспішне завершення операції, проміси нічого не обробляють, тільки зберігають поточний стан асинхронної операції.
// Колбеки можуть обробляти декілька подій, проміси пов'язані тільки з однією подією.


// Що таке промісифікована функція ?
//     Функція, яка повертає проміс
// Саме так! Промісифікована функція — це функція, яка призначена для виконання асинхронних операцій і повертає проміс у результаті своєї роботи.

console.log("// Промісифікація функцій //");
// Доповнимо код роботи з функцією fetchUserFromServer її викликом і передачею аргументів для імені користувача і колбеків обробки результату.
// const fetchUserFromServer = (username, onSuccess, onError) => {
//     console.log(`Fetching data for ${username}`);
// };

// fetchUserFromServer(
//     "Mango",
//     user => console.log(user),
//     error => console.error(error)
// );

// Далі використаємо таймер для імітації асинхронної операції та викличемо колбеки за умовою.Ми можемо змінити значення змінної isSuccess на true або false, щоб імітувати статус асинхронної операції.

// const fetchUserFromServer = (username, onSuccess, onError) => {
//     console.log(`Fetching data for ${username}`);

//     setTimeout(() => {
//         // Change value of isSuccess variable to simulate request status
//         const isSuccess = true;

//         if (isSuccess) {
//             onSuccess("success value");
//         } else {
//             onError("error");
//         }
//     }, 2000);
// };

// fetchUserFromServer(
//     "Mango",
//     user => console.log(user),
//     error => console.error(error)
// );

// Як ми вже зазначали, зараз функція знає надто багато про той код, який використовуватиме результат її роботи.Тобто ми передаємо щось усередину функції(колбеки) і сподіваємося, що воно відпрацює правильно, що ненадійно.Давай промісифікуємо її.

// Для початку напишемо код, який поверне з функції проміс.Для цього створюємо в ній проміс через new Promise і повертаємо його.

// const fetchUserFromServer = username => {
//     return new Promise((resolve, reject) => {
//         // ...
//     });
// };

// Отримуємо проміс у зовнішньому коді та додаємо на нього обробники в методах then і catch.

// const fetchUserFromServer = username => {
//     return new Promise((resolve, reject) => {
//         // ...
//     });
// };

// const userPromise = fetchUserFromServer("Mango"); // результатом виклику fetchUserFromServer("Mango") буде проміс

// // проміс обробляємо у методах then() i catch()
// userPromise
//     .then(user => console.log(user))
//     .catch(error => console.error(error));

// Зазвичай обробники додають на результат виклику функції проміс, не записуючи його в зайву змінну.

// const fetchUserFromServer = username => {
//     return new Promise((resolve, reject) => {
//         // ...
//     });
// };

// fetchUserFromServer("Mango")  // результатом виклику fetchUserFromServer("Mango") буде проміс
//     .then(user => console.log(user))  // проміс обробляємо в методі then()
//     .catch(error => console.error(error));  // проміс обробляємо в методі catch()


// Весь код, пов'язаний із логікою роботи, додаємо всередину функції створення промісу.
//=================================//
// const fetchUserFromServer = username => {
//     return new Promise((resolve, reject) => {
//         console.log(`Fetching data for ${username}`);

//         setTimeout(() => {
//             // Change value of isSuccess variable to simulate request status
//             const isSuccess = true;

//             if (isSuccess) {
//                 resolve("success value");  // значенням параметра resolve буде колбек-функція методу then()
//             } else {
//                 reject("error");  // значенням параметра reject буде колбек-функція методу catch()
//             }
//         }, 2000);
//     });
// };

// fetchUserFromServer("Mango")
//     .then(user => console.log(user))
//     .catch(error => console.error(error));

//=============================//

// Більшість сучасних бібліотек ґрунтуються на промісах.У разі виклику методу для асинхронної операції його результат доступний як проміс, якому можна причепити обробники в методах then() і catch ().
// ===================================================================//

console.log("// Promise.resolve() і Promise.reject()");

// Promise.resolve() і Promise.reject() — це статичні методи для створення промісів, що миттєво успішно виконуються або відхиляються.Вони працюють аналогічно new Promise(), повертають проміс, але мають коротший синтаксис.

// Так створюється успішно виконаний проміс через new Promise():

// new Promise(resolve => resolve("success value"))
//     .then(value => console.log(value));
// 	.catch (error => console.log(error));

// Так створюється успішно виконаний проміс через Promise.resolve():

// Promise.resolve("success value");
// 	.then(value => console.log(value));
// 	.catch (error => console.log(error));

// Так створюється проміс, що виконався з помилкою через new Promise():

// new Promise((resolve, reject) => reject("error"));
// 	.then(value => console.log(value));
// 	.catch (error => console.log(error));

// Так створюється проміс, що виконався з помилкою через Promise.reject():

// Promise.reject("error");
// 	.then(value => console.log(value));
// 	.catch (error => console.log(error));

// Який метод створює успішно виконаний проміс зі значенням ?

//     Promise.resolve()

// Абсолютно точно! Метод Promise.resolve() створює проміс, який успішно виконаний із вказаним значенням.

// Прочитай приклад коду

// Promise.reject().then().catch();

// Який метод виконається для такого промісу ?

// catch

// Саме так! Проміс, створений за допомогою Promise.reject(), є відхиленим(rejected), і тому метод catch виконається для обробки цього відхилення.

console.log("// Промісифікація синхронних функцій");

// Методи Promise.resolve і Promise.reject використовуються для промісифікації функцій, коли не треба чекати результату асинхронної операції, а просто необхідно побудувати ланцюжок промісів, і вже є початкове значення.

// Виконаємо рефакторинг коду функції, яка приймає два колбеки та викликає їх за умовою.

// const makeGreeting0 = (guestName, onSuccess, onError) => {
//     if (!guestName) {
//         onError("Guest name must not be empty");
//     } else {
//         onSuccess(`Welcome ${guestName}`);
//     }
// };

// makeGreeting0(
//     "Mango",
//     greeting => console.log(greeting),
//     error => console.error(error)
// );

// Зробимо промісифікацію функції makeGreeting для того, щоб повністю усунути її залежність від зовнішнього коду.Вона повинна просто повертати проміс.


// const makeGreeting = guestName => {
//     return new Promise((resolve, reject) => {
//         if (!guestName) {
//             reject("Guest name must not be empty");
//         } else {
//             resolve(`Welcome ${guestName}`);
//         }
//     })
// };

// makeGreeting("Mango")
//     .then(greeting => console.log(greeting))
//     .catch(error => console.error(error));

// А тепер використаємо методи класу Promise, щоб скоротити кількість коду.

const makeGreeting1 = guestName => {
    if (!guestName) {
        return Promise.reject("Guest name must not be empty");
    } else {
        return Promise.resolve(`Welcome ${guestName}`);
    }
};

makeGreeting1("Mango")
    .then(greeting => console.log(greeting))
    .catch(error => console.error(error));


// Замість того щоб приймати колбеки та викликати їх, функція повертає(return) у зовнішній код проміс.Подальша доля цього промісу вже не стосується функції.

//Окей, розберемо цей код покроково!

// 🔹 Що він робить ?
//     Цей код створює функцію makeGreeting, яка приймає ім'я гостя (guestName) і повертає проміс (Promise).

// Якщо guestName порожній або не переданий, проміс буде відхилений(reject) з помилкою.
// Якщо guestName є, проміс буде виконаний(resolve) і поверне рядок Welcome { guestName }.
// 🔹 Покроковий розбір
// 1️⃣ Створюємо функцію

// javascript
// Copy
// Edit
// const makeGreeting = guestName => {
// Це стрілкова функція, яка приймає guestName.

// 2️⃣ Перевіряємо, чи передане ім'я

//     javascript
//     Copy
//     Edit
//     if (!guestName) {
//         return Promise.reject("Guest name must not be empty");
//     }
//     !guestName означає: якщо guestName має значення false(тобто undefined, null, або порожній рядок ""),
//         Тоді функція повертає відхилений проміс(Promise.reject), який передає текст помилки "Guest name must not be empty".
// 3️⃣ Якщо ім'я є, повертаємо успішний проміс

//     javascript
//     Copy
//     Edit
//     return Promise.resolve(`Welcome ${guestName}`);
//     Promise.resolve() створює успішний проміс, який повертає рядок "Welcome {guestName}".
//         Наприклад, якщо ім'я "Mango", повернеться "Welcome Mango".
//     4️⃣ Викликаємо makeGreeting("Mango")

//     javascript
//     Copy
//     Edit
//     makeGreeting("Mango")
//         .then(greeting => console.log(greeting))
//         .catch(error => console.error(error));
// .then(greeting => console.log(greeting)) – якщо проміс успішний, виводимо привітання.
// .catch(error => console.error(error)) – якщо проміс відхилений, виводимо помилку.

console.log("==========Cтворення промісів із затримкою========");

// Створимо функцію makePromise(options), яка буде створювати і повертати проміси з різною затримкою виконання.



// const makePromise = options => {
//     // ...
// };

// makePromise({
//     value: "Some value",
//     delay: 2000,
//     shouldResolve: true
// })



// Функція приймає один параметр options.Це об'єкт із властивостями, в яких будемо передавати наступні значення:



// value — значення, яке буде значенням проміса.
//     delay — затримка в мілісекундах, після якої буде виконуватися проміс.
//         shouldResolve — булеве значення, що вказує, чи повинен проміс виконатися(true), або бути відхиленим(false).


// Доповнимо код функції так, щоб вона повертала проміс.



// const makePromise = options => {
//     return new Promise((resolve, reject) => {
//         // ...
//     });
// };



// Далі зробимо так, щоб проміс виконувався або був відхиленим зі значенням, вказаним у властивості value після затримки в delay мілісекунд.За замовчуванням проміс виконуватиметься успішно, для цього вказуємо значення за замовчуванням true для властивості shouldResolve при деструктуризації.



// const makePromise = ({ value, delay, shouldResolve = true }) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (shouldResolve) {
//                 resolve(value)
//             } else {
//                 reject(value)
//             }
//         }, delay);
//     });
// };



// Отже, це просто перевикористана функція, яка містить у собі код створення промісу із затримкою, щоб не писати цей код щоразу, коли потрібно створити проміс.



// Перевіримо роботу функції, створивши кілька промісів з різним часом затримки та значеннями.



const makePromise = ({ value, delay, shouldResolve = true }) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldResolve) {
                resolve(value)
            } else {
                reject(value)
            }
        }, delay);
    });
};

makePromise({ value: "A", delay: 1000 })
    .then(value => console.log(value)) // "A"
    .catch(error => console.log(error));

makePromise({ value: "B", delay: 3000 })
    .then(value => console.log(value)) // "B"
    .catch(error => console.log(error));

makePromise({ value: "C", delay: 2000, shouldResolve: false })
    .then(value => console.log(value))
    .catch(error => console.log(error)); // "C"



// Без функції цей же код виглядав би ось так:



new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Fulfilled A');
    }, 1000);
})
    .then(value => console.log(value))
    .catch(error => console.log(error));

new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Fulfilled B');
    }, 3000);
})
    .then(value => console.log(value))
    .catch(error => console.log(error));

new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Rejected C');
    }, 2000);
})
    .then(value => console.log(value))
    .catch(error => console.log(error)); // "Rejected C"

//========================================//

console.log("Обробка множинних промісів/==/Метод Promise.all()");

// Є ситуації, коли потрібно чекати на виконання всіх промісів одночасно, а потім обробляти їх результати.Або ситуації, коли достатньо дочекатися виконання хоча б одного з них, ігноруючи інші випадки.Для цих сценаріїв клас Promise має статичні методи для роботи з групою промісів.

// Метод Promise.all() дозволяє одночасно обробити кілька промісів та отримати їхні результати.Він приймає масив промісів як вхідні дані, чекає їх виконання та повертає один проміс.

console.log("Promise.all([promise1, promise2, promise3, ...])");


// Якщо всі проміси виконуються успішно, повернений проміс перейде у стан fulfilled, а його значенням буде масив результатів виконання кожного промісу.



const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);

Promise.all([p1, p2, p3])
    .then(values => console.log(values))// [1, 2, 3]
    .catch(error => console.log(error));



// Це означає, що він чекає на виконання всіх промісів, а потім створює та повертає новий проміс, значенням якого є масив значень виконаних промісів.

console.log("Метод Promise.race()");
// Метод Promise.race приймає масив промісів і повертає "найшвидший", тобто перший виконаний або відхилений проміс з переданих, разом зі значенням або причиною його відхилення.

//Promise.race([promise1, promise2, promise3, ...])
// Кейс 1
//Створимо кілька промісів з різним часом виконання.



const pr1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("race-resolve-1-@1000"), 1000);
});

const pr2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(2), 2000);
});

Promise.race([pr1, pr2])
	.then(value => console.log(value)) // 1
	.catch(error => console.log(error))
    
// Перший проміс перейде в стан fulfilled через 1 секунду (буде найшвидшим), і буде виконано колбек методу then зі значенням першого промісу, а решту буде відкинуто.
// Коли хоча б один проміс з масиву виконається, проміс, що повертається, перейде у стан resolved, а всі інші будуть відкинуті.

// Кейс 2
// Створимо кілька промісів з різним часом виконання.


const pro1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 2000);
});

const pro2 = new Promise((resolve, reject) => {
  setTimeout(() => reject("race-reject-2-@1000"), 1000);
});

Promise.race([pro1, pro2])
	.then(value => console.log(value)) 
	.catch(error => console.log(error)) // 2



// Другий проміс перейде в стан rejected через 1 секунду (буде найшвидшим), виконається колбек методу catch зі значенням другого промісу, а інші будуть відкинуті.



// Коли хоча б один проміс із масиву буде відхилений, проміс, що повертається, перейде в стан rejected, а всі інші будуть відкинуті.

console.log("********DMYTRO K- PROMIS-260325*********");

/**
 * створення та обробка промісу
 * Клас Promise
 * resolve
 * reject
 * then, catch, finally 
 */

const jojoba = new Promise((resolve, reject) => {
    const random = Math.random();
     
    setTimeout(() => {
        if(random > 0.5) {
            resolve("ok");
        } else {
            reject("oops");
        }

    }, 1000)
})

console.log(jojoba);

// ці два методи існують в промісі для того. щоб перевести його в якийсь завершених станів (fulfilled або rejected).

// ми можемо скоротити наш код (вирізати else {}):

const lalala = new Promise((resolve, reject) => {
const random = Math.random();

    setTimeout(() => {
        if (random > 0.5) {
            resolve("ok");
        }
        reject("oops");
    }, 1000)
})

console.log(lalala);
// в кострукції if() {}  немає слова return. Ми не повинні повертати нічого,тому що як тільки виконається наша функція resolve або reject, проміс одразу перейде або в стан fulfilled або стан rejected

// Promise-Обіцянка каже тобі: я обіцяю, що щось поверну тобі, або один результат, або інший, але я не знаю, який з них і через який час. цуе може бути, сервер, інтернет аповільний і т.д. варантів маса по затримці


// затримку виеористано, щоб злапати стан "pending"

// методи then/catch як аргумент приймають в себе КБФ, і ця ф-я як параметр буде в себе отримувати дані, які ми передали в наші методи resolve(ok)/reject(oops).

const tototo = new Promise((resolve, reject) => {
const random = Math.random();   
        if (random > 0.5) {
            resolve("ok");
        }
        reject("oops");
    })

console.log(tototo);

tototo
    .then((result) => {
        console.log("then", result);
    })
    .catch((error) => {
        console.log("catch", error);         
    })
    
// ці методи почнуть працювати, як тільки проміс перейде в один зі станів: fulfilled/rejected.

// метод finally відпрацює завжди, йому байдуже, як завершиться проміс 

    .finally(() => {
        console.log("finally:", "I don't care)))");
        

    })

/*
* Промісифікація
* проблема доступу до результату проміса з колбеком
* функція, яка повертає проміс
*/


// створимо ф-ю, да парам.1 - рядок, парам.2 - ф-я, парам.3 - ф-я. в цій ф-ії буде стаорюватись якесь рандомне число і зімітуємо затраимку в 1000мс, я бкдемо перевіряти, при умові якщо рандом > 0.5 - це успіх, інше - помилка


//                         кбф        кбф   
const makeOrder = (dish, onSuccess, onError) => {
    const random = Math.random();

    setTimeout(() => {
        if (random > 0.5) {
            onSuccess(`Ваше замовлення: ${dish}`);
            return;
        } else {
            onError(`Закінчились продукти`);
        }

    }, 1000)
}
// чкщо портапимо в if - ми виконаємо ф-ю onSuccess і припинимо роботу КБФ setTimeout, якщо не потрмпимо - виконаємо другу кбф (onEroor(`Закінсились продукти`))
// викличемо ф-ю і передамо в неї аргументи

makeOrder(
    "Пиріжок",
    (str) => console.log("onSuccess", str), // кбф
    (str) => console.log("onError", str), // кбф
)

// особливість такого запиту в тому, що наша ф-я makeOrder окрім того, що створює якийсь результат, воно його ще й обробляє. ми використовуємо в ній певні ф-ії: onSuccess(`Ваше замовлення ${dish}`); Це може ускладнити читання коду, якщо колбеків буде багато.

// Промісифікація дає можливість позбавитись цих кбф - onSuccess/onError, щоб наш makeOrder не оборобляв у себе в тілі успішний/неуспішний результат.

// вона просто повертатиме проміс результатом, а обробляти його ми будемо за межами функції

// зробимо те саме за допомогою промісів

const makeOrder1 = (dish) => {
    return new Promise((resolve, reject) => {

        const random = Math.random();
        
        setTimeout(() => {
            if (random > 0.5) {
                // тепер ми, на відміну від попереднього випадку скажемо, що наш проміс завершиться успіхом
                resolve(`Ваше замовлення: ${dish}`);                
            }

            reject(`Закінчились продукти`);

        }, 1000)

    })
    
}

// В ЗМІННІЙ makeOrder  ЗБЕІГАЄТЬСЯ ФУНКЦІЯ!!!! (dish) => { ........... }, а результатом її виклику буде проміс


makeOrder1(`Пиріжок`)
    .then(result => console.log(result.toUpperCase()))
    .catch(error => console.log(error))

// тепер ми цей результат не обробляємо в тілі ф-ї makeOrder, а просто повертаємо з неї Promise (з результатом "Ваше замовлення: ${dish}" або "Закінчились продукти"), а вже обробляємо його за межами нашої ф-ї (н-д: toUpperCase, log  і т.д. Всі маніпуляції робимо за межами)

// РІЗНИЦЯ:

// 1. ОБРОБЛЯЄ УСПІШНЕ/НЕУСПІШНЕ ЗАВЕРШЕННЯ
//    2. ПОВЕРТАЄ ЗНАЧЕННЯ, ЯКЕ ПОТІМ ОБРОБЛЯЄМО ЗА ДОПОМОГОЮ then/catch

//=================================================================//

/**
 * ПРОМІСИФІКАЦІЯ "СИНХРОННИХ" ФУНКЦІЙ
 * - Promise.resolve()
 * - Promise.reject()
 */

// статичні методи використовуються коли треба  промісифікувати синхронни й код.

// звичайний код 

const makeOrder2 = (dish, onSuccess, onError) => {
    const random = Math.random();

    if (random > 0.5) {
        onSuccess(`Ваше замовлення: ${dish}`);
            return;
    }
    onError(`Закінчились продукти`);
}

makeOrder2(
    "Пиріжок",
    (str) => console.log("onSuccess", str), // кбф
    (str) => console.log("onError", str), // кбф
)



const makeOrder3 = (dish, onSuccess, onError) => {
    const random = Math.random();

    // if (random > 0.5) {
    //     return Promise.resolve(`Ваше замовлення: ${dish}`);
    // }
    // return Promise.reject(`Закінчились продукти`);

    // або тернарник

    return random > 0.5 ? 
        Promise.resolve(`Ваше замовлення: ${dish}`) : 
        Promise.reject(`Закінчились продукти`);        
    
}

makeOrder3("Пиріжок")
    .then(data => console.log(data))
    .catch(error => console.log(error))



// тут наша ф-я не використовує new Promise, а Promise.resolve/reject cтатичними методами. Тут обчислення відбувається не в колбеку, а просто у функції.Якщо успішне - припиняємо роботу і повертаємо проміс, і так само при неуспіху

// це про варіативність.. обидва способи можливі

//================Promise.all & Promise.race==================//

const startTime1 = Date.now();
const res1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const currenttime = Date.now();
            const deltaTime = currenttime - startTime;
            resolve({title: "first", time: deltaTime})

        }, 3000)
    })
}

const res2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const currenttime = Date.now();
            const deltaTime = currenttime - startTime;
            resolve({title: "second", time: deltaTime})

        }, 1000)
    })
}

const res3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const currenttime = Date.now();
            const deltaTime = currenttime - startTime;
            resolve({title: "third", time: deltaTime})

        }, 6000)
    })
}
// Promise.all отримує в себе масив результатів виклику функцій, тобто проміси  і чекає, поки всі проміси будуть виконані, і лише після цього  поверне результат їх роботи - масив промісів. потім, за допомогою  .then/.catch можемо їх обробити

Promise.all([res1(), res2(), res3()])
    .then(res => console.log(res))
    .catch(error => console.log(error))
    .finally(() => console.log("finally"))
   // ми отримали всі дані завдяки цьому методу одночасно



//////////////////////////////////////////////////////////////////////////////

 