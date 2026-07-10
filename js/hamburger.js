export function initHamburger() {
  const menuBtn = document.getElementById("header__menu-btn");
  const navList = document.getElementById("header__menu");

  menuBtn.addEventListener("click", () => {
    navList.classList.toggle("hamburger-menu-active");
    menuBtn.classList.toggle("ham_icon-active");
    const isOpen = navList.classList.contains("hamburger-menu-active");
    menuBtn.setAttribute("aria-expanded", isOpen);
  });

window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
      navList.classList.remove("hamburger-menu-active");
      menuBtn.classList.remove("ham_icon-active");
      menuBtn.setAttribute("aria-expanded", false);
    }
  });
}