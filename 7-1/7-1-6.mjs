const aaa = (count) => {
    if (count > 100) return // ここが処理の肝となる終了条件
    aaa(count * 2)
    console.log(count)
   }
   aaa(15)

   aaa(25)