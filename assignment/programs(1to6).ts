{
    let n: number = 7;
    let prime: boolean = true;

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            prime = false;
            break;
        }
    }
    if (prime) {
        console.log(n, "is a Prime Number");
    } else {
        console.log(n, "is not a Prime Number");
    }
}
{
    let start: number = 1;
    let end: number = 20;
    console.log("Prime numbers:");
    for (let n = start; n <= end; n++) {
        let prime: boolean = true;
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
    let a: number = 12;
    let b: number = 18;
    let x: number = a;
    let y: number = b;
    while (y !== 0) {
        let temp: number = y;
        y = x % y;
        x = temp;
    }
    let gcd: number = x;
    let lcm: number = (a * b) / gcd;
    console.log("GCD:", gcd);
    console.log("LCM:", lcm);
}
{
    let n: number = 153;
    let original: number = n;
    let sum: number = 0;
    while (n > 0) {
        let digit: number = n % 10;
        sum = sum + digit * digit * digit;
        n = Math.floor(n / 10);
    }
    if (sum === original) {
        console.log(original, "is an Armstrong Number");
    } else {
        console.log(original, "is not an Armstrong Number");
    }
}
{
    let n: number = 28;
    let sum: number = 0;
    for (let i = 1; i < n; i++) {
        if (n % i === 0) {
            sum = sum + i;
        }
    }
    if (sum === n) {
        console.log(n, "is a Perfect Number");
    } else {
        console.log(n, "is not a Perfect Number");
    }
}
{
    let n: number = 145;
    let original: number = n;
    let sum: number = 0;
    while (n > 0) {
        let digit: number = n % 10;
        let fact: number = 1;
        for (let i = 1; i <= digit; i++) {
            fact = fact * i;
        }
        sum = sum + fact;
        n = Math.floor(n / 10);
    }
    if (sum === original) {
        console.log(original, "is a Strong Number");
    } else {
        console.log(original, "is not a Strong Number");
    }
}
