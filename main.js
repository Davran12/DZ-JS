const div1 = document.getElementById("div1")
const div2 = document.getElementById("div2")

async function fetchPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const posts = await response.json()

    posts.forEach((post) => {
      const postEl = document.createElement("div")
      postEl.classList.add("post")

      postEl.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                <button class="btn" data-id="${post.id}">Подробнее</button>
            `

      div1.appendChild(postEl)
    })

    div1.addEventListener("click", async (e) => {
      if (e.target.classList.contains("btn")) {
        const id = e.target.getAttribute("data-id")
        await fetchPostById(id)
      }
    })
  } catch (error) {
    console.error("Ошибка при загрузке постов:", error)
  }
}

async function fetchPostById(id) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    )
    const post = await response.json()

    div2.innerHTML = `
            <h2>Детали поста #${post.id}</h2>
            <h3>${post.title}</h3>
            <p>${post.body}</p>
        `
  } catch (error) {
    console.error("Ошибка при загрузке поста:", error)
  }
}

fetchPosts()
