
let auth = document.getElementById('auth')

auth.addEventListener('click', event => {

    event.preventDefault()

    let login = document.querySelector('input[name="login"]').value
    let password = document.querySelector('input[name="password"]').value

    let data = { login, password }

    fetch('/advertisement', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response => response.json())
        .then(redirect => window.location = redirect.redirect)
})