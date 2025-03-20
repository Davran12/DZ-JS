let text = "  JavaScript — это мощный язык программирования!  "

// 1. Удалите лишние пробелы в начале и конце строки
let trimmedText = text.trim()

// 2. Замените слово "мощный" на "гибкий"
let replacedText = text.replace("мощный", "гибкий")

// 3. Выведите первый и последний символ строки
let firstChar = text.slice(0, 12)
let lastChar = text.slice(30, 48)

// 4. Разделите строку на массив слов
let wordsArray = text.split()

// 5. Преобразуйте всю строку в верхний регистр
let upperCaseText = text.toUpperCase()

// 6. Вырежьте слово "JavaScript" из строки
let slicedText = text.slice(0, 12)

// 7. Найдите длину исходной строки
let textLength = text.length

// 8. Соедините две строки: исходную (без пробелов) и " Учите его каждый день!"
let finalText = trimmedText + " Учите его каждый день!"
// Вывод результатов
console.log(trimmedText)
console.log(replacedText)
console.log(firstChar)
console.log(lastChar)
console.log(wordsArray)
console.log(upperCaseText)
console.log(slicedText)
console.log(textLength)
console.log(finalText)
