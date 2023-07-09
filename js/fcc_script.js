// !======================================
// function testLessThan(val) {
//     if (val < 25) {  // Змініть цей рядок
//       return "Under 25";
//     }
  
//     if (val < 55) {  // Змініть цей рядок
//       return "Under 55";
//     }
  
//     return "55 or Over";
//   }
  
//   console.log(testLessThan(10));

// !============================================
// function testLessOrEqual(val) {
//     if (val <= 12) {  // Змініть цей рядок
//       return "Smaller Than or Equal to 12";
//     }
  
//     if (val <= 24) {  // Змініть цей рядок
//       return "Smaller Than or Equal to 24";
//     }
  
//     return "More Than 24";
//   }
  
//   console.log(testLessOrEqual(10));

// !===========================================
// function testLogicalAnd(val) {
//     // Змініть код лише під цим рядком
  
//     if (val >= 25 && val <= 50) {
//         return "Yes";
//       }
    
  
//     // Змініть код лише над цим рядком
//     return "No";
//   }
  
//   console.log(testLogicalAnd(10));

// !==========================================
// function testLogicalOr(val) {
//     // Змініть код лише під цим рядком
  
//     if (val < 10 || val > 20) {
//       return "Outside";
//     }
  
    
//     // Змініть код лише над цим рядком
//     return "Inside";
//   }
  
//   console.log(testLogicalOr(15));

// !========================================
// function testElse(val) {
//     let result = "";
//     // Змініть код лише під цим рядком
  
//     if (val > 5) {
//       result = "Bigger than 5";
//     }else {
//   result = "5 or Smaller";
//     }
  
//     // Змініть код лише над цим рядком
//     return result;
//   }
  
//   console.log(testElse(4));
// !=======================================

// function testElseIf(val) {
//     if (val > 10) {
//       return "Greater than 10";
//     } else if (val < 5) {
//       return "Smaller than 5";
//     } else {
  
//     return "Between 5 and 10";
//     }
//   }
  
//   console.log(testElseIf(7));
// !===========================================
// function orderMyLogic(val) {
//     if (val < 5) {
//       return "Less than 5";
//     } else if (val < 10) {
//       return "Less than 10";
//     } else {
//       return "Greater than or equal to 10";
//     }
//   }
  
//   console.log(orderMyLogic(7));
//   !===========================================

// function testSize(num) {
//     // Змініть код лише під цим рядком
//     if (num < 5){
//       return "Tiny"
//     }else if (num < 10){
//       return "Small"
//     }else if (num < 15){
//       return "Medium"
//     }else if (num < 20){
//       return "Large"
//     }else if (num >= 20){
//       return "Huge"
//     }
  
  
//     return "Change Me";
//     // Змініть код лише над цим рядком
//   }
  
//   console.log(testSize(7));
//   !========================================
// const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

// function golfScore(par, strokes) {
//   // Змініть код лише під цим рядком
// if (strokes == 1) {
//     return names[0];
//   } else if (strokes <= par - 2) {
//     return names[1];
//   } else if (strokes === par - 1) {
//     return names[2];
//   } else if (strokes === par) {
//     return names[3];
//   } else if (strokes === par + 1) {
//     return names[4];
//   } else if (strokes === par + 2) {
//     return names[5];
//   } else {
//     return names[6];
//   }

//   return "Change Me";
//   // Змініть код лише над цим рядком
// }

// console.log(golfScore(5, 4));
// !============================================
// function phoneticLookup(val) {
//   var result = "";

//   // Змініть код лише під цим рядком
//   var lookup = {
//      "alpha": "Adams",
//        "bravo":"Boston",
//        "charlie": "Chicago",
//       "delta": "Denver",
//      "echo":"Easy",
//       "foxtrot":"Frank",
//   };
//  result = lookup[val];
//  return result
// }
//   // Змініть код лише над цим рядком
  
  
// console.log(phoneticLookup("charlie"));
// !=====================================
// function checkObj(obj, checkProp) {
//   // Змініть код лише під цим рядком
//   if (obj.hasOwnProperty(checkProp)){
//   return obj[checkProp] ;
//   } else{
//     return "Not Found"
//   }
//   // Змініть код лише над цим рядком
// }
// console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift"));
// !==========================================

// const myStorage = {
//   "car": {
//     "inside": {
//       "glove box": "maps",
//       "passenger seat": "crumbs"
//      },
//     "outside": {
//       "trunk": "jack"
//     }
//   }
// };

