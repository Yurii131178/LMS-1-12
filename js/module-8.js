console.log(_.sum([4, 2, 8, 6])); // 20
console.log(_.sum([5, 10])); // 15

console.log(_.shuffle([1, 2, 3, 4])); // [4, 1, 3, 2]
console.log(_.shuffle([1, 2, 3, 4])); // [3, 2, 1, 4]


const instance = basicLightbox.create(`
	<h1>Not closable</h1>
	<p>It's not possible to close this lightbox with a click.</p>
`, {
	closable: false
})




// Lodash

// _.chunk() – ділить масив на менші частини

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const chunked = _.chunk(arr, 3);

console.log(chunked); // [1, 2, 3], [4, 5, 6], [7, 8, 9]

// _.merge() – об’єднує об’єкти глибоко

const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { b: { d: 3 } };

const merged = _.merge(obj1, obj2);
console.log(merged); // { a: 1, b: { c: 2, d: 3 } }



// приклади //

// const _ = require('lodash'); // Якщо використовуєш Node.js

// // 1. Масив користувачів
const users222 = [
	{ name: ' Alice ', age: 30 },
	 { name: ' Alice Cooper ', age: 39 },
    { name: 'BOB DooD', age: 25 },
    { name: 'alice', age: 28 },
    { name: '', age: 22 }, // Порожнє ім'я
    { name: 'John Doe', age: 35 }
];

// 2. Видаляємо користувачів без імені
const filteredUsers= _.compact(users222.map(user => user.name ? user : null));

console.log(filteredUsers);


// 3. Видаляємо дублікати (ігноруємо регістр)
const uniqueUsers = _.uniqBy(filteredUsers, user => _.toLower(user.name));

console.log(uniqueUsers);


// 4. Сортуємо за віком
const sortedUsers = _.sortBy(uniqueUsers, 'age');

console.log(sortedUsers);


// 5. Приводимо імена до camelCase
const finalUsers = sortedUsers.map(user => ({
    name: _.camelCase(user.name),
    age: user.age
}));

console.log(finalUsers);


console.log("Деструктуризація");
 
// Навіщо потрібна деструктуризація?



// Деструктуризація (Destructuring) — це особливий синтаксис, що дозволяє витягти значення зі структур даних, такі як об'єкти або масиви, і присвоїти їх змінним. Це зручний спосіб дістати потрібні дані зі складних структур і використовувати їх у коді.



// Без деструктуризації робота з властивостями об'єкта має такий вигляд:



const user223 = { 
	name: "Jacob", 
	age: 32 
};

console.log(user223.name); // Jacob
console.log(user223.age); // 32



// Із деструктуризацією робота з властивостями об'єкта має такий вигляд:



const user224 = { 
	name224: "Jacob", 
	age224: 32 
};

const { name224, age224 } = user224;
console.log(name224); // Jacob
console.log(age224); // 32

//=========================//

console.log('Деструктуризація об`єктів');


// // Складні дані завжди представлені об'єктом. Багаторазові звернення до властивостей об'єкта візуально забруднюють код.



const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

const accessType = book.isPublic ? "public" : "private";
const message = `Book ${book.title} by author ${book.author} with rating ${book.rating} is in ${accessType} access!`;

console.log(message);




// // Деструктуризація дозволяє «розпакувати» значення властивостей об'єкта в локальні змінні. Це робить код у місці їх використання менш «шумним».



const book1 = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

// Деструктуризуємо
const { title444, author444, isPublic444, rating444 } = book1;

// Використовуємо
const accessType1 = isPublic444 ? "pulbic" : "private";
const message1 = `Book ${title444} by author ${author444} with rating ${rating444} is in ${accessType} access!`;

console.log(message);

console.log("Деструктуризація неіснуючих властивостей");

// У випадку, якщо ім'я змінної та ім'я властивості збігаються, то відбувається присвоєння.
// А що буде в іншому випадку?
// Коли в об'єкті немає властивості з таким ім'ям, змінній буде присвоєно undefined.
const book2 = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

// Деструктуризуємо
const { title, bookTitle, coverImage, bookRating } = book;
console.log(title); // "The Last Kingdom"
console.log(bookTitle); // undefined
console.log(coverImage); // undefined
console.log(bookRating); // undefined


// З метою уникнення присвоєння undefined під час деструктуризації неіснуючих властивостей, можна задати змінним значення за замовчуванням, використовуючи знак =. Це значення буде присвоєно тільки у випадку, коли в об'єкті відсутня властивість із таким ім'ям.
// Додамо зображення обкладинки, якщо вона відсутня в об'єкті книги

const book3 = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
};

const {
  title3,
  author,
  coverImage3 = "https://www.vecteezy.com/png/16457788-realistic-computer-drawing-of-a-cat"
} = book;

