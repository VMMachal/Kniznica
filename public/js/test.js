function sendGetRequest(url) {
    let promise = fetch(url, {
        method: 'GET',
    })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data)
            return data
        })
        .catch((error) => {
            console.error('Error:', error)
        })
    return promise
}

function sendPostRequest(url, body) {
    let promise = fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data)
            return data
        })
        .catch((error) => {
            console.error('Error:', error)
        })
    return promise
}

let anchor = document.getElementById('testGet')
anchor.addEventListener('click', (event) => {
    event.preventDefault()

    sendGetRequest('/api').then((data) => {
        console.log('@@@@@@@@@@@ cp 5000')
        console.dir(data)
        let elem = document.getElementById('testGet_result')
        console.dir(elem)
        elem.innerText = JSON.stringify(data)
    })

    console.log('click2')
    console.dir(event)
    const data = { username: 'example' }
})

let button = document.getElementById('testPost_button')
let password = 'heslo'

button.addEventListener('click', (event) => {
    event.preventDefault()
    console.log('click on button2')
    console.dir(event)
    let txtElem = document.getElementById('testPost_json')
    let txt = txtElem.value
    console.log(password)
    let obj = JSON.parse(txt)
    console.dir(obj)
    sendPostRequest('/api/kniznicaCreate', obj)
})
