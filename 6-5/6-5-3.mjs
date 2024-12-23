let sum = 0
for (let i = 1; i <= 100; i++) {
if(sum >= 50){
    break
}
if (i % 2 == 0) {
    sum += i
}
// ループ回数の合計値が100未満の間、回数と合計値を表示
console.log(i, sum)
}
