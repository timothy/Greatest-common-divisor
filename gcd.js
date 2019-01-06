let find = [324, 72, 87];//should be 3

/**
 * find the greatest common denominator for 2 numbers
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
let findGCD = (a, b) => {
    let remainder = 1;
    a = Math.abs(a);
    b = Math.abs(b);

    if (a < b) {
        let tmp = a;
        a = b;
        b = tmp;
    }

    while (remainder !== 0) {
        remainder = a % b;
        if (remainder === 0) {
            return b;
        } else {
            a = b;
            b = remainder;
        }
    }
};

/**
 * find the greatest common denominator for 2 or more numbers
 * @param {array} list an array of numbers
 * @returns {number}
 */
let findMultiGCD = (list) => {
    if(!list || list.length < 2) return 0;
    let gcd = findGCD(Math.abs(list[0]), Math.abs(list[1]));
    for(let i = 1; i < list.length; i++){
        gcd = findGCD(gcd, Math.abs(list[i]));
        if(gcd === 1) return 1;
    }
    return gcd;
};

console.log(findMultiGCD(find));