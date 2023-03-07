function sendGetRequest (url) {
    let promise = fetch(url, {
        method: "GET",
    })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      return data;
    })
    .catch((error) => {
     console.error("Error:", error);
    });
    return promise;
}

let anchor = document.getElementById("testGet");
    anchor.addEventListener("click", (event) => {
        event.preventDefault();
        
        sendGetRequest("/api").then((data)=>{
            console.log("@@@@@@@@@@@ cp 5000")
            console.dir(data);
        })

        console.log("click2");
        console.dir(event);
        const data = { username: "example" };
    })
let button = document.getElementById("testPost_button");
    button.addEventListener("click", (event) => {
        event.preventDefault();
        console.log("click on button2");
        console.dir(event);

    })
