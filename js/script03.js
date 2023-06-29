// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// user.mood = "happy"
// console.log(user);

// const userKeys = Object.keys(user);
// console.log(userKeys);

// /* Task 1 */
// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
// } 
// console.log(apartment);

// /* Task 2 */
// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//         name: "Henry",
//         phone: "982-126-1588",
//         email: "henry.carter@aptmail.com",
//     },
// } 
// console.log(apartment);

// /* Task 3 */
// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//   };
  
//   // Change code below this line
//   const aptRating = apartment.rating;
//   console.log(aptRating);

//   const aptDescr = apartment.descr;
//   console.log(aptDescr);

//   const aptPrice = apartment.price;
//   console.log(aptPrice);

//   const aptTags = apartment.tags;
//   console.log(aptTags);
//   // Change code above this line

//   /* Task 4 */
//   const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//       name: "Henry",
//       phone: "982-126-1588",
//       email: "henry.carter@aptmail.com",
//     },
//   };
  
//   // Change code below this line
//   const ownerName = apartment.owner.name;
//   console.log(ownerName);

//   const ownerPhone = apartment.owner.phone;
//   console.log(ownerPhone);

//   const ownerEmail = apartment.owner.email;
//   console.log(ownerEmail);

//   const numberOfTags = apartment.tags.length;
//   console.log(numberOfTags);

//   const firstTag = apartment.tags[0];
//   console.log(firstTag);

//   const lastTag = apartment.tags[2];
//   console.log(lastTag);
//   // Change code above this line

// /* Task 5 */
// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//   };
  
//   // Change code below this line
//   const aptRating = apartment["rating"];
//   console.log(aptRating);

//   const aptDescr = apartment["descr"];
//   console.log(aptDescr);

//   const aptPrice = apartment["price"];
//   console.log(aptPrice);

//   const aptTags = apartment["tags"];
//   console.log(aptTags);
//   // Change code above this line
  
// /* Task 6 */
// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//       name: "Henry",
//       phone: "982-126-1588",
//       email: "henry.carter@aptmail.com",
//     },
//   };
  
//   // Change code below this line
//   apartment.rating = 4.7;
//   apartment.price = 5000;
//   apartment.owner.name = "Henry Sibola";
//   apartment.tags.push("trusted");

//   console.log(apartment);

// /* Task 7 */
// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4.7,
//     price: 5000,
//     tags: ["premium", "promoted", "top", "trusted"],
//     owner: {
//       name: "Henry Sibola",
//       phone: "982-126-1588",
//       email: "henry.carter@aptmail.com",
//     },
//   };
  
//   // Change code below this line
//   apartment.area = 60;
//   apartment.rooms = 3;
//   apartment.location = {};
//   apartment.location.country = "Jamaica";
//   apartment.location.city = "Kingston";
    

// console.log(apartment);
  
/* Task 14*/
// function countProps(object) {
//   // Change code below this line
//   const keys = Object.keys(object);
//   let propCount = 0;

//   // for (const key in object) {
//   //   if (object.hasOwnProperty(key)) {
//   //     propCount += 1;
      
//   for (const key of keys) {
//     propCount += 1;
//     }
  

//   return propCount;
//   // Change code above this line
// }
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

/* Task 15 */
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// // Change code below this line
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);
//  console.log(keys);
//  console.log(values);

/* Task 16 */
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
  

//   for ( let eachSalary of  Object.values(salaries) )
// totalSalary += eachSalary;
//   // Change code above this line
//   return totalSalary;
// }
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));

// /* Task 18 */
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];


// function getProductPrice(productName) {
//     for ( const product of products) {
  
//  if (product.name === productName) {
//     return product.price;
//  }
//   }
//   return null;
//   // Change code below this line

// }
//  console.log(getProductPrice("Scanner"));

//   // Change code above this line

// /* Task 19 */
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   let result = [];
// for (const product of products){
// result.push(product[propName])
// }
// console.log(result);
//   return result
//   // Change code above this line
// }
// getAllPropValues("name")






// const students2 = [{
//     name: `Den`,
//     language: `html`

// }, {
//     name: `Petro`,
//     language: `css`

// }, {
//     name: `Egor`,
//     language: `js`

// }, {
//     name: `Max`,
//     language: `html`

// }, {
//     name: `Olga`,
//     language: `css`

