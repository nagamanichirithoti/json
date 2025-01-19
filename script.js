async function getPosts() {
    const response = await fetch("http://localhost:3000/posts");
    const posts = await response.json();
    console.log(posts);
  }
  
  getPosts();
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
  async function updatePost() {
    const response = await fetch("http://localhost:3000/posts", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "Updated Post 1", price:1000 })
    });
    const post = await response.json();
    console.log(post);
  }
  
  updatePost();
  async function deletePost() {
    await fetch("http://localhost:3000/posts", {
      method: "DELETE"
    });
    console.log("Post deleted");
  }
  
  deletePost();
  
  
  