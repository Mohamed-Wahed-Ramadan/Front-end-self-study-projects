const darkModeToggle = document.getElementById('darkModeToggle');
    
    darkModeToggle.addEventListener('click', () => {
      const currentTheme = document.body.getAttribute('data-bs-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      document.body.setAttribute('data-bs-theme', newTheme);
      
      // تغيير الأيقونة
      const icon = darkModeToggle.querySelector('i');
      icon.className = newTheme === 'dark' ? 'bi bi-sun-fill' : 'bi bi-moon-fill';
      
      // تغيير نص الزر (اختياري)
      darkModeToggle.innerHTML = newTheme === 'dark' ? 
        '<i class="bi bi-sun-fill"></i> الوضع النهاري' : 
        '<i class="bi bi-moon-fill"></i> الوضع الليلي';
      
      // حفظ التفضيل في localStorage
      localStorage.setItem('theme', newTheme);
    });

    // استعادة التفضيل عند تحميل الصفحة
    document.addEventListener('DOMContentLoaded', () => {
      const savedTheme = localStorage.getItem('theme') || 'light';
      document.body.setAttribute('data-bs-theme', savedTheme);
      
      const icon = darkModeToggle.querySelector('i');
      if (savedTheme === 'dark') {
        icon.className = 'bi bi-sun-fill';
        darkModeToggle.innerHTML = '<i class="bi bi-sun-fill"></i> الوضع النهاري';
      }
    });
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

  
  let userElement = document.getElementById("user"); // تغيير اسم المتغير
let username = localStorage.getItem("userName");

function displayUser() { // تغيير اسم الدالة
  userElement.innerHTML = username;
};
displayUser();
////////////////////////////////////////////////////////////////
const logoutButtons = document.querySelectorAll(".logout"); // الحصول على كل العناصر

function handleLogout() {
  // مسح كل بيانات localStorage
  localStorage.clear();
  
  // الانتقال إلى صفحة index.html
  window.location.href = "index.html";
}

// إضافة event listener لكل عنصر
logoutButtons.forEach(button => {
  button.addEventListener("click", handleLogout);
});


////////////////////////////////////protein////////////////////////////
    let productsProteinDom = document.querySelector(".makhzan-protein");
    let productsProtein = [
        {
          id: 1,
          image: "chek1",
          price: "12",
          discount: "10",
          name: "Chicken"
        },
        {
          id: 2,
          image: "chek2",
          price: "15",
          discount: "15",
          name: "Chicken 2"
        },
        {
          id: 3,
          image: "chek3",
          price: "20",
          discount: "5",
          name: "Chicken 3"
        },
        {
          id: 4,
          image: "chek4",
          price: "20",
          discount: "5",
          name: "Chicken 4"
        },
        {
          id: 5,
          image: "fish1",
          price: "15",
          discount: "15",
          name: "fish 5"
        },
        {
          id: 6,
          image: "fish2",
          price: "20",
          discount: "5",
          name: "fish 6"
        },
        {
          id: 7,
          image: "fish3",
          price: "20",
          discount: "5",
          name: "fish 7"
        },
        {
          id: 8,
          image: "fish4",
          price: "15",
          discount: "15",
          name: "fish 8"
        },
        {
          id: 9,
          image: "fish5",
          price: "20",
          discount: "5",
          name: "fish 9"
        },
        {
          id: 10,
          image: "egg",
          price: "20",
          discount: "5",
          name: "fish 10"
        },
        // يمكنك إضافة المزيد من المنتجات هنا
      ];
      function protein() {
        let productsProteinUi = productsProtein.map((item) => {
            return `
           <div class="protect">
                <div class="img">
                    <img src="./img/${item.image}.png" alt="${item.name}" loading="lazy">
                </div>
                <div class="sale">
                    <span class="price">${item.price}$</span>
                    <span class="dis"><i class="bi bi-tag fs-4 text-danger"></i> ${item.discount}%</span>
                </div>
          <button class="btn-cart" 
                  data-id="${item.id}"
                  data-name="${item.name}"
                  data-price="${item.price}"
                  data-image="${item.image}.png"
                  data-discount="${item.discount}">
            Add to cart <i class="bi bi-plus-square"></i>
          </button>
      </div>
            `;
        }).join('');
        productsProteinDom.innerHTML = productsProteinUi;
    };
    protein();



    //////////////////////vegetables//////////////////////////

    let productsvegetablesDom = document.querySelector(".makhzan-vegetables");
    let productsvegetables = [
        {
          id: 21,
          image: "veg1",
          price: "12",
          discount: "10",
          name: "vegetables 1"
        },
        {
          id: 22,
          image: "veg2",
          price: "15",
          discount: "15",
          name: "vegetables 2"
        },
        {
          id: 23,
          image: "veg3",
          price: "20",
          discount: "5",
          name: "vegetables 3"
        },
        {
          id: 24,
          image: "veg4",
          price: "20",
          discount: "5",
          name: "vegetables 4"
        },
        {
          id: 25,
          image: "veg5",
          price: "15",
          discount: "15",
          name: "vegetables 5"
        },
        {
          id: 26,
          image: "veg6",
          price: "20",
          discount: "5",
          name: "vegetables 6"
        },
        {
          id: 27,
          image: "veg7",
          price: "20",
          discount: "5",
          name: "vegetables 7"
        },
        {
          id: 28,
          image: "veg8",
          price: "15",
          discount: "15",
          name: "vegetables 8"
        },
        {
          id: 29,
          image: "veg9",
          price: "20",
          discount: "5",
          name: "vegetables 9"
        },
        
        // يمكنك إضافة المزيد من المنتجات هنا
      ];
      function vegetables() {
        let productsvegetablesUi = productsvegetables.map((item) => {
            return `
           <div class="protect">
                <div class="img">
                    <img src="./img/${item.image}.png" alt="${item.name}" loading="lazy">
                </div>
                <div class="sale">
                    <span class="price">${item.price}$</span>
                    <span class="dis"><i class="bi bi-tag fs-4 text-danger"></i> ${item.discount}%</span>
                </div>
          <button class="btn-cart" 
                  data-id="${item.id}"
                  data-name="${item.name}"
                  data-price="${item.price}"
                  data-image="${item.image}.png"
                  data-discount="${item.discount}">
            Add to cart <i class="bi bi-plus-square"></i>
          </button>
      </div>
            `;
        }).join('');
        productsvegetablesDom.innerHTML = productsvegetablesUi;
    };
    vegetables();

     //////////////////////drinks//////////////////////////

     let productsdrinksDom = document.querySelector(".makhzan-drinks");
     let productsdrinks = [
         {
           id: 31,
           image: "cola1",
           price: "12",
           discount: "10",
           name: "drinks 1"
         },
         {
           id: 32,
           image: "cola2",
           price: "15",
           discount: "15",
           name: "drinks 2"
         },
         {
           id: 33,
           image: "cola3",
           price: "20",
           discount: "5",
           name: "drinks 3"
         },
         {
           id: 34,
           image: "cola4",
           price: "20",
           discount: "5",
           name: "drinks 4"
         },
         {
           id: 35,
           image: "cola5",
           price: "15",
           discount: "15",
           name: "drinks 5"
         },
         {
           id: 36,
           image: "cola6",
           price: "20",
           discount: "5",
           name: "drinks 6"
         },
         {
           id: 37,
           image: "cola7",
           price: "20",
           discount: "5",
           name: "drinks 7"
         },
         {
           id: 38,
           image: "cola8",
           price: "15",
           discount: "15",
           name: "drinks 8"
         },
         {
           id: 39,
           image: "cola9",
           price: "20",
           discount: "5",
           name: "drinks 9"
         },
         
         // يمكنك إضافة المزيد من المنتجات هنا
       ];
       function drinks() {
         let productsdrinksUi = productsdrinks.map((item) => {
             return `
            <div class="protect">
                 <div class="img">
                     <img src="./img/${item.image}.png" alt="${item.name}" loading="lazy">
                 </div>
                 <div class="sale">
                     <span class="price">${item.price}$</span>
                     <span class="dis"><i class="bi bi-tag fs-4 text-danger"></i> ${item.discount}%</span>
                 </div>
          <button class="btn-cart" 
                  data-id="${item.id}"
                  data-name="${item.name}"
                  data-price="${item.price}"
                  data-image="${item.image}.png"
                  data-discount="${item.discount}">
            Add to cart <i class="bi bi-plus-square"></i>
          </button>
      </div>
             `;
         }).join('');
         productsdrinksDom.innerHTML = productsdrinksUi;
     };
     drinks();

      //////////////////////dairy//////////////////////////

      let productsdairyDom = document.querySelector(".makhzan-dairy");
      let productsdairy = [
          {
            id: 41,
            image: "milk1",
            price: "12",
            discount: "10",
            name: "dairy 1"
          },
          {
            id: 42,
            image: "milk2",
            price: "15",
            discount: "15",
            name: "dairy 2"
          },
          {
            id: 43,
            image: "milk3",
            price: "20",
            discount: "5",
            name: "dairy 3"
          },
          {
            id: 44,
            image: "milk4",
            price: "20",
            discount: "5",
            name: "dairy 4"
          },
          {
            id: 45,
            image: "milk5",
            price: "15",
            discount: "15",
            name: "dairy 5"
          },
          {
            id: 46,
            image: "milk6",
            price: "20",
            discount: "5",
            name: "dairy 6"
          },
          
          
          // يمكنك إضافة المزيد من المنتجات هنا
        ];
        function dairy() {
          let productsdairyUi = productsdairy.map((item) => {
              return `
             <div class="protect">
                  <div class="img">
                      <img src="./img/${item.image}.png" alt="${item.name}" loading="lazy">
                  </div>
                  <div class="sale">
                      <span class="price">${item.price}$</span>
                      <span class="dis"><i class="bi bi-tag fs-4 text-danger"></i> ${item.discount}%</span>
                  </div>
          <button class="btn-cart" 
                  data-id="${item.id}"
                  data-name="${item.name}"
                  data-price="${item.price}"
                  data-image="${item.image}.png"
                  data-discount="${item.discount}">
            Add to cart <i class="bi bi-plus-square"></i>
          </button>
      </div>
              `;
          }).join('');
          productsdairyDom.innerHTML = productsdairyUi;
      };
      dairy();

        //////////////////////starchies//////////////////////////

        let productsstarchiesDom = document.querySelector(".makhzan-starchies");
        let productsstarchies = [
            {
              id: 51,
              image: "flour",
              price: "12",
              discount: "10",
              name: "starchies 1"
            },
            {
              id: 52,
              image: "flour2",
              price: "15",
              discount: "15",
              name: "starchies 2"
            },
            {
              id: 53,
              image: "rice1",
              price: "20",
              discount: "5",
              name: "starchies 3"
            },
            {
              id: 54,
              image: "rice2",
              price: "20",
              discount: "5",
              name: "starchies 4"
            },
            {
              id: 55,
              image: "mac1",
              price: "15",
              discount: "15",
              name: "starchies 5"
            },
            {
              id: 56,
              image: "mac2",
              price: "20",
              discount: "5",
              name: "starchies 6"
            },
            {
              id: 57,
              image: "mac3",
              price: "20",
              discount: "5",
              name: "starchies 3"
            },
            {
              id: 58,
              image: "mac4",
              price: "20",
              discount: "5",
              name: "starchies 4"
            },
            {
              id: 59,
              image: "mac5",
              price: "15",
              discount: "15",
              name: "starchies 5"
            },
            {
              id: 60,
              image: "mac6",
              price: "20",
              discount: "5",
              name: "starchies 6"
            },
            
            
            // يمكنك إضافة المزيد من المنتجات هنا
          ];
          function starchies() {
            let productsstarchiesUi = productsstarchies.map((item) => {
                return `
               <div class="protect">
                    <div class="img">
                        <img src="./img/${item.image}.png" alt="${item.name}" loading="lazy">
                    </div>
                    <div class="sale">
                        <span class="price">${item.price}$</span>
                        <span class="dis"><i class="bi bi-tag fs-4 text-danger"></i> ${item.discount}%</span>
                    </div>
          <button class="btn-cart" 
                  data-id="${item.id}"
                  data-name="${item.name}"
                  data-price="${item.price}"
                  data-image="${item.image}.png"
                  data-discount="${item.discount}">
            Add to cart <i class="bi bi-plus-square"></i>
          </button>
      </div>
                `;
            }).join('');
            productsstarchiesDom.innerHTML = productsstarchiesUi;
        };
        starchies();

        //////////////////////detergents//////////////////////////

        let productsdetergentsDom = document.querySelector(".makhzan-detergents");
        let productsdetergents = [
            {
              id: 71,
              image: "arial1",
              price: "12",
              discount: "10",
              name: "detergents 1"
            },
            {
              id: 72,
              image: "arial2",
              price: "15",
              discount: "15",
              name: "detergents 2"
            },
            {
              id: 73,
              image: "arial3",
              price: "20",
              discount: "5",
              name: "detergents 3"
            },
            {
              id: 74,
              image: "arial4",
              price: "20",
              discount: "5",
              name: "detergents 4"
            },
            {
              id: 75,
              image: "arial5",
              price: "15",
              discount: "15",
              name: "detergents 5"
            },
            {
              id: 76,
              image: "arial6",
              price: "20",
              discount: "5",
              name: "detergents 6"
            },
            {
              id: 77,
              image: "arial7",
              price: "20",
              discount: "5",
              name: "detergents 3"
            },
            {
              id: 78,
              image: "arial8",
              price: "20",
              discount: "5",
              name: "detergents 4"
            },
            {
              id: 79,
              image: "arial9",
              price: "15",
              discount: "15",
              name: "detergents 5"
            },
            {
              id: 80,
              image: "arial10",
              price: "20",
              discount: "5",
              name: "detergents 6"
            },
            
            
            // يمكنك إضافة المزيد من المنتجات هنا
          ];
          function detergents() {
            let productsdetergentsUi = productsdetergents.map((item) => {
                return `
               <div class="protect">
                    <div class="img">
                        <img src="./img/${item.image}.png" alt="${item.name}" loading="lazy">
                    </div>
                    <div class="sale">
                        <span class="price">${item.price}$</span>
                        <span class="dis"><i class="bi bi-tag fs-4 text-danger"></i> ${item.discount}%</span>
                    </div>
          <button class="btn-cart" 
                  data-id="${item.id}"
                  data-name="${item.name}"
                  data-price="${item.price}"
                  data-image="${item.image}.png"
                  data-discount="${item.discount}">
            Add to cart <i class="bi bi-plus-square"></i>
          </button>
      </div>
                `;
            }).join('');
            productsdetergentsDom.innerHTML = productsdetergentsUi;
        };
        detergents();

         //////////////////////others//////////////////////////

         let productsothersDom = document.querySelector(".makhzan-others");
         let productsothers = [
             {
               id: 91,
               image: "chips1",
               price: "12",
               discount: "10",
               name: "chips 1"
             },
             {
               id: 92,
               image: "chips2",
               price: "15",
               discount: "15",
               name: "chips 2"
             },
             {
               id: 93,
               image: "chips3",
               price: "20",
               discount: "5",
               name: "chips 3"
             },
             {
               id: 94,
               image: "chips4",
               price: "20",
               discount: "5",
               name: "chips 4"
             },
             {
               id: 95,
               image: "chips5",
               price: "15",
               discount: "15",
               name: "chips 5"
             },
             {
               id: 96,
               image: "chips6",
               price: "20",
               discount: "5",
               name: "chips 6"
             },
             {
               id: 97,
               image: "chips7",
               price: "20",
               discount: "5",
               name: "chips 3"
             },
             {
               id: 98,
               image: "chips8",
               price: "20",
               discount: "5",
               name: "chips 4"
             },
             {
               id: 99,
               image: "chips9",
               price: "15",
               discount: "15",
               name: "chips 5"
             },
             {
               id: 100,
               image: "chips10",
               price: "20",
               discount: "5",
               name: "chips 6"
             },
             {
               id: 101,
               image: "chips11",
               price: "20",
               discount: "5",
               name: "chips 6"
             },
             {
               id: 102,
               image: "chips12",
               price: "20",
               discount: "5",
               name: "chips 6"
             },
             {
               id: 103,
               image: "chips13",
               price: "20",
               discount: "5",
               name: "chips 6"
             },
             {
               id: 104,
               image: "chips14",
               price: "20",
               discount: "5",
               name: "chips 6"
             },
             {
               id: 105,
               image: "chips15",
               price: "20",
               discount: "5",
               name: "chips 6"
             },
             {
               id: 106,
               image: "frezz1",
               price: "20",
               discount: "5",
               name: "frezzer 6"
             },
             {
               id: 107,
               image: "frezz2",
               price: "20",
               discount: "5",
               name: "frezzer 6"
             },
             {
               id: 108,
               image: "hony",
               price: "20",
               discount: "5",
               name: "honey 6"
             },
             {
               id: 109,
               image: "salt",
               price: "20",
               discount: "5",
               name: "salt 6"
             },
             {
               id: 110,
               image: "suger1",
               price: "20",
               discount: "5",
               name: "suger 6"
             },
             {
               id: 111,
               image: "tomato",
               price: "20",
               discount: "5",
               name: "tomato 6"
             },
             
             
             // يمكنك إضافة المزيد من المنتجات هنا
           ];
           function others() {
             let productsothersUi = productsothers.map((item) => {
                 return `
                <div class="protect">
                     <div class="img">
                         <img src="./img/${item.image}.png" alt="${item.name}" loading="lazy">
                     </div>
                     <div class="sale">
                         <span class="price">${item.price}$</span>
                         <span class="dis"><i class="bi bi-tag fs-4 text-danger"></i> ${item.discount}%</span>
                     </div>
          <button class="btn-cart" 
                  data-id="${item.id}"
                  data-name="${item.name}"
                  data-price="${item.price}"
                  data-image="${item.image}.png"
                  data-discount="${item.discount}">
            Add to cart <i class="bi bi-plus-square"></i>
          </button>
      </div>
                 `;
             }).join('');
             productsothersDom.innerHTML = productsothersUi;
         };
         others();

//////////////////////////////////////////////////////////////////////////////////
// الحصول على كل الأزرار (لاحظ استخدام querySelectorAll)
const btnAddCart = document.querySelectorAll(".btn-cart");
let x = localStorage.getItem('cartCount') ? parseInt(localStorage.getItem('cartCount')) : 0;
const xNum = document.getElementById("x-num");
const xItem = document.getElementById("x-item");
let cartProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];

