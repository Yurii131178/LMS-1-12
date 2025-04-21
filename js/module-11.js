const title = document.createElement("h1");
title.textContent = "Module-11";
document.body.append(title);

console.log("LMS");

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .then((data) => console.log("then", data))
  .catch((error) => {
    console.log("catch", error);
  });

// fetch повернув Promis, який ми обробляємо за пдопомогою .then(), дочекаємось, доки проміс виконається і перейде в стан fullfilled або  rehjected, якщо виконався успішно - спрацює метод ///, якщо з помилкою -  .catch().

//////////////////////////////////////////////
// const fetchUsersBtn = document.querySelector(".btn");

// fetchUsersBtn.addEventListener("click", () => {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.json();
//     })
//     .then((users) => {
//         // Дані від бекенда
//         console.log(users);
// 		})
//     .catch((error) => console.log(error));
// });

/////////////////////////////////////////////////
// const fetchUsersBtn = document.querySelector(".btn");
// const userList = document.querySelector(".user-list");

// fetchUsersBtn.addEventListener("click", () => {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.json();
//     })
//     .then((users) => {
//       const markup = users.map((user) => {
// 				return `<li>
// 	          <p><b>Name</b>: ${user.name}</p>
// 	          <p><b>Email</b>: ${user.email}</p>
// 	          <p><b>Company</b>: ${user.company.name}</p>
// 	          <p><b>id</b>: ${user.id}</p>
// 	          <p><b>website</b>: ${user.website}</p>

// 	        </li>`;
//         })
//         .join("");

// 		userList.insertAdjacentHTML("afterbegin", markup);
//     })
//     .catch((error) => console.log(error));
// });

/**
 * CODEPEN
 * ==========КНОПКА Fetch users
 */
const fetchUsersBtn = document.querySelector(".btn");
const userList = document.querySelector(".user-list");

fetchUsersBtn.addEventListener("click", () => {
  fetchUsers()
    .then((users) => renderUsers(users))
    .catch((error) => console.log(error));
});