console.log(title); // "The Last Kingdom"
console.log(author); // "Bernard Cornwell"
console.log(coverImage); // "https://www.vecteezy.com/png/16457788-realistic-computer-drawing-of-a-cat"

console.log('Перейменування змінної');

// Під час деструктуризації можна перейменувати змінну, в яку розпаковується значення властивості, використовуючи :.
const book4 = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

// Деструктуризуємо
const { title2, author: bookAuthor, isPublic, rating: bookRating1 } = book;
console.log(title); // "The Last Kingdom"
console.log(bookAuthor); // "Bernard Cornwell"
console.log(isPublic); // true
console.log(bookRating1); // 8.38

console.log("Значення за замовчуванням");

// При перейменуванні змінної, в яку ми розпаковуємо значення властивості об'єкта, також можна присвоїти значення за замовчуванням.
// Для цього після нового імені ставимо дорівнює = і вказуємо її значення за замовчуванням.

const book5 = {
  title: "The Last Kingdom",
  coverImage:
    "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
};

const {
  title4,
  coverImage: bookCoverImage = "https://via.placeholder.com/640/480",
} = book;

console.log(title); // "The Last Kingdom"
console.log(bookCoverImage); // "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg"

// Якщо така властивість існує в об'єкті, у змінну буде присвоєно її значення.

// В іншому випадку змінній буде присвоєно значення за замовчуванням.



const book6 = {
  title: "The Dream of a Ridiculous Man",
};

const {
  title5,
  coverImage: bookCoverImage1 = "https://via.placeholder.com/640/480",
} = book;

console.log(title); // "The Dream of a Ridiculous Man"
console.log(bookCoverImage1); // "https://via.placeholder.com/640/480"

console.log("Деструктуризація в циклах");

// Під час ітерації по масиву об'єктів циклом for...of відбуваються багаторазові звернення до властивостей об'єкта.

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
];

for (const book of books) {
  console.log(book.title);
  console.log(book.author);
  console.log(book.rating);
}



// Для того щоб скоротити кількість повторень, можна деструктуризувати властивості об'єкта в локальні змінні в тілі циклу.



for (const book of books) {
  const { title, author, rating } = book;

  console.log(title);
  console.log(author);
  console.log(rating);
}



// Якщо об'єкт містить небагато властивостей, деструктуризацію можна виконати безпосередньо в місці оголошення змінної book.



for (const { title, author, rating } of books) {
  console.log(title);
  console.log(author);
  console.log(rating);
}

console.log("Деструктуризація параметрів");

// Під час передачі об'єктів у функції, можна деструктуризувати об'єкти, щоб отримати доступ до потрібних даних. Це дає змогу явно вказати, які поля об'єкта використовуються у функції.

// Без деструктуризації об'єкта:



function printUserInfo(user) {
  console.log(`Name: ${user.name}, Age: ${user.age}, Hobby: ${user.hobby}`);
}

printUserInfo({ 
	name: "Alice", 
	age: 25, 
	hobby: "dancing" 
}); // Name: Alice, Age: 25, Hobby: dancing



// З деструктуризацією об'єкта в тілі функції:



function printUserInfo1(user) {
const { name, age, hobby } = user
  console.log(`Name: ${name}, Age: ${age}, Hobby: ${hobby}`);
}

printUserInfo1({ 
	name: "Alice", 
	age: 25, 
	hobby: "dancing" 
}); // Name: Alice, Age: 25, Hobby: dancing



// Із деструктуризацією об'єкта в місці оголошення параметрів:



function printUserInfo2({ name, age, hobby }) {
  console.log(`Name: ${name}, Age: ${age}, Hobby: ${hobby}`);
}

printUserInfo2({ 
	name: "Alice", 
	age: 25, 
	hobby: "dancing" 
}); // Name: Alice, Age: 25, Hobby: dancing

// Ще одна перевага в тому, що можна деструктуризувати об'єкт у параметрі book.
// Це можна зробити в тілі функції.



function doStuffWithBook2(book) {
  const { title, pages, downloads, rating, isPublic } = book;
  console.log(title);
  console.log(pages);
}
// Або в сигнатурі (підписі) функції — різниці немає.

function doStuffWithBook3({ title, pages, downloads, rating, isPublic }) {
  console.log(title);
  console.log(pages);
}

console.log("Глибока деструктуризація");

// Найчастіше дані будуть представлені об'єктами з більш ніж одним рівнем вкладеності.

// Так, наприклад, може виглядати об'єкт, що описує користувача соцмережі.

const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const { name, tag, stats } = user;

console.log(name); // Jacques Gluke
console.log(tag); // jgluke
console.log(stats); // { followers: 5603, views: 4827, likes: 1308 }

// Тепер додамо глибоку деструктуризацію властивостей об'єкта stats.
// Для цього в деструктуризації після імені властивості ставимо двокрапку : та починаємо деструктуризацію об'єкта для цієї властивості.

