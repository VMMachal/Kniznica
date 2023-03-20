import "./css/main.css";
import "./App.css";
import ErrorMessage from "./ErrorMessage";
import {sendGetRequest} from "./utils/fetch";
import { useEffect, useState } from 'react';
import {sendPostRequest} from "./utils/fetch";
import Login from "./login/Login"
import Header from "./header/Header"
import Footer from "./footer/Footer"
import KniznicePage from "./pages/kniznice/KniznicePage"


async function readUser(setUser) {
    let user = await sendGetRequest("/api/user");
    setUser(user);
    return user
}

function App() {

  let [ user, setUser ] = useState(null);

  useEffect(() => {
    readUser(setUser);
  }, []);


  if (user){
    return (
        <div className="App-container">
        <Header user={user} setUser={setUser}></Header>
        <KniznicePage></KniznicePage>
        <Footer></Footer>
        </div>
    )
  } else {
    return (
        <Login setUser={setUser}></Login>
    
  );
  }

  
}

export default App;

