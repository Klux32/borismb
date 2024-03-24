"use client"
import React, {useEffect, useState} from "react";
export const LimitedText = ({text}) => {

const [limit, setLimit] = useState(false)


return (
    <>
<div className={`card-text`} style={{height: limit? "100%": "150px", transition:"all 1s ease"}}>  
    {text}
</div>
<div className="text-center">
    <button onClick={()=>setLimit(!limit)} className="btn btn-outline-danger my-3">Prikaži{limit ? " manje" : " više"}</button>
</div>
</>
)
}