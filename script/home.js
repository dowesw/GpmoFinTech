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
    console.log(simulation)
    if (!simulation) {
        const user = getUser()
        console.log(user)
        if (!user) {
            document.location.href = './page/login.html'
            return;
        }
    }
    document.location.href = './page/formulaire_pret.html' + (simulation ? "?simulation=true" : "")
}