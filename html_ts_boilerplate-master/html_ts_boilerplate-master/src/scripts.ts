/* eslint-disable guard-for-in */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
/* eslint-disable no-plusplus */
/* eslint-disable indent */
/* eslint-disable max-len */

// Task 1
// Write a function that takes two numbers (a and b) as argument
// Sum a and b
// Return the result
const task1 = (a: number, b: number): number => a + b;
console.log(task1(1, 2));
console.log(task1(1, 10));
console.log(task1(99, 1));

// Task 2
// Write a function that takes a value as argument
// Return the type of the value

const task2 = (a: unknown): string => typeof (a);
console.log(task2(1));
console.log(task2(false));
console.log(task2({}));
console.log(task2(null));
console.log(task2('string'));
console.log(task2(['array']));

// Task 3
// Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const task3 = (a: any, b: any): boolean => a === b && typeof a === typeof b;
console.log(task3(2, 3));
console.log(task3(3, 3));
console.log(task3(1, '1'));
console.log(task3('10', '10'));

// Task 4
// Write a function that takes a string (a) and a number (n) as arguments
// Return the nth character of 'a'

const task4 = (a: string, n: number): string => a[n - 1];
console.log(task4('abcd', 1));
console.log(task4('zyxbwpl', 5));
console.log(task4('gfedcba', 3));

// Task 5
// Write a function that takes a string (a) as argument
// Remove the first 3 characters of a
// Return the result

const task5 = (a: string): string => a.slice(3);
console.log(task5('abcdefg'));
console.log(task5('1234'));
console.log(task5('fgedcba'));

// Task 6
// Write a function that takes a string as argument
// Extract the last 3 characters from the string
// Return the result

const task6 = (a: string): string => a.slice(-3);
console.log(task6('abcdefg'));
console.log(task6('1234'));
console.log(task6('fgedcba'));

// Task 7
// Write a function that takes a string (a) as argument
// Get the first 3 characters of a
// Return the result

const task7 = (a: string): string => a.slice(0, 3);
console.log(task7('abcdefg'));
console.log(task7('1234'));
console.log(task7('fgedcba'));

// Task 8
// Write a function that takes a string (a) as argument
// Extract the first half a
// Return the result

const task8 = (a: string): string => a.slice(0, a.length / 2);
console.log(task8('abcdefgh'));
console.log(task8('1234'));
console.log(task8('gedcba'));

// Task 9
// Write a function that takes a string (a) as argument
// Remove the last 3 characters of a
// Return the result
const task9 = (a: string): string => a.slice(0, -3);
console.log(task9('abcdefg'));
console.log(task9('1234'));
console.log(task9('fgedcba'));

// Task 10
// Write a function that takes two numbers (a and b) as argument
// Return b percent of a
const task10 = (a: number, b: number): number => (a * b) / 100;
console.log(task10(100, 50));
console.log(task10(10, 1));
console.log(task10(500, 25));

// Task 11
// Write a function that takes 6 values (a,b,c,d,e,f) as arguments
// Sum a and b
// Then substract by c
// Then multiply by d and divide by e
// Finally raise to the power of f and return the result
// Tip: mind the order

const task11 = (a: number, b: number, c: number, d: number, e: number, f: number): number => (((a + b - c) * d) / e) ** f;
console.log(task11(6, 5, 4, 3, 2, 1));
console.log(task11(6, 2, 1, 4, 2, 3));
console.log(task11(2, 3, 6, 4, 2, 3));

// Task 12
// Write a function that takes a number as argument
// If the number is even, return true
// Otherwise, return false
const task12 = (num: number): boolean => num % 2 === 0;
console.log(task12(10));
console.log(task12(-4));
console.log(task12(5));
console.log(task12(-111));

// Task 13
const task13 = (a: string, b: string): number => {
    let count = 0;
    let pos = b.indexOf(a);
    while (pos !== -1) {
      count++;
      pos = b.indexOf(a, pos + 1);
    }
    return count;
  };
