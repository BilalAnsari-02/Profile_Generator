import React from "react"
import {createRoot} from "react-dom/client"
import Header from "./Header";
import ProfileGenerator from "./ProfileGenerator";
import "./style.css"
function App (){
    return(
        <>
        <Header/>
         <ProfileGenerator/>   
        </>
    )
}

const rootElement = document.querySelector(".root");
const root = createRoot(rootElement);

root.render(<App/>)