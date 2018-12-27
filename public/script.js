let button = document.getElementById('add')

button.addEventListener('click', event => {
    
    event.preventDefault()

    let title = document.querySelector('input[name="title"]').value
    let description = document.querySelector('input[name="description"]').value
    let link = document.querySelector('input[name="link"]').value

    let data = { title, description, link }

    console.log(data)
    fetch('/advertisement/save', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
})