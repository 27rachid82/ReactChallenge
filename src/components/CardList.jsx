import React from "react";
import data from "../data/data.json"
import Card from "./card";
import { useState } from "react";




function CardList () {
    const [count, setCount] = useState(0);
    

    return(
       <> 
<section>
        {data.map(item => (   
        
        <Card item={item} count={count} setCount={setCount}/>     

))}


</section>
        </>
    )


}

export default CardList;