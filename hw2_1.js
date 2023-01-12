function getPrime(n) {
    let primeNumbers = [];
    let i = 1;
    while (primeNumbers.length != n) {
        i++;
        if (primeNumbers.length == 0) {
            primeNumbers.push(i);
        }
        else {
            let counter = 0;
            // for (var j of primeNumbers) {    //var2
            for (var j = 0; j < primeNumbers.length; j++) {    // var1
                if (i % primeNumbers[j] == 0) {
                    counter++;
                }
                // if (i%j==0){
                //     counter++;
                // }
                if (primeNumbers[j] > 9) {
                    break;
                }
            }
            if (counter == 0) {
                primeNumbers.push(i);
            }
            
        }
        
    }
    return primeNumbers;
}

console.time('getPrime');
console.log(getPrime(process.argv[2]));
console.timeEnd('getPrime');