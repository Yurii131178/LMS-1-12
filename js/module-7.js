const btn = document.querySelector('#magic-button'); // отримати елемент через id "#"

console.log(btn);

const unListItem = document.querySelector(".list-item") // отримати елемент за класом "."

console.log(unListItem);

const nav = document.querySelector("ul"); // отримати елемент через тег

const items = document.querySelectorAll(".list-item"); // отримати псевдомасив всіх елементів. це масив посилань. можемо хвба що перебрати, не більше

const navEls = document.querySelectorAll("ul");
console.log(navEls); // коли елемент один а метод має повертати декілька, отримаємо список(масив) з одного елемента

console.log(items);
console.log(Array.isArray(items)); // так перевіряємо, чи справді це масив: Array.isArray // false

console.log(nav);


// властивості навігаціїї по DOM-вузлах


console.log(nav.firstElementChild); // отримаємо перший елемент-дитину бп=атьківського тегу "ul"з класом

console.log(nav.firstChild); // текстова нода



console.log(nav); // кожен стрибок на новий рядок(enter) це поява текстової ноди. в консолі розкирваємо властивість ChildNodes: 7 (4 текстові ноди і 3 li-шки)

console.log(nav.lastElementChild); // отримаємо останній елемент-дитину бп=атьківського тегу "ul"з класом


console.log(nav.children); // ця властивість дасть нам список усіх вкладених дочірніх елементів (псевдомасив лішок)

const ooopsEl = nav.children[1]; // через квадратні дужки дістаємо потрібний нам елемент зі списку. через порядковий номер (index )

console.log(ooopsEl);

console.log(nav.childNodes); // отимаємо список включно з текстовими нодами

console.log(ooopsEl.parentNode); // так можна достукатись до батька.

// тобто ту показана прогулянка від батьковського додочірнього елемента і навпаки. синтаксис [] достукується до портібного нам елемента

// ВЛАСТИВОСТІ ЕЛЕМЕНТА //

const imgEl = document.querySelector(".hero_image");
console.log(imgEl); // маємо доступ до зображення

// можемо тепер ми можемо отримувати дані, що зберігаються в його атрибутах: src, alt, width або перезаписувати їх.

imgEl.src = "https://fastly.picsum.photos/id/29/4000/2670.jpg?hmac=rCbRAl24FzrSzwlR5tL-Aqzyu5tX_PA95VJtnUXegGU"; // тут ми присвоїли іміджу і його властивості src нове значення

imgEl.alt = "mountains"; // перезаписали ім'я

console.log(imgEl.src); // маємо доступ до адреси зображення. у звичайний спосіб звернулись до властивості об'єкта

// тепер попрацюємо із зображенням //

const titleEl = document.querySelector(".hero_title");

console.log(titleEl.textContent); // в консолі буде текст нашого елемента: What a wonderful world.

titleEl.textContent = "Hiking camp"; // перезаписуємо текст в елементі h1

console.log(titleEl.textContent);

//=================================//

//  <script src="./js/module-7.js"></script> пишемо або в кінці, щоб завантажився весь HTML, або в head з атрибутом defer =  <script src="./js/module-7.js" defer></script>

//========================//

//=====АТРИБУТИ=====
/* get (ім'я атрибута)
/* set (ім'я атрибута)
/* remove (ім'я атрибута)
/* has (ім'я атрибута)
*/

// окрім взаємодії з атрибутами елементів напряму, як до звичайної властивості об'єкта (imgEl.src, imgEl.alt), через крапку, можна застосувати відповідні методи

// для отримання даних:

console.log(imgEl.getAttribute("src")); // в () як аргумент, передаємо назву атрибуту, який хочемо отримати рядком "src" 
console.log(imgEl.src); // або взаємозамінний спосвб через крапку, звертаємось до властивості нашого елемента

// для запису щось нового в наш атрибут або  присвоєння нового атрибута з новими значеннями:

imgEl.setAttribute("width", 200); // в set.Attribute передаємо 2 аргументи: назва атрибуту, що хочемо змінити, і значення, яке хочемщ туди присвоїти
imgEl.width = 400; // ао аналогії з доступом до властивостей через крапку

// !!!тобто, обираємо зручний для себе спосіб щодо отримання та заміни властивостей атрибутів елемента!!! //

// для видалення - метод "remove" //

// imgEl.removeAttribute("width"); // передаємо назву аторибуту, якийц хочемо видалити (штрина - "width"). отримаємо оригінальний розмір картинки без обмежень по ширині(велике зображення)

// метод "has" перевіряє, чи є атрибут, який передається агрументом в дужки цього метода, у цього елемента

console.log(imgEl.hasAttribute("src")); // повертає "true", якщо такий атрибут є
console.log(imgEl.hasAttribute("href")); // повертає "false", якщо немає

//================== data-атрибути ===============//

// слугують для додавання унікальних атрибутів для елемента, вирізняючи його з решти, тобто для службового використання. закладаємо тут дані, і потім використаю, щоб маніпулювати ними. Синтаксис: data-action(якась довільна назва)="add"((знак присвоєння =) і значення "add")




// звернемось до батьківського елемента "actions" і отримаємо "button"

const actions = document.querySelectorAll(".actions button")
console.log(actions[1].dataset.action); // спробуємо звернутись до елементу під індексом 1 і здобути його data-атрибути. у нього є вдастивість dataset, відкидаємо "data-"  і пишемо назву "action". ми отриамаємо значення "remove", яке зберігається під цим атрибутом

