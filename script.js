// ここから自力でチャレンジ！
const calcPrice = (coursePrice, isFirst) => {
  // ここに計算ロジックを書く
let total =coursePrice;
if (isFirst === true) {
  total = coursePrice + 2000;
} else {
  total = coursePrice;
}
return total;
};
// 最後に実行して、画面に出す
const total = calcPrice(5000, true); 
document.getElementById("check-out").innerText = `お会計は${total}円です`;