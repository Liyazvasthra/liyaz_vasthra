/* ================= WHATSAPP AUTO MESSAGE ================= */

const whatsappButton = document.querySelector(".whatsapp-float");

if (whatsappButton) {
    whatsappButton.addEventListener("click", function () {
        this.href = "https://wa.me/919345776152?text=Hi%20Liyaz%20Vasthra,%20I%20saw%20your%20website%20and%20would%20like%20to%20enquire%20about%20stitching.";
    });
}


/* ================= FADE IN ANIMATION ================= */

const fadeElements = document.querySelectorAll(".section, .hero");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.2 });

fadeElements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all 0.8s ease";
    observer.observe(el);
});
