console.log('Hello World')

let a = 1 + 2
let b = a + 3
let c = {
  apple: a,
  banana: b
}
let d = c.apple * 4

//enum(列挙型)
//列挙した場合に上から0~3の値が割り当てられる
enum CoffeeSize {
  SHORT,
  TALL,
  GRANDE,
  VENTI
}

//CoffeeSize.SHORTで値を指定することができる。そのため決まったものを呼び出せる
const coffee = {
  hot: true,
  size: CoffeeSize.SHORT
}