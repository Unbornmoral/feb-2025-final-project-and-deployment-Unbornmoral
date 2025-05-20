// script.js - ShopEase Ecommerce

document.addEventListener('DOMContentLoaded', function() {
    // Product data
    const products = [
        { id: 1, name: 'Wireless Headphones', price: 59.99, images: [
            'https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        ] },
        { id: 2, name: 'Smart Watch', price: 99.99, images: [
            'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        ] },
        { id: 3, name: 'Bluetooth Speaker', price: 39.99, images: [
            'https://images.pexels.com/photos/191877/pexels-photo-191877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        ] },
        { id: 4, name: 'Fitness Tracker', price: 29.99, images: [
            'https://images.pexels.com/photos/4379288/pexels-photo-4379288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        ] },
        { id: 5, name: 'Game Pad', price: 49.99, images: [
            'https://images.pexels.com/photos/1365795/pexels-photo-1365795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        ] },
        { id: 6, name: 'iPhone 16', price: 1299.99, images: [
            'https://images.pexels.com/photos/31059294/pexels-photo-31059294/free-photo-of-close-up-of-modern-smartphone-and-laptop.jpeg'
        ] }
    ];

    // Render products on products.html
    if (document.getElementById('product-list')) {
        const productList = document.getElementById('product-list');
        products.forEach((product, idx) => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <div class="product-image-gallery">
                    <img src="${product.images[0]}" alt="${product.name}" class="product-img" data-idx="${idx}" data-img="0">
                </div>
                <h3>${product.name}</h3>
                <p>$${product.price.toFixed(2)}</p>
                <button onclick="alert('Added to cart!')">Add to Cart</button>
            `;
            productList.appendChild(card);
        });
    }

    // Contact form validation
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            let error = '';
            if (!name) error = 'Please enter your name.';
            else if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) error = 'Please enter a valid email.';
            else if (!message) error = 'Please enter your message.';
            const formMsg = document.getElementById('form-message');
            if (error) {
                formMsg.textContent = error;
                formMsg.style.color = 'red';
            } else {
                formMsg.textContent = 'Thank you for contacting us!';
                formMsg.style.color = 'green';
                contactForm.reset();
            }
        });
    }
});
