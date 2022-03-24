import styled from "styled-components";

export const HomeBody = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 17%;
font-family: roboto;
>p{
    border-bottom: 1px solid #B8B8B8;
    width: 100%;
    text-align: center;
    padding: 5px 0px 10px 0px ;
}
`
export const CardRest = styled.div`
display: flex;
flex-direction: column;
width: 85%;
height: 230px;
border: 1px solid #B8B8B8;
margin: 5px;
border-radius: 10px;

`
export const RestImg = styled.img`
height: 70%;
object-fit: cover;
border-top-left-radius: 10px;
border-top-right-radius: 10px;
`
export const RestName = styled.p`
font-size: larger;
color: #E8222E;
margin-bottom: 8px;
`
export const RestTime = styled.p`

`
export const RestShip = styled.p`

`
export const TextRest = styled.div`
display: flex;
flex-direction: column;
background-color: white;
margin-top: -15px;
padding: 15px;
width: 90.5%;

`
export const RestDetails = styled.div`
display: flex;
justify-content: space-between;
color: #B8B8B8;
`