let anchor = document.getElementById("testGet");
    anchor.addEventListener("click", (event) => {
        event.preventDefault();
        console.log("click2");
        console.dir(event);
        const data = { username: "example" };

        fetch("/pokux.txt", {
            method: "GET",
        })
        .then((response) => response.text())
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
         console.error("Error:", error);
        });

    })
let button = document.getElementById("testPost_button");
    button.addEventListener("click", (event) => {
        event.preventDefault();
        console.log("click on button2");
        console.dir(event);

    })
