let productsDom3 = document.querySelector(".bagee");
let x = JSON.parse(localStorage.getItem("x")) ;


function drawProduct3() {
    let products3 = JSON.parse(localStorage.getItem("cartItems")) || [];

    let productsUi3 = products3.map((item) => {
        return `
        <div style="margin-top: 60px ;">
        <div class="baba">
          
            <div id="carCarousel${item.id}" class="carousel slide img-slides2" data-bs-ride="carousel" >
              <div class="back" style="text-align: right;">
                    <p style="color: goldenrod; font-size: 30px; font-weight: bold; text-align: center;">${item.price} $</p>
                    
                    <i class="bi bi-dash icons icon-plus" onclick="removeFromCart(${item.id})"></i>

                    <br>
                    <i class="bi bi-star-fill icons" onclick="addTofav(${item.id})" ></i>
                    <br>
                    <i class="bi bi-tag icons" >
                        <span style="font-size: 15px; color: rgb(50, 205, 50); display: block;">${item.dis}%</span>
                    </i>
            </div>      
              <div class="carousel-inner w-100 h-100" style="border-radius: 20px;">
                      <div class="carousel-item active w-100 h-100">
                        <img src="${item.img1}" class="d-block w-100 h-100" style="object-fit: fill;" alt="Car 1">
                      </div>
                      <div class="carousel-item w-100 h-100">
                        <img src="${item.img2}" class="d-block w-100 h-100" style="object-fit: fill;" alt="Car 1">
                      </div>
                      <div class="carousel-item w-100 h-100">
                        <img src="${item.img3}" class="d-block w-100 h-100" style="object-fit: fill;" alt="Car 1">
                      </div>
                    </div>
                  
                    <button class="carousel-control-prev" type="button" data-bs-target="#carCarousel${item.id}" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carCarousel${item.id}" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    </button>
            </div>
            </div>
            </div>
        `;
    })
    productsDom3.innerHTML = productsUi3;

    
};
drawProduct3();

function updateCartDisplay() {
    let cartProductionDom = document.querySelector(".cart-product p");
    cartProductionDom.innerHTML = ''; // مسح المحتوى الحالي

    // جلب العناصر من localStorage
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    cartItems.forEach(item => {
        cartProductionDom.innerHTML += `<p>${item.title}</p>`;
    });
}


function removeFromCart(id) {
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    let filteredItems = cartItems.filter(item => item.id !== id);
    localStorage.setItem("cartItems", JSON.stringify(filteredItems));
    updateCartDisplay(cartItems);
    drawProduct3(); // عشان تحدث الصفحة بعد الحذف
    x-- ;
    $(".icon-cart-num").html(x); 
    localStorage.setItem("x", x);
    
}

// عند النقر على زر تسجيل الخروج
$(".logout-btn").click(function() {
  // مسح جميع البيانات من localStorage
  localStorage.clear();
  
  // توجيه المستخدم إلى صفحة تسجيل الدخول
  window.location.href = "sign in.html";
});