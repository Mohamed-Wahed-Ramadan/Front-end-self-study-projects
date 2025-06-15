// VerticalCarousel.js
import React, { useEffect, useRef } from "react";
import "./VerticalCarousel.css";
import gsap from "gsap";
import { Observer } from "gsap/Observer";

gsap.registerPlugin(Observer);

const imageUrls = [
"./img/w6.jpg",
"./img/w1.jpg",
"./img/w2.jpg",
"./img/w3.jpg",
"./img/w4.jpg",
"./img/w5.jpg",
"./img/w7.jpg",
"./img/w8.jpg",
];

const VerticalCarousel = () => {
  const carouselRef = useRef();
  const progress = useRef({ value: 0 });
  const radius = 250; // قللنا نصف القطر لتقريب المسافة بين الصور إلى حوالي 5px تقريباً

  useEffect(() => {
    const images = carouselRef.current.querySelectorAll(".carousel-image");

    Observer.create({
      target: carouselRef.current,
      type: "wheel,pointer",
      onPress: () => (carouselRef.current.style.cursor = "grabbing"),
      onRelease: () => (carouselRef.current.style.cursor = "grab"),
      onChange: (self) => {
        gsap.killTweensOf(progress.current);
        const delta = self.event.type === "wheel" ? self.deltaY * -0.0005 : self.deltaY * 0.05;
        gsap.to(progress.current, {
          duration: 2,
          ease: "power4.out",
          value: "+=" + delta
        });
      }
    });

    const animate = () => {
      images.forEach((image, index) => {
        const theta = index / images.length - progress.current.value;
        const y = -Math.sin(theta * Math.PI * 2) * radius;
        const z = Math.cos(theta * Math.PI * 2) * radius;
        image.style.transform = `translate3d(0px, ${y}px, ${z}px) rotateX(${360 * theta}deg)`;

        const c = Math.floor((index / images.length) * 360);
        image.style.background = `hsla(${c}, 90%, 50%, .6)`;
        image.style.zIndex = Math.floor(z);
      });
    };

    gsap.ticker.add(animate);
  }, []);

  return (
    <div className="carousel" ref={carouselRef}>
      {imageUrls.map((url, i) => (
        <div key={i} className="carousel-image">
          <img src={url} alt={`carousel-${i}`} style={{ width: "100%", height: "100%", borderRadius: "20px" }} loading="lazy" />
        </div>
      ))}
    </div>
  );
};

export default VerticalCarousel;
