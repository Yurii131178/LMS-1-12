const title = document.createElement("h1");
title.textContent = "Module-9";
document.body.append(title);

const par1 = document.createElement("p");
par1.textContent = " у JSON зберігаються числа, рядки, масиви, а також спеціальне значення"
document.body.append(par1);



const par2 = document.createElement("p");
par2.textContent = "Ключі — це завжди рядки, обов'язково в подвійних лапках.Значення рядків — також обов'язково в подвійних лапках.Числа можуть бути цілими або десятковими, з десятковою крапкою або без неї, включаючи негативні.Числа та булеві значення true і false записуються так само, як у JavaScript.У JSON немає коми після останньої властивості об'єкта.Значення властивостей може бути спеціальним значенням null, але не може бути undefined.Функції не можна зберігати у JSON, оскільки JSON передбачений лише для даних, а не для методів обробки даних."
document.body.append(par2);

console.log("Формат JSON");

// Стандарт JSON
// JSON (JavaScript Object Notation) — сучасний текстовий формат зберігання й передачі структурованих даних у текстовій формі. Саме в цьому форматі дані будуть приходити і відправлятися на сервер, зберігатися в локальному сховищі тощо.
// Звичайний об'єктоподібний синтаксис JSON дуже зручний. Але JSON — це не об'єкт, а його рядкове відображення. Розгляньте приклад JSON файлу.

// {
//   "name": "Josh",
//   "weight": 175,
//   "age": 30,
//   "eyecolor": "brown",
//   "isHappy": true,
//   "cars": ["Chevy", "Honda"],
//   "favoriteBook": {
//     "title": "The Last Kingdom",
//     "author": "Bernard Cornwell",
//     "rating": 8.38
//   }
// }

// Синтаксис схожий на об'єкт, за винятком того, що:



// Ключі — це завжди рядки, обов'язково в подвійних лапках.
// Значення рядків — також обов'язково в подвійних лапках.
// Числа можуть бути цілими або десятковими, з десятковою крапкою або без неї, включаючи негативні.
// Числа та булеві значення true і false записуються так само, як у JavaScript.
// У JSON немає коми після останньої властивості об'єкта.
// Значення властивостей може бути спеціальним значенням null, але не може бути undefined.
// Функції не можна зберігати у JSON, оскільки JSON передбачений лише для даних, а не для методів обробки даних.

console.log(" у JSON зберігаються числа, рядки, масиви, а також спеціальне значенняnull.");

console.log("===========================");

console.log("Перетворення у json");

const par3 = document.createElement("p");
par3.textContent = "Перетворення у json"
document.body.append(par3);

// Javascript і JSON чудово працюють разом, завдяки методам вбудованого класу JSON. Ці методи перетворюють JavaScript об'єкт у JSON і навпаки.
// Метод JSON.stringify(value) приймає значення і перетворює його у JSON. Значенням може бути число, буль, null, масив, об'єкт. 
// Рядки — це вже валідний JSON, тому в їх перетворенні немає сенсу.

const dog = {
  name: "Mango",
  age: 3,
  isGoodBoy: true,
};

const json = JSON.stringify(dog);
console.log(json); // '{"name":"Mango","age":3,"isGoodBoy":true}'

// Результат виклику JSON.stringify — це валідний JSON (рядок), який може бути збережений у вебсховище, базу даних або переданий мережею на сервер.

//=========================================//

console.log("=======================================");

console.log("Перетворення функцій");

// Не всі JavaScript об'єкти можуть бути перетворені один в один у JSON. Наприклад, якщо в об'єкта є методи, то при перетворенні вони будуть проігноровані та не потраплять у JSON.



const dog1 = {
  name: "Mango",
  age: 3,
  isGoodBoy: true,
  bark() {
    console.log("Woof!");
  },
};

const json1 = JSON.stringify(dog);
console.log(json1); // '{"name":"Mango","age":3,"isGoodBoy":true}'



// Також при спробі перетворити функцію у JSON результатом буде undefined.



const json2 = JSON.stringify(() => console.log("Well, this is awkward"));
console.log(json2); // undefined

// Що буде з методами об'єкта при спробі перетворити його у json?

// Вони будуть проігноровані
// Буде помилка перетворення
// Вони перетворяться на рядок
// Результат

// А ось тут помилка. Варто запам’ятати, що при перетворенні у JSON методи об'єкта будуть проігноровані.

console.log("Парсинг із json");


// Парсинг із json

// Щоб отримати з JSON валідне JavaScript значення, його необхідно розпарсити (parse). Це операція зворотня перетворенню JavaScript об'єкта в json за допомогою методу JSON.stringify(value)

// Метод JSON.parse(value) приймає json, тобто рядок, і перетворює його у JavaScript дані. 



console.log(JSON.parse("5")); // 5
console.log(JSON.parse("false")); // false
console.log(JSON.parse("null")); // null



