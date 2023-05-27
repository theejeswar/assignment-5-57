// count 0's & 1's in an array using functions
function count(arr) {
    let count0 = 0;
    let count1 = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            count0++;
        }
        if (arr[i] === 1) {
            count1++;
        }
    }
    return [count0, count1];
}
let arr = [2, 0, 1, 5, 3, 1, 2, 0, 1, 0, 5];
let out1 = count(arr);
console.log(out1);

//print 10 to 1 numbers using 'for' loop
for (var i = 10; i >= 0; i--) {
    console.log(i);
}

//print the smallest number in an array using function
function small(array) {
    var smallNum = array[0];
    for (var index = 1; index < array.length; index++) {
        if (array[index] < smallNum) {
            smallNum = array[index];
        }
    }
    return smallNum;
}
let array = [5, 2, 1, 0, 3, -5, -1];
let out2 = small(array);
console.log(out2);

//print sum of all elements in an array
function sumArray(arr1) {
    let sum = arr1[0];
    for (var i = 1; i < arr1.length; i++) {
        sum = sum + arr1[i];
    }
    return sum;
}
let arr1 = [5, 6, 8, 1, 2, 9, 1, 4];
let out3 = sumArray(arr1);
console.log(out3);

//print the sum of 0th, 3rd, 6th, 9th in an array
function every(arr2) {
    let sum3 = 0;
    for (var i = 0; i < arr2.length; i++) {
        if (i % 3 == 0) {
            sum3 = sum3 + arr2[i];
        }
    }
    return sum3;
}
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let out4 = every(arr2);
console.log(out4);

//write a program to count repeated numbers in an array
function repeat(arr3, n) {
    let count = 0;
    for (var i = 0; i < arr3.length; i++) {
        if (arr3[i] === n) {
            count++;
        }
    }
    return count;
}
let arr3 = [2, 5, 2, 6, 5, 6, 8, 2, 3, 6, 7, 1];
let out5 = repeat(arr3, 2);
console.log(out5);