console.log(task13('m', 'how many times does the character occur in this sentence?'));
console.log(task13('h', 'how many times does the character occur in this sentence?'));
console.log(task13('?', 'how many times does the character occur in this sentence?'));
console.log(task13('z', 'how many times does the character occur in this sentence?'));

// Task 14
// Write an arrow function in TypeScript that takes a number (a) as argument
// If a is a whole number (has no decimal place), return true
// Otherwise, return false
const task14 = (a: number): boolean => Number.isInteger(a);
console.log(task14(4));
console.log(task14(1.123));
console.log(task14(1048));
console.log(task14(10.48));

// Task 15
// Write a function that takes two numbers (a and b) as arguments
// If a is smaller than b, divide a by b
// Otherwise, multiply both numbers
// Return the resulting value

const task15 = (a: number, b: number): number => (a < b ? a / b : a * b);
console.log(task15(10, 100));
console.log(task15(90, 45));
console.log(task15(8, 20));
console.log(task15(2, 0.5));

// Task 16
// Write a function that takes two strings (a and b) as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation

const task16 = (a: string, b: string): string => (a.includes(b) ? b + a : a + b);
console.log(task16('cheese', 'cake'));
console.log(task16('lips', 's'));
console.log(task16('Java', 'script'));
console.log(task16(' think, therefore I am', 'I'));

// Task 17
// Write a function that takes a number (a) as argument
// Round a to the 2nd digit after the comma
// Return the rounded number

const task17 = (a: number): number => Math.round(a * 100) / 100;
console.log(task17(2.12397));
console.log(task17(3.136));
console.log(task17(1.12397));
console.log(task17(26.1379));

// Task 18
// Write a function that takes a number (a) as argument
// Split a into its individual digits and return them in an array
// Tip: you might want to change the type of the number for the splitting

const task18 = (a: number): number[] => a.toString().split('').map((char) => parseInt(char, 10));
console.log(task18(10));
console.log(task18(931));
console.log(task18(193278));

// Task 19
// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the following words:
// 'Javascript', 'Countryside', and 'Downtown'
// You might want to apply basic JS string methods such as replace(), split(), slice() etc.

const task19 = (str1: string, str2: string): string => {
    const reversedString = str2.split('');
    const reverseArray = reversedString.reverse();
    return ((str1.charAt(0).toUpperCase() + str1.slice(1)) + reverseArray.join('')).replace('%', '');
};
console.log(task19('java', 'tpi%rcs'));
console.log(task19('c%ountry', 'edis'));
console.log(task19('down', 'nw%ot'));

// Task 20
// Write a function that takes a number (a) as argument
// If a is prime, return a
// If not, return the next higher prime number

const task20 = (a: number): number => {
    // Check if a is prime
    if (a < 2) {
      return 2;
    }
    for (let i = 2; i <= Math.sqrt(a); i++) {
      if (a % i === 0) {
        return task20(a + 1);
      }
    }
    return a;
  };
console.log(task20(38));
console.log(task20(7));
console.log(task20(115));
console.log(task20(2000));

// Task 21
// Write a function that takes two numbers, say x and y, as arguments
// Check if x is divisible by y
// If yes, return x
// If not, return the next higher natural number that is divisible by y

const task21 = (x: number, y: number): number => (x % y === 0 ? x : task21(x + 1, y));
console.log(task21(1, 23));
console.log(task21(23, 23));
console.log(task21(7, 3));
console.log(task21(-5, 7));

// Task 22
// Write a function that takes two strings (a and b) as arguments
// Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
// Return the resulting string

const task22 = (a: string, b: string): string => {
    let result = a;
    for (let i = a.length - 1; i >= 0; i -= 3) {
      result = result.slice(0, i + 1) + b + result.slice(i + 1);
    }
    return result;
  };
console.log(task22('1234567', '.'));
console.log(task22('abcde', '$'));
console.log(task22('zxyzxyzxyzxyzxyz', 'w'));

// Task 23
// Write a function that takes a string as argument
// As it is, the string has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word

const task23 = (str: string): string => str.split('').map((char) => {
      const code = char.charCodeAt(0);
      return code >= 97 && code <= 122 ? String.fromCharCode(code + 1) : char;
    }).join('');
