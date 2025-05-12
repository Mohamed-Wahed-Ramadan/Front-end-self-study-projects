// ============== المتغيرات العامة ==============
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let cart = JSON.parse(localStorage.getItem('cart')) || [];
const username = localStorage.getItem("username") || "ضيف";

// ============== بيانات المنتجات الأساسية ==============
const productsData = {
   grilled: [
        { id: '1', img: './img/g1.png', price: '70', text: 'جوانح مشوية', discription: ' جوانح مشوية بطريقة مميزة مع البهارات الخاصة نص كيلو', amount: 0 },
        { id: '2', img: './img/g2.png', price: '90', text: 'وراك دجاج مشوي', discription: 'قطع وراك مشوية على الفحم ربع كيلو', amount: 0 },
        {
        id: '3' ,
        img: './img/g3.png',
        price: '190',
        text: 'فرخه كامله مشويه',
        discription: 'فرخه كامله مشويه متوسطه الوزن بالبهارات والتوابل المميزه على الجرير ',
        amount: 0 
    },
    {
        id: '4' ,
        img: './img/g4.png',
        price: '150',
        text: 'لحمه ستيك',
        discription: '  لحمه ستيك غنيه بالبروتين مشويه على الفحم بتوابل مميزه ربع كيلو',
        amount: 0 
    },
    {
        id: '5' ,
        img: './img/g5.png',
        price: '300',
        text: 'كباب مشوى على الفحم ',
        discription: 'كباب مشوى على الفحم بطعم رائع نص كيلو بتوابل خاصه ومعه الخطار المشوى وحلقات البصل المشويه على الفحم ',
        amount: 0 
    },
    {
        id: '6' ,
        img: './img/g6.png',
        price: '400',
        text: 'ورك نعام ',
        discription: 'ورك خروف مشويه على الفحم تحت الارض الحجم متوسط بالتوابل السفارى الخاصه ',
        amount: 0 
    },
    {
        id: '7' ,
        img: './img/g7.png',
        price: '250',
        text: 'كباب مشوى على الجريل',
        discription: ' كباب مشوى على الجريل بطعم رائع نص كيلو بتوابل خاصه ومعه الخطار المشوى وحلقات البصل المشويه على الجريل',
        amount: 0 
    },
    {
        id: '8' ,
        img: './img/g8.png',
        price: '300',
        text: 'طبق مشاوى مشكل',
        discription: 'طبق مشاوى مشكل نص كيلو به ممبار و3 طرب وسجق مشوى وريش ضانى  ',
        amount: 0 
    },
    {
        id: '9' ,
        img: './img/g9.png',
        price: '1000',
        text: 'فخده ضانى',
        discription: 'ورك خروف مشويه على الفحم تحت الارض الحجم متوسط بالتوابل السفارى الخاصه ',
        amount: 0 
    }
        
    ],
    appetizers: [
        // ... بيانات المقبلات
        {
        id: '11' ,
        img: './img/a1.png',
        price: '25',
        text: 'سلطه خطار',
        discription: 'سلطه خطار بتوابل مميزه ومظبوطه  (طماطم وفلفل وقطع جبنه وبصل وخل شبت وبقدونس وتوابل مميزه) ',
        amount: 0 
    },
    {
      id: '12' ,
      img: './img/a2.png',
      price: '60',
      text: 'سطله فواكه',
      discription: 'سلطه فواكه بعصير مميزه ومظبوط  (جوافه وموز ومانجه وفراوله وكيوى وتوت وبرتقال وعنب عصير مميزه)  ',
      amount: 0 
    },
    {
        id: '13' ,
        img: './img/a3.png',
        price: '20',
        text: 'مايونيز',
        discription: 'مايونيز بتتبيله خاصه من صنع المطعم طعمه جنان ',
        amount: 0 
    },
    {
        id: '14' ,
        img: './img/a4.png',
        price: '50',
        text: 'شربه عدس',
        discription: 'شربه عدس اصفر بالسمن البلدى والمزاق والقوام الرائع بتوابل خاصه وبخضروات طازجه ',
        amount: 0 
    },
    {
        id: '15' ,
        img: './img/a5.png',
        price: '70',
        text: 'شربه دجاج خاصه',
        discription: 'شوربه بقطع الدجاج بتتبيله وقوام فريدان من نوعهما خاصيين بالمطعم  ',
        amount: 0 
    },
    {
        id: '16' ,
        img: './img/a6.png',
        price: '150',
        text: 'شربه ماكولات بحريه',
        discription: 'شربه ماكولات بحريه غنيه بالفسفور بها بلح البحر وكابوريا وكافيار وجمبرى حجم متوسط بتتبيله مميزه ',
        amount: 0 
    },
    {
        id: '17' ,
        img: './img/a7.png',
        price: '20',
        text: 'سلطه طحينه',
        discription: 'سلطه طحينه على الطريقه الشاميه مصنوعه من الحمص بتوابل مميزه',
        amount: 0 
    },
    {
        id: '18' ,
        img: './img/a8.png',
        price: '20',
        text: 'بطاطس صوابع',
        discription: 'بطاطس صوابع مقرمشه لذيذه مقليه فى ويت نقى وبتوابل مميزه ',
        amount: 0 
    },
    {
        id: '19' ,
        img: './img/a9.png',
        price: '20',
        text: 'كاتشب',
        discription: 'كاتشب بتتبيله خاصه من اجود انواع الطماطم من صنع المطعم طعمه جنان  ',
        amount: 0 
    }
    ],
    seafood: [
        // ... بيانات الأسماك
        {
        id: '21' ,
        img: './img/f1.png',
        price: '250',
        text: 'جمبرى متوسط الحجم',
        discription: 'جمبرى متوسط الحجم مشوى نص كيلو بتتبيله مميزه ',
        amount: 0 
    },
    {
      id: '22' ,
      img: './img/f2.png',
      price: '300',
      text: 'سوشى',
      discription: 'سوشى 6 قطع كبار و 3 قطع صغيرين بتتبيله خاصه',
      amount: 0 
    },
    {
        id: '23' ,
        img: './img/f3.png',
        price: '100',
        text: 'سمك ماركيل مشوى',
        discription: 'سمكه مشويه وزن 350 جرام مشويه على الفحم بالسلطات والخطار  ',
        amount: 0 
    },
    {
        id: '24' ,
        img: './img/f4.png',
        price: '100',
        text: 'سمك بلطى',
        discription: 'سمكه مقليه وزن 350 جرام مشويه على الفحم بالسلطات والخطار',
        amount: 0 
    },
    {
        id: '25' ,
        img: './img/f5.png',
        price: '250',
        text: 'حبار حلقات',
        discription: 'حلقات حبار وزن نص كيلو بالتتبيله الخاصه ',
        amount: 0 
    },
    {
        id: '26' ,
        img: './img/f6.png',
        price: '400',
        text: 'سلمون',
        discription: 'قطعه سالمون وزن 400 جرام مشويه على الفحم بالسلطات والخطار السوتيه',
        amount: 0 
    },
    {
        id: '27' ,
        img: './img/f7.png',
        price: '250',
        text: 'سبيط مقلى',
        discription: 'سبيط مقلى وزن نص كيلو بالتتبيله الخاصه ',
        amount: 0 
    },
    {
        id: '28' ,
        img: './img/f8.png',
        price: '200',
        text: 'بلح البحر',
        discription: 'بلح بحر وزن 400 جرام بالتتبيله الخاصه وليمون خارجى ',
        amount: 0 
    },
    {
        id: '29' ,
        img: './img/f9.png',
        price: '300',
        text: 'استاكوزا',
        discription: 'استاكوزا كبيره الحجم وزن 700 جرام بالتتبيله الخاصه ',
        amount: 0 
    }
    ],
    pizza: [
        // ... بيانات البيتزا
         {
        id: '31' ,
        img: './img/p1.png',
        price: '100',
        text: 'بيتزا ميكس لحوم',
        discription: 'بيتزا ميكس لحوم حجم متوسط وزن 400 جرام باللحمه المفرومه والسجق والبسطرمه وميكس خفيف جبن وصلصه خاصه ',
        amount: 0 
    },
    {
      id: '32' ,
      img: './img/p2.png',
      price: '100',
      text: 'بيتزا ميكس جبن',
      discription: 'بيتزا ميكس جبن حجم متوسط وزن 400 جرام جبنه موتزريلا ورومى وبيضا وشيدر وقطع بسطرمه وصلصه خاصه',
      amount: 0 
    },
    {
        id: '33' ,
        img: './img/p3.png',
        price: '100',
        text: 'بيتزا ميكس لحوم وجبن',
        discription: 'بيتزا ميكس لحوم وميكس جبن حجم متوسط وزن 400 جرام باللحمه المفرومه والسجق وجبنه رومى وشيدر وموتزريلا وصلصه خاصه ',
        amount: 0 
    },
    {
        id: '34' ,
        img: './img/p4.png',
        price: '100',
        text: 'بيتزا ماشروم',
        discription: 'بيتزا ماشروم حجم متوسط وزن 400 جرام بالماشروم وميكس خفيف جبن وصلصه خاصه ',
        amount: 0 
    },
    {
        id: '35' ,
        img: './img/p5.png',
        price: '100',
        text: 'بيتزا مينيو الخاصه',
        discription: 'بيتزا ميكس جبن حجم متوسط وزن 400 جرام ميكس جبن خاصه وصلصه خاصه طعم جبار',
        amount: 0 
    },
    {
        id: '36' ,
        img: './img/p6.png',
        price: '150',
        text: 'بيتزا طاسه',
        discription: 'بيتزا طاسه متوسطه الحجم باللحمه المفرومه والتتبيله المميزه ',
        amount: 0 
    },
    {
        id: '37' ,
        img: './img/p7.png',
        price: '50',
        text: 'كريب ميكس جبن',
        discription: 'كريب ميكس جبن ولانشون جبنه شيدر وموتزريلا ',
        amount: 0 
    },
    {
        id: '38' ,
        img: './img/p8.png',
        price: '150',
        text: 'بيتزا طاسه',
        discription: 'بيتزا طاسه متوسطه الحجم بميكس جبن والتتبيله المميزه  ',
        amount: 0 
    },
    {
        id: '39' ,
        img: './img/p9.png',
        price: '100',
        text: 'بيتزا مستطيله',
        discription: 'بيتزا مستطيله متوسطه الحجم بميكس جبن موتزريلا وشيدر وبسطرمه ',
        amount: 0 
    }
    ],
    pastries: [
        // ... بيانات الفطائر
        {
        id: '41' ,
        img: './img/s1.png',
        price: '150',
        text: 'فطيره كرز',
        discription: 'فطيره كرز متوسطه الحجم  بها كرز قطع ومربى الكرز الخاصه  ',
        amount: 0 
    },
    {
      id: '42' ,
      img: './img/s2.png',
      price: '200',
      text: 'فطيره ميكس شوكولاته',
      discription: 'فطيره ميكس شكولاته ونتويلا متوسطه الحجم ',
      amount: 0 
    },
    {
        id: '43' ,
        img: './img/s3.png',
        price: '60',
        text: 'كريب حلو',
        discription: 'عدد 2 كريب حلو بصوص الشوكولاته الخاص  ',
        amount: 0 
    },
    {
        id: '44' ,
        img: './img/s4.png',
        price: '75',
        text: 'كريب شوكولاته وفراروله',
        discription: 'عدد 2 كريب شوكلاته وفراوله ',
        amount: 0 
    },
    {
        id: '45' ,
        img: './img/s5.png',
        price: '80',
        text: 'كرواسون',
        discription: 'كرواصون متوسط الحجم وزن نص كيلو بحشى بصوص الشوكولاته الخاصه ',
        amount: 0 
    },
    {
        id: '46' ,
        img: './img/s6.png',
        price: '100',
        text: 'رول جبنه وقشطه',
        discription: 'رول  جبنه وقشطه متوسطه الحجم بالجبنه الموتزريلا والفيتا والقشطه البلدى',
        amount: 0 
    },
    {
        id: '47' ,
        img: './img/s7.png',
        price: '60',
        text: 'رول لحمه',
        discription: 'عدد 1 رول لحمه مفرومه متوسط الحجم بالتتبيله الخاصه',
        amount: 0 
    },
    {
        id: '48' ,
        img: './img/s8.png',
        price: '100',
        text: 'هلله',
        discription: 'هلله وزن نص كيلو مكسى ميكس لحوم لحمه مفرومه وسجق ',
        amount: 0 
    },
    {
        id: '49' ,
        img: './img/s9.png',
        price: '70',
        text: 'كريب حادق',
        discription: 'عدد 1 كريب حادق وزن متوسط ميكس لحوم لحمه مفرومه وسجق وفراخ قطع بالتتبيله الخاصه وبعض الصوصات الجباره ',
        amount: 0 
    }
    ],
    desserts: [
        // ... بيانات الحلويات
         {
        id: '51' ,
        img: './img/c1.png',
        price: '50',
        text: 'كب كيك اوريو',
        discription: 'قطعه كب كيك اوريو وكريم كراميل وصوص شوكولاته ',
        amount: 0 
    },
    {
      id: '52' ,
      img: './img/c2.png',
      price: '50',
      text: 'كب كيك شوكولاته',
      discription: 'كب كيك بالشوكولاته والصوص الخاص وكريمه  ',
      amount: 0 
    },
    {
        id: '53' ,
        img: './img/c3.png',
        price: '30',
        text: 'كريم كراميل ',
        discription: 'كريم كراميل وجيلى  ',
        amount: 0 
    },
    {
        id: '54' ,
        img: './img/c4.png',
        price: '200',
        text: 'كيكه اوريو',
        discription: 'كيكه اوريو وشوكولاته حجم متوسط بالكريمه والصوصات الخاصه',
        amount: 0 
    },
    {
        id: '55' ,
        img: './img/c5.png',
        price: '300',
        text: 'تورته فواكه',
        discription: 'تورته متوسطه الحجم بالفواكه الطبيعيه تفاع وموز وبرتقال وجوز هند وكريمه خاصه',
        amount: 0 
    },
    {
        id: '56' ,
        img: './img/c6.png',
        price: '400',
        text: 'تورته ميكس شوكلت',
        discription: 'تورته شوكولاته ميكس متوسطه الحجم بقالب شوكولاته بيضا بحفر الاسم الخاص ',
        amount: 0 
    },
    {
        id: '57' ,
        img: './img/c7.png',
        price: '50',
        text: 'تراميسو',
        discription: 'تراميسو بالصوصات الخاصه و صوص الفراوله وقطع فراوله',
        amount: 0 
    },
    {
        id: '58' ,
        img: './img/c8.png',
        price: '50',
        text: 'ايس كريم فانيليا',
        discription: 'ايس كريم فانيليا 3 قطع بجوز الهند وصوصات خاصه',
        amount: 0 
    },
    {
        id: '59' ,
        img: './img/c9.png',
        price: '100',
        text: 'ايس كريم ميكس جامبو',
        discription: 'طبق بسكويت ايس كريم وايس كريم فراواله ومشكل وصوص شوكولاته مع اضافه مكسرات وكرز',
        amount: 0 
    }
    ],
    drinks: [
        // ... بيانات المشروبات
        {
        id: '61' ,
        img: './img/d1.png',
        price: '30',
        text: 'Monster can',
        discription: 'كانز مونستر مشروب طاقه  ومشروغ غازى  ',
        amount: 0 
    },
    {
      id: '62' ,
      img: './img/d2.png',
      price: '60',
      text: 'عصير كيوى',
      discription: 'عصير كيوى فريش مسكر بعسل النحل وصحى جدا ',
      amount: 0 
    },
    {
        id: '63' ,
        img: './img/d3.png',
        price: '40',
        text: 'عصير ليمون اخضر بنعناع',
        discription: 'عصير ليمون اخضر بنعناع فريش وتلج ',
        amount: 0 
    },
    {
        id: '64' ,
        img: './img/d4.png',
        price: '40',
        text: 'عصير برتقال',
        discription: 'عصير برتقال فريش وساقع',
        amount: 0 
    },
    {
        id: '65' ,
        img: './img/d5.png',
        price: '40',
        text: 'عصير فراوله بموز',
        discription: 'عصير ميكس فراوله وموز طازه وفريش وساقع ',
        amount: 0 
    },
    {
        id: '66' ,
        img: './img/d6.png',
        price: '40',
        text: 'عصير بطيخ',
        discription: 'عصير بطيخ طازه وفريش وساقع ',
        amount: 0 
    },
    {
        id: '67' ,
        img: './img/d7.png',
        price: '40',
        text: 'عصير ليمون اصفر بالنعناع',
        discription: 'عصير ليمون اصفر بالنعناع طازه وفريش وساقع بالتلج',
        amount: 0 
    },
    {
        id: '68' ,
        img: './img/d8.png',
        price: '40',
        text: 'عصير فراوله',
        discription: 'عصير  فراوله طازه وفريش وساقع ',
        amount: 0 
    },
    {
        id: '69' ,
        img: './img/d9.png',
        price: '50',
        text: 'عصير جومار',
        discription: 'عصير جومار طازه وفريش وساقع',
        amount: 0 
    },
    {
        id: '70' ,
        img: './img/d10.png',
        price: '20',
        text: 'شاى',
        discription: 'شاى سخن مظبوط بالنعناع سكر بره ',
        amount: 0 
    },
    {
        id: '71' ,
        img: './img/d11.png',
        price: '50',
        text: 'اسبريسو',
        discription: 'اسبريسو ايطالى باللبن طازه وسخن وبوش فورمه  ',
        amount: 0 
    },
    {
        id: '72' ,
        img: './img/d12.png',
        price: '60',
        text: 'قهوه',
        discription: 'قهوه برازيلى اصلى مظبوط ',
        amount: 0 
    },
    {
        id: '73' ,
        img: './img/d13.png',
        price: '40',
        text: 'كركديه',
        discription: 'كركديه فريش طازه سخن وسكر بره',
        amount: 0 
    }
    ]
};

