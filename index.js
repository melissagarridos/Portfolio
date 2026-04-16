document.getElementById("about").onclick = () => {
    window.location.href = "about.html";
};

const currentPage = window.location.pathname.split("/").pop() || "index.html";

const links = document.querySelectorAll(".header a");
const currentPage = window.location.pathname.split("/").pop();

links.forEach(link => {
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
        link.classList.add("active");
    }
});

// Form submit (hook into your backend / formspree / emailjs here)
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const required = this.querySelectorAll('[required]');
    let valid = true;

    required.forEach(el => {
        if (!el.value.trim()) {
            el.focus();
            el.style.borderColor = '#ff5757';
            valid = false;
        } else {
            el.style.borderColor = '';
        }
    });

    if (!valid) return;

    // ── Replace this block with your actual submission logic ──
    // e.g. fetch('/api/contact', { method:'POST', body: new FormData(this) })
    // ──────────────────────────────────────────────────────────
    const btn = this.querySelector('button[type="submit"]');
    btn.textContent = 'Sending...';
    btn.disabled = true;

    setTimeout(() => {
        document.getElementById('successMsg').style.display = 'block';
        btn.style.display = 'none';
        this.querySelectorAll('input, select, textarea').forEach(el => el.disabled = true);
    }, 800);
});