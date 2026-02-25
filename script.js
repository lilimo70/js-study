//関数名 calcFaresByAge を定義する。

const calcFaresByAge = (age) => {
    if (age < 18) {
        return 1000;
    }
    else if (age >= 65) {
        return 2000;
    }
    else {
        return 5000;
    }
}
const total = calcFaresByAge(18);
console.log(`料金は${total}です`);