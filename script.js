// 【課題】会員ランク別・ポイント付与
// ルール：
// 1. 購入金額（purchaseAmount）を受け取る。
// 2. もし「VIP会員（isVIP）」が true なら、購入金額の 10% をポイントにする。
// 3. もし「VIP会員ではない（false）」なら、購入金額の 1% をポイントにする。
// 4. 最後に、計算した「付与ポイント（point）」を返す。

// 引数1: purchaseAmount (購入金額)
// 引数2: isVIP (VIPならtrue)

// --- ここから下に、1から書いてみましょう！ ---

const calculatePoints = (purchaseAmount,isVIP) => {
    if (isVIP === true){
        return purchaseAmount * 0.1;
    }
    else {
        return purchaseAmount * 0.01;
    }
}

// --- 動作確認（購入金額 10,000円、VIP会員の場合） ---
// const getPoint = 関数名(10000, true);
const getPoint = calculatePoints(10000,true);
// console.log(`付与ポイントは${getPoint}ptです`);
console.log(`付与ポイントは${getPoint}ptです`);