function fetchUsers() {
  return fetch("https://jsonplaceholder.typicode.com/users").then(
    (response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
}

function renderUsers(users) {
  const markup = users
    .map((user) => {
      return `<li>
          <p><b>Name</b>: ${user.name}</p>
          <p><b>Email</b>: ${user.email}</p>
          <p><b>Company</b>: ${user.company.name}</p>
        </li>`;
    })
    .join("");
  userList.insertAdjacentHTML("beforeend", markup);
  console.log(users);
}

//////////////////////////
// const { Container } = require("postcss");

// const promise = new Promise((resolve) => {
//   resolve(10);
// });

// promise
//   .then((value) => {
//     new Promise((resolve) => {
//       resolve(value * 2);
//     });
//   })
//   .then((value) => console.log(value));

// const promise1 = new Promise((resolve) => {
//   resolve(10);
// });

// // функція нічого не повертала тому результат - помилка //

// promise1
//   .then((value) => {
//     return new Promise((resolve) => {
//       resolve(value * 2);
//     });
//   })
//   .then((value) => console.log(value));

// // // а тут ми повернули return і отримали бажагу відповідь //

// let globalVar; // undefined

// // 1. Виконуємо HTTP-запит
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((users) => {
//     console.log("users inside then callback: ", users);

//     // Асинхронно записуємо результат запиту в зовнішню змінну
//     globalVar = users;

//     // Усередині колбека методу then усе добре
//     console.log("globalVar inside fetch callback: ", globalVar);
//   });

// // // Зовні колбека методу then у синхронному
// // // коді немає доступу до даних асинхронної відповіді бекенда
// // // тому що цей код виконаєтся перед кодом в методі then
// console.log("globalVar outside fetch: ", globalVar); // undefined

// fetch("https://jsonplaceholder.typicode.com/users?_limit=7&_sort=name");

//////////////////////////////////////////////////////////////////////////////
console.log("lesson 21 DK");

//lesson 21 DK//
// const container = document.querySelector(".todo-list");

// const params = new URLSearchParams({
//   _limit: 7,
//   _page: 5,
// });

// // ?${params}

// fetch(`https://jsonplaceholder.typicode.com/todos?${params}`)
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);

//     // всі дії з даними, які ми розпарсили з першого .then, ми виконуємо всередині другого .then!!! ЦЕ АСИНХРОННИЙ КОД!!!

//     container.insertAdjacentHTML("beforeend", createMarkup(data));
//   })
//   .catch((error) => {
//     console.log("catch", error);
//   });

// function createMarkup(arr) {
//   return arr
//     .map(
//       ({ title, completed }) => `
//     <li class="list-item">
//     <input type="checkbox" ${completed ? "checked" : ""}/>
//     <p>${title}</p>
//     </li>
//     `
//     )
//     .join("");
// }
/***************************************************************************************** */

// або ${completed && "checked"}

//🧠 Як працює ${completed && "checked"}?
// У JavaScript оператор && працює так:

// A && B // повертає B, якщо A === true, інакше повертає A
// Тобто:
// Якщо completed === true, то повернеться "checked"
// Якщо completed === false, то повернеться false (або що там є в completed)

// ${completed && "checked"}	⚠️	Може вставити "false" в HTML
// ${completed ? "checked" : ""}	✅	Найнадійніший і чистий варіант
/***************************************************************************************** */

// // const container1 = document.querySelector(".user-list");

// // const params1 = new URLSearchParams({
// //     _limit: 7,
// //     _page: 5
// // })

// const container = document.querySelector(".user-list");

// fetch(`https://jsonplaceholder.typicode.com/users`) // ?${params1
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     container.insertAdjacentHTML("beforeend", createMarkup(data1));
//   })
//   .catch((error) => {
//     console.log("catch", error);
//   });

// function createMarkup(data1) {
//   return data1
//     .map(
//       (user) => `
//         <li class="user-item">
//             <p>Name: ${user.name}, Email: ${user.email}</p>
//         </li>
//     `
//     )
//     .join("");
// }

//=========================================================//

// const container1 = document.querySelector(".todo-list");

// const params = new URLSearchParams({
//   _limit: 5,
//   _page: 2,
// });

// fetch(`https://jsonplaceholder.typicode.com/todos?${params}`)
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     container1.insertAdjacentHTML("beforeend", createTodoMarkup(data));
//   })
//   .catch((error) => {
//     console.log("catch", error);
//   });

// function createTodoMarkup(arr) {
//   return arr
//     .map(
//       ({ title, completed }) => `
//         <li class="list-item">
//             <input type="checkbox" ${completed && "checked"}/>
//             <p>${title}</p>
//         </li>
//     `
//     )
//     .join("");
// }
//=======================================================================================
// Fetching Users
// const container2 = document.querySelector(".user-list");

// fetch(`https://jsonplaceholder.typicode.com/users?_limit=5`)
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     container2.insertAdjacentHTML("beforeend", createUserMarkup(data));
//   })
//   .catch((error) => {
//     console.log("catch", error);
//   });

// function createUserMarkup(data) {
//   return data
//     .map(
//       (user) => `
//         <li class="user-item">
//             <p><strong>Name:</strong> ${user.name}</p>
//             <p><strong>Email:</strong> ${user.email}</p>
//         </li>
//     `
//     )
//     .join("");
// }
//=======================================================================================
// для обробки кількох запитів використаємо фунції. винесемо код, що повтрорюється:

// fetch(`https://jsonplaceholder.typicode.com/users?_limit=5`)
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     container2.insertAdjacentHTML("beforeend", createUserMarkup(data));
//   })
//   .catch((error) => {
//     console.log("catch", error);
//   });

// у функцію

//=======================================================================================
function foo(url) {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
// ========================================================================================
foo("https://jsonplaceholder.typicode.com/todos?_limit=3") // todos: перших десять справ
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
// ========================================================================================
foo("https://jsonplaceholder.typicode.com/users?_limit=4") // users: перших п'ять юзерів
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

//=======================================================================================
foo("https://jsonplaceholder.typicode.com/posts?_limit=5") // users: перших п'ять юзерів
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

// //=======================================================================================

foo("https://jsonplaceholder.typicode.com/photos?_limit=6") // users: перших п'ять фоток
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
/////////////////////////////////////////////////////////////////////////////////////////////
// MODULE 11_L_21 DMYTRO KISLITSYN after break

//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\//

// МИ МОЖЕМО ДО HTTP-ЗАПИТУ (URL рядка) додавати додаткові параметри через "?" і "&". ттакож можна винетси в оерему змінну: params
// ЦЕ ЗРУЧНО, КОЛИ ПАРАМЕТРІВ ДЕКІЛЬКА І ЇХ ТРЕБА ВИНЕСТИ ОКРЕМО, ЩОБ ПОЛЕГШИТИ КОД!!!//

//================================================================= PIXABAY======================= //
// const API_KEY_1 = "49632917-f700970c30bc9937fd82e83ee";

// const container3 = document.querySelector(".list");

// const params1 = new URLSearchParams({
//   key: API_KEY_1,
//   q: "cars",
//   image_type: "photo",
//   per_page: 8, // Обмеження кількості результатів
// });

// fetch(`https://pixabay.com/api/?${params1}`)
//   .then((data) => {
//     if (!data.ok) {
//       throw new Error(data.statusText);
//     }
//     return data.json();
//   })
//   .then((data) => {
//     console.log(data);

//     container3.insertAdjacentHTML("beforeend", createMarkup1(data.hits));
//   })
//   .catch((error) => console.log(error));

// function createMarkup1(arr) {
//   return arr
//     .map(
//       ({ id, previewURL, tags }) => `
//     <li data-id="${id}">
//         <img src="${previewURL}" alt="${tags}" width="100" />
//     </li>
//     `
//     )
//     .join("");
// }

/// інший спосіб ///
// fetch("https://pixabay.com/api", {
//   headers: {
//     Authorization: `Bearer ${API_KEY}`,
//   },
// });

// ==============================================================================================
// Потрібно створити функціонал для отримання прогнозу погоди в місті.
// Використай публічне API https://www.weatherapi.com/docs/
// Використовуй ендпоінт Forecast для того, щоб отримати прогноз погоди на декілька днів.

// Створи форму в яку користувач:
// 1 вводить назву міста.
// 2 обирає на яку кількість днів він хоче отримати прогноз погоди (3, 5 та 7 днів).
// (Іноді параметр не працює в такому випадку можна зробити пошук на 1, 2 та 3 дні)
// Приклад форми https://prnt.sc/kFmLOj6gBdv-

// Після сабміту форми відмалюй картки з інформацією отриманою з бекенду.
// Картка має містити відомості про:
// 1 Зображення з погодою (icon)
// 2 Текст з погодою (text)
// 3 Дату (date)
// 4 Середню температуру в Цельсія (avgtemp_c)
// Приклад картки https://prnt.sc/h_p-A6Hty-i-

//----------------------------------------------------------------------------------------------//

//ОТРИМАЄМО ФОРМУ І СПИСОК:
const BASE_URL = "http://api.weatherapi.com/v1";
const API_KEY = "f822f03d1ff54b2ca9b153523250204";

const searchForm = document.querySelector(".js-search-form");
const container1 = document.querySelector(".js-list");

// НА ФОРМУ ВІШАЄМО СЛУХАЧА ПОДІЇ "submit", і ф-ю handleSearch:
searchForm.addEventListener("submit", handleSearch);

// СВОРЮЄМО ФУНКЦІЮ.

function handleSearch(event) {
  event.preventDefault(); //  СПОЧАТКУ МИ ЗУПИНЯЄМО  ДЕФОЛТНУ ПОВЕДІНКУ. СОРІНКА НЕ БУДЕ ПЕРЕЗАВАНТАЖУВАТИСЬ
  const { city, days } = event.currentTarget.elements; // МИ ЗВЕРТАЄМОСЬ ДО ФОРМИ (event.currentTarget. elements), НА ЯКУ НАВІШАНИЙ СЛУХАЧ. ВОНА МАЄ ВЛАСТИВІСТЬ - elemnts, в і якій збкрігаються наші інтерактивні поля, що знаходяться в формі і мають атрибут "name"!!! Саме за значенням атрибуту name ми можемо деструктурувати нані elemenst: city, days

  console.log(city.value);
  console.log(days.value); // ми вже можемо можемо отримати дані, які ввів користувач

  // Далі, нам треба відмалювати розмітку, але спершу створимо окрему функцію запиту на сервер

  const cityValue = city.value.trim(); // бототьба з пробілами

  serviceWeather(city.value, days.value) // приймає значення міста і дня
    .then((data) => {
      // оборобляємо проміс
      console.log(data); // в консолі розгортаємо об'єкт і обираємо портібні нам параметри і відповідно будемо їх відмальовувати. Їдемо вниз малювати маркапну функцію!!!
      container1.innerHTML = createMarkup(data.forecast.forecastday); // використовуємо innerHTML, щоб перезаписувати дані при новому запиті !!!ВАЖЛИВО!!!data це великий об'єкт, в якому є властивості різні, також є forecast і ще глибше forecastday
    })
    .catch((error) => {
      container1.innerHTML = `<li><p>${error.message}</p></li>`;
    })
    .finally(() => event.target.reset());
}

// створимо окрему функцію запиту на сервер. Вона отримуватиме параметри, які ввів користувач + ключ + мова:
function serviceWeather(city = "", days = 1) {
  const params = new URLSearchParams({
    key: API_KEY, // значення, де збк=ерігається наш ключ
    q: city, // місто, яке ввів кристувач
    days, // короткий синтаксис, юо назва ключа і змінної однакові (days: days)
    lang: "uk",
  });
  // Далі, наша ф-я буде повертати результат роботи ф-ії fetch. В документаціі у нас url для запитів: Base URL: http://api.weatherapi.com/v1, а в завданні маємо підказку(Використовуй ендпоінт Forecast). Також беремо шлях з сайту: /forecast.json. + додати параметри, які ми щойно сформували. Далі обробляємо проміс за допомогою методу .then():
  return fetch(`http://api.weatherapi.com/v1/forecast.json?${params}`).then(
    (response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    }
  );
} // функція готова. викликаємо її тоді, коли користаувач тицяє на кнопку "submit". скачемо догори, всереди ф-її handle search.

/////////////////////відмалюємо/////////////////////////////////////////////

function createMarkup(arr) {
  // отримує масив і повертає результат роботи методу .map() з нашим масивом. в кбф методу .map  у нас буде елемент нашого масиву, тобто об'єкт (forecastday), витягуємо звідти і одразу деструктуруємо{}: {date, day:{ avg_temp_c, condition:{text, icon}}}
  return arr
    .map(
      ({
        date,
        day: {
          avgtemp_c,
          condition: { text, icon },
        },
        // далі створюємо розмітку
      }) => `
        <li class="weather-card">
            <img src="${icon}" alt="${text}" class="weather-icon"/>
            <h2 class="weather-date">${date}</h2>
            <h3 class="weather-text">${text}</h3>
            <p class="temperature">${avgtemp_c}</p>
        </li>
    `
    )
    .join("");
}

// викличемо нашу функцію createMarkup і запхаємо туди, дк ми отримали дані(serciceWeather, після методу .then())

///////////////////////////

// const BASE_URL = "http://api.weatherapi.com/v1";
// const API_KEY = "f822f03d1ff54b2ca9b153523250204";

// const searchForm = document.querySelector(".js-search-form");
// const conatiner = document.querySelector(".js-list");

// searchForm.addEventListener("submit", handleSearch);

// function handleSearch(event) {
//   event.preventDefault();

//   const { city, days } = event.currentTarget.elements;
//   const cityValue = city.value.trim();

//   serviceWeather(city.value, days.value)
//     .then((data) => {
//       console.log(data);
//       conatiner.innerHTML = createMarkup(data.forecast.forecastday);
//     })
//     .catch((error) => {
//       console.log(error.message);
//     })
//     .finally(() => event.target.reset());
// }

// function serviceWeather(city = "", days = 1) {
//   const params = new URLSearchParams({
//     key: API_KEY,
//     q: city,
//     days,
//     lang: "uk",
//   });

//   return fetch(`http://api.weatherapi.com/v1/forecast.json?${params}`).then(
//     (response) => {
//       if (!response.ok) {
//         throw new Error(response.statusText);
//       }

//       return response.json();
//     }
//   );
// }

// function createMarkup(arr) {
//   return arr
//     .map(
//       ({
//         date,
//         day: {
//           avgtemp_c,
//           condition: { text, icon },
//         },
//       }) => `
//         <li class="weather-card">
//             <img src="${icon}" alt="${text}" class="weather-icon"/>
//             <h2 class="weather-date">${date}</h2>
//             <h3 class="weather-text">${text}</h3>
//             <p class="temperature">${avgtemp_c}</p>
//         </li>
//     `
//     )
//     .join("");
// }
