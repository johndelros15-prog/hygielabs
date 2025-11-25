// Product Data
const products = {
    briefs: [
        {
            id: 1,
            name: "Premium Cotton Boxers",
            price: 150.00,
            Quantity: "3 per orders",
            image: "data:image/jpeg;base64,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",
            description: "Luxurious cotton boxers for ultimate comfort",
            
            materials: "95% Premium Cotton, 5% Elastane",
            sizes: ["S", "M", "L", "XL"],
            colors: ["White", "Black", "Navy Blue", "Gray"],
            features: ["Breathable fabric", "Comfortable fit", "Long-lasting", "Easy care"]
        },
        {
            id: 2,
            name: "Silk Blend Briefs",
            price: 220.00,
            Quantity: "2 per orders",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGn3o-IfLeZflQYzGrcEsuX1DCk8GqibfDGw&s",
            description: "Elegant silk blend for special occasions",
            materials: "70% Silk, 25% Cotton, 5% Elastane",
            sizes: ["S", "M", "L", "XL"],
            colors: ["Champagne", "Black", "Burgundy"],
            features: ["Silky smooth", "Temperature regulating", "Anti-bacterial", "Premium quality"]
        },
        {
            id: 3,
            name: "Sport Performance Briefs",
            price: 250.00,
            Quantity: "3 per orders",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-rmBIcm9yVCCq3yRzDtYGUOw9UAKcdavGSQ&s",
            description: "Advanced moisture-wicking technology",
            materials: "88% Polyester, 12% Spandex",
            sizes: ["S", "M", "L", "XL", "XXL"],
            colors: ["Black", "Navy", "Gray", "White"],
            features: ["Moisture-wicking", "Quick-dry", "Odor-resistant", "4-way stretch"]
        },
        {
            id: 4,
            name: "Bamboo Fiber Briefs",
            price: 350.00,
            Quantity: "5 per orders",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGJf-BDSH9YcHfP7YgKV6yzLBdEnmT_2G2Qg&s",
            description: "Eco-friendly bamboo fiber comfort",
            materials: "95% Bamboo Fiber, 5% Elastane",
            sizes: ["S", "M", "L", "XL"],
            colors: ["Natural", "Light Blue", "Sage Green"],
            features: ["Eco-friendly", "Ultra-soft", "Anti-microbial", "Sustainable"]
        },
        {
            id: 5,
            name: "Model Briefs",
            price: 250.00,
            Quantity: "2 per orders",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcEy2oB9pGVuLax3OoDLKQGz3WW8Cv4lKeWg&s",
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
          
