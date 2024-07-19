<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', function() {
    try {
        // Load cart items when the page loads
        loadCartItems();
        updateCartDropdown();

        const checkoutForm = document.getElementById('checkout-form');
        if (checkoutForm) {
            checkoutForm.addEventListener('submit', function(event) {
                event.preventDefault();
                const modalElement = document.getElementById('orderCompleteModal');
                if (modalElement) {
                    const modal = new bootstrap.Modal(modalElement);
                    modal.show();
                }
            });
        }

        const orderCompleteModal = document.getElementById('orderCompleteModal');
        if (orderCompleteModal) {
            orderCompleteModal.addEventListener('hidden.bs.modal', function () {
                clearCart();
                window.location.href = 'store.html';
            });
        }

        const returnToStoreButton = document.getElementById('returnToStore');
        if (returnToStoreButton) {
            returnToStoreButton.addEventListener('click', function() {
                clearCart();
                window.location.href = 'store.html';
            });
        }
    } catch (error) {
        console.error("Error during DOMContentLoaded event:", error);
    }
});

function loadCartItems() {
    try {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        const cartItemsElement = document.getElementById('cart-items');
        if (cartItemsElement) {
            cartItemsElement.innerHTML = ''; // Clear previous items
            if (cartItems.length === 0) {
                cartItemsElement.innerHTML = '<p>Your cart is empty.</p>';
            } else {
                cartItems.forEach((item, index) => {
                    cartItemsElement.innerHTML += `
                        <div class="col-md-4">
                            <div class="card mb-4">
                                <img src="${item.image}" class="card-img-top" alt="${item.name}">
                                <div class="card-body">
                                    <h5 class="card-title">${item.name}</h5>
                                    <p class="card-text">$${item.price}</p>
                                    <button class="btn btn-sm btn-danger" onclick="removeItem(${index})">Remove</button>
                                </div>
                            </div>
                        </div>
                    `;
                });
            }
        }
    } catch (error) {
        console.error("Error loading cart items:", error);
    }
}

function removeItem(index) {
    try {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        cartItems.splice(index, 1);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        loadCartItems();
        updateCartDropdown();
    } catch (error) {
        console.error("Error removing cart item:", error);
    }
}

function addToCart(productName, productPrice, productImage) {
    try {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        cartItems.push({ name: productName, price: productPrice, image: productImage });
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        updateCartDropdown(); // Update the dropdown to reflect the added item
        alert('Item added to cart'); // Optional: alert user that item was added
    } catch (error) {
        console.error("Error adding to cart:", error);
    }
}

function updateCartDropdown() {
    try {
        const cartDropdownMenu = document.getElementById('cart-dropdown-menu');
        const cartCount = document.getElementById('cart-count');
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

        if (cartDropdownMenu) {
            cartDropdownMenu.innerHTML = '';
            if (cartItems.length === 0) {
                cartDropdownMenu.innerHTML = '<li><p class="text-center mb-0">Your cart is empty.</p></li>';
            } else {
                cartItems.forEach((item, index) => {
                    cartDropdownMenu.innerHTML += `
                        <li class="cart-item-dropdown w-100">
                            <img src="${item.image}" alt="${item.name}">
                            <div class="cart-item-details-dropdown">
                                <span>${item.name}</span>
                            </div>
                            <span class="cart-item-price-dropdown">$${item.price}</span>
                            <div class="cart-item-actions-dropdown">
                                <button class="btn btn-sm btn-danger" onclick="removeItem(${index})">Remove</button>
                            </div>
                        </li>
                    `;
                });
                cartDropdownMenu.innerHTML += `
                    <li><a href="cart.html" class="btn btn-primary w-100 mt-2 checkout-btn">Check Out</a></li>
                `;
            }
            cartCount.textContent = cartItems.length.toString();
        }
    } catch (error) {
        console.error("Error updating cart dropdown:", error);
    }
}

