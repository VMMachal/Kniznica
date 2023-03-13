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

    /*console.log(password)
    let obj = JSON.parse(txt)
    console.dir(obj)
    let promise = sendPostRequest('/api/vypozickaVratenieKnihy', obj)
    promise.then((result) => {
        let elem = document.getElementById('testPost_result');
        elem.innerText = JSON.stringify(result);
    })*/

})