import "./Logout.css";


function Logout({user, setUser}) {

 

  return (
        
    <div className="Logout-container">
        <span className="Logout-vitaj-container"> {`Vitaj ${user.username} !`} </span>
           <a href="#" className="Logout-link">odhlasit sa</a>
    </div>
  );
}

  


export default Logout;

