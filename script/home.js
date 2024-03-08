(function() {
    imports('./components/')
})();

function gotoPret(simulation) {
    document.location.href = './pages/formulaire_pret.html' + (simulation ? "?simulation=true" : "")
}