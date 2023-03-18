import logo from './logo.svg';
import "./css/main.css";
import ErrorMessage from "./ErrorMessage";
import {sendGetRequest} from "./utils/fetch";
import { useEffect, useState } from 'react';
import {sendPostRequest} from "./utils/fetch";


async function readUser() {
    let user = await sendGetRequest("/api/user");
    return user
}

async function login(userName, password, setUser) {
    let user = await sendPostRequest("/api/login", {userName: userName, password: password})
    setUser(user);
}

function App() {

  let [ user, setUser ] = useState(null);
  let [ formUserName, setFormUserName ] = useState(null);
  let [ formPassword, setFormPassword ] = useState(null);

  useEffect(() => {
    readUser();
  }, []);

  function handleChangeFormUserName(e) {
    setFormUserName(e.target.value);
  }

  function handleChangeFormPassword(e) {
    setFormPassword(e.target.value);
  }

  function handleSubmitButton(e) {
    e.preventDefault();
    console.log(formUserName);
    console.log(formPassword);
    login(formUserName, formPassword, setUser);
  }

  if (user){
    return (
        <div>
            <h1> This is main page </h1>
             <div>
                {JSON.stringify(user)}
             </div>
        </div>
    )
  } else {
    return (
        
    <div className="container-for-login">
            <ErrorMessage></ErrorMessage>
            {JSON.stringify(user)}
            <form id="login-Form" className="login-Form">
                <div className="header-container">
                    <h1>Prihlasenie</h1>
                </div>
                <div className="lable-container">
                  <div style={{marginBottom: "20px"}}>
                        <label htmlFor="userName" style= {{display: "block"}}>Uzivatelske meno:</label>
                        <input type="text" id="userNameId" name="userName" onChange={handleChangeFormUserName}></input>
                    </div>
                    <div style={{marginBottom: "20px"}}>
                        <label htmlFor="userPassword" style= {{display: "block"}}>Heslo:</label>
                        <input type="password" id="userPasswordId" name="userPassword" onChange={handleChangeFormPassword}></input>
                    </div>
                </div>
                <div className="button-container">
                    <button id="loginSubmitButtonId" onClick={handleSubmitButton}>
                        prihlasit sa
                    </button>
                </div>
            </form>
        </div>
  );
  }

  
}

export default App;