// ============== الدوال الأساسية ==============
function displayProducts() {
    // تحديث بيانات المستخدم أولاً
    updateUserDisplay();

    for (const category in productsData) {
        // جلب المنتجات المحفوظة لهذا القسم
        const savedProducts = JSON.parse(localStorage.getItem(`products${category}`)) || [];
        
        // دمج المنتجات مع تجنب التكرار
        const allProducts = [...productsData[category]];
        savedProducts.forEach(savedProd => {
            if (!allProducts.some(prod => prod.id === savedProd.id)) {
                // إصلاح مسار الصورة للمنتجات المضافة
                // if (!savedProd.img.startsWith('./img/') && !savedProd.img.startsWith('http')) {
                //     savedProd.img = `./img/${savedProd.img}`;
                // }
                allProducts.push(savedProd);
            }
        });

        // عرض المنتجات
        const container = document.getElementById(`products-${category}`);
        if (!container) continue;

        container.innerHTML = '';
        allProducts.forEach(product => {
            const div = document.createElement('div');
            div.className = 'product';
            div.innerHTML = `
                <img class="pro-img" src="${product.img}" alt="${product.text}" loading="lazy">
                <span class="price">${product.price} L.E</span>
                <div class="go-to-cart">
                    <button class="btn-cart"
                        data-id="${product.id}" 
                        img="${product.img}"        
                        price="${product.price}"
                        text="${product.text}"
                        description="${product.discription}"
                        amount="${product.amount}">
                        أعرف اكثر
                    </button>
                </div>
                <div class="circle-container">
                    <svg viewBox="0 0 220 220" class="rotating-text">
                        <defs>
                            <path id="circlePath-${product.id}" d="M110,110 m-100,0 a100,100 0 1,1 200,0 a100,100 0 1,1 -200,0" />
                        </defs>
                        <text>
                            <textPath href="#circlePath-${product.id}">
                                ${product.text}
                            </textPath>
                        </text>
                    </svg>
                </div>
            `;
            container.appendChild(div);
        });
    }
    
    // إضافة أحداث أزرار "أعرف اكثر" بعد إنشاء العناصر
    setupProductButtons();
}

