import "./VytvorKniznicaPage.css";
import { useEffect, useState } from 'react';
import { sendPostRequest } from "../../utils/fetch";

async function vytvorKniznica(appContext, meno, popis) {
    let result = await sendPostRequest("/api/kniznicaCreate", {meno: meno, popis: popis})
    if (result === null) {
      appContext.displayErrorMessage("Nastala chyba");
    } else {
        appContext.closeErrorMessage();
        appContext.changeRoute("kniznice/KniznicePage", null)
    }
}



function VytvorKniznicaPage({appContext}) {

    let [ formMeno, setFormMeno ] = useState(null);
    let [ formPopis, setFormPopis ] = useState(null);

    function handleChangeFormMeno(e) {
        e.preventDefault();
        setFormMeno(e.target.value);
    }

    function handleChangeFormPopis(e) {
        e.preventDefault();
        setFormPopis(e.target.value);
    }

    function handleClickVytvor(e) {
        e.preventDefault();
        appContext.closeErrorMessage();
        vytvorKniznica(appContext, formMeno, formPopis);
    }

    function handleClickSpat(e) {
        e.preventDefault();
        appContext.closeErrorMessage();
        appContext.changeRoute("kniznice/KniznicePage", null)
    }
   
    return (
        <div>
            <form>
                <div>
                    <h1>Kniznica - vytvor</h1>
                </div>
                <div>
                  <div>
                        <label htmlFor="formMeno" style= {{display: "block"}}>Meno:</label>
                        <input type="text" name="formMeno" onChange={handleChangeFormMeno}></input>
                    </div>
                    <div>
                        <label htmlFor="formPopis" style= {{display: "block"}}>Popis:</label>
                        <input type="text" name="formPopis" onChange={handleChangeFormPopis}></input>
                    </div>
                </div>
                <div style= {{marginTop: "20px"}}>
                    <button onClick={handleClickVytvor} className="button-submit">
                        vytvor
                    </button>
                    <a href="#" onClick={handleClickSpat}>
                        spat
                    </a>
                </div>
                
            </form>
        </div>
    )
  
}

export default VytvorKniznicaPage;

