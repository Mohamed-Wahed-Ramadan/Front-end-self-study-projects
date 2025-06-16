const darkModeSwitch = document.getElementById('darkModeSwitch');

// تحقق من القيمة المحفوظة عند تحميل الصفحة
if (localStorage.getItem('darkMode') === 'true') {
  document.body.classList.add('bg-dark', 'text-white');
  document.body.classList.remove('bg-light', 'text-dark');
  darkModeSwitch.checked = true; // تفعيل التبديل إذا كان الوضع داكنًا
}

// استمع لتغيير التبديل وحفظ القيمة
darkModeSwitch.addEventListener('change', () => {
  const isDarkMode = darkModeSwitch.checked;
  
  // تطبيق الوضع الداكن/الفاتح
  document.body.classList.toggle('bg-dark', isDarkMode);
  document.body.classList.toggle('text-white', isDarkMode);
  document.body.classList.toggle('bg-light', !isDarkMode);
  document.body.classList.toggle('text-dark', !isDarkMode);
  
  // حفظ الوضع في localStorage
  localStorage.setItem('darkMode', isDarkMode);
});

////////////////////////////