import "./KniznicePage.css";
import {sendGetRequest} from "../../utils/fetch";
import { useEffect, useState } from 'react';

//[{"id":"2d5404e4-77f3-4726-a5ed-1f8b0744e526","meno":"kniznica b","popis":"druha kniznica"},{"id":"7991c1be-cb43-43bc-a389-210bf4aef8e0","meno":"kniznica a","popis":"blablabla"},{"id":"bbc636e5-31e1-4744-9c84-1532bd69b2dc","meno":"kniznica c","popis":"tretia kniznica"}]


async function readKniznice(setKniznice) {
    let kniznice = await sendGetRequest("/api/kniznicaGetAll");
    setKniznice(kniznice);
}


  
  /*let fn = makehandleClickUprav(5);
  fn();*/

function KniznicaLine(kniznica, changeRoute) {
    function handleClickOtvor(){
        changeRoute("kniznica/KniznicaPage", null)
    }
    

    function makeHandleClickUprav (kniznicaId) {
        function handleClickUprav(){
          changeRoute("kniznice/EditKniznicaPage", {kniznicaId: kniznicaId})
        }
  
        return handleClickUprav;
    }

    function makeHandleClickVymaz (kniznicaId) {
        function handleClickVymaz(){
          changeRoute("kniznice/DeleteKniznicaPage", {kniznicaId: kniznicaId})
        }
  
        return handleClickVymaz;
    }
    return (
        <tr>
            <td>{kniznica.meno}</td>
            <td>{kniznica.popis}</td>
            <td>
                <div className="action-link-container">
                    <a href="#" onClick={handleClickOtvor}>otvor</a>
                    <a href="#" onClick={makeHandleClickUprav(kniznica.id)}>uprav</a>
                    <a href="#" onClick={makeHandleClickVymaz(kniznica.id)}>vymaz</a>
                </div>
            </td>
        </tr>
    )
}

function KniznicePage({appContext}) {

    let [ kniznice, setKniznice ] = useState([]);

    useEffect(() => {
        readKniznice(setKniznice);
    }, []);

    function handleClickButtonVytvorKniznice() {
        appContext.changeRoute("kniznice/VytvorKniznicaPage", null)
    }

  return (
    
    <div className="KniznicePage-container">
        <table className="KniznicePage-main-table">
            <caption><b>Zoznam kniznic</b></caption>
                <thead align="left">
                    <tr>
                        <th>meno</th>
                        <th>popis</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        kniznice.map(function (k) {
                            return KniznicaLine(k, appContext.changeRoute)
                        })
                    }
                </tbody>
        </table>
        <button className="button-submit" style={{width: "125px"}}onClick={handleClickButtonVytvorKniznice}>vytvor kniznicu</button>
    </div>
  );
}

  


export default KniznicePage;

