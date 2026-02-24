const calculateFee = (fee, isLate, isLunch) => {
    // 1. もし深夜（isLate が true）なら、1000円足して「返す」
    if (isLate) {
        return fee + 1000;
    }

    // 2. もしランチ（isLunch が true）なら、500円引いて「返す」
    if (isLunch) {
        return fee - 500;
    }

    // 3. どちらでもないなら、そのままの fee を「返す」
    return fee;
};

// 実行して結果を確認（例：5000円でランチタイムの場合）
const baseFee = 5000;
// ここで関数を呼び出して、結果を result に入れる
const result = calculateFee(baseFee,false,true);
console.log(`本日の料金は ${result} 円です`);