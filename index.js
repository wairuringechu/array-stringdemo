//array methods//
//1.Push ()//
//method is used to add one or more elements to the end of an array//

const numbersA = [1, 2, 3];
numbers. Push (4);
console.log(numbers); // Output: [1, 2, 3, 4]

//2.shift()//
 //method is used to remove the first element from an array//
const numbersB= [1, 2, 3, 4];
const firstElement = numbersB. Shift();
console.log(firstElement); // Output: 1

//3.unshift()//
 //method is used to add one or more elements to the beginning of an array//
const numbersC = [2, 3, 4];
const newLength = numbersC. Unshift(1); 
console.log(newLength); // Output: 4

//4.pop()//
// method is used to remove the last element from an array//
const numbersD= [1, 2, 3, 4];
const lastElement = numbersD.pop();
console.log(lastElement); // Output: 4

//5.length()//
// length of an array is used to get or set the number of elements in the array.
const numbersE = [1, 2, 3, 4];
numbersE.length = 2;
console.log(numbersE.length); 

//6.spice()//
//method changes the contents of an array by removing or replacing elements or adding an element// 
const stationary = ['book', 'pen', 'pencil'];
stationary.splice(1, 3, 'book', 'pencil');
console.log(stationary);
// Output: ['book', 'pencil']

//7.reduce()//* 
//method applies a function against an accumulator and each element in the array to reduce it to a single value.
const numbersf = [1, 2, 3, 4, 5];
const sum = numbersf.reduce((acc, curr) => acc + curr, 0);
console.log(sum);
// Output: 15

//8.includes()//
//method checks if an array includes a certain element and returns a boolean value//
const fruitsc = ['apple', 'banana', 'cherry'];
console.log(fruitsc.includes('banana'));
// Output: true

//9.join()// 
//method creates and returns a new string by checking all the elements in an array separated by a specified separator//
const fruitsd = ['apple', 'banana', 'cherry'];
const str = fruitsd.join(', ');
console.log(str);
// Output: 'apple, banana, cherry'

//10.indexOf()//
//method returns the index of the first occurrence of a specified element in an array,and if the element is not found it returns a -1// 
const fruits = ['apple', 'banana', 'cherry'];
const indexz = fruits.indexOf('banana');
console.log(indexz);
// Output: 1

//11.find() //
//method returns the value of the first element in an array that satisfies a specified condition.
const numbersg = [1, 2, 3, 4, 5];
const even = numbersg.find(num => num % 2 === 0);
console.log(even);
// Output: 2

//12.ThefindIndex()//
 //method returns the index of the first element in an array that satisfies a specified condition,if not it returns a -1//
const numberss = [1, 2, 3, 4, 5];
const index = numberss.findIndex(num => num % 2 === 0);
console.log(index);
// Output: 1

//13.Themap()//
 //method creates a new array by calling a function on each element of an existing array. It returns an array with the same number of elements 
const numbersx = [1, 2, 3, 4, 5];
const squaredNumbersx = numbersx.map(num => num * num);
console.log(squaredNumbersx);
// Output: [1, 4, 9, 16, 25]

//14.Thefilter()// 
//method creates a new array with all elements that pass a test specified by a function//
const numbersh = [1, 2, 3, 4, 5];
const evenNumersh = numbersh.filter(num => num % 2 === 0);
console.log(evenNumbersh);
// Output: [2, 4]

//15.The fill()//
 //method changes all the elements in an array to a static value, from a start index (default 0) to an end index (default array.length).
const numbersp= [1, 2, 3, 4, 5];
numbersp.fill(0, 2, 4);
console.log(numbersp);
// Output: [1, 2, 0, 0, 5]

//16. The reverse()// 
//method reverses the order of the elements in an array.//
const numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers);
// Output: [5, 4, 3, 2, 1]

//STRING METHODS//

//1.charAt(index):// 
//method returns the character at a specified index in a string.//
const strn = 'hello';
console.log(strn.charAt(1));
// Output: 'e'

//2.concat() and replace(): 
//The concat() method joins two or more strings and returns a new string. //
//The replace() method searches a string for a specified value or regular expression// 
// returns a new string with the replacement value//
const str1 = 'hello';
const str2 = 'world';
const newStr1 = str1.concat(' ', str2);
console.log(newStr1);
// Output: 'hello world'

const str3 = 'The quick brown fox';
const newStr2 = str3.replace('fox', 'dog');
console.log(newStr2);
// Output: 'The quick brown dog'

//3.split()//
// splits a string into an array of substrings, based on a specified separator.//
const strq = 'hello world';
const arr = strq.split(' ');
console.log(arr);
// Output: ['hello',

//4.substr(start, length) 
//This method returns a portion of a string starting from the specified index 
//and extending for a given number of characters.//
const strc = "Hello, world!";
const substrResult = strc.substr(7, 5);
console.log(substrResult); // Output: "world"

//5 substring(start, end)//
// This method returns a portion of a string between the specified start and end indexes.//
const strm = "Hello, world!";
const substringResult = strm.substring(7, 12);
console.log(substringResult); // Output: "world"

//6. slice(start, end)//
//This method returns a portion of a string between the specified start 
//and end indexes, or to the end of the string if no end index is provided.//
const stru = "Hello, world!";
const sliceResult = stru.slice(7, 12);
console.log(sliceResult); // Output: "world"

//7. toLowerCase()://
// This method returns a string with all lowercase characters.//
const strv = "Hello, World!";
const toLowerCaseResult = strv.toLowerCase();
console.log(toLowerCaseResult); // Output: "hello, world!"

///8.trim()//
//This method removes whitespace from both ends of a string.//
const strr = "   Hello, World!   ";
const trimResult = strr.trim();
console.log(trimResult); // Output: "Hello, World!"

//9.includes()//
//This method checks if a string contains a specific substring and returns a boolean.//
const strt = "Hello, World!";
const includesResult = strt.includes("World");
console.log(includesResult); // Output: true

//10.search()//
// method searches a string for a specified value and returns the index of the first occurrence.//
const strw = "Hello, World!";
const searchResult = strw.search("World");
console.log(searchResult); // Output: 7





