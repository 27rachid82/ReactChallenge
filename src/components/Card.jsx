
import React from "react";
import { useState } from "react";
import data from "../data/data.json"

import CardList from "./CardList";

function Card({item,count,setCount}) {

    
    const countAdd = () => setCount(count+1);


    return (
    <>
        <div class="big">
            <article key={item.id} >
            <h2>{item.title}</h2>
            <p>{item.price}</p>
            <img className="image" src={item.image} alt={item.title} />
            <p>{item.description}</p>
            <p>{item.category}</p>

            <button onClick={countAdd}>Ajouter au panier</button>
            <p>{count}</p>

            </article>
            

        </div> 

        
    </>
)
       
      
}

export default Card;