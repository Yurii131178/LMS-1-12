// // const foo = async () => {
// //   console.log("Before await");

// // const { default: axios } = require("axios");

// //   const promiseValue = await new Promise((resolve) => {
// //     setTimeout(() => resolve(5), 2000);
// //   });

// //   console.log("After await", promiseValue);
// // };

// // foo(); // через 2 секунди виведеться в консоль  "After await" 5

// // const fetchUsers = async () => {
// //   try {
// //     const response = await axios.get(
// //       "https://jsonplaceholder.typicode.com/users"
// //     );
// //     return response.data;
// //   } catch (error) {
// //     console.error("Error fetching users:", error);
// //   }
// // };

// // fetchUsers().then((users) => console.log(users));

// // console.log("Before try...catch");

// // try {
// //   const result = 10 / 0;
// //   console.log(result); // Цей рядок не виконається через помилку
// // } catch (error) {
// //   // Обробимо помилку
// //   console.error(error.message);
// // }
// // console.log("After try...catch");

// // //-----------dmytro kislitsyn--------------------//

// import axios from "axios";

// // +++++++++++ОБРОБКА ПОМИЛОК++++++++++
// // try... catch

// /****************************************************************************
//  * 1 ВСЕРЕДИНІ
//  ****************************************************************************/
// async function foo() {
//   try {
//     const result = await axios("https://jsonplaceholder.typicode.com/posts");
//     console.log(result.data);
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// foo();

// /************************************************************************
//  * ЗОВНІ
//  ************************************************************************/

// async function foo1() {
//   const result = await axios("https://jsonplaceholder.typicode.com/users");
//   return result.data;
// }
// foo1()
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error.message));

// /************************************************************************
//  * В ТІЛІ ІНШОЇ АСИНХРОННОЇ ФУНКЦІЇ
//  ************************************************************************/
// async function foo2() {
//   const resolve = await axios("https://jsonplaceholder.typicode.com/photos");
//   return resolve.data;
// }

// async function result() {
//   try {
//     const data = await foo2();
//     console.log(data);
//   } catch (error) {
//     console.log(error.message);
//   }
// }
// result();

// // 1 і 3 сценарії схожі

// //***************************************************************************//

// // await поверне повноцінний об'єкт, він піжде на резульаь виконання промісу,

// // +++++++++++++++++++++++++++++++++++++++++++++++++++++ //

// // const fetchPosts = async() => {
// //   const response = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5");
// //   console.log("Posts: ", response.data);
// // };

// // fetchPosts();

// //////////////////////////////////////////////////////////////////////

// //codepen

// // const fetchPostsBtn = document.querySelector(".btn");
// // const postList = document.querySelector(".posts");

// // fetchPostsBtn.addEventListener("click", async () => {
// //   try {
// //     const posts = await fetchPosts();
// //     renderPosts(posts);
// //     console.log(posts);
// //   } catch (error) {
// //     console.log(error);
// //   }
// // });

// // async function fetchPosts() {
// //   // Change the number of items in the group here
// //   const response = await axios.get(
// //     "https://jsonplaceholder.typicode.com/posts?_limit=7"
// //   );
// //   return response.data;
// // }

// // function renderPosts(posts) {
// //   const markup = posts
// //     .map(({ id, title, body, userId }) => {
// //       return `<li>
// //           <h2 class="post-title">${title.slice(0, 30)}</h2>
// //           <p><b>Post id</b>: ${id}</p>
// //           <p><b>Author id</b>: ${userId}</p>
// //           <p>${body}</p>
// //         </li>`;
// //     })
// //     .join("");
// //   postList.innerHTML = markup;
// // }

// // /////////////////////////////////////////////////

// // // const fetchPosts = async() => {
// // // 	const response = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5&_page=3");
// // // 	console.log("Posts: ", response.data);
// // // };
// // // fetchPosts();

// // /////////////////////////////////////////////////

// // //codepen

// // const fetchPostsBtn1 = document.querySelector(".btn1");
// // const postList1 = document.querySelector(".posts");

