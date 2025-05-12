        function loadFavorites() {
    const container = document.getElementById('favorites-container');
    const mofadala = JSON.parse(localStorage.getItem('mofadala')) || [];

    if (mofadala.length === 0) {
        container.innerHTML = '<p style="color:#fff"; font-size:30px;>لا توجد عناصر في المفضلة</p>';
        return;
    }

    container.innerHTML = mofadala.map(product => `
        <div class="favorite-item" data-id="${product.id}" data-img="${product.img}" data-text="${product.text}" data-price="${product.price}" data-discription="${product.discription}">
            <button class="remove-btn" onclick="removeFavorite('${product.id}')"><i class="bi bi-trash" style="font-size: 1rem; color: #fff ;"></i></button>
            <div style=" width:100% ; height: 45%;"><img style=" width:100% ; height: 100%;" src="${product.img}" alt="${product.text}" loading="lazy"></div>
            <h3>${product.text}</h3>
            <p style=" width:100% ; height: 25%;font-weight: bold;">${product.discription}</p>
            <p class="price">${product.price} L.E</p>
            <input type="number" class="quantity br slide-input" value="1" min="1">
            <button class="add-to-cart br slide-btn" style="border-radius:20px;">شراء</button>
        </div>
    `).join('');

    // ✅ بعد ما العناصر تترسم، اربط الحدث لكل زرار "شراء"
    const buyButtons = container.querySelectorAll('.add-to-cart');
    buyButtons.forEach(button => {
       button.addEventListener('click', function () {
    const item = this.closest('.favorite-item');
    const quantityInput = item.querySelector('.quantity');
    const quantity = parseInt(quantityInput.value) || 1;

    const product = {
        id: item.dataset.id,
        img: item.dataset.img,
        text: item.dataset.text,
        price: item.dataset.price,
        discription: item.dataset.discription
    };

    addToCart(product, quantity);
});

    });
}

            function removeFavorite(productId) {
                // جلب البيانات الحالية من localStorage
                let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
                let mofadala = JSON.parse(localStorage.getItem('mofadala')) || [];

                    // حذف الـ id من قائمة favorites
            favorites = favorites.filter(id => id !== productId);

            // حذف العنصر من mofadala
            mofadala = mofadala.filter(product => product.id !== productId);

            // تحديث localStorage
            localStorage.setItem('favorites', JSON.stringify(favorites));
            localStorage.setItem('mofadala', JSON.stringify(mofadala));

                // تحديث العرض (تقدر تغير الطريقة دي حسب طريقة عرضك للعناصر)
            location.reload(); // أو استدعاء دالة بتعرض العناصر من جديد لو عندك واحدة
                }

        
        document.addEventListener('DOMContentLoaded', loadFavorites);


        ///////////////////////////////////////////////////////////////////////////////////////
        // كود الزرار
        function addToCart(product, quantity) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    quantity = parseInt(quantity);
    if (isNaN(quantity) || quantity < 1) quantity = 1;

    const existingIndex = cart.findIndex(p => p.id === product.id);

    if (existingIndex !== -1) {
        // المنتج موجود بالفعل → زوّد الكمية فقط
        cart[existingIndex].quantity += quantity;
    } else {
        // منتج جديد → ضيفه كامل
        const newItem = {
            id: product.id,
            img: product.img,
            text: product.text,
            price: product.price,
            discription: product.discription,
            amount: 0,
            quantity: quantity
        };
        cart.push(newItem);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert('تمت إضافة المنتج إلى السلة 🛒');
}

