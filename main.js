let a = [1, {test2: {true: false}, test: 21}, {meta: ["metalabs", 113]}]

let arr = [
  "color",
  [
    1222,
    {
      meta: ["labs", 117673],
      meta: ["labs", 110, {finally: "check", arr2: ["hello world", a]}],
    },
  ],
]

console.log(arr[1][1].meta[2].arr2[1][2].meta[0])
