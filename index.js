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