function updateUserDisplay() {
    const userElement = document.getElementById('user');
    if (userElement) {
        userElement.textContent = username;
    }
}

function setupProductButtons() {
    document.querySelectorAll('.btn-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productData = {
                id: this.getAttribute('data-id'),
                img: this.getAttribute('img'),
                price: this.getAttribute('price'),
                text: this.getAttribute('text'),
                discription: this.getAttribute('description'),
                amount: this.getAttribute('amount')
            };
            showProductModal(productData);
        });
    });
}

function mergeProducts(staticProducts, category) {
    const savedProducts = JSON.parse(localStorage.getItem(`products${category}`)) || [];
    return [...staticProducts, ...savedProducts.filter(sp => !staticProducts.some(p => p.id === sp.id))];
}

function showProductModal(product) {
    const modal = document.createElement('div');
    modal.className = 'product-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="slide">
                <div class="slide-prod d-flex">
                    <div class="my-div">
                        <div class="slide-img">
                            <img src="${product.img}" alt="${product.text}" loading="lazy">
                        </div>
                        <div class="slide-me" >
                            <h3 style="color: #333; font-weight: bold;">${product.text}</h3>
                            <p class="description" style="color:#fff; font-size:20px;">${product.discription}</p>
                        </div>
                        <div class="slide-you">
                            <span class="price br slide-price">${product.price} L.E</span>
                            <input type="number" class="quantity br slide-input" value="1" min="1">
                            <button class="add-to-cart br slide-btn" style="border-radius:20px;">شراء</button>
                            <i class="bi bi-star favorite-star ${favorites.includes(product.id) ? 'active' : ''} br slide-star" 
                              onclick='addToFavorites({
                                  id: "${product.id}",
                                  img: "${product.img}",
                                  text: "${product.text}",
                                  discription: "${product.discription}",
                                  price: "${product.price}"
                              })'></i>
                        </div>
                        <button class="close-btn slide-btn2 br">>></button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';

    // أحداث النافذة المنبثقة
    modal.querySelector('.close-btn').addEventListener('click', () => {
        modal.remove();
        document.body.style.overflow = 'auto';
    });

    // إدارة المفضلة
    const starIcon = modal.querySelector('.favorite-star');
    starIcon.addEventListener('click', function() {
        const index = favorites.indexOf(product.id);
        if (index === -1) {
            favorites.push(product.id);
            this.classList.add('active');
        } else {
            favorites.splice(index, 1);
            this.classList.remove('active');
        }
        localStorage.setItem('favorites', JSON.stringify(favorites));
    });

    // إدارة الكمية والسعر
    const quantityInput = modal.querySelector('.quantity');
    const priceElement = modal.querySelector('.price');
    
    quantityInput.addEventListener('change', function() {
        const totalPrice = parseInt(product.price) * parseInt(this.value);
        priceElement.textContent = `${totalPrice} L.E`;
    });

    // إضافة إلى السلة
    modal.querySelector('.add-to-cart').addEventListener('click', function() {
        const quantity = parseInt(quantityInput.value) || 1;
        addToCart(product, quantity);
        modal.remove();
        document.body.style.overflow = 'auto';
    });
}


