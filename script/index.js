function imports(parent) {
    fetch(parent + 'header.html')
        .then(response => response.text())
        .then(content => {
            document.getElementById('header').innerHTML = content;
        })
        .catch(error => console.error('Erreur de chargement de la page externe:', error));

    fetch(parent + 'footer.html')
        .then(response => response.text())
        .then(content => {
            document.getElementById('footer').innerHTML = content;
        })
        .catch(error => console.error('Erreur de chargement de la page externe:', error));
}