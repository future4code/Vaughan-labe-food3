import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import BotoesLogado from "../BotoesLogado/BotoesLogado";
import {useProtecao} from "../useProtecao/useProtecao";
import RestaurantCard from "./RestaurantCard";
import { HomeBody } from "./styled";

const Home= () => {
    
    useProtecao();

    const [restaurants, setRestaurants] = useState([])

    const navigate = useNavigate()

    useEffect(()=>{
        getRestaurants()
    },[])

    async function getRestaurants  () { 
        const token= localStorage.getItem("token");
        const header={
            headers:{
              "auth": token,
              "Content-Type": "application/json"
            }
          }

        axios.get('https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/restaurants', header)
    .then((res) => setRestaurants(res.data.restaurants))
    .catch((err) => {console.log(err.data)})
    }
    
    const goToRestaurantDetail = (navigate, id) => {
    navigate(`/detalhes/${id}`)
}

    const onClickCard = (id) => {
        goToRestaurantDetail (navigate, id)
      }

    
  const restaurantsCard = restaurants.map((restaurant) => {
    return (
      <RestaurantCard
        key={restaurant.id}
        name={restaurant.name}
        deliveryTime={restaurant.deliveryTime}
        shipping={restaurant.shipping}
        logoUrl={restaurant.logoUrl}
        onClick={()=> onClickCard(restaurant.id)}
      />
    )
  })

    return (
        <HomeBody>
            <p>Ifuture</p>
            <BotoesLogado/>
            {restaurantsCard}
        </HomeBody>
    )
};


export default Home;