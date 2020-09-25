
//名前付き関数
function greet(name: string) {
  return 'hello' + name
}
console.log("名前付き関数")
console.log(greet('Jon'))

//関数式
let greet2 = function(name: string) {
  return 'hello' + name
}
console.log("関数式")
console.log(greet2('Jon'))

//アロー関数式
let greet3 = (name: string) => {
  return 'hello' + name
}
console.log("アロー関数式")
console.log(greet3('Jon'))


//アロー関数式の省略記法
//↓仮パラメーター
let greet4 = (name: string) =>
  'hello' + name
console.log("アロー関数式の省略記法")
console.log(greet4('Jon'))
//↑引数

//関数コンストラクター
let greet5 = new Function('name', 'return "hello" + name')
console.log("関数コンストラクター")
console.log('Jon')

//配列で渡す
function sum(numbers: number[]) {
  return numbers.reduce((total, n) => total + n, 0)
}
console.log(sum([1,2,3]))

//argumentsで渡す
function sumVariadic(): number {
  return Array
    .from(arguments)
    .reduce((total, n) => total + n, 0)
}
//console.log(sumVariadic(1,2,3))

//...をつけると安全に受け取れる
function sumVatiadicSafe(...numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0)
}
console.log(sumVatiadicSafe(1,2,3,4))

//...をつけた組み込み?
interface Console {
  log(message?: any, ...optionalParams: any[]): void
}

//呼び出し方は3つある
function add(a: number, b: number): number {
  return a + b
}

add(10, 20)
add.apply(null,[10, 20])
add.call(null, 10, 20)
add.bind(null, 10, 20)()

//ジェネレーター、イテレーター
let numbers = {
  *[Symbol.iterator]() {
    for (let n = 1; n <= 10; n++){
      yield n
    }
  }
}

//型シグネチャ
type Add = (a: number, b: number) => number

let add2: Add = (
  a,
  b
 ) => {
   return a + b
 }

 console.log(add2(1, 3))

//ジェネリック型
type Filter = {
  <T>(array: T[], f: (item: T) => boolean): T[]
}