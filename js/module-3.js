// =========================/ split() ================================================================

function calculateEngravingPrice(message, pricePerWord) {
  const array = message.split(" ");
  const sum = array.length;
 
  return sum * pricePerWord;
}

console.log(calculateEngravingPrice("JavaScript is in my blood", 10)); // 50
console.log(calculateEngravingPrice("JavaScript is in my blood", 20)); // 100
console.log(calculateEngravingPrice("Web-development is creative work", 40)); // 160
console.log(calculateEngravingPrice("Web-development is creative work", 20)); // 80

console.log("========метод: slice (begin index, end Index) excl. end Index=======");
  

const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
console.log(planets.slice(2)); // ['Venus', 'Jupiter', 'Saturn']
console.log(planets.slice(0, 4)); // ['Earth', 'Mars', 'Venus', 'Jupiter']
console.log(planets.slice(-1)); // ['Saturn']

// ----------------------
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(-3);

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);


//--------------------------/ concat() /------------------------------------------

// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Peach", "Houston"];
// const allClients = oldClients.concat(newClients);

// console.log(allClients);

// ========================/ indexOf ========================================================

// function getSlice(array, value) {
//   let index = array.indexOf(value);
  
//   // Якщо елемент не знайдено, повертаємо порожній масив
//   if (index === -1) {
//     return [];
//   }

//   // Повертаємо підмасив, включаючи знайдений елемент
//   return array.slice(0, index + 1);
// }

// console.log(getSlice(["Mango", "Poly", "Ajax"], "Poly"));
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Casey"));
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Ajax"));
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Mango"));


// -----------------------/ push /------------------------------------------------

// function createArrayOfNumbers(min, max) {
//   let numbers = []; 
  
//   for (let i = min; i <= max; i++) {
//     numbers.push(i); 
//   }
  
//   return numbers;
// }

// // ============================ ІТЕРАЦІЯ ПО МАСИВУ ЧЕРЕЗ ЦИКЛ for =================================================

// const planets = ["Earth", "Mars", "Venus"];

// for (let i = 0; i < planets.length; i ++) {
//   console.log(planets[i]);
// }

// --------------------------------------------------------------------------------------------
// Функція getEvenNumbers(start, end) має два параметри start та end, які є цілими числами. Доповни код функції так, щоб вона повертала масив усіх парних чисел від start до end. Якщо жодного парного числа немає, то масив має бути пустим. Парним вважається число, яке ділиться на 2 без остачі (10 % 2 === 0). Використовуй цикл for.





// function getEvenNumbers(start, end) {
//   let evenNumbers = [];
  
//   for(let i = start; i <=end; i++) {

//     if(i % 2 === 0) {

//      evenNumbers.push(i); 
            
//     }
    
//   }
//   return evenNumbers;
// }

// console.log(getEvenNumbers(7, 9));
// console.log(getEvenNumbers(1, 5));
// console.log(getEvenNumbers(3, 11));

// --------------------------------------------------------------
// Що робить функція getEvenNumbers(start, end)?
// Вона приймає два параметри:

// start — початкове число діапазону.
// end — кінцеве число діапазону.
// Функція знаходить усі парні числа між start і end (включно) і повертає їх у вигляді масиву.

// Детальний розбір коду
// 1. Створення пустого масиву
// let evenNumbers = [];
// Оголошується порожній масив evenNumbers, куди будуть записані всі парні числа.
// 2. Цикл for перебирає всі числа в діапазоні
// for (let i = start; i <= end; i++) {
// i = start — цикл починається з початкового значення.
// i <= end — працює, поки i не стане більше за end.
// i++ — на кожній ітерації i збільшується на 1.
// 3. Перевірка парності
// if (i % 2 === 0) {
// i % 2 === 0 перевіряє, чи число ділиться на 2 без залишку (тобто парне).
// 4. Додавання парного числа в масив
// evenNumbers.push(i);
// Якщо число парне, воно додається в масив evenNumbers.
// 5. Повернення результату
// return evenNumbers;
// Функція повертає масив знайдених парних чисел.
// Приклад роботи функції
// Вхідні дані:
// console.log(getEvenNumbers(7, 9));
// Як працює цикл:
// i	i % 2 === 0	Додається в evenNumbers?
// 7	❌ (7 % 2 = 1)	Ні
// 8	✅ (8 % 2 = 0)	Так (evenNumbers = [8])
// 9	❌ (9 % 2 = 1)	Ні
// Результат:
// [8]

// =========================== includes() ============================================================

// Функція checkStorage(storage, item) приймає два параметри:

// storage - масив рядків, що описує доступні товари на складі
// item - рядок з назвою товара, наявність якого потрібно перевірити
// Доповни код функції таким чином, щоб вона перевіряла, чи присутній такий товар в масиві storage і повертала:

// рядок "<item> is available to order!", де item - це назва товара, якщо товар було знайдено


  // Принцип роботи функції checkStorage(storage, item)

