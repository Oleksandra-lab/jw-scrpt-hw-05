// const genres = ["Jazz", "Blues"]
// genres.push("Rock and roll")
// console.log (genres);
// console.log (genres[0]);
// console.log (genres[genres.length -1]);
// console.log (genres.shift());
// console.log (genres.unshift("Contry", "Reggae"));


const fruits = ['apple', 'grape', 'peach', 'banana', 'lemon'];

for (let i = 0; i < fruits.length; i += 1) {
    console.log(fruits[i])

}
 
// function findLongestWord(string) {
//     // Change code below this line
 
//     let apartWord = string.split(" ");
//     let longestWord = '';
    
//     for (let word of apartWord) {
//         if(word.length > longestWord.length) {
//             longestWord = word;
//         }
        
//     }
//     return longestWord;  
//     }
//     console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
  
  
  
    // // Change code above this line

    // function createArrayOfNumbers(min, max) {
    //     const numbers = [];
    //     // Change code below this line
    //     for ( let i = min; i <= max; i += 1) {
    //      numbers.push(i);
    //     }
      
    //     // Change code above this line
    //     return numbers;
    //   }
    //    console.log(createArrayOfNumbers(1, 5))


function getCommonElements(array1, array2) {
  // Change code below this line
  let newArray = [];
  for (let i = 0; i < array1.length; i += 1) {
    if (array2.includes(array1[i])) {
     newArray.push(array1[i]);
    }
  }

return newArray;

 // Change code above this line
}
 console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); 

 function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line

  for (let i = 0; i < order.length; i += 1) {
    total += order[i];
  }

  // Change code above this line
  return total;
}




function calculateTotalPrice(order) {
  let total = 0;
  // // Change code below this line

  // for (let i = 0; i < order.length; i += 1) {
  //   total += order[i];
  // }
for (const pricePerEach of order) {
  total += pricePerEach;
}
  // Change code above this line
  return total;
}
console.log(calculateTotalPrice([12, 85, 37, 4]));


// function getEvenNumbers(start, end) {
//    // Change code below this line
//   let pairNumbers = [];
// for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//      pairNumbers.push(i);
//     }
  
  
// }

// return pairNumbers
//     // Change code above this line
//   }
//   console.log( getEvenNumbers(2, 8));

  
const start = 6;
const end = 27;
let number;

for (let i = start; i < end; i += 1) {
  if (i % 5 === 0) {
    number = i; 
    break;
    console.log(number);
    
  }

}

function includes(array, value) {
    // Change code below this line
    for (let i = 0; i < array.length; i += 1) {
        if(array[1] === value) {
            return true;
        }  
    }
    return false;
    // Change code above this line
  }
  console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter"));
  console.log(includes([1, 2, 3, 4, 5], 17));
