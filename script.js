//ДЛЯ РЕШЕНИЯ ИСПОЛЬЗУЕМ ДВА СПОСОБА 1 - ЦИКЛЫ 2 - МЕТОДЫ МАССИВОВ
/**
 * Creates an array of integers from the specified start to end (inclusive).
 *
 * @param {number} start - The first number of an array.
 * @param {number} end - The last number of an array.
 * @return {number[]} - An array of integers.
 *
 * @example
 *    getIntervalArray(1, 5)  => [ 1, 2, 3, 4, 5 ]
 *    getIntervalArray(-2, 2)  => [ -2, -1, 0, 1, 2 ]
 *    getIntervalArray(0, 100) => [ 0, 1, 2, ..., 100 ]
 *    getIntervalArray(3, 3) => [ 3 ]
 */
function getIntervalArray_Cycle(start, end) {
    let arr = [];
    for(let i = start; i < end+1; ++i){
        arr.push(i);
    }
    return arr;
}
function getIntervalArray_Arr(start, end) {
    let len = end - start + 1;
    return Array.from({length:len}, (_, i)=>start + i);
}
// console.log(getIntervalArray_Cycle(-2, 2));
// console.log(getIntervalArray_Arr(0, 100));
/**
 * Returns a new array where each element is the sum of the corresponding elements
 * from two arrays. Arrays can have different lengths.
 *
 * @param {number[]} arr1 - The first array.
 * @param {number[]} arr2 - The second array.
 * @return {number[]} - An array containing the sum of corresponding elements.
 *
 * @example
 *    sumArrays([1, 2, 3], [4, 5, 6]) => [5, 7, 9]
 *    sumArrays([10, 20, 30], [5, 10, 15]) => [15, 30, 45]
 *    sumArrays([-1, 0, 1], [1, 2, 3, 4]) => [0, 2, 4, 4]
 */
function longest_arr(arr1, arr2){
        return arr1.length < arr2.length ? arr2 : arr1;
    }
function sumArrays_Cycle(arr1, arr2) {
    let arr = [];
    for(let i = 0; i < longest_arr(arr1, arr2).length; ++i){
        let first = arr1[i];
        let second = arr2[i];
        if(first === undefined){
            first = 0;
        }
        if(second === undefined){
            second = 0;
        }
        arr.push(first + second);
    }
    return arr;
}
function sumArrays_Arr(arr1, arr2) {
    const longestLen = (longest_arr(arr1, arr2)).length;
    return Array.from({length:longestLen}, (_, i)=>(arr1[i]||0) + (arr2[i]||0));
}
// console.log(sumArrays_Cycle([-1, 0, 1], [1, 2, 3, 4]));
// console.log(sumArrays_Arr([-1, 0, 1], [1, 2, 3, 4]));
/**
 * Returns an index of the specified element in array or -1 if element is not found.
 *
 * @param {any[]} arr - The input array.
 * @param {any} value - Element to search.
 * @return {number} - An index of the specified element.
 *
 * @example
 *    findElement(['Ace', 10, true], 10) => 1
 *    findElement(['Array', 'Number', 'string'], 'Date') => -1
 *    findElement([0, 1, 2, 3, 4, 5], 5) => 5
 */
function findElement_Cycle(arr, value) {
    for(let i = 0; i < arr.length; ++i){
        if (arr[i] === value){
            return i;
        }
    }
    return -1;
}
function findElement_Arr(arr, value) {
    const index = arr.indexOf(value)
    return index;
}
// console.log(findElement_Cycle(['Ace', 10, true], false));
// console.log(findElement_Arr(['Ace', 10, true], false));
/**
 * Returns a number of all occurrences of the specified item in an array.
 *
 * @param {any[]} arr - The input array.
 * @param {any} item - Element to search.
 * @return {number} - Number of found items.
 *
 * @example
 *    findAllOccurrences([ 0, 0, 1, 1, 1, 2 ], 1) => 3
 *    findAllOccurrences([ 1, 2, 3, 4, 5 ], 0) => 0
 *    findAllOccurrences([ 'a','b','c','c' ], 'c') => 2
 *    findAllOccurrences([ null, undefined, null ], null) => 2
 *    findAllOccurrences([ true, 0, 1, 'true' ], true) => 1
 */
