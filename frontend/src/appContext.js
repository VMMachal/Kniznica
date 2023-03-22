import { useEffect, useState } from 'react';
import {sendGetRequest} from "./utils/fetch";




export function useAppContext() {

    let [ currentRoute, setCurrentRoute ] = useState({routeName: "kniznice/KniznicePage", routeParams: null});
    let [ isErrorMessageOpen, setIsErrorMessageOpen] = useState(false);
    let [ errorMessageText, setErrorMessageText] = useState("");

    function changeRoute(routeName, routeParams) {
        setCurrentRoute({routeName: routeName, routeParams: routeParams})
    }

    function displayErrorMessage(txt) {
        setIsErrorMessageOpen(true);
        setErrorMessageText(txt);
    }

    function closeErrorMessage() {
        setIsErrorMessageOpen(false);
        setErrorMessageText("");
    }

    let appContext = {
        routeName: currentRoute.routeName,
        routeParams: currentRoute.routeParams,
        changeRoute: changeRoute,
        displayErrorMessage: displayErrorMessage,
        isErrorMessageOpen: isErrorMessageOpen,
        errorMessageText: errorMessageText,
        closeErrorMessage: closeErrorMessage
    }
    return appContext
}  