console.log(task23('bnchmf'));
console.log(task23('bgddrd'));
console.log(task23('sdrshmf'));

// Task 24
// Write a function that takes an array (a) and a value (n) as argument
// Return the nth element of 'a'

const task24 = (a: number[], n: number): number => a[n - 1];
console.log(task24([1, 2, 3, 4, 5], 3));
console.log(task24([10, 9, 8, 7, 6], 5));
console.log(task24([7, 2, 1, 6, 3], 1));

// Task 25
// Write a function that takes an array (a) as argument
// Remove the first 3 elements of 'a'
// Return the result

const task25 = (a: number[]): number[] => a.slice(3);
console.log(task25([1, 2, 3, 4]));
console.log(task25([5, 4, 3, 2, 1, 0]));
console.log(task25([99, 1, 1]));

// Task 26
// Write a function that takes an array (a) as argument
// Extract the last 3 elements of a
// Return the resulting array

const task26 = (a: number[]): number[] => a.slice(-3);
console.log(task26([1, 2, 3, 4]));
console.log(task26([5, 4, 3, 2, 1, 0]));
console.log(task26([99, 1, 1]));

// Task 27
// Write a function that takes an array (a) as argument
// Extract the first 3 elements of a
// Return the resulting array

const task27 = (a: number[]): number[] => a.slice(0, 3);
console.log(task27([1, 2, 3, 4]));
console.log(task27([5, 4, 3, 2, 1, 0]));
console.log(task27([99, 1, 1]));

// Task 28
// Write a function that takes an array (a) and a number (n) as arguments
// It should return the last n elements of a

const task28 = (a: number[], n: number): number[] => a.slice(-n);
console.log(task28([1, 2, 3, 4, 5], 2));
console.log(task28([1, 2, 3], 6));
console.log(task28([1, 2, 3, 4, 5, 6, 7, 8], 3));

// Task 29
// Write a function that takes an array (a) and a value (b) as argument
// The function should clean a from all occurrences of b
// Return the filtered array

const task29 = (a: any[], b: any): any[] => a.filter((item) => item !== b);
console.log(task29([1, 2, 3], 2));
console.log(task29([1, 2, '2'], '2'));
console.log(task29([false, '2', 1], false));
console.log(task29([1, 2, '2', 1], 1));

// Task 30
// Write a function that takes an array (a) as argument
// Return the number of elements in a

const task30 = (a: any[]): number => a.length;
console.log(task30([1, 2, 2, 4]));
console.log(task30([9, 9, 9]));
console.log(task30([4, 3, 2, 1, 0]));

// Task 31
// Write a function that takes an array of numbers as argument
// Return the number of negative values in the array

const task31 = (a: number[]): number => a.filter((item) => item < 0).length;
console.log(task31([1, -2, 2, -4]));
console.log(task31([0, 9, 1]));
console.log(task31([4, -3, 2, 1, 0]));

// Task 32
// Write a function that takes an array of numbers as argument
// It should return an array with the numbers sorted in descending order
const task32 = (a: number[]): number[] => a.slice().sort((a, b) => b - a);
console.log(task32([1, 3, 2]));
console.log(task32([4, 2, 3, 1]));

// Task 33
// Write a function that takes an array of strings as argument
// Sort the array elements alphabetically
// Return the result

const task33 = (a: string[]): string[] => a.slice().sort();
console.log(task33(['b', 'c', 'd', 'a']));
console.log(task33(['z', 'c', 'd', 'a', 'y', 'a', 'w']));

// Task 34
// Write a function that takes an array of numbers as argument
// It should return the average of the numbers

const task34 = (a: number[]): number => a.reduce((sum, value) => sum + value, 0) / a.length;
console.log(task34([10, 100, 40]));
console.log(task34([10, 100, 1000]));
console.log(task34([-50, 0, 50, 200]));

// Task 35
// Write a function that takes an array of strings as argument
// Return the longest string

const task35 = (a: string[]): string => a.reduce((longest, current) => (current.length > longest.length ? current : longest), '');
console.log(task35(['help', 'me']));
console.log(task35(['I', 'need', 'candy']));

