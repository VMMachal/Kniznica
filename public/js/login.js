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
        let elem = document.getElementById('testPost_result');
        elem.innerText = JSON.stringify(result);
    })

})