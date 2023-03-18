import logo from './logo.svg';
import "./css/main.css";
import ErrorMessage from "./ErrorMessage";
import {sendGetRequest} from "./utils/fetch";
import { useEffect, useState } from 'react';

async function readUser() {
    let user = await sendGetRequest("/api/user");
    return user
}

function App() {

  let [ user, setUser ] = useState(null);
  let [ formUserName, setFormUserName ] = useState(null);
  let [ formPassword, setFormPassword ] = useState(null);

  /*useEffect(() => {
    readUser();
  }, []);*/

  function handleChangeFormUserName(e) {
    setFormUserName(e.target.value);
  }

  function handleChangeFormPassword(e) {
    setFormPassword(e.target.value);
  }

  function handleSubmitButton() {
    console.log(formUserName);
    console.log(formPassword);
  }

  return (
    <div className="container-for-login">
            <ErrorMessage></ErrorMessage>
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

export default App;

