"use strict";
{
    let n = 7;
    let prime = true;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            prime = false;
            break;
        }
    }
    if (prime) {
        console.log(n, "is a Prime Number");
    }
    else {
        console.log(n, "is not a Prime Number");
    }
}
{
    let start = 1;
    let end = 20;
    console.log("Prime numbers:");
    for (let n = start; n <= end; n++) {
        let prime = true;
        if (n < 2) {
            prime = false;
        }
        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                prime = false;
                break;
            }
        }
        if (prime) {
            console.log(n);
        }
    }
}
{
    let a = 12;
    let b = 18;
    let x = a;
    let y = b;
    while (y !== 0) {
        let temp = y;
        y = x % y;
        x = temp;
    }
    let gcd = x;
    let lcm = (a * b) / gcd;
    console.log("GCD:", gcd);
    console.log("LCM:", lcm);
}
{
    let n = 153;
    let original = n;
    let sum = 0;
    while (n > 0) {
        let digit = n % 10;
        sum = sum + digit * digit * digit;
        n = Math.floor(n / 10);
    }
    if (sum === original) {
        console.log(original, "is an Armstrong Number");
    }
    else {
        console.log(original, "is not an Armstrong Number");
    }
}
{
    let n = 28;
    let sum = 0;
    for (let i = 1; i < n; i++) {
        if (n % i === 0) {
            sum = sum + i;
        }
    }
    if (sum === n) {
        console.log(n, "is a Perfect Number");
    }
    else {
        console.log(n, "is not a Perfect Number");
    }
}
{
    let n = 145;
    let original = n;
    let sum = 0;
    while (n > 0) {
        let digit = n % 10;
        let fact = 1;
        for (let i = 1; i <= digit; i++) {
            fact = fact * i;
        }
        sum = sum + fact;
        n = Math.floor(n / 10);
    }
    if (sum === original) {
        console.log(original, "is a Strong Number");
    }
    else {
        console.log(original, "is not a Strong Number");
    }
}
