//TypeScriptの基礎学習をまとめる
enum Num {
  MON,
  THE,
  WED
}

// ユニオン型
//const numOrFalse: number | false = false;
const numOrFalse: number | false = 1;
//const ArrayNumOrStr: string | number[];
let ArrayNumOrStr: (string | number)[];
//const ArrayNumOrStr: Array<number | string>;

//型変数
function printAndReturn<T>(value: T) {
  console.log(value);
  return value;
}