function addToCart(product, quantity) {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            ...product,
            quantity: quantity
        });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    renderCartDropdown();
}

function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('num-cart').textContent = count;
}

function setupCartDropdown() {
    const cartIcon = document.querySelector('.bi-cart3');
    const cartDropdown = document.createElement('div');
    cartDropdown.className = 'cart-dropdown';
    cartDropdown.style.display = 'none';

    cartIcon.parentElement.appendChild(cartDropdown);

    cartIcon.addEventListener('click', function(e) {
        e.stopPropagation();
        if (cartDropdown.style.display === 'none') {
            renderCartDropdown();
            cartDropdown.style.display = 'block';
        } else {
            cartDropdown.style.display = 'none';
        }
    });

    document.addEventListener('click', function() {
        cartDropdown.style.display = 'none';
    });

    cartDropdown.addEventListener('click', function(e) {
        e.stopPropagation();
    });
}

function renderCartDropdown() {
    const cartDropdown = document.querySelector('.cart-dropdown');
    cartDropdown.innerHTML = '';
    
    if (cart.length === 0) {
        cartDropdown.innerHTML = '<p class="empty-cart">السلة فارغة</p>';
        return;
    }
    
    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.innerHTML = `
            <button class="remove-item" data-id="${item.id}">✕</button>
            <div class="item-info">
                <h4 style="color: #fff;">${item.text}</h4>
                <p class="total-price">${item.price} L.E × ${item.quantity}</p>
            </div>
        `;
        cartDropdown.appendChild(itemDiv);
    });
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const totalDiv = document.createElement('div');
    totalDiv.className = 'cart-total';
    totalDiv.innerHTML = `
        <p class="total-price"> Total: ${total} L.E </p>
        <a href="cart.html" class="checkout-btn">الذهاب إلى السلة</a>
    `;
    cartDropdown.appendChild(totalDiv);
    
    document.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            cart = cart.filter(item => item.id !== id);
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartCount();
            renderCartDropdown();
        });
    });
}

