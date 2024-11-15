const fetchButton = document.getElementById("fetch-btn");
fetchButton.addEventListener("click", fetchPosts);
const fetchPosts = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (response.status === 200) {
      const posts = await response.json();
      console.log(posts);
    } else {
      throw new Error("Failed to fetch posts");
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
};
