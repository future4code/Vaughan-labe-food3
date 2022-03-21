import React from "react";
import { CardProduct, ImgProduct, ProductDescription, ProductPrice, ProductTitle, TextProduct } from "./styled";

const DetalhesProdutosCard = (props) => {
    
    return (
        <CardProduct>
            <ImgProduct src={props.photoUrl} alt={props.name}/>
            <TextProduct>
                <ProductTitle>{props.name}</ProductTitle>
                <ProductDescription>{props.description}</ProductDescription>
                <ProductPrice>R${props.price}</ProductPrice>                
            </TextProduct>            
        </CardProduct>
    )
};

export default DetalhesProdutosCard;