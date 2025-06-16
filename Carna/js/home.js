$(document).ready(function () {
    let username = localStorage.getItem("username");

    if (username) {
        $(".user").text(username).show();
        $(".icon-cart").show();
        $(".logout-btn").show();

        $(".bees").hide();
    } else {
        $(".user").hide();
        $(".logout-btn").hide();
        $(".icon-cart").hide();
        $(".bees").show();
    }

    // ✅ قراءة x من localStorage (مع تحويلها لرقم وتعيين قيمة افتراضية 0)
    let x = parseInt(localStorage.getItem("x")) || 0;
    $(".icon-cart-num").html(x); // عرض القيمة الأولية

    // تحميل عناصر السلة من localStorage عند بدء التحميل
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    updateCartDisplay(cartItems);

    $(".bi-star-fill").click(function() {
        const currentColor = $(this).css("color");
        if (currentColor !== "rgb(215, 38, 56)") {
            $(this).css({ color: "#D72638" });
        } else {
            $(this).css({ color: "#00AEEF" });
        }
    });

    $(".bi-plus").click(function() {
        const currentColor = $(this).css("color");
        if (currentColor !== "rgb(50, 205, 50)") {
            $(this).css({ color: "rgb(50, 205, 50)", border: "1px solid rgb(50, 205, 50)" });
            x++; // زيادة القيمة
        } 
        $(".icon-cart-num").html(x); // تحديث العدد في الواجهة
        localStorage.setItem("x", x); // ✅ حفظ القيمة الجديدة في localStorage
    });

    $(".icon-cart").click(function() {
        if ($(".cart2list").css("display") === "none" && x !== 0) {
            $(".cart2list").css({ display: "block" });
        } else {
            $(".cart2list").css({ display: "none" });
        }
    });
});

// دالة لتحديث عرض عناصر السلة
function updateCartDisplay(cartItems) {
    let cartProductionDom = document.querySelector(".cart-product p");
    cartProductionDom.innerHTML = ''; // مسح المحتوى الحالي
    
    cartItems.forEach(item => {
        cartProductionDom.innerHTML += `<p>${item.title} `;
    });
}

let productsDom = document.querySelector(".amood1");
let products = [
    {
        id: 1,
        title: "car coube",
        price: "100.000",
        dis: "10",
        img1: "./img/car1.png",
        img2: "./img/car2.png",
        img3: "./img/car3.png"
    },
    {
        id: 2,
        title: "car suv",
        price: "150.000",
        dis: "12",
        img1: "./img/car11.png",
        img2: "./img/car12.png",
        img3: "./img/car13.png"
    },
    {
        id: 3,
        title: "motto 22",
        price: "105.000",
        dis: "16",
        img1: "./img/mot1.png",
        img2: "./img/mot2.png",
        img3: "./img/mot3.png"
    },
    {
        id: 4,
        title: "car 33",
        price: "140.000",
        dis: "17",
        img1: "./img/car41.png",
        img2: "./img/car42.png",
        img3: "./img/car43.png"
    },
    {
        id: 5,
        title: "car 44",
        price: "130.000",
        dis: "10",
        img1: "./img/car51.png",
        img2: "./img/car52.png",
        img3: "./img/car53.png"
    },
    {
        id: 6,
        title: "motto 55",
        price: "70.000",
        dis: "13",
        img1: "./img/mot21.png",
        img2: "./img/mot22.png",
        img3: "./img/mot23.png"
    },
    {
        id: 7,
        title: "motto goost",
        price: "155.000",
        dis: "13",
        img1: "./img/mot51.png",
        img2: "./img/mot52.png",
        img3: "./img/mot53.png"
    }
];

