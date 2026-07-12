const aboutLink = document.getElementById("about-link");
const homeLink = document.getElementById("home-link");
const projectsLink = document.getElementById("projects-link");

const aboutSection = document.getElementById("about");
const heroSection = document.getElementById("hero");
const projectsSection = document.getElementById("projects");

export function initSmoothScroll() {
    aboutLink.addEventListener("click", (e) => {
        e.preventDefault();
        aboutSection.scrollIntoView({ behavior: "smooth" });
    });
    homeLink.addEventListener("click", (e) => {
        e.preventDefault();
        heroSection.scrollIntoView({ behavior: "smooth" });
    });
    projectsLink.addEventListener("click", (e) => {
        e.preventDefault();
        projectsSection.scrollIntoView({ behavior: "smooth" });
    });
}