function countPrimeNumbers() {
    let primes = [];
    let checkPrime = async number => {
        let v;
        for (let j = 2; j < number; j++) {
            if (number % j == 0) return false;
        }
        return true;
    }
    for (let i = 3; i < 101; i++) {
        v = checkPrime(i);
        if (v) primes.push(i);
    }
    return primes;
}

console.log(countPrimeNumbers());