// Якщо json описує складний тип даних, наприклад об'єкт, то в результаті отримаємо валідний об'єкт, з яким можна працювати звичайним чином.



const json3 = '{"name":"Mango","age":3,"isGoodBoy":true}';

const dog2 = JSON.parse(json3);
console.log(dog2); // {name: "Mango", age: 3, isGoodBoy: true}
console.log(dog2.name); // "Mango"

console.log("Обробка помилок");


// Обробка помилок



// Якщо методу JSON.parse передати невалідний JSON, він згенерує помилку. Як результат, увесь скрипт впаде, тобто припинить своє виконання, і весь код після місця помилки не виконається.



// До такого сценарію призведе, наприклад, парсинг рядка.



// Рядок із символами — це невалідний JSON, адже він не може бути перетворений у валідне JavaScript значення.



// const data = JSON.parse("Well, this is awkward"); 
// console.log("❌ You won't see this log");

// Помилка буде і при спробі парсингу невалідного об’єкта, який, наприклад, може прийти з бекенду. У прикладі у властивості username бракує подвійних лапок.



// const data = JSON.parse('{username: "Mango"}'); // Error
// console.log("❌ You won't see this log");


console.log("Рішення ====try...catch====");



// Рішення



// Для уникнення цього використовується конструкція try...catch, яка дозволяє «ловити» й обробляти помилки виконання скрипта.



try {
  // Code that may throw a runtime error
} catch (error) {
  // Error handling
}



// Спочатку виконується код всередині блоку try.
// Якщо помилки відсутні, блок catch ігнорується й управління передається далі.
// Якщо в блоці try сталася помилка, його виконання зупиняється та інтерпретатор переходить до блоку catch.


// Використовуючи конструкцію try...catch, можна обробити цей виняток таким чином, щоб скрипт за межами цієї конструкції продовжив працювати, навіть у разі помилки.



try {
  const data = JSON.parse("Well, this is awkward");
} catch (error) {
  console.log(error.name); // "SyntaxError"
  console.log(error.message); // Unexpected token W in JSON at position 0
}

console.log("✅ This is fine, we handled parsing error in try...catch");



// Змінна error — це об'єкт помилки з інформацією про те, що сталося.

// У цього об'єкта є кілька корисних властивостей:



// name — тип помилки. Для помилки парсингу — це SyntaxError.
// message — повідомлення про деталі помилки.
// stack — стек викликів функцій на момент помилки. Використовується для налагодження.


//Детальніше про помилки



// У JavaScript код виконується не одразу.
// Для початку інтерпретатору потрібно прочитати код і дізнатися, чи можливо його взагалі виконати.

// Фаза інтерпретації, або оцінки (compile time, evaluation time) — підготовка перед виконанням коду: інтерпретатор знаходить синтаксичні помилки, помилки типізації тощо. Отже, код ще не виконується, лише оцінюється.
// Якщо ця фаза пройшла успішно, це щонайменше означає, що в коді відсутні синтаксичні помилки і його можна запустити для виконання.

// Фаза виконання (runtime) — скрипт починає виконуватися: виконуються інструкції викликів функцій і оцінювання виразів, відбувається пошук необхідних ідентифікаторів у відповідних областях видимості тощо.

// Якщо ця фаза проходить успішно, це свідчить про те, що скрипт написаний без явних помилок і виконав свою роботу. На цій фазі можуть бути помилки, пов'язані з відсутніми властивостями та змінними, перетворенням типів тощо, тобто щось, що відбувається тільки під час виконання коду.

// Спробуй виконати наступний код.

// console.log('This message will not appear in the console');
// cos value = 5;


// У ньому навмисно зроблена помилка. Замість const намагаємося оголосити змінну value ключовим словом cos. На фазі оцінки буде виявлена синтаксична помилка. Фаза виконання навіть не запуститься. У консолі ми одразу побачимо повідомлення про помилку.
// Конструкція try...catch ловить тільки помилки, які виникли під час виконання коду (runtime errors). Це означає, що код має бути синтаксично правильним, інакше фаза виконання просто не запуститься. Помилки, які виникають під час фази оцінювання, називаються помилками парсингу.


//===================================================//
console.log(window.localStorage); // Storage {length: 0}

console.log(localStorage);


localStorage.setItem("ui-theme", "light");
console.log(localStorage);

const settings = {
  theme: "dark",
  isAuthenticated: true,
  options: [1, 2, 3],
};

localStorage.setItem("settings", JSON.stringify(settings));
console.log(localStorage);


const savedTheme = localStorage.getItem("ui-theme");
console.log(savedTheme);// light






const settings1 = {
  theme: "dark",
  isAuthenticated: true,
  options: [1, 2, 3],
};
localStorage.setItem("settings", JSON.stringify(settings1));

const savedSettings = localStorage.getItem("settings");
console.log(savedSettings); // A string

const parsedSettings = JSON.parse(savedSettings);
console.log(parsedSettings); // Settings object


