// Sélectionne le bouton de menu avec la classe "menu-btn" et le stocke dans la variable "menuBouton"
const menuBtn = document.querySelector(".menu-btn");
// Sélectionne la navigation avec la classe "navigation" et la stocke dans la variable "navigation"
const navigation = document.querySelector(".navigation");

// Ajoute un événement "click" au bouton de menu, qui va basculer les classes "active" du bouton de menu et de la navigation
menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});


// Sélectionne tous les boutons de navigation avec la classe "nav-btn" et les stocke dans la variable "btns"
const btns = document.querySelectorAll(".nav-btn");
// Sélectionne toutes les diapositives vidéo avec la classe "video-slide" et les stocke dans la variable "slides"
const slides = document.querySelectorAll(".video-slide");
// Sélectionne tous les contenus avec la classe "content" et les stocke dans la variable "contents"
const contents = document.querySelectorAll(".content");

const btnsheader = document.querySelectorAll(".buttonheader");

// Définit une fonction "sliderNav" qui prend un argument "manual"
const sliderNav = function(manual){
    // Supprime la classe "active" de tous les boutons de navigation
    btns.forEach((btn) => {
        btn.classList.remove("active");
    });
    // Supprime la classe "active" de toutes les diapositives vidéo
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });
    // Supprime la classe "active" de tous les contenus
    contents.forEach((content) => {
        content.classList.remove("active");
    });

    // Ajoute la classe "active" au bouton de navigation, à la diapositive vidéo et au contenu correspondant à l'argument "manual"
    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active");
}

// Ajoute un événement "click" à chaque bouton de navigation, qui appelle la fonction "sliderNav" avec l'indice du bouton en tant qu'argument
btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        sliderNav(i);
    });
});

btnsheader.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        sliderNav(i);
    });
});