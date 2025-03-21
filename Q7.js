async function fetchCombinedData() {
    try {
        
        const [todoResponse, postResponse] = await Promise.all([
            fetch("https://jsonplaceholder.typicode.com/todos/1"),
            fetch("https://jsonplaceholder.typicode.com/posts/1")
        ]);

       
        const [todo, post] = await Promise.all([
            todoResponse.json(),
            postResponse.json()
        ]);

        const combinedData = { todo, post };

        console.log(combinedData);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}


fetchCombinedData();
