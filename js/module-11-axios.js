// import axios from "axios";

// const { default: axios } = require("axios");

// const title = document.createElement("h1");
// // title.textContent = "Module-11-axios";
// document.body.append(title);

// axios({
//   method: "get",
//   url: "https://jsonplaceholder.typicode.com/users",
// })
//   .then((response) => console.log(response))
//   .catch((error) => console.log(error)); //запит  повертає об'єкт відповіді:

// // спрощуємо код axios.get //

// axios
//   .get("https://jsonplaceholder.typicode.com/users")
//   .then((response) => console.log(response))
//   .catch((error) => console.log(error));

//запит  повертає об'єкт відповіді, і ми можемо звертатись до його властивостей //

// axios
//   .get("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     console.log(response.data);
//     console.log(response.status);
//     console.log(response.statusText);
//     console.log(response.headers);
//     console.log(response.config);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// // ===========Конфігурація за замовчуванням=============//

// // Якщо у тебе є кілька запитів до одного сервера, доводиться щоразу повторювати базову адресу (https://jsonplaceholder.typicode.com), що робить код менш зручним:

// axios.get("https://jsonplaceholder.typicode.com/users").then().catch();
// axios.get("https://jsonplaceholder.typicode.com/posts").then().catch();
// axios.get("https://jsonplaceholder.typicode.com/photos").then().catch();

// // Можна вказати стандартні налаштування конфігурації у властивості axios.defaults, які будуть застосовані до всіх запитів. Властивість axios.defaults.baseURL відповідає за збереження базової адреси для всіх HTTP-запитів.

// import axios from "axios";

// axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

// Після цього у запитах можна вказувати лише відносний шлях. Axios автоматично додає baseURL до кожного запиту.

// axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

// axios.get("/users").then(res => console.log(res.data)).catch();
// axios.get("/posts").then().catch();
// axios.get("/photos").then().catch();

// // Таким чином, якщо тобі потрібно змінити API-адресу, достатньо оновити axios.defaults.baseURL в одному місці.

// // Це робить код гнучкішим та зручнішим!

// // ===============Заголовки за замовчуванням axios.defaalts.headers====================//

// // Окрім базової адреси, можна також встановити стандартні заголовки для всіх HTTP-запитів. Це корисно, якщо, наприклад, потрібно передавати API-ключ або інші авторизаційні дані в кожному запиті.

// // Використовуємо axios.defaults.headers.common для встановлення заголовків, які будуть застосовуватися до всіх запитів:

// // import axios from "axios";

// const myApiKey = "secret-api-key-for-every-request";

// axios.defaults.headers.common["header-name"] = myApiKey;

// // Як це працює?

// // Замість "header-name" вказується потрібний заголовок, наприклад, "Authorization", "X-API-Key" тощо.
// // Axios додає цей заголовок та його значення до кожного запиту, що позбавляє необхідності передавати його вручну щоразу.

// // Таким чином, заголовки додаються автоматично без дублювання коду, що робить його чистішим та зручнішим для підтримки!

// // =================Параметри рядка запиту===================//

// // Коли потрібно передати параметри в URL, їх можна додати різними способами. Якщо параметрів багато, це може зробити код менш читабельним і незручним для редагування.

// // Передача параметрів безпосередньо в URL. Цей підхід працює, але з великою кількістю параметрів URL стає громіздким і складним для читання.

// axios.get("https://jsonplaceholder.typicode.com/users?_limit=7&_sort=name");

// // Можна створити параметри у вигляді об'єкта за допомогою класу URLSearchParams, а потім передати їх у запит://

// const searchParams = new URLSearchParams({
//   _limit: 5,
//   _sort: "name",
// });

// // axios.get(`https://jsonplaceholder.typicode.com/users?${searchParams}`);

// // Але Axios дозволяє передавати параметри в окремому об'єкті через властивість params:

// axios.get("https://jsonplaceholder.typicode.com/users", {
// 	params: {
// 		_limit: 7,
// 		_sort: "name"
// 	}
// });

// Код стає чистішим та легшим для читання.
// Axios автоматично перетворює об'єкт params у рядок запиту.
// Легко редагувати та додавати нові параметри, без ручного форматування URL.

