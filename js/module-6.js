console.log('===============MODULE 6=================');
console.log('/================checkup==================/');

// Виконай рефакторинг методів об'єкта pizzaPalace, розставивши відсутні this в місцях звернення до властивостей і методів об'єкта.

// Метод checkPizza об'єкта pizzaPalace використовує this
// Метод order об'єкта pizzaPalace використовує this
// Виклик pizzaPalace.order("Smoked") повертає рядок "Order accepted, preparing «Smoked» pizza"
// Виклик pizzaPalace.order("Four meats") повертає рядок "Order accepted, preparing «Four meats» pizza"
// Виклик pizzaPalace.order("Big Mike") повертає рядок "Sorry, there is no pizza named «Big Mike»"
// Виклик pizzaPalace.order("Viennese") повертає рядок "Sorry, there is no pizza named «Viennese»"

const pizzaPalace = {
  pizzas: ["Supercheese", "Smoked", "Four meats"],
  checkPizza(pizzaName) {
    return this.pizzas.includes(pizzaName);
  },
  order(pizzaName) {
    const isPizzaAvailable = this.checkPizza(pizzaName);

    if (!isPizzaAvailable) {
      return `Sorry, there is no pizza named «${pizzaName}»`;
    }

    return `Order accepted, preparing «${pizzaName}» pizza`;
  },
};
console.log(pizzaPalace.order("Smoked"));// Order accepted, preparing «Four meats» pizza
console.log(pizzaPalace.order("Dick&Balls"));// Sorry, there is no pizza named "Dick&Balls"
console.log(pizzaPalace.order("Supercheese"));// Order accepted, preparing «Four meats» pizza

console.log('---------------------------------------');

function foo() {
  console.log(this);
}
foo(); // window



"use strict";

function foo() {
  console.log(this);
}

foo(); // undefined



console.log('==================================='); 



const user6 = {
  username: "Poly",
  showThis() {
    console.log(this);
  }
};

user6.showThis(); // {username: "Poly", showThis: ƒ}

// У твоєму коді:
// Об'єкт:
// user — це об'єкт, який містить властивості та методи.
// Метод:
// showThis() — це метод об'єкта user. Він є функцією, яка оголошена всередині об'єкта.
// Розбір this:
// Виклик user.showThis(); виконує метод showThis, який виводить this у консоль. У цьому випадку this посилається на сам об'єкт user, тому вивід у консоль буде:
// {username: "Poly", showThis: ƒ}
// Тобто, у методі showThis() this вказує на об'єкт, у якому він був викликаний.
console.log('------------------------------------------------------------------');

"use strict";

function showThis() {
  console.log("this in showThis: ", this);
}

// Викликаємо у глобальному контексті
// showThis(); // "this in showThis: undefined"

console.log('--------------------------------------------');

"use strict";

function showThis() {
  console.log("this in showThis: ", this);
}

const user7 = {
  username: "Poly",
};

user7.showContext = showThis;

// Викликаємо в контексті об'єкта
user7.showContext(); // this in showThis: {username: "Poly", showContext: ƒ}

// Викликаємо в глобальному контексті
showThis(); // "this in showThis: undefined"
console.log('==========================================');

// Яким буде значення this всередині функції update під час її виклику в цьому коді ? 

const book9 = { 
	updateTitle(newTitle) {
		
	}
};

const update = book9.updateTitle;

update("Lord Of The Rings");


// У цьому випадку, значення this всередині функції updateTitle буде undefined, оскільки функція updateTitle викликається в контексті глобального об'єкта (або в строгому режимі — буде undefined).

// Пояснення:

// Коли ви викликаєте book.updateTitle, метод викликається з правильним контекстом, і this буде вказувати на об'єкт book.
// Але коли ви присвоюєте book.updateTitle змінній update, ви фактично забираєте функцію з її контексту (об'єкта book), і тепер вона є просто звичайною функцією.
// Під час виклику update("Lord Of The Rings") в глобальному контексті, this в середині функції буде undefined (якщо не використовуєте строгий режим, то може бути глобальний об'єкт, як window у браузері).

console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
console.log('');
console.log(' ------------method call()--------------');

// Метод call викликає функцію foo так, що значення this у функції буде посилатися на об'єкт thisArg, і також передає їй аргументи arg1, arg2 тощо.

// Розглянемо приклад: давай створимо функцію greet, яка вітає різних користувачів готелю, кожен з яких представлений об'єктом з властивостями username і room. Функція приймає один параметр, str — рядок привітання.

function greet(str) {
  console.log(`${str}, ${this.username}, your room is ${this.room}!`);
}

const mango = {
  username: "Mango",
	room: 27
};

const poly = {
  username: "Poly",
	room: 191
};

// За допомогою методу call ми можемо викликати функцію greet так, щоб значення this вказувало на потрібний об'єкт і використовувало значення його властивостей.

greet.call(mango, "Welcome");// Welcome, Mango, your room is 27!

greet.call(poly, "Aloha");// Aloha, Poly, your room is 191!

console.log('-------------------------------------------------');

// Що робить метод call ?
    
//- Викликає функцію в певному контексті і передає перелік аргументів

// Правильно! Метод call дозволяє викликати функцію в контексті об'єкта, навіть якщо функція не є методом цього об'єкта, а також передає функції певні аргументи.
    
