// function reverseNumber(n, result = 0) {
//   if (n === 0) return result
//   return reverseNumber(Math.floor(n / 10), result * 10 + (n % 10))
// }

// console.log(reverseNumber(123))
// console.log(reverseNumber(1000))
// console.log(reverseNumber(5))

// ! Задание #2

function countKeys(obj) {
  let count = 0
  for (let key in obj) {
    count++
    if (typeof obj[key] === "object" && obj[key] !== null) {
      count += countKeys(obj[key])
    }
  }
  return count
}

const nestedObj = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
    },
  },
  f: {
    g: 4,
  },
}

console.log(countKeys(nestedObj))
