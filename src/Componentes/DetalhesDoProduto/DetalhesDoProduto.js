import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BotoesLogado from "../BotoesLogado/BotoesLogado";
import {useProtecao} from "../useProtecao/useProtecao";
import DetalhesProdutosCard from './DetalhesProdutosCard'
import { Body, RestaurantInfo } from "./styled";

const DetalhesDoProduto= () => {
    useProtecao();

    useEffect(()=>{
        getRestaurantsDetails()
    },[])

    const params = useParams()

    const [restaurant, setRestaurant] = useState([])

    const [menu, setMenu] = useState([])

    async function getRestaurantsDetails  () { 
        const token= localStorage.getItem("token");
        const header={
            headers:{
              "auth": token,
              "Content-Type": "application/json"
            }
          }

        axios.get(`https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/restaurants/${params.id}`, header)
    .then((res) => {
        setRestaurant(res.data.restaurant)
        setMenu(res.data.restaurant.products)})
    .catch((err) => {console.log(err.data)})
    }
    
  const menuCard = menu.map((product) => {
    return (
      <DetalhesProdutosCard
        key={product.id}
        name={product.name}
        category={product.category}
        price={product.price}
        description={product.description}
        photoUrl={product.photoUrl}
      />
    )
  })


    return (
        <Body>
            <p>Restaurante</p>
            <BotoesLogado/>
            
            <RestaurantInfo>
                <img src={restaurant.logoUrl} alt={restaurant.name}/>
                <h3>{restaurant.name}</h3>
                <p>{restaurant.category}</p>
                <div>
                  <p>{restaurant.deliveryTime} min</p>
                  <p>Frete R${restaurant.shipping},00</p>
                </div>                
                <p>{restaurant.address}</p> 
            </RestaurantInfo>

            {menuCard}
            
        </Body>
    )
};


export default DetalhesDoProduto;