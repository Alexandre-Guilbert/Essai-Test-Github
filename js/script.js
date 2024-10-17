// Sélectionne l'élément audio et le lien
const sound = document.getElementById('clickSound');
const link = document.getElementById('myLink');

// Ajoute un événement de clic sur le lien
link.addEventListener('click', function(event) {
    event.preventDefault();  // Empêche le lien de se comporter normalement si besoin
    sound.play();            // Joue le son
});
