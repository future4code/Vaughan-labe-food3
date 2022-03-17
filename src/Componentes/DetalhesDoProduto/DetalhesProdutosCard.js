import React from "react";

const DetalhesProdutosCard = (props) => {
    
    return (
        <div style={{border: 'solid 1px black', width: '200px'}}>
            <img src={props.photoUrl} alt={props.name} style={{width:'200px'}}/>
            <p>{props.name}</p>
            <p>{props.category}</p>
            <p>R${props.price},00</p>
            <p>{props.description}</p>
        </div>
    )
};

export default DetalhesProdutosCard;