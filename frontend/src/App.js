import "./App.css";
import {sendGetRequest} from "./utils/fetch";
import { useEffect, useState } from 'react';
import Login from "./login/Login"
import Header from "./header/Header"
import Footer from "./footer/Footer"
import Router from "./pages/Router";


async function readUser(setUser) {
    let user = await sendGetRequest("/api/user");
    setUser(user);
    return user
}



function App() {

  let [ user, setUser ] = useState(null);
  let [ currentRoute, setCurrentRoute ] = useState({routeName: "kniznice/KniznicePage", routeParams: null});

  useEffect(() => {
    readUser(setUser);
  }, []);

  function changeRoute(routeName, routeParams) {
    setCurrentRoute({routeName: routeName, routeParams: routeParams})
  }

  if (user){
    return (
        <div className="App-container">
        <Header user={user} setUser={setUser}></Header>
        <Router routeName={currentRoute.routeName} routeParams={currentRoute.routeParams} changeRoute={changeRoute}></Router>
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