// }, {
//     name: `Kate`,
//     language: `js`

// }, {
//     name: `Ivan`,
//     language: `html`

// }, ];

// function getStudens (students, language) {
//     const list = [];
//     for (let student of students) {
//         console.log(student.language);

//         if (student.language === language) {
//          list.push(student.name);  
//         }
//     }
//     return list;

// }
// getStudens(students2, 'css');

/* Mentors Task Voctoria*/
// // Порахувати скільки заробив один юзер
// // (функція приймає 2 параметри
// // 1 параметр масив
// // 2 параметр імя робітника
// // Функція повертає скільки він заробив (salary*month) )

// // Порахувати загальну суму заробітку всіх робітників()
// // (функція приймає 1 параметр масив, і повертає загальну суму заробітку всіх робітників);

// const workers = [{
//         name: 'Alex',
//         salary: 3500,
//         month: 12,
//     },
//     {
//         name: 'Dima',
//         salary: 2500,
//         month: 9,
//     },
//     {
//         name: 'Oleg',
//         salary: 1500,
//         month: 36,
//     },
// ];

// function getSalary (workers, name) {
//     for (let worker of workers) {
// if (worker.name === name) {
//     return worker.salary * worker.month;
// }
//     }
  
// }
// console.log(getSalary(workers, 'Oleg'));

// function getTotalSalary(workers) {
//     let sum = 0;
// for (let worker of workers){
//     sum += worker.salary * worker.month;
// }
// // console.log(sum);
// return sum
// }

// console.log(getTotalSalary(workers));
/* Task 19 */ 
// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
  
//   function getAllPropValues(propName) {
//     let result = [];
//     // Change code below this line
//   for (const product of products) {
    
//     if (product[propName]) {
//   result.push(product[propName]);
    
//     }
     
//   }
//   return result
// }
  
  
// console.log(getAllPropValues("price"));

/*  mentors Task Ivan */
// 1 Створити функцію яка буде приймати 2 параметри
//    1 параметр масив
//    2 параметр назва книги
// Функція повертає Імена юзерів (формат стрінги) в яких є ця книга ("Harry Potter") \\\ "Anna, Oleksii"

// 2 Порахувати вік всіх юзерів у яких є ключ age.

// const friends = [{ name: "Anna", books: ["Bible", "Harry Potter"], age: 21 },
//     { name: "Bob", books: ["War and peace", "Romeo and Juliet"], age: 26 },
//     { name: "Alice", books: ["War and peace", "Romeo and Juliet"]},
//     { name: "Oleksii", books: ["Bible","War and peace","Harry Potter",  "Romeo and Juliet"], age: 26},
// ]
// function bookUser(friends, book){
//     const names = [];
//     for (let friend of friends){
        
//         if (friend.books.includes(book)){
//            names.push(friend.name);

//         }
//     }
//     return names.join(', ') ;
// }
// console.log(bookUser(friends, "Harry Potter"));

// function userAge (array){
//     let result = 0;
//     let quantity = 0;
//     for (let friend of array){
//         if ("age" in friend) {
//             result += friend.age;
//             quantity += 1;
//         }
        
//     }
//     return parseInt( result/quantity);
// }

// console.log(userAge(friends));

/* Task 20 */
// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
  
//   function calculateTotalPrice(productName) {
//     // Change code below this line
//     let total = 0;
//   for (let product of products) {
//     if (product.name === productName){
//       total = product.price*product.quantity;
      
//     }
    
//   }
  
//   return total
//     // Change code above this line
//   }

//   console.log(calculateTotalPrice("Droid"));

/* Task 26 */
// function calculateMeanTemperature(forecast) {
//     const {
//     today: { low: todayLow , high: todayHigh },
//     tomorrow: {low: tomorrowLow, high: tomorrowHigh}
//   } = forecast;

//     return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
//   }
  
//   console.log(calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} }));

/* Task 28 */
// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// console.log(allScores);
// console.log(bestScore);
// console.log(worstScore);

/* Task 29 */
// const defaultSettings = {
//     theme: "light",
//     public: true,
//     withPassword: false,
//     minNumberOfQuestions: 10,
//     timePerQuestion: 60,
//   };
//   const overrideSettings = {
//     public: false,
//     withPassword: true,
//     timePerQuestion: 30,
//   };
//   // Change code below this line
//   const finalSettings = {...defaultSettings, ...overrideSettings};

