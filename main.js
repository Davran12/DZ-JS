// ! Задание №1
function factorial(n) {
  if (n < 0) {
    console.log("Факториал отрицательного числа не существует.")
    return
  }
  let result = 1
  for (let i = 1; i <= n; i++) {
    result *= i
  }
  console.log(result)
}

factorial(5)

//! Задание №2

function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, "")
  const reversedStr = str.split("").reverse().join("")

  if (str === reversedStr) {
    console.log("Строка является палиндромом.")
  } else {
    console.log("Строка не является палиндромом.")
  }
  
}

isPalindrome("A man, a plan, a canal, Panama")