// Як правильно за допомогою методу call викликати функцію showName в контексті об’єкта user ?

//     -showName.call(user)
    
//     Результат

// Саме так! Метод call слід викликати на функції, передаючи аргументом об'єкт, який буде встановлювати контекст (this) для цієї функції. У цьому випадку showName є функцією, і ми встановлюємо контекстом об'єкт user, щоб вона могла отримати доступ до його властивості name.

console.log('-----------------------------------------');

function greet5(name) {
  console.log(`Hello, ${name}! I am ${this.person}`);
}

const person = "John";
const context = {
  person: "Alice"
};

greet5.call(context, "Bob");// Hello, Bob! I am Alice
console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
console.log('');



console.log('-------Метод bind() і втрата контексту---------');
console.log('');

// Методи call і apply викликають функцію «на місці», тобто одразу.

// Метод bind створює і повертає нову функцію, яка має заздалегідь встановлений контекст, і ця нова функція може бути викликана пізніше з будь-якими аргументами.
// Сигнатура методу bind() виглядає так:

// const boundFoo = foo.bind(thisArg, arg1, arg2, ...)

// thisArg — об'єкт, який ми хочемо встановити як контекст (значення this) для функції
// arg1, arg2, ... — необов'язкові аргументи, які будуть передані функції при її виклику

// Давай спробуємо зберегти посилання на метод об'єкта у змінну і викликати його в глобальному контексті.
"use strict";

const customer = {
  username: "Jacob",
	sayHello() {
		console.log(`Hello, ${this.username}!`);
  }
};

customer.sayHello(); // "Hello, Jacob!"

const greet1 = customer.sayHello;

greet1(); // TypeError: Cannot read properties of undefined (reading 'username')

// Зберегли посилання на метод sayHello у змінну greet
// При виклику greet() контекст втрачено, функція викликається в глобальному контексті, тому значення this буде undefined

// При спробі звернутися до властивості this.username під час виклику функції greet(), виникає помилка, оскільки undefined — це навіть не об'єкт

// Це можна виправити, прив'язавши контекст за допомогою методу bind.

"use strict";

const customer1 = {
  username: "Jacob",
	sayHello() {
		console.log(`Hello, ${this.username}!`);
  }
};

customer1.sayHello(); // "Hello, Jacob!"

const greet2 = customer1.sayHello.bind(customer1);

greet2(); // "Hello, Jacob!"

// Коли ми використовуємо bind(), ми створюємо нову функцію greet. Ця нова функція завжди матиме правильний контекст і може використовувати властивість username об'єкта customer.
console.log('====chat GPT====');
console.log('');

// Метод bind створює нову функцію, у якій this буде прив'язаний до переданого об'єкта. При цьому сама оригінальна функція не змінюється.

// Ось приклад використання:


const person1 = {
  name: "Андрій",
  greet: function() {
    console.log(`Привіт, мене звати ${this.name}`);
  }
};

const anotherPerson = {
    name: "Оксана"
};

const boundGreet = person1.greet.bind(anotherPerson);
boundGreet(); // Виведе: "Привіт, мене звати Оксана"


// Тобто bind створює нову функцію, у якій this завжди буде anotherPerson, незалежно від того, як її викличуть. Це корисно, коли потрібно передати метод об'єкта як колбек або працювати з обробниками подій.

console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
console.log('');
// Прочитай приклад коду

function sayHello(greeting) {
  console.log(`${greeting}, ${this.name}!`);
}

const user2 = {
  name: "Alice"
};

const greet3 = sayHello.bind(user2);

greet3("Hello");

// Який результат буде в тебе, якщо викликати код вище?

// "this, Alice!"
// "Hello, Alice!"
// "Hello, this!"
// Результат

// Саме так! Метод bind створює нову функцію greet, прив'язану до об'єкта user як контексту. Після цього, коли функція greet викликається з аргументом "Hello", вона виводить рядок "Hello, Alice!", де this.name вказує на властивість name об'єкта user.
console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
console.log('');
// Метод bind() і колбеки



// Метод bind() є дуже корисним. Особливо важливо його використовувати в колбек-функціях і ситуаціях, де можлива втрата контексту під час виклику функції.



// Розглянемо приклад втрати контексту, коли ми передаємо метод об'єкта як колбек-функцію:



"use strict";

const customer2 = {
  firstName: "Jacob",
  lastName: "Mercer",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
};

function makeMessage(callback) {
  // callback() — це виклик методу getFullName в глобальному контексті
	const username = callback();
  console.log(`Processing an application from ${username}`);
}

makeMessage(customer2.getFullName); // TypeError: Cannot read properties of undefined (reading 'firstName')



// У цьому випадку метод getFullName передається як колбек-функція callback і втрачає контекст об'єкта customer. Це призводить до помилки, оскільки значення this у методі getFullName, коли він викликається як колбек у глобальному контексті, є undefined. Звертаючись до властивостей firstName і lastName, ми отримаємо помилку, оскільки undefined — це не об'єкт.

// Щоб уникнути цієї втрати контексту, можна використати метод bind(). Замість передачі оригінального методу getFullName, ми передаємо його копію, до якої прив'язаний контекст об'єкта customer.