//   console.log(finalSettings);

/* Task 30 */
// function makeTask(data) {
//     const completed = false;
//     const category = "General";
//     const priority = "Normal";
//     // Change code below this line
//   const final = {completed, category, priority, ... data} ;
  
//     return final
//     // Change code above this line
//   }
// console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }));
// console.log(makeTask({ category: "Finance", text: "Take interest" }));
// console.log(makeTask({ priority: "Low", text: "Choose shampoo" }));
// console.log(makeTask({ text: "Buy bread" }));  

/* Task 31 */
// function add (...args) {
//     let sumArgs = 0;
//     for (let argument of args){
//       sumArgs += argument;
      
//     }
//     return sumArgs
//     // Change code above this line
//   }
//   console.log(add(74, 11, 62, 46, 12, 36));
//   console.log(add(32, 6, 13, 19, 8));

/* Task 32 */

// function addOverNum(firstNumber, ...args) {
    
//     let total = 0;
  
//     for (const arg of args) {
//         if (arg > firstNumber){
//             total += arg;
//         }
      
//     }
  
//     return total;
//     // Change code above this line
//   }
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));  

/* Task 33 */
// function findMatches(firstArg, ...args) {
//     const matches = []; // Don't change this line
     
//     for ( let arg of firstArg) {
//       if ( args.includes(arg) ) 
//           matches.push(arg);
      
//     }
  
//     // Change code above this line
//     return matches;
//   }
//   console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));

/* Task 34 */

// const bookShelf = {
//     // Change code below this line
//     books: ["The last kingdom", "The guardian of dreams"],
//     getBooks() {
//       return "Returning all books";
//     },
//     addBook(bookName) {
//       return `Adding book ${bookName}`;
//     },
//     removeBook(bookName) {
//         return `Deleting book ${bookName}`;
//       },
//       updateBook(oldName, newName) {
//        return `Updating book ${oldName} to ${newName}` 
//       }
//     // Change code above this line
//   };
// console.log(bookShelf.getBooks());  
// console.log(bookShelf.addBook("Haze"));
// console.log(bookShelf.removeBook("Red sunset"));
// console.log(bookShelf.updateBook("Sands of dune", "Dune"));

/* Task 35 */
// const bookShelf = {
//     books: ["The last kingdom", "Haze", "The guardian of dreams"],
//     updateBook(oldName, newName) {
//       // Change code below this line 
//       const indBook = this.books.indexOf(oldName);
//   return this.books.splice(indBook, 1, newName)
  
  
//       // Change code above this line
//     },
//   };
// console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));  
 
/* Task 38 */
// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     addPotion(potionName) {
//       // Change code below this line
//       return this.potions.push(potionName)
  
  
//       // Change code above this line
//     },
//   };
  
// console.log(atTheOldToad.addPotion("Invisibility"));  
// console.log(atTheOldToad.potions);

/* Task 39*/
// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     removePotion(potionName) {
//       // Change code below this line
//       let i = this.potions.indexOf(potionName);
//        if (i >= 0) {
//          this.potions.splice(i, 1);
//          return this.potions
//        }
  
  
  
//       // Change code above this line
//     },
//   };
//   console.log(atTheOldToad.removePotion('Dragon breath'));
//   console.log(atTheOldToad.removePotion('Speed potion'));

/* Task 40 */
// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     updatePotionName(oldName, newName) {
//       // Change code below this line
//   let i = this.potions.indexOf(oldName);
//        if (i >= 0) {
//          this.potions.splice(i, 1, newName);
//          return this.potions
//        }
  
  
//       // Change code above this line
//     },
//   };
// console.log(atTheOldToad.updatePotionName('Dragon breath', 'Polymorth'));  
// console.log(atTheOldToad.updatePotionName('Stone skin', 'Invisibility')); 

/* Task 41 */
const atTheOldToad = {
    potions: [
      { name: "Speed potion", price: 460 },
      { name: "Dragon breath", price: 780 },
      { name: "Stone skin", price: 520 },
    ],
    // Change code below this line
    getPotions() {
        allPotion = [];
        for (let potion of potions) {
            this.potions[potion]
        }
       ;
    },
};
console.log(atTheOldToad.getPotions());