// // fetchPostsBtn.addEventListener("click", async () => {
// //   try {
// //     const posts = await fetchPosts();
// //     renderPosts(posts);
// //   } catch (error) {
// //     console.log(error);
// //   }
// // });

// // async function fetchPosts() {
// //   const params = new URLSearchParams({
// //     _limit: 3,
// //     // Change the group number here
// //     _page: 3,
// //   });

// //   const response = await axios.get(
// //     `https://jsonplaceholder.typicode.com/posts?${params}`
// //   );
// //   return response.data;
// // }

// // function renderPosts(posts) {
// //   const markup = posts
// //     .map(({ id, title, body, userId }) => {
// //       return `<li>
// //           <h2 class="post-title">${title.slice(0, 30)}</h2>
// //           <p><b>Post id</b>: ${id}</p>
// //           <p><b>Author id</b>: ${userId}</p>
// //           <p class="post-body">${body}</p>
// //         </li>`;
// //     })
// //     .join("");
// //   postList.innerHTML = markup;
// // }

// // //-------------------dmytro kislitsyn--------------------------//

// // перший приклад, нейронка написала код, проте запити йдуть послідовно при повільному неті. Ці всі 3 запити на різні URL йдуть послідовно, спочаткку ми чекаємо один, потім другий, потім чекаємо виконання третього. всі три запити вкрали 6 секунд!!!!

// const BASE_URL = "https://jsonplaceholder.typicode.com/todos";

// async function getUsers() {
//   const user1 = await axios(`${BASE_URL}/1`);
//   const user2 = await axios(`${BASE_URL}/2`);
//   const user3 = await axios(`${BASE_URL}/3`);

//   return [user1.data, user2.data, user3.data];
// }

// getUsers()
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// // 2 приклад  - тут всі 3 axios, асинхрони, проміси летять в WEB API і там чекають свого виконання, не поступово, один за одним, а всі 3, ми їх перебрали за допомогою .map . Вони одночасно дочекались свого виконання, і йдуть паралельно. замість 6 секунд пішло 2.
// async function getUsers1() {
//   const userArr = [1, 2, 3];

//   const usersProm = userArr.map(async (item) => {
//     const result = await axios(`${BASE_URL}/${item}`);
//     return result.data;
//   });

//   const res = await Promise.all(usersProm);
//   return res;
// }

// getUsers1()
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));
// /****************************************************** */
// // робимо обробку всередині з try ... catch

// async function getUsers2() {
//   try {
//     const userArr = [1, 2, 3];

//     const usersProm = userArr.map(async (item) => {
//       const result = await axios(`${BASE_URL}/${item}`);
//       return result.data;
//     });

//     const res = await Promise.all(usersProm);
//     console.log(res);
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// getUsers2();

// // Це сценарій, коли треба зробити кілька запитів на різні URL, є можливість переписати код з послідовного на паралельний.
// /************************************************************************* */
// // тут апрсото підставили пеальні три різні URL

// async function getUsers3() {
//   // const userArr = [1, 2, 3];
//   const userArr = [
//     "https://jsonplaceholder.typicode.com/todos",
//     "https://jsonplaceholder.typicode.com/users",
//     "https://jsonplaceholder.typicode.com/photos",
//   ];

//   const usersProm = userArr.map(async (item) => {
//     const result = await axios(`${item}`);
//     return result.data;
//   });

//   const res = await Promise.all(usersProm);
//   return res;
// }

// getUsers3()
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// // та й таке

console.log("БІБЛІОТЕКА");

//********************************************** */

import axios from "axios";

// Створи фільмотеку з популярними фільмами, для цього використай
// https://developer.themoviedb.org/reference/trending-movies

// Щоб отримати постер фільму потрібно підставити url з відповіді від бекенду та url з документації
// https://developer.themoviedb.org/docs/image-basics

// Відмалюй картки з фільмами
// Приклад картки  => https://prnt.sc/Hi_iLLg7Nd1F

