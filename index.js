const filtre = document.querySelectorAll(".filtre-texte");
const lienNav = document.querySelectorAll(".nav-content");
const switcher = document.getElementById("switcher");

filtre.forEach(element => {
    element.addEventListener("click", () => {
        element.classList.toggle("filtre-texte-cliked");
    });
});

switcher.addEventListener("click", () => {
    switcher.style.transform = switcher.style.transform === "scaleX(-1)" ? "scaleX(1)" : "scaleX(-1)";    
});
