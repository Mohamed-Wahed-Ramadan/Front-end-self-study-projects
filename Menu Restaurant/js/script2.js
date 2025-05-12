let username2 = document.getElementById("username2");
let password2 = document.getElementById("password2");
let signinBtn2 =document.getElementById("signinBtn2") ;


signinBtn2.addEventListener('click', function () {
    if (!signinBtn2.disabled ) {
      // خزن البيانات في localStorage
      let name1= localStorage.getItem('username');
      let pass1= localStorage.getItem('password');
     let name2= document.getElementById("username2").value;
     let pass2= document.getElementById("password2").value;

    if(name2 === name1 && pass1 === pass2){

        // روح لصفحة signin
        window.location.href = 'home.html';
    }else{
        alert("please enter the right value");
    }
    }
  });
//////////////////////////////
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
//////////////////////////////
const favicon = document.getElementById("favicon");

const setFavicon = () => {
  const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  favicon.href = isDarkMode ? './Menu_Logo_White.png' : './menu_logo_transparent.png';
};

setFavicon();

// لو المتصفح غير الوضع لاحقاً
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', setFavicon);
//////////////////////////////////