// Task 36
// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise

const task36 = (a: unknown[]): boolean => a.every((item) => item === a[0]);
console.log(task36([true, true, true, true]));
console.log(task36(['test', 'test', 'test']));
console.log(task36([1, 1, 1, 2]));
console.log(task36(['10', 10, 10, 10]));

// Task 37
// Write a function that takes arguments an arbitrary number of arrays
// It should return an array containing the values of all arrays

const task37 = (...arrays: any[][]): any[] => arrays.reduce((result, array) => result.concat(array), []);
console.log(task37([1, 2, 3], [4, 5, 6]));
console.log(task37(['a', 'b', 'c'], [4, 5, 6]));
console.log(task37([true, true], [1, 2], ['a', 'b']));

// Task 38
// Write a function that takes an array of objects as argument
// Sort the array by property b in ascending order
// Return the sorted array

const task38 = (a: { b: number }[]): { b: number }[] => a.slice().sort((a, b) => a.b - b.b);
console.log(task38([{ a: 1, b: 2 }, { a: 5, b: 4 }]));
console.log(task38([{ a: 2, b: 10 }, { a: 5, b: 4 }]));
console.log(task38([{ a: 1, b: 7 }, { a: 2, b: 1 }]));

// Task 39
// Write a function that takes two arrays as arguments
// Merge both arrays and remove duplicate values
// Sort the merge result in ascending order
// Return the resulting array

const task39 = (a: any[], b: any[]): any[] => [...new Set([...a, ...b])].sort((a, b) => a - b);
console.log(task39([1, 2, 3], [3, 4, 5]));
console.log(task39([-10, 22, 333, 42], [-11, 5, 22, 41, 42]));

// Task 40
// Write a function that takes an array (a) and a number (b) as arguments
// Sum up all array elements with a value greater than b
// Return the sum

const task40 = (a: number[], b: number): number => a.reduce((sum, value) => (value > b ? sum + value : sum), 0);
console.log(task40([1, 2, 3, 4, 5, 6, 7], 2));
console.log(task40([-10, -11, -3, 1, -4], -3));
console.log(task40([78, 99, 100, 101, 401], 99));

// Task 41
// Write a function that takes two numbers (min and max) as arguments
// Return an array of numbers in the range min to max

const task41 = (min: number, max: number): number[] => Array.from({ length: max - min + 1 }, (_, i) => min + i);
console.log(task41(2, 10));
console.log(task41(1, 3));
console.log(task41(-5, 5));
console.log(task41(2, 7));

// Task 42
// Write a function that takes an array of strings as argument
// Group those strings by their first letter
// Return an object that contains properties with keys representing first letters
// The values should be arrays of strings containing only the corresponding strings
// For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
// { a: ['Alf', 'Alice'], b: ['Ben']}

const task42 = (a: any[]): { [key: string]: string[] } => a.reduce((result, value) => {
      const firstLetter = value[0].toLowerCase();
      if (!result[firstLetter]) {
        result[firstLetter] = [value];
      } else {
        result[firstLetter].push(value);
      }
      return result;
    }, {});
console.log(task42(['Alf', 'Alice', 'Ben']));
console.log(task42(['Ant', 'Bear', 'Bird']));
console.log(task42(['Berlin', 'Paris', 'Prague']));

// Task 43
// Write a function that takes an array with arbitrary elements and a number as arguments
// Return a new array, the first element should be either the given number itself
// or zero if the number is smaller than 6
// The other elements should be the elements of the original array
// Try not to mutate the original array

const task43 = (a: any[], b: number): any[] => [b < 6 ? 0 : b, ...a];
console.log(task43([1, 2, 3], 6));
console.log(task43(['a', 'b'], 2));
console.log(task43([null, false], 11));

// Task 44
// Write a function that takes an array (a) and a value (n) as arguments
// Save every nth element in a new array
// Return the new array

const task44 = (a: number[], n: number): number[] => {
    const result = [];
    for (let i = n - 1; i < a.length; i += n) {
        result.push(a[i]);
    }
    return result;
  };
