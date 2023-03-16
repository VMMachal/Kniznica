function hidePageErrorMessageBox() {
    let boxElem = document.getElementById('page-error-message-box');
    boxElem.style.display = 'none';
}

function displayPageErrorMessageBox(message) {
    let boxElem = document.getElementById('page-error-message-box');
    boxElem.style.display = 'flex';
    let messageElem = document.getElementById('page-error-message-box-message');
    messageElem.innerText = message;
}

function sendPostRequest(url, body) {
    hidePageErrorMessageBox();
    let promise = fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    })
        .then((response) => {
            console.log(response.status);
            if (response.status !== 200) {
                displayPageErrorMessageBox("prihlasenie zlyhalo");
                throw new Error ("prihlasenie zlyhalo");
            } 
            return response.json()
        })
        .then((data) => {
            console.log('Success:', data)
            return data
        })
        .catch((error) => {
            console.error('Error:', error)
            return null;
        })
    return promise
}

let button = document.getElementById('loginSubmitButtonId')

button.addEventListener('click', (event) => {
    event.preventDefault()

    console.log('click on login button')
    console.dir(event)

    let formElem = document.getElementById('login-Form')
    console.dir(formElem);

    let userNameElem = formElem.elements["userName"];
    let userPasswordElem = formElem.elements["userPassword"];
    console.log(userNameElem.value);
    console.log(userPasswordElem.value);
    let userName = userNameElem.value;
    let password = userPasswordElem.value;

    let obj = {
        userName: userName,
        password: password
    }
    let promise = sendPostRequest('/api/login', obj)
    promise.then((result) => {
        if (result === null) {
            return
        }
        window.location.href = '/'
    })

})