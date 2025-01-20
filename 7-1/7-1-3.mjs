const calcAPlusB = (a,b) => {
    a[2] = b
    return a
   }
   const ar = ["A","B"]
   const result = calcAPlusB(ar,"C")
   console.log("calcAPlusB", result)