function findAllOccurrences_Cycle(arr, item) {
    let counter = 0;
    for(let i = 0; i < arr.length; ++i){
        if(arr[i] === item){
            counter += 1;
        }
    }
    return counter;
}
function findAllOccurrences_Arr(arr, item) {
    let counter = arr.filter(x=>x===item).length;
    return counter;
}
// console.log(findAllOccurrences_Cycle([ 0, 0, 1, 1, 1, 2 ], 1));
// console.log(findAllOccurrences_Arr([ 0, 0, 1, 1, 1, 2 ], 1));
/**
 * Removes falsy values from the specified array.
 * Falsy values: false, null, 0, "", undefined, and NaN.
 *
 * @param {any[]} arr - The input array.
 * @return {any[]} - The array without falsy values.
 *
 * @example
 *    removeFalsyValues([ 0, false, 'cat', NaN, true, '' ]) => [ 'cat', true ]
 *    removeFalsyValues([ 1, 2, 3, 4, 5, 'false' ]) => [ 1, 2, 3, 4, 5, 'false' ]
 *    removeFalsyValues([ false, 0, NaN, '', undefined ]) => [ ]
 */
const FalsyValues = [ false, 0, NaN, '', undefined, null ]
function removeFalsyValues_Cycle(arr) {
    let clean = [];
    for(let i = 0; i < arr.length; ++i){
        if(!FalsyValues.includes(arr[i])){
            clean.push(arr[i]);
        }
    }
    return clean;
}
function removeFalsyValues_Arr(arr) {
    return arr.filter(Boolean);
}
// console.log(removeFalsyValues_Cycle([ false, 0, NaN, '', undefined ]));
// console.log(removeFalsyValues_Cycle([ 1, 2, 3, 4, 5, 'false' ]));
// console.log(removeFalsyValues_Arr([ false, 0, NaN, '', undefined ]));
/**
 * Returns an array containing the lengths of each string in a specified array of strings.
 *
 * @param {string[]} arr - The input array.
 * @return {number[]} - The array of string lengths.
 *
 * @example
 *    getStringsLength([ '', 'a', 'bc', 'def', 'ghij' ]) => [ 0, 1, 2, 3, 4 ]
 *    getStringsLength([ 'angular', 'react', 'ember' ]) => [ 7, 5, 5 ]
 */
function getStringsLength_Cycle(arr) {
    let arrM = []
    for(let i = 0; i < arr.length; ++i){
        arrM.push(String(arr[i]).length);
    }
    return arrM;
}
function getStringsLength_Arr(arr) {
    const lens = arr.map(i => i.length)
    return lens;
}
// console.log(getStringsLength_Cycle([ '', 'a', 'bc', 'def', 'ghij' ]))
// console.log(getStringsLength_Arr([ '', 'a', 'bc', 'def', 'ghij' ]))
/**
 * Returns the average of all items in the specified array of numbers.
 * The result should be rounded to two decimal places.
 *
 * @param {number[]} arr - The input array
 * @return {number} - The average of all items
 *
 * @example
 *   getAverage([]) => 0
 *   getAverage([ 1, 2, 3 ]) => 2
 *   getAverage([ -1, 1, -1, 1 ]) => 0
 *   getAverage([ 1, 10, 100, 1000 ])  => 277,75
 *   getAverage([ 2, 3, 3 ])  => 2,67
 */
function getAverage_Cycle(arr){
    let res = 0;
    for(let i = 0; i < arr.length; ++i){
        res+=arr[i];
    }
    const mid = res/arr.length;
    return mid.toFixed(2);
}
function getAverage_Arr(arr) {
    const res = arr.reduce((x, y)=>x+y);
    return (res/arr.length).toFixed(2);
}
// console.log(getAverage_Cycle([ -1, 1, -1, 2 ]));
// console.log(getAverage_Arr([ -1, 1, -1, 2 ]));
/**
 * Checks if all strings in an array have the same length.
 *
 * @param {string[]} arr - The array of strings to be checked.
 * @return {boolean} - True if all strings have the same length, false otherwise.
 *
 * @example
 *    isSameLength(['orange', 'banana', 'cherry']) => true
 *    isSameLength(['cat', 'dog', 'elephant']) => false
 */
function isSameLength_Cycle(arr) {
    const firstLen = arr[0].length;
    for(let i = 0; i < arr.length; ++i){
        if(firstLen !== arr[i].length){
            return false;
        }
    }
    return true;
}
function isSameLength_Arr(arr) {
    const firstLength = arr[0].length;
    return arr.every(item => item.length === firstLength);
}
// console.log(isSameLength_Cycle(['cat', 'dog', 'elephant']));
// console.log(isSameLength_Arr(['cat', 'dog', 'ele']));
/**
 * Checks if there are elements in the array where the value is equal to its index.
 *
 * @param {number[]} arr - The array of elements to be checked.
 * @return {boolean} - True if there are elements with value equal to their index, false otherwise.
 *
 * @example
 *    isValueEqualsIndex([0, 1, 2, 3, 4]) => true
 *    isValueEqualsIndex([2, 1, 0, 4, 5]) => true
 *    isValueEqualsIndex([10, 20, 30, 40, 50]) => false
 */
