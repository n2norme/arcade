import "./gallery.css";
import "../assets/Images/debut.jpg";
import "../assets/Images/debut2.jpg";
import "../assets/Images/debut3.jpg";
import "../assets/Images/decoupe.jpg";
import "../assets/Images/decoupe2.jpg";
import "../assets/Images/decoupe3.jpg";
import "../assets/Images/decoupe4.jpg";
import "../assets/Images/decoupe5.jpg";
import "../assets/Images/decoupe6.jpg";
import "../assets/Images/final.jpg";
import "../assets/Images/final2.jpg";
import "../assets/Images/final3.jpg";
import "../assets/Images/metalslug.jpg";
import "../assets/Images/mslug.jpg";
import "../assets/Images/mslug2.jpg";
import "../assets/Images/wii.jpg";
import "../assets/Images/trou.jpg";
import "../assets/Images/assemblage.jpg";
import "../assets/Images/assemblage2.jpg";
import "../assets/Images/assemblage3.jpg";
import "../assets/Images/deco.jpg";
import "../assets/Images/vid1.mp4";
import "../assets/Images/vid2.mp4";
import "../assets/Images/vid3.mp4";
import "../assets/Images/vid4.mp4";
import "../assets/Images/v5.mp4";
import "../assets/Images/v6.mp4";
import "../assets/Images/v7.mp4";
import "../assets/Images/v8.mp4";
import "../assets/Images/v9.mp4";



// JavaScript pour afficher l'image en plein écran
const modal = document.getElementById("fullscreen-modal");
const modalContent = document.getElementById("fullscreen-image");
const closeButton = document.querySelector(".close-button");

// Fonction pour ouvrir le modal en plein écran
function openFullscreen(imageSrc) {
    modalContent.src = imageSrc;
    modal.style.display = "block";
}

// Fonction pour fermer le modal en plein écran
function closeFullscreen() {
    modal.style.display = "none";
}

// Attacher des événements de clic aux images pour ouvrir en plein écran
const galleryImages = document.querySelectorAll(".gallery-item img");
galleryImages.forEach(img => {
    img.addEventListener("click", () => {
        openFullscreen(img.src);
    });
});

// Attacher un événement au bouton de fermeture
closeButton.addEventListener("click", closeFullscreen);

// Fermer le modal en cliquant en dehors de l'image
modal.addEventListener("click", function(event) {
    if (event.target === modal) {
        closeFullscreen();
    }
});



// Fonction pour gérer l'affichage du bouton de retour en haut
function toggleBackToTopButton() {
    const backToTopButton = document.getElementById("back-to-top");

    if (backToTopButton) {

        // Afficher le bouton si l'utilisateur a défilé au-delà de 50px
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