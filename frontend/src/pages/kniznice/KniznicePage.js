import "./KniznicePage.css";
import {sendGetRequest} from "../../utils/fetch";
import { useEffect, useState } from 'react';

//[{"id":"2d5404e4-77f3-4726-a5ed-1f8b0744e526","meno":"kniznica b","popis":"druha kniznica"},{"id":"7991c1be-cb43-43bc-a389-210bf4aef8e0","meno":"kniznica a","popis":"blablabla"},{"id":"bbc636e5-31e1-4744-9c84-1532bd69b2dc","meno":"kniznica c","popis":"tretia kniznica"}]


async function readKniznice(setKniznice) {
    let kniznice = await sendGetRequest("/api/kniznicaGetAll");
    setKniznice(kniznice);
}

function KniznicaLine(kniznica, changeRoute) {
    function handleClickOtvor(){
        changeRoute("kniznica/KniznicaPage", null)
    }
    function handleClickUprav(){
        changeRoute("kniznice/EditKniznicaPage", null)
    }
    function handleClickVymaz(){
        changeRoute("kniznice/DeleteKniznicaPage", null)
    }

    return (
        <tr>
            <td>{kniznica.meno}</td>
            <td>{kniznica.popis}</td>
            <td>
                <div className="action-link-container">
                    <a href="#" onClick={handleClickOtvor}>otvor</a>
                    <a href="#" onClick={handleClickUprav}>uprav</a>
                    <a href="#" onClick={handleClickVymaz}>vymaz</a>
                </div>
            </td>
        </tr>
    )
}

function KniznicePage({routeParams, changeRoute}) {

    let [ kniznice, setKniznice ] = useState([]);

    useEffect(() => {
        readKniznice(setKniznice);
    }, []);

function handleClickButtonVytvorKniznice() {
    changeRoute("kniznice/VytvorKniznicaPage", null)
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
                            return KniznicaLine(k, changeRoute)
                        })
                    }
                </tbody>
        </table>
        <button className="KniznicePage-button-vytvor-kniznicu" onClick={handleClickButtonVytvorKniznice}>vytvor kniznicu</button>
    </div>
  );
}

  


export default KniznicePage;