function isValueEqualsIndex_Cycle(arr) {
    for(let i = 0; i < arr.length; ++i){
        if(arr[i]!=i){
            return false;
        }
    }
    return true;
}
function isValueEqualsIndex_Arr(arr) {
    return arr.every((value, index)=>value === index);
}
// console.log(isValueEqualsIndex_Cycle([2, 1, 0, 4, 5]));
// console.log(isValueEqualsIndex_Arr([2, 1, 0, 4, 5]));
/**
 * Inserts the item into specified array at specified index.
 *
 * @param {any[]} arr - The input array.
 * @param {any} item - The item to insert.
 * @param {number} index - Specified index.
 * @return {any[]}
 *
 * @example
 *    insertItem([ 1, 3, 4, 5 ], 2, 1)  => [ 1, 2, 3, 4, 5 ]
 *    insertItem([ 1, 'b', 'c'], 'x', 0) => [ 'x', 1, 'b', 'c' ]
 */
function insertItem_Cycle(arr, item, index) {
    let res = [];
    for(let i = 0; i < index; ++i){
        res.push(arr[i]);
    }
    res.push(item)
    for(let i = index; i < arr.length; ++i){
        res.push(arr[i]);
    }
    return res;
}
function insertItem_Arr(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
}
// console.log(insertItem_Cycle([ 1, 3, 4, 5 ], 2, 1))
// console.log(insertItem_Arr([ 1, 3, 4, 5 ], 2, 1))
/**
 * Returns the n first items of the specified array.
 *
 * @param {any[]} arr - The input array.
 * @param {number} n - Number of items.
 * @return {any[]}
 *
 * @example
 *    getHead([ 1, 3, 4, 5 ], 2) => [ 1, 3 ]
 *    getHead([ 'a', 'b', 'c', 'd'], 3) => [ 'a', 'b', 'c' ]
 *    getHead([ 'a', 'b', 'c', 'd'], 0) => []
 */
function getHead_Cycle(arr, n) {
    let res = [];
    for(let i = 0; i < n; ++i){
        res.push(arr[i])
    }
    return res;
}
function getHead_Arr(arr, n) {
    return arr.slice(0, n);
}
// console.log(getHead_Cycle([ 'a', 'b', 'c', 'd'], 3))
// console.log(getHead_Arr([ 'a', 'b', 'c', 'd'], 3))
/**
 * Returns the n last items of the specified array.
 *
 * @param {any[]} arr - The input array.
 * @param {number} n - Number of items.
 * @return {any[]}
 *
 * @example
 *    getTail([ 1, 3, 4, 5 ], 2) => [ 4, 5 ]
 *    getTail([ 'a', 'b', 'c', 'd'], 3) => [ 'b', 'c', 'd' ]
 *    getTail([ 'a', 'b', 'c', 'd'], 0) => []
 */
function getTail_Cycle(arr, n) {
    let res = [];
    arr.reverse()
    for(let i = 0; i < n; ++i){
        res.push(arr[i])
    }
    return res.reverse();
}
function getTail_Arr(arr, n) {
    return n <= 0 ? [] : arr.slice(-n);
}
// console.log(getTail_Cycle([ 'a', 'b', 'c', 'd'], 3));
// console.log(getTail_Arr([ 'a', 'b', 'c', 'd'], 3));
/**
 * Returns the doubled array - elements of the specified array
 * are repeated twice using original order.
 *
 * @param {any[]} arr - The input array.
 * @return {any[]} - The doubled array.
 *
 * @example
 *    doubleArray(['Ace', 10, true])  => ['Ace', 10, true, 'Ace', 10, true]
 *    doubleArray([0, 1, 2, 3, 4, 5]) => [0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5]
 *    doubleArray([]) => []
 */
function doubleArray_Cycle(arr) {
    let res = [];
    for(let i = 0; i < arr.length; ++i){
        res.push(arr[i]);
    }
    for(let i = 0; i < arr.length; ++i){
        res.push(arr[i]);
    }
    return res;
}
function doubleArray_Arr(arr) {
    return arr.concat(arr)
}
// console.log(doubleArray_Cycle(['Ace', 10, true]));
// console.log(doubleArray_Arr(['Ace', 10, true]));
/**
 * Concatenates all elements from specified array into single string with ',' delimiter.
 *
 * @param {any[]} arr - The input array.
 * @return {string} - The concatenated string.
 *
 * @example
 *    toStringList([0, false, 'cat', NaN, true, '']) => '0,false,cat,NaN,true,'
 *    toStringList([1, 2, 3, 4, 5]) => '1,2,3,4,5'
 *    toStringList(['rock', 'paper', 'scissors']) => 'rock,paper,scissors'
 */
