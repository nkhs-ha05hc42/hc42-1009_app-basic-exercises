const array = ["aaa","bbb","ccc"]
const Newarray = array.map(value =>
({key: `★${value}`
}))

console.log(Newarray[0],Newarray[1],Newarray[2])