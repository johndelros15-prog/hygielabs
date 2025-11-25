// Product Data
const products = {
    briefs: [
        {
            id: 1,
            name: "Premium Cotton Briefs",
            price: 450.00,
            image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop",
            description: "Luxurious cotton briefs for ultimate comfort",
            materials: "95% Premium Cotton, 5% Elastane",
            sizes: ["S", "M", "L", "XL"],
            colors: ["White", "Black", "Navy Blue", "Gray"],
            features: ["Breathable fabric", "Comfortable fit", "Long-lasting", "Easy care"]
        },
        {
            id: 2,
            name: "Silk Blend Briefs",
            price: 850.00,
            image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop",
            description: "Elegant silk blend for special occasions",
            materials: "70% Silk, 25% Cotton, 5% Elastane",
            sizes: ["S", "M", "L", "XL"],
            colors: ["Champagne", "Black", "Burgundy"],
            features: ["Silky smooth", "Temperature regulating", "Anti-bacterial", "Premium quality"]
        },
        {
            id: 3,
            name: "Sport Performance Briefs",
            price: 650.00,
            image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&h=400&fit=crop",
            description: "Advanced moisture-wicking technology",
            materials: "88% Polyester, 12% Spandex",
            sizes: ["S", "M", "L", "XL", "XXL"],
            colors: ["Black", "Navy", "Gray", "White"],
            features: ["Moisture-wicking", "Quick-dry", "Odor-resistant", "4-way stretch"]
        },
        {
            id: 4,
            name: "Bamboo Fiber Briefs",
            price: 750.00,
            image: "https://images.unsplash.com/photo-1506629905607-d405b7a30db3?w=400&h=400&fit=crop",
            description: "Eco-friendly bamboo fiber comfort",
            materials: "95% Bamboo Fiber, 5% Elastane",
            sizes: ["S", "M", "L", "XL"],
            colors: ["Natural", "Light Blue", "Sage Green"],
            features: ["Eco-friendly", "Ultra-soft", "Anti-microbial", "Sustainable"]
        },
        {
            id: 5,
            name: "Luxury Modal Briefs",
            price: 950.00,
            image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=400&h=400&fit=crop",
            description: "Premium modal fabric for everyday luxury",
            materials: "92% Modal, 8% Elastane",
            sizes: ["S", "M", "L", "XL"],
            colors: ["Pearl White", "Midnight Blue", "Charcoal"],
            features: ["Ultra-soft modal", "Shape retention", "Color fast", "Premium finish"]
        }
    ],
    deodorants: [
        {
            id: 6,
            name: "Ocean Breeze Deodorant",
            price: 380.00,
            image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop",
            description: "Fresh ocean scent with 48-hour protection",
            materials: "Aluminum-free, Alcohol-free",
            sizes: ["50ml", "100ml"],
            colors: ["Blue"],
            features: ["48-hour protection", "Ocean fragrance", "No white marks", "Skin-friendly"]
        },
        {
            id: 7,
            name: "Woods & Spice Deodorant",
            price: 420.00,
            image: "https://images.unsplash.com/photo-1603048297152-4d8f3f3b1234?w=400&h=400&fit=crop",
            description: "Masculine wood and spice blend",
            materials: "Natural extracts, Essential oils",
            sizes: ["50ml", "100ml"],
            colors: ["Amber"],
            features: ["Woody scent", "Long-lasting", "Natural ingredients", "Premium fragrance"]
        },
        {
            id: 8,
            name: "Active Sport Deodorant",
            price: 350.00,
            image: "https://images.unsplash.com/photo-1583743814966-8936f37f4678?w=400&h=400&fit=crop",
            description: "Maximum protection for active lifestyle",
            materials: "Anti-bacterial formula",
            sizes: ["50ml", "100ml", "200ml"],
            colors: ["Green"],
            features: ["Sport strength", "Anti-bacterial", "Quick-dry", "Motion activated"]
        },
        {
            id: 9,
            name: "Sensitive Skin Deodorant",
            price: 480.00,
            image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400&h=400&fit=crop",
            description: "Gentle formula for sensitive skin",
            materials: "Hypoallergenic, Fragrance-free option",
            sizes: ["50ml"],
            colors: ["White"],
            features: ["Hypoallergenic", "Dermatologist tested", "No irritation", "Gentle protection"]
        },
        {
            id: 10,
            name: "Luxury Collection Deodorant",
            price: 650.00,
            image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&h=400&fit=crop",
            description: "Premium fragrance with silver ions",
            materials: "Silver ion technology, Premium oils",
            sizes: ["75ml"],
            colors: ["Silver"],
            features: ["Silver ion protection", "Premium scent", "Luxury packaging", "All-day freshness"]
        }
    ],
    mouthspray: [
        {
            id: 11,
            name: "Ice Cool Mouth Spray",
            price: 280.00,
            image: "https://images.unsplash.com/photo-1581509358266-2c2198a8f3f4?w=400&h=400&fit=crop",
            description: "Instant fresh breath with cooling sensation",
            materials: "Natural mint extracts, Xylitol",
            sizes: ["15ml", "30ml"],
            colors: ["Clear"],
            features: ["Instant fresh", "Cooling effect", "Sugar-free", "Compact size"]
        },
        {
            id: 12,
            name: "Herbal Fresh Mouth Spray",
            price: 320.00,
            image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop",
            description: "Natural herbs for long-lasting freshness",
            materials: "Herbal extracts, Essential oils",
            sizes: ["15ml", "30ml"],
            colors: ["Green"],
            features: ["Natural herbs", "Long-lasting", "Antibacterial", "Alcohol-free"]
        },
        {
            id: 13,
            name: "Whitening Mouth Spray",
            price: 450.00,
            image: "https://images.unsplash.com/photo-1609840114035-3c98169ab28b?w=400&h=400&fit=crop",
            description: "Fresh breath with teeth whitening benefits",
            materials: "Hydrogen peroxide, Mint oil",
            sizes: ["20ml"],
            colors: ["Pearl White"],
            features: ["Whitening action", "Fresh breath", "Stain removal", "Professional formula"]
        },
        {
            id: 14,
            name: "Probiotic Mouth Spray",
            price: 550.00,
            image: "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=400&h=400&fit=crop",
            description: "Balances oral microbiome for healthy mouth",
            materials: "Probiotics, Natural enzymes",
            sizes: ["15ml"],
            colors: ["Clear"],
            features: ["Oral probiotics", "Microbiome balance", "Long-term health", "Natural protection"]
        },
        {
            id: 15,
            name: "Premium Silver Mouth Spray",
            price: 680.00,
            image: "https://images.unsplash.com/photo-1609840114035-3c98169ab28b?w=400&h=400&fit=crop",
            description: "Colloidal silver for maximum oral hygiene",
            materials: "Colloidal silver, Essential oils",
            sizes: ["25ml"],
            colors: ["Silver"],
            features: ["Colloidal silver", "Premium formula", "Maximum protection", "Luxury packaging"]
        }
    ]
};

