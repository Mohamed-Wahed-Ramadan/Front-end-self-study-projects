document.addEventListener('DOMContentLoaded', function() {
    // تحقق من أن المستخدم مسؤول
    const username = localStorage.getItem('username');
    if (username !== 'admin') {
        window.location.href = 'home.html';
    }

    // عرض المنتجات الحالية
    renderAdminProducts();


    // إضافة منتج جديد
    document.getElementById('add-product-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const newProduct = {
            id: Date.now().toString(),
            img: document.getElementById('product-img').value,
            text: document.getElementById('product-text').value,
            discription: document.getElementById('product-discription').value,
            price: document.getElementById('product-price').value,
            amount: 0
        };
        
        const category = document.getElementById('product-category').value;
        let products = JSON.parse(localStorage.getItem(`products${category}`)) || [];
        products.push(newProduct);
        localStorage.setItem(`products${category}`, JSON.stringify(products));
        
        // إعادة عرض المنتجات
        renderAdminProducts();
        this.reset();
    });
});

function renderAdminProducts() {
    const categories = ['grilled', 'appetizers', 'seafood', 'pizza', 'pastries', 'desserts', 'drinks'];
    const productList = document.getElementById('admin-products-list');
    productList.innerHTML = '';
    
    let hasProducts = false;
    
    categories.forEach(category => {
        const products = JSON.parse(localStorage.getItem(`products${category}`)) || [];
        
        products.forEach(product => {
            hasProducts = true;
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <button class="delete-btn" data-id="${product.id}" data-category="${category}"><i class="bi bi-trash" style="font-size: 1rem; color: #fff;"></i>
</button>
                <img src="${product.img}" alt="${product.text}" style="max-width: 100%; height: 150px; object-fit: cover; " loading="lazy">
                <h3>${product.text}</h3>
                <p class="cen">${product.discription}</p>
                <p class="cen">السعر: ${product.price} L.E</p>
                <p class="cen">القسم: ${getCategoryName(category)}</p>
            `;
            productList.appendChild(productCard);
        });
    });
    
    if (!hasProducts) {
        productList.innerHTML = '<p class="cen" >لا توجد منتجات مضافة بعد</p>';
    }
    
    // إضافة أحداث لحذف المنتجات
    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            const category = this.getAttribute('data-category');
            let products = JSON.parse(localStorage.getItem(`products${category}`)) || [];
            products = products.filter(p => p.id !== id);
            localStorage.setItem(`products${category}`, JSON.stringify(products));
            renderAdminProducts();
        });
    });
}

function getCategoryName(category) {
    const names = {
        grilled: 'مشويات',
        appetizers: 'مقبلات',
        seafood: 'أسماك',
        pizza: 'بيتزا',
        pastries: 'فطائر',
        desserts: 'حلويات',
        drinks: 'مشروبات'
    };
    return names[category];
}
// عند إضافة منتج جديد
function addNewProduct() {
    const newProduct = {
        id: Date.now().toString(), // إنشاء معرف فريد
        // جمع بيانات المنتج من النموذج
    };
    
    const category = document.getElementById('product-category').value;
    let products = JSON.parse(localStorage.getItem(`products${category}`)) || [];
    products.push(newProduct);
    localStorage.setItem(`products${category}`, JSON.stringify(products));
    
    // إرسال حدث لتحديث الصفحة الرئيسية
    const event = new Event('productsUpdated');
    window.dispatchEvent(event);
}

///////////////////////////////////////