// function checkStorage(storage, item) {
//   let str = item.toLowerCase(); //Конвертація тексту в нижній регістр:item.toLowerCase() змінює регістр введеного товару на малий (str), щоб уникнути проблем з регістром.
//   if (storage.includes(str)) {              //Перевірка наявності товару: storage.includes(str) перевіряє, чи є str у масиві storage.
//     return `${str} is available to order!`; // Повернення результату: Якщо товар є в storage, повертається рядок: "item is available to order!".
    
//   } else {
//     return "Sorry! We are out of stock!"; // Якщо товару немає, повертається: "Sorry! We are out of stock!".
    
//   }
    
//   }

//   console.log(checkStorage(["apple", "plum", "pear"], "PluM"));
//   console.log(checkStorage(["apple", "plum", "pear"], "pEAr"));
//   console.log(checkStorage(["apple", "plum", "pear"], "coconut"));


  // -----------------------------------------------------------------------------------
  // Перед розв'язанням цієї задачі варто зазначити, що таке спільні елементи. Спільними елементами масивів називають ті елементи, які присутні у всіх масивах.

// Наприклад, у двох масивах [1, 3, 5] і [0, 8, 5, 3] спільними будуть числа 3 і 5, оскільки вони присутні в обох вхідних масивах. А числа 0, 1 і 8 присутні тільки в одному з масивів.

// Функція getCommonElements(array1, array2), приймає два масиви (array1 та array2) довільної довжини в якості параметрів.

// Доповни код функції:

// Створи порожній масив для зберігання нового масиву.
// Використай цикл for для ітерації кожного елемента у array1.
// У тілі циклу перевір, чи поточний елемент існує у array2 за допомогою методу includes.
// Якщо він існує, то додай елемент до нового масиву.
// Поверни наповнений масив спільних елементів як результат роботи функції.

  // function getCommonElements(array1, array2) {
  //   // Створення порожнього масиву для спільних елементів
  //   let newArray = [];
  
  //   // Цикл для ітерації кожного елемента в array1
  //   for (let i = 0; i < array1.length; i++) {
  //     // Перевірка, чи існує елемент в array2
  //     if (array2.includes(array1[i])) {
  //       // Якщо існує, додаємо елемент до нового масиву
  //       newArray.push(array1[i]);
  //     }
  //   }
  
  //   // Повертаємо масив спільних елементів
  //   return newArray;
  // }

// ========================= for....of======================================

// const planets = ["Earth", "Mars", "Venus"];

// for (const planet of planets) {
//   console.log(planet);
// }

// в консолі буде наступне

// lesson-1.js:369 Earth
// lesson-1.js:369 Mars
// lesson-1.js:369 Venus

// задачка з LMS:

// Доповни код функції calculateTotalPrice(order) так, щоб вона повертала загальну суму чисел в масиві order. Використай цикл for...of для перебору масиву.

// // //  Як це працює:

// function calculateTotalPrice(order) { // Функція приймає параметр order, який є масивом чисел (можливо, це ціни товарів або кількість одиниць товарів).
//   let totalPrice = 0; // Ініціалізує змінну totalPrice, в яку буде додаватися сума елементів.
//    for (let num of order) { // Цикл for...of перебирає всі елементи масиву order. Кожен елемент num (це число) додається до змінної totalPrice.
//      totalPrice += num; //Кожен елемент num (це число) додається до змінної totalPrice.
     
//    }
//    return totalPrice; // По завершенню циклу функція повертає значення змінної totalPrice, тобто сумарну вартість усіх елементів у масиві.
//  }
 
// console.log(calculateTotalPrice([12, 85, 37, 4]));

// console.log(calculateTotalPrice([164, 48, 291]));

// console.log(calculateTotalPrice([]));


// ========================================================
// урок 1 - лекція 03.02.2025

// ------------------------------Arrays/Масиви----------------------------

const array = ["Magnus", "Poly", "Liza", "Pete", "Keath", "Ajax", "Hloe"];

console.table(array); // відображення масиву (через опцію table)

console.log(array[5]); // доступ до елемента

console.log(array.length); // кількість елеиентів

array[1] = "Mango"; // перевизначення елемента

console.log(array); // перевірка після перевизначення

const lastIndex = array.length -1; // отримання отсаннбого індексу

console.log(array[lastIndex]); // отрмання значення останнього елемента

// ========================Присвоєння за посиланням і значенням=============

const a = 10;
const b = a;

// console.log("[a]", a);
// console.log("b", b); // примітиви копюються за значенням

// const x = [1, 2, 3]
// const y = x;

// x[0] = 300;


// console.log("x", x); // x [300, 2, 3] 
// console.log("y", y); // y [300, 2, 3] массиви змінюються за посиланням

console.log(a === b); //true

const x = [1, 2, 3]
const y = [1, 2, 3]

console.log(x === y); // false 
console.log("масиви порінюються за посиланням, тому немає однакові масиви не дорівнюють один одному");

// Однакові масиви не дорінюють один одному бо копіюються за посиланням
// і порівнюються за посиланнями

//====================МЕТОДИ МАСИВІВ==========================
console.log("--------------метод join()-----------------------");

