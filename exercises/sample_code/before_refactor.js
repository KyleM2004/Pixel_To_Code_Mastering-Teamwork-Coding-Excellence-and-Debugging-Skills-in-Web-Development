// Hypothetical Code: Online Bookstore - Item Listing
function listBooks(bookData) {
    var books = "";
    for (var i = 0; i < bookData.length; i++) {
        books += bookData[i].title + " by " + bookData[i].author + "\n";
    }
    return books;
}

// Example data, normally this would come from a database
var exampleData = [
    {title: "The Great Gatsby", author: "F. Scott Fitzgerald"},
    {title: "1984", author: "George Orwell"}
];

console.log(listBooks(exampleData));

// This code can be refactored for better readability, use of modern JavaScript syntax, and improved functionality.