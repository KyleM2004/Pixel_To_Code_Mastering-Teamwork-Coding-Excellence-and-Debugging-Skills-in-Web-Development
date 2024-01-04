// Hypothetical Buggy Code: Online Bookstore - Cart Total
function calculateTotal(cartItems) {
    let total = 0;
    cartItems.forEach(item => {
        total += item.price;
    });
    return total;
}

// Example cart items
var cart = [
    {title: "Brave New World", price: 9.99},
    {title: "To Kill a Mockingbird"}
];

console.log("Total: $" + calculateTotal(cart));


// This code contains a bug that participants need to identify and fix.