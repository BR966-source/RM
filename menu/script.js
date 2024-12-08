let total = 0;

function addToCart(price) {
  total += price;
  document.getElementById("total").textContent = total;
}

function checkout() {
  if (total === 0) {
    alert("Your cart is empty. Please add items to checkout!");
  } else {
    alert(`Thank you for your order! Your total is ₹${total}.`);
    total = 0;
    document.getElementById("total").textContent = total;
  }
}
