function getBookTitles(books, callback) {
    const titles = books.map(book => book.title); 
    callback(titles);
}

function logTitlesAlphabetically(titles) {
    titles.sort(); 
    console.log("Book Titles in Alphabetical Order:");
    titles.forEach(title => console.log(title));
}

const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 }
];

getBookTitles(books, logTitlesAlphabetically);
