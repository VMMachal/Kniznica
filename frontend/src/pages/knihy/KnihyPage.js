import "./KnihyPage.css";
import { useEffect, useState } from 'react';
import { sendGetRequest, sendPostRequest } from "../../utils/fetch";

async function readKniznica(id, setKniznica) {
    let kniznica = await sendGetRequest("/api/kniznicaGet", {id: id});
    setKniznica(kniznica);
}



function KnihyPage({appContext}) {

    let [ kniznica, setKniznica ] = useState({});

    let kniznicaId = appContext.routeParams.kniznicaId;

    useEffect(() => {
        readKniznica(kniznicaId, setKniznica);
      }, []);
      
      function handleClickSpat(e) {
        e.preventDefault();
        appContext.closeErrorMessage();
        appContext.changeRoute("kniznica/KniznicaPage", {kniznicaId: kniznicaId})
    }


    return (
        <div>
           
            <h1>Knihy</h1>
            <div>{`Kniznica: ${kniznica.meno}, ${kniznica.popis}`}</div>
            <div>
             <a href="#" onClick={handleClickSpat}>spat</a>
            </div>
            
        </div>
    )
  
}

export default KnihyPage;

