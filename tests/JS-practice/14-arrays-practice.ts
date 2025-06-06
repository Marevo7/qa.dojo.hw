// 1 task - check if it's array
const ifArray = (input: any): boolean => Array.isArray(input)

console.log(ifArray(2))

// 2 task - clone array
function cloneArray(input) {
    return input.slice(0)
}

console.log(cloneArray([1, 2, 3, 4]))

// 3 task - return first N elements of array
function firstElements(arr: number[], num: number) {
    return arr.slice(0, num)
}
console.log(firstElements([1,2, 3, 4], 3))

function firstElementsReduce(arr, num) {
    return arr.reduce(function(acc, nextValue, index) {
        if (index < num) {
            acc.push(nextValue);
        }
        return acc;
    }, []);
}

console.log(firstElementsReduce([1, 2, 3, 4, 5], 3))

function firstElementsFilter(arr: number[], num: number): number[] {
    return arr.filter((_, index) => index < num);
}
console.log(firstElementsFilter([1, 2, 3, 4, 5], 3))


// 4 task - return last N elements of array

function lastElements(arr: number[], num: number) {
     return arr.slice(-num)
   
}
console.log(lastElements([1, 2, 3, 4], 2))

// 5 task - return string from Array

const stringFromArray = arr => arr.toString()

console.log(stringFromArray(['hello', 1, 'prince']))