// так само можемо перезаписати значення

actions[0].dataset.action = "lalala"; // для перезапису dataset. назва влістивості "action" і присвоюємо нове значення "lalala"

console.log(actions[1].dataset); // так перевіряємо, які у елемента є дата атрибути (action: "remove")

//===========================================//

//== інтерфейс classlist== взаємодія з класами==//
// add
// remove
// toggle
// replace
// contains
////



const itemElem = document.querySelector(".site-nav__item");

console.log(itemElem);

// як додати до нашого елемента "class"?

itemElem.classList.add("blue"); //  додаємо властиівості до елемента "classList" і "add", як аргумент додаємо сюди назву "class", який хочемо додати до елемента. УВАГА!!! ми у же у властивості класс, тому ми не додаємо крапку при
// itemElem.classList.remove("blue"); // видаляємо


const link = document.querySelector(".site-nav__link");
console.log(link.classList); 
// ["link", "is-active", length: 2, value: "link is-active"]

link.classList.add("blue");
console.log(link.classList);  // додаємо

link.classList.remove("is-active"); // забираємо
console.log(link.classList); 

console.log(link.classList.contains("blue")); // перевірка наявності класу // true
console.log(link.classList.contains("link")); // перевірка наявності класу // true
console.log(link.classList.contains("is-active")); // перевірка наявності класу // false

// toggle//

link.classList.toggle("blue"); // перемикач // якщо клас є - видаляє
console.log(link.classList); 
link.classList.toggle("trololo"); // перемикач // якщо немає - додає  
console.log(link.classList);
    
// replace//

link.classList.replace("trololo", "tratata"); // приймає два аргументи: той що треба змінити і той, який треба підставити
console.log(link.classList); // DOMTokenList(2) ['link', 'tratata', value: 'link tratata']


//==============СТВОРЕННЯ ЕЛЕМЕНТІВ===================//

const title = document.createElement("h1");

title.classList.add("page-title");
title.textContent = "HAPPY NEW YEAR!";
console.log(title);

// поки що наш елемент живе тільки тут (JS), ЯК ЙОГО ПЕРЕНЕСТИ НА СТОРІНКУ???

// МЕТОДИ

document.body.append(title); // помістив наш елемент в body після всіх дочірніх елементів 
document.body.prepend(title); // помістив наш елемент в body перед всіма дочірніми елементами

// створимо зображення//

const imgElem = document.createElement("img");

imgElem.src = "https://fastly.picsum.photos/id/29/4000/2670.jpg?hmac=rCbRAl24FzrSzwlR5tL-Aqzyu5tX_PA95VJtnUXegGU";

imgElem.alt = "latoala";
imgElem.width = 350;


console.log(imgElem);

const actionsEl = document.querySelector(".actions");

actionsEl.append(imgElem, title); // МЕТОД append/prepend МОЖЕ ПЕРЕДАВАТИ КІЛЬКА СТВОРЕНИХ ЕЛЕМЕНТІВ ЧЕРЕЗ КОМУ. ВАЖЛИВО!!! тег title було доано в тег div але видалено в body!!! ЕЛЕМЕНТ МОЖНА ДОДАТИ ЛИШЕ В ОДНОМУ ЯКОМУСЬ МІСЦІ НА СТОРІНЦІ!!!

//===========створимо і додамо новий пункт меню================//


const navElem = document.querySelector(".site-nav");// переносимо з консолі в список

const navEl = document.createElement("li"); // створюємо тег <li>

navEl.classList.add("site-nav__item"); // додаємо клас

console.log(navEl); // виводимо в консоль

const navLinkEl = document.createElement("a"); // створюємо тег <a>

navLinkEl.classList.add("site-nav__link"); // додаємо клас

navLinkEl.href = "/profile"; // додаємо атрибут <href>

navLinkEl.textContent = "Profile"; // додаємо зміст (наш текст)

console.log(navLinkEl);   

// маємо готову лішку і посилання. Тепер треба <a> запхати в <li> //

navEl.append(navLinkEl); // звертаємось до тегу li і вкладаємо(append) <a> в <li> .Перетягуємо на самий верх код для переносу в список


// console.log(navEl);// в консолі бачимb дішку з вкладеним тегом а

navElem.append(navEl);

//=============================================//

// Властивість innerHTML
// зчитування
// запис

const titleElem = document.querySelector(".hero_title");

console.log(titleElem);

titleElem.innerHTML = "WHAT YA GONNA DO?";   //на відміну від textContent(який приймає тільки рядок і так і передає), innerHTML розрізняє теги і вміє їх читати/розпарсювати і перетворювати в звичайні HTML теги


// titleElem.innerHTML = ""; //видаляє весь зміст елемента, який викликав цю вдастивість, звернувся до цієї властивості.

// innerHTML витирає все, перезаписує

// ==== insertAdjacentHTML ===== //

// Цей метод чітко вказує на місце де саме ми додаємо певний елемент. саме додати!!!

titleElem.insertAdjacentHTML("beforeend", ` <a href="">JOJOBA</a>`); // приймає два аргументи: 1.місце, куди хочемо поставити якусб розмітку"beforebegin","afterbegin","beforeend", "afterend"; 2. те що михочемо додати.


// метод додасть туди, куди скажемо, і те що ми йому скажемою (рядочок з розміткою)














