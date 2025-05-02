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
          price: "7",
          discount: "10",
          name: "Chicken",
          title: "The price shown is for 1 kg."
        },
        {
          id: 2,
          image: "chek2",
          price: "4",
          discount: "15",
          name: "Chicken thighs",
          title: "The price shown is for 1 kg."
        },
        {
          id: 3,
          image: "chek3",
          price: "4",
          discount: "5",
          name: "Chicken wings",
          title: "The price shown is for 1 kg."
        },
        {
          id: 4,
          image: "chek4",
          price: "4",
          discount: "5",
          name: "Chicken breast",
          title: "The price shown is for 1 kg."
        },
        {
          id: 5,
          image: "fish1",
          price: "8",
          discount: "15",
          name: "Tilapia",
          title: "The price shown is for 1 kg."
        },
        {
          id: 6,
          image: "fish2",
          price: "7",
          discount: "5",
          name: "Mackerel",
          title: "The price shown is for 1 kg."
        },
        {
          id: 7,
          image: "fish3",
          price: "7",
          discount: "5",
          name: "Catfish",
          title: "The price shown is for 1 kg."
        },
        {
          id: 8,
          image: "fish4",
          price: "3",
          discount: "15",
          name: "Salmon",
          title: "The price shown is for 1 kg."
        },
        {
          id: 9,
          image: "fish5",
          price: "3",
          discount: "5",
          name: "Tuna",
          title: "The price shown is for 1 kg."
        },
        {
          id: 10,
          image: "egg",
          price: "5",
          discount: "5",
          name: "egg",
          title: "The price shown is for Plate."
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
                 <p style="display:inline;"><span class="span-1">Add to Cart </span><span class="span-2">${item.title}</span> </p>
                 <i class="bi bi-plus-square"></i>
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
          price: "2",
          discount: "10",
          name: "Onion",
          title: "The price shown is for 1 kg."
        },
        {
          id: 22,
          image: "veg2",
          price: "1",
          discount: "15",
          name: "Carrot",
          title: "The price shown is for 1 kg."
        },
        {
          id: 23,
          image: "veg3",
          price: "2",
          discount: "5",
          name: "Aubergine",
          title: "The price shown is for 1 kg."
        },
        {
          id: 24,
          image: "veg4",
          price: "3",
          discount: "5",
          name: "Cabbage",
          title: "The price shown is for 1 kg."
        },
        {
          id: 25,
          image: "veg5",
          price: "2",
          discount: "15",
          name: "Celery",
          title: "The price shown is for 1 kg."
        },
        {
          id: 26,
          image: "veg6",
          price: "1",
          discount: "5",
          name: "Green beans",
          title: "The price shown is for 1 kg."
        },
        {
          id: 27,
          image: "veg7",
          price: "2",
          discount: "5",
          name: "Garlic",
          title: "The price shown is for 1 kg."
        },
        {
          id: 28,
          image: "veg8",
          price: "2",
          discount: "15",
          name: "Cucumber",
          title: "The price shown is for 1 kg."
        },
        {
          id: 29,
          image: "veg9",
          price: "3",
          discount: "5",
          name: "Cauliflower",
          title: "The price shown is for 1 kg."
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
                 <p style="display:inline;"><span class="span-1">Add to Cart </span><span class="span-2">${item.title}</span> </p>
                  <i class="bi bi-plus-square"></i>
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
           price: "3",
           discount: "10",
           name: "Red bull",
          title: "The price shown is for can."
         },
         {
           id: 32,
           image: "cola2",
           price: "3",
           discount: "15",
           name: "Fanta saporuva",
          title: "The price shown is for can."
         },
         {
           id: 33,
           image: "cola3",
           price: "3",
           discount: "5",
           name: "Pepsi",
          title: "The price shown is for can."
         },
         {
           id: 34,
           image: "cola4",
           price: "3",
           discount: "5",
           name: "Fanta barry",
          title: "The price shown is for can."
         },
         {
           id: 35,
           image: "cola5",
           price: "4",
           discount: "15",
           name: "coca cola zero",
          title: "The price shown is for can."
         },
         {
           id: 36,
           image: "cola6",
           price: "4",
           discount: "5",
           name: "Pepsi",
          title: "The price shown is for can."
         },
         {
           id: 37,
           image: "cola7",
           price: "2",
           discount: "5",
           name: "Mango juice",
          title: "The price shown is for can."
         },
         {
           id: 38,
           image: "cola8",
           price: "2",
           discount: "15",
           name: "Red Guava Juice",
          title: "The price shown is for can."
         },
         {
           id: 39,
           image: "cola9",
           price: "2",
           discount: "5",
           name: "Mango juice",
          title: "The price shown is for can."
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
                  <p style="display:inline;"><span class="span-1">Add to Cart </span><span class="span-2">${item.title}</span> </p>
                  <i class="bi bi-plus-square"></i>
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
            price: "3",
            discount: "10",
            name: "dairy milk",
          title: "The price shown is for 0.5 L."
          },
          {
            id: 42,
            image: "milk2",
            price: "5",
            discount: "15",
            name: "milk",
          title: "The price shown is for 1 L."
          },
          {
            id: 43,
            image: "milk3",
            price: "5",
            discount: "5",
            name: "Fresh Milk",
          title: "The price shown is for 1 L."
          },
          {
            id: 44,
            image: "milk4",
            price: "6",
            discount: "5",
            name: "Triangle Cheese",
          title: "The price shown is for 0.5 g."
          },
          {
            id: 45,
            image: "milk5",
            price: "7",
            discount: "15",
            name: "Roman Cheese",
          title: "The price shown is for 0.5 g."
          },
          {
            id: 46,
            image: "milk6",
            price: "10",
            discount: "5",
            name: "Cheddar Cheese",
          title: "The price shown is for 0.5 g."
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
                  <p style="display:inline;"><span class="span-1">Add to Cart </span><span class="span-2">${item.title}</span> </p>
                  <i class="bi bi-plus-square"></i>
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
              price: "6",
              discount: "10",
              name: "flour",
          title: "The price shown is for 1 Kg."
            },
            {
              id: 52,
              image: "flour2",
              price: "7",
              discount: "15",
              name: "White Flour",
          title: "The price shown is for 1 Kg."
            },
            {
              id: 53,
              image: "rice1",
              price: "5",
              discount: "5",
              name: "Barjel",
          title: "The price shown is for 1 Kg."
            },
            {
              id: 54,
              image: "rice2",
              price: "4",
              discount: "5",
              name: "Rice",
          title: "The price shown is for 1 Kg."
            },
            {
              id: 55,
              image: "mac1",
              price: "3",
              discount: "15",
              name: "Chinese noodles",
          title: "The price shown is for 1 Kg."
            },
            {
              id: 56,
              image: "mac2",
              price: "3",
              discount: "5",
              name: "Indomie",
          title: "The price shown is for 1 Kg."
            },
            {
              id: 57,
              image: "mac3",
              price: "4",
              discount: "5",
              name: "pasta",
          title: "The price shown is for 1 Kg."
            },
            {
              id: 58,
              image: "mac4",
              price: "3",
              discount: "5",
              name: " Cup noodles",
          title: "The price shown is for 1 Kg."
            },
            {
              id: 59,
              image: "mac5",
              price: "5",
              discount: "15",
              name: "Spaghetti",
          title: "The price shown is for 1 Kg."
            },
            {
              id: 60,
              image: "mac6",
              price: "4",
              discount: "5",
              name: "Baked Pasta",
          title: "The price shown is for 1 Kg."
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
                  <p style="display:inline;"><span class="span-1">Add to Cart </span><span class="span-2">${item.title}</span> </p>
                  <i class="bi bi-plus-square"></i>
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
              price: "6",
              discount: "10",
              name: "Ariel",
          title: "The price shown is for 1 Kg."
            },
            {
              id: 72,
              image: "arial2",
              price: "6",
              discount: "15",
              name: "Tide",
          title: "The price shown is for 1 Kg."
            },
            {
              id: 73,
              image: "arial3",
              price: "7",
              discount: "5",
              name: "Ariel Scented",
          title: "The price shown is for 1 Kg."
            },
            {
              id: 74,
              image: "arial4",
              price: "9",
              discount: "5",
              name: "Ariel Gel",
          title: "The price shown is for 1 Kg."
            },
            {
              id: 75,
              image: "arial5",
              price: "2",
              discount: "15",
              name: "Dove",
          title: "The price shown is for Piece."
            },
            {
              id: 76,
              image: "arial6",
              price: "3",
              discount: "5",
              name: "Conditioner",
          title: "The price shown is for 0.5 Kg."
            },
            {
              id: 77,
              image: "arial7",
              price: "1",
              discount: "5",
              name: "Soap",
          title: "The price shown is for Piece."
            },
            {
              id: 78,
              image: "arial8",
              price: "2",
              discount: "5",
              name: "Soap Camay",
          title: "The price shown is for Piece."
            },
            {
              id: 79,
              image: "arial9",
              price: "3",
              discount: "15",
              name: "Soap Dove",
          title: "The price shown is for Piece."
            },
            {
              id: 80,
              image: "arial10",
              price: "4",
              discount: "5",
              name: "Soap Dettol",
          title: "The price shown is for Piece."
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
                  <p style="display:inline;"><span class="span-1">Add to Cart </span><span class="span-2">${item.title}</span> </p>
                  <i class="bi bi-plus-square"></i>
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
               price: "5",
               discount: "10",
               name: "Corn flakes",
               title: "The price shown is for A bag"
             },
             {
               id: 92,
               image: "chips2",
               price: "3",
               discount: "15",
               name: "Cheetos",
               title: "The price shown is for A bag"
             },
             {
               id: 93,
               image: "chips3",
               price: "3",
               discount: "5",
               name: "Lay's Cheese",
               title: "The price shown is for A bag"
             },
             {
               id: 94,
               image: "chips4",
               price: "3",
               discount: "5",
               name: "lay's Salt",
               title: "The price shown is for A bag"
             },
             {
               id: 95,
               image: "chips5",
               price: "2",
               discount: "15",
               name: "Alooz",
               title: "The price shown is for A bag"
             },
             {
               id: 96,
               image: "chips6",
               price: "2",
               discount: "5",
               name: "Paprika",
               title: "The price shown is for A bag"
             },
             {
               id: 97,
               image: "chips7",
               price: "3",
               discount: "5",
               name: "chips spicy tomato",
               title: "The price shown is for A bag"
             },
             {
               id: 98,
               image: "chips8",
               price: "4",
               discount: "5",
               name: "Kezz",
               title: "The price shown is for A bag"
             },
             {
               id: 99,
               image: "chips9",
               price: "4",
               discount: "15",
               name: "Hof Laden",
               title: "The price shown is for A bag"
             },
             {
               id: 100,
               image: "chips10",
               price: "5",
               discount: "5",
               name: "Nantucket",
               title: "The price shown is for A bag"
             },
             {
               id: 101,
               image: "chips11",
               price: "1",
               discount: "5",
               name: "Oreo",
               title: "The price shown is for A bag"
             },
             {
               id: 102,
               image: "chips12",
               price: "1",
               discount: "5",
               name: "Kit kat",
               title: "The price shown is for A bag"
             },
             {
               id: 103,
               image: "chips13",
               price: "2",
               discount: "5",
               name: "ice cream Bocatto",
               title: "The price shown is for A bag"
             },
             {
               id: 104,
               image: "chips14",
               price: "1",
               discount: "5",
               name: "snickers",
               title: "The price shown is for A bag"
             },
             {
               id: 105,
               image: "chips15",
               price: "6",
               discount: "5",
               name: "pringles",
               title: "The price shown is for A bag"
             },
             {
               id: 106,
               image: "frezz1",
               price: "7",
               discount: "5",
               name: "tomato paste",
               title: "The price shown is for A bottle"
             },
             {
               id: 107,
               image: "frezz2",
               price: "9",
               discount: "5",
               name: "Mayonnaise",
               title: "The price shown is for A bottle"
             },
             {
               id: 108,
               image: "hony",
               price: "12",
               discount: "5",
               name: "honey",
               title: "The price shown is for A bottle"
             },
             {
               id: 109,
               image: "salt",
               price: "2",
               discount: "5",
               name: "salt",
               title: "The price shown is for 1 KG"
             },
             {
               id: 110,
               image: "suger1",
               price: "3",
               discount: "5",
               name: "suger",
               title: "The price shown is for 1 Kg"
             },
             {
               id: 111,
               image: "tomato",
               price: "6",
               discount: "5",
               name: "Ketchup",
               title: "The price shown is for A bottle"
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
                  <p style="display:inline;"><span class="span-1">Add to Cart </span><span class="span-2">${item.title}</span> </p>
                  <i class="bi bi-plus-square"></i>
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
    `<p class="p-items" style="padding:5px;">${item.name} - $${item.price}</p>`
  ).join('');
}

// إضافة event listener لكل عنصر
btnAddCart.forEach(button => {
  button.addEventListener("click", addX);
});