function toStringList_Cycle(arr) {
    let str = '';
    for(let i = 0; i < arr.length; ++i){
        str+=String(arr[i]);
        str+=',';
    }
    return str.slice(0,str.length-2);
}
function toStringList_Arr(arr) {
    return String(arr);
}
// console.log(toStringList_Cycle([0, false, 'cat', NaN, true, '']))
// console.log(toStringList_Arr([0, false, 'cat', NaN, true, '']))
/**
 * Returns array containing only unique values from the specified array.
 *
 * @param {any[]} arr - The input array.
 * @return {any[]} - The array with unique values.
 *
 * @example
 *   distinct([ 1, 2, 3, 3, 2, 1 ]) => [ 1, 2, 3 ]
 *   distinct([ 'a', 'a', 'a', 'a' ])  => [ 'a' ]
 *   distinct([ 1, 1, 2, 2, 3, 3, 4, 4]) => [ 1, 2, 3, 4]
 *   distinct([]) => []
 */
function distinct_Cycle(arr) {
    let res = [];
    let was = [];
    for(let i = 0; i < arr.length; ++i){
        let current = arr[i];
        if(!was[current]){
            res.push(current);
            was[current] = true;
        }
    }
    return res
}
function distinct_Arr(arr) {
    return [...new Set(arr)]
}
// console.log(distinct_Cycle([ 1, 2, 3, 3, 2, 1 ]));
// console.log(distinct_Arr([ 1, 2, 3, 3, 2, 1 ]));
/**
 * Creates an n-dimensional array and fills it with zeros.
 *
 * @param {number} n - Depth of outter array (n > 0).
 * @param {number} size - Length of all arrays (size > 0).
 * @return {any[]} - The n-dimensional array filled with zeros.
 *
 * @example
 *    createNDimensionalArray(2, 3) => [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
 *    createNDimensionalArray(3, 2) => [[[0, 0], [0, 0]], [[0, 0], [0, 0]]]
 *    createNDimensionalArray(4, 2) => [[[[0, 0], [0, 0]], [[0, 0], [0, 0]]], [[[0, 0], [0, 0]], [[0, 0], [0, 0]]]]
 *    createNDimensionalArray(1, 1) => [0]
 */
function createNDimensionalArray_Cycle(n, size) {
    let model = [];
    for(let i = 0; i < size; ++i){
        model.push(0)
    }
    for(let j = 1; j < n; ++j){
        let deep = [];
        for(let i = 0; i < size; ++i){
            deep.push([...model])
        }
        model = deep;
    }
    return model;
}
function createNDimensionalArray_Arr(n, size) {
    if (n === 1) {
        return Array(size).fill(0);
    }
    return Array.from({length: size}, () => createNDimensionalArray_Arr(n-1, size));
}
// console.log(createNDimensionalArray_Cycle(2, 3))
// console.log(createNDimensionalArray_Arr(2, 3))

/**
 * Flattens a nested array into a single-level array.
 *
 * @param {any[]} nestedArray - The nested array to be flattened.
 * @return {any[]} - A single-level array.
 *
 * @example
 *    flattenArray([1, [2, [3, 4], 5], 6]) => [1, 2, 3, 4, 5, 6]
 *    flattenArray(['a', ['b', ['c', 'd'], 'e'], 'f']) => ['a', 'b', 'c', 'd', 'e', 'f']
 *    flattenArray([1, 2, 3, 4]) => [1, 2, 3, 4]
 */
function flattenArray_Cycle(nestedArray) {
    let que = [...nestedArray];
    let res = [];
    while (que.length > 0) {
        let next = que.pop();
        if (Array.isArray(next)){
            for (let i = 0; i < next.length; ++i){
                que.push(next[i]);
            }
        } 
        else{
            res.unshift(next);
        }
    }
    return res;
}
function flattenArray_Arr(nestedArray) {
    return nestedArray.flat(Infinity);
}
// console.log(flattenArray_Cycle(['a', ['b', ['c', 'd'], 'e'], 'f']));
// console.log(flattenArray_Arr(['a', ['b', ['c', 'd'], 'e'], 'f']));
/**
 * Projects each element of the specified array to a sequence
 * and flattens the resulting sequences into one array.
 *
 * @param {any[]} arr - The input array
 * @param {Function} childrenSelector - A transform function to apply to each element
 *                                     that returns an array of children
 * @return {any[]} - The flatted array
 *
 * @example
 *   selectMany([[1, 2], [3, 4], [5, 6]], (x) => x) =>   [ 1, 2, 3, 4, 5, 6 ]
 *   selectMany(['one','two','three'], (x) => x.split('')) =>   ['o','n','e','t','w','o','t','h','r','e','e']
 */