function setupUserDropdown() {
    const userElement = document.getElementById('user');
    const userDropdown = document.createElement('div');
    userDropdown.className = 'user-dropdown';
    userDropdown.style.display = 'none';

    userElement.parentElement.appendChild(userDropdown);

    userElement.addEventListener('click', function(e) {
        e.stopPropagation();
        if (userDropdown.style.display === 'none') {
            renderUserDropdown();
            userDropdown.style.display = 'block';
        } else {
            userDropdown.style.display = 'none';
        }
    });

    document.addEventListener('click', function() {
        userDropdown.style.display = 'none';
    });

    userDropdown.addEventListener('click', function(e) {
        e.stopPropagation();
    });
}

function renderUserDropdown() {
    const userDropdown = document.querySelector('.user-dropdown');
    userDropdown.innerHTML = `
        <a href="favorite.html" class="dropdown-item">المفضلة</a>
        <a href="cart.html" class="dropdown-item">السلة</a>
        ${username === 'admin' ? '<a href="admin.html" class="dropdown-item">لوحة التحكم</a>' : ''}
        <button class=" logout" >تسجيل الخروج</button>
    `;
    
    userDropdown.querySelector('.logout').addEventListener('click', function() {
        localStorage.clear();
        window.location.href = './signup.html';
    });
}

