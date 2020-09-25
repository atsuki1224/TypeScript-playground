"use strict";
//名前付き関数
function greet(name) {
    return 'hello' + name;
}
console.log("名前付き関数");
console.log(greet('Jon'));
//関数式
let greet2 = function (name) {
    return 'hello' + name;
};
console.log("関数式");
console.log(greet2('Jon'));
//アロー関数式
let greet3 = (name) => {
    return 'hello' + name;
};
console.log("アロー関数式");
console.log(greet3('Jon'));
//アロー関数式の省略記法
//↓仮パラメーター
let greet4 = (name) => 'hello' + name;
console.log("アロー関数式の省略記法");
console.log(greet4('Jon'));
//↑引数
//関数コンストラクター
let greet5 = new Function('name', 'return "hello" + name');
console.log("関数コンストラクター");
console.log('Jon');
//配列で渡す
function sum(numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}
console.log(sum([1, 2, 3]));
//argumentsで渡す
function sumVariadic() {
    return Array
        .from(arguments)
        .reduce((total, n) => total + n, 0);
}
//console.log(sumVariadic(1,2,3))
//...をつけると安全に受け取れる
function sumVatiadicSafe(...numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}
console.log(sumVatiadicSafe(1, 2, 3, 4));
//呼び出し方は3つある
function add(a, b) {
    return a + b;
}
add(10, 20);
add.apply(null, [10, 20]);
add.call(null, 10, 20);
add.bind(null, 10, 20)();
//ジェネレーター、イテレーター
let numbers = {
    *[Symbol.iterator]() {
        for (let n = 1; n <= 10; n++) {
            yield n;
        }
    }
};
let add2 = (a, b) => {
    return a + b;
};
console.log(add2(1, 3));
//# sourceMappingURL=chapter4.js.map