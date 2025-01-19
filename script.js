// Function to get all posts
async function getPosts() {
  const response = await fetch("http://localhost:3000/posts");
  const posts = await response.json();
  console.log(posts);
}

getPosts();

// Function to add a new post
async function addPost() {
  const response = await fetch("http://localhost:3000/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: "New Post", price: 2000 })
  });
  const post = await response.json();
  console.log(post);
}

addPost();

// Function to update the post with id 1 (use the correct URL `/posts/1`)
async function updatePost() {
  const response = await fetch("http://localhost:3000/posts/1", {  // Use `posts/1` instead of `posts`
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: "Updated Post 1", price: 1000 })
  });
  const post = await response.json();
  console.log(post);
}

updatePost();

// Function to delete the post with id 1 (use the correct URL `/posts/1`)
async function deletePost() {
  await fetch("http://localhost:3000/posts/1", {  // Use `posts/1` instead of `posts`
    method: "DELETE"
  });
  console.log("Post deleted");
}

deletePost();
