import "./App.css";
import {sendGetRequest} from "./utils/fetch";
import { useEffect, useState } from 'react';
import Login from "./login/Login"
import Header from "./header/Header"
import Footer from "./footer/Footer"
import Router from "./pages/Router";
import { useAppContext } from "./appContext";
import ErrorMessage from "./ErrorMessage";


async function readUser(setUser) {
    let user = await sendGetRequest("/api/user");
    setUser(user);
    return user
}



function App() {

  let appContext = useAppContext();
  let [ user, setUser ] = useState(null);

  useEffect(() => {
    readUser(setUser);
  }, []);

  if (user){
    return (
        <div className="App-container">
        <Header user={user} setUser={setUser}></Header>
        <ErrorMessage appContext={appContext}></ErrorMessage>
        <Router appContext={appContext}></Router>
        <Footer></Footer>
        </div>
    )
  } else {
    return (
      <div className="App-container">
        <ErrorMessage appContext={appContext}></ErrorMessage>
        <Login setUser={setUser} appContext={appContext}></Login>
        
    </div>
  );
  }

  
}

export default App;

