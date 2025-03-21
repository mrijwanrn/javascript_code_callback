function greet(name) {
    return new Promise((resolve) => {
        resolve(`Hello, ${name}!`);
    });
}


greet("Mithun").then((message) => console.log(message));

