import { useEffect, useState } from 'react';
import KniznicePage from "./kniznice/KniznicePage";
import VytvorKniznicaPage from "./kniznice/VytvorKniznicaPage";
import EditKniznicaPage from "./kniznice/EditKniznicaPage";
import DeleteKniznicaPage from "./kniznice/DeleteKniznicaPage";
import KniznicaPage from "./kniznica/KniznicaPage";
import { useAppContext } from '../appContext';




function Router({appContext}) {

    if (appContext.routeName === "kniznice/KniznicePage") {
        return (
            <KniznicePage appContext={appContext}></KniznicePage>
        )
    
    } 
    else if (appContext.routeName === "kniznice/VytvorKniznicaPage") {
        return (
            <VytvorKniznicaPage appContext={appContext}></VytvorKniznicaPage>
        )
    } 
    else if (appContext.routeName === "kniznice/EditKniznicaPage") {
        return (
            <EditKniznicaPage appContext={appContext}></EditKniznicaPage>
        )
    }
    else if (appContext.routeName === "kniznice/DeleteKniznicaPage") {
        return (
            <DeleteKniznicaPage appContext={appContext}></DeleteKniznicaPage>
        )
    }
    else if (appContext.routeName === "kniznica/KniznicaPage") {
        return (
            <KniznicaPage appContext={appContext}></KniznicaPage>
        )
    } else {
        return <div>Unknown route</div>
    }
}

export default Router;