// Реалізуй пагінацію
// 1 Кнопка "Load More"
// 2 Infinity scroll (https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

//ПОЧАТОК//
// РЕЄСТРАЦІЯ НА САЙТІ І ОТРИМАННЯ КЛЮЧА//
//https://developer.themoviedb.org/reference/intro/authentication//

const BASE_URL = "https://api.themoviedb.org/3";
const END_POINT = "/trending/movie/week";
// const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZjQ5OTg3ZGJhNjhhNzUzNDI5ZWI0Zjc4YjhlODBkZiIsIm5iZiI6MTc0NDM2OTAwMC41Nzc5OTk4LCJzdWIiOiI2N2Y4ZjU2OGEwNGY1MzBiNWM5OTFlMjEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.9bak6rHUgcnrQpEr0CxMthBJO4-ACCn8QJMjAIPDI0s";

const container = document.querySelector(".js-movie-list");
const loadMore = document.querySelector(".js-load-more");

loadMore.addEventListener("click", onLoadMore);

let page = 1;

async function serviceMovie(page = 1) {
  const { data } = await axios(`${BASE_URL}${END_POINT}`, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZjQ5OTg3ZGJhNjhhNzUzNDI5ZWI0Zjc4YjhlODBkZiIsIm5iZiI6MTc0NDM2OTAwMC41Nzc5OTk4LCJzdWIiOiI2N2Y4ZjU2OGEwNGY1MzBiNWM5OTFlMjEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.9bak6rHUgcnrQpEr0CxMthBJO4-ACCn8QJMjAIPDI0s",
    },
    params: {
      page: page,
    },
  });

  return data;
}

function createMarkup(arr) {
  return arr
    .map(
      ({ poster_path, release_date, original_title, vote_average }) => `
        <li class="movie-card">
            <img src="https://image.tmdb.org/t/p/w300${poster_path}"/>
            <div>
                <h2>${original_title}</h2>
                <p>Release Date: ${release_date}</p>
                <p>Vote Average: ${vote_average}</p>
            </div>
        
        </li>
    
    `
    )
    .join("");
}

serviceMovie(page)
  // якщо у функцію передати -page- а в змінній let page = 1 поставити 2, то
  .then((data) => {
    console.log(data);
    container.insertAdjacentHTML("beforeend", createMarkup(data.results));

    if (data.page < data.total_pages) {
      loadMore.classList.replace("load-more-hidden", "load-more"); // КНОПКА ВИДИМА ДОПОКИ НЕ ДІЙШЛИ ДО ОСТАННЬОЇ СТОРІНКИ
    }
  })
  .catch((error) => console.log(error.message));

async function onLoadMore() {
  page++;

  loadMore.disabled = true; // КНОПКА НЕ АКТИВНА // це обмежить тицяння нервового коричтувача, щоб відкрилась тільки одна оновлена сторінка

  try {
    const data = await serviceMovie(page);
    console.log(data);
    container.insertAdjacentHTML("beforeend", createMarkup(data.results));

    loadMore.disabled = false; // КНОПКА АКТИВНА // після завантаження сторінки кнапка знова стає активною.

    if (data.page >= data.total_pages) {
      loadMore.classList.replace("load-more", "load-more-hidden"); // КОНПКА НЕВИДИМА // ХОВАЄМО КНОПКУ НА ОСТАННІЙ СТОРІНЦІ
    }

    const card = document.querySelector(".movie-card");
    const cardHeight = card.getBoundingClientRect().height;

    window.scrollBy({
      left: 0,
      top: cardHeight,
      behavior: "smooth",
    });
  } catch (error) {
    alert(error.message);
  }
}

// можемо зробити те саме всередині асинхронної функції //

//////////////////////////////////////////////////////////////////////////////

//   async function render () {
//     try {
//         const data = await serviceMovie();
//         container.insertAdjacentHTML("beforeend", createMarkup(data.results));
//     } catch(error) {
//         console.log(error.message);
//     }
//   }

//   render()

///////////////////////////////////////////////////////////////////////////////////
