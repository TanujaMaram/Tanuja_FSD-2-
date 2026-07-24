"use strict";
{
    let n = 1234;
    let sum = 0;
    while (n > 0) {
        let digit = n % 10;
        sum = sum + digit;
        n = Math.floor(n / 10);
    }
    console.log("Sum of digits:", sum);
}
{
    let decimal = 10;
    let binary = decimal.toString(2);
    console.log("Decimal:", decimal);
    console.log("Binary:", binary);
}
{
    let binary = "1010";
    let decimal = parseInt(binary, 2);
    console.log("Binary:", binary);
    console.log("Decimal:", decimal);
}
{
    let text = "hello";
    let frequency = {};
    for (let char of text) {
        if (frequency[char]) {
            frequency[char]++;
        }
        else {
            frequency[char] = 1;
        }
    }
    console.log("Character Frequency:");
    for (let char in frequency) {
        console.log(char, ":", frequency[char]);
    }
}
{
    let text = "programming";
    let result = "";
    for (let char of text) {
        if (!result.includes(char)) {
            result = result + char;
        }
    }
    console.log("Original String:", text);
    console.log("After Removing Duplicates:", result);
}
{
    let numbers = [10, 20, 5, 30, 40];
    numbers.sort((a, b) => b - a);
    console.log("Array:", numbers);
    console.log("Second Largest Number:", numbers[1]);
}
