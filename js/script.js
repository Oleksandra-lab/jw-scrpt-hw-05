console.log('Hello world!');

// let userMessage = prompt();
// console.log(userMessage);

// if (userMessage)


// Напишіть скрипт, який буде обрізати рядок до 25 символа і додавати у кінець три крапки.
// Працюй з наступними рядками попорядку:

// "Vestibulum facilisis purus nec"
// "Nunc sed turpis a felis in nunc fringilla"

/**
  |============================
  | task 2
  |============================
*/

const stringOne = "Vestibulum facilisis purus nec"
if(stringOne.length > 25) {
    const stringCut = stringOne.slice(0,25) + "..."  
    console.log(stringCut)  
}
else {
    console.log(stringOne)
}
const srtingSecond = "Nunc sed turpis a felis in nunc fringilla"

/**
  |============================
  | task 3
  |============================
*/

// Напиши скрипт, який переведе значення totalMinutes (кількість хвилин) в рядок у форматі годин та хвилин HH:MM.
// 70 покаже 01:10
// 450 покаже 07:30
// 1441 покаже 24:01


const totalMinutes = 450;
const minutes = totalMinutes % 60;
console.log(minutes)


const hours = (Math.floor(totalMinutes / 60)) ;
const result =`${hours.toString().padStart(2, '0')} : ${minutes.toString().padStart(2,'0')}`;

console.log(result);

/**
  |============================
  | task  4
  |============================
*/

// Є деякі рядки, які потрібно перевірити на вміст заборонених слів spam і sale, і повернути результат перевірки. Слова в рядку можуть бути у довільному регістрі, наприклад SPAM або sAlE. Якщо знайшли заборонене слово (spam або sale) то повертайте true. Якщо в рядку відсутні заборонені слова, повертайте false.
// Попорядку перевіряйте наступні рядки:

// "Latest technology news" - false
// "JavaScript weekly newsletter" - false
// "Get best sale offers now!" - true
// "Amazing SalE, only tonight!" - true
// "Trust me, this is not a spam message" - true
// "Get rid of sPaM emails. Our book in on sale!" - true

// function checkString(str) {
//     console.log(str)
//     let isSpam;
//     str = str.toLowerCase();

//     if (str.includes("spam") || str.includes("sale")) {
//         isSpam = true;
//     }
//     else {
//         isSpam = false;
//     }
//     console.log(isSpam)
// }
// checkString("Latest technology news")
// checkString("Amazing SalE, only tonight!")

function checkString(str) {
   
    str = str.toLowerCase();
    let isSpam = str.includes("spam") || str.includes("sale")
    console.log(isSpam)
}
checkString("Latest technology news");
checkString("Amazing SalE, only tonight!");

/**
  |============================
  | task 5

  |============================
*/


//Створити функцію яка буде рахувати за скільки днів равлик зможе виповзти з колодязя, функція приймає 1 параметр.
//1 глибина колодязя (depth)

//Функція повертає кількість днів

// Умови:
// вдень Равлик проповзає на 7 м вгору, а за ніч опускається на 2 м вниз
// використовувати цикл while()

function calcDays(depth) {
    const speedDay = 7;
    const speedNight = 2;
    let days = 0;
    let totalDistance = 0;
    while(totalDistance < depth) {
        totalDistance += speedDay;
        days += 1;
        if (totalDistance < depth) {
            totalDistance -= speedNight;
        }
    }
console.log(days);
return days;
}
// console.log(object);

calcDays(42)//виповзе за 8 днів
calcDays(17)//виповзе за 3 дні
calcDays(18)//виповзе за 4 дні

/**
  |============================
  | Task 6
  |============================
*/

// Потрібно створити світлофор за допомогою switch()
// Користувач вводить в prompt() колір який він бачить
// В результаті отримує меседж з дією яку повинен виконати
// Світлофор може мати 4 стани green (GO), yellow (READY),red (STOP), будь що інше означає що сфітлофор не працює (BE CAREFUL)

// const message = prompt();
// let action;
// console.log(message);
// switch (message) {
//     case  "yellow":
//     action = "READY";
//     break

//     case  "green":
//     action = "GO";
//     break

    
//     default:
//     action = "BE CAREFUL";

// }
// console.log(action); розкоментити, щоб працювало вікно

/**
  |============================
  | Task 7
  |============================
*/
// . За допомогою циклу for додайте всі парні числа від min до max
const max = 50;
const min = 0;
let total = 0;

for (let i = min; i <= max; i += 1) {
    if (i % 2 === 0) {
        total += i;
        console.log(i);
    }
}
console.log(total);




