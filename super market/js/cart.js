 //////////////////////////////////////////////////////////////////////
    // ظهور/إخفاء الزر عند التمرير
    window.addEventListener('scroll', function() {
        const backToTopBtn = document.getElementById('backToTopBtn');
        if (window.pageYOffset > 300) { // يظهر بعد التمرير 300px
          backToTopBtn.classList.add('show');
        } else {
          backToTopBtn.classList.remove('show');
        }
      });
      
      // العودة لأعلى الصفحة عند النقر
      document.getElementById('backToTopBtn').addEventListener('click', function() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth' // تأثير سلس للتمرير
        });
      });
      //////////////////////////////////////////////////////////////////

// استعادة الوضع الليلي/النهاري
document.addEventListener('DOMContentLoaded', () => {
    // استعادة وضع الثيم
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.setAttribute('data-bs-theme', savedTheme);
    
    // تحديث زر الثيم
    const darkModeToggle = document.getElementById('darkModeToggle');
    const icon = darkModeToggle.querySelector('i');
    if (savedTheme === 'dark') {
        icon.className = 'bi bi-sun-fill';
        darkModeToggle.innerHTML = '<i class="bi bi-sun-fill"></i> Day mode';
    }
    
    // استعادة بيانات المستخدم
    const userName = localStorage.getItem('userName') || 'Visitor';
    const userPhone = localStorage.getItem('userPhone') || 'Not available ';
    
    document.getElementById('user').textContent = userName;
    document.getElementById('userNameDisplay').textContent = userName;
    document.getElementById('userPhoneDisplay').textContent = userPhone;
    
    // عرض منتجات السلة
    displayCartItems();
    
    // تحديث ملخص الطلب
    updateOrderSummary();
});

