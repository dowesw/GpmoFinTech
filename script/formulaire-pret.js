(function() {
    imports('./../')

    const searchParams = new URLSearchParams(document.location.search)
    if (JSON.parse(searchParams.get("simulation"))) {
        const button = document.querySelector('main form button')
        if (button) {
            button.classList.add("invisible")
        }
    }
})();