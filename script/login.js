function login(event) {
    event.preventDefault()
    const email = event.target.querySelector("#email").value
    const password = event.target.querySelector("#password").value
    const stayonline = event.target.querySelector("#stayonline").checked
    const body = { name: "Dowes Mbella", email, password }
    if (stayonline) {
        localStorage.setItem("user", JSON.stringify(body))
    } else {
        sessionStorage.setItem("user", JSON.stringify(body))
    }
    document.location.href = "./../"
    return false;
}