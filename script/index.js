(function() {

})();

function onConnect() {
    let body = getUser()
    const profile = document.querySelector('#profile')
    const btnlogin = document.querySelector('#btn-login')
    if (!!body) {
        btnlogin.classList.remove("visible")
        btnlogin.classList.add("invisible")

        profile.classList.remove("invisible")
        profile.classList.add("visible")
    } else {
        btnlogin.classList.remove("invisible")
        btnlogin.classList.add("visible")

        profile.classList.remove("visible")
        profile.classList.add("invisible")
    }
}

function imports(parent) {
    fetch(parent + 'header.html')
        .then(response => response.text())
        .then(content => {
            document.getElementById('header').innerHTML = content;
            onConnect()
        })
        .catch(error => console.error('Erreur de chargement de la page externe:', error));

    fetch(parent + 'footer.html')
        .then(response => response.text())
        .then(content => {
            document.getElementById('footer').innerHTML = content;
        })
        .catch(error => console.error('Erreur de chargement de la page externe:', error));
}

function handleLogOut() {
    sessionStorage.removeItem("user")
    localStorage.removeItem("user")
    document.location.href = "/"
}

function getUser() {
    let user = localStorage.getItem("user")
    if (!user) {
        user = sessionStorage.getItem("user")
    }
    return user;
}