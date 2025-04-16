const searchBtn = document.getElementById("search-btn");
const searchBox = document.querySelector(".search-box");

searchBtn.addEventListener("click", () => {
  searchBox.classList.toggle("expanded");
});

// إظهار الزر لما المستخدم ينزل تحت
window.onscroll = function () {
  const btn = document.getElementById("scrollTopBtn");
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

// لما يدوس على الزر يرجعه لأعلى الصفحة
document.getElementById("scrollTopBtn").addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
