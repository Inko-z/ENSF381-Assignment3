function addToCart(productName) {
    const productElements = document.getElementsByClassName('product');

    for (let i = 0; i < productElements.length; i++) {
        const product = productElements[i];

        const productNameElement = product.querySelector('.product-name');
        if (productNameElement.textContent === productName) {
            // If the product name matches, extract and return the price
            const productPriceElement = product.querySelector('.product-price');
            const productPrice = productPriceElement.textContent;
            alert(`${productName} price is ${productPrice}`);
            return; // Exit the function since the product is found
        }
    }

    // If the product name is not found
    alert(`Product "${productName}" not available.`);
}