// تبديل الوضع الليلي/النهاري
document.getElementById('darkModeToggle').addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.body.setAttribute('data-bs-theme', newTheme);
    
    // تغيير الأيقونة
    const icon = darkModeToggle.querySelector('i');
    icon.className = newTheme === 'dark' ? 'bi bi-sun-fill' : 'bi bi-moon-fill';
    
    // تغيير نص الزر
    darkModeToggle.innerHTML = newTheme === 'dark' ? 
        '<i class="bi bi-sun-fill"></i> Day mode' : 
        '<i class="bi bi-moon-fill"></i> Night mode';
    
    // حفظ التفضيل
    localStorage.setItem('theme', newTheme);
});
///////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', () => {
    // استعادة وضع الثيم
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.setAttribute('data-bs-theme', savedTheme);
    
    // تحديث زر الثيم
    const darkModeToggle = document.getElementById('darkModeToggle');
    const icon = darkModeToggle.querySelector('i');
    if (savedTheme === 'dark') {
        icon.className = 'bi bi-sun-fill';
        darkModeToggle.innerHTML = '<i class="bi bi-sun-fill"></i> Day mode';
    }
    
    // استعادة بيانات المستخدم
    const userName = localStorage.getItem('userName') || 'Visitor';
    const userPhone = localStorage.getItem('userPhone') || 'Not available';
    
    document.getElementById('user').textContent = userName;
    document.getElementById('userNameDisplay').textContent = userName;
    document.getElementById('userPhoneDisplay').textContent = userPhone;
    
    // عرض منتجات السلة
    displayCartItems();
    
    // تحديث ملخص الطلب
    updateOrderSummary();
});
////////////////////////////////////////////////////////////
// عرض منتجات السلة
function displayCartItems() {
    const cartProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];
    const cartItemsContainer = document.getElementById('cartItemsContainer');
    
    if (cartProducts.length === 0) {
        cartItemsContainer.innerHTML = '<p class="text-center">The Cart is empty</p>';
        return;
    }
    
    let tableHTML = `
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Photo</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Discound</th>
                    <th>Mount</th>
                    <th>Total</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    cartProducts.forEach(item => {
        const priceAfterDiscount = item.price * (1 - item.discount / 100);
        const itemTotal = priceAfterDiscount * (item.quantity || 1);
        
        tableHTML += `
            <tr id="product-${item.id}">
                <td><img src="./img/${item.image}" alt="${item.name}" style="width: 50px; height: 50px; object-fit: cover;"></td>
                <td>${item.name}</td>
                <td>${item.price}$</td>
                <td>${item.discount}%</td>
                <td>${item.quantity || 1}</td>
                <td>${itemTotal.toFixed(2)}$</td>
                <td>
                    <button class="btn btn-danger btn-sm remove-item" data-id="${item.id}">
                        <i class="bi bi-trash"></i> Remove
                    </button>
                </td>
            </tr>
        `;
    });
    
    tableHTML += `
            </tbody>
        </table>
    `;
    
    cartItemsContainer.innerHTML = tableHTML;
    
    // إضافة event listeners لأزرار الحذف الجديدة
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', removeItemFromCart);
    });
}
//////////////////
function removeItemFromCart() {
    const productId = this.getAttribute('data-id');
    let cartProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];
    
    // البحث عن العنصر وحذفه
    const index = cartProducts.findIndex(item => item.id == productId);
    if (index !== -1) {
        cartProducts.splice(index, 1);
        
        // حفظ التغييرات في localStorage
        localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
        localStorage.setItem('cartCount', cartProducts.length);
        
        // تحديث العداد في الشريط العلوي إذا كان موجودًا
        const xNum = document.getElementById("x-num");
        if (xNum) {
            xNum.textContent = cartProducts.length;
        }
        
        // إزالة الصف من الجدول مباشرة
        const row = document.getElementById(`product-${productId}`);
        if (row) {
            row.remove();
        }
        
        // تحديث الملخص المالي
        updateOrderSummary();
        
        // إظهار رسالة تأكيد
        alert('Product removed from cart successfully!');
        
        // إذا كانت السلة فارغة الآن، عرض رسالة
        if (cartProducts.length === 0) {
            document.getElementById('cartItemsContainer').innerHTML = '<p class="text-center">The Cart is empty</p>';
        }
    }
}
//////////////////
// تحديث ملخص الطلب
function updateOrderSummary() {
    const cartProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];
    
    let totalBeforeDiscount = 0;
    let totalDiscountAmount = 0;
    let totalAfterDiscount = 0;
    
    cartProducts.forEach(item => {
        const quantity = item.quantity || 1;
        const price = parseFloat(item.price);
        const discount = parseFloat(item.discount);
        
        totalBeforeDiscount += price * quantity;
        totalDiscountAmount += (price * discount / 100) * quantity;
    });
    
    totalAfterDiscount = totalBeforeDiscount - totalDiscountAmount;
    
    // تحديث العناصر في واجهة المستخدم
    document.getElementById('totalBeforeDiscount').textContent = totalBeforeDiscount.toFixed(2);
    document.getElementById('totalDiscount').textContent = totalDiscountAmount.toFixed(2);
    document.getElementById('totalAfterDiscount').textContent = totalAfterDiscount.toFixed(2);
    
    // إذا كانت السلة فارغة
    if (cartProducts.length === 0) {
        document.getElementById('cartItemsContainer').innerHTML = '<p class="text-center" style=" color: black;">The Cart is empty</p>';
    }
}
/////////////////////////////////////////////////////
// تأكيد الشراء
document.getElementById('confirmPurchase').addEventListener('click', () => {
    // عرض رسالة تأكيد
    alert('Thank you for using our website. A delivery representative will contact you soon.');
    
    // مسح بيانات السلة
    localStorage.removeItem('cartProducts');
    localStorage.removeItem('cartCount');
    
    // الانتقال إلى صفحة تسجيل الدخول
    window.location.href = 'index.html';
});

// العودة إلى الصفحة الرئيسية
document.getElementById('backToHome').addEventListener('click', () => {
    window.location.href = 'home.html'; // أو أي صفحة رئيسية لديك
});

// تسجيل الخروج
document.querySelector('.logout').addEventListener('click', () => {
    localStorage.clear();
    window.location.href = 'index.html';
});