// ============== تهيئة الصفحة ==============
document.addEventListener('DOMContentLoaded', function() {
    // عرض اسم المستخدم والمنتجات
    updateUserDisplay();
    displayProducts();
    
    // تهيئة السلة
    setupCartDropdown();
    updateCartCount();
    
    // تهيئة قائمة المستخدم
    setupUserDropdown();
    
    // زر العودة لأعلى
    const scrollToTopBtn = document.getElementById("scrollToTop");
    if (scrollToTopBtn) {
        window.onscroll = function() {
            scrollToTopBtn.style.display = (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) ? "block" : "none";
        };
        
        scrollToTopBtn.addEventListener("click", function() {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
    
    // زر تغيير اللغة
    const changeLanguageBtn = document.getElementById("changeLanguage");
    if (changeLanguageBtn) {
        changeLanguageBtn.addEventListener("click", function() {
            const htmlElement = document.documentElement;
            const currentLang = htmlElement.getAttribute("lang");
            
            if (currentLang === "ar") {
                htmlElement.setAttribute("lang", "en");
                htmlElement.setAttribute("dir", "ltr");
                changeLanguageBtn.textContent = "AR";
            } else {
                htmlElement.setAttribute("lang", "ar");
                htmlElement.setAttribute("dir", "rtl");
                changeLanguageBtn.textContent = "EN";
            }
        });
    }
});

// تحديث الصفحة عند إضافة منتجات جديدة
window.addEventListener('storage', function(event) {
    if (event.key.startsWith('products')) {
        displayProducts();
    }
});

////////////////////////////////////////////////////////
// تأكد من تعريف هذه الدالة في النطاق العام
window.addToFavorites = function(product) {
    // جلب البيانات الحالية من localStorage أو إنشاء مصفوفة جديدة
    let mofadala = JSON.parse(localStorage.getItem('mofadala')) || [];
    
    // التحقق مما إذا المنتج موجود بالفعل
    const existingIndex = mofadala.findIndex(item => item.id === product.id);
    
    if (existingIndex === -1) {
        // إذا المنتج غير موجود، نضيفه
        mofadala.push(product);
        // إضافة كلاس active للعنصر
        event.target.classList.add('active');
    } else {
        // إذا المنتج موجود، نزيله
        mofadala.splice(existingIndex, 1);
        // إزالة كلاس active من العنصر
        event.target.classList.remove('active');
    }
    
    // حفظ البيانات المحدثة في localStorage
    localStorage.setItem('mofadala', JSON.stringify(mofadala));
    
    // يمكنك إضافة رسالة تأكيد إذا أردت
    console.log('تم تحديث المفضلة:', mofadala);
};

///////////////////////////////////////
const favicon = document.getElementById("favicon");

const setFavicon = () => {
  const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  favicon.href = isDarkMode ? './Menu_Logo_White.png' : './menu_logo_transparent.png';
};

setFavicon();

// لو المتصفح غير الوضع لاحقاً
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', setFavicon);
//////////////////////////////////


  const img = document.getElementById('floating-img');

  function moveImageRandomly() {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // حدد إحداثيات عشوائية داخل حدود الصفحة
    const x = Math.random() * (viewportWidth - 100); // 100 هامش من اليمين
    const y = Math.random() * (viewportHeight - 100); // 100 هامش من الأسفل

    img.style.left = `${x}px`;
    img.style.top = `${y}px`;
  }

  // حرك الصورة أول مرة
  moveImageRandomly();

  // كرر الحركة كل 2 ثانية
  setInterval(moveImageRandomly, 2000);

  // لو الصفحة اتغير حجمها
  window.addEventListener('resize', moveImageRandomly);
