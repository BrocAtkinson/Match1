import React from 'react';
import Card from "../card/Charectorcard"
import "../board/board.css"



const board = (props) => {
    return (
        <div>
    {props.images.map(obj => (
        <Card id = {obj.id} myfunk = {props.myfunk} image = {obj.image} />
    ))}     
        </div>
    );
};

export default board;

