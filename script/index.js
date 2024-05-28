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
    fetch(parent + 'components/header.html')
        .then(response => response.text())
        .then(content => {
            document.getElementById('header').innerHTML = content;
            document.getElementById('header').setAttribute("data-parent", parent)
            document.getElementById('lnk-logo').href = parent
            document.getElementById('img-logo').src = parent + "assets/logo.png"
            document.getElementById('img-profile').src = parent + "assets/user.png"
            document.getElementById('btn-login').href = parent + "page/login.html"
            document.getElementById('lnk-profil').href = parent + "page/profil.html"
            document.getElementById('lnk-dashboard').href = parent + "page/dashboard.html"
            document.getElementById('lnk-parametrages').href = parent + "page/parametrages.html"
            onConnect()
        })
        .catch(error => console.error('Erreur de chargement de la page externe:', error));

    fetch(parent + 'components/footer.html')
        .then(response => response.text())
        .then(content => {
            document.getElementById('footer').innerHTML = content;
            document.getElementById('lnk-confidentialite').href = parent + "page/confidentialite.html"
            document.getElementById('lnk-contact').href = parent + "page/contact.html"
        })
        .catch(error => console.error('Erreur de chargement de la page externe:', error));
}

function handleLogOut() {
    const parent = document.getElementById('header').getAttribute("data-parent")
    console.log(parent)
    sessionStorage.removeItem("user")
    localStorage.removeItem("user")
    document.location.href = parent
}

function getUser() {
    let user = localStorage.getItem("user")
    if (!user) {
        user = sessionStorage.getItem("user")
    }
    return user;
}