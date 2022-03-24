import React from "react";
import { CardRest, RestImg, RestName, RestShip, RestTime, TextRest, RestDetails} from "./styled";

const RestaurantCard= (props) => {
    
    return (
        <CardRest onClick={props.onClick}>
            <RestImg src={props.logoUrl} alt={props.name}/>
            <TextRest>
                <RestName>{props.name}</RestName>
                <RestDetails>
                    <RestTime>{props.deliveryTime} min</RestTime>
                    <RestShip>Frete R${props.shipping},00</RestShip>
                </RestDetails>                
            </TextRest>
            
        </CardRest>
    )
};

export default RestaurantCard;