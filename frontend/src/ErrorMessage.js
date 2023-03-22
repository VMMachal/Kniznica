import "./ErrorMessage.css";
import { useState } from 'react';

function ErrorMessage({appContext}) {
  function handleOnClick(e) {
    e.preventDefault();
    appContext.closeErrorMessage();
  }

  if (appContext.isErrorMessageOpen === true) {
    
    return (
      <div id="page-error-message-box" className="ErrorMessage-error-container">
                    <div id="page-error-message-box-message">
                        {appContext.errorMessageText}
                    </div>
                    <div className="ErrorMessage-exit-button" onClick = {handleOnClick}>
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
