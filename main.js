function checkDivisibility(dividend, ...divisors) {
  const result = {
    divisible: [],
    notDivisible: [],
  }

  for (let i = 0; i < divisors.length; i++) {
    if (dividend % divisors[i] === 0) {
      result.divisible.push(divisors[i])
    } else {
      result.notDivisible.push(divisors[i])
    }
  }

  return result
}
console.log(checkDivisibility(15, 3, 5, 4, 7))
