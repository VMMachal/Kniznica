import "./Login.css";
import {sendGetRequest} from "../utils/fetch";
import { useEffect, useState } from 'react';
import {sendPostRequest} from "../utils/fetch";
import ErrorMessage from "../ErrorMessage";

async function login(userName, password, setUser, appContext) {
    let user = await sendPostRequest("/api/login", {userName: userName, password: password})
    setUser(user);
    if (user === null) {
      appContext.displayErrorMessage("Prihlasenie zlyhalo");
    } else {
      appContext.closeErrorMessage();
    }
}

function Login({setUser, appContext}) {

  let [ formUserName, setFormUserName ] = useState(null);
  let [ formPassword, setFormPassword ] = useState(null);

  function handleChangeFormUserName(e) {
    e.preventDefault();
    setFormUserName(e.target.value);
  }

  function handleChangeFormPassword(e) {
    e.preventDefault();
    setFormPassword(e.target.value);
  }

  function handleSubmitButton(e) {
    e.preventDefault();
    console.log(formUserName);
    console.log(formPassword);
    login(formUserName, formPassword, setUser, appContext);
  }

  return (
        
    <div className="Login-container-for-login">
            <form id="login-Form" className="Login-login-Form">
                <div className="Login-header-container">
                    <h1>Prihlasenie</h1>
                </div>
                <div className="Login-lable-container">
                  <div style={{marginBottom: "20px"}}>
                        <label htmlFor="userName" style= {{display: "block"}}>Uzivatelske meno:</label>
                        <input type="text" id="userNameId" name="userName" onChange={handleChangeFormUserName}></input>
                    </div>
                    <div style={{marginBottom: "20px"}}>
                        <label htmlFor="userPassword" style= {{display: "block"}}>Heslo:</label>
                        <input type="password" id="userPasswordId" name="userPassword" onChange={handleChangeFormPassword}></input>
                    </div>
                </div>
                <div className="Login-button-container">
                    <button id="loginSubmitButtonId" onClick={handleSubmitButton}>
                        prihlasit sa
                    </button>
                </div>
            </form>
        </div>
  );
}

  


export default Login;

