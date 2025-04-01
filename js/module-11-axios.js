

// const title = document.createElement("h1");
// title.textContent = "Module-11-axios";
// document.body.append(title);

import axios from 'axios';

axios({
  method: 'get',
  url: 'https://jsonplaceholder.typicode.com/users'
})
	.then(response => console.log(response))
    .catch(error => console.log(error)); //запит  повертає об'єкт відповіді:

// спрощуємо код axios.get //

axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => console.log(response))
    .catch(error => console.log(error));
   
    
//запит  повертає об'єкт відповіді, і ми можемо звертатись до його властивостей //

axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        console.log(response.data);
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.headers);
        console.log(response.config);        
    })
    .catch(error => {
        console.log(error);
        
    })

// ===========Конфігурація за замовчуванням=============//



// Якщо у тебе є кілька запитів до одного сервера, доводиться щоразу повторювати базову адресу (https://jsonplaceholder.typicode.com), що робить код менш зручним:



// axios.get("https://jsonplaceholder.typicode.com/users").then().catch();
// axios.get("https://jsonplaceholder.typicode.com/posts").then().catch();
// axios.get("https://jsonplaceholder.typicode.com/images").then().catch();



// Можна вказати стандартні налаштування конфігурації у властивості axios.defaults, які будуть застосовані до всіх запитів. Властивість axios.defaults.baseURL відповідає за збереження базової адреси для всіх HTTP-запитів.



// import axios from "axios";

// axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';


// Після цього у запитах можна вказувати лише відносний шлях. Axios автоматично додає baseURL до кожного запиту.

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

axios.get("/users").then().catch();
axios.get("/posts").then().catch();
axios.get("/images").then().catch();

// Таким чином, якщо тобі потрібно змінити API-адресу, достатньо оновити axios.defaults.baseURL в одному місці.

// Це робить код гнучкішим та зручнішим!

// ===============Заголовки за замовчуванням====================//

// Окрім базової адреси, можна також встановити стандартні заголовки для всіх HTTP-запитів. Це корисно, якщо, наприклад, потрібно передавати API-ключ або інші авторизаційні дані в кожному запиті.



// Використовуємо axios.defaults.headers.common для встановлення заголовків, які будуть застосовуватися до всіх запитів:


// import axios from "axios";

const myApiKey = "secret-api-key-for-every-request";

axios.defaults.headers.common["header-name"] = myApiKey;



// Як це працює?



// Замість "header-name" вказується потрібний заголовок, наприклад, "Authorization", "X-API-Key" тощо.
// Axios додає цей заголовок та його значення до кожного запиту, що позбавляє необхідності передавати його вручну щоразу.


// Таким чином, заголовки додаються автоматично без дублювання коду, що робить його чистішим та зручнішим для підтримки!

// =================Параметри рядка запиту===================//


// Коли потрібно передати параметри в URL, їх можна додати різними способами. Якщо параметрів багато, це може зробити код менш читабельним і незручним для редагування.

// Передача параметрів безпосередньо в URL. Цей підхід працює, але з великою кількістю параметрів URL стає громіздким і складним для читання.

axios.get("https://jsonplaceholder.typicode.com/users?_limit=7&_sort=name");


// Можна створити параметри у вигляді об'єкта за допомогою класу URLSearchParams, а потім передати їх у запит://

// const searchParams = new URLSearchParams({
//   _limit: 5,
//   _sort: "name",
// });

// axios.get(`https://jsonplaceholder.typicode.com/users?${searchParams}`);



// Але Axios дозволяє передавати параметри в окремому об'єкті через властивість params:

axios.get("https://jsonplaceholder.typicode.com/users", {
	params: {
		_limit: 7,
		_sort: "name"
	}
});



// Код стає чистішим та легшим для читання.
// Axios автоматично перетворює об'єкт params у рядок запиту.
// Легко редагувати та додавати нові параметри, без ручного форматування URL.


// Це найкращий спосіб працювати з параметрами в запитах Axios!