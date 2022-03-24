import styled from "styled-components";

export const Body = styled.div`
width: 100vw;
display: flex;
flex-direction: column;
font-family: roboto;
align-items: center;
margin-bottom: 17%;
>p{
    border-bottom: 1px solid #B8B8B8;
    width: 100%;
    text-align: center;
    padding: 5px 0px 10px 0px ;
}
`

export const RestaurantInfo = styled.div`
display: flex;
width: 90%;
flex-direction: column;
font-family: roboto;
text-align: left;
padding:10px;
color: #B8B8B8;
>img{
    width: 100%;
    height: 100px;
    object-fit: cover;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}
>h3{
    color: #E8222E;
    margin: 4px;
}
>div{
    width: 60%;
    margin: 4px;
    display: flex;
    justify-content: space-between;
}
>p{
    margin: 4px;
}
`

export const CardProduct = styled.div`
display: flex;
width: 90vw;
margin: 10px;
border: 1px solid #B8B8B8;
border-radius: 10px;
`

export const ImgProduct = styled.img`
width: 30%;
height: 100px;
object-fit: cover;
border-top-left-radius: 10px;
border-bottom-left-radius: 10px;
`

export const TextProduct = styled.div`
display: flex;
flex-direction: column;
padding: 10px;
color: #B8B8B8;
`

export const ProductTitle = styled.p`
color: #E8222E;
font-weight: bold;
margin-bottom: 10px;
`
export const ProductDescription = styled.p`
`
export const ProductPrice = styled.p`
margin-top: 10px;
color: black;
font-size: large;
`