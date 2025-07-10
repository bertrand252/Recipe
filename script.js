//for  arrow
const btn = document.getElementById("scrollTopBtn");

window.onscroll = () => {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

// Scroll to top when clicked
btn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// for text
const text = "Bertrand's Recipe";
let i = 0;
const speed = 250;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typewriter").textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

// for fade in
window.addEventListener("DOMContentLoaded", typeWriter);

window.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("fade-in");
  });
  