function selectMany_Cycle(arr, childrenSelector) {
    let result = [];
    for (let i = 0; i < arr.length; ++i){
        let children = childrenSelector(arr[i]);
        for (let j = 0; j < children.length; ++j){
            result.push(children[j]);
        }
    }
    return result;
}
function selectMany_Arr(arr, childrenSelector) {
    return arr.flatMap(childrenSelector);
}
// console.log(selectMany_Cycle(['one','two','three'], (x)=> x.split('')))
// console.log(selectMany_Arr(['one','two','three'], (x)=> x.split('')))
/**
 * Every month, you record your income and expenses.
 * Expenses may be greater than income.
 * You need to calculate the final balance.
 *
 * @param {number[][]} arr - The input array [[income, expence], ...]
 * @return {number} - The final balance.
 *
 * @example
 *   calculateBalance([ [ 10, 8 ], [ 5, 1 ] ]) => (10 - 8) + (5 - 1) = 2 + 4 = 6
 *   calculateBalance([ [ 10, 8 ], [ 1, 5 ] ])  => (10 - 8) + (1 - 5) = 2 + -4 = -2
 *   calculateBalance([]) => 0
 */
function calculateBalance_Cycle(arr) {
    let balance = 0;
    for (let i = 0; i < arr.length; ++i){
        let income = arr[i][0];
        let expense = arr[i][1];
        balance += (income - expense);
    }
    return balance;
}
function calculateBalance_Arr(arr) {
    return arr.reduce((balance, [income, expense]) => balance + (income - expense), 0);
}
// console.log(calculateBalance_Cycle([ [ 10, 8 ], [ 5, 1 ] ]))
// console.log(calculateBalance_Arr([ [ 10, 8 ], [ 5, 1 ] ]))
/**
 * Breaks an array into chunks of the specified size.
 *
 * @param {any[]} arr - The array to be broken into chunks.
 * @param {number} chunkSize - The size of each chunk.
 * @return {any[]} - An array of chunks.
 *
 * @example
 *    createChunks([1, 2, 3, 4, 5, 6, 7], 3) => [[1, 2, 3], [4, 5, 6], [7]]
 *    createChunks(['a', 'b', 'c', 'd', 'e'], 2) => [['a', 'b'], ['c', 'd'], ['e']]
 *    createChunks([10, 20, 30, 40, 50], 1) => [[10], [20], [30], [40], [50]]
 */
function createChunks_Cycle(arr, chunkSize) {
    let result = [];
    for (let i = 0; i < arr.length; i += chunkSize){
        let chunk = arr.slice(i, i + chunkSize);
        result.push(chunk);
    }
    return result;
}
function createChunks_Arr(arr, chunkSize) {
    let chunksCount = Math.ceil(arr.length / chunkSize);
    return Array.from({length:chunksCount}, (_, index) => {
        let start = index * chunkSize;
        return arr.slice(start, start + chunkSize);
    });
}
// console.log(createChunks_Cycle(['a', 'b', 'c', 'd', 'e'], 2))
// console.log(createChunks_Arr(['a', 'b', 'c', 'd', 'e'], 2))
/**
 * Generates an array of odd numbers of the specified length.
 *
 * @param {number} len - The length of an array.
 * @return {number[]} - An array of odd numbers.
 *
 * @example
 *    generateOdds(0) => []
 *    generateOdds(1) => [ 1 ]
 *    generateOdds(2) => [ 1, 3 ]
 *    generateOdds(5) => [ 1, 3, 5, 7, 9 ]
 */
