import React from "react";
import "./card.css";
// do I do inline styling ?import ".css
// import { url } from "inspector";

const CharCard = ( props ) => (
    // <div className={`mdc-layout-grid__cell--span-3--order-${Number(id)}`}>
    <div>
        <div
        
            className="card"


        >
       <img src = {props.image} data-id = {props.id} onClick = {props.myfunk} />
        </div>
    </div>
)

export default CharCard