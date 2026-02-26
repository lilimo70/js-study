// 【課題】カフェのサイズ別料金計算システム
// 
// 関数名：calcDrinkPrice
// 引数：size (文字列で "S" か "M" か "L" が入ってくる想定)
//
// ルール：
// 1. もし size が "S" なら、料金 300 を返す。
// 2. もし size が "M" なら、料金 450 を返す。
// 3. それ以外（"L"）なら、料金 600 を返す。
//
// 最後に、好きなサイズを引数に入れて実行し、
// コンソールに「価格は〇〇円です」と表示させてください。

// --- ここから下に書いてみましょう！ ---
const calcDrinkPrice = (size) => {
    if (size === "S"){
        return 300;
    }
    else if (size === "M"){
        return 450;
    }
    else {
        return 600;
    }
}
const totalCost = calcDrinkPrice("L")
console.log(`料金は${totalCost}です`);