function drawProduct() {
    let productsUi = products.map((item) => {
        return `
        <div style="margin-top: 60px ;">
        <div class="baba">
          
            <div id="carCarousel${item.id}" class="carousel slide img-slides" data-bs-ride="carousel" >
            <div class="back" style="text-align: right;">
                    <p style="color: goldenrod; font-size: 30px; font-weight: bold; text-align: center;">${item.price} $</p>
                    <i class="bi bi-plus icons icon-plus " onclick="addToCart(${item.id})" ></i>
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
    }).join('');
    productsDom.innerHTML = productsUi;
};

let productsDom2 = document.querySelector(".amood2");
let products2 = [
  
    {
        id: 12,
        title: "car anan",
        price: "180.000",
        dis: "15",
        img1: "./img/car21.png",
        img2: "./img/car22.png",
        img3: "./img/car23.png"
    },
    {
        id: 13,
        title: "car wv",
        price: "90.000",
        dis: "9",
        img1: "./img/car31.png",
        img2: "./img/car32.png",
        img3: "./img/car33.png"
    },
    {
        id: 14,
        title: "motto fast",
        price: "170.000",
        dis: "11",
        img1: "./img/mot31.png",
        img2: "./img/mot32.png",
        img3: "./img/mot33.png"
    },
    {
        id: 15,
        title: "car MWK",
        price: "110.000",
        dis: "12",
        img1: "./img/car61.png",
        img2: "./img/car62.png",
        img3: "./img/car63.png"
    },
    {
        id: 16,
        title: "car Eyad",
        price: "200.000",
        dis: "13",
        img1: "./img/car71.png",
        img2: "./img/car72.png",
        img3: "./img/car73.png"
    },
    {
        id: 17,
        title: "car BMW",
        price: "175.000",
        dis: "15",
        img1: "./img/car81.png",
        img2: "./img/car82.png",
        img3: "./img/car83.png"
    },
    {
        id: 18,
        title: "motto spark",
        price: "125.000",
        dis: "15",
        img1: "./img/mot41.png",
        img2: "./img/mot42.png",
        img3: "./img/mot43.png"
    }
];

function drawProduct2() {
    let productsUi2 = products2.map((item) => {
        return `
        <div style="margin-top: 60px ;">
        <div class="baba">
          
            <div id="carCarousel${item.id}" class="carousel slide img-slides" data-bs-ride="carousel" >
            <div class="back" style="text-align: right;">
                    <p style="color: goldenrod; font-size: 30px; font-weight: bold; text-align: center;">${item.price} $</p>
                    <i class="bi bi-plus icons icon-plus " onclick="addToCart2(${item.id})" ></i>
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
    }).join('');
    productsDom2.innerHTML = productsUi2;
};
drawProduct();
drawProduct2();

function addToCart(id) {
    if (localStorage.getItem("username")) {
        let choosenItem = products.find((item) => item.id === id);
        console.log(choosenItem);

        // جلب عناصر السلة الحالية من localStorage
        let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        
        // إضافة العنصر الجديد إلى السلة
        cartItems.push({
            id: choosenItem.id,
            title: choosenItem.title,
            price: choosenItem.price,
            dis: choosenItem.dis,
            img1: choosenItem.img1,
            img2: choosenItem.img2,
            img3: choosenItem.img3
        });
        
        // حفظ السلة المحدثة في localStorage
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        
        // تحديث عرض السلة
        updateCartDisplay(cartItems);
        
        // زيادة العداد
        // let x = parseInt(localStorage.getItem("x")) || 0;
        // x++;
        // localStorage.setItem("x", x);
        // $(".icon-cart-num").html(x);
    }
}

function addToCart2(id) {
    if (localStorage.getItem("username")) {
        let choosenItem2 = products2.find((item) => item.id === id);
        console.log(choosenItem2);

        // جلب عناصر السلة الحالية من localStorage
        let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        
        // إضافة العنصر الجديد إلى السلة
        cartItems.push({
            id: choosenItem2.id,
            title: choosenItem2.title,
            price: choosenItem2.price,
            dis: choosenItem2.dis,
            img1: choosenItem2.img1,
            img2: choosenItem2.img2,
            img3: choosenItem2.img3
        });
        
        // حفظ السلة المحدثة في localStorage
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        
        // تحديث عرض السلة
        updateCartDisplay(cartItems);
        
        // زيادة العداد
        // let x = parseInt(localStorage.getItem("x")) || 0;
        // x++;
        // localStorage.setItem("x", x);
        // $(".icon-cart-num").html(x);
    }
}
// عند النقر على زر تسجيل الخروج
$(".logout-btn").click(function() {
    // مسح جميع البيانات من localStorage
    localStorage.clear();
    
    // توجيه المستخدم إلى صفحة تسجيل الدخول
    window.location.href = "sign in.html";
});