localStorage.setItem("ui-theme", "dark");
console.log(localStorage.getItem("ui-theme")); // "dark"

localStorage.removeItem("ui-theme");
console.log(localStorage.getItem("ui-theme")); // null




localStorage.setItem("ui-theme", "light");
localStorage.setItem("notif-level", "mute");

console.log(localStorage);
// Storage {notif-level: 'mute', ui-theme: 'light', length: 2}


// ❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌
console.log("// localStorage.clear(); // !!!БУДБТК=Е УВАЖНІ!!!Навіть якщо localStorage.clear() є раніше в коді, він впливає на виконання подальшої логіки, бо очищає localStorage до того, як ви намагаєтеся отримати дані. Видаляючи його, усе працює коректно.");

console.log(localStorage); // Storage {length: 0}
// ❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌


sessionStorage.setItem("user-id", "123");
sessionStorage.setItem(
  "tickets",
  JSON.stringify({ from: "Lviv", to: "Kyiv", quantity: 2 })
);
console.log(sessionStorage);
// Storage {user-id: '123', tickets: '{"from":"Lviv","to":"Kyiv","quantity":2}', length: 2}


const userId = sessionStorage.getItem("user-id");
console.log(userId); // "123"

const tickets = JSON.parse(sessionStorage.getItem("tickets"));
console.log(tickets); // { from: "Lviv", to: "Kyiv", quantity: 2 }
//===========================================================================//

// Кейс: Форма з повідомленням
// Створимо форму для введення повідомлення.

// <form class="feedback-form">
//   <textarea name="message"></textarea>
//   <button type="submit">Send feedback</button>
// </form>

// Під час сабміту форми будемо виводити в консоль значення текстового поля та очищати форму.

// const form = document.querySelector(".feedback-form");

// form.addEventListener("submit", evt => {
//   evt.preventDefault();
// 	console.log(evt.target.elements.message.value);
//   form.reset();
// });



// Проблема
// Якщо користувач ввів повідомлення в текстове поле і перезавантажив сторінку, не надіславши форму, під час перезавантаження сторінки введене повідомлення пропадає.

// Рішення
// Зробимо так, щоб при перезавантаженні сторінки зберігалося введене повідомлення.
// Для цього використовуємо локальне сховище, щоб зберегти поточне значення текстового поля під час введення.

// const form = document.querySelector(".feedback-form");
// const localStorageKey = "goit-example-message";

// form.addEventListener("input", (evt) => {
//   localStorage.setItem(localStorageKey, evt.target.value);
// });

// form.addEventListener("submit", (evt) => {
//   evt.preventDefault();
// 	console.log(evt.target.elements.message.value);
//   form.reset();
// });


// Щоразу, коли змінюється значення поля, тобто відбувається подія "input", ми:

// використовуємо делегування подій;
// ловимо подію на формі;
// використовуємо властивість target для запису поточного значення поля в локальне сховище.


// Під час сабміту форми будемо очищати збережене значення методом removeItem.

// const form = document.querySelector(".feedback-form");
// const localStorageKey = "goit-example-message";

// form.addEventListener("input", (evt) => {
//   localStorage.setItem(localStorageKey, evt.target.value);
// });

// form.addEventListener("submit", (evt) => {
//   evt.preventDefault();
// 	console.log(evt.target.elements.message.value);
//   localStorage.removeItem(localStorageKey);
//   form.reset();
// });



// Останнім кроком необхідно додати код читання збереженого повідомлення з локального сховища і встановлення його початковим значенням для текстового поля під час завантаження сторінки.



const form = document.querySelector(".feedback-form");
const textarea = form.elements.message; // form.elements.message – Найзручніший і найкоротший спосіб, якщо textarea має name="message".
// ✔ form.elements — це швидкий спосіб отримати елементи форми за їхнім атрибутом name.
// ✔ Якщо name немає, доведеться використовувати querySelector, getElementsByTagName або інші методи.
//form.querySelector("textarea") – Використання CSS-селектора для пошуку першого <textarea>, Якщо у вашій формі є лише один <textarea>!!!
const localStorageKey = "goit-example-message";

textarea.value = localStorage.getItem(localStorageKey) ?? "";

form.addEventListener("input", (evt) => {
  localStorage.setItem(localStorageKey, evt.target.value);
});

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  console.log(evt.target.elements.message.value);
  localStorage.removeItem(localStorageKey);
  form.reset();
});


console.log("MODULE-9.LESSON-17 DMYTRO_K");

console.log("збереження, одержання, видалення, витирання в локальному сховищі");


localStorage.setItem("name", "Alice");


const LS_KEY = "Array of names";
const names = ["Alice", "Kate", "Emma"];


localStorage.setItem(LS_KEY, JSON.stringify(names));

const arr = localStorage.getItem(LS_KEY);
console.log(JSON.parse(arr));

localStorage.removeItem(LS_KEY);
localStorage.removeItem("name");
localStorage.removeItem("notif-level");
