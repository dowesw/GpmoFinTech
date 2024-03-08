const tabview = ["nui", "perso", "login", "contrat"]

function handleNext(event) {
    event.preventDefault()
    const parent = event.target.parentNode;
    const form = parent.classList.contains("col-2") ? parent.parentNode : parent;
    const cLass = form.classList[0];
    const nextClass = tabview[tabview.indexOf(cLass) + 1]
    const section = form.parentNode;
    const nextForm = section.querySelector("." + nextClass)
    if (nextForm) {
        form.classList.remove("active")
        nextForm.classList.add("active")
    }
}

function handlePrec(event) {
    event.preventDefault()
    const parent = event.target.parentNode;
    const form = parent.classList.contains("col-2") ? parent.parentNode : parent;
    const cLass = form.classList[0];
    const precClass = tabview[tabview.indexOf(cLass) - 1]
    const section = form.parentNode;
    const precForm = section.querySelector("." + precClass)
    if (precForm) {
        form.classList.remove("active")
        precForm.classList.add("active")
    }
}