console.log(task44([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
console.log(task44([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 5));
console.log(task44([7, 2, 1, 6, 3, 4, 5, 8, 9, 10], 2));

// Task 45
// Write a function that takes an object with two properties as argument
// It should return the value of the property with key country

const task45 = (obj: { continent: string; country: string }): string => obj.country;
console.log(task45({ continent: 'Asia', country: 'Japan' }));
console.log(task45({ country: 'Sweden', continent: 'Europe' }));

// Task 46
// Write a function that takes an object with two properties as argument
// It should return the value of the property with key 'prop-2'
// Tip: you might want to use the square brackets property accessor

const task46 = (obj: { one: any; 'prop-2': any }): any => obj['prop-2'];
console.log(task46({ one: 1, 'prop-2': 2 }));
console.log(task46({ 'prop-2': 'two', prop: 'test' }));

// Task 47
// Write a function that takes an object with two properties and a string as arguments
// It should return the value of the property with key equal to the value of the string

function task47(obj: { [key: string]: any }, str: string): any {
    return obj[str];
  }
console.log(task47({ continent: 'Asia', country: 'Japan' }, 'continent'));
console.log(task47({ country: 'Sweden', continent: 'Europe' }, 'country'));

// Task 48
// Write a function that takes an object (a) and a string (b) as argument
// Return true if a has a property with key b
// Return false otherwise

function task48(a: object, b: string): boolean {
    return a.hasOwnProperty(b);
  }
console.log(task48({ a: 1, b: 2, c: 3 }, 'b'));
console.log(task48({ x: 'a', y: 'b', z: 'c' }, 'a'));
console.log(task48({ x: 'a', y: 'b', z: 'c' }, 'z'));

// Task 49
// Write a function that a string (a) as argument
// Create an object that has a property with key 'key' and a value of a
// Return the object

function task49(a: string): object {
    return { key: a };
  }
console.log(task49('a'));
console.log(task49('z'));
console.log(task49('b'));

// Task 50
// Write a function that takes two arrays (a and b) as arguments
// Create an object that has properties with keys 'a' and corresponding values 'b'
// Return the object

function task50(a: any[], b: any[]): object {
    const obj: { [key: string]: any } = {};
    for (let i = 0; i < a.length; i++) {
      obj[a[i]] = b[i];
    }
    return obj;
  }
console.log(task50(['a', 'b', 'c'], [1, 2, 3]));
console.log(task50(['w', 'x', 'y', 'z'], [10, 9, 5, 2]));
console.log(task50([1, 'b'], ['a', 2]));

// Task 51
// Write a function that takes an object (a) as argument
// Return an array with all object keys

function task51(a: object): string[] {
    return Object.keys(a);
  }
console.log(task51({ a: 1, b: 2, c: 3 }));
console.log(task51({
 j: 9, i: 2, x: 3, z: 4,
}));
console.log(task51({ w: 15, x: 22, y: 13 }));

// Task 52
// Write a function that takes an object (a) as argument
// Return the sum of all object values

function task52(a: { [key: string]: number }): number {
    let sum = 0;
    for (const key in a) {
      sum += a[key];
    }
    return sum;
  }
console.log(task52({ a: 1, b: 2, c: 3 }));
console.log(task52({
 j: 9, i: 2, x: 3, z: 4,
}));
console.log(task52({ w: 15, x: 22, y: 13 }));

// Task 53
// Write a function that takes an object as argument
// It should return an object with all original object properties
// except for the property with key 'b'

function task53(a: object): object {
    const b: { [key: string]: any } = {};
    for (const key in a) {
      if (key !== 'b') {
        b[key] = a[key];
      }
    }
    return b;
  }
console.log(task53({ a: 1, b: 7, c: 3 }));
console.log(task53({ b: 0, a: 7, d: 8 }));
console.log(task53({
 e: 6, f: 4, b: 5, a: 3,
}));

// Task 54
// Write a function that takes two objects as arguments
// Unfortunately, the property 'b' in the second object has the wrong key
// should be named 'd' instead
// Merge both objects and correct the wrong property name
// Return the resulting object
// It should have the properties 'a', 'b', 'c', 'd', and 'e'

function task54(a: object, b: object): object {
    const c: { [key: string]: any } = { ...a, ...b };
    if ('b' in b) {
      c.d = b.b;
    }
    return c;
  }
console.log(task54({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 }));
console.log(task54({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 }));

// Task 55
// Write a function that takes an object (a) and a number (b) as arguments
// Multiply all values of 'a' by 'b'
// Return the resulting object

function task55(a: { [key: string]: number }, b: number): object {
    const c: { [key: string]: number } = {};
    for (const key in a) {
      c[key] = a[key] * b;
    }
    return c;
  }
console.log(task55({ a: 1, b: 2, c: 3 }, 3));
console.log(task55({
 j: 9, i: 2, x: 3, z: 4,
}, 10));
console.log(task55({ w: 15, x: 22, y: 13 }, 6));

// Task 56
// Write a function that takes an object as argument
// Somehow, the properties and keys of the object got mixed up
// Swap the Javascript object's key with its values and return the resulting object

function task56(a: object): object {
    const b: { [key: string]: any } = {};
    for (const key in a) {
      b[a[key]] = key;
    }
    return b;
  }
console.log(task56({
 z: 'a', y: 'b', x: 'c', w: 'd',
}));
console.log(task56({
 2: 'a', 4: 'b', 6: 'c', 8: 'd',
}));
console.log(task56({ a: 1, z: 24 }));

// Task 57
// Write a function that takes an object as argument
// Some of the property values contain empty strings
// Replace empty strings and strings that contain only whitespace with null values
// Return the resulting object

function task57(a: object): object {
    const b: { [key: string]: any } = {};
    for (const key in a) {
      if (a[key] === '' || /^\s*$/.test(a[key])) {
        b[key] = null;
      } else {
        b[key] = a[key];
      }
    }
    return b;
  }
console.log(task57({ a: 'a', b: 'b', c: '' }));
console.log(task57({
 a: '', b: 'b', c: ' ', d: 'd',
}));
console.log(task57({
 a: 'a', b: 'b ', c: ' ', d: '',
}));

// Task 58
// Write a function that takes an object as argument containing properties with personal information
// Extract firstName, lastName, size, and weight if available
// If size or weight is given transform the value to a string
// Attach the unit cm to the size
// Attach the unit kg to the weight
// Return a new object with all available properties that we are interested in

function task58(a: { [key: string]: any }): { [key: string]: string | null } {
    const b: { [key: string]: string | null } = {};
    if ('fn' in a) {
      b.fn = a.fn;
    }
    if ('ln' in a) {
      b.ln = a.ln;
    }
    if ('size' in a) {
      b.size = `${a.size}cm`;
    }
    if ('weight' in a) {
      b.weight = `${a.weight}kg`;
    }
    return b;
  }
console.log(task58({
 fn: 'Lisa', ln: 'Müller', age: 17, size: 175, weight: 67,
}));
console.log(task58({
 fn: 'Martin', ln: 'Harper', age: 26, email: 'martin.harper@test.de', weight: 102,
}));
console.log(task58({
 fn: 'Andrew', ln: 'Harper', age: 81, size: 175, weight: 71,
}));
console.log(task58({
 fn: 'Matthew', ln: 'Müller', age: 19, email: 'matthew@mueller.de',
}));

// Task 59
// Write a function that takes an array of objects and a string as arguments
// Add a property with key 'continent' and value equal to the string to each of the objects
// Return the new array of objects
// Tip: try not to mutate the original array

function task59(arr: { [key: string]: any }[], continent: string): { [key: string]: any }[] {
    return arr.map((item) => ({ ...item, continent }));
  }
console.log(task59([{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia'));
console.log(task59([{ city: 'Stockholm', country: 'Sweden' }, { city: 'Paris', country: 'France' }], 'Europe'));

// Task 60
// Write a function that takes an array of numbers as argument
// Convert the array to an object
// It should have a key for each unique value of the array
// The corresponding object value should be the number of times the key occurs within the array

function task60(arr: number[]): { [key: number]: number } {
    const counts: { [key: number]: number } = {};
    arr.forEach((item) => {
      if (item in counts) {
        counts[item]++;
      } else {
        counts[item] = 1;
      }
    });
    return counts;
  }
console.log(task60([1, 2, 2, 3]));
console.log(task60([9, 9, 9, 99]));
console.log(task60([4, 3, 2, 1]));

// Task 61
// Write a function that takes two date instances as arguments
// It should return true if the dates are equal
// It should return false otherwise

const task61 = (date1: Date, date2: Date): boolean => date1.getTime() === date2.getTime();
console.log(task61(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00')));
console.log(task61(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00')));
console.log(task61(new Date('2001/01/01 08:00:00'), new Date('2000/01/01 08:00:00')));

// Task 62
// Write a function that takes two date instances as argument
// It should return the number of days that lies between those dates

const task62 = (date1: Date, date2: Date): number => {
    const oneDay = 24 * 60 * 60 * 1000; // milliseconds in one day
    const diff = Math.abs(date1.getTime() - date2.getTime());
    return Math.floor(diff / oneDay);
  };
console.log(task62(new Date('2020-06-11'), new Date('2020-06-01')));
console.log(task62(new Date('2000-01-01'), new Date('2020-06-01')));

// Task 63
// Write a function that takes two date instances as argument
// It should return true if they fall on the exact same day
// It should return false otherwise

const task63 = (date1: Date, date2: Date): boolean => date1.getFullYear() === date2.getFullYear()
    && date1.getMonth() === date2.getMonth()
    && date1.getDate() === date2.getDate();
console.log(task63(new Date('2000/01/01'), new Date('2000/01/01')));
console.log(task63(new Date('2000/01/01'), new Date('2000/01/02')));
console.log(task63(new Date('2001/01/01'), new Date('2000/01/01')));
console.log(task63(new Date('2000/11/01'), new Date('2000/01/01')));

// SPREAD OPERATOR //// SPREAD OPERATOR //// SPREAD OPERATOR //// SPREAD OPERATOR //// SPREAD OPERATOR //// SPREAD OPERATOR //// SPREAD OPERATOR //// SPREAD OPERATOR //// SPREAD OPERATOR //// SPREAD OPERATOR //

// Task 64
// Write a function that takes two number arrays as parameters
// and return an array which contains elements from both arrays

const task64 = (arr1: number[], arr2: number[]): number[] => [...arr1, ...arr2];
console.log(task64([1, 2], [3, 4]));
console.log(task64([1, 2], [3, 4, 5, 6]));

// Task 65
// Write a function that takes an array and a string as parameters
// and return an array which contains all elements from the given array
// and the given string as the last element

const task65 = (arr: string[], str: string): string[] => [...arr, str];
console.log(task65(['Apple', 'Orange', 'Banana'], 'Kiwi'));

// Task 66
// Write a function that takes an array and a string as parameters
// and return an array which contains all elements from the given array
// and the given string as the first element

const task66 = (arr: string[], str: string): string[] => [str, ...arr];
console.log(task66(['Apple', 'Orange', 'Banana'], 'Kiwi'));

// Task 67
// Write a function that takes two objects as parameters
// and return an object which contains properties from both objects

const task67 = (obj1: {[key: string]: any}, obj2: {[key: string]: any}): {[key: string]: any} => ({ ...obj1, ...obj2 });
console.log(task67({ a: 1, b: 2 }, { c: 3, d: 4 }));
console.log(task67({ a: 1, b: 2 }, { c: 3, d: 4, e: 5, f: 6 }));

// Task 68
// Write a function that takes an object and a string as parameters
// and return an object which contains properties from the given object
// and a new property favoriteMovie with the value equal to the given string

const task68 = (obj: any, str: any) => ({ ...obj, favoriteMovie: str });
console.log(task68({ eyeColor: 'green', age: 10 }, 'Garfield'));
console.log(task68({ eyeColor: 'blue', age: 15 }, 'Twilight'));