const {
  name225,
  tag225,
  stats: { followers = 0, views: userViews = 0, likes: userLikes = 0 },
} = user;

console.log(name); // Jacques Gluke
console.log(tag); // jgluke
console.log(followers); // 5603
console.log(userViews); // 4827
console.log(userLikes); // 1308

// Під час глибокої деструктуризації також можна змінювати імена змінних і присвоювати значення за замовчуванням, використовуючи вже знайомий тобі синтаксис.

const user11 = {
  name11: "Jacques Gluke",
  tag11: "jgluke",
  stats11: {
    followers11: 5603,
    views11: 4827,
    likes11: 1308,
  },
};

const {
  name11,
  tag11,
  stats11: { followers11 = 0, views: userViews11 = 0, likes: userLikes11 = 0 },
} = user11;

console.log(name11); // Jacques Gluke
console.log(tag11); // jgluke
console.log(followers11); // 5603
console.log(userViews11); // 4827
console.log(userLikes11); // 1308

console.log("Значення за замовчуванням");

// Якщо змінних оголошено більше, ніж елементів масиву, їм буде присвоєно undefined. Щоб запобігти цьому, можна вказувати значення за замовчуванням.
// Синтаксис такий самий, як в об'єктах, після імені змінної ставимо = і значення за замовчуванням.

const color = [200, 100, 255];
const [ red, green, blue, alfa = 0.3 ] = color;

console.log(`rgba(${red}, ${green}, ${blue}, ${alfa})`); // “rgba(200, 255, 100, 0.3)"

console.log("Часткова деструктуризація ...rest.");

// Іноді з масиву необхідно деструктуризувати тільки перші N елементів, а інші зберегти в одну змінну у вигляді масиву.
// Деструктуризуючи масив, можна розпакувати перші необхідні елементи і присвоїти іншу частину елементів масиву змінній, використовуючи операцію ...rest.

const color1 = [200, 255, 100];

const [ red1, ...otherColors ] = color1;

console.log(red1); // 200
console.log(otherColors); // [255, 100]

// При цьому оригінальний масив не змінюється, у змінній color1 буде новий масив із копіями зібраних значень.
console.log(color1);

// З об'єктами, до речі, це теж працює. Можна деструктуризувати певні властивості в окремі змінні, а решту зібрати в новий об'єкт.

const user122 = {
	name1: "Jacob",
	age: 32,
	email: "j.cob@mail.com",
	isOnline: true
};

const { name1, isOnline, ...otherProps } = user122;

console.log(name1); // "Jacob"
console.log(isOnline); // true
console.log(otherProps); // {age: 32, email: "j.cob@mail.com"}

//При цьому оригінальний об'єкт не змінюється, у змінній otherProps буде новий об'єкт із копіями зібраних властивостей.

console.log('Пропуск значень');
// На відміну від іменованих властивостей об'єкта, елементи масиву — це набір індексованих значень. Якщо необхідно деструктуризувати тільки, наприклад, третій елемент, перші два необхідно пропустити.
// Припустимо, з масиву color необхідно взяти тільки останнє значення. Для цього в деструктуризації необхідно відокремити комами елементи, що пропускаються.

const rgb = [200, 100, 255];

const [, , blue1] = rgb;

console.log(`Blue: ${blue1}`); // "Blue: 255"

//На практиці в масивах ця можливість рідко використовується, але знати, що так можна робити, зайвим не буде.


console.log("Деструктуризація параметрів");

// Під час передачі масиву у функцію, можна деструктуризувати його елементи.
// Без деструктуризації:

function printFruits(fruits) {
  console.log(fruits[0], fruits[1], fruits[2]);
}

printFruits(["apple", "banana", "orange"]); // "apple banana orange"


// Із деструктуризацією в місці оголошення параметрів:



function printFruits1([firstFruit, secondFruit, thirdFruit]) {
  console.log(firstFruit, secondFruit, thirdFruit);
}

printFruits1(["apple", "banana", "orange"]); // "apple banana orange"
 

console.log("Переваги деструктуризації");

// Давай підсумуємо переваги деструктуризації:

// Зручне вилучення значень з об'єктів і масивів: Замість того, щоб щоразу звертатися до полів об'єкта або елементів масиву за їхніми індексами або іменами, можна одразу витягти потрібні значення у змінні.
// Короткий і читабельний код: Деструктуризація робить код коротшим і зрозумілішим. Замість довгих виразів доступу до полів об'єктів або елементів масиву, можна відразу присвоїти значення змінним зі зрозумілими іменами.
// Параметри функцій: При передачі об'єктів у функції, можна деструктуризувати об'єкти, щоб отримати доступ до потрібних даних. Це дозволяє явно вказати, які поля об'єкта використовуються у функції.
// Робота з функціями, що повертають об'єкти: Якщо функція повертає об'єкт, можна відразу деструктуризувати цей об'єкт, щоб витягти з нього значення.



