async function fetchPostWithErrorHandling() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/123456789"); // Invalid post ID to simulate an error
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const post = await response.json();
        console.log("Fetched Post:", post);
        displayMessage(`Title: ${post.title}<br>Body: ${post.body}`, "success");
    } catch (error) {
        console.error("Error fetching post:", error);
        displayMessage("Error: Failed to fetch data. Please try again later.", "error");
    }
}


function displayMessage(message, type) {
    const messageDiv = document.createElement("div");
    messageDiv.innerHTML = message;
    messageDiv.style.padding = "10px";
    messageDiv.style.margin = "10px 0";
    messageDiv.style.borderRadius = "5px";
    
    if (type === "error") {
        messageDiv.style.backgroundColor = "#ffcccc";
        messageDiv.style.color = "#d8000c";
    } else {
        messageDiv.style.backgroundColor = "#ccffcc";
        messageDiv.style.color = "#006400";
    }

    document.body.appendChild(messageDiv);
}

fetchPostWithErrorHandling();
