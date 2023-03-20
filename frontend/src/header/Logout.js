import "./Logout.css";
import {sendPostRequest} from "../utils/fetch";

async function logout() {
    await sendPostRequest("/api/logout");
}

function Logout({user, setUser}) {

  function handleOnClick (e) {
    e.preventDefault();
    setUser(null);
    logout();
  }

  return (
        
    <div className="Logout-container">
        <span className="Logout-vitaj-container"> {`Vitaj ${user.username} !`} </span>
         <div className="Logout-link-container">
           <a href="#" className="Logout-link" onClick={handleOnClick}>odhlasit sa</a>
          </div>
    </div>
  );
}

  


export default Logout;

