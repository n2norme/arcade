import "./about.css";
import Typed from "typed.js";

document.addEventListener('DOMContentLoaded', () => {
    new Typed('#typed-text-1', {
        strings: ['Bienvenue', 'Découvrez le rétro gaming', 'Plongez dans l\'univers de l’arcade','Bienvenue'],
        typeSpeed: 50,
        backSpeed: 50,
        loop: false,
        showCursor: false,
        onComplete: (self) => {
            setTimeout(() => {
                self.reset();
            }, 2000);
        }
    });
});

// Fonction pour gérer l'affichage du bouton de retour en haut
function toggleBackToTopButton() {
    const backToTopButton = document.getElementById("back-to-top");
    if (backToTopButton) {
        if (window.scrollY > 50){
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    }
}

// Fonction pour gérer le défilement vers le haut
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Ajout des gestionnaires d'événements
window.addEventListener("scroll", toggleBackToTopButton);

const backToTopButton = document.getElementById("back-to-top");
if (backToTopButton) {
    backToTopButton.addEventListener("click", scrollToTop);
}
