async function fetchPosts() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const posts = await response.json();
        console.log("List of Posts:", posts);
    } catch (error) {
        console.error("Error fetching posts:", error);
    }
}


fetchPosts();