// Cart functionality
let cart = [];
let orders = [];
let selectedPaymentMethod = '';

// Initialize the store
document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
    setupEventListeners();
    updateCartCount();
});

function loadProducts() {
    // Load Briefs
    const briefsContainer = document.getElementById('briefs-products');
    products.briefs.forEach(product => {
        briefsContainer.appendChild(createProductCard(product));
    });

    // Load Deodorants
    const deodorantsContainer = document.getElementById('deodorants-products');
    products.deodorants.forEach(product => {
        deodorantsContainer.appendChild(createProductCard(product));
    });

    // Load Mouth Spray
    const mouthsprayContainer = document.getElementById('mouthspray-products');
    products.mouthspray.forEach(product => {
        mouthsprayContainer.appendChild(createProductCard(product));
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.onclick = () => showProductDetails(product);

    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-price">₱${product.price.toFixed(2)}</p>
            <p class="product-description">${product.description}</p>
            <div class="quantity-controls">
                <button class="quantity-btn" onclick="updateQuantity(event, ${product.id}, -1)">-</button>
                <span id="qty-${product.id}">1</span>
                <button class="quantity-btn" onclick="updateQuantity(event, ${product.id}, 1)">+</button>
            </div>
            <button class="add-to-cart-btn" onclick="addToCart(event, ${product.id})">
                Add to Cart
            </button>
        </div>
    `;

    return card;
}

function showProductDetails(product) {
    const modal = document.getElementById('productModal');
    const modalContent = document.getElementById('modalContent');
    
    modalContent.innerHTML = `
        <div style="display: flex; gap: 30px; flex-wrap: wrap;">
            <div style="flex: 1; min-width: 300px;">
                <img src="${product.image}" alt="${product.name}" style="width: 100%; border-radius: 15px;">
            </div>
            <div style="flex: 1; min-width: 300px;">
                <h2 style="color: #2a5298; margin-bottom: 20px;">${product.name}</h2>
                <p style="font-size: 2em; color: #667eea; font-weight: 700; margin-bottom: 20px;">₱${product.price.toFixed(2)}</p>
                <p style="margin-bottom: 20px; font-size: 1.1em;">${product.description}</p>
                
                <div style="margin-bottom: 20px;">
                    <h4 style="color: #2a5298; margin-bottom: 10px;">Materials:</h4>
                    <p>${product.materials}</p>
                </div>
                
                <div style="margin-bottom: 20px;">
                    <h4 style="color: #2a5298; margin-bottom: 10px;">Available Sizes:</h4>
                    <p>${product.sizes.join(', ')}</p>
                </div>
                
                <div style="margin-bottom: 20px;">
                    <h4 style="color: #2a5298; margin-bottom: 10px;">Colors:</h4>
                    <p>${product.colors.join(', ')}</p>
                </div>
                
                <div style="margin-bottom: 20px;">
                    <h4 style="color: #2a5298; margin-bottom: 10px;">Features:</h4>
                    <ul style="padding-left: 20px;">
                        ${product.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
                
                <div style="margin-top: 30px;">
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="updateQuantity(event, ${product.id}, -1)">-</button>
                        <span id="modal-qty-${product.id}">1</span>
                        <button class="quantity-btn" onclick="updateQuantity(event, ${product.id}, 1)">+</button>
                    </div>
                    <button class="add-to-cart-btn" style="margin-top: 15px;" onclick="addToCart(event, ${product.id})">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
}

function updateQuantity(event, productId, change) {
    event.stopPropagation();
    const qtyElement = document.getElementById(`qty-${productId}`) || document.getElementById(`modal-qty-${productId}`);
    if (qtyElement) {
        let currentQty = parseInt(qtyElement.textContent);
        let newQty = currentQty + change;
        if (newQty < 1) newQty = 1;
        qtyElement.textContent = newQty;
    }
}

function addToCart(event, productId) {
    event.stopPropagation();
    
    let product = null;
    let category = '';
    
    // Find the product
    for (let cat in products) {
        const found = products[cat].find(p => p.id === productId);
        if (found) {
            product = found;
            category = cat;
            break;
        }
    }
    
    if (!product) return;
    
    const qtyElement = document.getElementById(`qty-${productId}`) || document.getElementById(`modal-qty-${productId}`);
    const quantity = qtyElement ? parseInt(qtyElement.textContent) : 1;
    
    // Check if product already in cart
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            ...product,
            quantity: quantity
        });
    }
    
    updateCart();
    showNotification('Product added to cart!');
}

