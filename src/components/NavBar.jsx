import React from "react";
import Card from "./card";
import CardList from "./CardList";
import { useState } from "react";
import App from "../App";

function NavBar ({count}) {

    
 
return(
    <>
        <header className="bordure">
            <h1>WILD CODE SCHOOL SHOP</h1>
            <img src="https://www.bordeaux.fr/images/ebx/fr/organisme/99941/2/imageSpec/673414/image/wildcodeschool2_1.jpg"/>

            {count}

        </header>

    </>
)
}

export default NavBar;


