// 【課題】接骨院のフルコース判定（初回割引付き）
// ルール：
// 1. 基本料金（CoursePrice）を受け取る。
// 2. もし「初めての来店（isFirst）」が true なら、1000円引きにする。
// 3. もし「初めてではない（false）」なら、そのままの料金にする。
// 4. 最後に、計算した合計金額を「返す（return）」。
// 引数1: basePrice (基本料金)
// 引数2: isFirstVisit (初診ならtrue)

// --- ここから下に、自分の手で書いてみましょう！ ---
const CoursePrice = (basePrice,isFirstVisit) =>{
    if (isFirstVisit === true){
        return basePrice - 1000;
    }
    else{
        return basePrice;
    }
}
const result = CoursePrice(6000,true);
console.log(`初回割引適用で、お会計は${result}です`);