function generateOdds_Cycle(len) {
    let res = [];
    for (let i = 1; i < 2*len+1; i+=2){
        res.push(i);
    }
    return res;
}
function generateOdds_Arr(len) {
    return Array.from({length:len}, (_,i)=>2*i+1);
}
// console.log(generateOdds_Cycle(5))
// console.log(generateOdds_Arr(5))
/**
 * Returns an element from the multidimensional array by the specified indices.
 *
 * @param {any[]} arr - The input multidimensional array
 * @param {number[]} indices - The array of indices
 * @return {any} - An element from the array
 *
 * @example
 *   getElementByIndices([[1, 2], [3, 4], [5, 6]], [0,0]) => 1        (arr[0][0])
 *   getElementByIndices(['one','two','three'], [2]) => 'three'  (arr[2])
 *   getElementByIndices([[[ 1, 2, 3]]], [ 0, 0, 1 ]) => 2        (arr[0][0][1])
 */
function getElementByIndices_Cycle(arr, indices) {
    let current = arr;
    for (let i = 0; i < indices.length; ++i) {
        let index = indices[i];
        current = current[index];
    }
    return current;
}
function getElementByIndices_Arr(arr, indices) {
    return indices.reduce((res, idx) => res[idx], arr);
}
// console.log(getElementByIndices_Cycle(['one','two','three'], [2]))
// console.log(getElementByIndices_Arr(['one','two','three'], [2]))
/**
 * Returns the number of all falsy values in the specified array.
 *
 * @param {any[]} arr - The input array.
 * @return {number} - The number of all falsy values.
 *
 * @example
 *  getFalsyValuesCount([]) => 0
 *  getFalsyValuesCount([ 1, '', 3 ]) => 1
 *  getFalsyValuesCount([ -1, 'false', null, 0 ]) => 2
 *  getFalsyValuesCount([ null, undefined, NaN, false, 0, '' ]) => 6
 */
function getFalsyValuesCount_Cycle(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; ++i){
        if (!arr[i]){
            count++;
        }
    }
    return count;
}
function getFalsyValuesCount_Arr(arr) {
    return arr.filter(value => !value).length;
}
// console.log(getFalsyValuesCount_Cycle([ null, undefined, NaN, false, 0, '' ]));
// console.log(getFalsyValuesCount_Arr([ null, undefined, NaN, false, 0, '' ]));
/**
 * Creates an identity matrix of the specified size.
 *
 * @param {number} n - A size of the matrix.
 * @return {number[][]} - An identity matrix.
 *
 * @example
 *     getIdentityMatrix(1)  => [[1]]
 *
 *     getIdentityMatrix(2) => [[1,0],
 *                             [0,1]]
 *
 *                              [[1,0,0,0,0],
 *                              [0,1,0,0,0],
 *     getIdentityMatrix(5) =>  [0,0,1,0,0],
 *                              [0,0,0,1,0],
 *                              [0,0,0,0,1]]
 */
function getIdentityMatrix_Cycle(n) {
    let matrix = [];
    for (let i = 0; i < n; ++i){
        let row = [];
        for (let j = 0; j < n; ++j){
            if (i === j){
                row.push(1);
            } 
            else{
                row.push(0);
            }
        }
        matrix.push(row);
    }
    return matrix;
}
function getIdentityMatrix_Arr(n) {
    return Array.from({length:n}, (_, i)=>Array.from({length:n}, (_, j)=>(i === j ? 1 : 0)));
}
// console.log(getIdentityMatrix_Cycle(2))
// console.log(getIdentityMatrix_Arr(2))
/**
 * Returns an array containing indices of odd elements in the input array.
 *
 * @param {number[]} numbers - The array of numbers.
 * @return {number[]} - An array containing indices of odd elements.
 *
 * @example
 *    getIndicesOfOddNumbers([1, 2, 3, 4, 5]) => [0, 2, 4]
 *    getIndicesOfOddNumbers([2, 4, 6, 8, 10]) => []
 *    getIndicesOfOddNumbers([11, 22, 33, 44, 55]) => [0, 2, 4]
 */
function getIndicesOfOddNumbers() {
}
/**
 * Returns the array of RGB Hex strings from the specified array of numbers.
 *
 * @param {number[]} arr - The input array.
 * @return {string[]} - The array of RGB Hex strings.
 *
 * @example
 *    getHexRGBValues([ 0, 255, 16777215]) => [ '#000000', '#0000FF', '#FFFFFF' ]
 *    getHexRGBValues([]) => []
 */
