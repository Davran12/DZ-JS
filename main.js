function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0
}
function filterArray(arr) {
  let div = []
  let negativeDiv = []
  let others = []

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i]

    if (num > 0 && num % 2 === 0) {
      div.push(num)
    } else if (num < 0 && num % 3 === 0) {
      negativeDiv.push(num)
    } else {
      others.push(num)
    }
  }

  return [div, negativeDiv, others]
}
console.log(filterArray([1, 3, 2, -6, -9, -10, 10]))
