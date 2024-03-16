(function() {
    imports('./components/')
    document.addEventListener("scroll", (event) => {
        const header = document.querySelector('header');
        if (header) {
            header.setAttribute("aria-expanded", window.scrollY > 75)
        }
    })
})();

function gotoPret(simulation) {
    document.location.href = './page/formulaire_pret.html' + (simulation ? "?simulation=true" : "")
}