function getHexRGBValues_Cycle(arr) {
    let result = [];
    for (let i = 0; i < arr.length; ++i) {
        let hex = arr[i].toString(16).toUpperCase().padStart(6, '0');
        result.push('#' + hex);
    }
    return result;
}
function getHexRGBValues_Arr(arr) {
    return arr.map(num => '#' + num.toString(16).toUpperCase().padStart(6, '0'));
}
// console.log(getHexRGBValues_Cycle([ 0, 255, 16777215]))
// console.log(getHexRGBValues_Arr([ 0, 255, 16777215]))
/**
 * Returns the n largest values from the specified array
 *
 * @param {number[]} arr - The input array
 * @param {number} n - Number of maximum values.
 * @return {number[]} - n largest values.
 *
 * @example
 *   getMaxItems([], 5) => []
 *   getMaxItems([ 1, 2 ], 1) => [ 2]
 *   getMaxItems([ 2, 3, 1 ], 2) => [ 3, 2]
 *   getMaxItems([ 10, 2, 7, 5, 3, -5 ], 3) => [ 10, 7, 5 ]
 *   getMaxItems([ 10, 10, 10, 10 ], 3) => [ 10, 10, 10 ]
 */
function getMaxItems_Cycle(arr, n) {
    let res = [];
    let pool = [...arr]; 
    let lim = Math.min(n, pool.length);
    for (let i = 0; i < lim; ++i) {
        let maxIndex = 0;
        for (let j = 1; j < pool.length; ++j) {
            if (pool[j] > pool[maxIndex]) {
                maxIndex = j;
            }
        }
        res.push(pool[maxIndex]);
        pool.splice(maxIndex, 1);
    }
    return res;
}
function getMaxItems_Arr(arr, n) {
    return [...arr].sort((a, b) => b - a).slice(0, n);
}
// console.log(getMaxItems_Cycle([ 10, 10, 10, 10 ], 3))
// console.log(getMaxItems_Arr([ 10, 10, 10, 10 ], 3))
/**
 * Finds and returns an array containing only the common elements found in two arrays.
 *
 * @param {any[]} arr1 - The first array.
 * @param {any[]} arr2 - The second array.
 * @return {any[]} - An array containing common elements.
 *
 * @example
 *    findCommonElements([1, 2, 3], [2, 3, 4]) => [ 2, 3 ]
 *    findCommonElements(['a', 'b', 'c'], ['b', 'c', 'd']) => [ 'b', 'c' ]
 *    findCommonElements([1, 2, 3], ['a', 'b', 'c']) => []
 */
function findCommonElements_Cycle(arr1, arr2) {
    let result = [];
    let set2 = new Set(arr2);
    for (let i = 0; i < arr1.length; ++i) {
        let element = arr1[i];
        if (set2.has(element) && !result.includes(element)) {
            result.push(element);
        }
    }
    return result;
}
function findCommonElements_Arr(arr1, arr2) {
    let set2 = new Set(arr2);
    let common = arr1.filter(item => set2.has(item));
    return [...new Set(common)];
}
// console.log(findCommonElements_Arr([1, 2, 3], [2, 3, 4]))
// console.log(findCommonElements_Cycle([1, 2, 3], [2, 3, 4]))
/**
 * Finds the length of the longest increasing and uninterrupted subsequence of a given array of integers.
 *
 * @param {number[]} nums - The array of integers.
 * @return {number} - The length of the longest increasing subsequence.
 *
 * @example
 *    findLongestIncreasingSubsequence([10, 22, 9, 33, 21, 50, 41, 60, 80]) => longest is [41, 60, 80] => 3
 *    findLongestIncreasingSubsequence([3, 10, 2, 1, 20]) => longest is [3, 10] and [1, 20] => 2
 *    findLongestIncreasingSubsequence([50, 3, 10, 7, 40, 80]) => longest is [7, 40, 80] => 3
 */
function findLongestIncreasingSubsequence_Cycle(nums) {
    if (nums.length === 0){
        return 0;
    } 
    let maxLen = 1;
    let currentLen = 1;
    for (let i = 1; i < nums.length; ++i) {
        if (nums[i] > nums[i - 1]) {
            currentLen++;
        }
        else {
            maxLen = Math.max(maxLen, currentLen);
            currentLen = 1;
        }
    }
    return Math.max(maxLen, currentLen);
}
function findLongestIncreasingSubsequence_Arr(nums) {
    if (nums.length === 0) return 0;
    const result = nums.reduce((acc, currentVal, index) => {
        if (index === 0){
           return acc;
        }
        const isIncreasing = currentVal > nums[index - 1];
        const nextCurrent = isIncreasing ? acc.current + 1 : 1;
        const nextMax = Math.max(acc.max, nextCurrent);
        return { max: nextMax, current: nextCurrent };
    }, { max: 1, current: 1 });
    return result.max;
}
// console.log(findLongestIncreasingSubsequence_Cycle([3, 10, 2, 1, 20]))
// console.log(findLongestIncreasingSubsequence_Arr([3, 10, 2, 1, 20]))
/**
 * Propagates every item in sequence its position times
 * Returns an array that consists of: one first item, two second items, three third items etc.
 *
 * @param {any[]} arr - The input array
 * @return {any[]}
 *
 * @example :
 *  propagateItemsByPositionIndex([]) => []
 *  propagateItemsByPositionIndex([ 1 ]) => [ 1 ]
 *  propagateItemsByPositionIndex([ 'a', 'b' ]) => [ 'a', 'b','b' ]
 *  propagateItemsByPositionIndex([ 'a', 'b', 'c', null ]) => [ 'a', 'b', 'b', 'c', 'c', 'c',  null, null, null, null ]
 *  propagateItemsByPositionIndex([ 1,2,3,4,5 ]) => [ 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5 ]
 */
