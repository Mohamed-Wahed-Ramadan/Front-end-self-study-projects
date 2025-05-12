let username = document.getElementById("username");
let password = document.getElementById("password");
let phone = document.getElementById("phone");
let address = document.getElementById("address");
let signinBtn =document.getElementById("btn-up") ;

const inputs = document.querySelectorAll('.form-input');

function checkFields() {
  let allFilled = true;
  inputs.forEach(input => {
    if (input.value.trim() === '') {
      allFilled = false;
    }
  });

  if (allFilled) {
    signinBtn.classList.add('enabled');
    signinBtn.disabled = false;
    signinBtn.style.cursor = 'pointer';
  } else {
    signinBtn.classList.remove('enabled');
    signinBtn.disabled = true;
    signinBtn.style.cursor = 'not-allowed';
  }
}

inputs.forEach(input => {
  input.addEventListener('input', checkFields);
});


signinBtn.addEventListener('click', function () {
    if (!signinBtn.disabled ) {
      // خزن البيانات في localStorage
      localStorage.setItem('username',username.value);
      localStorage.setItem('address', address.value);
      localStorage.setItem('password', password.value);
      localStorage.setItem('phone', phone.value);

      // روح لصفحة signin
      window.location.href = 'sighin.html';
    }
  });
  signinBtn.disabled = true;
  //////////////////////////////////////////////
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
  //////////////////////////
  const favicon = document.getElementById("favicon");

const setFavicon = () => {
  const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  favicon.href = isDarkMode ? './Menu_Logo_White.png' : './menu_logo_transparent.png';
};

setFavicon();

// لو المتصفح غير الوضع لاحقاً
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', setFavicon);
//////////////////////////////////

