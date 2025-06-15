import { useEffect } from "react";
import gsap from "gsap";
import SplitText from "../src/libs/SplitText"; // عدّل المسار حسب مكان الملف

gsap.registerPlugin(SplitText);

export default function MyComponent() {
  useEffect(() => {
    gsap.set("#ltr-trans", { opacity: 1 });
    let split = SplitText.create("#ltr-trans", { type: "chars" });

    gsap.from(split.chars, {
      y: 20,
      autoAlpha: 0,
      stagger: 0.07,
    });
  }, []);

  return <div id="ltr-trans"></div>;
}
///////////////////////////////////////////////////////////
 // عرض أو إخفاء الزر حسب موضع التمرير
        window.onscroll = function() {
            const scrollToTopBtn = document.getElementById("scrollToTopBtn");
            if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                scrollToTopBtn.style.display = "flex";
            } else {
                scrollToTopBtn.style.display = "none";
            }
        };

        // عند النقر على الزر، الانتقال إلى أعلى الصفحة بسلاسة
        document.getElementById("scrollToTopBtn").addEventListener("click", function() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });