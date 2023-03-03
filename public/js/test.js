let anchor = document.getElementById("testGet");
    anchor.addEventListener("click", (event) => {
        event.preventDefault();
        console.log("click2");
        console.dir(event);

    })
let button = document.getElementById("testPost_button");
    button.addEventListener("click", (event) => {
        event.preventDefault();
        console.log("click on button2");
        console.dir(event);

    })