// const gloveBoxContents = myStorage.car.inside["glove box"];
// console.log(gloveBoxContents);
// !==========================================

// const myPlants = [
//   {
//     type: "flowers",
//     list: [
//       "rose",
//       "tulip",
//       "dandelion"
//     ]
//   },
//   {
//     type: "trees",
//     list: [
//       "fir",
//       "pine",
//       "birch"
//     ]
//   }
// ];

// const secondTree = myPlants[1].list[1];
// console.log(secondTree);
// !==============================================

const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Змініть код лише під цим рядком
// function updateRecords(records, id, prop, value) {
//   if (value === "") {
//     delete records[id][prop];
//   } else if (prop !== "tracks" && value !== "") {
//     records[id][prop] = value;
//   } else if (prop === "tracks" && value !== "") {
//     if (records[id].hasOwnProperty("tracks") === false) {
//       records[id][prop] = [];
//     }
//     records[id][prop].push(value);
//   }
//   return records;
// }
  

// console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'));
// // ! ========================================

// const myArray = [];
// for (let i = 1; i < 10; i += 2){
//   myArray.push(i);
// }
// console.log(myArray);
// !==================================

// const myArray = [];
// for (let i = 9; i > 0; i -= 2) {
//   myArray.push(i);
// }
// console.log(myArray);
// !========================================

// const myArr = [2, 3, 4, 5, 6];
// let total = 0;
// for (let i = 0; i < myArr.length; i++) {
//    total += myArr[i];
// }
// console.log(total);
// !===============================

// function multiplyAll(arr) {
//   let product = 1;
//   // Змініть код лише під цим рядком
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     product = product * arr[i][j];
//   }
// }
//   // Змініть код лише над цим рядком
//   return product;
// }

// console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]));
// !===================================

// const contacts = [
//   {
//     firstName: "Akira",
//     lastName: "Laine",
//     number: "0543236543",
//     likes: ["Pizza", "Coding", "Brownie Points"],
//   },
//   {
//     firstName: "Harry",
//     lastName: "Potter",
//     number: "0994372684",
//     likes: ["Hogwarts", "Magic", "Hagrid"],
//   },
//   {
//     firstName: "Sherlock",
//     lastName: "Holmes",
//     number: "0487345643",
//     likes: ["Intriguing Cases", "Violin"],
//   },
//   {
//     firstName: "Kristian",
//     lastName: "Vos",
//     number: "unknown",
//     likes: ["JavaScript", "Gaming", "Foxes"],
//   },
// ];

// function lookUpProfile(name, prop) {
//   // Змініть код лише під цим рядком
// for (let i = 0; i < contacts.length; i++){
//   if(contacts[i].firstName === name) {
//     if(prop in contacts[i]){
//       return contacts[i][prop];
//     } else {
//       return "No such property";
//     }
//   }
//   }
//   return "No such contact";
//   // Змініть код лише над цим рядком
// }

// console.log(lookUpProfile("Akira", "likes"));
// !==========================================

// function randomWholeNum() {
  
//   return Math.floor(Math.random() * 10);
// }
// console.log(randomWholeNum());
// !===========================================

// function randomRange(myMin, myMax) {
//   return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
// }
// console.log(randomRange(10, 30));
// !=============================================

// function convertToInteger(str) {
//   return parseInt(str);
//   }
  
//   console.log(convertToInteger("56"));
//   !==============================

// function convertToInteger(str) {
//   return parseInt(str, 2)
//   }
  
//   console.log(convertToInteger("10011"));
//   !=======================================

// function checkEqual(a, b) {
//   return a === b ? "Equal" : "Not Equal";
//   }
  
//   console.log(checkEqual(1, 2));
//   !============================================

// function checkSign(num) {
//   return(num === 0) ? "zero" : (num > 0) ? "positive" : "negative";
//   }
  
//   console.log(checkSign(10));
//   !=============================================

// function countdown(n){
//   return n < 1 ? [] : [n].concat(countdown(n-1));
// }
// console.log(countdown(7));
// !=====================================================
// function rangeOfNumbers(startNum, endNum) {
//   return  endNum < startNum? []: [...rangeOfNumbers(startNum, endNum - 1), endNum];
// };
// console.log(rangeOfNumbers(10, 23));

// ! =============================================