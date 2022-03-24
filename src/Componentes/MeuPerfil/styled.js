import styled from "styled-components";

export const ProfilePage=styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ContainerTitle=styled.div`
    border-bottom: 1px solid gray;
    width: 100%;
    text-align: center;
    margin: 10px;
    padding-bottom: 10px;
`;


export const Title=styled.span`
    font-family: Roboto;
    font-size: large;
    letter-spacing: -0.39px;
    color: black;
`;

export const CardUserDetails= styled.div`
    width: 90%;
    display:flex;
    justify-content: center;
    text-align: left;
    flex-direction:column;
    padding: 10px;
        >p{
            height: 1.125rem;
            margin: 2px;
            font-family: Roboto;
            font-size: 1rem;
            color: black;
        }
`;

export const CardUserAdress=styled.div`
    width: 90%;
    height: 4.75rem;
    padding: 1rem;
    display:flex;
    flex-direction:column;
`;

export const EnderecoCadastrado=styled.span`
    width: 16rem;
    height: 1.125rem;
    margin: 0 0 0.5rem;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #B5B9B9;
`;

export const Rua=styled.span`
    width: 16rem;
    height: 1.125rem;
    margin: 0.5rem 0 0;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: black;
`;

export const ContainerHistorico= styled.div`
    width: 90vw;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const HistoricoDePedidos= styled.span`
    font-family: Roboto;
    margin: 5px;
    padding: 5px;
    width: 100%;
    border-bottom: 1px solid #B8B8B8;
`;

export const ContainerTitleHistorico=styled.div`
    
    text-align:center;
    margin:auto;
`;

export const DivUserDetails= styled.div`
    width: 100%;
    display: flex;
`;

export const DivUserAdress= styled.div`
    width: 100%;
    background-color: #eee;
    display: flex;
`;

export const Imagem= styled.img`
    padding: 10px;    
    cursor: pointer;
`;

export const ContainerImagens= styled.div`
    width: 100vw;
    height: 5%;
    background-color: white;
    border-top: 1px solid #B8B8B8;
    display:flex;
    justify-content:space-evenly;
    padding: 10px;
    position:fixed;
    bottom:0px;
`;

export const Icones= styled.img`
    width:50px;
`;

