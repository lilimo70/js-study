const reservations = [
  { id: 1, name: "なお", menu: "初診", time: "10:00", price: 3000 },
  { id: 2, name: "たろう", menu: "再診", time: "11:30", price: 1500 },
  { id: 3, name: "はなこ", menu: "姿勢矯正", time: "15:00", price: 4500 },
  { id: 4, name: "なお", menu: "再診", time: "17:30", price: 1500 },
  { id: 5, name: "けん", menu: "初診", time: "09:30", price: 3000 }
];

const filteredReservations = reservations.filter(
  reservation => reservation.menu === "初診"
);
console.log(filteredReservations);

const guestNames = filteredReservations.map(
  reservation => reservation.time + " " + reservation.name + "（" + reservation.menu + "）"
);
console.log(guestNames);

let totalPrice = 0;
filteredReservations.forEach((reservation) => {
  totalPrice += reservation.price;
});
console.log("合計: " + totalPrice + "円");