// تحديث العداد في الواجهة أول تحميل
xNum.textContent = x;
updateCartDisplay();

function addX() {
    // الحصول على بيانات المنتج من خصائص الزر
    const product = {
      id: this.getAttribute('data-id'),
      name: this.getAttribute('data-name'),
      price: parseFloat(this.getAttribute('data-price')),
      image: this.getAttribute('data-image'),
      discount: parseFloat(this.getAttribute('data-discount'))
    };
  
    // التحقق من وجود المنتج مسبقاً
    const existingProductIndex = cartProducts.findIndex(p => p.id === product.id);
    
    if(existingProductIndex >= 0) {
      // إذا المنتج موجود، نزيد الكمية
      cartProducts[existingProductIndex].quantity = 
        (cartProducts[existingProductIndex].quantity || 1) + 1;
    } else {
      // إذا المنتج جديد، نضيفه
      product.quantity = 1;
      cartProducts.push(product);
      x++;
    }
  
    xNum.textContent = x;
    localStorage.setItem('cartCount', x);
    localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
    updateCartDisplay();
  }

  
function updateCartDisplay() {
  xItem.innerHTML = cartProducts.map(item => 
    `<p class="p-items">${item.name} - $${item.price}</p>`
  ).join('');
}

// إضافة event listener لكل عنصر
btnAddCart.forEach(button => {
  button.addEventListener("click", addX);
});