function updateCart() {
    updateCartCount();
    updateCartDisplay();
}

function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.querySelector('.cart-count').textContent = totalItems;
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; color: #999; padding: 20px;">Your cart is empty</p>';
        cartTotal.textContent = '0.00';
        return;
    }
    
    cartItems.innerHTML = '';
    let total = 0;
    
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div>₱${item.price.toFixed(2)} x ${item.quantity}</div>
                <div class="cart-item-price">₱${itemTotal.toFixed(2)}</div>
            </div>
            <button onclick="removeFromCart(${index})" style="background: #ff4444; color: white; border: none; padding: 5px 10px; border-radius: 5px; cursor: pointer;">
                <i class="fas fa-trash"></i>
            </button>
        `;
        cartItems.appendChild(cartItem);
    });
    
    cartTotal.textContent = total.toFixed(2);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function toggleCart() {
    const cart = document.getElementById('cart');
    cart.classList.toggle('active');
}

function checkout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!', 'error');
        return;
    }
    document.getElementById('paymentModal').style.display = 'block';
}

function selectPayment(method) {
    selectedPaymentMethod = method;
    document.querySelectorAll('.payment-method').forEach(el => el.classList.remove('selected'));
    event.currentTarget.classList.add('selected');
}

function closePayment() {
    document.getElementById('paymentModal').style.display = 'none';
}

function processOrder() {
    const orderId = 'ORD' + Date.now();
    const order = {
        id: orderId,
        items: [...cart],
        total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        date: new Date().toLocaleString(),
        status: 'Processing'
    };
    
    orders.push(order);
    cart = [];
    updateCart();
    closePayment();
    toggleCart();
    showNotification('Order placed successfully!');
    updateOrdersDisplay();
}

function toggleOrders() {
    document.getElementById('ordersModal').style.display = 'block';
    updateOrdersDisplay();
}

function updateOrdersDisplay() {
    const ordersList = document.getElementById('ordersList');
    
    if (orders.length === 0) {
        ordersList.innerHTML = '<p style="text-align: center; color: #999; padding: 20px;">No orders yet</p>';
        return;
    }
    
    ordersList.innerHTML = '';
    orders.forEach(order => {
        const orderDiv = document.createElement('div');
        orderDiv.style.cssText = 'border: 1px solid #ddd; border-radius: 10px; padding: 20px; margin-bottom: 20px;';
        orderDiv.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                <h3>Order #${order.id}</h3>
                <button onclick="cancelOrder('${order.id}')" style="background: #ff4444; color: white; border: none; padding: 8px 15px; border-radius: 5px; cursor: pointer;">
                    Cancel Order
                </button>
            </div>
            <p><strong>Date:</strong> ${order.date}</p>
            <p><strong>Status:</strong> <span style="color: #2a5298;">${order.status}</span></p>
            <p><strong>Total:</strong> ₱${order.total.toFixed(2)}</p>
            <div style="margin-top: 15px;">
                <strong>Items:</strong>
                <ul style="padding-left: 20px; margin-top: 10px;">
                    ${order.items.map(item => `<li>${item.name} x ${item.quantity}</li>`).join('')}
                </ul>
            </div>
        `;
        ordersList.appendChild(orderDiv);
    });
}

function cancelOrder(orderId) {
    const orderIndex = orders.findIndex(order => order.id === orderId);
    if (orderIndex !== -1) {
        orders[orderIndex].status = 'Cancelled';
        updateOrdersDisplay();
        showNotification('Order cancelled successfully!');
    }
}

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : '#f44336'};
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.2);
        z-index: 2000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

function setupEventListeners() {
    // Modal close buttons
    document.querySelectorAll('.close').forEach(closeBtn => {
        closeBtn.onclick = function() {
            this.closest('.modal').style.display = 'none';
        };
    });

    // Payment form
    document.getElementById('paymentForm').onsubmit = function(e) {
        e.preventDefault();
        if (!selectedPaymentMethod) {
            showNotification('Please select a payment method!', 'error');
            return;
        }
        
        // Simulate payment processing
        setTimeout(() => {
            processOrder();
            showNotification('Thanks for your order, this is only a demo store!');
        }, 1000);
    };

    // Click outside modal to close
    window.onclick = function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    };
                     }
          
