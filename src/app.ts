import {Item} from './item';
var elem = document.getElementById('output');
var aBook = new Item('はじめてのTypeScript',2980);
aBook.say(elem);

let age = 1
age = 2

//リテラル型
let name: "Jon" = "Jon"
//定数のように扱うことはできない

//リテラル型のユニオン型
let name2: "k" | "a" = "a"

//anyとunknown
//どんな値でも入ってしまう
let unk: unknown = "aiko"
unk = 1

//unknown型のオブジェクトのプロパティは使用、呼び出しできない(anyはできる)
//console.log(unk.length)
//これによりランタイム時のエラーが起きないようにできる
//何のためにunknownで定義するの？
//キャストする際に全く関係ないものにキャストすることはできないが、一度anyかunknownにキャストして経由するとキャストできる。
//そのような場合に使用する

//名前つき関数
function increment(num: number): number {
  return num + 1
}

//匿名関数
const increment2 = function(num: number): number {
  return num + 1
}

//匿名かつアロー関数
const increment3 = (num: number) => {
  return num + 1
}

//匿名かつアロー関数の省略記法
const increment4 = (num: number) => num + 1
//このときにreturnはかけない

//thisについて
//() => {} とfunction() {}ではthisの扱いが異なる
//() => {}は宣言時にthisであるものを使用する
//function() {}は実行時にthisであるものを使用する

const v1: void = undefined
const ud1: undefined = undefined

interface Person {
  name: string;
  age: number;
}
