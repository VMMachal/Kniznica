import { useEffect, useState } from 'react';
import KniznicePage from "./kniznice/KniznicePage";
import VytvorKniznicaPage from "./kniznice/VytvorKniznicaPage";
import EditKniznicaPage from "./kniznice/EditKniznicaPage";
import DeleteKniznicaPage from "./kniznice/DeleteKniznicaPage";
import KniznicaPage from "./kniznica/KniznicaPage";




function Router({routeName, routeParams, changeRoute}) {

    if (routeName === "kniznice/KniznicePage") {
        return (
            <KniznicePage routeParams={routeParams} changeRoute={changeRoute}></KniznicePage>
        )
    
    } 
    else if (routeName === "kniznice/VytvorKniznicaPage") {
        return (
            <VytvorKniznicaPage routeParams={routeParams} changeRoute={changeRoute}></VytvorKniznicaPage>
        )
    } 
    else if (routeName === "kniznice/EditKniznicaPage") {
        return (
            <EditKniznicaPage routeParams={routeParams} changeRoute={changeRoute}></EditKniznicaPage>
        )
    }
    else if (routeName === "kniznice/DeleteKniznicaPage") {
        return (
            <DeleteKniznicaPage routeParams={routeParams} changeRoute={changeRoute}></DeleteKniznicaPage>
        )
    }
    else if (routeName === "kniznica/KniznicaPage") {
        return (
            <KniznicaPage routeParams={routeParams} changeRoute={changeRoute}></KniznicaPage>
        )
    } else {
        return <div>Unknown route</div>
    }
}

export default Router;

