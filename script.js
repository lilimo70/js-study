// 【課題】ECサイトの送料計算システム
// ルール：
// 1. 商品の合計金額（totalAmount）を受け取る。
// 2. もし「プレミアム会員（isPremium）」が true なら、送料は 0 円にする。
// 3. もし「プレミアム会員ではない（false）」なら、送料 500 円にする。
// 4. 最後に、計算した「送料（shippingFee）」のみを返す。

// 引数1: totalAmount (商品の合計金額)
// 引数2: isPremium (プレミアム会員ならtrue)

// --- ここから下に、1から書いてみましょう！ ---

const shippingFee = (totalAmount,isPremium) => {
    if (isPremium === true){
        return 0;
    }
    else{
        return 500;
    }
}
const fee = shippingFee(3000,false);
console.log(`送料は${fee}です`);