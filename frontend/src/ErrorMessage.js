import "./ErrorMessage.css";
import { useState } from 'react';

function ErrorMessage() {

  const [isOpen, setIsOpenFn] = useState(true);

  function hidePageErrorMessageBox() {
    console.log("clicked here");
    setIsOpenFn(false);
  }

  if (isOpen === true) {
    return (
      <div id="page-error-message-box" className="ErrorMessage-error-container">
                    <div id="page-error-message-box-message">
                        This is error message!
                        This is error message!
                        This is error message!
                        This is error message!
                        This is error message!
                        This is error message!
                        This is error message!
                    </div>
                    <div className="ErrorMessage-exit-button" onClick = {hidePageErrorMessageBox}>
                        <span className="material-symbols-outlined">
                        close
                        </span>
                    </div>
     </div>
    );
  } else {
    return (<></>)
  }
}



export default ErrorMessage;
