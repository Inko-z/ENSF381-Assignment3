function addToCart(productName) {
    const productElements = document.getElementsByClassName('product');

    for (let i = 0; i < productElements.length; i++) {
        const product = productElements[i];

        const productNameElement = product.querySelector('.product-name');
        if (productNameElement.textContent === productName) {
            const productPriceElement = product.querySelector('.product-price');
            const productPrice = productPriceElement.textContent;

            // Check if the product is already in the cart
            const cartItems = document.querySelectorAll('.cart-item');
            let productFound = false;
            cartItems.forEach(item => {
                const cartProductName = item.querySelector('.cart-product-name').textContent;
                if (cartProductName === productName) {
                    // Increment the quantity by 1
                    const quantityElement = item.querySelector('.cart-quantity');
                    let quantity = parseInt(quantityElement.textContent);
                    quantity++;
                    quantityElement.textContent = quantity;
                    productFound = true;
                    alert(`${productName} price is ${productPrice}`);
                }
            });

            if (!productFound) {
                // Create a new cart item
                const shoppingCartUL = document.querySelector('.shopping-cart-list');
                const li = document.createElement('li');
                li.classList.add('cart-item');
                li.innerHTML = `
                    <span class="cart-product-name">${productName}</span> - 
                    <span class="cart-product-price">${productPrice}</span> - 
                    <span class="cart-quantity">1</span>
                    <button class="add-cart" onclick="removeFromCart('${productName}')">Remove</button>
                `;
                shoppingCartUL.appendChild(li);
                alert(`${productName} price is ${productPrice}`);
            }
            return; // Exit the function since the product is found
        }
    }

    // If the product name is not found
    alert(`Product "${productName}" not available.`);
}


function removeFromCart(productName) {
    // Find all cart items
    const cartItems = document.querySelectorAll('.cart-item');

    // Loop through each cart item
    cartItems.forEach(item => {
        // Find the product name and quantity elements
        const cartProductName = item.querySelector('.cart-product-name').textContent;
        const quantityElement = item.querySelector('.cart-quantity');
        let quantity = parseInt(quantityElement.textContent);

        // If the product name matches the specified product name
        if (cartProductName === productName) {
            // If quantity is greater than 1, decrease quantity by 1
            if (quantity > 1) {
                quantity--;
                quantityElement.textContent = quantity;
            } else {
                // If quantity is 1 or less, remove the cart item
                item.remove();
            }
            return; // Exit the function
        }
    });
}
