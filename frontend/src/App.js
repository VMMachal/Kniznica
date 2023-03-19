import "./css/main.css";
import ErrorMessage from "./ErrorMessage";
import {sendGetRequest} from "./utils/fetch";
import { useEffect, useState } from 'react';
import {sendPostRequest} from "./utils/fetch";
import Login from "./login/Login"
import Header from "./header/Header"


async function readUser() {
    let user = await sendGetRequest("/api/user");
    return user
}

function App() {

  let [ user, setUser ] = useState(null);

  useEffect(() => {
    readUser();
  }, []);


  if (user){
    return (
        <Header user={user}></Header>
    )
  } else {
    return (
        <Login setUser={setUser}></Login>
    
  );
  }

  
}

export default App;

