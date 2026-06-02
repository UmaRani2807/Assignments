function primeNumberCheck(num: number) {
console.log(`Input: n = ${num}`);
    if (num <= 1) {
        
        console.log("Output: false");
        console.log(`Explanation: ${num} is less than or equal to 1, so it is not a prime number.`);
        return;
    }
const divisors:number[]=[];

    for (let i: number = 1; i < num; i++) {
        if (num % i == 0) {
            divisors.push(i);
        }
    }
    if(divisors.length>2)
    {
        console.log("Output: false");
        console.log(`Explanation: ${num} has more than two divisors: ${divisors.join(',')} so it is not a prime number.`);       
    }
    else
    {
        console.log("Output: true");
        console.log(`Explanation: ${num} has two divisors: 1, ${num} so it is a prime number.`); 
    }
}
primeNumberCheck(15);
