import "./histoire.css";

// Fonction pour gérer l'affichage du bouton de retour en haut
function toggleBackToTopButton() {
    const backToTopButton = document.getElementById("back-to-top");
    const footer = document.getElementById("footer");

    if (backToTopButton && footer) {
        const footerPosition = footer.getBoundingClientRect().top;
        const screenBottom = window.innerHeight;

        // Afficher le bouton si l'utilisateur a défilé au-delà de 50px et que le footer n'est pas encore atteint
        if (window.scrollY > 50 && footerPosition > screenBottom){
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
