import "./EditKniznicaPage.css";
import { useEffect, useState } from 'react';
import { sendGetRequest, sendPostRequest } from "../../utils/fetch";

async function readKniznica(id, setKniznica, setFormMeno, setFormPopis) {
    let kniznica = await sendGetRequest("/api/kniznicaGet", {id: id});
    setKniznica(kniznica);
    setFormMeno(kniznica.meno);
    setFormPopis(kniznica.popis);
}

async function updateKniznica(appContext, id, meno, popis) {
    let result = await sendPostRequest("/api/kniznicaUpdate", {id: id, meno: meno, popis: popis})
    if (result === null) {
        appContext.displayErrorMessage("Nastala chyba");
    } else {
        appContext.closeErrorMessage();
        appContext.changeRoute("kniznice/KniznicePage", null);
    }
}

function EditKniznicaPage({appContext}) {

    let kniznicaId = appContext.routeParams.kniznicaId;

    let [ kniznica, setKniznica ] = useState(null);

    let [ formMeno, setFormMeno ] = useState(null);
    let [ formPopis, setFormPopis ] = useState(null);

    useEffect(() => {
        readKniznica(kniznicaId, setKniznica, setFormMeno, setFormPopis);
      }, []);

    function handleChangeFormMeno(e) {
        e.preventDefault();
        setFormMeno(e.target.value);
    }

    function handleChangeFormPopis(e) {
        e.preventDefault();
        setFormPopis(e.target.value);
    }

    function handleClickZmen(e) {
        e.preventDefault();
        appContext.closeErrorMessage();
        updateKniznica(appContext, kniznica.id, formMeno, formPopis);
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
                    <h1>Kniznica - uprav</h1>
                </div>
                <div>
                  <div>
                        <label htmlFor="formMeno" style= {{display: "block"}}>Meno:</label>
                        <input type="text" name="formMeno" value={formMeno} onChange={handleChangeFormMeno}></input>
                    </div>
                    <div>
                        <label htmlFor="formPopis" style= {{display: "block"}}>Popis:</label>
                        <input type="text" name="formPopis" value={formPopis} onChange={handleChangeFormPopis}></input>
                    </div>
                </div>
                <div style= {{marginTop: "20px"}}>
                    <button onClick={handleClickZmen} className="button-submit">
                        zmen
                    </button>
                    <a href="#" onClick={handleClickSpat}>
                        spat
                    </a>
                </div>
                
            </form>
        </div>
    )
  
}

export default EditKniznicaPage;

