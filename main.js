function findMinValueInObjects(objects) {
  return Math.min(...objects.map((obj) => obj.value))
}
function splitEvenOdd(numbers) {
  const result = {even: [], odd: []}
  for (const num of numbers) {
    if (num % 2 === 0) {
      result.even.push(num)
    } else {
      result.odd.push(num)
    }
  }
  return result
}
const objects7 = [{value: 10}, {value: 5}, {value: 20}]
console.log("7. Минимальное значение:", findMinValueInObjects(objects7)) // 5

const numbers8 = [1, 2, 3, 4, 5]
console.log("8. Чётные и нечётные:", splitEvenOdd(numbers8))