function propagateItemsByPositionIndex_Cycle(arr) {
    let result = [];
    for (let i = 0; i < arr.length; ++i) {
        let count = i + 1;
        for (let j = 0; j < count; ++j) {
            result.push(arr[i]);
        }
    }
    return result;
}
function propagateItemsByPositionIndex_Arr(arr) {
    return arr.flatMap((item, i) => Array(i + 1).fill(item));
}
// console.log(propagateItemsByPositionIndex_Cycle([ 'a', 'b', 'c', null ]))
// console.log(propagateItemsByPositionIndex_Arr([ 'a', 'b', 'c', null ]))
/**
 * Shifts an array by n positions. If n is negative, the array is shifted to the left;
 * if positive, it is shifted to the right.
 *
 * @param {any[]} arr - The array to be shifted.
 * @param {number} n - The number of positions to shift the array elements.
 * @return {any[]} - The shifted array.
 *
 * @example
 *    shiftArray([1, 2, 3, 4, 5], 2) => [4, 5, 1, 2, 3]
 *    shiftArray(['a', 'b', 'c', 'd'], -1) => ['b', 'c', 'd', 'a']
 *    shiftArray([10, 20, 30, 40, 50], -3) => [40, 50, 10, 20, 30]
 */
function shiftArray_Cycle(arr,n) {
    if (arr.length === 0) return [];
    let result = [...arr];
    let steps = n % result.length;
    if (steps > 0){
        for (let i = 0; i < steps; ++i) {
            let last = result.pop();
            result.unshift(last);
        }
    }
    else if (steps < 0){
        for (let i = 0; i < Math.abs(steps); ++i){
            let first = result.shift();
            result.push(first);
        }
    }
    return result;
}
function shiftArray_Arr(arr, n) {
    if (arr.length === 0) return [];
    let k = (n % arr.length + arr.length) % arr.length;
    let splitIndex = arr.length - k;
    return [...arr.slice(splitIndex), ...arr.slice(0, splitIndex)];
}
// console.log(shiftArray_Cycle([ 'a', 'b', 'c', null ], 2))
// console.log(shiftArray_Arr([ 'a', 'b', 'c', null ], 2))
/**
 * Sorts digit names.
 *
 * @param {string[]} arr - The input array.
 * @return {string[]} - Sorted array.
 *
 * @example
 *   sortDigitNamesByNumericOrder([]) => []
 *   sortDigitNamesByNumericOrder([ 'nine','one' ]) => [ 'one', 'nine' ]
 *   sortDigitNamesByNumericOrder([ 'one','two','three' ]) => [ 'one','two', 'three' ]
 *   sortDigitNamesByNumericOrder([ 'nine','eight','nine','eight' ]) => [ 'eight','eight','nine','nine']
 *   sortDigitNamesByNumericOrder([ 'one','one','one','zero' ]) => [ 'zero','one','one','one' ]
 */
function sortDigitNamesByNumericOrder() {
}
/**
 * Swaps the head and tail of the specified array:
 * the head (first half) of array move to the end, the tail (last half) move to the start.
 * The middle element (if exists) leave on the same position. *
 *
 * @param {any[]} arr - The input array.
 * @return {any[]} - The swapped array.
 *
 * @example
 *   [ 1, 2, 3, 4, 5 ]   =>  [ 4, 5, 3, 1, 2 ]
 *    \----/   \----/
 *     head     tail
 *
 *   swapHeadAndTail([ 1, 2 ]) => [ 2, 1 ]
 *   swapHeadAndTail([ 1, 2, 3, 4, 5, 6, 7, 8 ]) =>  [ 5, 6, 7, 8, 1, 2, 3, 4 ]
 *   swapHeadAndTail([ 1 ]) => [ 1 ]
 *   swapHeadAndTail([]) => []
 *
 */
function swapHeadAndTail() {
}
