import "./VytvorKniznicaPage.css";
import { useEffect, useState } from 'react';
import { sendPostRequest } from "../../utils/fetch";

async function vytvorKniznica(appContext, name, popis) {
    let result = await sendPostRequest("/api/kniznicaCreate", {name: name, popis: popis})
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
        vytvorKniznica(appContext, formMeno, formPopis);
    }

    function handleClickSpat(e) {
        appContext.changeRoute("kniznice/KniznicePage", null)
    }
   
    return (
        <div>
            <form>
                <div>
                    <h1>Kniznica</h1>
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
                    <button onClick={handleClickVytvor} style={{marginRight: "10px"}}>
                        vytvor
                    </button>
                    <button onClick={handleClickSpat}>
                        spat
                    </button>
                </div>
                
            </form>
        </div>
    )
  
}

export default VytvorKniznicaPage;

