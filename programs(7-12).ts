
{
    let n: number = 1234;
    let sum: number = 0;

    while (n > 0) {
        let digit: number = n % 10;
        sum = sum + digit;
        n = Math.floor(n / 10);
    }

    console.log("Sum of digits:", sum);
}
{
    let decimal: number = 10;
    let binary: string = decimal.toString(2);
    console.log("Decimal:", decimal);
    console.log("Binary:", binary);
}
{
    let binary: string = "1010";
    let decimal: number = parseInt(binary, 2);
    console.log("Binary:", binary);
    console.log("Decimal:", decimal);
}
{
    let text: string = "hello";
    let frequency: { [key: string]: number } = {};
    for (let char of text) {
        if (frequency[char]) {
            frequency[char]++;
        } else {
            frequency[char] = 1;
        }
    }
    console.log("Character Frequency:");
    for (let char in frequency) {
        console.log(char, ":", frequency[char]);
    }
}
{
    let text: string = "programming";
    let result: string = "";
    for (let char of text) {
        if (!result.includes(char)) {
            result = result + char;
        }
    }
    console.log("Original String:", text);
    console.log("After Removing Duplicates:", result);
}
{
    let numbers: number[] = [10, 20, 5, 30, 40];
    numbers.sort((a, b) => b - a);
    console.log("Array:", numbers);
    console.log("Second Largest Number:", numbers[1]);
}
