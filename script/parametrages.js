(function() {
    imports('./../components/')
    navigate('statistiques')
})();

function navigate(page) {
    fetch('./../layouts/' + page + '.html')
        .then(response => response.text())
        .then(content => {
            document.getElementById('root').innerHTML = content;
        })
        .catch(error => console.error('Erreur de chargement de la page externe:', error));
}