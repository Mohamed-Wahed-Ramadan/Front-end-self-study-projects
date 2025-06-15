
/*!
 * SplitText: GSAP plugin for splitting HTML text into characters, words and lines.
 * Educational use only. For commercial use, get it from GreenSock Club.
 */
class SplitText {
  static create(target, vars = {}) {
    const element = typeof target === "string" ? document.querySelector(target) : target;
    if (!element) return;

    const type = vars.type || "chars";
    const text = element.textContent;
    const chars = text.split("");

    element.innerHTML = "";

    const charElements = chars.map((char) => {
      const span = document.createElement("span");
      span.style.display = "inline-block";
      span.innerHTML = char === " " ? "&nbsp;" : char;
      element.appendChild(span);
      return span;
    });

    return { chars: charElements };
  }
}

export default SplitText;
