
// زر العودة لأعلى
    const scrollToTopBtn = document.getElementById("scrollToTop");
    window.onscroll = function() {
        scrollToTopBtn.style.display = (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) ? "block" : "none";
    };
    
    scrollToTopBtn.addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

const username2 = localStorage.getItem("username");
 document.getElementById('user').textContent = username2;

 const userInfo = JSON.parse(localStorage.getItem('userInfo')) || {};
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    document.getElementById('user-info').innerHTML = `
      <span style=" font-size: 23px; color: #fff; font-weight: bold; margin: 20px;"><strong>الاسم:</strong> ${localStorage.getItem('username') || 'غير معروف'}</span>
      <span style=" font-size: 23px; color: #fff; font-weight: bold; margin: 20px;"><strong>الهاتف:</strong> ${localStorage.getItem('phone') || 'غير متوفر'}</span>
      <p style=" font-size: 23px; color: #fff; font-weight: bold; margin: 20px;"><strong>العنوان:</strong> ${localStorage.getItem('address') || 'غير متوفر'}</p>
      <div style="display: none;">
        <span id="sendername">${localStorage.getItem('username') || 'غير معروف'}</span>
        <span id="replyTo">medo03459@gmail.com</span>
        <span id="subject">فاتوره مينيو</span>
        <span id="message">اهلا ومرحبا بكم فى مطعم مينيو شكرا لاستخدامك خدمه مطعمنا سوف يتم التواصل معك قريبا لاستلام طلبك وهو كما موضح كالاتى 
            ${localStorage.getItem('cart')|| [] || 'غير معروف' }
        </span>
      </div>
    `;
function renderCart() {
  const tbody = document.querySelector('#cart-table tbody');
  tbody.innerHTML = '';
  let total = 0;
  
  cart.forEach((item, index) => {
    const row = document.createElement('tr');
    const totalItem = item.price * item.quantity;
    total += totalItem;
    
    // تحديد لون الصف حسب الفهرس (زوجي/فردي)
    row.className = index % 2 === 0 ? 'odd-row' : 'even-row';
    
    row.innerHTML = `
      <td>${item.text}</td>
      <td>${item.quantity}</td>
      <td>${item.price} L.E</td>
      <td>${totalItem} L.E</td>
      <td><button class="btn btn-danger" onclick="removeItem(${index})">إزالة <i class="bi bi-trash" style="font-size: 1rem; color: #fff;"></i></button></td>
    `;
    
    tbody.appendChild(row);
  });
  
  document.getElementById('total-price').textContent = `الإجمالي: ${total} L.E`;
}
  
 

    function removeItem(index) {
      cart.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(cart));
      renderCart();
    }

    function showEmailInput() {
      document.getElementById('email-section').classList.remove('hidden');
    }

    renderCart();



    ////////////////////////mailjs///////////////////////
function sendMail() {
    const email = document.getElementById('customer-email').value;
    if (!email) return alert('يرجى إدخال البريد الإلكتروني');

    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const orderDetails = cart.map(item => 
        `${item.text} - الكمية: ${item.quantity} - السعر: ${item.price * item.quantity}جنيه`
    ).join('\n');

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    // emailjs.init("DGeDlkpkremAshZ9G");
    emailjs.init("5lHMXpcGuc52IQgst");

    const customerParams = {
        sendername: localStorage.getItem('username') || 'عميل',
        to: email,
        replyTo: "monamena910@gmail.com",
        subject: "فاتورة طلب من مطعم مينيو",
         message: `تفاصيل الطلب:
            ${orderDetails}
              الإجمالي ${total}جنيه:
            🌹 شكراً لاختيارك مطعمنا
            سوف يتم التواصل معك في أقرب وقت لاستلام الطلب
            ❤️بالهنا والشفا
            `
    };

    const ownerParams = {
        sendername: localStorage.getItem('username') || 'عميل',
        to: "monamena910@gmail.com",
        subject: "طلب جديد من العميل: " + (localStorage.getItem('username') || 'عميل'),
         replyTo: "monamena910@gmail.com",
          message: `تفاصيل الطلب:
            ${orderDetails}
              الإجمالي ${total}جنيه:
            🌹 شكراً لاختيارك مطعمنا
            سوف يتم التواصل معك في أقرب وقت لاستلام الطلب
            ❤️بالهنا والشفا

            name:  ${localStorage.getItem('username') || 'غير معروف'} 
            ${localStorage.getItem('phone') || 'غير متوفر'} التليفون 
            ${localStorage.getItem('address') || 'غير متوفر'} العنوان
            ${email} الميل

            `
    };

    const serviceID = "service_xsbqpga";
    // const templateID = "template_oyyme7i";
    const templateID = "template_7k1s8k3";

    // إرسال للعميل
    emailjs.send(serviceID, templateID, customerParams)
    .then(() => {
        // بعد نجاح الإرسال للعميل، ابعت نسخة للمطعم
        return emailjs.send(serviceID, templateID, ownerParams);
    })
    .then(() => {
        alert('تم إرسال الفاتورة بنجاح!');
        localStorage.removeItem('cart');
        window.location.href = 'home.html';
    })
    .catch(err => {
        console.error('Error sending email:', err);
        alert('حدث خطأ أثناء إرسال البريد، يرجى المحاولة مرة أخرى');
    });
}
/////////////////////////

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

