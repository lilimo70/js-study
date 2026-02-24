// toMinutes関数を定義してください

const toMinutes = (hour,minutes) => {
  return hour * 60 + minutes;
};
// 定数resultに、toMinutes関数の戻り値を代入してください定数3と20を引数に与えてください。

const result = toMinutes(3, 20);
// 「◯◯分」となるように、分に換算した結果を出力してください

console.log(`${result}分`);