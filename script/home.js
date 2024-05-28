(function() {
    imports('./')
    document.addEventListener("scroll", (event) => {
        const header = document.querySelector('header');
        if (header) {
            header.setAttribute("aria-expanded", window.scrollY > 75)
        }
    })
})();

function gotoPret(simulation) {
    if (!simulation) {
        const user = getUser()
        if (!user) {
            document.location.href = './page/login.html'
            return;
        }
    }
    document.location.href = './page/formulaire_pret.html' + (simulation ? "?simulation=true" : "")
}