// Це найкращий спосіб працювати з параметрами в запитах Axios!

//====================== M11 L22 DK AXIOS ============================//

const container = document.querySelector(".todo-list");

//

function createMarkup(arr) {
  return arr
    .map(
      ({ title, completed }) => `
    <li class="list-item">
    <input type="checkbox" ${completed && "checked"}/>
    <p>${title}</p>
    </li>
    `
    )
    .join("");
}
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
/**
 * сценарій 1 - axios.get
 */
import axios from "axios";

axios
  .get(`https://jsonplaceholder.typicode.com/todos?_limit=8`)
  .then((response) => {
    console.log(response.data);
    container.insertAdjacentHTML("beforeend", createMarkup(response.data));
  })
  .catch((error) => console.log(error));

// ТЕРЕР всередині функції запит, зовні обробка - 2

function fetchData(url) {
  return axios(url);
}
// Функція буде отримувати якийсь URL і повертати РЕЗУЛЬТАТ РОБОТИ axios (якщо робимо GET запит, викликати метод необов'язково,якщо вкласти аргумерт, це вже буде гет запит на URL)
// це ще один спосіб як метод axios може виконувати get-запити. ======БЕЗ "GET"
fetchData(`https://jsonplaceholder.typicode.com/todos?_limit=5`)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => console.log(error));
// // // міняємо ендпоінт і маємо інші дані)
// // // --------------------------------------------------------------
fetchData(`https://jsonplaceholder.typicode.com/users`)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => console.log(error));
// // //--------------------------------------------------------------

fetchData(`https://jsonplaceholder.typicode.com/posts?_limit=3&_page=7`)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => console.log(error));
/**
 * робимо рефакторінг авторизації запитів з ключами
 *
 * Як у Axios передавати search params mf headers
 *
 * для прикладу використовуємо
 */
// import axios from "axios";

const API_KEY = "49632917-f700970c30bc9937fd82e83ee";

// axios("https://pixabay.com/api/", {
//     params: {
//         key: API_KEY,
//         q: "mushrooms"
//     }
// })
// .then(res => console.log(res)) // .data.hits
// .catch(error => console.log(error))

// в Network бачимо наш запит. ми сформувала такий самий об'єкт як і UrlSearchParams -
/**
 * key: значенння
 * q: хначення
 *
 * незалежно від того, куди ми його пхаємо.
 */

// Спробуємо ще одну можливість передачі ключів через headers:

// axios("https://pixabay.com/api/", {
//     params: {
//         key: API_KEY,
//         q: "mushrooms"
//     },
//     headers: {
//         "Content-Type": "application/json",
//         Authorization: "Bearer jojoba"
//     }
// })
// .then(res => console.log(res)) // .data.hits
// .catch(error => console.log(error))

/**
 * Розгдяньмо ще один сценарій ===4====
 *  *
 */

// import axios from "axios";

// const instanceJson = axios.create({
//   baseURL: "https://jsonplaceholder.typicode.com/",
//   headers: {
//     Authorization: "jojoba",
//   },
// });

// instanceJson("posts", {
//   params: {
//     _limit: 5,
//   },
// })
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// instanceJson("users")
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// const instanceImg = axios.create({
//   baseURL: "https://pixabay.com/api/",
//   params: {
//     key: API_KEY,
//   },
// });

// instanceImg({
//   params: {
//     q: "car",
//   },
// })
//   .then((response) => console.log(response))
//   .catch((error) => console.log(error));

// тепер ми можемо робити декілька шаблонів, з яких можна робити запити(маємо для jsonplaceholder і для pixabay)

//ще раз про варіанти

axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then((res) => console.log(res.data))
  .catch((error) => console.log(error));

axios("https://jsonplaceholder.typicode.com/users")
  .then((res) => console.log(res.data))
  .catch((error) => console.log(error));

axios({
  url: "https://jsonplaceholder.typicode.com/users",
  params: {
    _limit: 2,
  },
})
  .then((res) => console.log(res.data))
  .catch((error) => console.log(error));