const customer3 = {
  firstName: "Jacob",
  lastName: "Mercer",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

function makeMessage(callback) {
	const username = callback();
	console.log(`Processing an application from ${username}`);
}

makeMessage(customer3.getFullName.bind(customer3)); // "Processing an application from Jacob Mercer"

console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
console.log('');
// Прочитай приклад коду



const library = {
	books: 1923,
	logBookCount() {
		console.log(this.books); // 724
	}
};

const showBooks = library.logBookCount.bind({ books: 724 });

showBooks(); 

// Що буде виведено в консоль під час виконання коду вище?

// 1923
// 724
// undefined
// TypeError: Cannot read properties of undefined (reading 'books')
// Результат

// Саме так! Функція logBookCount викликається через метод bind, який прив'язує контекст до об'єкта { books: 724 }. Після того, як функція showBooks викликається, вона викликає метод logBookCount з контекстом { books: 724 }, і тому виводиться значення властивості books цього контексту, тобто 724.

console.log('...............................................');
console.log('');

"use strict";

const library1 = {
	books: 1923,
	logBookCount() {
		console.log(this.books); // 1923
	}
};

function showBooks1(callback) {
	callback()
}

showBooks1(library1.logBookCount.bind(library));

// Як потрібно змінити останній рядок коду, щоб зберегти контекст під час передачі колбека?

// - showBooks(library.logBookCount.bind(library))



// Код showBooks(library.logBookCount.bind(library)) використовує метод bind для прив'язки контексту library до функції logBookCount перед передачею її в якості колбека функції showBooks. Таким чином, контекст буде збережений і функція logBookCount буде викликана з правильним контекстом і виведе значення властивості books об'єкта library.

console.log('/>>>>>>>>>     СТРІЛОЧНІ ФУНКЦІЇ   >>>>>>>>>>>>/');

const showThis1 = () => {
  console.log("this in showThis: ", this);
};

showThis1(); // this in showThis: window

// Стрілкові функції успадковують this з місця оголошення, а не отримують власний контекст.
// У глобальному коді це означає window (або undefined у strict mode).

console.log('Стрілкові функції успадковують this з місця оголошення, а не отримують власний контекст.// У глобальному коді це означає window (або undefined у strict mode).');
console.log('');
console.log('Навіть якщо присвоїти посилання на стрілочну функцію у властивість об`єкта і викликати її в контексті цього об`єкта, this усе одно буде посилатися на об`єкт, який функція запам`ятала в момент її оголошення.');
console.log('');


// Навіть якщо присвоїти посилання на стрілочну функцію у властивість об'єкта і викликати її в контексті цього об'єкта, this усе одно буде посилатися на об'єкт, який функція запам'ятала в момент її оголошення.

const showThis2 = () => {
  console.log("this in showThis: ", this);
};

const user3 = {
  username: "Mango",
};

user3.showContext = showThis2;

user3.showContext(); // this in showThis: window
console.log('');
console.log('Стрілочні функції також ігнорують наявність суворого режиму.кщо стрілка була оголошена в глобальному контексті, то this у ній буде містити посилання на window, незалежно від того, чи виконується скрипт у суворому режимі.');


// Стрілочні функції також ігнорують наявність суворого режиму.
// Якщо стрілка була оголошена в глобальному контексті, то this у ній буде містити посилання на window, незалежно від того, чи виконується скрипт у суворому режимі.
console.log('');

"use strict";

const showThis3 = () => {
  console.log("this in showThis: ", this);
};

showThis3(); // this in showThis: window

console.log('..................................');
console.log('Розгляньмо приклад, який добре ілюструє, як працює контекст для стрілочних функцій.');

// Розгляньмо приклад, який добре ілюструє, як працює контекст для стрілочних функцій.
console.log('');


const hotel = {
  username: "Resort hotel",
  showThis4() {
    const foo = () => {
      console.log("this in foo: ", this);
    };

    foo();
    console.log("this in showThis: ", this);
  },
};

hotel.showThis4();
// this in foo: {username: 'Resort hotel', showThis: ƒ}
// this in showThis: {username: 'Resort hotel',showThis: ƒ}

//Під час виклику методу hotel.showThis() стрілочна функція foo() викликається в глобальному контексті без об'єкта, але значення this усередині неї посилається на контекст методу showThis, тобто об'єкт hotel. Це тому, що вона була оголошена всередині методу showThis, і в момент її оголошення this запам'ятовує посилання на батьківський контекст. Інакше кажучи, стрілки запам'ятовують контекст під час оголошення з батьківської області видимості.

//Можливо, це не часто використовується на практиці. Але такі кейси досить типові для співбесіди.

//На відміну від звичайних функцій, змінити значення this усередині стрілки після її оголошення неможливо. Це означає, що методи call, apply і bind не впливають на значення this у стрілках.
console.log('');

console.log('На відміну від звичайних функцій, змінити значення this усередині стрілки після її оголошення неможливо. Це означає, що методи call, apply і bind не впливають на значення this у стрілках.');

const showThis5 = () => {
  console.log("this in showThis: ", this);
};

showThis5.call({ username: "Mango" }); // this in showThis: window
showThis5.apply({ username: "Mango" }); // this in showThis: window

const boundShowThis5 = showThis5.bind({ username: "Mango" }); 
boundShowThis5(); // this in showThis: window

// Обмежуючи стрілочні функції постійним контекстом, JavaScript-рушії можуть краще їх оптимізувати, на відміну від звичайних функцій, значення this яких може бути змінено.
console.log('Обмежуючи стрілочні функції постійним контекстом, JavaScript-рушії можуть краще їх оптимізувати, на відміну від звичайних функцій, значення this яких може бути змінено.');
console.log('.................................................');

//Що треба запам’ятати про this у стрілочних функціях?

//Що треба запам’ятати про this у стрілочних функціях?

//1.Контекст **this** усередині стрілочної функції визначається місцем її оголошення, а не виклику.
//2.Стрілочні функції ігнорують наявність суворого режиму. Тому в глобальному контексті у стрілці завжди this посилається на об'єкт window.
//3.Неможливо змінити значення this усередині стрілочних функцій після її оголошення. Методи call, apply і bind не впливають на значення this у стрілках.

//Як можна змінити значення this у стрілочній функції?

// + this завжди має одне й те саме значення в стрілочній функції
// - Значення this можна змінити, використовуючи методи call, apply або bind
// - Змінити контекст можна лише внутрішньо у функції
// - Значення this можна змінити тільки, якщо видалити this із функції

// Результат

// Абсолютно точно! Неможливо змінити значення this усередині стрілочних функцій після її оголошення, this завжди буде посилатись на батьківський контекст.


console.log(' this завжди має одне й те саме значення в стрілочній функції. Абсолютно точно! Неможливо змінити значення this усередині стрілочних функцій після її оголошення, this завжди буде посилатись на батьківський контекст.');
console.log('...............................................');

// Прочитай приклад коду

console.log('const a1 = () => {console.log(this);};function b1() {a1();} b1.call({ user: "Mango" });');


const a1 = () => {
	console.log(this);
};

function b1() {
	a1();
}

b1.call({ user: "Mango" });

// Що буде виведено на консоль в результаті виконання коду вище?

// window

// І це правильна відповідь! Давай звіримо хід міркування: у прикладі оголошена стрілочна функція a, яка логує свій this. Функція a була створена в глобальному контексті, де this вказує на window. Хоча ми намагаємось змінити контекст функції b за допомогою call, стрілочна функція a ігнорує цей контекст. Тому при виклику a виведе window.

console.log('<<<<<<<<<<<<<<<<<<||>>>>>>>>>>>>>>>>>>');

const user8 = {
  username: "Victor",
  showName() {
		// ❌ Віктор біжить швидко, тому що Віктор намагається зловити поїзд
    console.log(user8.username); // Victor❌
  },
};

user8.showName();

console.log('❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌');


const user9 = {
  username: "Victor",
  showName() {
		// ✅ Віктор біжить швидко, тому що він (this) намагається зловити поїзд.
    console.log(this.username); // Victor✅
  },
};

user9.showName();

console.log('✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅');

console.log('');
console.log('****************************************');
console.log('-----------[[Prototype]]-----------');
//Прототипи
// Прототип об`єкта

// Звідки беруться вбудовані методи масивів push, map, reduce та інші?
// Чому у функції є методи call і bind?
// Досі ми просто приймали, що вони є і ними можна користуватися. Прийшов час знайти відповіді на ці питання.
// Усе це можливо завдяки механізму прототипного успадкування, який дає змогу організувати об'єкти в ланцюжки таким чином, щоб здійснювався автоматичний пошук властивості в іншому об'єкті, якщо її не знайдено в поточному.

// Сполучною ланкою виступає спеціальна службова властивість [[Prototype]], яку ми не змінюємо явно, вона використовується для автоматичного зв'язку об'єктів.

// Метод Object.create(obj) створює і повертає новий об'єкт, зв'язуючи його з об'єктом obj. Розгляньмо приклад:

const animal = {
  legs: 4,
};

const dog = Object.create(animal);
dog.name = "Mango";

console.log(dog); // { name: "Mango", [[Prototype]]: animal }

// Об`єкт, на який вказує посилання у властивості [[Prototype]], називається прототипом. У нашому прикладі об'єкт animal — це прототип для об'єкта dog.

console.log(dog.name); // "Mango"
console.log(dog.legs); // 4
// Звернення dog.name працює очевидним чином: повертає властивість name об'єкта dog. Звертаючись до dog.legs, інтерпретатор шукає властивість legs в об'єкті dog, не знаходить і продовжує пошук в об'єкті за посиланням з [[Prototype]], тобто в цьому випадку в об'єкті animal — його прототипі.

// Отже, прототип — це резервне сховище властивостей і методів об'єкта, яке автоматично використовується під час їх пошуку.

// Що робить метод Object.create(obj)?

// - Створює новий об'єкт і встановлює йому прототипом obj

// І це правильна відповідь! Метод Object.create(obj) створює новий об'єкт і встановлює йому прототипом obj. Такий новий об'єкт матиме прототип obj і буде успадковувати його властивості.

// Як називається властивість, яка зберігає посилання на прототип?

// [[Prototype]]

// Саме так! Властивість, яка зберігає посилання на прототип, називається [[Prototype]].
console.log('');
console.log('autocheck');
//Зміни код таким чином, щоб об'єкт parent став прототипом для об'єкта у змінній сhild.

// Оголошена змінна parent
// Значення змінної parent - це об'єкт
// Оголошена змінна child
// Значення змінної child - це об'єкт
// Використовується метод Object.create()
// Виклик parent.hasOwnProperty("surname") повертає true
// Виклик parent.hasOwnProperty("heritage") повертає true
// Виклик child.hasOwnProperty("name") повертає true
// Звернення до child.name повертає "Jason"
// Виклик child.hasOwnProperty("age") повертає true
// Звернення до child.age повертає 27
// Виклик child.hasOwnProperty("surname") повертає false
// Звернення до child.surname повертає "Moore"
// Виклик child.hasOwnProperty("heritage") повертає false
// Звернення до child.heritage повертає "Irish"
// Виклик parent.isPrototypeOf(child) повертає true

const parent = {
  name: "Stacey",
  surname: "Moore",
  age: 54,
  heritage: "Irish",
};
const child = Object.create(parent); // тут був просто об'єкт const child = {}. Встановив новий об'єкт і встановив йому прототипом (parent).

child.name = "Jason";
child.age = 27;

console.log(parent.hasOwnProperty("surname"));
console.log(parent.hasOwnProperty("heritage"));
console.log(child.hasOwnProperty("name"));
console.log(child.name);
console.log(child.surname);
console.log(child.age);
console.log(child.hasOwnProperty("surname"));
console.log(child.hasOwnProperty("heritage"));
console.log(parent.isPrototypeOf(child));

console.log('');
console.log('********************************');
console.log('-----------Перевірка прототипу---------');

//Перевірка прототипу

// console.log('<<<<----Перевірка прототипу---->>>>');
// Якщо в коді потрібно перевірити, чи є об'єкт прототипом іншого об'єкта, використовується метод isPrototypeOf().

// objA.isPrototypeOf(objB)

// Метод перевіряє, чи є об'єкт objA прототипом для об’єкта objB
// Якщо так, повертає true, в іншому разі повертає false

// Розгляньмо приклад використання методу isPrototypeOf() для перевірки належності прототипу.

const customer4 = {
	username: "Jacob"
};

const animal4 = { 
	legs: 4 
};

const dog4 = Object.create(animal4);
dog4.name = "Mango";

console.log(dog4); // { name: "Mango", [[Prototype]]: animal }

console.log(animal4.isPrototypeOf(dog4)); // true
console.log(dog4.isPrototypeOf(animal)); // false
console.log(customer4.isPrototypeOf(dog4)); // false

// у першому лозі виводиться об'єкт dog із властивістями name і [[Prototype]]. [[Prototype]] вказує на animal як прототип
// у другому — повертається true, оскільки animal є прототипом для dog
// у третьому — повертається false, оскільки прототип не успадковується у зворотному напрямку (від dog до animal)
// у четвертому лозі повертається false, оскільки customer не є прототипом для dog
console.log('');
console.log('********************************');
console.log('<<<<----Власні і невласні властивості---->>>>');
console.log('');
// Використаємо вже знайомий нам приклад створення об'єкта dog з прототипом animal.

const animal5 = {
  legs: 4,
};
const dog5 = Object.create(animal5);
dog.name = "Mango";

console.log(dog5); // {name: "Mango", [[Prototype]]: animal}
console.log(dog5.name); // "Mango"
console.log(dog5.legs); // 4

// Властивість name належить об'єкту dog, тому називається власною властивістю об'єкта dog.
// Властивість legs не належить об'єкту dog. Це властивість його прототипу animal, тому вона називається невласною властивістю об'єкта dog.

// Для того щоб перевірити, чи є в об'єкті власна властивість, використовується метод obj.hasOwnProperty(key). Цей метод перевіряє наявність власної властивості з ім'ям key і повертає true, якщо є, і false в іншому випадку.

console.log(dog.hasOwnProperty("name")); // true
console.log(dog.hasOwnProperty("legs")); // false

console.log('');
console.log('********************************');
console.log('<<<---Перебір власних властивостей--->>>');
console.log('----------------------------------------');
console.log('<-Object.keys(obj) і Object.values(obj)->');
//Перебір власних властивостей

// Оператор in, який використовується в циклі for...in, не розрізняє власні властивості об'єкта і його прототипу. Ця особливість заважає, оскільки зазвичай потрібно перебрати тільки власні властивості.

const animal6 = { legs: 4 };
const dog6 = Object.create(animal6);
dog6.name = "Mango";

for (const key in dog6) {
  console.log(key); // "name" "legs"
}

// Для вибору саме власних властивостей під час перебору циклом for...in необхідно на кожній ітерації додати перевірку на власну властивість методом obj.hasOwnProperty(key). Цей метод повертає true, якщо властивість з іменем key належить об'єкту obj, а не його прототипу, в іншому разі — false. Розгляньмо приклад:

const animal7 = { legs: 4 };
const dog7 = Object.create(animal7);
dog7.name = "Mango";

for (const key in dog7) {
	if(dog7.hasOwnProperty(key)) {
		console.log(key); // "name"
	}
}

// Якщо це власна властивість — виконуємо тіло if
// Якщо це невласна властивість — нічого не робимо

// Методи Object.keys(obj) і Object.values(obj) повертають масив тільки власних ключів або значень тільки власних властивостей об'єкта obj, без необхідності додаткових перевірок. Через це на практиці використовують саме їх із циклом for...of, замість for...in і hasOwnProperty.

const animal8 = { legs: 4 };
const dog8 = Object.create(animal8);
dog8.name = "Mango";

console.log(Object.keys(dog8)); // ["name"]
console.log(Object.values(dog8)); // ["Mango"]

for(const key of Object.keys(dog8)) {
	console.log(key); // "name"
}
console.log('');
console.log('********************************');
console.log('<<<---Ланцюжки прототипів--->>>');
//Ланцюжки прототипів
// Об'єкт, який виступає прототипом для іншого об'єкта, також може мати свій прототип. Отже, існують ланцюжки прототипів.

//Давайте реалізуємо це в коді. Ланцюжок прототипів будується з кінця, тобто справа наліво.

const objC = { c: "objC prop" };

const objB = Object.create(objC);
objB.b = "objB prop";

const objA = Object.create(objB);
objA.a = "objA prop";

console.log(objA); // { a: "objA prop", [[Prototype]]: objB }
console.log(objB); // { b: "objB prop", [[Prototype]]: objC }
console.log(objC); // { c: "objC prop", [[Prototype]]: Object }



// Створюємо об'єкт objC.
// Потім створюємо об'єкт objB і встановлюємо objC як його прототип.
// Після цього створюємо об'єкт objA і встановлюємо objB як його прототип.


// Максимально наочно буде:



// Вивести об'єкт objA у консоль розробника.
// Розгорнути властивості.
// Подивитися на структуру.


// Оскільки об’єкти objA, objB і objC пов'язані в ланцюжок прототипів, об'єкт objA може отримати доступ до властивостей objB і objC, а об'єкт objB — до властивостей objC.



console.log(objA.hasOwnProperty("a")); // true
console.log(objA.a); // "objA prop"

console.log(objA.hasOwnProperty("b")); // false
console.log(objA.b); // "objB prop"

console.log(objA.hasOwnProperty("c")); // false
console.log(objA.c); // "objC prop"

console.log(objA.hasOwnProperty("x")); // false
console.log(objA.x); // undefined



// Пошук властивостей відбувається до першого збігу. Інтерпретатор шукає властивість за ім'ям в об'єкті:

// Якщо інтерпретатор не знаходить власну властивість, то звертається до властивості [[Prototype]], тобто переходить за посиланням до об'єкта-прототипу, а потім — до прототипу прототипу за ланцюжком.
// Якщо інтерпретатор доходить до кінця ланцюжка і не знаходить властивості з таким ім'ям, то повертається undefined.

console.log('');
console.log('********************************');
console.log('AUTOCHECK');

//Зміни код, побудувавши ланцюжок прототипів таким чином, щоб об'єкт ancestor був прототипом для parent, а той, своєю чергою, був прототипом для child.

// Зміни код, побудувавши ланцюжок прототипів таким чином, щоб об'єкт ancestor був прототипом для parent, а той, своєю чергою, був прототипом для child.

// Оголошена змінна ancestor
// Значення змінної ancestor - це об'єкт.
// Оголошена змінна parent
// Значення змінної parent - це об'єкт.
// Оголошена змінна child
// Значення змінної child - це об'єкт.

// Використовується метод Object.create()

const ancestor1 = {
  name: "Paul",
  age: 83,
  surname: "Dawson",
  heritage: "Irish",
};

const parent1 = Object.create(ancestor1);
parent1.name = "Stacey";
parent1.surname = "Moore";
parent1.age = 54;

const child1 = Object.create(parent1);
child1.name = "Jason";
child1.age = 27;

console.log(ancestor1.isPrototypeOf("parent")); // Виклик ancestor.isPrototypeOf("parent") повертає false
console.log(parent1.isPrototypeOf("child"));// Виклик parent.isPrototypeOf("child") повертає false
console.log(ancestor1.hasOwnProperty("surname"));// Виклик ancestor.hasOwnProperty("surname") повертає true
console.log(ancestor1.surname);// Звернення до ancestor.surname повертає "Dawson"
console.log(parent1.hasOwnProperty("surname"));// Виклик parent.hasOwnProperty("surname") повертає true
console.log(parent1.name);
console.log(parent1.surname);// Звернення до parent.surname повертає "Moore"
console.log(child1.hasOwnProperty("surname"));// Виклик child.hasOwnProperty("surname") повертає false
console.log(child1.name);
console.log(child1.surname);// Звернення до child.surname повертає "Moore"
console.log(ancestor1.hasOwnProperty("heritage"));// Виклик ancestor.hasOwnProperty("heritage") повертає true
console.log(ancestor1.heritage);// Звернення до ancestor.heritage повертає "Irish"
console.log(parent1.hasOwnProperty("heritage"));// Виклик parent.hasOwnProperty("heritage") повертає false
console.log(parent1.heritage);// Звернення до parent.heritage повертає "Irish"
console.log(child1.hasOwnProperty("heritage"));// Виклик child.hasOwnProperty("heritage") повертає false
console.log(child1.heritage);// Звернення до child.heritage повертає "Irish"
console.log();

console.log('');
console.log('********************************');

console.log('<<--Кінець ланцюжка прототипів-->>');

// Давай створимо ланцюжок прототипів із двох об'єктів.

const objB1 = {
	b: "objB1 prop"
};
const objA1 = Object.create(objB1);
objA1.a = "objA1 prop";

console.log(objA1);

// Отже, objB — це прототип для об'єкта objA. Розгорнувши вміст ланцюжка прототипів у консолі розробника, ми побачимо таку картину. (див )

//Наприкінці ланцюжка прототипів завжди знаходиться посилання на базовий клас, від якого походить тип даних у ланцюжку. У нашому випадку objB — це об'єкт, тому в кінці ланцюжка буде посилання на клас Object.

console.log('');
console.log('********************************');

console.log('<<----------КЛАСИ--------->>');

// Класи
// Оголошення класу



// Синтаксис літерала об'єкта дозволяє створити один об'єкт. Проте часто є потреба створити багато однотипних об'єктів з однаковим набором властивостей, але різними значеннями й методами для взаємодії з ними. Все це потрібно робити динамічно, під час виконання програми. З цією метою використовують класи.



// Оголошення класу має такий синтаксис:



// ключове слово class
// ім’я класу (у прикладі: User)
// тіло класу у фігурних дужках

// class User {
//   // Тіло класу
// }



// Класи прийнято називати з великої літери, а в назві відображати тип об'єкта (іменника), що створюється.


// А як створити з класу екземпляр?



// Після того як клас було оголошено, можна створити його екземпляр за допомогою спеціального оператора new, поставивши його перед викликом класу. Результатом виклику new User() буде екземпляр класу User. Він буде містити дані і мати поведінку, що описані у класі.



class User {
  // Тіло класу
}

const mango9 = new User();
console.log(mango9); // {}

const poly9 = new User();
console.log(poly9); // {}


// Який оператор використовується для створення нового екземпляра класу?


// new

// // Точнісінько так! Для створення нового екземпляра класу використовується оператор new.

// // Як створити екземпляр класу Car?


// new Car()

// правильний синтаксис створення екземпляра класу Car — це new Car().


class User11 {
  constructor() {
		console.log("constructor call")
  }
}

const mango11 = new User11(); // "constructor call"
console.log(mango11); // {}


console.log('');
console.log('********************************');

console.log('<<----------Конструктор класу--------->>');

// Конструктор класу



// Спосіб створення класу залежить від твоєї задачі. У нашому прикладі клас User представляє користувача, тому ми додамо до нього поля для імені та пошти.

// Для ініціалізації екземпляра класу використовується метод constructor.
// Якщо його не визначити в явному вигляді, то буде створений конструктор за замовчуванням — порожня функція, яка не змінює екземпляр класу.


class User12 {
  // Синтаксис оголошення методу класу
  constructor() {
		// ...
  }
}



// Виклик класу з оператором new призводить до створення нового об'єкта й автоматичного виклику методу constructor.


class User13 {
  constructor() {
		console.log("constructor call")
  }
}

const mango13 = new User13(); // "constructor call"
console.log(mango13); // {}



// Аргументи, які передаються при виклику new User(), стають значеннями параметрів для методу constructor.

class User14 {
  constructor(name, email) {
		console.log(name, email);// "Mango mango@mail.com"
  }
}

const mango14 = new User14("Mango", "mango@mail.com"); // "Mango mango@mail.com"
console.log(mango14); // {}



// Зверни увагу, що метод constructor викликається в контексті створюваного екземпляра.

class User15 {
  constructor(name, email) {
    // Ініціалізація властивостей екземпляра
    this.name = name;
    this.email = email;
  }
}

const mango15 = new User15("Mango", "mango@mail.com");
console.log(mango15); // { name: 'Mango', email: 'mango@mail.com' }

const poly15 = new User15("Poly", "poly@mail.com");
console.log(poly15); // { name: 'Poly', email: 'poly@mail.com' }

// Таким чином, this усередині конструктора посилається на новостворений об'єкт.
// Це дозволяє надавати кожному об'єкту властивості з однаковими іменами, але різними значеннями.
// Властивості name та email називаються публічними властивостями, оскільки вони є власними властивостями об'єкта-екземпляра.

// Який метод класу викликається першим при створенні екземпляра?

//     constructor
  
// При створенні екземпляра першим викликається метод constructor.

// Що таке this усередині конструктора?


// Посилання на новостворений об'єкт

// І це абсолютно правильна відповідь! this усередині конструктора посилається на новостворений об'єкт.

// Що робить метод constructor у класі?


// Ініціалізує власні властивості екземпляра класу

// Дуже добре! Тобі вдалося запам’ятати найголовніше з цього розділу. Метод constructor використовується для ініціалізації власних властивостей екземпляра класу.

console.log('');
console.log('********************************');
console.log('AUTOCHECK');
//Додай класу Car метод constructor, який приймає три параметри:

// brand - марка автомобіля
// model - модель автомобіля
// price - ціна автомобіля
// Клас Car повинен створювати об'єкт з одноіменними властивостями brand, model і price, які отримують свої значення з аргументів, переданих при створенні нового екземпляра за допомогою оператора new.

// Оголошений клас Car
// Клас Car має метод constructor
// В результаті виклику new Car("Audi", "Q3", 36000) утвориться об'єкт {brand: "Audi", model: "Q3", price: 36000}
// В результаті виклику new Car("BMW", "X5", 58900) утвориться об'єкт {brand: "BMW", model: "X5", price: 58900}
// В результаті виклику new Car("Nissan","Murano", 31700) утвориться об'єкт {brand: "Nissan", model: "Murano", price: 31700}

class Car {
  constructor(brand, model, price){
    this.brand = brand;
    this.model = model;
    this.price = price;
    
  }
}

const newCar = new Car();

console.log(new Car("Audi", "Q3", 36000));
console.log(new Car("BMW", "X5", 58900));
console.log(new Car("Nissan","Murano", 31700));
console.log(new Car("Hyundai", "i30", 1000084));


console.log('');
console.log('********************************');

console.log('<<----------Об`єкт параметрів--------->>');
// Об'єкт параметрів



// Клас може приймати велику кількість вхідних даних для властивостей майбутнього об'єкта.

// До них також можна застосувати патерн «Об'єкт параметрів», передаючи один об'єкт з логічно іменованими властивостями, замість непов'язаного набору аргументів.

class User16 {
  constructor(params) {
    this.name = params.name;
    this.email = params.email;
  }
}

const mango16 = new User16({
  name: "Mango",
  email: "mango@mail.com",
});

console.log(mango16); 
// { name: "Mango", email: "mango@mail.com" }




console.log('');
console.log('********************************');
console.log('AUTOCHECK');

class Car5 {
  constructor(params) {
    this.brand = params.brand;
    this.model = params.model;
    this.price = params.price;
  }
}

console.log(new Car5({ brand: "BMWвуха", model: "X5", price: 67900 }));

console.log('in other way');


const myCar = new Car5({

  brand: "jojoba",
  model: "hu",
  price: 5,
});

console.log(myCar);

console.log('==============================================');
console.log('<<<----Методи класу---->>>');
//Методи класу

// Для роботи з властивостями майбутнього екземпляра використовуються методи класу.
// Методи класу — це функції, які будуть доступні екземпляру в його прототипі. Вони оголошуються в довільному порядку після конструктора. На відміну від синтаксису методів об'єкта (вони розділяються комою), методи класу не розділені жодними спеціальними символами.

// Розгляньмо приклад використання методів у класі User.
class User17 {
  constructor(params) {
    this.name = params.name;
    this.email = params.email;
  }

  // Метод getEmail
  getEmail() {
		// ...
  }

  // Метод changeEmail
  changeEmail(newEmail) {
		// ...
  }
}

// Для доступу до властивостей у методах використовується ключове слово this, оскільки методи будуть викликані в контексті об'єкта-екземпляра.
class User18 {
  constructor(params) {
    this.name = params.name;
    this.email = params.email;
  }

  getEmail() {
    return this.email;
  }

  changeEmail(newEmail) {
    this.email = newEmail;
  }
}

// Після створення екземпляра можна використовувати оголошені методи класу, які будуть звертатися до властивостей об'єкта, що їх викликав.

const mango17 = new User18({ 
	name: "Mango", 
	email: "mango@mail.com" 
});

console.log(mango17.getEmail()); // "mango@mail.com"

mango17.changeEmail("new@mail.com");

console.log(mango17.getEmail()); // "new@mail.com"

// Як правильно звернутися до властивості username класу Customer у його методі?

- this.username

// Правильна відповідь! Правильний спосіб звернутися до властивості username класу Customer у його методі — це this.username. У методі класу this використовується для посилання на поточний об'єкт, тобто на екземпляр класу Customer.
console.log('');
console.log('********************************');
console.log('AUTOCHECK');

//Додай класу Car два методи.

// getPrice() - повертає значення властивості price з об'єкта, який буде його викликати.
// changePrice(newPrice) - оновлює значення властивості price в об'єкта, який буде його викликати на значення параметра newPrice.
// В класі Car оголошений метод getPrice
// Метод getPrice повертає значення властивості price екземпляра класу, який його викликає
// В класі Car оголошений метод changePrice
// Метод changePrice змінює значення властивості price екземпляра класу, який його викликає

class Car6 {
  constructor(params) {
    this.brand = params.brand;
    this.model = params.model;
    this.price = params.price;
  }
  getPrice(){
    return this.price;
  }

  changePrice(newPrice){
    this.price = newPrice;
  }
}
const careta = new Car6({ brand: "Toyota", model: "Yaris", price: 20000 });
console.log(careta.getPrice());  // 20000

careta.changePrice(13000);
console.log(careta.getPrice());  //13000


console.log('******************************************');
class Car7 {
  #brand;
  #model;
  #price;

  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.#model = model;
    this.#price = price;
  }

  get brand() {
    return this.#brand;
  }

  set brand(newBrand) {
    this.#brand = newBrand;
  }

  get model() {
    return this.#model;
  }

  set model(newModel) {
    this.#model = newModel;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    this.#price = newPrice;
  }
}

const car8 = new Car7({ brand: "Toyota", model: "Camry", price: 30000 });

console.log(car8.brand);
console.log(car8.model);
console.log(car8.price); // 30000


car8.price = 28000;
car8.brand = "Hyundai"
car8.model = "i30"


console.log(car8.brand);
console.log(car8.model);
console.log(car8.price);


class MyClass {
	static b = 5;

	constructor(value) {
		this.a = value;
	}
}

const instance1 = new MyClass(10);
console.log(instance1.b);
console.log(MyClass.b);

