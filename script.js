const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open")

    const isOpen = navLinks.classList.contains("open")
    menuBtnIcon.setAttribute("class", isOpen?"ri-close-line":"ri-menu-line")
});

navLinks.addEventListener("click", (e) =>{
    navLinks.classList.remove("open")
    menuBtnIcon.setAttribute("class", "ri-menu-line")
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header-image img", {
    ...scrollRevealOption,
    origin: "right",
});
ScrollReveal().reveal(".header-content h1", {
    ...scrollRevealOption,
    delay: 500, 
});
ScrollReveal().reveal(".header-content .section-description", {
    ...scrollRevealOption,
    delay: 1000, 
});
ScrollReveal().reveal(".header-content .chefr-btn", {
    ...scrollRevealOption,
    delay: 1500, 
});


ScrollReveal().reveal(".explore-image img", {
    ...scrollRevealOption,
    origin: "right",
});
ScrollReveal().reveal(".explore-content  .section-header",{
    ...scrollRevealOption,
    delay: 500, 
});
ScrollReveal().reveal(".explore-content .section-description", {
    ...scrollRevealOption,
    delay: 1000, 
});
ScrollReveal().reveal(".explore-content .explore-btn", {
    ...scrollRevealOption,
    delay: 1500, 
});

ScrollReveal().reveal(".banner-card",{
    ...scrollRevealOption,
    interval: 500,

})

ScrollReveal().reveal(".chef-image img", {
    ...scrollRevealOption,
    origin: "right",
});
ScrollReveal().reveal(".chef-content .section-header", {
    ...scrollRevealOption,
    delay: 500, 
});
ScrollReveal().reveal(".chef-content .section-description", {
    ...scrollRevealOption,
    delay: 1000, 
});
ScrollReveal().reveal(".chef-list li", {
    ...scrollRevealOption,
    delay: 1500, 
    interval: 500,
});
ScrollReveal().reveal(".chef-bg", {
    ...scrollRevealOption,
    delay: 2000, 
    interval: 1000,
});
