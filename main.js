const listItems = document.querySelectorAll("#numbers-list li")
listItems.forEach((li, index) => {
  if ((index + 1) % 2 === 0) {
    li.style.color = "red"
  } else {
    li.style.color = "blue"
  }

  const divs = document.querySelectorAll("div")
  divs.forEach((div) => {
    if (div.textContent.trim() === "Hello") {
      console.log(div)
    }
  })
})
