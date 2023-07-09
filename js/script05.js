/* Task 5 */
// const ancestor = {
//     name: "Paul",
//     age: 83,
//     surname: "Dawson",
//     heritage: "Irish",
//   };
//   // Change code below this line
  
//   const parent = Object.create(ancestor);
//   parent.name = "Stacey";
//   parent.surname = "Moore";
//   parent.age = 54;
  
//   const child = Object.create(parent);
//   child.name = "Jason";
//   child.age = 27;
  
//   // Change code above this line
//   console.log(ancestor.isPrototypeOf("parent"));
//   console.log(parent.isPrototypeOf("child"));
//   console.log(ancestor.hasOwnProperty("surname"));
//   console.log(ancestor.surname);
//   console.log(ancestor.hasOwnProperty("heritage"));
//   console.log(parent.hasOwnProperty("heritage"));
//   console.log(child.heritage);
/* Mentors practice */
/* Task 1 */
// Реалізуйте клас Student, який успадковуватиметься від класу User. Цей клас повинен мати такі властивості:
// name приватна властивість (ім'я, успадковується від User),
// surname приватна властивість (прізвище, успадковується від User),
// year (рік вступу до вузу).
// Клас повинен мати метод getFullName() (успадковується від User), за допомогою якого можна вивести одночасно ім'я та прізвище студента.
// Також клас повинен мати метод getCourse(), який виводитиме поточний курс студента (від 1 до 5, якщо значення перевищує 5  курс виводити що студент являєтсья випускником).
// Курс обчислюється так: потрібно від поточного року відняти рік вступу до вузу. Поточний рік отримаєте самостійно (читати документацію!!!).
// Приклад ініціалізації екземпляру класа:
// const student = new Student('Петрик', 'Пяточкин', 2019);

// student.getFullName(); //поверне 'Петрик Пяточкин'
// student.getCourse();   //поверне 3 (третій курс)

// class User {
// #name ;
// #surname;
// static counter = 0
// static addUser(){
//   this.counter += 1
//   console.log(`кількість зареєстрованих користувачів ${this.counter}`);

// }

//   constructor(name, surname, city) {
// this.name = name;
// this.surname = surname;
// User.addUser()
// // this.city = city;
//   }

//   getFullName(){
// console.log(`${this.#name} ${this.#surname}`);
//   }

// changeName (newName){
//   if (this.#name === newName || newName.lenght < 3){
//     return
//   }
//   this.#name = newName;
// }

// }
// class Student extends User{
//   constructor(name, surname, year){
//     super(name, surname);
//   this.year = year;
//   } 
  


//   getCourse(){
//     const currentTime = new Date(); 
//     const currentYear = currentTime.getFullYear
//     console.log(currentYear);
//     if (currentYear - this.year > 5){
//       console.log("Випускник");
//     }else{
//       console.log(`${currentYear - this.year} курс`)
//     }
    
//   }
  
// }
// const student = new Student ('Петрик','Пяточкин', 2019 )
// const student1 = new Student ('Петрик','Пяточкин', 2019 )
// const student2 = new Student ('Петрик','Пяточкин', 2019 )
// console.log(student);
// // const firstUser = new User("Петрик", "Пяточкин", "Lviv");

// // console.log(firstUser);
// // firstUser.city = "Odesa"
// // console.log(firstUser);
// // firstUser.changeName(abcd);
// // console.log(firstUser);
// console.log(new Date());
// student.getCourse();   //поверне 3 (третій курс)

/* Task 2 Victoria */
// // Створити функцію яка буде розбивати початковий масив на потрібну кількість елементів розділюячи на декілька масивів, повертає масив масивів
// const data = [1, 2, 3, 4, 5, 6, 7, 8]; // [[1, 2], [3, 4],[5, 6],[7, 8]]
// function foo(arr, size) {
//   let newData = [];
//   for (let i = 0; i < arr.length; i += size) {
//     const copy = arr.slice(i, i + size)
//     console.log(arr[i]); 
//     console.log(copy);
//     newData.push(copy);
//   }
//   console.log(newData);
//   return newData

// }
// foo(data, 2)

/* Second task Victoria */
//  напиши функцію яка буде створювати масив з не унікальних значень в масиві, які є в тестових масивах, якщо немаэ не уныкальних повертаэ пустий масив
const arr1 = [1, 2]; //[]
const arr2 = [2, 3, 2];//[2]
const arr3 = ['a', 'b'];//[]
const arr4 = ['b', 'c'];//[]
const arr5 = ['b', 'e', 'c'];//[]
const arr6 = ['b', 'b', 'e'];//[b]
function foo(arr) {
  const newArr = arr.filter((el, index, arr) => arr.indexOf(el) !== index);
console.log(newArr);
}
foo(arr2);