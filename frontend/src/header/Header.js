import "./Header.css";
import Logout from "./Logout"
import Banner from "./Banner"

function Header({user, setUser}) {

 

  return (
        
    <div className="Header-container">
        <Banner></Banner>
        <Logout user={user} setUser={setUser}></Logout>
    </div>
  );
}

  


export default Header;

