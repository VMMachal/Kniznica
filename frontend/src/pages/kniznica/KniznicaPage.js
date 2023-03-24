import "./KniznicaPage.css";
import { useEffect, useState } from 'react';
import { sendGetRequest, sendPostRequest } from "../../utils/fetch";

async function readKniznica(id, setKniznica) {
    let kniznica = await sendGetRequest("/api/kniznicaGet", {id: id});
    setKniznica(kniznica);
}



function KniznicaPage({appContext}) {

    let [ kniznica, setKniznica ] = useState({});

    let kniznicaId = appContext.routeParams.kniznicaId;

    useEffect(() => {
        readKniznica(kniznicaId, setKniznica);
      }, []);
      
      function makeHandleClickStudenti (kniznicaId){
        function handleClickOtvor(e){
            e.preventDefault();
            appContext.changeRoute("student/StudentiPage", {kniznicaId: kniznicaId})
        }

        return handleClickOtvor;
    }

    function makeHandleClickKnihy (kniznicaId) {
        function handleClickUprav(e){
            e.preventDefault();
            appContext.changeRoute("knihy/KnihyPage", {kniznicaId: kniznicaId})
        }
  
        return handleClickUprav;
    }

    function handleClickSpat(e) {
        e.preventDefault();
        appContext.closeErrorMessage();
        appContext.changeRoute("kniznice/KniznicePage", null)
    }

    return (
        <div>
           
            <h1>Kniznica</h1>
            <div>{`${kniznica.meno}, ${kniznica.popis}`}</div>
            <div>
             <a href="#" onClick={makeHandleClickStudenti(kniznica.id)}>studenti</a>
             <a href="#" onClick={makeHandleClickKnihy(kniznica.id)}>knihy</a>
             <a href="#" onClick={handleClickSpat}>spat</a>
            </div>
        </div>
    )
  
}

export default KniznicaPage;