function clearCart() {
    try {
        localStorage.removeItem('cartItems');
        loadCartItems();
        updateCartDropdown();
    } catch (error) {
        console.error("Error clearing cart:", error);
    }
}
=======
document.addEventListener('DOMContentLoaded', function() {
    try {
        // Load cart items when the page loads
        loadCartItems();
        updateCartDropdown();

        const checkoutForm = document.getElementById('checkout-form');
        if (checkoutForm) {
            checkoutForm.addEventListener('submit', function(event) {
                event.preventDefault();
                const modal = new bootstrap.Modal(document.getElementById('orderCompleteModal'));
                modal.show();
            });
        }

        document.getElementById('orderCompleteModal').addEventListener('hidden.bs.modal', function () {
            clearCart();
            window.location.href = 'store.html';
        });

        const returnToStoreButton = document.getElementById('returnToStore');
        if (returnToStoreButton) {
            returnToStoreButton.addEventListener('click', function() {
                clearCart();
                window.location.href = 'store.html';
            });
        }
    } catch (error) {
        console.error("Error during DOMContentLoaded event:", error);
    }
});

function loadCartItems() {
    try {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        const cartItemsElement = document.getElementById('cart-items');
        if (cartItemsElement) {
            cartItemsElement.innerHTML = ''; // Clear previous items
            if (cartItems.length === 0) {
                cartItemsElement.innerHTML = '<p>Your cart is empty.</p>';
            } else {
                cartItems.forEach((item, index) => {
                    cartItemsElement.innerHTML += `
                        <div class="col-md-4">
                            <div class="card mb-4">
                                <img src="${item.image}" class="card-img-top" alt="${item.name}">
                                <div class="card-body">
                                    <h5 class="card-title">${item.name}</h5>
                                    <p class="card-text">$${item.price}</p>
                                    <button class="btn btn-sm btn-danger" onclick="removeItem(${index})">Remove</button>
                                </div>
                            </div>
                        </div>
                    `;
                });
            }
        }
    } catch (error) {
        console.error("Error loading cart items:", error);
    }
}

function removeItem(index) {
    try {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        cartItems.splice(index, 1);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        loadCartItems();
        updateCartDropdown();
    } catch (error) {
        console.error("Error removing cart item:", error);
    }
}

function addToCart(productName, productPrice, productImage) {
    try {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        cartItems.push({ name: productName, price: productPrice, image: productImage });
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        updateCartDropdown(); // Update the dropdown to reflect the added item
        alert('Item added to cart'); // Optional: alert user that item was added
    } catch (error) {
        console.error("Error adding to cart:", error);
    }
}

function updateCartDropdown() {
    try {
        const cartDropdownMenu = document.getElementById('cart-dropdown-menu');
        const cartCount = document.getElementById('cart-count');
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

        if (cartDropdownMenu) {
            cartDropdownMenu.innerHTML = '';
            if (cartItems.length === 0) {
                cartDropdownMenu.innerHTML = '<li><p class="text-center mb-0">Your cart is empty.</p></li>';
            } else {
                cartItems.forEach((item, index) => {
                    cartDropdownMenu.innerHTML += `
                        <li class="cart-item-dropdown w-100">
                            <img src="${item.image}" alt="${item.name}">
                            <div class="cart-item-details-dropdown">
                                <span>${item.name}</span>
                            </div>
                            <span class="cart-item-price-dropdown">$${item.price}</span>
                            <div class="cart-item-actions-dropdown">
                                <button class="btn btn-sm btn-danger" onclick="removeItem(${index})">Remove</button>
                            </div>
                        </li>
                    `;
                });
                cartDropdownMenu.innerHTML += `
                    <li><a href="cart.html" class="btn btn-primary w-100 mt-2 checkout-btn">Check Out</a></li>
                `;
            }
            cartCount.textContent = cartItems.length.toString();
        }
    } catch (error) {
        console.error("Error updating cart dropdown:", error);
    }
}

function clearCart() {
    try {
        localStorage.removeItem('cartItems');
        loadCartItems();
        updateCartDropdown();
    } catch (error) {
        console.error("Error clearing cart:", error);
    }
}
>>>>>>> f7195bd (UPDATE)
