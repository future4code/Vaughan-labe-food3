import React from "react";

const RestaurantCard= (props) => {
    
    return (
        <div onClick={props.onClick} style={{border: 'solid 1px black', width: '200px'}}>
            <img src={props.logoUrl} alt={props.name} style={{width:'200px'}}/>
            <p>{props.name}</p>
            <p>{props.deliveryTime} min</p>
            <p>Frete R${props.shipping},00</p>
        </div>
    )
};

export default RestaurantCard;