const str = array.join(""); //   MagnusMangoLizaPeteKeathAjaxHloe
const stri = array.join(" "); // Magnus Mango Liza Pete Keath Ajax Hloe
const strin = array.join("-");// Magnus-Mango-Liza-Pete-Keath-Ajax-Hloe
const string= array.join("-,_,-");//Magnus-,_,-Mango-,_,-Liza-,_,-Pete-,_,-Keath-,_,-Ajax-,_,-Hloe
console.log(str);
console.log(stri);
console.log(strin);
console.log(string);

console.log("--------------join() перетворює масив у рядок---------------");


console.log("================split() ==================");

const newArray =str.split(""); // ['M', 'a', 'g', 'n', 'u', 's', 'M', 'a', 'n', 'g', 'o', 'L', 'i', 'z', 'a', 'P', 'e', 't', 'e', 'K', 'e', 'a', 't', 'h', 'A', 'j', 'a', 'x', 'H', 'l', 'o', 'e'] // посимвольно зробить елементи. 
const newArray1 =str.split("  ");//['MagnusMangoLizaPeteKeathAjaxHloe']

console.log(newArray);
console.log(newArray1);


const array5 = ["putin", "hujlo"];
console.log(array5);

const newArr1 = array5.join(" ");// putin hujlo  -перетворення в рядок
console.log(newArr1);

const newarr2 = newArr1.split(" "); // ['putin', 'hujlo'] - перетворення в масивю
console.log(newarr2);

console.log("+++++++++++++++++ метод slice() +++++++++++++++++++++");

const array6 = array.slice(1, 3); 
console.log(array6);
// повертає копію від індексу 1 до 3 невключно(1,2) / ) ['Mango', 'Liza']
const array7 = array.slice(-2); 
console.log(array7); 
// поверне останні 2 індекси = вирізання з кінця.
const array8 = array.slice(); 
console.log(array8); 
// поверне копію масиву: ['Magnus', 'Mango', 'Liza', 'Pete', 'Keath', 'Ajax', 'Hloe']

console.log("----------------- concat()----------------------");

console.log("----------------- indexOf()----------------------");

console.log(array.indexOf("Liza")); // 2 (індекc елементу "Liza"). Якщо знаходить підрядок (елемент), повертає його індекс, якщо нема - повертає -1 // чутливий до регістру. 


console.log("----------------- push()----------------------");

 const array9 = array.push("woohoo", "ho-ho-ho");
 console.log(array); // додає новіаргументи як елементи в кінець масиву
 console.log(array9); // певертає кількість елементів
 
 

console.log("----------------- pop()----------------------");

const array10 = array.pop(); // видаляє з цінця масиву олин елемент ho-ho-ho, пвертає його
console.log(array); // тут видалив один //['Magnus', 'Mango', 'Liza', 'Pete', 'Keath', 'Ajax', 'Hloe', 'woohoo']

console.log(array10); // тут повернув в новий масив: ho-ho-ho

// ===============================================================

console.log("=============== ФУНКЦІЇ Ч.2 =======================");

function sum(a, b) {
  console.log(arguments);
  return a + b;
}

sum(2, 5);

function multiply() {
  let total = 1;

  for (const arg of arguments) {
    total *= arg;
  }

  return total;
}

console.log(multiply(1, 2, 3)); //  6
console.log(multiply(1, 2, 3, 4)); //  24
console.log(multiply(1, 2, 3, 4, 5)); //  120

// -----------------------------------------------------

function createReversedArray() {
  const args = Array.from(arguments);
  return args.toReversed(); // Повертає новий масив у зворотному порядку
}

console.log(createReversedArray(12, 85, 37, 4));
console.log(createReversedArray(412, 371, 94, 63, 176));

// ---------------------Параметри за замовчуванням------------------


function greet(username = "Guest") {
  console.log(`Hello, ${username}!`);
}

greet("Jacob"); // "Hello, Jacob!"
greet();        // "Hello, Guest!"
// ------------------Приклад із кількома параметрами-------------

function count(from, to, step = 1) {
  console.log(`from: ${from}, to: ${to}, step: ${step}`);

  for (let i = from; i <= to; i += step) {
  // ... 
  }
}

count(1, 15, 3); // "from: 1, to: 15, step: 3"
count(1, 15); // "from: 1, to: 15, step: 1"

// -------задачка з коспекту ------

function calculateTax(amount, taxRate = 0.2) {

  
  return amount * taxRate;
}

calculateTax ();

console.log(calculateTax(200, 0.1)); // 20
console.log(calculateTax(100, 0.5)); // 50
console.log(calculateTax(200)); // 40, by default taxRate is 0.2;

// ================= Стек викликів ======================

function fnA() {
  console.log("Log inside fnA function before calling fnB");
  fnB();
  console.log("Log inside fnA function after fnB call");
}

function fnB() {
  console.log("Log inside fnB function");
}

console.log("Log before calling fnA");
fnA();
console.log("Log after calling fnA");

// ========================/stack frame /=========

function bar() {
  console.log("bar");
}

function baz() {
  console.log("baz");
}

function foo() {
  console.log("foo");
  bar();
  baz();
}

foo();



