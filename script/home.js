(function() {
    imports('./components/')
})();

function gotoPret(simulation) {
    document.location.href = './page/formulaire_pret.html' + (simulation ? "?simulation=true" : "")
}