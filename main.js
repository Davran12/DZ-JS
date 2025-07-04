async function sequencePromises(funcs) {
  const results = []

  try {
    for (const fn of funcs) {
      const result = await fn()
      results.push(result)
    }
    return results
  } catch (e) {
    return null
  }
}

const promise1 = () => Promise.resolve(1)
const promise2 = () => Promise.resolve(2)
const promise3 = () => Promise.reject("Error")

sequencePromises([promise1, promise2]).then(console.log) // [1, 2]

sequencePromises([promise1, promise3, promise2]).then(console.log) // null

// --------------------------------------------------------

async function fetchUserPosts(userId) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    )

    if (!response.ok) {
      throw new Error("Network response was not ok")
    }

    const posts = await response.json()
    return posts
  } catch (error) {
    return "Failed to fetch posts"
  }
}

fetchUserPosts(1).then(console.log)
fetchUserPosts(9999).then(console.log)

async function createNewPost(postData) {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (!response.ok) {
      throw new Error("Request failed")
    }

    const data = await response.json()
    return data
  } catch (error) {
    return {error: "Failed to create post"}
  }
}

const newPost = {
  title: "New Post",
  body: "This is a new post",
  userId: 1,
}

createNewPost(newPost).then(console.log).catch(console.error)
