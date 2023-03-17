
function sendGetRequest(url, params) {
    let urlWithParams;
    if (params) {
        let queryParams = new URLSearchParams(params);
        urlWithParams = `${url}?${queryParams.toString()}`;
    } else {
        urlWithParams = `${url}`;
    }

    let promise = fetch(urlWithParams, {
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

    sendGetRequest('/api/vypozickaGetHistoryOfVypozickaForStudent', {kniznicaId:"7991c1be-cb43-43bc-a389-210bf4aef8e0", studentId:"bde492e7-1902-4e34-a304-6e740d6729b2"}).then((data) => {
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
    let promise = sendPostRequest('/api/vypozickaVratenieKnihy', obj)
    promise.then((result) => {
        let elem = document.getElementById('testPost_result');
        elem.innerText = JSON.stringify(result);
    })

})

function hidePageErrorMessageBox() {
    let boxElem = document.getElementById('page-error-message-box');
    boxElem.style.display = 'none';
}