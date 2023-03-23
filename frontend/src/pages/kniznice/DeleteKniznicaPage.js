import "./DeleteKniznicaPage.css";
import { useEffect, useState } from 'react';
import { sendGetRequest, sendDeleteRequest } from "../../utils/fetch";



async function readKniznica(id, setKniznica, setFormMeno, setFormPopis) {
    let kniznica = await sendGetRequest("/api/kniznicaGet", {id: id});
    setKniznica(kniznica);
    setFormMeno(kniznica.meno);
    setFormPopis(kniznica.popis);
}

async function deleteKniznica(appContext, id) {
    let result = await sendDeleteRequest("/api/kniznicaDelete", {id: id})
    if (result === null) {
        appContext.displayErrorMessage("Nastala chyba");
    } else {
        appContext.closeErrorMessage();
        appContext.changeRoute("kniznice/KniznicePage", null);
    }
}

function DeleteKniznicaPage({appContext}) {

    let kniznicaId = appContext.routeParams.kniznicaId;

    let [ kniznica, setKniznica ] = useState(null);

    let [ formMeno, setFormMeno ] = useState(null);
    let [ formPopis, setFormPopis ] = useState(null);

    useEffect(() => {
        readKniznica(kniznicaId, setKniznica, setFormMeno, setFormPopis);
      }, []);

    function handleClickVymaz(e) {
        e.preventDefault();
        appContext.closeErrorMessage();
        deleteKniznica(appContext, kniznica.id);
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
                    <h1>Kniznica - vymaz</h1>
                </div>
                <div>
                  <div>
                        <label htmlFor="formMeno" style= {{display: "block"}}>Meno:</label>
                        <input type="text" name="formMeno" value={formMeno} disabled></input>
                    </div>
                    <div>
                        <label htmlFor="formPopis" style= {{display: "block"}}>Popis:</label>
                        <input type="text" name="formPopis" value={formPopis} disabled></input>
                    </div>
                </div>
                <div style= {{marginTop: "20px"}}>
                    <button onClick={handleClickVymaz} className="button-alert" style={{marginRight: "10px"}}>
                        vymaz
                    </button>
                    <a href="#" onClick={handleClickSpat}>
                        spat
                    </a>
                </div>
                
            </form>
        </div>
    )
  
}

export default DeleteKniznicaPage;

