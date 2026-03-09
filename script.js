/* =========================================================
  Progate復習：配列メソッド + コールバック関数（1時間）
  データ：reservations（予約一覧）
========================================================= */

const reservations = [
    { id: 1, name: "なお", menu: "初診", time: "10:00", price: 3000 },
    { id: 2, name: "たろう", menu: "再診", time: "11:30", price: 1500 },
    { id: 3, name: "はなこ", menu: "姿勢矯正", time: "15:00", price: 4500 },
    { id: 4, name: "なお", menu: "再診", time: "17:30", price: 1500 },
    { id: 5, name: "けん", menu: "初診", time: "09:30", price: 3000 },
  ];
  
const found = reservations.filter((reservation) => {
    return reservation.menu === "初診";
});
const labels = found.map((reservation) => {
    return `${reservation.time} ${reservation.name}"様"（${reservation.menu}）`;
});
console.log(labels);